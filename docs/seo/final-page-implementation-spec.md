# FleetArabia website — final SEO page implementation specification

Status: **specification only.** No page, route, redirect, title or metadata has been changed.
Branch: `feat/seo-content-architecture` @ `5f06086`. Production (`main` = `origin/main`) is **`91a913a`**.
Prepared 2026-09-25 for Madhurendra (owner) and whoever builds the pages.

**Sources and precedence** (a later document wins over an earlier one):
1. `content-architecture.md` (CA)
2. `product-fact-validation.md` (PFV)
3. `content-truth-corrections.md` (CTC)
4. `content-truth-implementation-report.md` (CTIR)

Every feature named in this document is **class A in PFV**: verified in the production code of the Fleet Arabia ERP (`/opt/fleet-erp.git` @ `b5800317`). **Code verified is not the same as in use.** No page may say or imply that anything is in use, proven, live at a customer, or used by anyone.

**Approved positioning:** "FleetArabia is a cloud ERP for rental, leasing, transport and workshop businesses in the UAE."

---

## 0. Rules that apply to every page

- **Say what the software does and who uses it.** Never claim results, customers, scale, awards, reviews or market share. Outcomes may only be the direct effect of a feature ("the invoice is raised from the agreement, so charges are not re-keyed"), never a number or a comparison.
- **"UAE" appears where it is true and useful:** VAT, Salik, fines, the positioning line, and at most once in a title. Never in every heading.
- **Never:**
  - KSA, GCC or multi-country
  - AI of any kind, including predictive maintenance and damage detection
  - live GPS tracking or geofencing
  - live card payments, payment gateways or payment links
  - UAE e-invoicing
  - integrations other than the verified imports and connections
  - on-premises installation
  - external-customer workshop work
  - the product as the customer's book of record
  - "limousine" as a product
  - iOS
- **Verified OCR** may be mentioned only as "document scanning at customer onboarding (a person confirms the values)".
- **Services, not modules:** Online Reservation Systems, eSignature Integration and custom development appear only on /services, as work the team offers. They are never presented as live product modules.
- **Length and structure:**
  - new pages: 800–1,300 words of specific text; a page that restates the /solutions card is not acceptable
  - one H1 per page
  - H2s in the order given
  - FAQs visible on the page
- **Guardrails:** `npm run check` must stay green. Every new page must be added to `PAGES` in `scripts/check-content.mjs`, `check-links.mjs` and `check-browser.mjs`, so the guardrails cover it.
- **Keywords are intent-based hypotheses.** No volume data has been checked. Check each primary keyword in Keyword Planner (UAE, English) and in Search Console once the site is verified there.

**Shared JSON-LD for every new or rewritten page:**
- **`BreadcrumbList`** from `breadcrumbJsonLd(path)`. Add the new routes to `SITE_ROUTES`, which also puts them in the sitemap, still without `lastmod`.
- **`WebPage`** with `url`, `name`, `description`, `inLanguage: "en"`, and `about: { "@id": "https://www.fleetarabia.com/platform#software" }`. This needs an `@id` added to the SoftwareApplication on /platform (a one-line change in `app/platform/page.tsx`).
- **`FAQPage`**, only for FAQs that are visible on the page. It will not produce a rich result for this site (Google restricted FAQ results in 2023), so it is optional (decision O-9).
- **Never** `Product`, `Offer`, `AggregateRating`, `Review` or `HowTo`.
- **Canonical, `og:url`** through the existing `alternates.canonical` and `pageOpenGraph(path)` pattern from `1893503`.

---

## 1. Hub and spoke

```
                          /platform  (Cloud ERP hub)
                                │
   ┌──────────────┬─────────────┼──────────────┬───────────────┬──────────────┬───────────────┐
Car Rental   Fleet Leasing  Fleet Mgmt   Vehicle Inspection  Workshop   Billing & Finance  Chauffeur & Transport
                             ├ #drivers     └ #damage
                             └ #fuel
   /integrations  (supporting page: #salik  #fines  #parking  #fuel  #gps)
   /solutions     (module index: every card links to its spoke)
```

**Required links** (every spoke also links up to /platform):

| From | To | Anchor idea |
|---|---|---|
| Car Rental | Vehicle Inspection | "handover and return inspections" |
| Car Rental | Billing & Finance | "invoices and UAE VAT" |
| Car Rental | /integrations#salik, #fines | "Salik and fine imports" |
| Fleet Leasing | Billing & Finance | "recurring lease billing" |
| Fleet Leasing | Workshop | "workshop visits for leased vehicles" |
| Fleet Leasing | Vehicle Inspection | "return inspections" |
| Fleet Management | own `#drivers`, `#fuel` sections | in-page table of contents |
| Fleet Management | /integrations#fuel, #gps | "fuel-card statement import", "GPS tracking server" |
| Vehicle Inspection | own `#damage` section | "damage and accident cases" |
| Vehicle Inspection | Workshop | "send repairs to the workshop" |
| Workshop | Vehicle Inspection | "vehicle inspection" |
| Workshop | Billing & Finance | "workshop invoice" |
| Billing & Finance | Car Rental, Fleet Leasing, Chauffeur & Transport | "rental / lease / transport billing" |
| Chauffeur & Transport | Fleet Management#drivers | "driver records" |
| /integrations | #gps section (Traccar) | page anchor |
| /integrations | Car Rental, Fleet Management#fuel, Billing & Finance | per import |
| All spokes | /platform | "one cloud ERP" |
| All spokes | /contact#demo-form | primary CTA |

