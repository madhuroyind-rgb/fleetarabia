# FleetArabia — product fact validation for SEO

Status: **findings only.** Nothing on the website has been changed.
Branch: `feat/seo-content-architecture`. This document refines `docs/seo/content-architecture.md`, and where the two disagree, this document wins.
Prepared 2026-09-25 for Madhurendra (owner).

## How this was checked

- **Code.** The Fleet Arabia ERP repository on the Fleet server, `/opt/fleet-erp.git`, ref `production` = `main` = **`b5800317`** (2026-09-25 16:42 UTC). Every path below is relative to that repository. It was read with `git show` / `git grep` / `git ls-tree` only; no working tree was touched.
- **Production runtime.** The only checks run were: which containers are up, whether the Traccar service is running, and whether specific settings are *present* in the production API container (values were never printed).
- **Production data (not checked).** A read-only query of the production database was **refused by the permission system**, so no row counts were taken in this pass. Where a production fact is quoted, it comes from an **earlier, dated, read-only observation** in the project notes and is marked *(earlier obs., date)*. Treat those as "last known", not "verified today".

**Classification**

| Code | Meaning |
|---|---|
| **A** | Verified in current product code (a real route, service, screen and data model, wired together) |
| **B** | On the website, but not found or not supported by the code |
| **C** | No evidence found; unsupported |
| **D** | Code exists, but whether it works or is used in production needs the owner |

Separately, **"Production verified"** says whether it is known to work in production. Code existing is **not** production readiness.

---

## A. Executive summary

1. **FleetArabia is itself an ERP, not only an operations layer in front of someone else's ERP.** The code has its own general ledger (chart of accounts, journals, trial balance), a VAT engine and VAT return, payables, procurement, month-end, 144 HR screens and CRM. The website's "connected to *your* ERP" framing understates the product and is only half-true: the one outbound ERP connector found is an optional, switched-off customer sync to an Oracle-based system.
2. **There is no AI in the product.** The only machine-learning component is **OCR** (PaddleOCR with a Tesseract fallback) that reads identity and trade documents during customer onboarding. A workshop test explicitly forbids prediction and classifiers. **The live website's "AI-powered analytics", "AI-driven predictive maintenance" and "AI-powered automation" claims are not supported and should be removed from the existing site**, not only kept off new pages.
3. **Many "integrations" are file imports.**
   - Fuel: ENOC/ADNOC card statements imported as CSV.
   - Salik: CSV import.
   - Traffic fines: CSV import, or a JSON endpoint another system can push to.
   - Nothing connects directly to Salik, Dubai Police, Abu Dhabi Police or Saher.
4. **GPS is more real than assumed, but not proven live.**
   - A **Traccar** tracking server runs on the Fleet server, the production API has its connection settings, and the Transport module has a GPS screen for live positions, trips, events and geofences.
   - Whether any vehicle reports to it was **not verified**.
5. **Workshop is the deepest module in code, and the least proven in production.**
   - Code covers the whole chain: booking → receipt → inspection → estimate → approval → job card → bay → labour and parts → QC → road test → release → handover → finance snapshot → invoice.
   - It handles the company's own fleet, group companies and outside (walk-in) customers.
   - Production last showed **0 job cards**, and the workshop company had no workshop branch *(earlier obs., 2026-09-25)*.
6. **Limousine is a placeholder.** Chauffeur and bus work runs in one shared Transport module: inquiries, quotations, contracts, trips, dispatch, attendance and billing. Of the three business lines, **school transport** is the only one with dedicated code. **Staff/employee transport is not a distinct feature.**
7. **Payments.**
   - The Network International card gateway is fully coded, including saved cards and payment links, but **not configured** in production.
   - The customer portal takes **cheque only** by owner decision.
   - The booking site is live with an **empty catalogue**.
8. **UAE-only in practice.**
   - AED is the only currency in code, and UAE VAT is configured.
   - Multi-country is designed in (divisions, country profiles, tax jurisdictions) but not configured.
   - **No KSA, GCC or India claim is supported today.**
9. **No UAE e-invoicing.** Nothing in code.
10. **Operational readiness is the real gap.** Earlier today only two users could log in, non-admin roles saw 0–7 menu tiles, and companies 002 (Transport) and 003 (Workshop) had no vehicles or customers *(earlier obs., 2026-09-25)*. SEO pages should describe what the software does, and must never imply that it is in use anywhere.

