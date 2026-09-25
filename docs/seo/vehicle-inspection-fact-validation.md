# Vehicle Inspection: fact validation for O-4 and O-5

Status: **findings only.** No application code, website content or metadata has been changed.
Branch: `feat/seo-content-architecture` @ `7fa2d52`. Website production (`main` = `origin/main`) is **`91a913a`**.
Prepared 2026-09-25 for Madhurendra (owner) and whoever writes the Vehicle Inspection page.

## Scope and method

**Code examined.** The Fleet Arabia ERP deploy repository on the Fleet server, `/opt/fleet-erp.git`, ref `production` = **`610d7bbd`**. Production has moved on from the `b5800317` examined in `product-fact-validation.md`; another session deployed in the meantime. It was read only with `git show`, `git grep` and `git log`; no working tree was touched and nothing was run.

**Paths.** All paths below are relative to that repository:
- `B/` = `backend/backend_app/`
- `APP/` = `fleet_erp_android_approval_app/src/`

**Not done:**
- **Production database.** A read-only query was refused by the permission system earlier today, so no row counts were taken in this pass. The one data point quoted comes from a code comment (see A-7).
- **On-device test.** The app was not run on a device, and which APK version staff phones carry is unknown.
- **Automated tests.** The backend tests were not executed: they refuse to run on the server by design.

**How each finding is graded:**

| Grade | Meaning |
|---|---|
| **Code path exists** | Routes and screens are wired |
| **Persistence implemented** | The code writes the data and commits it |
| **Retrieval implemented** | The code reads it back somewhere a person can see it |
| **Production verified** | Observed working with real data. **Not achieved for any item in this pass** |

---

## 1. O-4: "Inspection photos taken in the app are stored"

### Verdict: **APPROVED WITH QUALIFICATION**

**Supported:** in current production code, every app inspection path writes its photos and signatures to the database. On the path that failed on 2026-09-18 (the staff hand-over), the app waits for the server to confirm, and count, what it stored before it completes the hand-over.

**Qualifications:**
1. **Not production-verified.** There were no database reads and no device test.
2. **The web counter paths still store photos asynchronously**, and an error there is only logged (H-1, H-2).
3. **The PDF report does not show the photos** (see O-5).
4. **Storage is base64 inside the database**, with no content hash, and a re-submission replaces the earlier set (H-3, H-6).

### A–H answers

**A. Are inspection photos actually persisted?** Yes, in code, on every app path.

| App path | Endpoint | Persistence | Evidence |
|---|---|---|---|
| Staff hand-over (VDR-OUT of a DEL) | `POST /api/front-office/delivery/{del_no}/vdr-media` with `confirm_storage: true`, then `…/delivery/{del_no}/close` | **Synchronous, confirmed.** Checks the DELIVERY evidence contract (`first_missing_message`), writes the rows, commits, reads them back, and answers `stored_count` plus the list. The app refuses to continue unless `stored_count ≥` what it sent (`expect: { field: "stored_count", min: mediaCount }`). Only then does it close the delivery | `B/routers/front_office_addons.py:208–322`; `APP/inspection/jobs.ts:17–57` |
| Return (VDR-IN task, RAC/MRA/LES) | `POST /api/front-office/return-check-in/vdr-in/mobile-task/{token}/submit` | **Synchronous, same transaction.** Inserts the `pre_delivery_inspection` row, then `_store_vdr_media(source="RETURN", docno=<that id>)` and the damage marks, then commits | `B/routers/rac_extended.py:8545` (store around line 8640, commit around line 8748) |
| Driver-link VDR-OUT | `POST /api/front-office/agreements/rac/vdr-out/mobile-task/{token}/submit` | **Synchronous**, same pattern | `B/routers/rac_extended.py:8162` (store around line 8273) |
| Collection (COL) | `POST /api/front-office/collection/{col_no}/close` | **Synchronous**, in the close transaction | `B/routers/rac_operations.py:213` (store around line 411) |
| Non-revenue movement (NCM VDR-IN) | `POST /api/fleet/ncm/vdr-in/mobile-task/{token}/submit` | **Synchronous, but stored differently**: the whole `vdr_media` (photos included) is saved inside `erp_return_vdr_mobile_tasks.response_json`, **not** in `erp_vdr_media` | `B/routers/fa_ncm_ecb.py:1236–1330` |

