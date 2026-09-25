# FleetArabia website — final pre-deployment SEO audit

Prepared 2026-09-25 for Madhurendra (owner). This is the release gate for the SEO branch.

| | |
|---|---|
| Production baseline (`main` = `origin/main`) | **`91a913a`** — live at www.fleetarabia.com |
| SEO branch | `feat/seo-content-architecture` |
| Branch HEAD audited at start | `55cb301` (seo: implement solution page architecture) |
| Corrections made during this audit | `1806879` (seo: final predeployment corrections), links only; see §2 |
| Audit method | Fresh production build of the branch, served locally, crawled page by page; all repository checks re-run; nothing pushed, merged or deployed; ERP untouched |

---

## 1. Recommendation

# NOT READY FOR DEPLOYMENT

Everything technical passes (see §5–§7). The two blockers are both decisions or actions only the owner can take:

| # | Blocker | Why it blocks | What clears it |
|---|---|---|---|
| **B-1** | **V-1: the Vehicle Inspection publish gate is not done.** One real hand-over and one real return with the current app, then confirm the photographs appear in the web inspection report screen and check the PDF's counts | `docs/seo/vehicle-inspection-fact-validation.md` makes publication of `/solutions/vehicle-inspection` conditional on V-1. That page is live-linked from the navigation, footer, home, `/solutions`, Car Rental, Leasing, Workshop, Fleet Management and Billing. So the branch cannot ship as it stands until V-1 passes | Owner runs V-1 and reports the result. (Deploying without the page would need an owner decision to remove it and its links; not assumed here) |
| **B-2** | **The social image still says "Enterprise Mobility Platform for the Middle East"** | "Middle East" is an unsupported geography claim, and G1 = remove/reword every unsupported claim. It is the only one left on the site. It appears on **every page** (see §4). The owner has said not to edit the image yet (O-10), so this audit does not change it | Owner approves replacing the image text and alt (O-10) |

No other blocker was found. The items in §3 are improvements the approved plan still lists, but they do not make the branch wrong or unsafe to publish.

---

## 2. Completed work (on the branch, not in production)

| Commit | What |
|---|---|
| `1893503` | Technical SEO: `og:url`, WebSite/SoftwareApplication/BreadcrumbList JSON-LD, sitemap without fake `lastmod`, 3 descriptions shortened |
| `7a07e7e`, `9928ff3`, `18b36a0`, `7fa2d52`, `4aa581b` | Architecture, product validation, truth-correction plan, page specification, O-4/O-5 validation (documents) |
| `5f06086` | Content-truth corrections: AI, GPS, fuel, Salik/fines, payments, geography, limousine/staff transport, ERP framing; guardrails in `check-content.mjs` |
| `55cb301` | Seven solution pages, `/fleet-leasing` → `/solutions/fleet-leasing` **301**, navigation/footer/home/`/solutions`/`/industries` links, `/integrations` anchors, shared check page list, extra guardrails |
| **`1806879`** (this audit) | Links required by spec §4 that `55cb301` had not added: `/services` (ERP Implementation, Data Migration → `/platform`; System Integration → `/integrations`), `/integrations` cards → Car Rental / Fleet Management#fuel / Billing & Finance, home "Built for" chips → the matching solution page. No wording, title, metadata or JSON-LD change |

---

## 3. Remaining changes in the approved plan (not blockers)

