import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import EnterprisePage from "@/components/EnterprisePage";
import { breadcrumbJsonLd, pageOpenGraph, webPageJsonLd } from "@/lib/seo";
import {
  Camera,
  CarFront,
  ClipboardCheck,
  FileText,
  Fuel,
  Gauge,
  Layers,
  PenLine,
  ShieldAlert,
  Smartphone,
  Truck,
  Wrench,
} from "lucide-react";

// Wording is limited to docs/seo/vehicle-inspection-fact-validation.md §3 (O-4 and O-5, both
// approved with qualification). NOT claimed: photos or the damage diagram inside the PDF,
// before/after photo comparison, automatic damage detection, tamper-proof evidence, the
// customer receiving the PDF, or offline operation.
const PATH = "/solutions/vehicle-inspection";
const TITLE = "Vehicle Inspection Software for Rental Fleets | FleetArabia";
const DESCRIPTION =
  "Record handover and return inspections with photos, signatures, fuel level and damage marked on a diagram, and compare check-out and check-in readings in a PDF.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: pageOpenGraph(PATH),
};

export default function VehicleInspectionPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(PATH, TITLE, DESCRIPTION)} />
      <JsonLd data={breadcrumbJsonLd(PATH)} />
      <EnterprisePage
        eyebrow="Vehicle Inspection"
        title="Vehicle inspections at handover and return,"
        highlight="recorded against the vehicle"
        description="Inspect a vehicle at handover, before the rental agreement opens, and again at return. Record the odometer, the fuel level, photographs, signatures and any damage marked on a vehicle diagram, at the counter or through a link sent to the driver's phone."
        secondaryCta={{ label: "See the Cloud ERP", href: "/platform" }}
        proofPoints={["Handover & Return", "Photos & Signatures", "Damage on a Diagram"]}
        visual={{
          kind: "flow",
          caption: "What an inspection records",
          steps: [
            { label: "Vehicle", icon: CarFront },
            { label: "Odometer", icon: Gauge },
            { label: "Fuel level", icon: Fuel },
            { label: "Photographs", icon: Camera },
            { label: "Damage on the diagram", icon: ShieldAlert },
            { label: "Signatures", icon: PenLine },
          ],
          footer: "Saved against the agreement or movement",
        }}
        sections={[
          {
            eyebrow: "When Inspections Happen",
            title: "Before the agreement opens, and at return",
            text: "The handover inspection is recorded before the rental agreement starts, so the rental begins from a documented condition. The return inspection records the readings and any new damage when the vehicle comes back.",
            items: [
              { icon: ClipboardCheck, title: "At handover", text: "Recorded before the agreement opens, for rentals, leases and replacement vehicles." },
              { icon: ClipboardCheck, title: "At return", text: "Recorded when the vehicle comes back, against the same agreement." },
              { icon: Truck, title: "Collections and movements", text: "Vehicle collections and non-revenue movements have their own inspections too." },
              { icon: Smartphone, title: "Counter or driver's phone", text: "Do the inspection at the counter, or send the driver a link that opens on their phone." },
            ],
          },
          {
            eyebrow: "What Is Recorded",
            title: "Readings, photographs, signatures and damage",
            text: "In the app, each inspection follows the same steps, one question at a time, so nothing required is skipped.",
            variant: "dark",
            items: [
              { icon: Gauge, title: "Odometer and fuel", text: "The odometer reading and the fuel level, in eighths of a tank." },
              { icon: Camera, title: "Photographs", text: "The required photographs, such as the odometer and fuel gauge, plus the sides, interior and any damage." },
              { icon: ShieldAlert, title: "Damage on a diagram", text: "Damage is marked on a diagram of the vehicle. New damage must have a remark before the inspection can be completed." },
              { icon: PenLine, title: "Signatures", text: "The customer's and the driver's signatures are captured on the screen." },
            ],
          },
          {
            eyebrow: "Saving and Reviewing",
            title: "Where inspections are kept and reviewed",
            text: "In the app, photos and signatures are saved and confirmed before the handover is completed. Afterwards, staff can review each inspection's photos, with the damage marked on them, in the inspection report screen.",
            columns: 2,
            items: [
              { icon: FileText, title: "The inspection report screen", text: "Staff open an inspection to see its photographs, signatures and the damage marked for each side of the vehicle." },
              { icon: FileText, title: "The PDF inspection report", text: "A PDF sets the check-out and check-in readings side by side: odometer, distance travelled, fuel level and times, with the check-in checklist." },
            ],
          },
          {
            id: "damage",
            eyebrow: "Damage and Accidents",
            title: "From a damage mark to a settled case",
            text: "Damage recorded at an inspection can become an accident case, which follows the vehicle through to settlement.",
            variant: "dark",
            items: [
              { icon: ShieldAlert, title: "Accident cases", text: "Open a case with the police report and towing details." },
              { icon: Wrench, title: "Repair", text: "Send the vehicle for repair and record the repair on the case.", href: "/solutions/workshop-management", linkLabel: "Workshop Management →" },
              { icon: FileText, title: "Insurance claim", text: "Record the insurance claim against the case." },
              { icon: FileText, title: "Customer liability and settlement", text: "Record what the customer owes, with a suggested excess where one is set up, then settle and close the case." },
            ],
          },
          {
            eyebrow: "Who Uses It",
            title: "Who records and reviews inspections",
            text: "The same inspection is done by whoever has the vehicle in front of them.",
            items: [
              { icon: CarFront, title: "Counter staff", text: "Inspect vehicles at handover and return at the branch." },
              { icon: Smartphone, title: "Drivers", text: "Complete an inspection on their phone from the link they are sent." },
              { icon: FileText, title: "Supervisors", text: "Review photographs, signatures and damage in the inspection report screen." },
              { icon: ShieldAlert, title: "Accident handlers", text: "Turn recorded damage into an accident case and follow it to settlement." },
            ],
          },
          {
            eyebrow: "Related",
            title: "Where inspections connect",
            text: "Inspections are part of the rental, the lease and the workshop, not a separate tool.",
            items: [
              { icon: CarFront, title: "Car rental", text: "Handover and return inspections are steps of every rental agreement.", href: "/solutions/car-rental-software", linkLabel: "Car Rental Software →" },
              { icon: FileText, title: "Billing", text: "Invoices, credit notes and UAE VAT for the agreement the inspection belongs to.", href: "/solutions/billing-finance", linkLabel: "Billing & Finance →" },
              { icon: Layers, title: "The cloud ERP", text: "Inspections, contracts, workshop and finance in one system.", href: "/platform", linkLabel: "Cloud ERP →" },
            ],
          },
          {
            eyebrow: "FAQ",
            title: "Vehicle inspection: common questions",
            text: "Short answers about what the inspection module does.",
            variant: "dark",
            columns: 2,
            items: [
              { title: "Can the driver complete the inspection on their own phone?", text: "Yes. The driver is sent a link that opens in the phone's browser, and completes the inspection there." },
              { title: "Are photographs kept with the agreement?", text: "Yes. Photographs and signatures are saved against the agreement or movement they were taken for, and staff can review them in the inspection report screen." },
              { title: "What does the PDF inspection report contain?", text: "Check-out and check-in readings side by side (odometer, distance travelled, fuel and times), the check-in checklist, and how many photographs, signatures and damage marks are on file." },
              { title: "How does damage become an accident case?", text: "Damage marked at an inspection can be opened as an accident case, which records the repair, any insurance claim and what the customer owes." },
              { title: "Is damage detected automatically?", text: "No. People record damage by marking it on the vehicle diagram and adding a remark." },
              { title: "Does it work for replacement vehicles?", text: "Yes. A replacement vehicle has its own handover inspection, like any other handover." },
            ],
          },
        ]}
        finalCtaTitle="See an inspection from handover to return"
        finalCtaText="Tell us how vehicles are handed over and returned today, and we'll walk you through an inspection end to end."
      />
    </>
  );
}
