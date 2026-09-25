import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import EnterprisePage from "@/components/EnterprisePage";
import { breadcrumbJsonLd, pageOpenGraph, webPageJsonLd } from "@/lib/seo";
import {
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  Gauge,
  KeyRound,
  Layers,
  LayoutGrid,
  Package,
  ReceiptText,
  Smartphone,
  Truck,
  UserCog,
  Wrench,
} from "lucide-react";

// Describes the workflow that exists in code (docs/seo/product-fact-validation.md: Workshop,
// class A code, NOT production-verified). NOT claimed: production use or adoption, work for
// outside customers (G4), work between group companies (O-6 open), the customer approval link
// (O-8 open), automatic customer notifications, prediction or diagnostics, warranty or recall
// management, parts ordering from suppliers, or workshop finance configuration details.
const PATH = "/solutions/workshop-management";
const TITLE = "Workshop Management Software for Fleets | FleetArabia";
const DESCRIPTION =
  "Service bookings, vehicle receipt, inspection, estimates and approvals, job cards, bays, technicians, parts, labor, quality checks and release in one workflow.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: pageOpenGraph(PATH),
};

export default function WorkshopManagementPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(PATH, TITLE, DESCRIPTION)} />
      <JsonLd data={breadcrumbJsonLd(PATH)} />
      <EnterprisePage
        eyebrow="Workshop Management"
        title="Workshop management from service booking"
        highlight="to vehicle release"
        description="For fleets that service their own vehicles: one workflow from the service booking to the vehicle's release, with receipt, inspection, estimate, approval, job card, bays, technicians, parts, labor and a quality check with road test in between."
        secondaryCta={{ label: "See the Cloud ERP", href: "/platform" }}
        proofPoints={["Booking to Release", "Parts & Labor Costing", "Quality Check & Road Test"]}
        visual={{
          kind: "flow",
          caption: "One workshop visit",
          steps: [
            { label: "Service booking", icon: CalendarCheck },
            { label: "Receipt & inspection", icon: ClipboardCheck },
            { label: "Estimate & approval", icon: FileCheck2 },
            { label: "Job card", icon: ClipboardList },
            { label: "Quality check & road test", icon: Gauge },
            { label: "Release & handover", icon: KeyRound },
          ],
          footer: "Each step opens from the one before it",
        }}
        sections={[
          {
            eyebrow: "Booking and Receipt",
            title: "From the booking to the vehicle in the workshop",
            text: "A visit starts with a service booking. The vehicle can be collected by a driver, and it is received with photographs before any work is planned.",
            items: [
              { icon: CalendarCheck, title: "Service bookings", text: "Book a vehicle into an available slot, then confirm it, mark the arrival and complete the visit." },
              { icon: Truck, title: "Vehicle collection", text: "Request a collection and assign the driver who brings the vehicle in." },
              { icon: ClipboardCheck, title: "Vehicle receipt", text: "Receive the vehicle with photographs, so its condition on arrival is recorded." },
              { icon: ClipboardList, title: "Inspection templates", text: "Inspect against a checklist template that the workshop publishes, versions and retires." },
            ],
          },
          {
            eyebrow: "Estimates and Approvals",
            title: "Nothing starts before it is approved",
            text: "Work is estimated before it is done. Estimates can be revised, and approval is given section by section, by whoever pays for that part of the work.",
            variant: "dark",
            columns: 2,
            items: [
              { icon: FileCheck2, title: "Estimates with revisions", text: "Each revision of an estimate is kept, so the approved version is always clear." },
              { icon: FileCheck2, title: "Additional work", text: "Work found once the job has started is added as additional work and approved before it is done." },
            ],
          },
          {
            eyebrow: "Job Cards",
            title: "Bays, technicians, parts and labor",
            text: "An approved estimate becomes a job card. The job card carries the bay, the technicians and every part and hour of labor booked against it.",
            items: [
              { icon: LayoutGrid, title: "Bays", text: "Assign the job to a bay and release it when the bay is free; see every bay on the bay board." },
              { icon: UserCog, title: "Technicians", text: "Assign technicians to the job and release them when their part is done." },
              { icon: Package, title: "Parts", text: "Issue parts to the job and return the ones that were not used." },
              { icon: Wrench, title: "Labor and costing", text: "Record labor lines, reverse a line booked in error, and see the job's costing." },
            ],
          },
          {
            eyebrow: "Quality and Release",
            title: "A quality check before the vehicle leaves",
            text: "Finished work is checked against quality checkpoints before release. A road test only passes when the tester explicitly confirms it, and failed work goes back for rework.",
            variant: "dark",
            items: [
              { icon: ClipboardCheck, title: "Quality checkpoints", text: "Check the work against the workshop's quality checkpoints." },
              { icon: Gauge, title: "Road test", text: "Record the road test; a pass needs the tester's explicit confirmation." },
              { icon: KeyRound, title: "Release and handover", text: "Mark the vehicle ready and hand it over with evidence. Exceptions need an approval." },
              { icon: ReceiptText, title: "Workshop invoice", text: "The visit is invoiced from the parts and labor recorded on the job.", href: "/solutions/billing-finance", linkLabel: "Billing & Finance →" },
            ],
          },
          {
            eyebrow: "On a Phone",
            title: "Technicians work from the Android app",
            text: "The workshop screens are also in the Android app: gate receipt, inspection, job card, work, quality check, release, the queue and the vehicle's workshop history.",
            columns: 2,
            items: [
              { icon: Smartphone, title: "In the workshop, on a phone", text: "Technicians and supervisors record their part of the job where the vehicle is." },
              { icon: ClipboardCheck, title: "Vehicle inspection", text: "Handover and return inspections feed repairs into the workshop.", href: "/solutions/vehicle-inspection", linkLabel: "Vehicle Inspection →" },
            ],
          },
          {
            eyebrow: "Who Uses It",
            title: "The people in a workshop visit",
            text: "Each role picks up the visit where the previous one left it.",
            items: [
              { icon: CalendarCheck, title: "Service advisors", text: "Take bookings, receive vehicles and prepare estimates for approval." },
              { icon: LayoutGrid, title: "Workshop supervisors", text: "Assign bays and technicians from the bay board." },
              { icon: Wrench, title: "Technicians", text: "Record parts and labor on the job card, from a desk or the Android app." },
              { icon: Gauge, title: "Quality inspectors", text: "Check finished work, record the road test and release the vehicle." },
            ],
          },
          {
            eyebrow: "Related",
            title: "Where the workshop connects",
            text: "The workshop shares vehicles and finance with the rest of FleetArabia.",
            items: [
              { icon: Truck, title: "Fleet management", text: "The vehicle register and its history.", href: "/solutions/fleet-management", linkLabel: "Fleet Management →" },
              { icon: ReceiptText, title: "Billing & Finance", text: "Workshop invoices and UAE VAT.", href: "/solutions/billing-finance", linkLabel: "Billing & Finance →" },
              { icon: Layers, title: "The cloud ERP", text: "Workshop, contracts and finance in one system.", href: "/platform", linkLabel: "Cloud ERP →" },
            ],
          },
          {
            eyebrow: "FAQ",
            title: "Workshop management: common questions",
            text: "Short answers about what the workshop module does.",
            variant: "dark",
            columns: 2,
            items: [
              { title: "Can estimates be approved in parts?", text: "Yes. Approval is given section by section, by whoever pays for that part of the work." },
              { title: "How is a road test recorded?", text: "As part of the quality check. A road-test pass needs the tester's explicit confirmation." },
              { title: "Can technicians work from a phone?", text: "Yes. The Android app has the gate receipt, inspection, job card, work, quality check and release screens." },
              { title: "How is a workshop visit invoiced?", text: "From the parts and labor recorded on the job card." },
              { title: "Can work be added after the job has started?", text: "Yes, as additional work, which is approved before it is done." },
              { title: "Does it forecast breakdowns automatically?", text: "No. It schedules and records the work people decide on; a person makes every decision." },
            ],
          },
        ]}
        finalCtaTitle="See a workshop visit from booking to release"
        finalCtaText="Tell us how your workshop runs today, and we'll walk you through one visit end to end."
      />
    </>
  );
}