**Every app submit also:**
- goes through the phone's outbox (saved on the phone first, with idempotency keys)
- is sent once only: `43a5089a` made `send()` single-flight, after two concurrent attempts had been posting every step twice

**B. Where are they stored?** In the MySQL database, as **base64 data URLs**. Not on disk and not in object storage.

| Store | Content | Evidence |
|---|---|---|
| `erp_vdr_media` | One row per photo or signature | Written by `_store_vdr_media` (`B/monolith.py:39766`); schema `data_url LONGTEXT` in `backend/migrations/20260613_legacy_phase3_operations.sql:215–227` |
| `erp_return_vdr_mobile_tasks.response_json` | Movement (NCM) inspections | See A |
| `document` table (hand-overs only) | A secondary registry copy. Items over 60 kB keep only their label. A failure here is logged and ignored ("non-fatal") | `_save_vdr_to_document_table`, `B/monolith.py:39799` |

The workshop's own receipt photos use a different, stronger store: files with opaque names, a server-computed SHA-256 and sealing (`B/services/secure_attachment.py`). Its docstring explicitly keeps VDR out of that store: "No base64 in the database, ever. `erp_vdr_media.data_url LONGTEXT` already holds 428 rows that way".

**C. How are they linked to the inspection?**
- **Row fields:** each `erp_vdr_media` row has `source` (`DEL`, `RETURN`, `COL`, `REPLACEMENT`), `docno` (the DEL number, or the `pre_delivery_inspection` id for returns), `cntyp`, `contract_no`, `media_type` (`PHOTO`/`SIGNATURE`), `label` (the photo slot, e.g. "Odometer In Photo") and `created_by`/`created_at`.
- **Required slots:** these come from one server-owned contract, `B/services/vdr_evidence.py`. The server sends it with every task and prefill; the app mirrors it in `APP/evidence.ts`:
  - DELIVERY: Front, Odometer and Fuel photos, plus customer and driver signatures
  - IN: "Odometer In Photo" and "Fuel In Photo"

**D. Can they be retrieved after the inspection?**
- **Yes, for staff.** `GET /api/front-office/vdr-report` (`B/routers/front_office.py:8155`) loads photos and signatures with their `data_url` through `_load_vdr_media` (lines 8222, 8305, 8358) for DEL/COL, RETURN and REPLACEMENT sources. The web screen `frontend/src/app/transactions/front-office/vdr-report/page.tsx` renders the photos (`<img src={v.photo.data_url}>`, line 326) with the damage marks for each view.
- **Not verified:** whether movement (NCM) photos, held in `response_json`, are shown on any screen.

**E. Are they included in the generated report?** **No.** The PDF (`GET /api/vdr/report/{cntyp}/{docno}`) prints only **counts**: "Photographs on file" and "Signatures on file" (`B/services/vdr_report.py:338–340`). It embeds no image. The counts are also likely to be wrong (H-4).

**F. What happened on 2026-09-18?** The 2026-09-18 audit found two defects, confirmed by the fix commit's message (`3b65a6dc`):
1. **Staff VDR-OUT photos dropped.** "The app sent photos at the top level; `/delivery/{del_no}/vdr-media` reads only `vdr_out.*`, so every hand-over's evidence was dropped."
2. **Every VDR-IN from the app refused.** "The server requires 'Odometer In Photo'/'Fuel In Photo', the app's slots were 'Odometer', 'Front', …"

A 2026-09-24 follow-up also found VDR-OUT failing against production for app v1.9.0, because the backend fix was not yet deployed.

**G. Was it fixed?** **In code, yes. On a device, not verified.**

| Commit | What it did |
|---|---|
| `3b65a6dc` "fix(mobile): Phase 0 — make the shipped inspection, push and login flows work" | Corrected payload shape; `confirm_storage=true` (store in request, validate, answer with what was kept; the app closes the delivery only after that); one evidence contract for all three submit handlers; fuel in eighths |
| `1a44e399` "Phase 2A — one inspection wizard" | Every inspection uses one wizard and the ERP's own endpoints, through the outbox |
| `43a5089a` | Single-flight outbox, so no double posting; an expired session blocks, rather than silently dropping, queued work |

