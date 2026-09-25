// Checks the rendered HTML of the LOCAL build: icon consistency, Organization JSON-LD,
// and that unsupported infrastructure wording is gone from every page.
import { PAGES, SOLUTION_PAGES } from "./site-pages.mjs";
const BASE = (process.argv[2] || process.env.SITE_URL || "http://localhost:3002").replace(/\/$/, "");

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
// and social title/description/image-alt tags, and JSON-LD. The social image's own source text is
// checked separately below, because it is drawn into a PNG the HTML scan cannot read.
const decode = (t) => t.replace(/&amp;/g, "&").replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ");
const metaText = (h) => [...h.matchAll(/<meta (?:name|property)="(?:description|og:title|og:description|og:image:alt|twitter:title|twitter:description|twitter:image:alt)" content="([^"]*)"/g)].map((m) => m[1]).join(" ");
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
    /ERP-(ready|connected)/i, /seamless ERP integration/i, /pre-built connectors?/i, /low-code/i, /event-driven/i, /real-time (data )?sync/i,
    /integration (layer|hub)/i, /(sits|layer) (on top of|between) (your|other)/i, /connects? (FleetArabia |us )?(to|with) (another|other|your existing|third-party) ERP/i,
    /\bERP integration\b(?! checklist)/i],
  "readiness / social proof": [/in use (at|by)/i, /trusted by/i, /our customers/i, /\bproven\b/i, /deployed at/i,
    /used by (leading|many|top|\d)/i, /\d+\+? (customers|clients|companies|vehicles managed)/i, /reduce(s)? (operational )?costs by/i],
  "on-premises (not approved)": [/on-?premise/i, /your own servers/i, /own data cent(er|re)/i, /private cloud/i],
  "external workshop (not confirmed)": [/external customers?/i, /customers'? vehicles/i, /walk-in/i, /service cent(er|re)s/i],
  "unverified detail": [/revenue recognition/i, /native (mobile )?app(lication)?s/i, /compliance with enterprise security standards/i,
    /\biOS\b/, /App Store/i],
  // generic words: allowed only in the guides, Resources and the legal pages
  "generic (outside guides)": [/\btelematics\b/i, /\bGPS\b(?! tracking server| server)/i],
  // docs/seo/vehicle-inspection-fact-validation.md (O-4, O-5 approved with qualification)
  "vehicle inspection (qualified)": [
    /(photos?|photographs?|images?|diagram)( are| is)?( embedded| included| shown)? (in|inside) the PDF/i,
    /before[- ]and[- ]after (photo|picture|image)/i, /(photo|picture|image)[- ]by[- ](photo|picture|image)/i,
    /tamper/i, /\bsealed\b/i, /evidential/i, /\boffline\b/i,
    /customers? (receives?|gets?|is sent|are sent) the (PDF|report)/i],
  // workshop: G4 (external customers) above; O-6 group companies and O-8 approval link still open
  "workshop (not confirmed)": [/group compan/i, /approv\w* (by|via|through) (a )?link/i, /customers? approv\w* (the |an )?estimate/i,
    /warrant(y|ies)/i, /\brecalls?\b/i, /\bOBD\b/, /diagnostic/i],
  // O-7: in the ERP code but not validated for marketing; HR backend incomplete (PFV-F)
  "unvalidated modules": [/vehicle purchase/i, /\bdisposal\b/i, /car sales/i, /\bpayroll\b/i],
  "transport (not verified)": [/passenger app/i, /parent app/i, /live trip/i, /flight tracking/i, /trip tracking/i, /student tracking/i],
  "leasing (not claimed)": [/IFRS/i, /residual value/i, /credit scor/i],
  "security certifications (none held)": [/\bISO[ -]?\d{4,5}/i, /\bSOC ?[12]\b/i, /\bPCI\b/, /certif(ied|ication)/i, /\bHIPAA\b/, /GDPR[- ]compliant/i],
};
const EXEMPT = {
  "ERP framing": (p) => p.startsWith("/resources"),
  "generic (outside guides)": (p) => p.startsWith("/resources") || p === "/privacy" || p === "/terms",
  // the Terms disclaimer ("without warranties of any kind") is legal wording, not a workshop claim
  "workshop (not confirmed)": (p) => p === "/privacy" || p === "/terms",
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
// the social image is a PNG, so check the words drawn into it at the source
{
  const { readFileSync } = await import("node:fs");
  const src = readFileSync(new URL("../app/opengraph-image.tsx", import.meta.url), "utf8");
  const drawn = [...src.matchAll(/^\s*([A-Z][^<>{}=;"`]{8,})$/gm)].map((m) => m[1].trim()).join(" | ");
  const altText = (src.match(/export const alt = "([^"]*)"/) || [])[1] || "";
  const imageText = `${altText} | ${drawn}`;
  const imageHits = [];
  for (const group of ["AI", "geography", "ERP framing", "GPS / telematics", "payments", "transport"]) {
    for (const re of GUARDRAILS[group]) if (re.test(imageText)) imageHits.push(`${group}: ${re}`);
  }
  log("social image text follows the guardrails", imageHits.length === 0 && /cloud ERP/i.test(altText) && /UAE/.test(altText), imageText);
}

// positioning the owner approved (2026-09-25)
log('home page states the approved positioning ("cloud ERP")', /cloud ERP/i.test(scanOf("/")));
log('Organization JSON-LD description names the UAE', /UAE/.test(org?.description ?? ""), org?.description ?? "");

// 7. solution pages (docs/seo/final-page-implementation-spec.md): unique metadata, self canonical,
// indexable, and the shared JSON-LD; plus the moved Fleet Leasing URL.
const SITE = "https://www.fleetarabia.com";
const headOf = (p) => html[p].split("</head>")[0];
const attr = (p, re) => decode((headOf(p).match(re) || [])[1] ?? "");
const h1Of = (p) => decode((html[p].match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1]?.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() ?? "");
const meta = Object.fromEntries(PAGES.map((p) => [p, {
  title: attr(p, /<title>([\s\S]*?)<\/title>/),
  description: attr(p, /<meta name="description" content="([^"]*)"/),
  canonical: attr(p, /<link rel="canonical" href="([^"]*)"/),
  robots: attr(p, /<meta name="robots" content="([^"]*)"/),
  h1: h1Of(p),
}]));
for (const field of ["title", "description", "h1", "canonical"]) {
  const byValue = {};
  for (const p of PAGES) (byValue[meta[p][field]] ??= []).push(p);
  const dups = Object.entries(byValue).filter(([v, ps]) => ps.length > 1 || !v).map(([v, ps]) => `${JSON.stringify(v.slice(0, 50))}: ${ps.join(" ")}`);
  log(`every page has a unique, non-empty ${field}`, dups.length === 0, dups.join(" | "));
}
const software = allBlocks.map((b) => JSON.parse(b)).find((b) => b["@type"] === "SoftwareApplication");
log("/platform SoftwareApplication carries its @id", software?.["@id"] === `${SITE}/platform#software`, software?.["@id"] ?? "missing");
for (const p of SOLUTION_PAGES) {
  const m = meta[p];
  const blocksHere = [...html[p].matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((x) => JSON.parse(x[1]));
  const webPage = blocksHere.find((b) => b["@type"] === "WebPage");
  const crumbs = blocksHere.find((b) => b["@type"] === "BreadcrumbList");
  const problems = [];
  if (m.canonical !== SITE + p) problems.push(`canonical ${m.canonical}`);
  if (/noindex/.test(m.robots)) problems.push(`robots ${m.robots}`);
  if (!webPage || webPage.url !== SITE + p || webPage.about?.["@id"] !== `${SITE}/platform#software`) problems.push("WebPage JSON-LD");
  if (!crumbs || crumbs.itemListElement.map((i) => i.name).join(" > ") !== `Home > Solutions > ${crumbs.itemListElement.at(-1)?.name}` || crumbs.itemListElement.length !== 3) problems.push("BreadcrumbList");
  if (m.title.length < 40 || m.title.length > 65) problems.push(`title length ${m.title.length}`);
  if (m.description.length < 140 || m.description.length > 160) problems.push(`description length ${m.description.length}`);
  if (blocksHere.some((b) => ["Product", "Offer", "AggregateRating", "Review", "FAQPage", "HowTo"].includes(b["@type"]))) problems.push("disallowed JSON-LD type");
  log(`${p}: self canonical, indexable, WebPage + BreadcrumbList, title/description length`, problems.length === 0, problems.join("; "));
}
const moved = await fetch(BASE + "/fleet-leasing", { redirect: "manual" });
const location = moved.headers.get("location") || "";
log("/fleet-leasing answers exactly 301 to /solutions/fleet-leasing", moved.status === 301 && /\/solutions\/fleet-leasing$/.test(location),
  `${moved.status} → ${location}`);

console.log(failed ? `\n${failed} check(s) FAILED` : "\nall content checks passed");
process.exit(failed ? 1 : 0);
