// Drives headless Chrome over the DevTools protocol. Start Chrome first (see README):
//   chrome --headless=new --remote-debugging-port=9333 about:blank
// Google Analytics requests are blocked, so running this never records test traffic.
// Checks: consent/GA behaviour, horizontal overflow at phone width on every page,
// mobile menu open/Escape, desktop nav visibility at 1024px, solution deep links.
const BASE = (process.argv[2] || process.env.SITE_URL || "http://localhost:3002").replace(/\/$/, "");
const PORT = Number(process.env.CHROME_DEBUG_PORT || 9333);
const PAGES = ["/", "/platform", "/solutions", "/fleet-leasing", "/industries", "/integrations", "/deployment",
  "/services", "/company", "/resources", "/resources/erp-integration-checklist",
  "/resources/fleet-digital-transformation-guide", "/contact", "/sitemap", "/privacy", "/terms"];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function openTab() {
  const res = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: "PUT" });
  const tab = await res.json();
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0;
  const pending = new Map();
  ws.onmessage = (m) => {
    const msg = JSON.parse(m.data);
    if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
  };
  const send = (method, params = {}) =>
    new Promise((resolve) => { const i = ++id; pending.set(i, resolve); ws.send(JSON.stringify({ id: i, method, params })); });
  const evaluate = async (expression) => {
    const r = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
    return r.result?.result?.value;
  };
  const goto = async (url) => { await send("Page.navigate", { url }); await sleep(1800); };
  await send("Page.enable");
  // The test only needs to see the script TAG appear; block the actual requests so
  // no test traffic reaches the real Google Analytics property.
  await send("Network.enable");
  await send("Network.setBlockedURLs", { urls: ["*googletagmanager.com*", "*google-analytics.com*"] });
  return { send, evaluate, goto, close: () => ws.close() };
}

const out = [];
const log = (name, pass, detail = "") => { out.push({ name, pass, detail }); console.log(`${pass ? "PASS" : "FAIL"}  ${name}${detail ? "  — " + detail : ""}`); };

const t = await openTab();
const GA = `!!document.querySelector('script[src*="googletagmanager"]')`;
const BANNER = `!!document.querySelector('[aria-label="Cookie consent"]')`;

// --- consent / GA
await t.send("Emulation.setDeviceMetricsOverride", { width: 1366, height: 768, deviceScaleFactor: 1, mobile: false });
await t.goto(BASE + "/");
await t.evaluate(`localStorage.clear()`);
await t.goto(BASE + "/");
log("first visit: consent bar shown", await t.evaluate(BANNER));
log("first visit: no GA script before a choice", !(await t.evaluate(GA)));
log("first visit: no _ga cookie", !(await t.evaluate(`document.cookie.includes("_ga")`)));
await t.evaluate(`[...document.querySelectorAll('[aria-label="Cookie consent"] button')].find(b=>b.textContent.trim()==="Decline").click()`);
await sleep(600);
log("after Decline: bar gone, still no GA", !(await t.evaluate(BANNER)) && !(await t.evaluate(GA)));
await t.goto(BASE + "/platform");
log("after Decline: choice remembered on next page, no GA", !(await t.evaluate(BANNER)) && !(await t.evaluate(GA)));
await t.evaluate(`[...document.querySelectorAll('footer button')].find(b=>b.textContent.trim()==="Cookie Settings").click()`);
await sleep(600);
log("footer 'Cookie Settings' re-opens the bar", await t.evaluate(BANNER));
await t.evaluate(`[...document.querySelectorAll('[aria-label="Cookie consent"] button')].find(b=>b.textContent.trim()==="Accept").click()`);
await sleep(2500);
log("after Accept: GA script loads", await t.evaluate(GA));

// --- desktop nav at 1024
await t.send("Emulation.setDeviceMetricsOverride", { width: 1024, height: 768, deviceScaleFactor: 1, mobile: false });
await t.goto(BASE + "/");
const navInfo = await t.evaluate(`(() => { const n=document.querySelector('header nav'); const r=n.getBoundingClientRect(); const cta=[...document.querySelectorAll('header a')].find(a=>a.textContent.includes('Book a Demo')).getBoundingClientRect(); return {visible:getComputedStyle(n).display!=='none', navRight:Math.round(r.right), ctaLeft:Math.round(cta.left), links:n.querySelectorAll('a,button').length}; })()`);
log("1024px: full menu visible, not overlapping the button", navInfo.visible && navInfo.navRight <= navInfo.ctaLeft, JSON.stringify(navInfo));

