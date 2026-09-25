import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import EnterprisePage from "@/components/EnterprisePage";
import { breadcrumbJsonLd, pageOpenGraph, webPageJsonLd } from "@/lib/seo";
import {
  Building2,
  CalendarSync,
  CarFront,
  ClipboardCheck,
  FileCheck2,
  FileSignature,
  FileText,
  Layers,
  ReceiptText,
  RefreshCw,
  Users,
  Wrench,
} from "lucide-react";

// Moved from /fleet-leasing (301 in next.config.ts). Claims are limited to
// docs/seo/product-fact-validation.md (class A) and final-page-implementation-spec.md §2.3:
// no IFRS 16, residual values, credit scoring, public online quotes, automatic revenue
// recognition or sync to another ERP.
const PATH = "/solutions/fleet-leasing";
const TITLE = "Fleet & Vehicle Leasing Software | FleetArabia";
const DESCRIPTION =
  "Lease quotations with customer acceptance, conversion to agreements, recurring lease billing with VAT, replacement vehicles and workshop visits in one system.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: pageOpenGraph(PATH),
};

export default function FleetLeasingPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(PATH, TITLE, DESCRIPTION)} />
      <JsonLd data={breadcrumbJsonLd(PATH)} />
      <EnterprisePage
        eyebrow="Fleet Leasing Software"
        title="Fleet leasing software,"
        highlight="from quotation to financial reporting"
        description="FleetArabia takes a corporate lease from the first quotation to recurring billing: the customer accepts the quotation by link, the quotation becomes lease agreements, and the lease is billed, serviced and closed in the same cloud ERP as the rest of your fleet."
        secondaryCta={{ label: "See the Cloud ERP", href: "/platform" }}
        proofPoints={["Lease Lifecycle Management", "Finance Built In", "Multi-Company & Multi-Branch Support"]}
        visual={{
          kind: "flow",
          caption: "The lease lifecycle",
          steps: [
            { label: "Quotation", icon: FileSignature },
            { label: "Customer acceptance", icon: FileCheck2 },
            { label: "Lease agreements", icon: FileText },
            { label: "Recurring billing", icon: ReceiptText },
            { label: "Service & replacement", icon: Wrench },
            { label: "Return inspection", icon: ClipboardCheck },
          ],
          footer: "All connected through one platform",
        }}
        sections={[
          {
            eyebrow: "From Quotation to Agreement",
            title: "Quotations your customer accepts online",
            text: "A lease starts as a quotation for a fleet of vehicles. When the customer accepts it, the quotation is converted into the lease agreements themselves, so nothing is typed twice.",
            items: [
              { icon: FileSignature, title: "Lease quotations", text: "Quote a fleet composition for a corporate customer, vehicle type by vehicle type." },
              { icon: FileCheck2, title: "Customer acceptance by link", text: "Send the quotation; the customer accepts it through a link, and can attach their purchase order." },
              { icon: FileText, title: "Conversion to agreements", text: "An accepted quotation becomes draft agreements, which are finalized and posted." },
              { icon: Building2, title: "Vehicle acquisition approvals", text: "Where a lease needs new vehicles, the acquisition goes through its own approval workflow." },
            ],
          },
          {
            eyebrow: "Running the Lease",
            title: "Drivers, replacements and workshop visits",
            text: "During the lease, the agreement stays the reference for the vehicle, its drivers and anything that happens to it.",
            variant: "dark",
            items: [
              { icon: Users, title: "Agreement drivers", text: "Record which drivers are authorized on each lease agreement." },
              { icon: RefreshCw, title: "Replacement vehicles", text: "Allocate a replacement vehicle while the contract keeps running." },
              { icon: Wrench, title: "Workshop visits", text: "Book leased vehicles into the workshop for servicing and repairs.", href: "/solutions/workshop-management", linkLabel: "Workshop Management →" },
              { icon: ClipboardCheck, title: "Return inspection", text: "When a leased vehicle comes back, it is inspected with photos, signatures and damage marked on a diagram.", href: "/solutions/vehicle-inspection", linkLabel: "Vehicle Inspection →" },
            ],
          },
          {
            eyebrow: "Lease Billing",
            title: "Recurring billing from the agreement",
            text: "Lease billing runs from the agreements: preview what will be invoiced, then generate it. VAT is applied to every line.",
            columns: 2,
            items: [
              { icon: CalendarSync, title: "Recurring lease billing", text: "Preview and generate the recurring lease invoices for the period, with VAT, deposits and credit notes." },
              { icon: CarFront, title: "Excess mileage", text: "Set how often excess mileage is invoiced on each lease plan.", href: "/solutions/billing-finance", linkLabel: "Billing & Finance →" },
            ],
          },
          {
            eyebrow: "Corporate Customers",
            title: "Accounts that see their own invoices",
            text: "Corporate customers get the customer portal: their invoices, statements, contracts and service requests in one place.",
            variant: "dark",
            columns: 2,
            items: [
              { icon: Building2, title: "Corporate accounts", text: "Customer accounts and their contacts in the same system as their leases." },
              { icon: Users, title: "Customer portal", text: "The customer sees invoices, statements with ageing, contracts and requests, and raises service requests." },
            ],
          },
          {
            eyebrow: "Who Uses It",
            title: "The people a lease passes through",
            text: "Leasing touches sales, operations, approvers and finance, all on the same agreements.",
            items: [
              { icon: FileSignature, title: "Leasing coordinators", text: "Prepare quotations and fleet compositions and follow them to acceptance." },
              { icon: Building2, title: "Approvers", text: "Approve vehicle acquisitions a lease depends on." },
              { icon: Wrench, title: "Operations", text: "Manage agreement drivers, replacement vehicles, workshop visits and return inspections." },
              { icon: ReceiptText, title: "Finance", text: "Preview and generate lease billing and issue credit notes." },
            ],
          },
          {
            eyebrow: "What Changes Day to Day",
            title: "Fewer hand-offs between teams",
            text: "Each of these follows directly from how the leasing module is built.",
            variant: "dark",
            items: [
              { icon: FileCheck2, title: "The accepted quotation becomes the agreement", text: "Agreements are created from the quotation the customer accepted, so its terms are not typed again." },
              { icon: CalendarSync, title: "Billing comes from the agreements", text: "The recurring invoices are generated from the lease agreements, not from a separate list." },
              { icon: RefreshCw, title: "Replacements keep the contract running", text: "A replacement vehicle is allocated against the lease instead of opening a new contract." },
              { icon: Users, title: "Customers see their own invoices", text: "Corporate customers find invoices and statements in the customer portal." },
            ],
          },
          {
            eyebrow: "Related",
            title: "Where leasing connects",
            text: "Leasing shares vehicles, customers and finance with the rest of FleetArabia.",
            items: [
              { icon: ReceiptText, title: "Billing & Finance", text: "Ledger, UAE VAT and customer statements behind every lease invoice.", href: "/solutions/billing-finance", linkLabel: "Billing & Finance →" },
              { icon: CarFront, title: "Car rental", text: "Short and monthly rentals on the same fleet.", href: "/solutions/car-rental-software", linkLabel: "Car Rental Software →" },
              { icon: Layers, title: "The cloud ERP", text: "Finance, roles and approvals in the same system as your leases.", href: "/platform", linkLabel: "Cloud ERP →" },
            ],
          },
          {
            eyebrow: "FAQ",
            title: "Fleet leasing software: common questions",
            text: "Short answers about what the leasing module does.",
            variant: "dark",
            columns: 2,
            items: [
              { title: "Can the customer accept a quotation online?", text: "Yes. The quotation is sent with a link; the customer accepts it there and can attach their purchase order." },
              { title: "Can one quotation cover several vehicles?", text: "Yes. A quotation holds a fleet composition, and on acceptance it is converted into the lease agreements." },
              { title: "How is a replacement vehicle handled?", text: "A replacement vehicle is allocated against the lease, so the contract continues while the original vehicle is away." },
              { title: "How is excess mileage invoiced?", text: "Each lease plan says how often excess mileage is invoiced, and the lease billing picks it up." },
              { title: "Where do corporate customers see their invoices?", text: "In the customer portal, together with statements, contracts and their service requests." },
              { title: "Is it a separate system from our finance?", text: "No. Lease invoices, VAT and receivables are recorded in the same system as the contracts themselves." },
            ],
          },
        ]}
        finalCtaTitle="See the lease lifecycle end to end"
        finalCtaText="Replace spreadsheets with one system for lease quotations, agreements, billing, maintenance and finance, from customer acceptance to lease end."
      />
    </>
  );
}