| Item | Status | Detail |
|---|---|---|
| **O-2 — `/platform` hub rewrite** | Open (needs O-2 approval) | Spec §2.1: new title "Cloud ERP for Rental, Leasing & Fleet Businesses \| FleetArabia", new H1 and description, hub sections linking all seven spokes. Today `/platform` is truth-corrected but still reads as "Platform" (title "Platform \| FleetArabia", 422 words, no "cloud ERP" wording). It already receives 14 in-links and links to `/solutions`; it does not yet link to each spoke |
| **O-2 — existing-page title changes** | Open (needs O-2 approval) | Spec §7/§8: `/` → "Car Rental, Leasing & Fleet Management Software \| FleetArabia"; `/solutions` → "Fleet, Rental & Leasing Software Modules \| FleetArabia"; `/platform` as above; and the CA §8 titles for `/industries`, `/integrations`, `/deployment`, `/services`, `/company`, `/resources`, `/contact`. Current titles are accurate but generic (e.g. "Platform \| FleetArabia", "Solutions \| FleetArabia") |
| Navigation grouping and "Cloud ERP" label | Deferred | Spec §4 asks for grouped Solutions sub-menus and a Platform menu labelled "Cloud ERP" with Integrations. The navigation component renders one flat list per menu (grouping would be a component change), and the label belongs with the O-2 `/platform` rewrite. All seven spokes are already in the Solutions menu |
| O-9 FAQPage JSON-LD | Open | FAQs are visible on all seven solution pages; no FAQPage markup (no rich result expected for this site) |
| O-10 social image | **Blocker B-2** | §4 |
| O-11 Search Console / Bing | Owner action, after or at deployment | Not a code change; verify both properties and submit `https://www.fleetarabia.com/sitemap.xml` |
| O-12 release order | Owner decision | This branch now contains everything from `1893503` to `1806879`; releasing it is one fast-forward of `main` (= production deploy) |
| Thin pages | Noted, not padded | Three solution pages sit just under the spec's 800-word guide (Fleet Management 745, Chauffeur & Transport 743, Billing & Finance 785). `/deployment` (253) and `/resources` (185) are short by nature. No further verified material was identified that would add value; padding was not done, per instruction |
| O-3, O-6, O-7, O-8 | Open | Respected in the copy: Chauffeur & Transport is capability-only; no group-company workshop, vehicle purchase/disposal/car sales, or customer estimate-approval link claims |

---

## 4. Social image (O-10)

- **Source:** `app/opengraph-image.tsx` — line 3 `alt = "FleetArabia — Enterprise Mobility Platform for the Middle East"`, line 52 renders the same words on the image. `app/twitter-image.tsx` re-exports it.
- **Where it appears:**
  - `og:image` / `og:image:alt` and `twitter:image` / `twitter:image:alt` on **all 22 pages and the 404** (the root file convention, and `pageOpenGraph()` in `lib/seo.ts` names the same image on every page that sets its own `openGraph`);
  - the Organization JSON-LD `image` (`https://www.fleetarabia.com/opengraph-image`) on every page;
  - the Article JSON-LD `image` on both guides.
- **Should it be replaced before deployment?** Yes (B-2). It contradicts the approved UAE positioning on every shared link, and it is the last unsupported geography claim on the site. The content guardrail deliberately skips the two `…:image:alt` tags (correction R-07, deferred); re-enable them when the image is changed.
- The approved replacement wording in `content-truth-corrections.md` (R-07): "FleetArabia — Cloud ERP for Rental, Leasing & Fleet in the UAE".

## 5. Vehicle Inspection (V-1)

- The page uses only the wording approved in `vehicle-inspection-fact-validation.md` §3, and the description is exactly: "Record handover and return inspections with photos, signatures, fuel level and damage marked on a diagram, and compare check-out and check-in readings in a PDF."
- It makes none of the forbidden claims (photos or diagram in the PDF, before/after photo comparison, automatic detection, tamper-proofing, customer delivery of the PDF, offline). The `vehicle inspection (qualified)` guardrail enforces this and passes.
- **V-1 is not complete.** Nothing in this audit claims otherwise. No wording change was required by the validation document.

---

## 6. Page-by-page summary (fresh branch build, `1806879`)

"In-links" = other pages whose body links to this page; "+ nav/footer" = also in the site-wide navigation or footer.

