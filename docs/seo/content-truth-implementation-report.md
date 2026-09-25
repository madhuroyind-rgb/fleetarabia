# Content-truth corrections — implementation report

Status: **implemented on branch `feat/seo-content-architecture`; not merged, not pushed, not deployed.**
Production (`main` = `origin/main`) remains **`91a913a`**.
Prepared 2026-09-25. Source documents:
- `docs/seo/content-truth-corrections.md` (IDs below, e.g. A-01)
- `docs/seo/product-fact-validation.md` (evidence, "PFV")

## Owner decisions applied (2026-09-25)

| Decision | How it was applied |
|---|---|
| G1 = yes | Every unsupported claim in the register was removed or reworded |
| G2 = GPS live vehicles not verified | GPS removed as a **module** (so the site now lists **twelve** modules, not thirteen). The only GPS wording left: "connects to a Traccar GPS tracking server". No live tracking, real-time location or geofencing anywhere |
| G3 = on-premises not approved | Every on-premises mention removed; /deployment rewritten as cloud-hosted only |
| G4 = external workshop not confirmed | "Service Centers" removed; workshop copy describes only the internal workflow |
| G5 = book of record not confirmed | No "book of record" or "own ledger is your accounts" claim; finance described as "in the same system" |
| G6 = card payments not live | Every payment-gateway and card-payment claim removed, including from /services and /contact |
| G7 | No "first live business line" or availability claim added |
| G8 | Customer portal described (live). The booking site and catalogue are not marketed as a product feature; the service offers on /services stay (see "Open points") |
| App | "Native mobile applications" → "An Android app"; no iOS claim |
| Renames | "ERP Integration Platform" → **"Finance & Integrations"**; "Bus & Staff Transport" → **"Bus & School Transport"** |
| Positioning | "FleetArabia is a cloud ERP for rental, leasing, transport and workshop businesses in the UAE." Used in the site description, Organization JSON-LD, footer and home hero |

## Files changed

| File | What |
|---|---|
| `app/page.tsx` | home copy, module cards, strips, sections |
| `app/platform/page.tsx`, `app/solutions/page.tsx`, `app/fleet-leasing/page.tsx`, `app/industries/page.tsx`, `app/integrations/page.tsx`, `app/deployment/page.tsx`, `app/services/page.tsx`, `app/company/page.tsx`, `app/contact/page.tsx` | page copy; claim-bearing meta descriptions |
| `app/layout.tsx` | shared site description; Organization JSON-LD description |
| `components/Footer.tsx` | footer text and Solutions/Platform links |
| `components/EnterprisePage.tsx` | default proof points and default final-CTA text |
| `components/ContactForm.tsx` | enquiry option label |
| `components/HeroVisual.tsx` | code comment only |
| `lib/modules.ts` | module names (renames; GPS removed) |
| `scripts/check-content.mjs` | 12-module icon check; the §3 guardrails; the positioning checks |
| `docs/seo/content-truth-implementation-report.md` | this report |

**Not changed:**
- page `<title>`s
- canonical, robots and `og:url`
- sitemap and robots.txt
- `lib/seo.ts` and the technical SEO from `1893503`
- the social image, including its alt text (R-07 stays deferred)
- routes and navigation structure
- `/resources/*`, `/privacy`, `/terms`, `/sitemap`

## Validation results

| Check | Result |
|---|---|
| `next build` | ✓ compiled, 25/25 static pages |
| `tsc --noEmit` | ✓ no errors |
| `eslint .` | ✓ clean, after removing three imports the edits left unused |
| `npm run check` (links + content) | ✓ 16 pages crawled, 604 internal links and anchors OK; **31/31 content checks PASS** |
| New guardrails on the **new** build | ✓ all 15 groups PASS, plus 2 positioning checks PASS |
| Same guardrails on the **live** site (old wording) | ✗ 12 of the 15 groups FAIL, plus both positioning checks. The guardrails catch the old claims. Damage detection, e-invoicing and readiness/social proof pass, because the live site never made those claims |
| `check:browser` | ✓ 18/18, twice (the check is known to be flaky, so it was repeated) |
| `check:alignment` | ✓ every page aligned at every width |
| JSON-LD | ✓ all 48 blocks parse; SoftwareApplication `featureList` = the 12 real modules |
| Technical SEO vs the `1893503` build (all 16 pages + 404) | ✓ HTTP status, `<title>`, canonical, robots, `og:url`, H1 count, JSON-LD types and sitemap membership all **identical**. Sitemap still 13 URLs with no `lastmod`. Privacy/Terms still `noindex, follow`; 404 still a real 404 with no canonical |
| Meta description lengths | all 131–155 characters: / 155, /solutions 144, /industries 135, /integrations 141, /deployment 137, /company 131, /contact 145 |
| Manual sweep of the rendered text of all 16 pages | Remaining "real-time" refers only to dashboards, which read the live database (G-18, kept). "Traccar" appears only as a connection. "Android" only for the app. No AI, geofencing, payment, GCC, limousine, staff-transport, on-premises or ERP-connector wording |

---

## Before / after by page

The validation column names the guardrail group (in `check-content.mjs`) that now guards the claim, or the manual check.