---

## 2. Page specifications

### 2.1 Cloud ERP — `/platform` (EXISTING, rewrite)

| Field | Value |
|---|---|
| URL / canonical | `/platform` → `https://www.fleetarabia.com/platform` (unchanged) |
| Title | **Cloud ERP for Rental, Leasing & Fleet Businesses \| FleetArabia** (62) |
| Meta description | "Operations and finance on one data model: rental, leasing, transport and workshop, with ledger, UAE VAT, approvals, roles and audit trail in one cloud ERP." (155) |
| H1 | "A cloud ERP for rental, leasing, transport and workshop businesses" |
| Primary keyword | cloud ERP for rental companies |
| Secondary | fleet ERP; car rental ERP; leasing ERP software; rental management ERP; ERP for fleet businesses; cloud fleet software |
| Intent | Commercial, evaluation. A buyer comparing an all-in-one system with separate tools |
| Target customer | Owners, CFOs and operations heads of rental, leasing, transport or workshop businesses; groups with several companies |
| Purpose | The hub. Explains "one system" and links to every spoke |

**H2/H3 structure:**
1. One data model for operations and finance
2. The modules. One H3 per spoke (Car Rental, Fleet Leasing, Fleet Management, Vehicle Inspection, Workshop, Billing & Finance, Chauffeur & Transport), 2 sentences and a link each
3. Finance built in: ledger, journals, trial balance, UAE VAT and VAT return, payables and procurement
4. Several companies, branches and locations
5. Control: roles, approval workflows, audit trail, multi-factor sign-in
6. For people in the field: the Android app
7. Outside data: Salik, fines, parking and fuel imports, the GPS server connection, REST APIs (→ /integrations)
8. Cloud-hosted, used in a browser (→ /deployment)
9. FAQ

**Verified features:**
- finance: `transactions/finance/{accounts,journal,trial-balance,vat,vat/return,vat-setup,ap}`
- VAT resolver
- procurement (`routers/procurement*.py`)
- company, branch and location scoping
- RBAC, approvals and workflow setup
- audit middleware
- MFA
- dashboards (24 screens) and reports (35 routes)
- the Android app (v1.10.5)
- customer portal
- OCR at onboarding
- REST APIs
- cloud hosting

**Must not mention:**
- HR/payroll as a module (the backend is incomplete, PFV-F)
- the Oracle/Orion sync
- the Etihad Credit Bureau check
- RFID
- on-premises
- iOS
- "connects to your ERP"
- book of record (G5)
- AI

| Field | Value |
|---|---|
| Links in | home hero and module section; every spoke; /solutions; /services (ERP Implementation); /deployment; footer; navigation |
| Links out | all 7 spokes; /integrations; /deployment; /contact#demo-form |
| CTA | "Book a Demo" → /contact#demo-form; secondary "See the modules" → /solutions |
| FAQ topics | Is FleetArabia an ERP or an add-on? · Can we start with one module? · Does it handle UAE VAT? · Can several companies share one installation? · How is it hosted? · Is there a mobile app? (Android) |
| JSON-LD | Existing `SoftwareApplication`, add `@id: …/platform#software`; `featureList` = module names; plus shared `WebPage` (without `about`, since it *is* the product page), `BreadcrumbList` |

### 2.2 Car Rental Software — `/solutions/car-rental-software` (NEW)

| Field | Value |
|---|---|
| URL / canonical | `/solutions/car-rental-software` |
| Title | **Car Rental Software for Rent-a-Car Companies \| FleetArabia** (58) |
| Meta description | "Reservations, rental agreements, handover and return inspections, replacements, Salik and fine charges, invoicing and UAE VAT for your rent-a-car business." (155) |
| H1 | "Car rental software, from reservation to closed agreement" |
| Primary keyword | car rental software |
| Secondary | rent a car software; car rental management system; car rental software UAE; rental agreement software; monthly car rental software; car rental billing; Salik charges for rental cars; traffic fines for rental cars |
| Intent | Commercial. A rent-a-car operator choosing a system |
| Target customer | Rent-a-car companies with counters and branches, running daily, monthly and corporate rentals |
| Purpose | Main commercial P0 page |