| Page | Title (chars) | H1 | Canonical | Indexable | og:url = canonical | JSON-LD | Breadcrumb | Words | In-links (page bodies) |
|---|---|---|---|---|---|---|---|---|---|
| `/` | FleetArabia | Enterprise Mobility Solutions (43) | One cloud ERP for rental, leasing and fleet operations in the UAE | self | yes | yes | Organization+WebSite | — | 674 | 1 + nav/footer |
| `/platform` | Platform | FleetArabia (22) | Rental, leasing, maintenance and billing on one data model | self | yes | yes | Organization+WebSite+SoftwareApplication+BreadcrumbList | Home > Platform | 422 | 14 + nav/footer |
| `/solutions` | Solutions | FleetArabia (23) | Twelve modules. Start with one, or run them all. | self | yes | yes | Organization+WebSite+BreadcrumbList | Home > Solutions | 513 | 16 + nav/footer |
| `/solutions/car-rental-software` | Car Rental Software for Rent-a-Car Companies | FleetArabia (58) | Car rental software, from reservation to closed agreement | self | yes | yes | Organization+WebSite+WebPage+BreadcrumbList | Home > Solutions > Car Rental Software | 922 | 8 + nav/footer |
| `/solutions/fleet-leasing` | Fleet & Vehicle Leasing Software | FleetArabia (46) | Fleet leasing software, from quotation to financial reporting | self | yes | yes | Organization+WebSite+WebPage+BreadcrumbList | Home > Solutions > Fleet Leasing | 808 | 6 + nav/footer |
| `/solutions/fleet-management` | Fleet Management Software for Company Fleets | FleetArabia (58) | Fleet management for the vehicles your business owns | self | yes | yes | Organization+WebSite+WebPage+BreadcrumbList | Home > Solutions > Fleet Management | 745 | 7 + nav/footer |
| `/solutions/vehicle-inspection` | Vehicle Inspection Software for Rental Fleets | FleetArabia (59) | Vehicle inspections at handover and return, recorded against the vehicle | self | yes | yes | Organization+WebSite+WebPage+BreadcrumbList | Home > Solutions > Vehicle Inspection | 828 | 7 + nav/footer |
| `/solutions/workshop-management` | Workshop Management Software for Fleets | FleetArabia (53) | Workshop management from service booking to vehicle release | self | yes | yes | Organization+WebSite+WebPage+BreadcrumbList | Home > Solutions > Workshop Management | 823 | 9 + nav/footer |
| `/solutions/billing-finance` | Rental & Lease Billing and Finance Software | FleetArabia (57) | Billing and finance in the same system as your fleet | self | yes | yes | Organization+WebSite+WebPage+BreadcrumbList | Home > Solutions > Billing & Finance | 785 | 9 + nav/footer |
| `/solutions/chauffeur-transport` | Chauffeur & Bus Transport Software | FleetArabia (48) | Chauffeur and bus transport, from inquiry to billed trip | self | yes | yes | Organization+WebSite+WebPage+BreadcrumbList | Home > Solutions > Chauffeur & Transport | 743 | 5 + nav/footer |
| `/industries` | Industries | FleetArabia (24) | Eight kinds of fleet business, one platform | self | yes | yes | Organization+WebSite+BreadcrumbList | Home > Industries | 509 | 1 + nav/footer |
| `/integrations` | Integrations | FleetArabia (26) | Bring Salik, fines, parking and fuel data into your fleet ERP | self | yes | yes | Organization+WebSite+BreadcrumbList | Home > Integrations | 525 | 6 + nav/footer |
| `/deployment` | Deployment Options | FleetArabia (32) | Hosted in the cloud, used in your browser | self | yes | yes | Organization+WebSite+BreadcrumbList | Home > Deployment | 253 | 2 + nav/footer |
| `/services` | Services | FleetArabia (22) | Help to implement, integrate and run FleetArabia | self | yes | yes | Organization+WebSite+BreadcrumbList | Home > Services | 431 | 2 + nav/footer |
| `/company` | Company | FleetArabia (21) | A fleet technology company based in Dubai and Patna | self | yes | yes | Organization+WebSite+BreadcrumbList | Home > Company | 476 | 1 + nav/footer |
| `/resources` | Resources | FleetArabia (23) | Practical guides for moving fleet operations off spreadsheets | self | yes | yes | Organization+WebSite+BreadcrumbList | Home > Resources | 185 | 3 + nav/footer |
| `/resources/erp-integration-checklist` | ERP Integration Checklist | FleetArabia (39) | ERP Integration Checklist | self | yes | yes | Organization+WebSite+Article+BreadcrumbList | Home > Resources > ERP Integration Checklist | 340 | 2 |
| `/resources/fleet-digital-transformation-guide` | Fleet Digital Transformation Guide | FleetArabia (48) | Fleet Digital Transformation Guide | self | yes | yes | Organization+WebSite+Article+BreadcrumbList | Home > Resources > Fleet Digital Transformation Guide | 361 | 2 |
| `/contact` | Contact Us | FleetArabia (24) | Tell us how your fleet operation runs today | self | yes | yes | Organization+WebSite+BreadcrumbList | Home > Contact | 464 | 19 + nav/footer |
| `/sitemap` | Sitemap | FleetArabia (21) | All FleetArabia Pages | self | yes | yes | Organization+WebSite+BreadcrumbList | Home > Sitemap | 42 | 0 + nav/footer |
| `/privacy` | Privacy Policy | FleetArabia (28) | Privacy Policy | self | **noindex** (intended) | yes | Organization+WebSite | — | 398 | 2 + nav/footer |
| `/terms` | Terms of Use | FleetArabia (26) | Terms of Use | self | **noindex** (intended) | yes | Organization+WebSite | — | 285 | 1 + nav/footer |