- **On production:** all three are ancestors of production `610d7bbd` (checked with `git merge-base --is-ancestor`).
- **Tests:** `backend/tests/test_mobile_ops_phase0.py` covers confirmed storage (`test_confirmed_storage_answers_with_what_was_stored`, `…_refuses_incomplete_evidence`, `test_top_level_media_is_not_mistaken_for_vdr_out`, lines 222–241). They were not run in this pass.

**H. Remaining known failure modes**

| # | Failure mode | Affects | Evidence |
|---|---|---|---|
| H-1 | **Web counter hand-over stores media fire-and-forget** (no `confirm_storage`). A failure is only logged, and the delivery can close without its photos | Web counter, not the app | `front_office_addons.py:322–330` (`_vdr_media_thread_target` → `_store_vdr_media_async`, error logged) |
| H-2 | **Web counter return close defers media storage to a background task** after the response. A failure is not shown to the user. The older `_store_return_vdr_async` swallows its exception and prints | Web counter returns | `front_office_addons.py:1550–1552`; `B/monolith.py:39892–39920` |
| H-3 | **Re-submission replaces the set.** `_store_vdr_media` deletes all rows for `source + docno` before inserting, so a second, smaller submission for the same document removes earlier photos. There is no history | All paths | `B/monolith.py:39768–39771` |
| H-4 | **The PDF photo count is probably under-reported.** The report selects `erp_vdr_media WHERE cntyp = <type> AND docno = <contract no>`. But rows store the DEL number or the inspection id in `docno`, and the contract number in `contract_no`. So a contract's photos are probably not matched, and the report may say "Photographs on file: 0" when photos exist. (Inferred from code; not confirmed with data.) | PDF report | `B/services/vdr_report.py:174–181` vs `B/monolith.py:39766–39797` |
| H-5 | **Movement (NCM) photos are never counted** in the PDF, because they live in `response_json`, not `erp_vdr_media` | PDF for movements | `fa_ncm_ecb.py` (response_json); `vdr_report.py:176` |
| H-6 | **No content hash or immutability** for VDR photos (unlike workshop receipts) | Evidentiary strength | `secure_attachment.py` docstring |
| H-7 | **Very large requests.** Photos travel as base64 in one JSON request. A body larger than the server or database allow would fail. On the app's confirmed path that is a **visible** error, not silent loss. Photo compression in `PhotoCaptureGrid` was not checked | App hand-over | — |
| H-8 | **Unknown build on devices.** Phones running an APK older than v1.5.1 (the Phase 0 fix) still send the old shape | Field devices | memory of prior builds; `android/app/build.gradle` shows v1.10.5 on production code |

---

## 2. O-5: "Does the inspection report show check-out and check-in side by side?"

### Verdict: **APPROVED WITH QUALIFICATION**

**What is side by side:** the PDF puts the check-out and check-in **readings** side by side in one document:
- odometer out and in
- distance travelled
- fuel out / in
- checked-out and checked-in times

**Not in the PDF:**
- photos
- the damage diagram
- a check-out checklist

The PDF needs a staff login, and nothing in the code sends it to the customer automatically.

