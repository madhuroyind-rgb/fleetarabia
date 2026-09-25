import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import EnterprisePage from "@/components/EnterprisePage";
import { breadcrumbJsonLd, pageOpenGraph, webPageJsonLd } from "@/lib/seo";
import {
  Bus,
  CalendarDays,
  ClipboardList,
  FileSignature,
  FileText,
  GraduationCap,
  IdCard,
  Inbox,
  LayoutGrid,
  Layers,
  ReceiptText,
  Route,
  Smartphone,
  UserCheck,
} from "lucide-react";

// Priority 2 (final-page-implementation-spec.md §2.8): capability language only, no availability
// or go-live claim. Everything here is class A code in docs/seo/product-fact-validation.md.
// NOT claimed: limousine as a product, airport transfers, flight tracking, a passenger or parent
// app, staff transport as a feature, route optimisation, live trip tracking or GPS, student
// tracking or RFID attendance.
const PATH = "/solutions/chauffeur-transport";
const TITLE = "Chauffeur & Bus Transport Software | FleetArabia";
const DESCRIPTION =
  "Transport inquiries, quotations, bookings, dispatch, trips, driver attendance and school-run schedules, billed per trip, hour, day or kilometer, in one system.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: pageOpenGraph(PATH),
};

export default function ChauffeurTransportPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(PATH, TITLE, DESCRIPTION)} />
      <JsonLd data={breadcrumbJsonLd(PATH)} />
      <EnterprisePage
        eyebrow="Chauffeur & Transport"
        title="Chauffeur and bus transport,"
        highlight="from inquiry to billed trip"
        description="The Transport module takes a job from the first inquiry to the invoice: quotation, booking, dispatch to a driver and vehicle, the trip itself, and billing per trip, hour, day, kilometer or passenger. School transport has its own students, terms and route schedules."
        secondaryCta={{ label: "See the Cloud ERP", href: "/platform" }}
        proofPoints={["Inquiry to Invoice", "Dispatch Board", "School Transport"]}
        visual={{
          kind: "flow",
          caption: "One transport job",
          steps: [
            { label: "Inquiry", icon: Inbox },
            { label: "Quotation", icon: FileSignature },
            { label: "Booking", icon: CalendarDays },
            { label: "Dispatch", icon: LayoutGrid },
            { label: "Trip", icon: Route },
            { label: "Invoice", icon: ReceiptText },
          ],
          footer: "A quotation can become a trip or a contract",
        }}
        sections={[
          {
            eyebrow: "From Inquiry to Trip",
            title: "Inquiries, quotations and bookings",
            text: "A transport job starts as an inquiry, which can be created from an email. The quotation that answers it can be converted into a single trip or into a contract for repeated work.",
            items: [
              { icon: Inbox, title: "Inquiries", text: "Record transport inquiries, including by reading them from an email." },
              { icon: FileSignature, title: "Quotations", text: "Quote the job, then convert the quotation into a trip or a contract." },
              { icon: CalendarDays, title: "Bookings", text: "Book trips against a contract or a one-off job." },
              { icon: LayoutGrid, title: "Dispatch board", text: "See the day's trips and assign drivers from the dispatch board." },
            ],
          },
          {
            eyebrow: "Vehicles and Drivers",
            title: "The right vehicle and driver for every trip",
            text: "Vehicles are assigned with a check for clashes, and drivers see and update their trips in the Android app.",
            variant: "dark",
            items: [
              { icon: Bus, title: "Vehicle assignment", text: "Assign vehicles to trips, with a check that the vehicle is not already booked at that time." },
              { icon: IdCard, title: "Driver master", text: "Keep the transport drivers and their details.", href: "/solutions/fleet-management#drivers", linkLabel: "Driver records →" },
              { icon: UserCheck, title: "Driver attendance", text: "Record driver attendance for each day." },
              { icon: Smartphone, title: "Trips in the driver app", text: "Drivers see their trips in the Android app and move each trip to its next step." },
            ],
          },
          {
            eyebrow: "School Transport",
            title: "School runs planned around the school year",
            text: "School transport has its own records: the students, the school terms and holidays, and the route schedules that trips are generated from.",
            items: [
              { icon: GraduationCap, title: "Students", text: "Each student with their pickup and drop-off points." },
              { icon: CalendarDays, title: "Terms and holidays", text: "School terms and holidays, so trips are not generated on days off." },
              { icon: Route, title: "Route schedules", text: "Route schedules with pickup times, from the route master." },
              { icon: ClipboardList, title: "Generated trips", text: "Generate the trips from the schedules, with a vehicle clash check." },
            ],
          },
          {
            eyebrow: "Contracts and Billing",
            title: "Billed the way the contract says",
            text: "Transport contracts carry their billing basis. Preview what will be invoiced, generate the invoice, and record the payment against it.",
            variant: "dark",
            columns: 2,
            items: [
              { icon: FileText, title: "Billing bases", text: "Per trip, hour, day, kilometer or passenger, or a monthly or fixed amount." },
              { icon: ReceiptText, title: "Invoices and payments", text: "Preview and generate contract invoices, and record payments against them.", href: "/solutions/billing-finance", linkLabel: "Billing & Finance →" },
            ],
          },
          {
            eyebrow: "Who Uses It",
            title: "The people behind a transport job",
            text: "Each role works on the same job, from inquiry to invoice.",
            items: [
              { icon: Inbox, title: "Transport coordinators", text: "Record inquiries, send quotations and take bookings." },
              { icon: LayoutGrid, title: "Dispatchers", text: "Assign drivers and vehicles to trips from the dispatch board." },
              { icon: Smartphone, title: "Drivers", text: "See their trips in the Android app and move each trip to its next step." },
              { icon: ReceiptText, title: "Billing staff", text: "Preview and generate contract invoices and record payments." },
            ],
          },
          {
            eyebrow: "What Changes Day to Day",
            title: "Jobs that do not fall between teams",
            text: "Each of these follows directly from how the Transport module is built.",
            variant: "dark",
            items: [
              { icon: FileSignature, title: "The quotation becomes the work", text: "An accepted quotation is converted into the trip or the contract." },
              { icon: Bus, title: "No vehicle booked twice", text: "Vehicle assignment checks for a clash before it is saved." },
              { icon: CalendarDays, title: "School holidays are respected", text: "School trips are not generated on holidays or outside the term." },
              { icon: FileText, title: "Contracts bill as agreed", text: "Each contract is invoiced on its own billing basis." },
            ],
          },
          {
            eyebrow: "Related",
            title: "Where transport connects",
            text: "Transport shares its vehicles, drivers and finance with the rest of FleetArabia.",
            items: [
              { icon: IdCard, title: "Drivers", text: "Driver records, documents and expiry dates.", href: "/solutions/fleet-management#drivers", linkLabel: "Fleet Management →" },
              { icon: ReceiptText, title: "Billing & Finance", text: "Invoices, UAE VAT and statements.", href: "/solutions/billing-finance", linkLabel: "Billing & Finance →" },
              { icon: Layers, title: "The cloud ERP", text: "Transport, contracts and finance in one system.", href: "/platform", linkLabel: "Cloud ERP →" },
            ],
          },
          {
            eyebrow: "FAQ",
            title: "Chauffeur and transport: common questions",
            text: "Short answers about what the Transport module does.",
            variant: "dark",
            columns: 2,
            items: [
              { title: "Can a quotation become a contract?", text: "Yes. A quotation can be converted into a single trip or into a contract for repeated work." },
              { title: "How are school runs scheduled around terms and holidays?", text: "Trips are generated from route schedules, skipping the holidays set for the school term." },
              { title: "How do drivers see their trips?", text: "In the Android app, where they also move each trip to its next step." },
              { title: "Which billing bases are supported?", text: "Per trip, hour, day, kilometer or passenger, or a monthly or fixed amount." },
            ],
          },
        ]}
        finalCtaTitle="See a transport job from inquiry to invoice"
        finalCtaText="Tell us how chauffeur or bus work is booked and billed today, and we'll walk you through the Transport module."
      />
    </>
  );
}
