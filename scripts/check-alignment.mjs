// Needs Chrome started with --remote-debugging-port=9333 (see README).
// For every page and several widths: the content edge (box edge + its own padding) of the
// header, every full-width container and the footer must be identical.
const BASE = (process.argv[2] || "http://localhost:3002").replace(/\/$/, "");
const PORT = Number(process.env.CHROME_DEBUG_PORT || 9333);
const PAGES = ["/", "/platform", "/solutions", "/fleet-leasing", "/industries", "/integrations", "/deployment",
  "/services", "/company", "/resources", "/resources/erp-integration-checklist",
  "/resources/fleet-digital-transformation-guide", "/contact", "/sitemap", "/privacy", "/terms"];
const WIDTHS = [1920, 1440, 1366, 1024, 390];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const tab = await (await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: "PUT" })).json();
const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0; const pending = new Map();
ws.onmessage = (m) => { const msg = JSON.parse(m.data); if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); } };
const send = (method, params = {}) => new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
const evaluate = async (expression) => (await send("Runtime.evaluate", { expression, returnByValue: true })).result?.result?.value;
await send("Page.enable");
await send("Network.enable");
await send("Network.setBlockedURLs", { urls: ["*googletagmanager.com*", "*google-analytics.com*"] });

const MEASURE = `(() => {
  const els = [...document.querySelectorAll('[class*="max-w-7xl"], [class*="max-w-[77rem]"]')];
  return els.map((el) => {
    const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
    if (r.width === 0 || cs.display === "none") return null;
    return { where: el.closest("header") ? "header" : el.closest("footer") ? "footer" : "main",
             // a container that is itself a card (rounded, padded) aligns by its outer edge
             left: Math.round(r.left + (el.className.includes("rounded-3xl") ? 0 : parseFloat(cs.paddingLeft))), right: Math.round(r.right - (el.className.includes("rounded-3xl") ? 0 : parseFloat(cs.paddingRight))) };
  }).filter(Boolean);
})()`;

// Warm-up: the first navigation in a freshly started browser is unreliable, so spend it here.
await send("Page.navigate", { url: BASE + "/" });
await sleep(5000);

let bad = 0;
for (const width of WIDTHS) {
  await send("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: width < 600 });
  const summary = [];
  for (const p of PAGES) {
    await send("Page.navigate", { url: BASE + p });
    // wait until the page has actually rendered its containers (a cold first load can be slow)
    let m = [];
    // "complete" means the stylesheet has loaded too; measuring earlier reads unstyled HTML
    for (let tries = 0; tries < 60; tries++) {
      await sleep(500);
      if ((await evaluate("document.readyState + location.pathname")) === "complete" + p) break;
    }
    await sleep(300);
    m = (await evaluate(MEASURE)) || [];
    const lefts = [...new Set(m.map((x) => x.left))], rights = [...new Set(m.map((x) => x.right))];
    if (lefts.length !== 1 || rights.length !== 1) { bad++; summary.push(`${p} left=${lefts.join("/")} right=${rights.join("/")} (${m.length} containers)`); }
    else summary.push(null);
    if (p === "/") console.log(`${width}px  homepage: ${m.length} containers, content edge left=${lefts.join("/")} right=${rights.join("/")}`);
  }
  const problems = summary.filter(Boolean);
  console.log(`${width}px  ${problems.length === 0 ? "PASS  all 16 pages share one content edge" : "FAIL  " + problems.join(" | ")}`);
}
ws.close();
console.log(bad ? `\n${bad} page/width combinations misaligned` : "\nevery page aligned at every width");
process.exit(bad ? 1 : 0);


