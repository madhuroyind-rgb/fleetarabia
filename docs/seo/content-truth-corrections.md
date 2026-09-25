# FleetArabia website — content truth corrections

Status: **plan only.** No page, metadata, route or code has been changed.
Branch: `feat/seo-content-architecture`. Production (`main` = `origin/main`) is **`91a913a`**.
Prepared 2026-09-25 for Madhurendra (owner) and whoever applies the edits.
Builds on `docs/seo/content-architecture.md` (CA) and `docs/seo/product-fact-validation.md` (PFV). Where they disagree, PFV wins, and this document follows PFV.

## How to read this

- **Scope.** Every claim was taken from the source on `main` @ `91a913a`, which is exactly what www.fleetarabia.com serves. Paths and line numbers refer to that commit.
- **Places searched:**
  - page copy
  - metadata descriptions
  - Organization JSON-LD
  - the social image
  - the footer and navigation
  - the contact form options
  - shared components
- **Wording.** "Exact current wording" is quoted verbatim from source. HTML entities are shown as the rendered character.
- **Actions:**
  - **REMOVE**: take out; no replacement
  - **REWORD**: replace with the proposed wording
  - **KEEP**: supported, or not a product claim; listed so it is not "fixed" by mistake
- **Evidence** points to PFV:
  - `PFV-B:<row>` is a row of the verified capability matrix
  - `PFV-E` is the "must not be used" table
  - `PFV-F` is the readiness gaps
- **Owner?**
  - **G1**: removing or rewording a claim the owner confirmed on 2026-09-20; needs the owner's OK before publishing
  - **G2 / G3 / G4 / G6 / G7 / G8**: the open PFV questions (§5)
  - **—**: needs no confirmation
- **Headings (H1/H2) are content, not titles.** Page `<title>`s are not changed here, as instructed. The one social image change is listed but deferred, as instructed.

---

## 1. Correction register

### 1.1 AI and "intelligent" claims

The product has no AI. Its only ML component is OCR for onboarding documents (PFV-B "AI predictive maintenance", "AI analytics / recommendations", "OCR of onboarding documents"; PFV-E rows 1–3). "Intelligent" is reworded wherever it could be read as AI.

| ID | Page — file:line | Exact current wording | Why | Action | Proposed wording | Evidence | Owner? |
|---|---|---|---|---|---|---|---|
| A-01 | `/` — app/page.tsx:77 (Workshop card) | "Job cards, service schedules, preventive maintenance, technicians, approvals, repair tracking and AI-driven predictive maintenance alerts." | No prediction code; the workshop test forbids `predict`/`classifier` | REWORD | "Service bookings, estimates and approvals, job cards, technicians, quality checks and vehicle release." | PFV-B AI predictive maintenance (C); PFV-B Workshop (A) | G1 |
| A-02 | `/solutions` — app/solutions/page.tsx:21 (proof points) | "AI-Powered Analytics" | No AI | REWORD | "Finance Built In" | PFV-E row 3 | G1 |
| A-03 | `/solutions` — :74 (BI card) | "…revenue analysis and AI-powered performance insights." | No AI | REWORD | "Dashboards and reports on fleet utilization, revenue and operations across branches and companies." | PFV-E row 3; code: `frontend/src/app/transactions/dashboard/*` (24 screens), `routers/reports.py` (35 routes) | G1 |
| A-04 | `/solutions` — :88 | "AI-Powered Analytics & Reporting" | No AI | REWORD | "Dashboards & Reporting" | PFV-E row 3 | G1 |
| A-05 | `/platform` — app/platform/page.tsx:59 | "…through interactive dashboards and AI-powered insights." | No AI | REWORD | "…through dashboards and reports." | PFV-E row 3 | G1 |
| A-06 | `/platform` — :48 (card title) | "Intelligent Automation" | "Intelligent" implies AI; the card text itself is supported | REWORD | "Workflow Automation" (keep the card text) | PFV-B Billing (A); approval workflows | — |
| A-07 | `/fleet-leasing` — app/fleet-leasing/page.tsx:68 | "AI-Powered Dashboards & Analytics" | No AI | REWORD | "Dashboards & Reporting" | PFV-E row 3 | G1 |
| A-08 | `/fleet-leasing` — :75 (final CTA) | "…FleetArabia delivers complete visibility, intelligent automation and seamless ERP integration — helping leasing companies reduce operational costs, improve fleet utilization and deliver exceptional customer experiences." | "Intelligent"; "ERP integration" contradicts the product being the ERP; outcome claims imply customers | REWORD | "Replace spreadsheets with one system for lease quotations, agreements, billing, maintenance and finance, from customer acceptance to lease end." | PFV-C; PFV-B Leasing (A) | — |
| A-09 | `/industries` — app/industries/page.tsx:61 | "…profitability analysis and AI-powered reporting." | No AI | REWORD | "…and profitability reports." | PFV-E row 3 | G1 |
| A-10 | `/industries` — :68 (final CTA) | "…Replace disconnected systems with intelligent automation, real-time analytics and seamless ERP integration to improve efficiency, reduce costs and accelerate business growth. Transform your mobility operations with FleetArabia." | "Intelligent"; ERP framing; outcome claims | REWORD | "FleetArabia puts vehicles, contracts, drivers, workshop, billing and finance in one system. Tell us how your fleet runs today." | PFV-C | — |
| A-11 | `/integrations` — app/integrations/page.tsx:41 | "Stream operational and financial data into dashboards, reporting platforms, data warehouses and AI-powered analytics tools for better decision-making." | No AI; no data-warehouse feed found | REWORD | "Dashboards, reports and bulk downloads of operational and financial data." | PFV-E row 3 | G1 |
| A-12 | `/company` — app/company/page.tsx:17 | "AI-Powered Analytics & Dashboards" | No AI | REWORD | "Dashboards & Reporting" | PFV-E row 3 | G1 |
| A-13 | `/company` — :53 | "Leveraging automation, analytics, mobile technology, AI and real-time integrations to modernize fleet operations." | No AI; integrations are mostly file imports | REWORD | "Workflow automation, reporting, a mobile app for field staff and document scanning at customer onboarding." | PFV-B OCR (A); PFV-B Salik/Fuel (file import) | G1 |
| A-14 | `/company` — :63 | "We continuously invest in modern technologies, intelligent automation, AI, analytics and digital experiences to keep fleet businesses ahead of the market." | No AI | REWORD | "We keep improving the product around how fleet businesses actually work: fewer manual steps, clearer records and better reporting." | PFV-E row 3 | G1 |
| A-15 | `/company` — :9 (meta), :31, :49, :64, :91, :106 | "intelligent enterprise software" (:9, :31); "real-time data and intelligent automation" (:49); "one intelligent business ecosystem" (:64); "intelligent technology" (:91); "connected, intelligent and data-driven platform" (:106) | "Intelligent" reads as AI | REWORD | Replace "intelligent" with "connected" / "practical" / "one system" as fits; e.g. :9 → "FleetArabia is a technology company building a cloud ERP for vehicle rental, leasing, transport and workshop businesses." | PFV-C | — |
| A-16 | `/services` — app/services/page.tsx:21 | "AI-Powered Automation" | No AI | REMOVE | — | PFV-E row 3 | G1 |
| A-17 | `/solutions` — :62 | "…to create one intelligent mobility ecosystem." | "Intelligent" | REWORD | "…so every module works from the same records." | PFV-C | — |