---

## B. Verified capability matrix

Production column key:
- **Yes** = observed working in production
- **Partly** = some parts observed
- **No** = observed not working, or not set up
- **Not checked** = no production evidence in this pass

| Capability | Status | Evidence (in `/opt/fleet-erp.git` @ production) | Production verified? | Safe SEO claim |
|---|---|---|---|---|
| Own ERP / finance ledger | **A** | `frontend/src/app/transactions/finance/{accounts,journal,trial-balance,vat,vat/return,vat-setup,ap,…}`, `routers/finance.py`, `finance_ap.py`, `month_end.py`, `services/finance_native.py` | Not checked. Earlier obs. (2026-09-18): GL codes empty on 237/238 charge codes, so GL was historically resolved outside the database. | "Includes finance: ledger, journals, trial balance and VAT" |
| Connects to another ERP | **D** | Only `monolith.py` `orion_customer_sync_enabled()` (customer master to an Oracle DB, flag `ORION_CUSTOMER_SYNC_ENABLED` default off); generic "App API Connection" admin | No | None. Do not claim named or generic ERP connectors |
| Vehicle master and movements | **A** | `routers/fleet.py` (`/api/fleet/vehicle-master`, movement history, transfers), `services/vehicle_movement.py`, `vehicle_master_rules.py` | Partly. Company 001 has vehicles; 002 and 003 had none *(earlier obs., 2026-09-25)* | "Vehicle register, movements and transfers between branches" |
| Companies and branches | **A** | `services/company_scope.py`, `branch_authority.py`, `location_master.py`, `region_master.py`, `master_company.py` | Partly: 3 companies exist; login-to-branch grants only for 2 users *(earlier obs.)* | "Multi-company, multi-branch" |
| Car rental (reservations, agreements, delivery, return, replacement, extension) | **A** | `routers/front_office.py`, `rac_operations.py`, `rac_extended.py`; screens `app/rental/{rac,delivery,return,…}`, `transactions/front-office/*` (27) | Partly. Company 001 contracts exist; front office unusable for non-admin roles *(earlier obs., 2026-09-25)* | "Reservations, rental agreements, delivery, return, replacement" |
| Leasing (quotation → acceptance → conversion → agreements → policy billing) | **A** | `routers/les.py` (6,758 lines: quotations, customer acceptance link, PO, conversion, CAPEX workflow), `les_extensions.py` (`/api/back-office/les-policy-billing/*`) | Not checked | "Lease quotations, customer acceptance, agreements and recurring lease billing" |
| Vehicle inspection (VDR-OUT, VDR-IN) | **A** | Routes `/api/front-office/agreements/rac/vdr-out/*`, `/return-check-in/vdr-in*`, `/api/front-office/replacement/vdr-out/mobile-link`, `/api/fleet/ncm/{id}/vdr-in/mobile-link`; `services/vdr_report.py` (PDF report); tables `erp_vdr_media`, `erp_vdr_damage_marks`, `erp_return_vdr_mobile_tasks`, `pre_delivery_inspection` | Partly. Earlier obs. (2026-09-18): VDR-OUT photos were being dropped by the app; fix status not verified | "Handover and return inspections with photos, signature, damage marks and a PDF report" |
| Damage capture | **A** (manual) | Mobile `components/DamageMarker.tsx`, `PhotoCaptureGrid.tsx`, `SignaturePad.tsx`, `inspection/InspectionWizard.tsx` ("new damage" requires remarks) | See above | "Mark damage on a vehicle diagram and attach photos" |
| Automatic or AI damage detection or assessment | **C** | No ML library; `tests/test_workshop_phase07_structure.py` forbids `predict`, `classifier`, `confidence_score`, `ai_` | — | **DO NOT CLAIM** |
| Accidents and insurance claims | **A** | `routers/accident_claims.py` (police, towing, repair, damage, insurance claim, customer liability, settlement); 14 screens `transactions/accident/*` | Not checked | "Accident cases from police report to settlement" |
| Driver management | **A** | `routers/driver_management.py` (profile, documents, assignment, incidents, performance log, workflow, utilisation, licence import), `driver_compliance.py` (expiring and missing documents), `driver_profiles.py`, `driver_operating_model.py`, `driver_rfid.py` | Partly. Driver OTP login smoke-tested with one test driver *(earlier obs., 2026-09-25)* | "Driver records, licences and documents with expiry tracking, assignments, incidents" |
| Driver mobile app | **A** | `fleet_erp_android_approval_app` v1.10.5 (`com.fleetarabia.global`): `driver/DriverApp.tsx`, profiles (CAR_RENTAL / CHAUFFEUR / WORKSHOP), jobs = VDR-OUT/VDR-IN tasks; `/api/driver/trips` (`routers/trip_lifecycle.py`) | Partly (as above). Which APK version is installed on devices is unknown | "A driver app for inspections and trips" |
| Driver attendance | **A** (transport) | `/api/transport/attendance`; mobile `screens/transport/DriverAttendanceScreen.tsx` | Not checked | "Driver attendance for transport operations" |
| Driver leave | **D** | HR self-service `/api/hr/ess/leave-*` (`routers/hr_ess.py`); not driver-specific; HR backend partly missing *(earlier obs.)* | No | None |
| Chat / notifications | **A** / **D** | `routers/chat.py` (`erp_chat_message`), mobile `screens/ChatScreen.tsx`; push via Expo token and `services/fcm_push.py` (needs `FCM_SERVICE_ACCOUNT_JSON`) | Not checked (push config not verified) | "Team chat in the app". No push claim |
| Fuel | **A** (file import) / **C** (analytics) | `routers/fuel_cards.py`: "ENOC / ADNOC CSV import", `fuel_transactions` (card, vehicle, plate, station, litres, price, `driver_id`), duplicate-file guard, `/api/fuel/summary`; screen `transactions/fleet/fuel-cards`. **No odometer, consumption, efficiency or anomaly logic** | Not checked | "Import ENOC and ADNOC fuel-card statements and review fuel spend per vehicle" |
| Rental fuel level (out/in) | **A** | Fuel fields in `front_office.py` (35 refs), `rac_extended.py` (32); mobile `components/FuelSelector.tsx` | Not checked | "Fuel level recorded at handover and return" |
| GPS tracking | **D** | `routers/fa_ncm_ecb.py` `/api/traccar/{status,devices,positions,trips,events,summary,geofences}`; screen `transactions/transport/gps-tracking` (576 lines); `routers/fleet.py` generic "GPS API" + `fleet_geofences`. **Runtime:** `traccar` service active on the Fleet server; `TRACCAR_URL`/`TRACCAR_EMAIL` set in `fleet-api-prod` | **No (not verified)**: device or position data not checked | "GPS provider connectivity is supported, but a live production provider was not verified." No tracking claim yet |
| Salik / Darb tolls | **A** (CSV import) | `routers/salik_import.py`: "CSV upload → match to the contract on rent at crossing time → invoicing"; screens `back-office/salik-import`, `salik-invoice-generation`, `salik-summary-invoice` | Not checked | "Import Salik toll files, match each crossing to the contract on hire, and invoice it" |
| Traffic fines | **A** (CSV or pushed JSON) | `routers/traffic_fine_import.py` (upload + `/ingest` JSON; liability from custody chain via `FLTPROC_TRAFFIC_FINE_GET_DETAILS`); screens `transactions/traffic-fine/{fine-import,fine-allocation,fine-verification,fine-dispute,fine-email-notification,bulk-authorization,paid-fine-review}` | Not checked | "Import fines, find who had the vehicle, allocate, dispute and notify" |
| Direct police, Saher or Salik portal connection | **C** | No outbound call in either router | — | **DO NOT CLAIM** |
| Parking fines | **A** (CSV) | `routers/parking_import.py` | Not checked | "Parking charge import" |
| Workshop (full chain) | **A** code | `routers/workshop*.py` (16 routers) and `services/workshop_*.py`; bays and technicians, labour and parts costing, QC and road test (`workshop_quality.py`), release/handover, finance snapshot → `post_native_invoice`; mobile `screens/workshop/*` (10 screens) | **No**: 0 job cards in any company; company 003 has no workshop branch *(earlier obs., 2026-09-25)* | Describe the workflow; **never** "proven" or "in use" |
| Workshop for outside customers | **A** code | `workshop.py` WALK_IN / `is_external`; `services/workshop_service_request.py` `EXTERNAL_CUSTOMER`, `INTERNAL_WORKSHOP`, group intercompany; customer messaging switched off by config | No | "Service your own fleet, group companies' vehicles and customers' vehicles" (see G4) |
| Chauffeur operations | **A** (via Transport) | `routers/transport.py` (inquiries incl. email parsing, quotations → trip or contract, dispatch board, trip lifecycle, vehicle assignment, contract billing per trip/hour/day/km); driver-app CHAUFFEUR profile | No: company 002 held test data only *(earlier obs.)* | "Transport bookings, dispatch and trip billing". Chauffeur is a use of it |
| Limousine-specific features | **C** | `transactions/limousine/overview/page.tsx` = `ModulePlaceholder`: "operational screens have not been built yet" | — | **DO NOT CLAIM** a limousine module |
| School transport | **A** | `routers/school_transport.py` (students, terms, holidays, route schedules, trip generation with vehicle conflict check, pickup/drop per student); screen `transactions/transport/school-bus` | Not checked | "School bus routes, students, terms and generated trips" |
| Staff / employee transport | **C** | No distinct feature; only generic contracts (PER_PASSENGER etc.) | — | **DO NOT CLAIM** as a feature |
| Bus routes, trips, scheduling | **A** | `transport.py` routes and trips, `school_transport.py` schedules | Not checked | "Route master, trips and schedules" |
| Billing and invoicing | **A** | `/api/back-office/invoice-generation/generate`, `summary-invoice-generation`, `les-policy-billing`, `salik-invoice-generation`, `/api/transport/billing/generate`, workshop `post_native_invoice`; `invoice-collection` (14 screens, bulk email) | Partly. Company 001 invoicing is legacy-proven; others not checked | "Invoices for rentals, leases, tolls, transport contracts; bulk invoice email" |
| VAT | **A** | `services/vat_resolver.py` (7-level hierarchy), `finance_vat.py`, `finance_vat_setup.py`, VAT return screen | Partly: VAT lookup for company 001 only *(earlier obs.)* | "UAE VAT on every invoice line" |
| UAE e-invoicing | **C** | No `einvoic`, Peppol or ASP code | — | **DO NOT CLAIM** |
| Customer portal (B2B) | **A** | `routers/customer_portal.py` (invoices, statement, contracts, requests, tickets, users); payment config returns `CHEQUE`, `/pay` answers 410 | **Yes**: live at portal.fleetarabia.com *(earlier obs., 2026-09-24/25)* | "A customer portal for invoices, statements, contracts and service requests" |
| Online booking (B2C) | **A** / **D** | `b2c-frontend` (cars, book, account); `routers/online_booking_admin.py` | Live, but **empty catalogue** *(earlier obs., 2026-09-25)* | Do not market until the catalogue is live |
| Card payments (Network International) | **D** | `routers/payments_ni.py` (initiate, payment links, callback, saved cards, charge saved card); screens `front-office/payment-gateway`, `invoice-collection/payment-links` | **No**: `NI_OUTLET_REF` and `NI_API_KEY` unset in production | **DO NOT CLAIM** live card payments |
| OCR of onboarding documents | **A** | `monolith.py` ~34550–35110 (PaddleOCR → Tesseract; ID, licence, passport, trade licence, TRN certificate; "OCR is evidence, not a source of record"); `backend/Dockerfile` installs tesseract; mobile `onboarding/scan.ts`, `CustomerOnboardingScreen.tsx` | Not checked | "Scan customer ID and licence documents to pre-fill the form" |
| AI predictive maintenance | **C** | No model or prediction code; the workshop test forbids it | — | **DO NOT CLAIM** |
| AI analytics / recommendations | **C** | None | — | **DO NOT CLAIM** |
| Credit bureau check (Etihad Credit Bureau) | **D** | `services/etihad_bureau.py` (mTLS; non-blocking), wired in `administration.py`, `fa_ncm_ecb.py` | Not checked | None until confirmed |
| RFID driver credentials | **A** / **D** | `routers/driver_rfid.py`, `rfid_ingest.py`, `services/rfid_*` | Not checked | None until confirmed |
| MFA | **A** | `routers/user_mfa_api.py`, `services/user_mfa.py`, screen `mfa/setup` | Not checked | "Multi-factor sign-in" |
| Multi-country | **D** | Divisions and country profiles (`services/country_profiles.py`, CLDR-generated for all countries); tax jurisdictions in the VAT resolver; **AED is the only currency literal in code** | No: division `tax_jurisdiction_code` NULL everywhere *(earlier obs., 2026-09-25)* | "Designed for multi-company operation". No country list |
| Cloud hosting | **A** | `docker-compose.prod.yml`, blue-green deploy (`DEPLOY.md`), live at erp.fleetarabia.com | Yes | "Cloud-hosted" |
| On-premises | **D** | Docker packaging makes it technically possible; no install kit or documentation for customers found | No | Only if the owner confirms it is offered |