### Shared (every page)

| ID | Old claim | New wording | Reason | Evidence | Validation |
|---|---|---|---|---|---|
| E-01 | Site description: "…enterprise mobility platform connecting rental, leasing, transportation, workshop, analytics and CRM operations to your ERP." | "Cloud ERP for rental, leasing, transport and workshop businesses in the UAE: vehicles, contracts, inspections, workshop, billing and finance in one system." | Product is the ERP | PFV-B Own ERP (A); PFV-C | ERP framing ✓; positioning ✓ |
| E-02 | Organization JSON-LD: "…connecting rental, leasing, limousine, bus transportation… to your ERP — built for fleet businesses across the Middle East." | "FleetArabia is a cloud ERP for rental, leasing, transport and workshop businesses in the UAE." | ERP framing; limousine; geography | PFV-C; Limousine (C); Multi-country (D) | "JSON-LD names the UAE" ✓; geography ✓ |
| E-14 | Footer: "…ERP-connected fleet businesses digitize operations across the Middle East." | "FleetArabia is a cloud ERP for rental, leasing, transport and workshop businesses in the UAE." | As above | PFV-C | geography ✓ |
| T-08 | Footer link "Chauffeur & Limousine" | "Chauffeur & Transport" (anchor `#chauffeur-transport`) | Limousine is a placeholder | PFV-B Limousine (C) | transport ✓; links ✓ |
| G-17 | Footer link "GPS Tracking & Geo-Fencing" | removed | GPS not a verified module (G2) | PFV-B GPS (D) | GPS ✓ |
| — (added) | Footer link "ERP Integrations" | "Integrations" | ERP framing | PFV-C | manual |
| R-08 | Default proof points "…ERP Integrated", "Middle East Expertise" | "Finance Built In", "Built for the UAE" | Unused default, fixed for safety | — | geography ✓ |
| — (added; found by guardrail) | Default final CTA: "Let's build your digital rental, leasing, transportation and ERP-connected operation together." (shown on /platform, /solutions, /services) | "Tell us how your rental, leasing, transport or workshop operation runs today, and we'll show you how it looks in one system." | ERP framing; missed by the correction register | PFV-C | ERP framing ✓ |
| T-09 / E-08 | Module names "Chauffeur & Limousine", "ERP Integration Platform", "GPS Tracking & Geo-Fencing" | "Chauffeur & Transport", "Finance & Integrations"; GPS removed | Renames approved (Finance & Integrations) or required by G1 (limousine); GPS by G2 | PFV-B | 12-icon check ✓; featureList ✓ |
| — (added) | Contact form option "GPS & Payment Integration" | "Data Imports & Integration" | Payments not live (G6) | PFV-B Card payments (D) | payments ✓ |

### `/` (home)