No page claims AI damage detection, AI damage classification or AI document processing today. Nothing to correct there; the guardrails in §3 keep it that way.

### 1.2 GPS, telematics, "real-time" and IoT

A Traccar tracking server is installed and configured, but no vehicle data was verified (PFV-B GPS tracking = D). Until **G2** is answered, GPS is described as *connectivity*, never as live tracking. If G2 stays unanswered, remove the GPS module card rather than reword it.

| ID | Page — file:line | Exact current wording | Why | Action | Proposed wording | Evidence | Owner? |
|---|---|---|---|---|---|---|---|
| G-01 | `/` — app/page.tsx:105–107 (module card) | Title "GPS Tracking & Geo-Fencing"; text "Track vehicles in real time, define geo-fenced zones, receive movement alerts, monitor route compliance and improve fleet utilization." | Live tracking not verified; no route-compliance logic | REWORD | Title "GPS Tracking Connection"; text "Connects to a Traccar GPS tracking server to show vehicle positions, trips, events and geofences inside the Transport module." | PFV-B GPS tracking (D) | **G2** |
| G-02 | `/` — :141 (integration chip) | "GPS Tracking" | As above | REWORD | "GPS Server (Traccar)" | PFV-B GPS (D) | G2 |
| G-03 | `/` — :443–445 | "Pre-built connectors and APIs help integrate mobility operations with ERP and finance systems, GPS tracking, payment gateways and cloud platforms." | No pre-built ERP connectors; payment gateway not configured; the product is the ERP | REWORD | "Import Salik tolls, traffic fines, parking charges and fuel-card statements, and connect a GPS tracking server, so outside data lands on the right vehicle and contract." | PFV-B Salik/Fines/Parking/Fuel (A), GPS (D), Card payments (D), Connects to another ERP (D) | G1, G2 |
| G-04 | `/platform` — app/platform/page.tsx:28 and :103 (Enterprise layer) | :28 "ERP and finance posting, GPS, payments and APIs"; :103 "ERP and finance posting, GPS tracking, payments, APIs and analytics." | ERP framing; payments not live; GPS unverified | REWORD | :28 "Finance ledger, VAT, data imports and APIs"; :103 "Finance ledger and VAT, Salik, fine, parking and fuel imports, GPS server connection, APIs and reporting." | PFV-B Own ERP (A), Card payments (D) | G2 |
| G-05 | `/platform` — :68–69 | Title "GPS Tracking & Geo-Fencing"; text "Track vehicle locations in real time, create geo-fenced operational zones, monitor route compliance and receive instant alerts." | Unverified | REWORD | As G-01 | PFV-B GPS (D) | G2 |
| G-06 | `/solutions` — :73 (card) and :8 (meta description) | :73 same text as G-01; :8 "…rental, leasing, workshop, billing, GPS tracking, analytics, CRM and ERP integration — on one connected platform." | Unverified GPS; ERP framing | REWORD | :73 as G-01. :8 is superseded by the shorter description in `1893503`; use "Rental, leasing, transport, workshop, billing and finance modules on one cloud ERP. Start with one module or run them together on the same data." (144) | PFV-B GPS (D); PFV-C | G2 |
| G-07 | `/fleet-leasing` — :63, :67 (feature list) | "Real-Time Fleet Visibility"; "GPS Tracking & Geo-Fencing" | Unverified | REMOVE (:67); REWORD (:63) | :63 → "Fleet Status Dashboards" | PFV-B GPS (D) | G2 |
| G-08 | `/industries` — :44 | "Optimize chauffeur scheduling, dispatch operations, bookings, trip management, customer service, GPS tracking and executive transportation." | GPS unverified; "executive transportation" implies limousine | REWORD | See T-05 | PFV-B GPS (D); Limousine (C) | G2 |
| G-09 | `/industries` — :46 | "Control company-owned fleets through vehicle allocation, driver management, maintenance scheduling, fuel monitoring, GPS tracking and cost center reporting." | GPS unverified; "fuel monitoring" overstates file import | REWORD | "Run company-owned fleets: vehicle register and movements, driver records and compliance, workshop jobs, fuel-card statement imports and reports by company and branch." | PFV-B Vehicle master, Driver mgmt, Fuel (A) | — |
| G-10 | `/industries` — :60 | Title "Real-Time Fleet Visibility"; text "Track vehicles, drivers, contracts, maintenance, fuel, GPS and operational performance through live dashboards." | GPS unverified | REWORD | Title "Fleet Dashboards"; text "See vehicles, drivers, contracts, workshop jobs and fuel spend on dashboards that read the same records your teams work in." | PFV-B Vehicle master (A) | — |
| G-11 | `/integrations` — :24–25 | Title "GPS Tracking & Geo-Fencing"; text "Connect GPS and telematics providers to monitor live vehicle locations, trip history, utilization, driver behavior, geo-fencing events and fleet performance." | No driver-behaviour logic; "providers" plural unverified; live data unverified | REWORD | Title "GPS Tracking Server"; text "Connect a Traccar GPS tracking server to see vehicle positions, trip history, events and geofences in the Transport module." | PFV-B GPS (D) | G2 |
| G-12 | `/integrations` — :52, :59, :199 | "GPS & Telematics Providers"; "Fleet IoT Devices"; chip "GPS & Telematics" | Unverified; no IoT code | :52 REWORD, :59 REMOVE, :199 REWORD | :52 and :199 → "GPS Server (Traccar)" | PFV-B GPS (D) | G2 |
| G-13 | `/integrations` — :98–100 | "Local GPS Gateways (SecurePath/WASL)" / "Built to support regulatory compliance by feeding location metrics to local tracking authorities (SecurePath in Dubai, Shahin in Abu Dhabi, WASL in Saudi Arabia)." | No code | REMOVE | — | PFV-E "Named GPS or regulatory feeds" | G1 |
| G-14 | `/integrations` — :66, :153, :217, :135–139 | "Real-Time Data Synchronization"; "Real-Time Integration"; "FleetArabia enables secure, real-time connectivity across your entire business ecosystem."; "…keep every system synchronized in real time." | Integrations are file imports and one pushed feed | :66 REMOVE; :153, :217 REWORD; :135–139 see E-11 | :153 → "File & Data Imports"; :217 → "Toll, fine, parking and fuel data are imported and matched to the right vehicle and contract." | PFV-B Salik, Fines, Parking, Fuel (A, file import) | — |
| G-15 | `/deployment` — app/deployment/page.tsx:72 | "GPS Tracking & Geo-Fencing" | Unverified | REWORD | "GPS Server Connection" | PFV-B GPS (D) | G2 |
| G-16 | `/services` — :22 | "GPS & IoT Integration" | No IoT; GPS unverified | REWORD | "GPS Tracking Integration" (a service to set up) | PFV-B GPS (D) | G2, G8 |
| G-17 | footer — components/Footer.tsx:23 | Link label "GPS Tracking & Geo-Fencing" | Unverified | REWORD | Match G-01's title, or remove the link if the card is removed | PFV-B GPS (D) | G2 |
| G-18 | `/` — :44, :83, :213 | "Give leadership real-time insight…"; "Real-time dashboards, utilization trends…"; "…with real-time dashboards for the people running the business." | Dashboards read the live database, so "real-time" is accurate here | KEEP | — | PFV-B Vehicle master (A) | — |
| G-19 | `/resources/erp-integration-checklist` — :68–72 | "…and GPS or telematics feeds for utilization reporting…" | General advice to readers, not a product claim | KEEP | — | — | — |
| G-20 | `/contact` — :9, :19; components/ContactForm.tsx:11 | "…GPS tracking, payment gateways or ERP integration?" (meta); "…GPS and payment integration, or connecting to your ERP…"; form option "GPS & Payment Integration" | Enquiry topics, not claims; but :19 carries the ERP framing | :9 KEEP, form option KEEP, :19 REWORD (see E-10) | — | — | — |

