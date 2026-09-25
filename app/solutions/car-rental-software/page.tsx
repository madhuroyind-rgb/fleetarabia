import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import EnterprisePage from "@/components/EnterprisePage";
import { breadcrumbJsonLd, pageOpenGraph, webPageJsonLd } from "@/lib/seo";
import {
  CalendarCheck,
  CarFront,
  ClipboardCheck,
  FileText,
  KeyRound,
  Landmark,
  ReceiptText,
  RefreshCw,
  ScanLine,
  SquareParking,
  Store,
  Truck,
  Wrench,
  Layers,
} from "lucide-react";

// Claims on this page are limited to docs/seo/product-fact-validation.md (class A) and
// docs/seo/final-page-implementation-spec.md §2.2. No online booking, card payments or live
// Salik/police connections; nothing that says the counter screens are in use today.
const PATH = "/solutions/car-rental-software";
const TITLE = "Car Rental Software for Rent-a-Car Companies | FleetArabia";
const DESCRIPTION =
  "Reservations, rental agreements, handover and return inspections, replacements, Salik and fine charges, invoicing and UAE VAT for your rent-a-car business.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: pageOpenGraph(PATH),
};

export default function CarRentalSoftwarePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(PATH, TITLE, DESCRIPTION)} />
      <JsonLd data={breadcrumbJsonLd(PATH)} />
      <EnterprisePage
        eyebrow="Car Rental Software"
        title="Car rental software,"
        highlight="from reservation to closed agreement"
        description="FleetArabia runs a rental from the first reservation to the final invoice: rental agreements, handover and return inspections, replacement vehicles, Salik and traffic-fine charges, and UAE VAT on every invoice line, in one cloud ERP."
        secondaryCta={{ label: "See the Cloud ERP", href: "/platform" }}
        proofPoints={["Daily & Monthly Rentals", "Salik & Fines Matched", "UAE VAT Invoicing"]}
        visual={{
          kind: "flow",
          caption: "One rental, one record",
          steps: [
            { label: "Reservation", icon: CalendarCheck },
            { label: "Rental agreement", icon: FileText },
            { label: "Handover inspection", icon: ClipboardCheck },
            { label: "On hire", icon: CarFront },
            { label: "Return inspection", icon: ClipboardCheck },
            { label: "Invoice with VAT", icon: ReceiptText },
          ],
          footer: "Every step reads and writes the same agreement",
        }}
        sections={[
          {
            eyebrow: "Rental Agreements",
            title: "Agreements that follow the vehicle",
            text: "A rental agreement is the record everything else hangs off: the vehicle, the customer, the inspections, the charges and the invoice. Counter staff open it from a reservation and keep it current until the vehicle comes back.",
            items: [
              { icon: CalendarCheck, title: "Reservations", text: "Record reservations, and open the rental agreement when the customer arrives." },
              { icon: FileText, title: "Daily and monthly agreements", text: "Short rentals and monthly rental agreements are both handled as agreements against a vehicle and a customer." },
              { icon: RefreshCw, title: "Extensions and replacements", text: "Extend an open agreement, or swap in a replacement vehicle without closing the contract." },
              { icon: KeyRound, title: "Available vehicles and accessories", text: "See which vehicles are available at the branch and add accessories to the agreement." },
            ],
          },
          {
            eyebrow: "At the Counter",
            title: "What counter staff work with",
            text: "The front office is built around the branch: its customers, its vehicles and its shift.",
            variant: "dark",
            items: [
              { icon: ScanLine, title: "Customer onboarding", text: "Scan the customer's ID and driving license to fill in their details. The scan reads the document; a person confirms the values before they are saved." },
              { icon: Store, title: "Branch shifts and day book", text: "Each shift has its own log, and the day book summarizes what the branch did." },
              { icon: ReceiptText, title: "Payment recording", text: "Record how the customer paid against the agreement, using the payment methods set up in the system." },
              { icon: Truck, title: "Vehicle collection", text: "When a vehicle is collected from the customer, the collection is closed with its own inspection." },
            ],
          },
          {
            eyebrow: "Inspections",
            title: "Handover and return inspections",
            text: "The vehicle is inspected before the agreement opens and again when it comes back: odometer, fuel level, photographs, signatures and damage marked on a vehicle diagram. The inspection can be done at the counter or by a link sent to the driver's phone.",
            columns: 2,
            items: [
              { icon: ClipboardCheck, title: "Before the agreement opens", text: "The handover inspection is recorded first, so the agreement starts from a documented vehicle condition." },
              { icon: ClipboardCheck, title: "At return", text: "The return inspection records the readings and any new damage, which must carry a remark.", href: "/solutions/vehicle-inspection", linkLabel: "Vehicle Inspection →" },
            ],
          },
          {
            eyebrow: "Salik, Fines and Parking",
            title: "Charges matched to the agreement on hire",
            text: "Toll crossings, traffic fines and parking charges arrive after the fact. FleetArabia imports them and works out which agreement had the vehicle at that moment.",
            items: [
              { icon: ReceiptText, title: "Salik tolls", text: "Import Salik toll files. Each crossing is matched to the agreement that had the vehicle at the time, then invoiced.", href: "/integrations#salik", linkLabel: "Salik import →" },
              { icon: Landmark, title: "Traffic fines", text: "Import fines from a file or a data feed, find who had the vehicle, then allocate, verify, dispute and notify by email.", href: "/integrations#fines", linkLabel: "Traffic-fine import →" },
              { icon: SquareParking, title: "Parking charges", text: "Import parking charge files and match each charge to the vehicle and the agreement it was on.", href: "/integrations#parking", linkLabel: "Parking import →" },
            ],
          },
          {
            eyebrow: "Invoicing",
            title: "Invoices raised from the agreement",
            text: "Because charges live on the agreement, the invoice is generated from it rather than typed again. UAE VAT is applied to every invoice line.",
            variant: "dark",
            columns: 2,
            items: [
              { icon: ReceiptText, title: "Bulk and summary invoices", text: "Generate rental invoices in bulk, or a summary invoice for a corporate customer." },
              { icon: FileText, title: "Credit notes and statements", text: "Issue credit notes and give customers statements of their account.", href: "/solutions/billing-finance", linkLabel: "Billing & Finance →" },
            ],
          },
          {
            eyebrow: "Who Uses It",
            title: "The people a rental passes through",
            text: "Each role works in its own screens, on the same agreement.",
            items: [
              { icon: Store, title: "Counter staff", text: "Open agreements, onboard customers, do handover and return inspections, and record payments." },
              { icon: ClipboardCheck, title: "Branch supervisors", text: "Close shifts and check the branch's day book." },
              { icon: Landmark, title: "Back-office staff", text: "Import Salik, fine and parking files and resolve the charges that could not be matched." },
              { icon: ReceiptText, title: "Finance", text: "Generate invoices, issue credit notes and send customer statements." },
            ],
          },
          {
            eyebrow: "Related",
            title: "Where car rental connects",
            text: "Car rental shares its vehicles, customers and finance with the rest of FleetArabia.",
            items: [
              { icon: KeyRound, title: "Long-term rentals and leases", text: "Corporate leases with quotations, acceptance and recurring billing.", href: "/solutions/fleet-leasing", linkLabel: "Fleet Leasing →" },
              { icon: Wrench, title: "Workshop", text: "Damage found at return can go to the workshop for repair.", href: "/solutions/workshop-management", linkLabel: "Workshop Management →" },
              { icon: Layers, title: "The cloud ERP", text: "Finance, VAT, roles and approvals in the same system as the counter.", href: "/platform", linkLabel: "Cloud ERP →" },
            ],
          },
          {
            eyebrow: "FAQ",
            title: "Car rental software: common questions",
            text: "Short answers about what the car rental module does.",
            variant: "dark",
            columns: 2,
            items: [
              { title: "Can one system handle daily and monthly rentals?", text: "Yes. Short rentals and monthly rental agreements are both agreements against a vehicle and a customer." },
              { title: "How is a replacement vehicle handled on an open agreement?", text: "The replacement is recorded on the same agreement, with its own handover inspection, so the contract stays open." },
              { title: "How are Salik crossings and fines linked to the right agreement?", text: "They are imported and matched to the agreement that had the vehicle at the time of the crossing or offence. Anything that cannot be matched waits in an exception queue." },
              { title: "Can customers be onboarded by scanning their ID?", text: "Yes. The ID and driving license are scanned to fill in the customer's details, and a person confirms the values." },
              { title: "Does it work across several branches?", text: "Yes. Vehicles, shifts and the day book are kept per branch, within one company or several." },
              { title: "How is it hosted?", text: "FleetArabia is hosted in the cloud and used through a web browser." },
            ],
          },
        ]}
        finalCtaTitle="See a rental from reservation to invoice"
        finalCtaText="Tell us how your counters work today, and we'll walk you through a rental agreement end to end."
      />
    </>
  );
}