| ID | Old claim | New wording | Reason | Evidence | Validation |
|---|---|---|---|---|---|
| R-01 | H1 "One platform for rental, leasing and fleet operations across the Middle East" | "One cloud ERP for rental, leasing and fleet operations in the UAE" | UAE only; positioning | PFV-B Multi-country (D) | geography ✓; "cloud ERP" ✓ |
| E-03 | "…— connected to your finance system, with real-time dashboards…" | "…one cloud ERP for rental, leasing, transport and workshop operations, with finance built in and live dashboards for the people running the business." | ERP framing | PFV-C | ERP framing ✓ |
| — (added) | Hero chip "ERP & Billing Integration" | "Finance Built In" | ERP framing | PFV-C | manual |
| E-04 | "ERP-Ready Finance: Connect billing, approvals, customer charges and financial posting with enterprise systems." | "Finance Built In: Billing, approvals, customer charges and VAT live in the same system as operations." | ERP framing | PFV-B Own ERP, VAT (A) | ERP framing ✓ |
| T-01 | "Chauffeur & Limousine: Chauffeur allocation, dispatching, trip monitoring, bookings and premium service tracking." | "Chauffeur & Transport: Transport inquiries, quotations, bookings, dispatch board and trips, billed per trip, hour, day or kilometer." | Limousine placeholder; "premium service tracking" unsupported | PFV-B Chauffeur ops (A via Transport) | transport ✓ |
| A-01 | Workshop: "…repair tracking and AI-driven predictive maintenance alerts." | "Service bookings, estimates and approvals, job cards, technicians, quality checks and vehicle release." | No AI | PFV-B AI predictive (C); Workshop (A) | AI ✓ |
| E-07 | Billing: "…approvals and ERP-ready financial handover." | "Rental and corporate invoices, customer charges, approvals and UAE VAT, generated in bulk." | ERP framing | PFV-B Billing, VAT (A) | ERP framing ✓ |
| E-08 | "ERP Integration Platform: ERP and finance system connectivity, APIs, implementation support and post-go-live assistance." | "Finance & Integrations: Ledger, journals, trial balance and UAE VAT, plus imports for Salik, fines, parking and fuel-card statements." | Renamed (approved); ERP framing | PFV-B Own ERP, Salik, Fines, Fuel (A) | ERP framing ✓ |
| G-01 | "GPS Tracking & Geo-Fencing: Track vehicles in real time, define geo-fenced zones…" | module card removed | G2 | PFV-B GPS (D) | GPS ✓ |
| F-01 | Fuel: "Fuel consumption tracking, fuel card integration, cost-per-vehicle reporting and consumption anomaly alerts." | "Import ENOC and ADNOC fuel-card statements and review fuel spend by vehicle, card and station." | File import only | PFV-B Fuel | fuel ✓ |
| — (added; X-08) | "Thirteen modules. One connected platform." | "Twelve modules. One connected platform." | Consequence of G2 | — | manual |
| — (added) | Workflow step "ERP Posting"; H2 "From booking to ERP posting" | "Finance & VAT"; "From booking to finance" | ERP framing | PFV-C | manual |
| G-03 and — (added) | Eyebrow "ERP & Integration Fabric"; H2 "Talks to the systems you already run"; "Pre-built connectors and APIs help integrate mobility operations with ERP and finance systems, GPS tracking, payment gateways and cloud platforms." | "Data Imports & Integrations"; "Outside data, matched to the right record"; "Import Salik tolls, traffic fines, parking charges and fuel-card statements and match each one to the right vehicle and contract. A Traccar GPS tracking server can also be connected." | No pre-built ERP connectors; payments not live; GPS connectivity only | PFV-B Salik, Fines, Parking, Fuel (A); GPS (D) | ERP framing ✓; payments ✓; GPS ✓ |
| G-02, P-03 | Chips "ERP Systems", "Finance Systems", "GPS Tracking", "Payment Gateways", "Open APIs", "Cloud Platform" | "Salik Toll Files", "Traffic Fines", "Fuel-Card Statements", "GPS Tracking Server", "REST APIs", "Cloud-Hosted" | As above | PFV-B | payments ✓; generic ✓ |
| T-03 | "Built for" chip "Limousine" | "Chauffeur" | Placeholder | PFV-B Limousine (C) | transport ✓ |
| R-02 | "Middle East Domain Expertise: Built around how rental, leasing, limousine, bus transportation and workshop operations actually run in this region…" | "UAE Operations Built In: Salik tolls, UAE traffic fines, UAE VAT and AED billing are part of the product, not add-ons." | Geography; limousine | PFV-B Salik, Fines, VAT (A) | geography ✓ |
| E-05 | "ERP-Connected Operations: …post cleanly to your finance system…" | "Operations and Finance Together: Invoices, charges and VAT are raised from the contract itself, so nothing is re-keyed into a separate finance system." | ERP framing | PFV-B Billing (A) | ERP framing ✓ |
| E-06 | "…the integration depth to connect with your finance systems…" | "…finance in the same system…" | ERP framing | PFV-C | ERP framing ✓ |
| G-18 | "real-time insight" / "Real-time dashboards" | kept | Dashboards read the live database | PFV-B Vehicle master (A) | manual |

### `/platform`

| ID | Old claim | New wording | Reason | Evidence | Validation |
|---|---|---|---|---|---|
| E-15 | Proof point "ERP Integrated" | "Finance Built In" | ERP framing | PFV-C | manual |
| G-04 | Layer 03 "ERP and finance posting, GPS, payments and APIs" (hero) and "…GPS tracking, payments, APIs and analytics." (section) | "Finance ledger, VAT, data imports and APIs" / "Finance ledger and VAT, Salik, fine, parking and fuel imports, GPS server connection, APIs and reporting." | ERP framing; payments; GPS | PFV-B Own ERP (A); GPS (D) | payments ✓; generic ✓ |
| A-06 | "Intelligent Automation" | "Workflow Automation" | "Intelligent" reads as AI | PFV-E | AI ✓ |
| — (added; X-01) | "Open Integration Platform: Connect with ERP, accounting, payment gateways, GPS providers, telematics, government and regulatory systems, CRM, HR and third-party applications through secure APIs." | "Data Imports & APIs: Import Salik, traffic-fine, parking and fuel-card data, connect a Traccar GPS tracking server, and reach the system through REST APIs." | Missed by the register; payments, government, telematics unsupported | PFV-B | payments ✓; government ✓; generic ✓ |
| A-05 | "…interactive dashboards and AI-powered insights." | "…dashboards and reports." | No AI | PFV-E | AI ✓ |
| W-06 | "Native mobile applications for drivers, workshop technicians, field staff, delivery teams and managers." | "An Android app for drivers, workshop technicians and operations staff: vehicle inspections, trips, workshop jobs and approvals." | Android only | PFV-B Driver mobile app (A) | unverified detail ✓ |
| G-05 | "GPS Tracking & Geo-Fencing" card | removed | G2 | PFV-B GPS (D) | GPS ✓ |
| W-07 | "…encryption and compliance with enterprise security standards." | "Role-based access, audit trails, multi-factor sign-in and encrypted connections." | No certification | PFV-B MFA (A) | unverified detail ✓ |
| W-15 | "Cloud & On-Premise Deployment: …your own on-premise environment." | "Cloud-Hosted: Hosted by FleetArabia and used through a web browser, so there are no servers to buy or maintain." | G3 | PFV-B Cloud hosting (A); On-premises (D) | on-premises ✓ |