### 1.3 Fuel

Fuel is a CSV/Excel import of ENOC and ADNOC card statements with a duplicate-file guard. There is no odometer, consumption, efficiency or anomaly logic (PFV-B Fuel).

| ID | Page — file:line | Exact current wording | Why | Action | Proposed wording | Evidence | Owner? |
|---|---|---|---|---|---|---|---|
| F-01 | `/` — app/page.tsx:119 | "Fuel consumption tracking, fuel card integration, cost-per-vehicle reporting and consumption anomaly alerts." | No consumption or anomaly logic; "integration" overstates a file import | REWORD | "Import ENOC and ADNOC fuel-card statements and review fuel spend by vehicle, card and station." | PFV-B Fuel (A import / C analytics) | G1 |
| F-02 | `/solutions` — :71 | "Monitor fuel consumption, fuel card transactions, mileage, efficiency trends and operating costs to improve fleet profitability." | No mileage or efficiency logic | REWORD | As F-01 | PFV-B Fuel | G1 |
| F-03 | `/fleet-leasing` — :47 | "Track drivers, assigned vehicles, licenses, violations, fuel cards, accessories and operational responsibilities throughout the lease." | Fuel-card assignment to drivers not verified | REWORD | "Track drivers, assigned vehicles, licences, accessories and responsibilities throughout the lease." | PFV-B Driver mgmt (A), Fuel | — |
| F-04 | `/industries` — :46 | "…fuel monitoring…" | Overstates | REWORD | Covered by G-09 | PFV-B Fuel | — |

### 1.4 Salik, traffic fines, parking and government systems

Salik is a CSV import matched to the contract on hire. Fines arrive by CSV or a JSON feed pushed to FleetArabia. There is no connection to Salik, Dubai Police, Abu Dhabi Police, Saher, TAMM, ELM or SATA (PFV-B Salik, Traffic fines, Direct police/Saher; PFV-E).

| ID | Page — file:line | Exact current wording | Why | Action | Proposed wording | Evidence | Owner? |
|---|---|---|---|---|---|---|---|
| S-01 | `/integrations` — :78–80 | Title "Salik Toll Gate Integration"; "Designed to automate UAE toll calculations by pulling toll gate transactions and posting them directly to active rental agreements or corporate lease billing cycles." | Nothing is pulled; tolls are a file import | REWORD | Title "Salik Toll Import"; "Import Salik toll files. Each crossing is matched to the contract that had the vehicle at that moment, and invoiced." Badge "UAE" kept | PFV-B Salik (A, CSV) | G1 |
| S-02 | `/integrations` — :83–85 | Title "GCC Traffic Fine Automation"; "Built to connect with Dubai Police, Abu Dhabi Police, and Saher (Saudi Arabia) portals to retrieve traffic violation tickets and charge customer cards." Badge "UAE & KSA" | No police or Saher connection; card charging not live; no KSA | REWORD | Title "Traffic Fine Import"; "Import fines from a file or a data feed, find who had the vehicle at the time, then allocate, verify, dispute and notify by email." Badge "UAE" | PFV-B Traffic fines (A), Direct police/Saher (C), Card payments (D) | G1 |
| S-03 | `/integrations` — :88–90 | "TAMM & ELM Vehicle Permits" / "Built to query transport authorities (TAMM in Abu Dhabi, ELM/Tamm in KSA) for vehicle permits, driver authorization cards, and border crossing permits." | No code | REMOVE | — | PFV-E TAMM/ELM | G1 |
| S-04 | `/integrations` — :103–105 | "SATA & Border Transit Integrations" / "Designed to track customs clearances, GCC border crossing permits, and international fleet transits through connected logistics portals." | No code | REMOVE | — | PFV-E SATA | G1 |
| S-05 | `/integrations` — :28–29 | Title "Government Services"; "Integrate with traffic authorities, toll systems, parking platforms, identity verification, licensing authorities and other digital government services." | No authority connections; only file or feed imports | REWORD | Title "Tolls, Fines & Parking"; "Import Salik, traffic-fine and parking files and match every charge to the right vehicle, contract and customer." | PFV-B Salik/Fines/Parking (A) | G1 |
| S-06 | `/integrations` — :54, :200 | "Government Services" (list and chip) | As S-05 | REWORD | "Salik, Fines & Parking" | PFV-B | G1 |
| S-07 | `/integrations` — :131 (H1) | "Connect to your ERP, payments, GPS and government systems" | ERP framing; payments not live; no government connections | REWORD | "Bring tolls, fines, fuel and GPS data into your fleet ERP" | PFV-C; PFV-B | G1, G2 |
| S-08 | `/integrations` — :289–291 | Eyebrow "GCC Localization"; title "Engineered for Middle East Mobility Ecosystems"; "Integration pathways designed for GCC government transport authorities, toll platforms, local payment networks, and compliance portals." | GCC not configured; no authority, payment-network or compliance-portal connections | REWORD | Eyebrow "Built for the UAE"; title "UAE operations built in"; "Salik tolls, UAE traffic fines, parking charges, UAE VAT and AED billing are part of the product." | PFV-B Multi-country (D), VAT (A) | G1 |
| S-09 | `/solutions` — :64; `/industries` — :42 | "…toll and traffic fine charges…" | Supported | KEEP | — | PFV-B Salik, Fines (A) | — |
| S-10 | `/contact` — :47 | "Talk through ERP, finance, GPS, payment gateway, Salik, traffic fine, billing, and API integration requirements." | Enquiry topics | KEEP | — | — | — |

### 1.5 Payments

The Network International gateway is coded but not configured (`NI_OUTLET_REF`/`NI_API_KEY` unset). The customer portal is cheque-only by owner decision (PFV-B Card payments = D, Customer portal = A).