// --- phone width: overflow on every page
await t.send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
const overflow = [];
const dupPages = [];
const logoGradients = [];
for (const p of PAGES) {
  await t.goto(BASE + p);
  const m = await t.evaluate(`({sw:document.documentElement.scrollWidth, iw:window.innerWidth, h1:document.querySelectorAll('h1').length})`);
  if (m.sw > m.iw || m.h1 !== 1) overflow.push(`${p} scrollWidth=${m.sw} h1=${m.h1}`);
  const dups = await t.evaluate(`(() => { const ids=[...document.querySelectorAll('[id]')].map(e=>e.id); return [...new Set(ids.filter((x,i)=>ids.indexOf(x)!==i))]; })()`);
  if (dups.length) dupPages.push(`${p}: ${dups.join(",")}`);
  logoGradients.push(await t.evaluate(`document.querySelectorAll('svg[aria-label="FleetArabia"] linearGradient').length + ':' + new Set([...document.querySelectorAll('svg[aria-label="FleetArabia"] linearGradient')].map(g=>g.id)).size + ':' + document.querySelectorAll('#fleetLogoGradient').length`));
}
log(`no duplicate ids on any of the ${PAGES.length} pages`, dupPages.length === 0, dupPages.join("; "));
log("every logo instance has its own gradient id; none is called fleetLogoGradient", logoGradients.every((x) => { const [n, u, old] = x.split(":"); return n === u && Number(n) >= 2 && old === "0"; }), [...new Set(logoGradients)].join(" | ") + "  (instances:unique:old-id)");
log(`390px: no horizontal overflow and exactly one h1 on all ${PAGES.length} pages`, overflow.length === 0, overflow.join("; "));

// --- icon links in <head>
await t.goto(BASE + "/");
const icons = await t.evaluate(`[...document.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"], link[rel="shortcut icon"]')].map(l => l.getAttribute('rel') + ' ' + l.getAttribute('href').split('?')[0] + ' ' + (l.getAttribute('type')||''))`);
log("head links exactly one favicon.ico and one icon.svg", icons.length === 2 && icons.some((i) => i.includes("/favicon.ico")) && icons.some((i) => i.includes("/icon.svg")), icons.join(" ; "));
const rendered = await t.evaluate(`new Promise(r => { const i=new Image(); i.onload=()=>r(i.naturalWidth+'x'+i.naturalHeight); i.onerror=()=>r('ERROR'); i.src='/icon.svg'; })`);
log("browser can decode /icon.svg as an image", rendered !== "ERROR", rendered);

// --- mobile menu
await t.goto(BASE + "/");
const burger = `document.querySelector('button[aria-controls="fleet-mobile-menu"]')`;
log("390px: hamburger visible", await t.evaluate(`getComputedStyle(${burger}).display !== 'none'`));
await t.evaluate(`${burger}.click()`); await sleep(400);
const menu = await t.evaluate(`(() => { const m=document.getElementById('fleet-mobile-menu'); return m ? {links:m.querySelectorAll('a').length, expanded:${burger}.getAttribute('aria-expanded'), scrollable:getComputedStyle(m).overflowY} : null; })()`);
log("mobile menu opens with all links", !!menu && menu.links >= 9 && menu.expanded === "true", JSON.stringify(menu));
await t.send("Input.dispatchKeyEvent", { type: "keyDown", key: "Escape", code: "Escape", windowsVirtualKeyCode: 27 });
await sleep(400);
log("Escape closes the mobile menu", !(await t.evaluate(`!!document.getElementById('fleet-mobile-menu')`)));

// --- deep links
await t.send("Emulation.setDeviceMetricsOverride", { width: 1366, height: 768, deviceScaleFactor: 1, mobile: false });
await t.goto(BASE + "/");
const hrefs = await t.evaluate(`[...document.querySelectorAll('a[href^="/solutions#"]')].map(a=>a.getAttribute('href').split('#')[1])`);
await t.goto(BASE + "/solutions");
const missing = await t.evaluate(`${JSON.stringify([...new Set(hrefs)])}.filter(id => !document.getElementById(id))`);
log(`all ${new Set(hrefs).size} distinct /solutions#… links resolve to a card id`, missing.length === 0, missing.join(", "));
const dupIds = await t.evaluate(`(() => { const ids=[...document.querySelectorAll('[id]')].map(e=>e.id); return ids.filter((x,i)=>ids.indexOf(x)!==i); })()`);
log("no duplicate ids on /solutions", dupIds.length === 0, dupIds.join(", "));

t.close();
console.log(`\n${out.filter((o) => o.pass).length}/${out.length} browser checks passed`);
