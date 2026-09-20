// Crawls the LOCAL build, follows every internal link, and checks that each target
// returns 200 and that every #anchor exists in the target page's HTML.
const BASE = (process.argv[2] || process.env.SITE_URL || "http://localhost:3002").replace(/\/$/, "");
const seen = new Map(); // path -> html
const queue = ["/"];
const problems = [];
let linkCount = 0;

async function load(path) {
  if (seen.has(path)) return seen.get(path);
  const res = await fetch(BASE + path, { redirect: "manual" });
  const html = res.status === 200 ? await res.text() : "";
  seen.set(path, html);
  if (res.status !== 200) problems.push(`${path} -> HTTP ${res.status}`);
  return html;
}

while (queue.length) {
  const page = queue.shift();
  const html = await load(page);
  for (const m of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const href = m[1].replace(/&amp;/g, "&");
    if (!href.startsWith("/") || href.startsWith("//")) continue; // external, mailto:, tel:
    linkCount++;
    const [path, anchor] = href.split("#");
    const target = path || page;
    if (!seen.has(target)) { await load(target); queue.push(target); }
    if (anchor) {
      const targetHtml = seen.get(target) || "";
      if (!new RegExp(`\\bid="${anchor}"`).test(targetHtml)) problems.push(`${page}: ${href} -> anchor #${anchor} not found`);
    }
  }
}

console.log(`pages crawled: ${seen.size}, internal links checked: ${linkCount}`);
console.log(problems.length ? "PROBLEMS:\n" + [...new Set(problems)].join("\n") : "no broken internal links or anchors");
process.exit(problems.length ? 1 : 0);
