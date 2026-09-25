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

// 2. module icons: the same 12 icons on the homepage cards and the Solutions cards, no letter-code tiles left
// (GPS is not a module: only the tracking-server connection is verified, see docs/seo/product-fact-validation.md)
const ICONS = ["car", "key-round", "car-taxi-front", "bus", "wrench", "chart-column", "shield-alert", "receipt-text", "plug", "id-card", "fuel", "users"];
for (const p of ["/", "/solutions"]) {
  const missing = ICONS.filter((i) => !new RegExp(`lucide-${i}[" ]`).test(html[p]));
  log(`${p}: all ${ICONS.length} module icons rendered`, missing.length === 0, missing.join(", "));
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

// capabilities the owner has said are NOT available today (2026-09-20): naming Oracle as an
// existing integration, and Arabic / multilingual operation
const notYet = [/oracle/i, /multilingual/i];
const notYetHits = [];
for (const p of PAGES) for (const re of notYet) if (re.test(textOf(html[p]))) notYetHits.push(`${p}: ${re}`);
log("no claims the owner has said are not available yet (Oracle, multilingual)", notYetHits.length === 0, notYetHits.join("; "));

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

// 6. product-truth guardrails (docs/seo/content-truth-corrections.md §3). Every claim on the site
// must be supported by docs/seo/product-fact-validation.md. Scanned: visible text, the description
// and social title/description tags, and JSON-LD. Not scanned: og:image:alt / twitter:image:alt,
// because the social image is deliberately unchanged for now (correction R-07, deferred).
const decode = (t) => t.replace(/&amp;/g, "&").replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ");
const metaText = (h) => [...h.matchAll(/<meta (?:name|property)="(?:description|og:title|og:description|twitter:title|twitter:description)" content="([^"]*)"/g)].map((m) => m[1]).join(" ");
const jsonLdText = (h) => [...h.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => m[1]).join(" ");
const scanOf = (p) => decode(`${textOf(html[p])} ${metaText(html[p])} ${jsonLdText(html[p])}`).replace(/\s+/g, " ");

const GUARDRAILS = {
  "AI": [/\bAI\b/, /\bAI-(powered|driven|based|enabled)/i, /artificial intelligence/i, /machine learning/i, /\bML\b/, /\bneural\b/i,
    /computer vision/i, /predictive (maintenance|analytics|alerts?)/i, /\bpredict(s|ed|ive)?\b/i,
    /intelligent (automation|insights?|platform|ecosystem|technology|enterprise software)/i, /smart (detection|insights?)/i],
  "damage detection": [/(automatic|automated|AI) damage (detection|assessment|classification|recognition)/i, /damage detection/i,
    /detects? damage/i, /instant (repair )?(estimate|quote)/i, /360[- °]?(degree )?(scan|capture|inspection)/i],
  "GPS / telematics": [/real[- ]time (tracking|location|vehicle)/i, /live (tracking|vehicle location|location)/i, /track vehicles in real time/i,
    /geo-?fenc/i, /route compliance/i, /driver behaviou?r/i, /telematics provider/i, /\bIoT\b/i, /\bsensors?\b/i, /dash ?cams?/i,
    /SecurePath/i, /\bShahin\b/i, /\bWASL\b/i],
  "fuel": [/fuel[- ]card integration/i, /consumption anomal/i, /fuel efficiency/i, /efficiency trends/i, /fuel sensors?/i],
  "government": [/Dubai Police/i, /Abu Dhabi Police/i, /\bSaher\b/i, /\bTAMM\b/i, /\bELM\b/, /\bSATA\b/, /border (crossing|transit)/i,
    /pulling toll/i, /(direct|live) (Salik|police)/i, /government (platforms?|services|systems)/i],
  "payments": [/payment gateways?/i, /online payments?/i, /card payments?/i, /charge customer cards/i, /payment rails/i,
    /digital wallets?/i, /\bMada\b/, /\bKNET\b/, /\bNAPS\b/],
  "e-invoicing": [/\be-?invoic/i, /FTA[- ]approved/i, /\bPeppol\b/i, /\bZATCA\b/i, /\bFatoora\b/i],
  "geography": [/Middle East/i, /\bGCC\b/, /\bKSA\b/, /\bSaudi/i, /\bKuwait/i, /\bBahrain/i, /\bQatar/i, /\bOman\b/i,
    /multi-country/i, /across the region/i, /\bGulf\b/i],
  "transport": [/limousine/i, /\blimo\b/i, /staff transport/i, /employee transport/i, /executive transport/i, /airport transfer/i,
    /optimi[sz]e (routes|schedules)/i],
  "ERP framing": [/connect(s|ed|ing)? (to|with) your (ERP|finance system|existing)/i, /your existing (ERP|accounting)/i,
    /ERP-(ready|connected)/i, /seamless ERP integration/i, /pre-built connectors?/i, /low-code/i, /event-driven/i, /real-time (data )?sync/i],
  "readiness / social proof": [/in use (at|by)/i, /trusted by/i, /our customers/i, /\bproven\b/i, /deployed at/i,
    /used by (leading|many|top|\d)/i, /\d+\+? (customers|clients|companies|vehicles managed)/i, /reduce(s)? (operational )?costs by/i],
  "on-premises (not approved)": [/on-?premise/i, /your own servers/i, /own data cent(er|re)/i, /private cloud/i],
  "external workshop (not confirmed)": [/external customers?/i, /customers'? vehicles/i, /walk-in/i, /service cent(er|re)s/i],
  "unverified detail": [/revenue recognition/i, /native (mobile )?app(lication)?s/i, /compliance with enterprise security standards/i,
    /\biOS\b/, /App Store/i],
  // generic words: allowed only in the guides, Resources and the legal pages
  "generic (outside guides)": [/\btelematics\b/i, /\bGPS\b(?! tracking server| server)/i],
};
const EXEMPT = {
  "ERP framing": (p) => p.startsWith("/resources"),
  "generic (outside guides)": (p) => p.startsWith("/resources") || p === "/privacy" || p === "/terms",
};
for (const [group, patterns] of Object.entries(GUARDRAILS)) {
  const found = [];
  for (const p of PAGES) {
    if (EXEMPT[group]?.(p)) continue;
    const text = scanOf(p);
    for (const re of patterns) {
      const m = text.match(re);
      if (m) found.push(`${p}: "${text.slice(Math.max(0, m.index - 40), m.index + m[0].length + 40).trim()}"`);
    }
  }
  log(`guardrail — no unsupported ${group} claims`, found.length === 0, found.join(" | "));
}
// positioning the owner approved (2026-09-25)
log('home page states the approved positioning ("cloud ERP")', /cloud ERP/i.test(scanOf("/")));
log('Organization JSON-LD description names the UAE', /UAE/.test(org?.description ?? ""), org?.description ?? "");

console.log(failed ? `\n${failed} check(s) FAILED` : "\nall content checks passed");
process.exit(failed ? 1 : 0);