| ID | Page — file:line | Exact current wording | Why | Action | Proposed wording | Evidence | Owner? |
|---|---|---|---|---|---|---|---|
| P-01 | `/integrations` — :20–21 | Title "Payment Gateways"; "Support online payments, recurring billing, payment links, refunds, digital wallets and automated collections through leading payment providers." | Not live; no wallets; single provider coded | REMOVE (until G6) | If G6 = "switching on": "Card payments and payment links through Network International." | PFV-B Card payments (D) | **G6** |
| P-02 | `/integrations` — :93–95 | "Mada, KNET & Benefit Payment Rails" / "Designed for direct connectivity to local GCC debit card networks like Mada (Saudi Arabia), KNET (Kuwait), Benefit (Bahrain), and NAPS (Qatar)." Badge "GCC Wide" | No code | REMOVE | — | PFV-E Mada/KNET | G1 |
| P-03 | `/integrations` — :51, :198; `/` — :142 | "Payment Gateways" (list, chip, home chip) | Not live | REMOVE (until G6) | — | PFV-B Card payments (D) | G6 |
| P-04 | `/solutions` — :70 | "Automate invoicing, recurring billing, collections, tax calculations, payments, credit notes, customer statements and ERP financial integration." | "Payments" reads as online payment; ERP framing | REWORD | "Generate rental, lease, toll and transport invoices in bulk, apply UAE VAT, issue credit notes and customer statements, and record receipts." | PFV-B Billing, VAT (A) | — |
| P-05 | `/industries` — :59 | Title "Enterprise Financial Integration"; "Connect operations with ERP, accounting, procurement, payroll, banking and payment gateways for complete financial visibility." | ERP framing; gateway not live; no banking connection found; payroll part of an incomplete HR backend | REWORD | Title "Finance in the Same System"; "Ledger, VAT, payables and procurement run in the same system as your fleet operations." | PFV-B Own ERP (A); PFV-F HR | — |
| P-06 | `/fleet-leasing` — :43 | "Generate recurring invoices, installment schedules, consolidated customer billing, taxes, deposits, credit notes and revenue recognition automatically." | "Revenue recognition": zero references in code | REWORD | "Generate recurring lease invoices, consolidated customer billing, VAT, deposits and credit notes." | Code search: `revenue.recogni` 0 refs; PFV-B Leasing (A) | — |
| P-07 | `/fleet-leasing` — :48 | Title "Financial & ERP Integration"; "Automatically synchronize contracts, invoices, payments, depreciation, taxes, journals and receivables with your ERP and accounting systems." | Product is the ERP; no outbound ERP sync | REWORD | Title "Finance in the Same System"; "Lease contracts, invoices, VAT and receivables are recorded in the same system, with the ledger alongside." | PFV-B Own ERP (A), Connects to another ERP (D) | G5 |
| P-08 | `/services` — :18 | "Payment Gateway Integration" | A service offer; not live in product | KEEP only if G6 | — | PFV-B Card payments (D) | G6 |
| P-09 | `/contact` — :73 | "Rental agreement, booking, invoicing, customer, vehicle, and payment process automation." | "Payment process automation" ambiguous | REWORD | "Rental agreements, bookings, invoicing, customers, vehicles and payment recording." | PFV-B Billing (A) | — |

UAE e-invoicing is **not claimed anywhere today**. Nothing to correct; guardrail in §3.

### 1.6 "Connects to your ERP" → FleetArabia *is* the ERP

The code has its own ledger, journals, trial balance, VAT return and payables. The only outbound ERP connector is an Oracle customer sync that is off by default (PFV-B Own ERP = A; Connects to another ERP = D; PFV-C).

| ID | Page — file:line | Exact current wording | Why | Action | Proposed wording | Evidence | Owner? |
|---|---|---|---|---|---|---|---|
| E-01 | all pages (default meta) — app/layout.tsx:16 | "FleetArabia is an enterprise mobility platform connecting rental, leasing, transportation, workshop, analytics and CRM operations to your ERP." | Understates; wrong framing | REWORD | "Cloud ERP for rental, leasing, transport and workshop businesses in the UAE: vehicles, contracts, inspections, workshop, billing and finance in one system." (155) | PFV-C | — |
| E-02 | all pages (Organization JSON-LD) — app/layout.tsx:38 | "…connecting rental, leasing, limousine, bus transportation, workshop, analytics and CRM operations to your ERP — built for fleet businesses across the Middle East." | ERP framing; limousine placeholder; Middle East | REWORD | "FleetArabia is a cloud ERP for rental, leasing, transport and workshop businesses in the UAE." | PFV-C; PFV-B Limousine (C), Multi-country (D) | — |
| E-03 | `/` — app/page.tsx:213 (hero) | "FleetArabia replaces spreadsheets and disconnected systems with one platform for rental, leasing, chauffeur, bus, workshop and fleet operations — connected to your finance system, with real-time dashboards for the people running the business." | ERP framing | REWORD | "FleetArabia replaces spreadsheets and disconnected systems with one cloud ERP for rental, leasing, transport and workshop operations, with finance built in and live dashboards for the people running the business." | PFV-C | — |
| E-04 | `/` — :38–39 | Title "ERP-Ready Finance"; "Connect billing, approvals, customer charges and financial posting with enterprise systems." | ERP framing | REWORD | Title "Finance Built In"; "Billing, approvals, customer charges and VAT live in the same system as operations." | PFV-B Own ERP, VAT (A) | — |
| E-05 | `/` — :474 | "ERP-Connected Operations" / "Billing, approvals and customer charges post cleanly to your finance system instead of getting re-keyed by hand." | ERP framing | REWORD | "Operations and Finance Together" / "Invoices, charges and VAT are raised from the contract itself, so nothing is re-keyed into a separate finance system." | PFV-B Billing (A) | — |
| E-06 | `/` — :485 | "…the integration depth to connect with your finance systems, and hands-on support to get there." | ERP framing | REWORD | "…finance in the same system, and hands-on support to get there." | PFV-C | — |
| E-07 | `/` — :95 | "Automate rental billing, corporate invoices, customer charges, approvals and ERP-ready financial handover." | ERP framing | REWORD | "Rental and corporate invoices, customer charges, approvals and UAE VAT, generated in bulk." | PFV-B Billing, VAT (A) | — |
| E-08 | `/` — :99–101; `/solutions` — :76 | Module "ERP Integration Platform": "ERP and finance system connectivity, APIs, implementation support and post-go-live assistance." (home); "Connect with accounting systems, payment gateways, telematics, GPS providers, HR, banking, government and regulatory systems, and third-party applications through secure APIs." (solutions) | Module named for a capability the product does not centre on; most listed connections unverified | REWORD (rename module) | Module "Finance & Integrations": "Ledger, journals, trial balance and UAE VAT, plus imports for Salik, fines, parking and fuel statements." *Implementation note: renaming touches `lib/modules.ts` keys and the home and /solutions anchors.* | PFV-B Own ERP, Salik, Fines, Fuel (A) | G1 |
| E-09 | `/company` — :42 | "Approach" — "One platform, connected to your ERP" | ERP framing | REWORD | "One ERP for operations and finance" | PFV-C | — |
| E-10 | `/contact` — :19, :105 | "…GPS and payment integration, or connecting to your ERP — tell us what you're working on…"; "Book a live demo and see how FleetArabia connects your day-to-day operations to your ERP." | ERP framing | REWORD | :19 "Whether it's rental, leasing, transport, workshop or billing, tell us what you're working on and we'll help you find the right starting point."; :105 "Book a live demo and see your day-to-day operations and finance in one system." | PFV-C | — |
| E-11 | `/integrations` — :10 (meta), :17, :135–139 | :10 "FleetArabia connects your mobility operations with finance, banking, telematics, payment gateways, government platforms, CRM, HR and third-party applications through a secure, API-first framework."; :17 "…with your existing accounting or ERP solution."; :135–139 hero repeats :10 and adds "Eliminate manual data entry, automate business processes and keep every system synchronized in real time." | ERP framing; unverified connections; real-time | REWORD | :10 and hero → "Bring Salik tolls, traffic fines, parking charges, fuel-card statements and GPS data into FleetArabia and match them to the right vehicle and contract." (151; drop "and GPS data" if G2 is unanswered). :17 card → title "Finance Built In", text "Contracts, invoices, receipts and VAT are recorded in FleetArabia's own ledger." | PFV-B Own ERP (A), Connects to another ERP (D) | G2, G5 |
| E-12 | `/fleet-leasing` — :18, :21 | "…all connected through one intelligent ERP. Whether you manage hundreds or thousands of leased vehicles…"; proof point "ERP & Finance Integration" | "Intelligent"; scale implication | REWORD | :18 "…all in one cloud ERP."; drop the "hundreds or thousands" sentence. :21 → "Finance Built In" | PFV-C | — |
| E-13 | `/fleet-leasing` — :8 (meta) | "…contracts, billing, maintenance, renewals and financial reporting on one connected ERP." | True (it is the ERP) | KEEP | — | PFV-C | — |
| E-14 | footer — components/Footer.tsx:100–104 | "FleetArabia helps rental, leasing, transportation, workshop and ERP-connected fleet businesses digitize operations across the Middle East." | ERP framing; Middle East | REWORD | "FleetArabia is a cloud ERP for rental, leasing, transport and workshop businesses in the UAE." | PFV-C | — |
| E-15 | `/platform` — app/platform/page.tsx:21 (proof points) | "Cloud Ready", "ERP Integrated", "Enterprise Secure" | "ERP Integrated" wrong framing | REWORD | "ERP Integrated" → "Finance Built In" | PFV-C | — |
| E-16 | `/resources/erp-integration-checklist` (whole guide) | "A practical checklist for planning how fleet operations should connect to your ERP…" | Informational advice, useful to buyers who keep a separate accounting system | KEEP | Revisit after G5 | PFV-B Connects to another ERP (D) | G5 |