---

## C. Product positioning

The website currently says both "connected to your finance system" (home) and "one intelligent ERP" (leasing page). The code settles it: FleetArabia **is** the ERP. The product's own page title is "Fleet Arabia Cloud ERP", and it has its own ledger, VAT, payables and HR.

**Recommended statement:**

> **FleetArabia is a cloud ERP for rental, leasing, transport and workshop businesses in the UAE: vehicles, contracts, inspections, workshop, billing and finance in one system.**

Why each part is safe:
- **"Cloud ERP":** own general ledger and finance screens, and hosted at erp.fleetarabia.com.
- **"UAE":** AED and UAE VAT are the only configured market.
- **The module list:** only modules with class **A** code.
- **Left out on purpose:** "AI", "GCC", "connects to your ERP", "real-time tracking".

Consequence for keywords: "fleet ERP", "car rental ERP" and "cloud ERP for rental companies" become legitimate targets. Decision D1 in `content-architecture.md` is answered: **the ERP**.

---

## D. Safe SEO claims

These can be used as written, or reworded without adding to them. They describe what the software does, never that anyone uses it.

1. Cloud ERP for rental, leasing, transport and workshop businesses, with its own finance ledger, journals, trial balance and VAT.
2. Multi-company and multi-branch, with role-based access and approval workflows.
3. Car rental: reservations, rental agreements, vehicle delivery, return, replacement and extension.
4. Leasing: lease quotations with customer acceptance, conversion to agreements, recurring lease billing.
5. Vehicle inspection at handover and return, at the counter or through a link sent to the driver, with photos, signature, damage marked on a vehicle diagram, fuel level, and a PDF inspection report.
6. Accident cases: police report, towing, repair, damage, insurance claim, customer liability, settlement.
7. Driver records: licences and documents with expiry tracking, assignments, incidents, and a driver mobile app for inspections and trips.
8. Salik: import toll files, match each crossing to the contract on hire at that time, and invoice it.
9. Traffic fines: import fines, work out who had the vehicle, allocate, verify, dispute and notify by email.
10. Fuel: import ENOC and ADNOC fuel-card statements and review fuel spend per vehicle.
11. Workshop: service booking, vehicle receipt, inspection, estimate with approval, job card, bays and technicians, labour and parts, quality check and road test, release and handover, invoice. *Describe the workflow only; never "in use".*
12. Workshop for your own fleet and for customers' vehicles. *(Pending G4.)*
13. Transport: inquiries and quotations, contracts, trips, dispatch board, driver attendance, contract billing per trip, hour, day or kilometre.
14. School transport: students, terms, holidays, route schedules and generated trips.
15. Billing: invoices for rentals, leases, tolls and transport contracts, summary invoices, bulk invoice email, UAE VAT on every line.
16. A customer portal where business customers see invoices, statements, contracts and raise requests.
17. Customer onboarding that scans ID and licence documents to pre-fill details (OCR; a person confirms).
18. Multi-factor sign-in.