**Content-quality findings**
- **Titles, descriptions, H1s, canonicals:** all unique (checked by `check-content.mjs`).
- **Near-duplicates (token overlap ≥ 0.5):**
  - Titles of `/solutions/fleet-management` and `/solutions/workshop-management` (0.57). They share "Management Software… Fleets" but target different primary keywords ("fleet management software" vs "workshop management software") and different intents. Acceptable.
  - Descriptions of `/` and `/company` (0.50). Both restate the approved positioning. Acceptable; the O-2 title work would differentiate them further.
- **Keyword cannibalisation:** no two page titles target the same primary keyword, and no existing page title targets a solution page's primary keyword. The `/platform` primary keyword ("cloud ERP for rental companies") is not in any title yet; that is part of O-2.
- **Weak H1s / titles:** no weak H1s on the solution pages. The generic existing-page titles are the O-2 item in §3.
- **UAE positioning:** consistent; "UAE" appears where it is a fact (VAT, Salik, positioning). No other geography anywhere except the social image (B-2).
- **Cloud ERP positioning:** home, all seven solution pages, `/industries`, `/integrations`, `/services` and `/company` state it; `/platform` does not yet (O-2 hub rewrite). Nowhere is FleetArabia described as a layer connecting to another ERP (guardrail "ERP framing" passes).
- **Unsupported claims:** none found (all guardrail groups pass).
- **Orphans:** none. Every indexable page has at least one in-link from another page's body or from the navigation/footer; the two guides are linked from `/resources` and from each other.

---

## 7. Technical SEO results

| Check | Result |
|---|---|
| HTTP status | 22/22 pages 200; unknown URL → real 404 (noindex, no canonical) |
| Canonical | Self-referencing on all 22 pages; unique |
| Robots meta | `noindex, follow` on `/privacy` and `/terms` only (intended); no accidental noindex |
| `robots.txt` | Unchanged: `Allow: /`, sitemap declared |
| Sitemap | 19 URLs, each 200 with a matching self-canonical and indexable; no `lastmod`; excluded by design: `/sitemap`, `/privacy`, `/terms` |
| `og:url` | Equals the canonical on every page |
| Structured data | 73 blocks, all parse. Organization (`@id …/#organization`) on every page; WebSite → `publisher` Organization; SoftwareApplication on `/platform` with `@id …/platform#software` → `publisher` Organization; each solution page's WebPage → `about` the SoftwareApplication. **All `@id` references resolve.** No Product, Offer, AggregateRating, Review, HowTo or FAQPage |
| Breadcrumbs | Solution pages: Home › Solutions › page (3 levels); other pages Home › page; guides Home › Resources › guide |
| Redirects | `/fleet-leasing` → **301** `/solutions/fleet-leasing` (query string kept). The only 308 is the pre-existing apex rule `fleetarabia.com` → `https://www.fleetarabia.com` (unchanged since production) |
| Internal links and anchors | 848 links on 22 pages, 0 broken; every `#anchor` exists |
| Discoverability of the new pages | Each solution page has 5–9 body in-links plus navigation and footer; `/solutions/fleet-leasing` also via the 301 |
| Technical SEO vs the last validated build | 0 differences in status, title, description length, canonical, robots, `og:url` or H1 count on the 16 pre-existing pages (earlier in the same session) |

## 8. Check results (final run on `1806879`)

| Check | Result |
|---|---|
| `next build` | ✓ 31/31 static pages |
| `tsc --noEmit` | ✓ |
| `eslint .` | ✓ clean |
| `npm run check` — links | ✓ 22 pages, 848 internal links, no broken links or anchors |
| `npm run check` — content | ✓ **49/49 PASS, 0 FAIL** (all guardrail groups; unique title/description/H1/canonical; per-page canonical, robots, JSON-LD; `/fleet-leasing` exactly 301) |
| `check:browser` | ✓ 18/18, run twice |
| `check:alignment` | ✓ all 22 pages at 1920/1440/1366/1024/390 px |

## 9. To reach READY

1. **V-1** — owner runs the device test and reports that photographs appear in the inspection report screen (and what the PDF counts show).
2. **O-10** — owner approves the social-image text and alt; the change is then made in `app/opengraph-image.tsx` and the `…:image:alt` tags are added back to the guardrail scan.

Nothing else is required for a correct release. O-2 (hub rewrite and titles) can ship now or in a later release; it is the largest remaining SEO improvement, not a correctness issue.