### 1.7 Geography (UAE only)

AED is the only currency in code, and UAE VAT is configured. Multi-country is designed in but not configured (PFV-B Multi-country = D).

| ID | Page — file:line | Exact current wording | Why | Action | Proposed wording | Evidence | Owner? |
|---|---|---|---|---|---|---|---|
| R-01 | `/` — app/page.tsx:207–209 (H1) | "One platform for rental, leasing and fleet operations across the Middle East" | Only UAE configured | REWORD | "One cloud ERP for rental, leasing and fleet operations in the UAE" | PFV-B Multi-country (D) | G1 |
| R-02 | `/` — :473 | "Middle East Domain Expertise" / "Built around how rental, leasing, limousine, bus transportation and workshop operations actually run in this region — not adapted from a generic template." | Region; limousine | REWORD | "UAE Operations Built In" / "Salik tolls, UAE traffic fines, UAE VAT and AED billing are part of the product, not add-ons." | PFV-B Salik, Fines, VAT (A) | G1 |
| R-03 | `/solutions` — :18 | "…Whether you run a single branch or a multi-country enterprise…" | Multi-country not configured | REWORD | "…Whether you run a single branch or several companies…" | PFV-B Multi-country (D), Companies (A) | G1 |
| R-04 | `/solutions` — :21, :91 | "Multi-Country Ready"; "Multi-Company, Multi-Branch, Multi-Country" | As R-03 | REWORD | :21 "Multi-Company" (with A-02, the proof points become "Unified Platform", "Finance Built In", "Multi-Company"); :91 "Multi-Company, Multi-Branch" | PFV-B | G1 |
| R-05 | `/industries` — :21, :54–55, :63 | "Middle East Ready"; "Built for enterprise mobility across the Middle East" / "…mobility businesses throughout the GCC and Middle East…"; "Regional Expertise" / "Purpose-built for the Middle East with support for VAT, local business practices and regional compliance requirements." | Only UAE | REWORD | :21 "Built for the UAE"; :54 "Built for fleet businesses in the UAE"; :55 "FleetArabia handles the UAE-specific parts of running a fleet: Salik, traffic fines, parking charges, UAE VAT and AED billing."; :63 "UAE VAT and Salik" / "UAE VAT on every invoice line, and Salik and fine charges matched to the right contract." | PFV-B VAT, Salik (A) | G1 |
| R-06 | `/contact` — :92, :100 | "We work with fleet businesses across the Middle East from our offices in Dubai, UAE and Patna, India."; "Coverage" / "Middle East rental, leasing, transportation, workshop, analytics, and enterprise fleet businesses." | Middle East; "we work with" implies existing customers | REWORD | :92 "FleetArabia has offices in Dubai, UAE and Patna, India."; :100 "UAE rental, leasing, transport, workshop and company fleets." | Company facts; PFV-B Multi-country (D) | — |
| R-07 | social image — app/opengraph-image.tsx:3, :52 | "FleetArabia — Enterprise Mobility Platform for the Middle East" | Middle East | REWORD — **deferred** (social image changes are on hold) | "FleetArabia — Cloud ERP for Rental, Leasing & Fleet in the UAE" | PFV-B | owner (image change) |
| R-08 | shared default — components/EnterprisePage.tsx:77 | Default `proofPoints` "Middle East Expertise" | Unused today (all 9 pages pass their own), but would surface on a new page | REWORD | "Built for the UAE" | — | — |
| R-09 | `/company` — H1 | "A fleet technology company based in Dubai and Patna" | Company fact | KEEP | — | Company facts | — |

KSA, Saudi, GCC and Gulf references also appear in S-02, S-03, S-04, S-08, P-02 and G-13; they are resolved there.

### 1.8 Transport: limousine, staff transport, chauffeur, bus

Limousine screens are a `ModulePlaceholder`. Chauffeur and bus work runs in the shared Transport module. School transport is real code; staff/employee transport has no distinct feature (PFV-B).

| ID | Page — file:line | Exact current wording | Why | Action | Proposed wording | Evidence | Owner? |
|---|---|---|---|---|---|---|---|
| T-01 | `/` — app/page.tsx:62–65 (module card) | Short "Limo & Chauffeur"; title "Chauffeur & Limousine"; "Chauffeur allocation, dispatching, trip monitoring, bookings and premium service tracking." | Limousine is a placeholder; "premium service tracking" unsupported | REWORD | Short "Chauffeur"; title "Chauffeur & Transport"; "Transport enquiries, quotations, bookings, dispatch board and trips, billed per trip, hour, day or kilometre." | PFV-B Chauffeur ops (A via Transport), Limousine (C) | G1, G7 |
| T-02 | `/` — :71 | "Route planning, schedules, driver allocation, vehicle assignment and transport operations control." | Supported | KEEP (optional: add "including school runs") | — | PFV-B Bus routes (A), School transport (A) | — |
| T-03 | `/` — :150 ("Built for" strip) | "Limousine" | Placeholder | REWORD | "Chauffeur" | PFV-B Limousine (C) | G1 |
| T-04 | `/solutions` — :31, :66 | Tab "Chauffeur & Limo"; card "Chauffeur & Limousine" / "Manage chauffeur assignments, trip scheduling, dispatch, bookings, customer requests, vehicle allocation, GPS tracking and service quality." | Limousine; GPS; "service quality" unsupported | REWORD | Tab "Chauffeur"; card as T-01 | PFV-B | G1, G2 |
| T-05 | `/industries` — :8 (meta), :18, :28, :44 | :8 "…rental, leasing, limousine, bus transportation…"; :18 "…limousine services…"; chip "Chauffeur & Limousine"; card "Chauffeur & Limousine Services" / "…GPS tracking and executive transportation." | Limousine placeholder; GPS | REWORD | Replace "limousine" with "chauffeur"; card title "Chauffeur Services"; text "Take transport enquiries, send quotations, book and dispatch trips to drivers, and bill per trip, hour, day or kilometre." | PFV-B | G1, G2 |
| T-06 | `/solutions` — :67 | "Plan routes, assign drivers and vehicles, manage employee or school transportation, optimize schedules and monitor fleet performance in real time." | Employee transport not a feature; no optimisation; real-time unverified | REWORD | "Plan routes and school-run schedules, generate trips, assign drivers and vehicles, record driver attendance and bill transport contracts." | PFV-B School transport (A), Staff transport (C), Bus routes (A) | G1 |
| T-07 | `/industries` — :29, :45 | Chip "Bus & Staff Transport"; card "Bus & Staff Transportation" / "Plan routes, assign vehicles and drivers, monitor operations, manage school and employee transport, and improve fleet utilization with real-time visibility." | Staff transport not a feature | REWORD | Chip "Bus & School Transport"; card title "Bus & School Transport", text as T-06 | PFV-B | G1 |
| T-08 | footer — components/Footer.tsx:19 | Link "Chauffeur & Limousine" | Placeholder | REWORD | "Chauffeur & Transport" | PFV-B Limousine (C) | G1 |
| T-09 | module names — lib/modules.ts:23 | Key "Chauffeur & Limousine" | Drives home, /solutions and footer labels and anchors | REWORD (implementation) | "Chauffeur & Transport"; update anchors | — | G1 |