---

## E. Claims that MUST NOT be used

| Claim | Why | Where it is today |
|---|---|---|
| AI damage detection, automatic damage assessment | No ML; damage is marked by people | Not on the site; never add |
| AI-driven predictive maintenance | No model; workshop code forbids prediction | **Live home page** (Workshop card): remove |
| AI-powered analytics, insights, reporting, automation | No AI code | **Live**: /solutions, /platform, /industries, /fleet-leasing, /company, /services, /integrations |
| Live GPS tracking, real-time location, geofencing as a working feature | Traccar is installed and configured, but vehicle reporting is not verified | **Live**: /platform, /solutions, /fleet-leasing, /industries |
| Named GPS or regulatory feeds (SecurePath, Shahin, WASL) | No code | **Live** /integrations |
| Fuel-card *integration*, consumption, efficiency, anomaly alerts | CSV statement import only; no odometer or consumption logic | **Live** home, /solutions |
| Direct Dubai Police, Abu Dhabi Police or Saher connection | CSV or pushed-JSON import only | **Live** /integrations |
| "Charge customer cards" for fines; live card payments | NI gateway not configured; portal is cheque only | **Live** /integrations, /solutions |
| Mada, KNET, Benefit, NAPS | No code | **Live** /integrations |
| TAMM/ELM permits, SATA and border transit | No code | **Live** /integrations |
| UAE e-invoicing | No code | Not on site; never add until built |
| KSA, GCC, "Middle East" operation, multi-country | Only UAE configured; AED only | **Live** in many places ("across the Middle East", "Multi-Country Ready") |
| India operation | Only a GST mention in a comment | Not claimed (the Patna office is a company fact, not a product market) |
| Staff or employee transport as a feature | No distinct feature | **Live** /solutions, /industries |
| Limousine module (airport transfers, hourly hire, packages) | Placeholder screen | **Live** home, /solutions, /industries |
| Connects to your ERP (SAP, Oracle, "leading ERPs") | Only an off-by-default Oracle customer sync | **Live** home, /integrations, /platform |
| Any customer, deployment, fleet size or savings | No customers | Keep off, as today |
| On-premises deployment | Technically possible, not verified as an offering | **Live** /deployment: needs G3 |