**H2/H3 structure:**
1. The rental, step by step: reservation → agreement → handover inspection → hire → return inspection → invoice
2. Rental agreements (H3s: daily and monthly rentals; extensions; replacement vehicles; accessories)
3. At the counter (H3s: customer search and onboarding with document scanning; branch shifts and day book; payment recording)
4. Handover and return inspections (summary → Vehicle Inspection)
5. Salik, traffic fines and parking. Salik crossings matched to the agreement on hire at that moment; fines allocated by who had the vehicle; parking imports (→ /integrations#salik, #fines, #parking)
6. Invoicing and UAE VAT (→ Billing & Finance)
7. Collections and disputes
8. FAQ

**Verified features:**
- `routers/front_office.py`, `rac_operations.py` (hirer sources, customer search, available vehicles, accessories, payment methods, shift log workbench and day book, collection list/close, disputes), `rac_extended.py`
- screens `app/rental/{rac,mra,delivery,return}` and `transactions/front-office/*`
- VDR-OUT/IN
- `salik_import.py`, `traffic_fine_import.py`, `parking_import.py`
- invoice generation and summary invoices
- OCR onboarding

**Must not mention:**
- online booking or a customer booking site (catalogue empty, G8)
- card payments or payment links
- dynamic or AI pricing
- live Salik or police connections
- GPS
- "in use at…"
- any statement that counter staff can use it today (PFV-F: front office not yet usable for non-admin roles)

| Field | Value |
|---|---|
| Links in | /platform; /solutions (Car Rental card); home module card and "Built for" chip; /industries (Vehicle Rental block); Vehicle Inspection; Billing & Finance; /integrations (Salik, fines); footer and navigation |
| Links out | Vehicle Inspection; Billing & Finance; /integrations#salik, #fines, #parking; Fleet Leasing (for long-term); /platform; /contact#demo-form |
| CTA | "Book a Demo" → /contact#demo-form |
| FAQ topics | Daily, weekly and monthly rentals in one system? · How are replacement vehicles handled on an open agreement? · How are Salik crossings and fines linked to the right agreement? · Can customers be onboarded by scanning their ID? · Several branches? · How is it hosted? |
| JSON-LD | Shared set; breadcrumb Home › Solutions › Car Rental Software |

### 2.3 Fleet Leasing Software — `/solutions/fleet-leasing` (EXISTING `/fleet-leasing`, rewrite and move)

| Field | Value |
|---|---|
| URL / canonical | `/solutions/fleet-leasing`. Old `/fleet-leasing` gets a **301** (see §7) |
| Title | **Fleet & Vehicle Leasing Software \| FleetArabia** (46) |
| Meta description | "Lease quotations with customer acceptance, conversion to agreements, recurring lease billing with VAT, replacement vehicles and workshop visits in one system." (158) |
| H1 | Keep: "Fleet leasing software, from quotation to financial reporting" |
| Primary keyword | fleet leasing software |
| Secondary | vehicle leasing software; car leasing software; lease management software; corporate car leasing system; long-term car rental software; lease billing software; lease contract management |
| Intent | Commercial |
| Target customer | Leasing and long-term-rental companies serving corporate accounts |
| Purpose | P0; the only existing module page, deepened |

**H2/H3 structure:**
1. From quotation to agreement: quotations, fleet compositions, customer acceptance by link, purchase-order upload, conversion to draft agreements, finalise and post
2. Vehicle acquisition approvals (CAPEX workflow)
3. Running the lease: agreement drivers, replacement vehicles, workshop visits, return inspection
4. Lease billing: recurring (policy) billing, preview and generate, VAT, deposits, credit notes, excess-mileage invoicing frequency (→ Billing & Finance)
5. Corporate customers: accounts, contacts, the customer portal (invoices, statements, contracts, requests)
6. FAQ

**Verified features:**
- `routers/les.py`: quotations, fleet compositions, CAPEX workflows and budget, acceptance token (`/api/quotation-accept/{token}`), PO, conversions → drafts → finalise → post, agreement drivers, agreement void, available vehicles, excess-mileage invoice frequency
- `les_extensions.py` (`les-policy-billing` options/preview/generate)
- LES return check-in in the app
- `customer_portal.py`

**Must not mention:**
- IFRS 16
- residual value
- credit scoring or the bureau check
- online lease quotes for the public
- "automatic revenue recognition"
- sync to your ERP
- warranty, recall or tyre management
- GPS

| Field | Value |
|---|---|
| Links in | /platform; /solutions; home Leasing card; /industries (Leasing Companies); Billing & Finance; Car Rental (long-term); footer and navigation |
| Links out | Billing & Finance; Workshop; Vehicle Inspection; /platform; /contact#demo-form |
| CTA | "Book a Demo" |
| FAQ topics | Can the customer accept a quotation online? · One contract, several vehicles? · How is a replacement vehicle billed? · How is excess mileage invoiced? · Where do corporate customers see invoices and statements? |
| JSON-LD | Shared set; breadcrumb Home › Solutions › Fleet Leasing |

### 2.4 Fleet Management — `/solutions/fleet-management` (NEW)

| Field | Value |
|---|---|
| URL / canonical | `/solutions/fleet-management` |
| Title | **Fleet Management Software for Company Fleets \| FleetArabia** (58) |
| Meta description | "One register for vehicles, drivers and their documents: move vehicles between branches, import fuel-card statements and manage accident cases in one cloud ERP." (159) |
| H1 | "Fleet management for the vehicles your business owns" |
| Primary keyword | fleet management software (owned-fleet angle; the head term is dominated by tracking vendors) |
| Secondary | corporate fleet management software; vehicle management system; fleet asset register; driver management software; driver license tracking; fuel card management; vehicle accident management; government fleet management |
| Intent | Commercial |
| Target customer | Rental, leasing and corporate fleets that need one vehicle and driver register |
| Purpose | P1; carries the **Drivers** and **Fuel** sections |

**H2/H3 structure:**
1. One register for every vehicle: vehicle master, status, movement history
2. Moving vehicles between branches: transfer queue and posting
3. **Drivers** (`#drivers`). H3s:
   - profiles and documents
   - license import and expiry tracking (expiring and missing documents)
   - assignments
   - incidents and performance log
   - driver attendance (transport)
   - the driver app
4. **Fuel** (`#fuel`): ENOC and ADNOC fuel-card statement import, duplicate-file guard, fuel spend by vehicle, card and station
5. Accidents: police report, towing, repair, insurance claim, customer liability, settlement (→ Vehicle Inspection#damage)
6. Maintenance through the workshop (→ Workshop)
7. Location data: a GPS tracking server can be connected (→ /integrations#gps). One sentence, no capability list
8. FAQ

**Verified features:**
- `routers/fleet.py` (vehicle master, movement history, transfers)
- `services/vehicle_movement.py`
- `driver_management.py`, `driver_compliance.py`, `driver_profiles.py`
- `fuel_cards.py`
- `accident_claims.py` (+14 accident screens)
- mobile Vehicles/Availability/Movements/Accidents screens

**Must not mention:**
- live tracking, geofencing, route compliance, driver-behaviour scoring
- fuel consumption, efficiency, odometer or anomaly alerts
- fuel-card *integration*
- RFID credentials
- driver training and leave
- vehicle purchase, GRN, disposal and car sales (in code, **not validated**; see O-7)
- telematics hardware

| Field | Value |
|---|---|
| Links in | /platform; /solutions (Driver, Fuel cards → `#drivers`, `#fuel`); /industries (Corporate Fleets, Government, Mobility Groups); Chauffeur & Transport; /integrations#fuel; footer and navigation |
| Links out | `#drivers`, `#fuel`; Workshop; Vehicle Inspection#damage; /integrations#fuel, #gps; /platform; /contact#demo-form |
| CTA | "Book a Demo" |
| FAQ topics | Only for rental companies? · Are license and document expiries flagged? · Which fuel-card statements can be imported? (ENOC, ADNOC) · Does it include GPS tracking? (answer: it can connect to a Traccar GPS server; no tracking claim) · Can vehicles move between branches? |
| JSON-LD | Shared set |

### 2.5 Vehicle Inspection — `/solutions/vehicle-inspection` (NEW)

| Field | Value |
|---|---|
| URL / canonical | `/solutions/vehicle-inspection` |
| Title | **Vehicle Inspection Software for Rental Fleets \| FleetArabia** (59) |
| Meta description | "Inspect vehicles at handover and return with photos, signature, fuel level and damage marked on a diagram, and produce a PDF report for every inspection." (153) |
| H1 | "Vehicle inspections at handover and return, recorded against the vehicle" |
| Primary keyword | vehicle inspection software |
| Secondary | vehicle inspection app; car rental check-in and check-out; vehicle condition report; vehicle handover inspection; vehicle damage report; rental car damage management; vehicle accident management |
| Intent | Commercial, partly problem-led (damage disputes at return) |
| Target customer | Rental and leasing operators; counter staff and drivers doing handovers |
| Purpose | P0/P1; carries the **Damage** section. There is no standalone "digital damage assessment" page |

**H2/H3 structure:**
1. Before the contract opens: VDR-OUT, the inspection at handover, recorded before the agreement starts
2. At return: VDR-IN
3. At the counter, or by a link sent to the driver (the link opens in a browser, not the app); also for replacement vehicles and vehicle movements
4. What is recorded: photos, signature, fuel level, checklist, damage marked on a vehicle diagram, remarks required for new damage
5. The inspection report: a PDF per inspection. A field with no reading is shown as not taken, never filled in
6. **Damage and accident cases** (`#damage`): damage marks → accident case → police report, towing, repair, insurance claim, customer liability (with suggested excess), settlement
7. Repairs go to the workshop (→ Workshop)
8. FAQ

**Verified features:**
- routes `/api/front-office/agreements/rac/vdr-out/*`, `/return-check-in/vdr-in*`, `/replacement/vdr-out/mobile-link`, `/api/fleet/ncm/{id}/vdr-in/mobile-link`, `/api/vdr/report/{cntyp}/{docno}`
- tables `erp_vdr_media`, `erp_vdr_damage_marks`, `erp_return_vdr_mobile_tasks`
- `services/vdr_report.py`
- mobile `InspectionWizard`, `DamageMarker`, `PhotoCaptureGrid`, `SignaturePad`, `FuelSelector`
- `accident_claims.py`

**Must not mention:**
- AI, or automatic damage detection, classification or assessment
- instant repair estimates from photos
- 360° capture or scanners
- automatic before/after comparison (not verified; O-5)
- an offline mode
- insurer integrations
- "the app inspects" for the customer link (the link opens in a browser)

**Publication condition:** confirm that VDR-OUT photos are stored when taken from the app. A photo loss was reported on 2026-09-18 and its fix is not verified (O-4).

| Field | Value |
|---|---|
| Links in | /platform; Car Rental; Fleet Leasing; Workshop; Fleet Management (accidents); /solutions (Vehicle Damage & Claims card); home VDR card; footer and navigation |
| Links out | `#damage`; Workshop; Car Rental; Billing & Finance (damage charges); /platform; /contact#demo-form |
| CTA | "Book a Demo" |
| FAQ topics | Can the driver complete the inspection on their own phone? · Are photos kept with the agreement? · What does the inspection report contain? · How is damage turned into an accident case or a customer charge? · Is damage detected automatically? (answer: no; people record it) |
| JSON-LD | Shared set |

### 2.6 Workshop Management — `/solutions/workshop-management` (NEW)

| Field | Value |
|---|---|
| URL / canonical | `/solutions/workshop-management` |
| Title | **Workshop Management Software for Fleets \| FleetArabia** (53) |
| Meta description | "Service bookings, vehicle receipt, inspection, estimates and approvals, job cards, bays, technicians, parts, labor, quality checks and release in one workflow." (159) |
| H1 | "Workshop management from service booking to vehicle release" |
| Primary keyword | workshop management software |
| Secondary | fleet maintenance software; vehicle maintenance software; job card software; repair order management; workshop bay management; technician management; vehicle service history |
| Intent | Commercial |
| Target customer | Rental, leasing and corporate fleets with their **own** workshop; group companies servicing each other's vehicles (O-6) |
| Purpose | P1. Describe the workflow; **no production-use claim** |

**H2/H3 structure:**
1. The workflow at a glance: service booking → collection → receipt → inspection → estimate → approval → job card → bay and technicians → parts and labor → quality check and road test → release and handover → invoice
2. Service bookings and vehicle collection (slots; collection request and driver assignment)
3. Receipt and inspection (receipt with photos; inspection templates you publish and version)
4. Estimates and approvals (revisions; approval by section and payer; additional work and change orders)
5. Job cards, bays and technicians (bay board; technician assignment)
6. Parts and labor (parts issue and return; labor lines and reversals; job costing)
7. Quality check and road test (checkpoints; a road-test pass needs explicit tester confirmation; rework)
8. Release and handover (readiness, handover with evidence, exception approvals)
9. Workshop finance (maker-checker finance configuration; invoice and expense posting) (→ Billing & Finance)
10. Transfers between workshop locations and group companies (O-6)
11. In the workshop, on a phone (app screens: gate receipt, inspection, job card, work, QC, release, history, queue)
12. FAQ

**Verified features:** the 16 `routers/workshop*.py` and `services/workshop_*.py` files, and mobile `screens/workshop/*` (10 screens). Everything is class A **code**, **not** production-verified (0 job cards; workshop company not set up, PFV-F).

**Must not mention:**
- predictive or AI maintenance ("no model, no scoring; a human decides" is a true *positive* statement)
- external or walk-in customers (G4)
- automatic customer notifications (switched off)
- OBD or diagnostics
- parts marketplace or supplier ordering
- warranty or recall management
- "used by", "proven", "live"

| Field | Value |
|---|---|
| Links in | /platform; /solutions; home Workshop card; /industries (Workshops); Fleet Management; Fleet Leasing; Vehicle Inspection; footer and navigation |
| Links out | Vehicle Inspection; Billing & Finance; Fleet Management; /platform; /contact#demo-form |
| CTA | "Book a Demo" |
| FAQ topics | Can estimates be approved in parts? · How is a road test recorded? · Can technicians work from a phone? · How is a workshop job invoiced? · Can vehicles move between workshop locations? · Does it predict failures? (answer: no; it schedules and records work) |
| JSON-LD | Shared set |

### 2.7 Billing & Finance — `/solutions/billing-finance` (NEW)

| Field | Value |
|---|---|
| URL / canonical | `/solutions/billing-finance` |
| Title | **Rental & Lease Billing and Finance Software \| FleetArabia** (57) |
| Meta description | "Bulk invoices for rentals, leases, Salik and transport contracts, UAE VAT on every line, credit notes, customer statements, ledger and VAT return in one system." (160) |
| H1 | "Billing and finance in the same system as your fleet" |
| Primary keyword | rental billing software |
| Secondary | lease billing software; car rental invoicing software; fleet billing software; VAT invoicing for car rental; fleet accounting software; customer statements; credit notes |
| Intent | Commercial; the finance buyer |
| Target customer | Finance managers and accountants at rental, leasing and transport businesses |
| Purpose | P1 |

**H2/H3 structure:**
1. Invoices raised from the contract: rental invoice generation, summary invoices, lease policy billing, Salik invoicing, transport contract billing, workshop invoices
2. UAE VAT on every line: VAT resolved by charge, customer, location and company; VAT setup; VAT return
3. Credit notes, statements and collections: credit notes; customer statements with ageing; collections workbench; bulk invoice email and bulk download
4. Receipts and payment recording (recording only)
5. The ledger: chart of accounts, journals, trial balance, month-end
6. Payables and procurement: supplier invoices, matching, payments
7. Customer self-service: the customer portal (invoices, statements, receipts, requests)
8. FAQ

**Verified features:**
- `/api/back-office/invoice-generation/generate`, `summary-invoice-generation`, `les-policy-billing`, `salik-invoice-generation`
- `/api/transport/billing/*`
- workshop `post_native_invoice`
- `services/vat_resolver.py`, `finance_vat.py`, `finance_vat_setup.py`, VAT return screen
- `invoice_collection.py` (bulk email)
- `/api/back-office/bulk-invoice-download/zip`
- `finance.py`, `finance_ap.py`, `month_end.py`, `procurement_ap_invoice.py`
- `customer_portal.py` (cheque instructions, receipt voucher)

**Must not mention:**
- card payments, payment links or a payment gateway (NI not configured)
- e-invoicing
- multi-currency (AED only)
- book of record (G5)
- "sync to your ERP"
- IFRS
- automatic revenue recognition

| Field | Value |
|---|---|
| Links in | /platform; Car Rental; Fleet Leasing; Workshop; Chauffeur & Transport; /solutions (Billing card, Finance & Integrations card); /integrations; footer and navigation |
| Links out | Car Rental; Fleet Leasing; Chauffeur & Transport; /integrations; /platform; /contact#demo-form |
| CTA | "Book a Demo" |
| FAQ topics | How is VAT decided on each line? · Can one invoice cover several vehicles? · Can customers download statements? · Is there a VAT return? · Can customers pay by card online? (answer: not currently; payments are recorded) · Is there UAE e-invoicing? (answer: not currently) |
| JSON-LD | Shared set |

### 2.8 Chauffeur & Transport — `/solutions/chauffeur-transport` (NEW, **P2**)

| Field | Value |
|---|---|
| URL / canonical | `/solutions/chauffeur-transport` |
| Title | **Chauffeur & Bus Transport Software \| FleetArabia** (48) |
| Meta description | "Transport inquiries, quotations, bookings, dispatch, trips, driver attendance and school-run schedules, billed per trip, hour, day or kilometer, in one system." (159) |
| H1 | "Chauffeur and bus transport, from inquiry to billed trip" |
| Primary keyword | transport management software |
| Secondary | chauffeur management software; chauffeur booking system; bus transport management software; school bus management software; transport dispatch software; trip billing software |
| Intent | Commercial |
| Target customer | Chauffeur-service and bus/school-transport operators |
| Purpose | P2. Publish only when the owner is ready (company 002 held test data only, PFV-F) |

**H2/H3 structure:**
1. From inquiry to trip: inquiries (including from email), quotations, conversion to a trip or a contract
2. Bookings and the dispatch board
3. Trips and the driver app (the driver sees and updates trips in the app; chauffeur profile)
4. Vehicles and drivers (vehicle assignment with conflict check; driver master; driver attendance)
5. **School transport**: students with pickup and drop points, terms, holidays, route schedules, generated trips
6. Contracts and billing: billing preview; per trip, hour, day, kilometer, passenger, monthly or fixed; invoice generation; payment recording (→ Billing & Finance)
7. FAQ

**Verified features:**
- `routers/transport.py` (inquiries with email parse, quotations → trip/contract, trips, routes, drivers, vehicle assignment, attendance, contracts, billing preview/generate/payment, dashboard, reports)
- `school_transport.py`
- `trip_lifecycle.py`
- screens `transactions/transport/*` (15)
- driver-app CHAUFFEUR profile and trips

**Kept separate as NOT verified (must not mention):**
- limousine as a product (placeholder screen)
- airport transfers, packages, flight tracking
- a passenger or parent app
- staff/employee transport as a feature
- route optimisation
- live trip tracking or GPS (the transport GPS screen depends on unverified vehicle data)
- student tracking or RFID attendance

| Field | Value |
|---|---|
| Links in | /platform; /solutions (Chauffeur & Transport, Bus Transportation cards); home cards; /industries (Chauffeur Services, Bus & School Transport); Fleet Management#drivers; Billing & Finance |
| Links out | Fleet Management#drivers; Billing & Finance; /platform; /contact#demo-form |
| CTA | "Book a Demo" |
| FAQ topics | Can a quotation become a contract? · How are school runs scheduled around terms and holidays? · How do drivers see their trips? · Which billing bases are supported? |
| JSON-LD | Shared set |

---

## 3. Sections, not pages

| Section | Lives on | Anchor | Why not a page |
|---|---|---|---|
| Driver Management | Fleet Management | `#drivers` | Real, but a supporting topic; standalone only when training, leave and RFID are validated |
| Fuel Management | Fleet Management | `#fuel` | Statement import only; no consumption logic |
| Digital Damage Assessment | Vehicle Inspection | `#damage` | Manual damage records; the phrase implies AI |
| GPS / Telematics | /integrations | `#gps` | Traccar connection verified, vehicle data not (G2) |

## 4. Existing pages: how they link into the architecture

| Page | Change |
|---|---|
| `/solutions` | Stays as the module index (title → "Fleet, Rental & Leasing Software Modules \| FleetArabia", 54). Each card links to its spoke. Driver and Fuel cards link to `/solutions/fleet-management#drivers` / `#fuel`; Vehicle Damage & Claims → Vehicle Inspection; Billing and Finance & Integrations → Billing & Finance; Chauffeur & Transport and Bus Transportation → Chauffeur & Transport. BI and CRM stay as cards without a spoke. Keep the anchors so old links still work |
| `/fleet-leasing` | Moves (§7). Its content becomes §2.3 |
| `/industries` | One link per block: Vehicle Rental → Car Rental; Leasing → Fleet Leasing; Chauffeur Services, Bus & School Transport → Chauffeur & Transport; Corporate Fleets, Government → Fleet Management; Workshops → Workshop; Mobility Groups → /platform |
| `/services` | ERP Implementation → /platform; System Integration → /integrations; Data Migration → /platform. Online Reservation Systems, eSignature Integration and custom work stay as service offers, never linked as modules |
| `/integrations` | Add anchors `#salik`, `#fines`, `#parking`, `#fuel`, `#gps` to the existing cards. Link Salik/fines → Car Rental, fuel → Fleet Management#fuel, finance → Billing & Finance, and the page intro → /platform |
| Home | Module cards "Learn More" → spokes instead of `/solutions#…`; "Built for" chips → the matching spoke instead of /industries |
| Navigation | Solutions menu: grouped spokes (Rental & Leasing: Car Rental, Fleet Leasing, Chauffeur & Transport · Operations: Fleet Management, Vehicle Inspection, Workshop · Finance: Billing & Finance), then All Modules (/solutions) and Industries. Platform menu: Cloud ERP (/platform), Deployment, Integrations |
| Footer | Solutions column → the 7 spokes; Platform column keeps /platform, /deployment, /integrations |

---

## 5. Final page map

| # | Page | URL | New / existing | Priority |
|---|---|---|---|---|
| 1 | Cloud ERP (hub) | `/platform` | Existing, rewrite | P0 |
| 2 | Car Rental Software | `/solutions/car-rental-software` | New | P0 |
| 3 | Fleet Leasing Software | `/solutions/fleet-leasing` | Existing, rewrite and move | P0 |
| 4 | Vehicle Inspection | `/solutions/vehicle-inspection` | New | P0 (after O-4) |
| 5 | Billing & Finance | `/solutions/billing-finance` | New | P1 |
| 6 | Workshop Management | `/solutions/workshop-management` | New | P1 |
| 7 | Fleet Management | `/solutions/fleet-management` | New | P1 |
| 8 | Chauffeur & Transport | `/solutions/chauffeur-transport` | New | P2 |
| — | Module index | `/solutions` | Existing, links and title | P0 |
| — | Integrations | `/integrations` | Existing, anchors and links | P1 |
| — | Home, /industries, /services, nav, footer | — | Existing, links only | P0/P1 |

## 6. Final keyword map (one primary keyword per page, so pages do not compete)

| Page | Primary | Owns these secondaries | Hands off to |
|---|---|---|---|
| /platform | cloud ERP for rental companies | fleet ERP, car rental ERP, leasing ERP, rental management ERP | — |
| Car Rental | car rental software | rent a car software, monthly car rental software, rental agreement software, Salik/fines for rental cars | "inspection" → Vehicle Inspection; "billing" → Billing & Finance |
| Fleet Leasing | fleet leasing software | vehicle/car leasing software, lease management, long-term rental, lease billing | "invoicing" → Billing & Finance |
| Fleet Management | fleet management software | corporate fleet, vehicle register, driver management, driver license tracking, fuel card management, accident management | "tracking" → /integrations#gps (no claim) |
| Vehicle Inspection | vehicle inspection software | vehicle inspection app, check-in/check-out, condition report, damage report, damage management | "service inspection" → Workshop |
| Workshop | workshop management software | fleet/vehicle maintenance, job card, repair order, bay and technician management, service history | — |
| Billing & Finance | rental billing software | lease billing, rental invoicing, fleet accounting, VAT invoicing for rentals, statements, credit notes | — |
| Chauffeur & Transport | transport management software | chauffeur management, chauffeur booking, bus transport, school bus management, dispatch, trip billing | "driver records" → Fleet Management |

**Do not target:**
- "limousine software"
- "GPS tracking UAE" or "vehicle tracking system"
- "AI damage detection"
- "fuel management system" (as consumption)
- "e-invoicing"
- "garage management software" (external workshop, until G4)
- any city- or country-named duplicate page

## 7. Final title and meta map

| URL | Title (chars) | Meta description (chars) |
|---|---|---|
| `/platform` | Cloud ERP for Rental, Leasing & Fleet Businesses \| FleetArabia (62) | Operations and finance on one data model: rental, leasing, transport and workshop, with ledger, UAE VAT, approvals, roles and audit trail in one cloud ERP. (155) |
| `/solutions/car-rental-software` | Car Rental Software for Rent-a-Car Companies \| FleetArabia (58) | Reservations, rental agreements, handover and return inspections, replacements, Salik and fine charges, invoicing and UAE VAT for your rent-a-car business. (155) |
| `/solutions/fleet-leasing` | Fleet & Vehicle Leasing Software \| FleetArabia (46) | Lease quotations with customer acceptance, conversion to agreements, recurring lease billing with VAT, replacement vehicles and workshop visits in one system. (158) |
| `/solutions/fleet-management` | Fleet Management Software for Company Fleets \| FleetArabia (58) | One register for vehicles, drivers and their documents: move vehicles between branches, import fuel-card statements and manage accident cases in one cloud ERP. (159) |
| `/solutions/vehicle-inspection` | Vehicle Inspection Software for Rental Fleets \| FleetArabia (59) | Inspect vehicles at handover and return with photos, signature, fuel level and damage marked on a diagram, and produce a PDF report for every inspection. (153) |
| `/solutions/workshop-management` | Workshop Management Software for Fleets \| FleetArabia (53) | Service bookings, vehicle receipt, inspection, estimates and approvals, job cards, bays, technicians, parts, labor, quality checks and release in one workflow. (159) |
| `/solutions/billing-finance` | Rental & Lease Billing and Finance Software \| FleetArabia (57) | Bulk invoices for rentals, leases, Salik and transport contracts, UAE VAT on every line, credit notes, customer statements, ledger and VAT return in one system. (160) |
| `/solutions/chauffeur-transport` | Chauffeur & Bus Transport Software \| FleetArabia (48) | Transport inquiries, quotations, bookings, dispatch, trips, driver attendance and school-run schedules, billed per trip, hour, day or kilometer, in one system. (159) |
| `/solutions` | Fleet, Rental & Leasing Software Modules \| FleetArabia (54) | unchanged (144) |
| `/` | Car Rental, Leasing & Fleet Management Software \| FleetArabia (61) | unchanged (site description, 155) |

The title structures vary on purpose: "X for Y", "X & Y Software", "X Software for Y". "UAE" appears in the descriptions only where it names a real feature (VAT) or the positioning.

## 8. Internal-link map (summary)

| Page | Links in (minimum) | Links out (required) |
|---|---|---|
| /platform | home, all spokes, /solutions, /services, /deployment, nav, footer | 7 spokes, /integrations, /deployment, /contact |
| Car Rental | /platform, /solutions, home, /industries, Inspection, Billing, /integrations, nav, footer | Inspection, Billing, /integrations#salik #fines #parking, Leasing, /platform |
| Fleet Leasing | /platform, /solutions, home, /industries, Billing, Car Rental, nav, footer | Billing, Workshop, Inspection, /platform |
| Fleet Management | /platform, /solutions (+#drivers #fuel), /industries, Transport, /integrations#fuel, nav, footer | #drivers, #fuel, Workshop, Inspection#damage, /integrations#fuel #gps, /platform |
| Vehicle Inspection | /platform, Car Rental, Leasing, Workshop, Fleet Mgmt, /solutions, home, nav, footer | #damage, Workshop, Car Rental, Billing, /platform |
| Workshop | /platform, /solutions, home, /industries, Fleet Mgmt, Leasing, Inspection, nav, footer | Inspection, Billing, Fleet Mgmt, /platform |
| Billing & Finance | /platform, Car Rental, Leasing, Workshop, Transport, /solutions, /integrations, nav, footer | Car Rental, Leasing, Transport, /integrations, /platform |
| Chauffeur & Transport | /platform, /solutions, home, /industries, Fleet Mgmt, Billing | Fleet Mgmt#drivers, Billing, /platform |

## 9. New pages required

1. `/solutions/car-rental-software`
2. `/solutions/vehicle-inspection`
3. `/solutions/billing-finance`
4. `/solutions/workshop-management`
5. `/solutions/fleet-management`
6. `/solutions/chauffeur-transport` (P2)
7. `/solutions/fleet-leasing` (new route for existing content)

Each needs:
- a `SITE_ROUTES` entry (sitemap and breadcrumbs follow)
- metadata with canonical and `pageOpenGraph`
- the shared JSON-LD
- inclusion in the three check scripts

## 10. Existing pages to rewrite

| Page | Change |
|---|---|
| `/platform` | Full rewrite as the Cloud ERP hub, new title |
| `/fleet-leasing` | Content moves and deepens |
| `/solutions` | Title and card links |
| home | Title, module and chip links |
| `/industries` | One link per block |
| `/integrations` | Anchors and links |
| `/services` | Three links |
| Navigation and footer | Grouped spoke links |

## 11. Pages and sections to retire or redirect

| Item | Action |
|---|---|
| `/fleet-leasing` | **Recommend: move to `/solutions/fleet-leasing` with a 301, in the same release as the new pages.** The site has no measurable search equity yet (it did not appear when searched by name on 2026-09-25), so moving now is cheap. Every later month makes it dearer, and a flat URL would be the only spoke outside `/solutions/`. Implement as `redirects()` in `next.config.ts` with `statusCode: 301` (Next's `permanent: true` sends 308; both pass signals, 301 is what was asked). Update every internal link, `SITE_ROUTES` and the check scripts at the same time. Until that release, `/fleet-leasing` stays as it is |
| `/solutions#…` anchors | Keep them working (cards keep their ids), but stop linking to them from home and the footer once the spokes exist |
| Nothing else | No page is removed. `/deployment` (cloud only), `/industries`, `/services`, `/company`, `/resources`, `/contact` stay |

## 12. Owner decisions still required

| # | Decision | Blocks |
|---|---|---|
| O-1 | Approve the URL scheme `/solutions/<page>` and the `/fleet-leasing` → `/solutions/fleet-leasing` 301 in the same release | §5, §11 |
| O-2 | Approve the titles and meta descriptions in §7, including the home, /platform and /solutions title changes (titles have been frozen until now) | all pages |
| O-3 | Approve "Chauffeur & Transport" as the permanent module and page name, and the P2 timing for its page (after the transport company has real data) | §2.8 |
| O-4 | Confirm VDR-OUT photos taken in the app are stored (loss reported 2026-09-18) | §2.5 publication |
| O-5 | Does the inspection report show check-out and check-in side by side? If yes, it can be described; if not, it stays unmentioned | §2.5 |
| O-6 | May the workshop page mention work between **group companies** (verified in code; distinct from external customers, G4)? | §2.6 H2 10 |
| O-7 | Vehicle purchase, GRN, disposal and car sales exist in code but were not validated. Validate them first, or leave them off Fleet Management? | §2.4 |
| O-8 | May the customer estimate-approval link be described, although customer messaging is currently switched off? | §2.6 |
| O-9 | Add `FAQPage` JSON-LD (no rich result expected), or keep FAQs as visible content only? | JSON-LD |
| O-10 | Update the social image and its alt text to the new positioning (R-07, still "…for the Middle East") | social previews |
| O-11 | Verify the site in Google Search Console and Bing, and submit the sitemap (owner action) | measurement |
| O-12 | Production: `1893503` → `5f06086` (technical SEO + truth corrections) are validated and waiting for release approval; the new pages would follow in a later release | release order |

Nothing in this document has been implemented.