### `/solutions`

| ID | Old claim | New wording | Reason | Evidence | Validation |
|---|---|---|---|---|---|
| G-06 | Meta: "An integrated suite of mobility applications — …GPS tracking, analytics, CRM and ERP integration — on one platform." | "Rental, leasing, transport, workshop, billing and finance modules on one cloud ERP. Start with one module or run them together on the same data." | GPS; ERP framing | PFV-B GPS (D); PFV-C | GPS ✓ |
| X-08 | H1 "Thirteen modules."; caption "Thirteen modules, one platform" | "Twelve modules."; "Twelve modules, one platform" | G2 | — | manual |
| R-03 | "…a single branch or a multi-country enterprise…" | "…a single branch or several companies…" | Multi-country not configured | PFV-B | geography ✓ |
| A-02, R-04 | Proof points "AI-Powered Analytics", "Multi-Country Ready" | "Finance Built In", "Multi-Company" | No AI; geography | PFV-E | AI ✓; geography ✓ |
| T-04 | Tab "Chauffeur & Limo"; card "Chauffeur & Limousine: …GPS tracking and service quality." | Tab "Chauffeur"; card "Chauffeur & Transport: Take transport inquiries, send quotations, book and dispatch trips to drivers, and bill per trip, hour, day or kilometer." | Limousine; GPS | PFV-B Transport (A) | transport ✓; GPS ✓ |
| G-06 | GPS tab item and card | removed | G2 | PFV-B GPS (D) | GPS ✓ |
| E-08 | Tab "ERP Integration"; card "ERP Integration Platform: Connect with accounting systems, payment gateways, telematics, GPS providers…" | Tab and card "Finance & Integrations: Ledger, journals, trial balance and UAE VAT, plus imports for Salik, fines, parking and fuel-card statements." | Approved rename; ERP framing; payments | PFV-B | payments ✓; ERP framing ✓ |
| A-17 | "…to create one intelligent mobility ecosystem." | "…so every module works from the same records." | "Intelligent" | PFV-E | AI ✓ |
| T-06 | Bus: "…manage employee or school transportation, optimize schedules and monitor fleet performance in real time." | "Plan routes and school-run schedules, generate trips, assign drivers and vehicles, record driver attendance and bill transport contracts." | No staff-transport feature; no optimization | PFV-B School transport (A); Staff transport (C) | transport ✓ |
| W-01 | Workshop: "…warranty management and service history." | "Run the workshop from service booking and vehicle receipt to inspection, estimate and approval, job card, parts and labor, quality check and road test, release and invoice." | Warranty unverified; use the verified chain | PFV-B Workshop (A code) | manual |
| P-04 | Billing: "Automate invoicing, recurring billing, collections, tax calculations, payments, credit notes, customer statements and ERP financial integration." | "Generate rental, lease, toll and transport invoices in bulk, apply UAE VAT, issue credit notes and customer statements, and record receipts." | Payments ambiguous; ERP framing | PFV-B Billing, VAT (A) | payments ✓ |
| F-02 | Fuel: "Monitor fuel consumption, fuel card transactions, mileage, efficiency trends…" | "Import ENOC and ADNOC fuel-card statements and review fuel spend by vehicle, card and station." | File import only | PFV-B Fuel | fuel ✓ |
| W-05 | Drivers: "…certifications, violations, training, attendance…" | "Driver profiles, licenses and documents with expiry tracking, assignments, incidents, attendance and compliance checks." | Training and violations unverified | PFV-B Driver mgmt (A) | manual |
| A-03 | BI: "…revenue analysis and AI-powered performance insights." | "…fleet utilization reports and revenue analysis across branches and companies." | No AI | PFV-E | AI ✓ |
| A-04, R-04, W-15, — | Why list: "AI-Powered Analytics & Reporting", "Open APIs & Integrations", "Mobile Apps for Field Operations", "Multi-Company, Multi-Branch, Multi-Country", "Cloud or On-Premises Deployment" | "Dashboards & Reporting", "Data Imports & APIs", "Android App for Field Staff", "Multi-Company, Multi-Branch", "Cloud-Hosted" | AI; geography; G3; Android only | PFV-B | AI ✓; geography ✓; on-premises ✓ |

### `/fleet-leasing`

