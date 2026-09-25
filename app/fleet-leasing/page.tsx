import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageOpenGraph } from "@/lib/seo";
import EnterprisePage from "@/components/EnterprisePage";
import { ChartColumn, FileSignature, ReceiptText, RefreshCw, Repeat, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Fleet Leasing Software | FleetArabia",
  description:
    "Enterprise software for corporate and government fleet leasing — contracts, billing, maintenance, renewals and financial reporting on one connected ERP.",
  alternates: { canonical: "/fleet-leasing" },
  openGraph: pageOpenGraph("/fleet-leasing"),
};

export default function FleetLeasingPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("/fleet-leasing")} />
    <EnterprisePage
      eyebrow="Enterprise Leasing Platform"
      title="Fleet leasing software,"
      highlight="from quotation to financial reporting"
      description="Digitize your entire leasing operation with FleetArabia's enterprise leasing platform. Manage the complete lease lifecycle — from quotations and contracts to billing, maintenance, renewals, vehicle replacement and financial reporting — all in one cloud ERP."
      primaryCta={{ label: "Book a Demo", href: "/contact#demo-form" }}
      secondaryCta={{ label: "Explore Leasing", href: "/solutions" }}
      proofPoints={["Lease Lifecycle Management", "Finance Built In", "Multi-Company & Multi-Branch Support"]}
      visual={{
        kind: "flow",
        caption: "The lease lifecycle",
        steps: [
          { label: "Quotation & Contract", icon: FileSignature },
          { label: "Recurring Billing", icon: ReceiptText },
          { label: "Maintenance", icon: Wrench },
          { label: "Vehicle Replacement", icon: Repeat },
          { label: "Renewal", icon: RefreshCw },
          { label: "Financial Reporting", icon: ChartColumn },
        ],
        footer: "All connected through one platform",
      }}
      sections={[
        {
          eyebrow: "Enterprise Leasing Capabilities",
          title: "Everything required to manage the complete lease lifecycle",
          text: "Every capability a leasing operation needs, connected on one platform.",
          items: [
            { title: "Contract Lifecycle Management", text: "Create quotations, generate lease agreements, manage approvals, amendments, extensions, renewals and contract closures from a centralized workspace." },
            { title: "Fleet Lifecycle Management", text: "Monitor vehicle allocation, delivery, returns, replacement vehicles, maintenance history and asset utilization throughout the lease period." },
            { title: "Automated Billing & Revenue Management", text: "Generate recurring lease invoices, consolidated customer billing, VAT, deposits and credit notes." },
            { title: "Corporate Customer Management", text: "Manage corporate accounts, multiple branches, cost centers, driver assignments, billing contacts, payment terms and service-level agreements." },
            { title: "Maintenance & Service Management", text: "Book leased vehicles into the workshop for servicing and repairs, with replacement vehicles keeping the contract running." },
            { title: "Vehicle Replacement Management", text: "Allocate temporary or replacement vehicles while maintaining contract continuity, billing accuracy and complete audit history." },
            { title: "Driver & Asset Assignment", text: "Track drivers, assigned vehicles, licenses, accessories and responsibilities throughout the lease." },
            { title: "Finance in the Same System", text: "Lease contracts, invoices, VAT and receivables are recorded in the same system as the contracts themselves." },
            { title: "Business Intelligence & Analytics", text: "Monitor fleet utilization, contract profitability, lease expirations, maintenance costs, revenue trends, KPIs and executive dashboards in real time." },
          ],
        },
        {
          eyebrow: "Why FleetArabia for Leasing",
          title: "Leasing, operations and finance on one platform",
          text: "FleetArabia connects leasing, operations, finance, workshops and customer service on a single platform — eliminating duplicate data entry and providing complete visibility across your business.",
          variant: "dark",
          compact: true,
          items: [
            { title: "End-to-End Lease Lifecycle" },
            { title: "Automated Billing & Collections" },
            { title: "Corporate Fleet Management" },
            { title: "Multi-Company & Multi-Branch" },
            { title: "Fleet Status Dashboards" },
            { title: "Workshop Bookings" },
            { title: "Driver & Vehicle Assignment" },
            { title: "Finance Built In" },
            { title: "Dashboards & Reporting" },
            { title: "Security & Audit Trail" },
            { title: "Android App for Field Staff" },
          ],
        },
      ]}
      finalCtaTitle="See the lease lifecycle end to end"
      finalCtaText="Replace spreadsheets with one system for lease quotations, agreements, billing, maintenance and finance, from customer acceptance to lease end."
    />
    </>
  );
}