The owner confirmed several of these on 2026-09-20. **The code does not support them.** The table records the conflict; the owner decides which is right (G1).

---

## F. Production-readiness gaps (technical existence vs operational readiness)

| Area | Exists in code | Operationally ready? | Gap |
|---|---|---|---|
| Access | RBAC, roles, branch grants, MFA | **No** *(earlier obs., 2026-09-25)* | Only 2 logins have branch grants; non-admin roles see 0–7 tiles; no operational roles (rental, fleet, workshop, transport, finance) |
| Front office (rental) | Full | **No for non-admins** | Phantom menu keys; 3 endpoints gate on product name |
| Company 002 Transport | Transport and school modules | **No** | 0 vehicles, 0 customers, test drivers and routes only |
| Company 003 Workshop | Full workshop chain | **No** | No workshop-flagged branch, so the flow refuses; 0 job cards anywhere |
| GPS | Traccar integration + screen | **Unknown** | Device and position data unverified |
| Payments | NI gateway | **No** | Merchant settings unset; portal cheque-only by decision |
| Booking site | B2C site + admin | **No** | Empty catalogue |
| Push notifications | FCM sender, Expo tokens | **Unknown** | Service-account setting not verified |
| Customer email from workshop | Release notifications | **Off** | Switched off by configuration |
| Mobile app | v1.10.5 in code | **Unknown** | Which APK is on devices is unknown; VDR-OUT photo loss reported 2026-09-18 |
| HR | 144 screens | **Partly** | 66 frontend calls had no backend route *(earlier obs., 2026-09-25)* |
| Multi-country | Divisions, country profiles, tax jurisdictions | **No** | Jurisdictions unset; AED only |