| ID | Old claim | New wording | Reason | Evidence | Validation |
|---|---|---|---|---|---|
| E-12 | "…all connected through one intelligent ERP. Whether you manage hundreds or thousands of leased vehicles, FleetArabia provides the automation…" | "…all in one cloud ERP." | "Intelligent"; implied scale | PFV-C | AI ✓ |
| E-12 | Proof point "ERP & Finance Integration" | "Finance Built In" | ERP framing | PFV-C | manual |
| W-04 | "…maintenance history, warranty tracking and asset utilization…" | "…maintenance history and asset utilization…" | Warranty unverified | — | manual |
| P-06 | "…taxes, deposits, credit notes and revenue recognition automatically." | "Generate recurring lease invoices, consolidated customer billing, VAT, deposits and credit notes." | Revenue recognition: 0 refs in code | code search; PFV-B Leasing (A) | unverified detail ✓ |
| W-03 | "Schedule preventive maintenance, repairs, inspections, recalls, tire replacement, warranties…" | "Book leased vehicles into the workshop for servicing and repairs, with replacement vehicles keeping the contract running." | Recalls, tyres, warranties unverified | PFV-B Workshop, Leasing (A) | manual |
| F-03 | "…licenses, violations, fuel cards, accessories…" | "…licenses, accessories and responsibilities throughout the lease." | Fuel-card assignment unverified | PFV-B Fuel | manual |
| P-07 | "Financial & ERP Integration: Automatically synchronize contracts, invoices, payments, depreciation, taxes, journals and receivables with your ERP and accounting systems." | "Finance in the Same System: Lease contracts, invoices, VAT and receivables are recorded in the same system as the contracts themselves." | No outbound ERP sync; G5 | PFV-B Own ERP (A); Connects to another ERP (D) | ERP framing ✓ |
| G-07, A-07, — | Why list: "Real-Time Fleet Visibility", "Preventive Maintenance Scheduling", "ERP & Financial Integration", "GPS Tracking & Geo-Fencing", "AI-Powered Dashboards & Analytics", "Mobile Apps for Field Operations" | "Fleet Status Dashboards", "Workshop Bookings", "Finance Built In", *(removed)*, "Dashboards & Reporting", "Android App for Field Staff" | GPS; AI; ERP framing; Android only | PFV-B | AI ✓; GPS ✓ |
| A-08 | Final CTA: "…complete visibility, intelligent automation and seamless ERP integration — helping leasing companies reduce operational costs…" | "Replace spreadsheets with one system for lease quotations, agreements, billing, maintenance and finance, from customer acceptance to lease end." | "Intelligent"; ERP framing; outcome claims | PFV-C | ERP framing ✓ |
| E-13 | Meta "…on one connected ERP." | kept | True | PFV-C | — |

### `/industries`

| ID | Old claim | New wording | Reason | Evidence | Validation |
|---|---|---|---|---|---|
| T-05 | Meta "…rental, leasing, limousine, bus transportation…"; intro "…limousine services, bus transportation…" | Meta "Industry-specific software for rental, leasing, chauffeur, bus and school transport, corporate fleets, workshops and government fleets."; intro "…chauffeur services, bus and school transport…" | Limousine placeholder | PFV-B | transport ✓ |
| R-05 | Proof "Middle East Ready" | "Built for the UAE" | UAE only | PFV-B | geography ✓ |
| T-05, T-07, W-02 | Chips "Chauffeur & Limousine", "Bus & Staff Transport", "Workshops & Service" | "Chauffeur", "Bus & School Transport" (approved), "Workshops" | Limousine; staff transport; G4 | PFV-B | transport ✓; external workshop ✓ |
| T-05 | "Chauffeur & Limousine Services: …GPS tracking and executive transportation." | "Chauffeur Services: Take transport inquiries, send quotations, book and dispatch trips to drivers, and bill per trip, hour, day or kilometer." | Limousine; GPS | PFV-B | transport ✓ |
| T-07 | "Bus & Staff Transportation: …school and employee transport… real-time visibility." | "Bus & School Transport: Plan routes and school-run schedules, generate trips, assign drivers and vehicles, record driver attendance and bill transport contracts." | Approved rename; no staff-transport feature | PFV-B School transport (A) | transport ✓ |
| G-09 | Corporate fleets: "…fuel monitoring, GPS tracking and cost center reporting." | "Run company-owned fleets: vehicle register and movements, driver records and compliance, workshop jobs, fuel-card statement imports and reports by company and branch." | GPS; fuel overstated | PFV-B | GPS ✓; fuel ✓ |
| W-02 | "Workshop & Service Centers: …technician productivity, warranties…" | "Workshops: Run the workshop from service booking and vehicle receipt to inspection, estimate and approval, job card, parts and labor, quality check and road test, release and invoice." | G4; warranties | PFV-B Workshop (A code) | external workshop ✓ |
| W-08 | "Government & Public Sector Mobility: Support secure, auditable and compliant fleet operations for municipalities, ministries…" | "Government & Public Sector: Role-based access, approvals and a full audit trail for public-sector fleets." | "Compliant" unverified | PFV-B MFA (A) | manual |
| R-05 | "Built for enterprise mobility across the Middle East / …throughout the GCC and Middle East…" | "Built for fleet businesses in the UAE / FleetArabia handles the UAE-specific parts of running a fleet: Salik, traffic fines, parking charges, UAE VAT and AED billing." | UAE only | PFV-B | geography ✓ |
| P-05 | "Enterprise Financial Integration: Connect operations with ERP, accounting, procurement, payroll, banking and payment gateways…" | "Finance in the Same System: Ledger, VAT, payables and procurement run in the same system as your fleet operations." | ERP framing; payments; payroll incomplete | PFV-B Own ERP (A); PFV-F HR | payments ✓ |
| G-10 | "Real-Time Fleet Visibility: Track vehicles, drivers… GPS… through live dashboards." | "Fleet Dashboards: See vehicles, drivers, contracts, workshop jobs and fuel spend on dashboards that read the same records your teams work in." | GPS | PFV-B GPS (D) | GPS ✓ |
| A-09 | "…profitability analysis and AI-powered reporting." | "…KPI monitoring and profitability reports." | No AI | PFV-E | AI ✓ |
| R-05 | "Regional Expertise: Purpose-built for the Middle East…" | "UAE VAT and Salik: UAE VAT on every invoice line, and Salik and fine charges matched to the right contract." | UAE only | PFV-B VAT, Salik (A) | geography ✓ |
| A-10 | Final CTA "…intelligent automation, real-time analytics and seamless ERP integration…" | "FleetArabia puts vehicles, contracts, drivers, workshop, billing and finance in one system. Tell us how your fleet runs today." | AI; ERP framing | PFV-C | ERP framing ✓ |