Transport describes code that exists, but company 002 (Transport) had no live data (PFV-F). Wording must stay capability-only ("book", "dispatch") and never say it is in use.

### 1.9 Workshop, drivers, leasing detail and other overstatements

| ID | Page — file:line | Exact current wording | Why | Action | Proposed wording | Evidence | Owner? |
|---|---|---|---|---|---|---|---|
| W-01 | `/solutions` — :68 | "Digitize maintenance operations with preventive servicing, repair orders, inspections, spare parts, technician assignments, warranty management and service history." | Warranty handling not verified in workshop code | REWORD | "Run the workshop from service booking and vehicle receipt to inspection, estimate and approval, job card, parts and labour, quality check and road test, release and invoice." | PFV-B Workshop (A code; not production-verified) | — |
| W-02 | `/industries` — :47 | "Workshop & Service Centers" / "Manage inspections, preventive maintenance, repair orders, spare parts, technician productivity, warranties and complete vehicle service history." | Warranties unverified; "service centers" implies outside customers | REWORD | Title "Workshops"; text as W-01 plus "for your own fleet, group companies and customers' vehicles" only if G4 = yes | PFV-B Workshop for outside customers (A code) | G4 |
| W-03 | `/fleet-leasing` — :45 | "Schedule preventive maintenance, repairs, inspections, recalls, tire replacement, warranties and workshop activities without disrupting lease operations." | Recalls, tyres and warranties not verified | REWORD | "Book leased vehicles into the workshop for servicing and repairs, with replacement vehicles keeping the contract running." | PFV-B Workshop, Leasing (A) | — |
| W-04 | `/fleet-leasing` — :42 | "…maintenance history, warranty tracking and asset utilization…" | Warranty unverified | REWORD | "…maintenance history and asset utilization…" | — | — |
| W-05 | `/solutions` — :72 | "Manage driver profiles, licenses, certifications, violations, training, attendance, assignments and compliance from one central system." | Training barely present (5 refs); violations-to-driver not verified | REWORD | "Driver profiles, licences and documents with expiry tracking, assignments, incidents, attendance and compliance checks." | PFV-B Driver mgmt (A), Driver attendance (A) | — |
| W-06 | `/platform` — :64 | "Native mobile applications for drivers, workshop technicians, field staff, delivery teams and managers." | Only an Android build exists in the repo; iOS not verified | REWORD | "An Android app for drivers, workshop technicians and operations staff: inspections, trips, workshop jobs and approvals." | PFV-B Driver mobile app (A); repo has `android/` only | owner (iOS?) |
| W-07 | `/platform` — :74 | "Role-based access control, audit trails, multi-factor authentication, encryption and compliance with enterprise security standards." | No certification or standard named | REWORD | "Role-based access, audit trails, multi-factor sign-in and encrypted connections." | PFV-B MFA (A) | — |
| W-08 | `/industries` — :48 | "Government & Public Sector Mobility" / "Support secure, auditable and compliant fleet operations for municipalities, ministries, utilities, airports, healthcare and other public-sector organizations." | "Compliant" unverified; long list reads like existing clients | REWORD | "Government & Public Sector" / "Role-based access, approvals and a full audit trail for public-sector fleets." | PFV-B MFA, Companies (A) | — |
| W-09 | `/integrations` — :37 | Title "Open API Platform"; "Use secure REST APIs and webhooks to integrate with booking engines, partner portals, HR systems, business applications and custom enterprise software." | APIs are internal; no public or partner API documentation found (only `docs/WORKSHOP_JOB_CARD_API.md`) | REWORD | Title "APIs"; "The system runs on REST APIs. Integrations such as a traffic-fine data feed are set up during implementation." | PFV-B Traffic fines (JSON ingest) | owner |
| W-10 | `/integrations` — :57–61 (supported list) | "Banking Systems", "HR & Payroll Systems", "Business Intelligence Tools", "Customer Websites & Mobile Apps", "Fleet IoT Devices", "Digital Signature Platforms", "Document Management Systems" (plus "ERP & Accounting Systems", "Payment Gateways", "GPS & Telematics Providers", "Government Services", "CRM Platforms" at :50–56) | Almost none verified as external connections | REWORD (replace the list) | "Salik toll files", "Traffic-fine files and data feed", "Parking charge files", "ENOC & ADNOC fuel statements", "GPS server (Traccar)" (G2), "Customer portal", "Email" | PFV-B | G1, G2 |
| W-11 | `/integrations` — :65–73 (why list) | "API-First Architecture", "Real-Time Data Synchronization", "Event-Driven Workflows", "Secure Authentication & Encryption", "Enterprise-Grade Security", "Multi-Company & Multi-Branch Connectivity", "Scalable Cloud Architecture", "Low-Code Integration Framework", … | Unverified: real-time sync, event-driven, low-code | REMOVE "Real-Time Data Synchronization", "Event-Driven Workflows", "Low-Code Integration Framework"; KEEP the rest | — | PFV-B MFA (A); audit middleware in code | — |
| W-12 | `/integrations` — :245–246 | "Connect Once. Automate Everywhere." / "FleetArabia acts as the central integration hub between your business applications, fleet technologies and customer-facing systems." | Overstates | REWORD | "Outside data, matched to the right record" / "Tolls, fines, parking, fuel and GPS data are matched to the vehicle, contract and customer they belong to." | PFV-B | G2 |
| W-13 | `/integrations` — :33 | "CRM & Customer Platforms" / "Connect websites, customer portals, mobile apps, call centers and CRM solutions to deliver a seamless customer experience." | Third-party CRM or call-centre connections unverified; the product has its own portal and CRM | REWORD | "Customer Portal & CRM" / "Business customers see invoices, statements and contracts and raise requests in the customer portal; leads and tickets are handled in FleetArabia's CRM." | PFV-B Customer portal (A) | — |
| W-14 | `/company` — :16, :52 | "Open API & Integration Platform"; "…API-first connectivity." | As W-09 | REWORD | :16 "Data Imports & APIs"; :52 "…built with role-based security and REST APIs." | PFV-B | — |
| W-15 | on-premises — `/deployment` (whole On-Premises section, :27, :46–58, :64, :82, :8), `/platform` :78–79, `/solutions` :93, `/company` :15, `/integrations` :44–45 | e.g. "Deploy FleetArabia within your own data center or private cloud for maximum control…" | Technically possible; not verified as an offering | KEEP **only if G3 = offered**; otherwise REMOVE all on-premises mentions | — | PFV-B On-premises (D) | **G3** |
| W-16 | `/services` — :15–20, :24 | "Customer Self-Service Portals", "Online Reservation Systems", "Digital Agreement & eSignature Integration", "API Development & Integration", "Business Intelligence Dashboards", "Custom Enterprise Software Development" | Services offered, not product claims; the portal and booking site exist | KEEP (owner's service offer) | — | PFV-B Customer portal (A), Online booking (A/D) | G8 |
| W-17 | `/` — :89; `/solutions` — :69 | VDR cards: "Digital inspection, damage photos, condition reports, customer charges, claims and repair follow-up."; "Record vehicle inspections, capture photos, assess damages, estimate repair costs, manage insurance claims and maintain a complete damage history." | Supported (all manual) | KEEP | — | PFV-B Inspection, Damage capture, Accidents (A) | — |
| W-18 | `/` — :53, :59; `/solutions` — :64, :65 | Car rental and leasing card texts | Supported | KEEP | — | PFV-B Car rental, Leasing (A) | — |
| W-19 | `/` — :113 | "Driver profiles, license and document tracking, performance monitoring, trip assignment and compliance checks." | Supported (performance log, compliance) | KEEP | — | PFV-B Driver mgmt (A) | — |
| W-20 | `/` — :125; `/solutions` — :75 | CRM card "…digital agreements and customer feedback…" | `customer_feedback` router and signing links exist | KEEP | — | code: `routers/customer_feedback.py`, `services/signing_links.py` | — |
| W-21 | no workshop "in use" or "production-proven" claim found | — | — | — | Guardrail §3 prevents one being added | PFV-F | — |

---

## 2. Approved core positioning

Working statement (consistent with PFV-C):

> **FleetArabia is a cloud ERP for rental, leasing, transport and workshop businesses in the UAE.**

Every line below uses only class-A capabilities. Items that depend on an owner answer are marked.

**Homepage**
- **H1:** "One cloud ERP for rental, leasing and fleet operations in the UAE"
- **Lead:** "Vehicles, contracts, inspections, workshop, billing and finance in one system, with live dashboards for the people running the business."
- **Proof chips:** "Rental & Leasing", "Finance Built In", "UAE VAT & Salik"
- **Why FleetArabia:**
  - "Finance built in"
  - "UAE operations built in" (Salik, fines, VAT, AED)
  - "One record from booking to invoice"
  - "Implementation support"

**Platform**
- **Headline:** "The ERP underneath rental, leasing, transport and workshop"
- **Points:**
  - one data model
  - general ledger, journals, trial balance, UAE VAT and VAT return
  - payables and procurement
  - multi-company and multi-branch
  - role-based access, approval workflows, audit trail, multi-factor sign-in
  - an Android app for field staff
  - cloud-hosted
  - on-premises only after G3

**Solutions**
- **Headline:** "Modules that share one set of records"
- **Modules:** Car Rental, Leasing, Vehicle Inspection & Damage, Workshop, Chauffeur & Transport (incl. school runs), Drivers, Fuel (statement import), Billing, Finance, CRM & Customer Portal, Dashboards & Reports
- **GPS:** listed as "GPS server connection" only after G2
- **Implementation note:** the module count changes (today "Thirteen modules").

**Fleet leasing**
- **Headline:** keep the current H1, "Fleet leasing software, from quotation to financial reporting"
- **Points:**
  - lease quotations with customer acceptance by link
  - conversion to agreements
  - replacement vehicles
  - recurring lease (policy) billing with VAT and deposits
  - credit notes
  - leased vehicles through the workshop
  - receivables and ledger in the same system

**Vehicle inspection**
- **Headline:** "Vehicle inspections and damage records that follow the vehicle"
- **Points:**
  - inspection before the contract opens and at return
  - at the counter or through a link sent to the driver
  - photos, signature, fuel level and damage marked on a vehicle diagram
  - a PDF inspection report
  - accident cases from police report to settlement
- **Never:** automatic or AI detection.

**Workshop**
- **Headline:** "Workshop management from service booking to invoice"
- **Points:**
  - service booking
  - vehicle receipt and inspection
  - estimates with approval
  - job cards
  - bays and technicians
  - parts and labour costing
  - quality check and road test
  - release and handover
  - workshop invoice
  - own fleet and group companies; customers' vehicles only after G4
- **Never:** "in use", "proven", or predictive maintenance.

**Billing and finance**
- **Headline:** "Billing and finance in the same system as your fleet"
- **Points:**
  - bulk invoice generation for rentals, leases, Salik and transport contracts
  - summary invoices
  - UAE VAT on every line
  - credit notes and customer statements
  - bulk invoice email
  - receipts
  - ledger, journals, trial balance, VAT return, payables
  - a customer portal for invoices and statements
- **Never:** online card payments until G6; e-invoicing.

**Integrations**
- **Headline:** "Bring tolls, fines, fuel and GPS data into your fleet ERP" (drop "and GPS" until G2)
- **Points:**
  - Salik toll import matched to the contract on hire
  - traffic-fine import (file or data feed) with custody-based allocation
  - parking import
  - ENOC/ADNOC fuel-card statement import
  - GPS tracking server connection (G2)
  - customer portal
  - REST APIs set up during implementation
- **Never:** police, Saher, TAMM, ELM, SATA, Mada/KNET, SecurePath/WASL, "real-time sync", "pre-built ERP connectors".

---

## 3. SEO claim guardrails (for `scripts/check-content.mjs`, not implemented)

**Where to check:**
- rendered HTML of every page
- the `<title>`, meta description and OG/Twitter tags
- JSON-LD
- the OG image text, which lives in source `app/opengraph-image.tsx`

Matches are case-insensitive. "Oracle" and "multilingual" are already enforced; keep them.

**Allowed contexts:**
- `/resources/*` guides may use the generic words "GPS", "telematics", "payment" and "ERP" in advice text. They are exempt from the "Generic words" group only.
- `/privacy` and `/terms` are exempt from the "Generic words" group only.
- Contact-form option labels are exempt from the "Generic words" group only.

**Forbidden everywhere**

| Group | Phrases or patterns (regex, case-insensitive) |
|---|---|
| AI | `\bAI\b`, `AI-(powered\|driven\|based\|enabled)`, `artificial intelligence`, `machine learning`, `\bML\b`, `neural`, `computer vision`, `predictive (maintenance\|analytics\|alerts?)`, `\bpredict(s\|ed\|ive)?\b`, `intelligent (automation\|insights?\|platform\|ecosystem\|technology\|enterprise software)`, `smart (detection\|insights?)` |
| Damage | `(automatic\|automated\|AI) damage (detection\|assessment\|classification\|recognition)`, `damage detection`, `detects? damage`, `instant (repair )?(estimate\|quote)`, `360[- °]?(degree )?(scan\|capture\|inspection)` |
| GPS / telematics (until G2) | `real[- ]time (tracking\|location\|vehicle)`, `live (tracking\|vehicle location\|location)`, `track vehicles in real time`, `geo-?fenc` (until G2), `route compliance`, `driver behaviou?r`, `telematics provider`, `\bIoT\b`, `sensors?`, `dash ?cams?`, `SecurePath`, `Shahin`, `WASL` |
| Fuel | `fuel[- ]card integration`, `consumption anomal`, `fuel efficiency`, `efficiency trends`, `fuel sensors?` |
| Government | `Dubai Police`, `Abu Dhabi Police`, `\bSaher\b`, `\bTAMM\b`, `\bELM\b`, `\bSATA\b`, `border (crossing\|transit)`, `pulling toll`, `(direct\|live) (Salik\|police)`, `government (platforms?\|services\|systems)` |
| Payments (until G6) | `payment gateways?`, `online payments?`, `card payments?`, `charge customer cards`, `payment rails`, `digital wallets?`, `\bMada\b`, `\bKNET\b`, `\bBenefit\b` (payments sense), `\bNAPS\b` |
| E-invoicing | `e-?invoic`, `FTA[- ]approved`, `Peppol`, `ZATCA`, `Fatoora` |
| Geography | `Middle East`, `\bGCC\b`, `\bKSA\b`, `Saudi`, `Kuwait`, `Bahrain`, `Qatar`, `Oman`, `multi-country`, `across the region`, `Gulf` |
| Transport | `limousine`, `\blimo\b`, `staff transport`, `employee transport`, `executive transport`, `airport transfer`, `optimi[sz]e (routes\|schedules)` |
| ERP framing | `connect(s\|ed\|ing)? (to\|with) your (ERP\|finance system\|existing)`, `your existing (ERP\|accounting)`, `ERP-(ready\|connected)`, `seamless ERP integration`, `pre-built connectors?`, `low-code`, `event-driven`, `real-time (data )?sync` |
| Readiness / social proof | `in use (at\|by)`, `trusted by`, `our customers`, `proven`, `deployed at`, `live at`, `used by`, `\d+\+? (customers\|clients\|companies\|vehicles managed)`, `reduce(s)? (operational )?costs by` |
| Unverified detail | `revenue recognition`, `native (mobile )?app(lication)?s` (until iOS is confirmed), `compliance with enterprise security standards` |
| Generic words (exempt contexts only) | `GPS`, `telematics`, `payment`, `integration with your ERP` |

**Required (the check must fail if missing):** the home page contains "cloud ERP"; every page's Organization JSON-LD `description` contains "UAE".

---

## 4. Summary

### 4.1 Pages requiring correction

| Page | Items |
|---|---|
| `/` | A-01, G-01, G-02, G-03, F-01, E-03–E-08, R-01, R-02, P-03, T-01, T-03 |
| `/platform` | A-05, A-06, G-04, G-05, E-15, W-06, W-07, (W-15) |
| `/solutions` | A-02–A-04, A-17, G-06, F-02, P-04, E-08, R-03, R-04, T-04, T-06, W-01, W-05, (W-15) |
| `/fleet-leasing` | A-07, A-08, G-07, F-03, P-06, P-07, E-12, W-03, W-04 |
| `/industries` | A-09, A-10, G-08–G-10, F-04, P-05, R-05, T-05, T-07, W-02, W-08 |
| `/integrations` | A-11, G-11–G-14, S-01–S-08, P-01–P-03, E-11, W-09–W-13, (W-15) |
| `/deployment` | G-15, (W-15) |
| `/services` | A-16, G-16, (P-08, W-16) |
| `/company` | A-12–A-15, E-09, W-14, (W-15) |
| `/contact` | E-10, R-06, P-09 |
| Every page (shared) | E-01 (default meta), E-02 (JSON-LD), E-14 (footer), G-17, T-08 (footer links), R-08 (default prop), T-09 (module names) |
| Social image (deferred) | R-07 |
| No change needed | `/resources`, both guides (G-19, E-16), `/privacy`, `/terms`, `/sitemap`, 404 |

### 4.2 Claims requiring removal (REMOVE)

- A-16 "AI-Powered Automation"
- G-07 GPS item on /fleet-leasing (:67)
- G-12 "Fleet IoT Devices"
- G-13 SecurePath/Shahin/WASL
- G-14 "Real-Time Data Synchronization"
- S-03 TAMM & ELM
- S-04 SATA
- P-01 "Payment Gateways" card (until G6)
- P-02 Mada/KNET/Benefit/NAPS
- P-03 payment chips (until G6)
- W-11 "Event-Driven Workflows", "Low-Code Integration Framework"
- W-15 all on-premises mentions **if** G3 = not offered
- Conditional: G-01, G-05, G-06, G-11, G-15, G-17 become removals if G2 cannot be confirmed

### 4.3 Claims requiring rewording (REWORD)

- **AI:** A-01–A-15, A-17
- **GPS and real-time:** G-01–G-06, G-08–G-11, G-14–G-17
- **Fuel:** F-01–F-04
- **Government systems:** S-01, S-02, S-05–S-08
- **Payments:** P-04–P-07, P-09
- **ERP framing:** E-01–E-12, E-14, E-15
- **Geography:** R-01–R-08 (R-07 deferred)
- **Transport:** T-01, T-03–T-09
- **Other overstatements:** W-01–W-10, W-12–W-14

### 4.4 Proposed safe wording

Given per item in §1 and per page in §2. All of it uses PFV class-A facts, except where an item is marked for G2/G3/G4/G6.

### 4.5 Owner questions that still block publication

| # | Question | Blocks |
|---|---|---|
| **G1** | Approve removing or rewording the claims confirmed on 2026-09-20 that the code does not support (AI, fuel-card integration, police/Saher, TAMM/ELM, SATA, Mada/KNET, SecurePath/WASL, Middle East/GCC, limousine, staff transport)? | Most of §1 |
| **G2** | Is any vehicle reporting to the Traccar server? If not, GPS items are removed rather than reworded | G-01–G-17, E-11, W-10, W-12 |
| **G3** | Is on-premises installation offered? | W-15 (whole /deployment On-Premises section) |
| **G4** | Will the workshop take outside customers' vehicles? | W-02 |
| **G5** | Is FleetArabia's ledger the customer's book of record? | P-07, E-11, E-16 |
| **G6** | Will Network International card payments be switched on? | P-01, P-03, P-08 |
| **G7** | Which business lines go live first? Transport cards stay capability-only until company 002 is live | T-01 |
| **G8** | May the booking site, customer portal (already live) and service offers be marketed as listed? | W-16, G-16 |
| New | Is there an iOS app, or Android only? | W-06, the "native apps" guardrail |
| New | Approve the module rename "ERP Integration Platform" → "Finance & Integrations" and "Chauffeur & Limousine" → "Chauffeur & Transport" (changes labels and anchors on home and /solutions, plus the footer Chauffeur link) | E-08, T-08, T-09 |

### 4.6 Pages safe to proceed with SEO after correction

| Page | Safe after | Notes |
|---|---|---|
| `/` | Corrections + G1 | GPS card per G2 |
| `/platform` | Corrections + G1 | On-premises line per G3 |
| `/fleet-leasing` (→ `/solutions/fleet-leasing`) | Corrections | Class-A throughout; the strongest P0 candidate |
| New `/solutions/car-rental-software` | §2 wording | Class A |
| New `/solutions/vehicle-inspection` | §2 wording | Class A; no AI |
| New `/solutions/fleet-billing` | §2 wording; no card payments until G6 | Class A |
| `/solutions` | Corrections + G1 + module rename | — |
| `/industries` | Corrections + G1 | — |
| `/integrations` | Corrections + G1 + G2 | Largest rewrite |
| `/company`, `/contact`, `/services` | Corrections | Services items per G8 |
| `/deployment` | G3 answered | — |
| New `/solutions/workshop-management` | §2 wording (capability-only) + G4 | Not "in use" |
| New `/solutions/fleet-management` | §2 wording | Fuel as statement import |
| New `/solutions/transport` | G7 (company 002 live) | P2 |
| `/resources/*` | Already safe | — |

None of these changes have been made.