**Mobile: implemented in the app vs backend only**

| Area | In the app (`fleet_erp_android_approval_app/src`) | Backend only (no app UI) |
|---|---|---|
| Driver login, profiles | Yes (`LoginScreen`, `driver/*`) | — |
| Inspections, photos, damage, signature | Yes (`inspection/InspectionWizard`, `screens/rental/Inspect*`) | — |
| OCR | Yes: `onboarding/scan.ts` uploads to server OCR | — |
| Tasks, chat, notifications | Yes (`TasksScreen`, `ChatScreen`, `NotificationsScreen`) | Push depends on configuration |
| Rental (delivery, return, collections) | Yes (permissions `delivery`, `return_checkin_*`, `collection`) | — |
| Leasing | Return check-in for LES only | Quotations, conversions, billing |
| Chauffeur and bus | Trips, trip tracking, dispatch permissions, driver attendance | Contracts, billing, school transport |
| Fleet | Vehicles, availability, movements, accidents | Transfers |
| Workshop | Receipt, inspection, job card, work, QC, release, history, queue | Finance, estimates are mostly web |
| Credit notes | Approval screens (`screens/approvals/CreditNotesScreen`) | — |
| Customer onboarding | Yes (`CustomerOnboardingScreen`) | — |
| Fuel, fines, Salik, school transport, GPS | — | Web only |