### `/integrations` (largest rewrite)

| ID | Old claim | New wording | Reason | Evidence | Validation |
|---|---|---|---|---|---|
| E-11 | Meta "Connect mobility operations to finance, banking, telematics, payment gateways, government platforms, CRM and HR…" | "Bring Salik tolls, traffic fines, parking charges and fuel-card statements into FleetArabia and match them to the right vehicle and contract." | Unverified connections | PFV-B | generic ✓ |
| S-07, E-11 | Eyebrow "Enterprise Integration Platform"; H1 "Connect to your ERP, payments, GPS and government systems"; lead "…seamlessly connects… keep every system synchronized in real time." | "Integrations & Data Imports"; H1 "Bring Salik, fines, parking and fuel data into your fleet ERP"; lead "Import Salik tolls, traffic fines, parking charges and fuel-card statements and match each one to the right vehicle and contract. FleetArabia can also connect to a Traccar GPS tracking server, and runs on REST APIs." | ERP framing; payments; government; real-time | PFV-B | ERP framing ✓; payments ✓ |
| G-14 | Chips "Open API Platform", "Real-Time Integration" | "REST APIs", "File & Data Imports" | Imports are files and feeds | PFV-B | manual |
| — (added) | Hero visual: caption "Your systems, connected"; right side "ERP & Finance, Payment Gateways, GPS & Telematics, Government Services, CRM & Customer Platforms"; left "Drivers & GPS"; center "Secure APIs" | Caption "Outside data, matched to the right record"; right "Salik Tolls, Traffic Fines, Parking Charges, Fuel-Card Statements, GPS Tracking Server"; left "Drivers"; center "Imports & APIs" | As above | PFV-B | payments ✓; generic ✓ |
| — (added), G-14 | Section: "Connect Every System That Powers Your Business / FleetArabia enables secure, real-time connectivity across your entire business ecosystem." | "Outside data, in the same system / Toll, fine, parking and fuel data are imported and matched to the right vehicle and contract." | Real-time; overstatement | PFV-B | ERP framing ✓ |
| — (E-11, P-01, G-11, S-05, W-13, W-09, A-11, W-15) | 8 cards: ERP & Financial Systems / Payment Gateways / GPS Tracking & Geo-Fencing / Government Services / CRM & Customer Platforms / Open API Platform / BI with "AI-powered analytics tools" / Cloud & on-premises | 8 cards: Finance Built In / Tolls, Fines & Parking / Fuel-Card Statements / GPS Tracking Server ("connects to a Traccar GPS tracking server, configured during implementation") / Customer Portal & CRM / APIs / Dashboards & Reports / Cloud-Hosted | Each per its register item | PFV-B | all groups ✓ |
| W-12 | "Connect Once. Automate Everywhere. / …the central integration hub…" | "Imports that land on the right record / …matched to the vehicle, contract and customer they belong to; anything that cannot be matched waits in an exception queue." | Overstatement | PFV-B Salik/Fines (exception rows, manual assign) | manual |
| W-10, G-12 | Supported list: ERP & Accounting, Payment Gateways, GPS & Telematics Providers, Banking, Government Services, CRM, HR & Payroll, BI Tools, Customer Websites & Apps, Fleet IoT Devices, Digital Signature Platforms, Document Management | "Supported Imports & Connections": Salik Toll Files, Traffic-Fine Files & Data Feed, Parking Charge Files, ENOC & ADNOC Fuel Statements, GPS Tracking Server (Traccar), Customer Portal, Email Notifications, REST APIs | Almost none verified externally | PFV-B | GPS ✓; payments ✓ |
| W-11, G-14 | Why list incl. "Real-Time Data Synchronization", "Event-Driven Workflows", "Low-Code Integration Framework", "Scalable Cloud Architecture" | API-First Architecture, Secure Authentication & Encryption, Role-Based Access, Multi-Company & Multi-Branch, Exception Queues for Unmatched Charges, Audit Logs (grid now 3 columns) | Unverifiable items removed | PFV-B | ERP framing ✓ |
| S-08 | "GCC Localization / Engineered for Middle East Mobility Ecosystems / …GCC government transport authorities, toll platforms, local payment networks, and compliance portals." | "Built for the UAE / UAE operations built in / Salik tolls, UAE traffic fines, parking charges, UAE VAT and AED billing are part of the product." | Geography | PFV-B | geography ✓ |
| S-01 | "Salik Toll Gate Integration: …pulling toll gate transactions and posting them directly…" | "Salik Toll Import: Import Salik toll files. Each crossing is matched to the contract that had the vehicle at that moment, and invoiced." | CSV import | PFV-B Salik (A) | government ✓ |
| S-02 | "GCC Traffic Fine Automation: Built to connect with Dubai Police, Abu Dhabi Police, and Saher… charge customer cards." (UAE & KSA) | "Traffic Fine Import: Import fines from a file or a data feed, find who had the vehicle at the time, then allocate, verify, dispute and notify by email." (UAE) | No police connection; cards not live | PFV-B Traffic fines (A) | government ✓; payments ✓ |
| S-03, S-04, P-02, G-13 | TAMM & ELM; SATA; Mada/KNET/Benefit/NAPS; SecurePath/Shahin/WASL cards | removed | No code | PFV-E | government ✓; payments ✓; GPS ✓ |
| — (added) | — | "Parking Charge Import" (UAE) and "Fuel-Card Statement Import" (ENOC & ADNOC) cards | Verified imports that replace the removed cards | PFV-B Parking, Fuel (A) | fuel ✓ |
| — (added) | Final CTA "One Connected Platform for Your Entire Mobility Business / …By integrating every critical business system, you gain real-time visibility… Integrate. Automate. Scale." | "One system for your fleet and its data / FleetArabia brings operations, finance, vehicles, drivers and customers into one cloud ERP, with outside data imported and matched instead of re-keyed." | Overstatement | PFV-C | manual |