| Question | Answer | Evidence |
|---|---|---|
| Both inspections in the same report? | **Readings, yes.** One PDF per contract or movement; `direction` changes only the title ("the readings for both ends are printed either way") | `B/routers/vdr_report.py:25–33`; `B/services/vdr_report.py:68` (`collect` fills `checkout` and `checkin`) |
| Visually side by side? | **Yes, for readings.** "Laid out as a comparison… check-out on the left of every pair, check-in on the right". Rows: Odometer out, Odometer in, Distance travelled, Fuel out / in; Checked out, Checked in | `B/services/vdr_report.py:216–222, 279–296` |
| Checklist? | **Check-in only.** One "CHECK-IN" column, from the driver's submitted checklist | `vdr_report.py:163–171, 319–330` |
| Photos shown? | **No.** Only "Photographs on file: n" and "Signatures on file: n", and n is likely under-reported (H-4, H-5) | `vdr_report.py:336–341` |
| Damage diagram shown? | **No.** Only "Damage marks recorded: n" (marks for the vehicle within the contract's out–in window) | `vdr_report.py:184–205, 338` |
| Generated for both check-out and check-in? | **Yes.** `?direction=OUT` or `IN`; same content, different title ("VEHICLE DAMAGE REPORT — CHECK-OUT/IN"). Fields with no reading print as "-", never borrowed from the other direction | `vdr_report.py:242–243`, module docstring lines 1–25 |
| Customer-facing or internal? | **Staff-only access.** `require_active_session`, mapped to front-office and movement menu keys (`B/monolith.py:26331`). The footer addresses the customer ("Keep it with your rental documents"), but **no customer delivery was found**: the VDR-OUT email sends only the inspection link (`B/services/vdr_out_email.py`). The app opens it from the vehicle screen (`APP/screens/fleet/VehicleScreen.tsx:74` via `inspectionReportPath`, `APP/api.ts:1134`) | as listed |
| Is there a view with photos and damage? | **Yes, internal, one direction at a time:** the web VDR report screen shows each photo with its damage marks | `frontend/src/app/transactions/front-office/vdr-report/page.tsx:215–363` |

---

## 3. Safe wording for the Vehicle Inspection page

These can be used as written. All describe what the software does, not that anyone uses it.

1. "Inspect a vehicle at handover, before the rental agreement opens, and again at return."
2. "Do the inspection at the counter, or send the driver a link that opens on their phone."
3. "Record the odometer, the fuel level, photographs, signatures and any damage marked on a vehicle diagram."
4. "New damage must have a remark before the inspection can be completed."
5. "In the app, photos and signatures are saved and confirmed before the handover is completed."
6. "Staff can review each inspection's photos, with the damage marked on them, in the inspection report screen."
7. "A PDF inspection report sets check-out and check-in readings side by side: odometer, distance travelled, fuel and times."
8. "Damage can become an accident case: police report, towing, repair, insurance claim, customer liability and settlement."

**Changes to `final-page-implementation-spec.md` §2.5 that this validation requires:**
- **Meta description.** The current one says "…produce a PDF report for every inspection", which implies the photos are in it. Replace with: "Record handover and return inspections with photos, signatures, fuel level and damage marked on a diagram, and compare check-out and check-in readings in a PDF." (160)
- **H2 "The inspection report".** Describe it as the readings comparison above, and point to the staff screen for photos.
- **FAQ "What does the inspection report contain?"** Readings side by side, the check-in checklist, and counts of photos, signatures and damage marks. Photos and marks are viewed in the report screen.

## 4. Claims that must not be made

- Photos or the damage diagram **in the PDF report**
- A **photo-by-photo before/after comparison**, or any **automatic** comparison of damage between check-out and check-in
- **Automatic or AI** damage detection, classification or assessment
- **Tamper-proof**, hashed, sealed or legally evidential photos
- The report being **sent to the customer**, or "the customer receives the report"
- Photos "stored in secure cloud storage" or as files (they are base64 in the database)
- The web counter hand-over "confirming" storage (only the app path does, H-1)
- "Works offline" or "syncs automatically when back online" (the outbox exists; not verified on a device)
- Any statement that inspections are **in use**, **proven** or **reliable in production**
- A photo count as proof of evidence (H-4)

## 5. Owner confirmations still required

| # | Question | Why |
|---|---|---|
| V-1 | Run one real hand-over and one real return with the current APK against production, then open both in the web VDR report screen and the PDF. Do the photos appear? What does the PDF count say? | Moves O-4 from "code" to "production verified"; confirms or rules out H-4. Needs a device and staff login |
| V-2 | Which APK version is on staff phones? | H-8: anything before v1.5.1 still loses hand-over photos |
| V-3 | Allow a one-off **read-only** count of `erp_vdr_media` rows by `source` since 2026-09-24? (Refused by the permission system today; only you can allow it) | Shows whether real inspections are storing photos since the fix |
| V-4 | Is the PDF ever given to customers, and how? | Decides whether the page may call it "the customer's copy" |
| V-5 | Development decision, not for the website: fix H-4 (match on `contract_no`), count NCM photos (H-5), and consider photos and the damage diagram in the PDF, and confirmed storage on the web counter (H-1, H-2) | Would let the page say more; until then it must not |

**Recommendation.** The Vehicle Inspection page can be written now using §3 and §4. Publish it after V-1, which is a ten-minute check on one device. Until then, the page must not say anything about the PDF beyond "check-out and check-in readings side by side".