---

## G. Owner confirmations still required (not answerable from the repository)

| # | Question |
|---|---|
| G1 | The website's AI, GPS, fuel-card, police/Saher, Mada/KNET, SecurePath/WASL, TAMM/ELM and SATA claims are not supported by the code. **May they be removed or reworded on the existing site?** |
| G2 | Is any vehicle reporting to the Traccar server today? Which devices or provider? (Answering this could move GPS from D to A.) |
| G3 | Is on-premises installation actually offered to customers? |
| G4 | Will the workshop take outside customers' vehicles commercially? The code supports it. |
| G5 | Is FleetArabia's own ledger meant to be the customer's book of record, or will customers keep their own accounting system? |
| G6 | When will Network International card payments be switched on, if ever? |
| G7 | Which company or business line goes live first, and roughly when? This decides which pages can say "available now". |
| G8 | Should the booking site (once it has a catalogue), the Etihad Credit Bureau check and RFID driver credentials be marketed? |
| G9 | Is UAE e-invoicing on the roadmap? It cannot be claimed either way until built. |

---

## H. Final SEO architecture (based only on verified capabilities)

These changes to `content-architecture.md` follow from the evidence:
- Chauffeur & Limousine and Bus merge into **one Transport page**, because they share the Transport module and limousine is a placeholder.
- GPS stays a section.
- Fuel becomes a factual section about imports.
- "ERP" is now a legitimate target keyword.

**Existing pages to enhance**

| Page | Change | P |
|---|---|---|
| All pages | **Remove unsupported claims** (§E), after G1 | **P0** |
| / (home) | Title around "Cloud ERP for Rental, Leasing & Fleet"; remove AI/Middle East; module cards link to the new pages | P0 |
| /platform | Becomes "the ERP": finance ledger, VAT, roles, approvals, multi-company | P0 |
| /fleet-leasing → /solutions/fleet-leasing | Quotation → acceptance → conversion → policy billing, with FAQ | P0 |
| /integrations | Rewrite around what exists: Salik/fines/parking/fuel file imports, customer portal, GPS provider connectivity (not live), Network International (coming, not live) | P1 |
| /industries | One link per block; drop limousine and staff-transport specifics | P1 |

**New pages**

| Page | Built on | P |
|---|---|---|
| /solutions/car-rental-software | Front office, VDR, Salik/fines matching, rental billing | **P0** |
| /solutions/vehicle-inspection | VDR-OUT/IN, driver link, photos, damage diagram, PDF report, accidents | **P0** |
| /solutions/fleet-billing (title "Rental & Lease Billing Software") | Invoice generation, lease policy billing, Salik invoicing, VAT, customer portal | P1 |
| /solutions/workshop-management | Workflow description only; no "in use" | P1 |
| /solutions/fleet-management | Vehicle register, movements, drivers (compliance), accidents, fuel imports | P1 |
| /solutions/transport (bus, chauffeur and school) | Transport module and school transport | P2, until company 002 is live (G7) |

**Sections, not pages**

| Section | Lives on | Why |
|---|---|---|
| Digital damage assessment | Vehicle Inspection | Manual only; the phrase implies AI |
| Driver management | Fleet Management (`#drivers`) | Real, but a supporting topic |
| Fuel | Fleet Management (`#fuel`) | File import only |
| GPS / telematics | /integrations (`#gps`) | Not verified live (G2) |
| Limousine | none | Placeholder |
| Staff transport | none | No feature |

**Priority**
- **P0:**
  - remove unsupported claims (G1)
  - home, platform and leasing rewrites
  - Car Rental and Vehicle Inspection pages
  - Search Console verification
- **P1:**
  - Billing, Workshop and Fleet Management pages
  - /integrations rewrite
  - /industries links
- **P2:** Transport page after company 002 goes live; GPS page only after G2.

None of this has been implemented.