### `/deployment` (G3: cloud only)

| ID | Old claim | New wording | Reason | Evidence | Validation |
|---|---|---|---|---|---|
| W-15 | Meta "…fully managed SaaS cloud or within your own on-premises infrastructure…" | "FleetArabia is hosted in the cloud and used through a web browser: no servers to buy, subscription licensing and updates handled for you." | G3 | PFV-B Cloud (A), On-prem (D) | on-premises ✓ |
| W-15 | H1 "Run it in our cloud or on your own servers" and intro | H1 "Hosted in the cloud, used in your browser"; "FleetArabia runs as a hosted service. Your branches, workshops and offices use it through a web browser, and FleetArabia looks after the servers and updates." | G3 | as above | on-premises ✓ |
| W-15 | Proof "On-Premises"; split visual SaaS vs On-Premises | Proof "Browser Access"; facts visual: Hosting (managed by FleetArabia), Access (web browser), Licensing (subscription), Updates (applied by FleetArabia) | G3 | as above | on-premises ✓ |
| W-15 | Whole "On-Premises" section (8 cards) | removed | G3 | as above | on-premises ✓ |
| G-15, W-15 | "One platform. Two deployment choices." list incl. "GPS Tracking & Geo-Fencing", "API-First Integrations" | "Every module, hosted for you" list incl. "Fuel-Card Statement Imports", "Dashboards & Reporting", "Data Imports & APIs" | G2, G3 | PFV-B | GPS ✓ |
| W-15 | Final CTA "…cloud for agility or on-premises for complete control…" | "Questions about hosting? Ask us. / Tell us how many branches and users you have, and we'll walk you through how the hosted service works." | G3 | as above | on-premises ✓ |
| — | SaaS section ("No Hardware to Buy", "Subscription Licensing", "Updates Handled for You"…) | kept | Owner-stated hosting facts | — | — |

### `/services`

| ID | Old claim | New wording | Reason | Evidence | Validation |
|---|---|---|---|---|---|
| A-16 | "AI-Powered Automation" | removed | No AI | PFV-E | AI ✓ |
| P-08 | "Payment Gateway Integration" | removed | G6 | PFV-B Card payments (D) | payments ✓ |
| G-16 | "GPS & IoT Integration" | "GPS Tracking Server Integration" | No IoT; G2 | PFV-B GPS (D) | GPS ✓ |
| — (added; X-02) | "System Integration: Integrate with finance systems, payment gateways, GPS & telematics, HR, CRM, government services…" | "Connect FleetArabia to Salik, traffic-fine, parking and fuel-card data, a GPS tracking server and other systems through its REST APIs." | Missed by the register; payments, government, telematics | PFV-B | payments ✓; government ✓ |
| — (added; X-03) | "Develop native and cross-platform mobile applications… with real-time synchronization." | "Develop mobile applications for customers, drivers, field staff, workshop technicians and management." | "Native" guardrail; real-time sync | — | unverified detail ✓ |

### `/company`

