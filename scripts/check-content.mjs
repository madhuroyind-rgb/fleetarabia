// Checks the rendered HTML of the LOCAL build: icon consistency, Organization JSON-LD,
// and that unsupported infrastructure wording is gone from every page.
const BASE = (process.argv[2] || process.env.SITE_URL || "http://localhost:3002").replace(/\/$/, "");
const PAGES = ["/", "/platform", "/solutions", "/fleet-leasing", "/industries", "/integrations", "/deployment",
  "/services", "/company", "/resources", "/resources/erp-integration-checklist",
  "/resources/fleet-digital-transformation-guide", "/contact", "/sitemap", "/privacy", "/terms"];

let failed = 0;
const log = (name, pass, detail = "") => { if (!pass) failed++; console.log(`${pass ? "PASS" : "FAIL"}  ${name}${detail ? "  — " + detail : ""}`); };

const html = {};
for (const p of PAGES) html[p] = await (await fetch(BASE + p)).text();
// Visible text only: drop scripts/styles and tags.
const textOf = (h) => h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ");

// 1. no emoji left in any page's visible text (© and the ✓/→ glyphs are not pictographic emoji here)
const emojiPages = PAGES.filter((p) => /\p{Extended_Pictographic}/u.test(textOf(html[p]).replace(/©/g, "")));
log("no emoji icons in the visible text of any page", emojiPages.length === 0, emojiPages.join(", "));

// 2. module icons: the same 13 icons on the homepage cards and the Solutions cards, no letter-code tiles left
const ICONS = ["car", "key-round", "car-taxi-front", "bus", "wrench", "chart-column", "shield-alert", "receipt-text", "plug", "map-pin", "id-card", "fuel", "users"];
for (const p of ["/", "/solutions"]) {
  const missing = ICONS.filter((i) => !new RegExp(`lucide-${i}[" ]`).test(html[p]));
  log(`${p}: all 13 module icons rendered`, missing.length === 0, missing.join(", "));
}
const codeTiles = PAGES.filter((p) => /rounded-2xl[^"]*bg-cyan-50[^"]*"[^>]*>[A-Z]{2}</.test(html[p]));
log("no two-letter code tiles left on any page", codeTiles.length === 0, codeTiles.join(", "));
for (const [p, n] of [["/platform", 8], ["/industries", 8], ["/services", 10]]) {
  const count = (html[p].match(/<svg[^>]*class="lucide /g) || []).length;
  log(`${p}: icon tiles present (>= ${n})`, count >= n, String(count));
}
// the company has no customers yet: nothing may imply otherwise
const implied = [/trusted/i, /our customers/i, /organizations choose/i, /industry experts/i, /proven operational/i];
const impliedHits = [];
for (const p of PAGES) for (const re of implied) if (re.test(textOf(html[p]))) impliedHits.push(`${p}: ${re}`);
log("no wording that implies existing customers", impliedHits.length === 0, impliedHits.join("; "));

// 4. Organization JSON-LD
const blocks = [...html["/"].matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => JSON.parse(m[1]));
const org = blocks.find((b) => b["@type"] === "Organization");
log("Organization JSON-LD parses and has name, url, email, address, contactPoint",
  !!org && ["name", "url", "email", "address", "contactPoint"].every((k) => k in org));
log("Organization JSON-LD logo is the FleetArabia icon.svg, not the favicon", org.logo === "https://www.fleetarabia.com/icon.svg",
  `logo = ${JSON.stringify(org.logo ?? null)}`);
const allBlocks = PAGES.flatMap((p) => [...html[p].matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => m[1]));
let bad = 0; for (const b of allBlocks) { try { JSON.parse(b); } catch { bad++; } }
log(`all ${allBlocks.length} JSON-LD blocks across the site parse`, bad === 0);
const status = [];
for (const p of PAGES) { const r = await fetch(BASE + p); if (r.status !== 200) status.push(p + "=" + r.status); }
log(`all ${PAGES.length} pages return 200`, status.length === 0, status.join(", "));

// 5. unsupported infrastructure wording gone everywhere
const banned = [/redundan/i, /high availability/i, /highly available/i, /disaster recovery/i, /failover/i, /uptime/i,
  /backups run automatically/i, /single hardware failure/i];
const hits = [];
for (const p of PAGES) for (const re of banned) if (re.test(textOf(html[p]))) hits.push(`${p}: ${re}`);
log("no redundancy / high-availability / disaster-recovery / automatic-backup claims on any page", hits.length === 0, hits.join("; "));

console.log(failed ? `\n${failed} check(s) FAILED` : "\nall content checks passed");
process.exit(failed ? 1 : 0);