| ID | Old claim | New wording | Reason | Evidence | Validation |
|---|---|---|---|---|---|
| A-15 | Meta "…building intelligent enterprise software…" | "FleetArabia is a technology company building a cloud ERP for vehicle rental, leasing, transport and workshop businesses in the UAE." | "Intelligent" | PFV-C | AI ✓ |
| W-15, W-14, A-12 | Why list "Cloud & On-Premises Deployment", "Open API & Integration Platform", "AI-Powered Analytics & Dashboards" | "Cloud-Hosted", "Data Imports & APIs", "Dashboards & Reporting" | G3; overstatement; AI | PFV-B | AI ✓; on-premises ✓ |
| A-15 | Intro "…through intelligent enterprise software." | "…with a cloud ERP built for rental, leasing, transport and workshop operations." | "Intelligent" | PFV-C | AI ✓ |
| E-09 | "Approach: One platform, connected to your ERP" | "One ERP for operations and finance" | ERP framing | PFV-C | ERP framing ✓ |
| A-15 | "…real-time data and intelligent automation." | "…live data and workflow automation." | "Intelligent" | PFV-E | AI ✓ |
| W-14 | "Enterprise Technology: …scalable architecture, enterprise security and API-first connectivity." | "Modern, cloud-hosted software with role-based security and REST APIs." | Overstatement | PFV-B | manual |
| A-13 | "Leveraging automation, analytics, mobile technology, AI and real-time integrations…" | "Workflow automation, reporting, a mobile app for field staff and document scanning at customer onboarding." | No AI; keeps the verified OCR | PFV-B OCR (A) | AI ✓ |
| A-14 | "…intelligent automation, AI, analytics…" | "We keep improving the product around how fleet businesses actually work: fewer manual steps, clearer records and better reporting." | No AI | PFV-E | AI ✓ |
| A-15 | "…one intelligent business ecosystem."; mission "intelligent technology"; vision "connected, intelligent and data-driven platform" | "…one system."; "practical technology"; "connected, data-driven platform" | "Intelligent" | PFV-E | AI ✓ |

### `/contact`

| ID | Old claim | New wording | Reason | Evidence | Validation |
|---|---|---|---|---|---|
| G-20 (meta) | "Questions about rental, leasing, workshop management, GPS tracking, payment gateways or ERP integration?…" | "Questions about rental, leasing, transport, workshop or billing? Tell us what you're working on and we'll help you find the right starting point." | Payments (G6); GPS | PFV-B | payments ✓ |
| E-10 | Intro "…GPS and payment integration, or connecting to your ERP…" | "Whether it's rental, leasing, transport, workshop or billing, tell us what you're working on…" | ERP framing; payments | PFV-C | ERP framing ✓ |
| S-10 | "Talk through ERP, finance, GPS, payment gateway, Salik…" | "Talk through finance, Salik, traffic fine, parking, fuel-card, GPS tracking server, billing and API requirements." | Payments (G6) | PFV-B | payments ✓ |
| P-09 | "…and payment process automation." | "Rental agreements, bookings, invoicing, customers, vehicles and payment recording." | Payments ambiguous | PFV-B Billing (A) | payments ✓ |
| — | "GPS & Payment Integration: GPS tracking, payment gateway, ERP, finance…" | "Data Imports & Integration: Salik, traffic fines, parking, fuel-card statements, GPS tracking server connection and APIs." | G6; G2 | PFV-B | payments ✓ |
| R-06 | "We work with fleet businesses across the Middle East…"; "Coverage: Middle East rental…" | "FleetArabia has offices in Dubai, UAE and Patna, India."; "Coverage: UAE rental, leasing, transport, workshop and company fleets." | Geography; implied customers | Company facts | geography ✓; readiness ✓ |
| E-10 | Final CTA "…connects your day-to-day operations to your ERP." | "Book a live demo and see your day-to-day operations and finance in one system." | ERP framing | PFV-C | ERP framing ✓ |

---

## Deviations from the correction document, and open points

1. **GPS is removed as a module**, not reworded (the doc's conditional path under G2). Consequences:
   - the site now says "Twelve modules"
   - the icon check expects 12
   - the SoftwareApplication `featureList` has 12 entries
   - GPS remains only as "Traccar GPS tracking server" connectivity
2. **"Chauffeur & Limousine" → "Chauffeur & Transport"** follows T-01/T-09 under G1. It was not in the explicit rename list, so it is flagged here for confirmation.
3. **Items the register missed**, found while implementing (most by the new guardrails) and fixed the same way:
   - the default final CTA "ERP-connected operation"
   - /platform "Open Integration Platform"
   - /services "System Integration" and "Mobile Application Development"
   - home: hero chip, workflow "ERP Posting", integrations section heading and chips
   - footer "ERP Integrations"
   - the contact form option
   - the /integrations visual, headings and final CTA
4. **Kept on /services, as the owner's service offers (W-16):** "Online Reservation Systems", "Digital Agreement & eSignature Integration", "Customer Self-Service Portals", and the Website Development card's "online booking portals". These describe work the team offers to build, not live product features. Remove them if G8 is meant to cover service offers too.
5. **Social image (R-07) unchanged**, as instructed. Its alt text "FleetArabia — Enterprise Mobility Platform for the Middle East" still appears in `og:image:alt`/`twitter:image:alt`. The guardrails deliberately do not scan those two tags. When the image is updated, add them back to the scan.
6. **"Real-time dashboards" kept** (G-18): dashboards read the live database.
7. **Visible H1s changed** on home, /solutions, /integrations and /deployment (content, as documented). `<title>`s are unchanged.
8. Nothing on this branch is live: production is `91a913a` until the owner approves a release.
