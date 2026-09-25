import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageOpenGraph } from "@/lib/seo";
import EnterprisePage from "@/components/EnterprisePage";
import { MODULE_ICONS } from "@/lib/modules";

export const metadata: Metadata = {
  title: "Fleet, Rental & Leasing Software Modules | FleetArabia",
  description:
    "Rental, leasing, transport, workshop, billing and finance modules on one cloud ERP. Start with one module or run them together on the same data.",
  alternates: { canonical: "/solutions" },
  openGraph: pageOpenGraph("/solutions"),
};

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("/solutions")} />
    <EnterprisePage
      eyebrow="Solution Portfolio"
      title="Twelve modules."
      highlight="Start with one, or run them all."
      description="From vehicle rentals to enterprise fleet management, FleetArabia delivers an integrated suite of applications designed to automate operations, improve customer experiences and maximize fleet profitability. Whether you run a single branch or several companies, our solutions work together on one platform — eliminating silos and giving you complete visibility across your business."
      primaryCta={{ label: "Book a Demo", href: "/contact#demo-form" }}
      secondaryCta={{ label: "Explore Platform", href: "/platform" }}
      proofPoints={["Unified Platform", "Finance Built In", "Multi-Company"]}
      visual={{
        kind: "groups",
        caption: "Twelve modules, one platform",
        groups: [
          {
            title: "Operations",
            items: [
              { label: "Car Rental", icon: MODULE_ICONS["Car Rental Management"] },
              { label: "Leasing", icon: MODULE_ICONS["Leasing Management"] },
              { label: "Chauffeur", icon: MODULE_ICONS["Chauffeur & Transport"] },
              { label: "Bus Transport", icon: MODULE_ICONS["Bus Transportation"] },
            ],
          },
          {
            title: "Fleet",
            items: [
              { label: "Workshop", icon: MODULE_ICONS["Workshop Management"] },
              { label: "Damage & Claims", icon: MODULE_ICONS["Vehicle Damage & Claims (VDR)"] },
              { label: "Fuel", icon: MODULE_ICONS["Fuel Management"] },
              { label: "Drivers", icon: MODULE_ICONS["Driver Management"] },
            ],
          },
          {
            title: "Business",
            items: [
              { label: "Billing", icon: MODULE_ICONS["Billing & Revenue Management"] },
              { label: "Analytics", icon: MODULE_ICONS["Business Intelligence & Analytics"] },
              { label: "CRM", icon: MODULE_ICONS["CRM & Customer Experience"] },
              { label: "Finance & Integrations", icon: MODULE_ICONS["Finance & Integrations"] },
            ],
          },
        ],
      }}
      finalCtaTitle="Not sure which modules you need? Ask us."
      sections={[
        {
          eyebrow: "Core Solutions",
          anchors: true,
          title: "Everything you need to run a modern mobility business",
          text: "Choose individual applications or deploy the complete FleetArabia platform. Every solution is fully integrated, sharing the same data, workflows and analytics, so every module works from the same records.",
          items: [
            { icon: MODULE_ICONS["Car Rental Management"], title: "Car Rental Management", href: "/solutions/car-rental-software", linkLabel: "Car Rental Software →", text: "Manage reservations, quotations, agreements, vehicle allocation, pricing, invoicing, extensions, returns, replacements, toll and traffic fine charges, and customer billing." },
            { icon: MODULE_ICONS["Leasing Management"], title: "Leasing Management", href: "/solutions/fleet-leasing", linkLabel: "Fleet Leasing →", text: "Streamline personal and corporate leasing with contract lifecycle management, installment billing, renewals, asset tracking, maintenance scheduling and end-of-lease processing." },
            { icon: MODULE_ICONS["Chauffeur & Transport"], title: "Chauffeur & Transport", href: "/solutions/chauffeur-transport", linkLabel: "Chauffeur & Transport →", text: "Take transport inquiries, send quotations, book and dispatch trips to drivers, and bill per trip, hour, day or kilometer." },
            { icon: MODULE_ICONS["Bus Transportation"], title: "Bus Transportation", href: "/solutions/chauffeur-transport", linkLabel: "Chauffeur & Transport →", text: "Plan routes and school-run schedules, generate trips, assign drivers and vehicles, record driver attendance and bill transport contracts." },
            { icon: MODULE_ICONS["Workshop Management"], title: "Workshop Management", href: "/solutions/workshop-management", linkLabel: "Workshop Management →", text: "Run the workshop from service booking and vehicle receipt to inspection, estimate and approval, job card, parts and labor, quality check and road test, release and invoice." },
            { icon: MODULE_ICONS["Vehicle Damage & Claims (VDR)"], title: "Vehicle Damage & Claims (VDR)", href: "/solutions/vehicle-inspection", linkLabel: "Vehicle Inspection →", text: "Record vehicle inspections, capture photos, assess damages, estimate repair costs, manage insurance claims and maintain a complete damage history." },
            { icon: MODULE_ICONS["Billing & Revenue Management"], title: "Billing & Revenue Management", href: "/solutions/billing-finance", linkLabel: "Billing & Finance →", text: "Generate rental, lease, toll and transport invoices in bulk, apply UAE VAT, issue credit notes and customer statements, and record receipts." },
            { icon: MODULE_ICONS["Fuel Management"], title: "Fuel Management", href: "/solutions/fleet-management#fuel", linkLabel: "Fuel in Fleet Management →", text: "Import ENOC and ADNOC fuel-card statements and review fuel spend by vehicle, card and station." },
            { icon: MODULE_ICONS["Driver Management"], title: "Driver Management", href: "/solutions/fleet-management#drivers", linkLabel: "Drivers in Fleet Management →", text: "Driver profiles, licenses and documents with expiry tracking, assignments, incidents, attendance and compliance checks." },
            { icon: MODULE_ICONS["Business Intelligence & Analytics"], title: "Business Intelligence & Analytics", text: "Transform operational data into actionable insights with real-time dashboards, executive KPIs, fleet utilization reports and revenue analysis across branches and companies." },
            { icon: MODULE_ICONS["CRM & Customer Experience"], title: "CRM & Customer Experience", text: "Manage leads, customer profiles, quotations, contracts, communications, service requests, digital agreements and customer feedback throughout the entire lifecycle." },
            { icon: MODULE_ICONS["Finance & Integrations"], title: "Finance & Integrations", href: "/solutions/billing-finance", linkLabel: "Billing & Finance →", text: "Ledger, journals, trial balance and UAE VAT, plus imports for Salik, fines, parking and fuel-card statements." },
          ],
        },
        {
          eyebrow: "Why Choose FleetArabia",
          title: "One platform instead of many tools",
          text: "What you get when every module runs on the same platform.",
          variant: "dark",
          compact: true,
          items: [
            { title: "One Platform for All Mobility Operations" },
            { title: "Role-Based Security & Audit Trails" },
            { title: "Dashboards & Reporting" },
            { title: "Data Imports & APIs" },
            { title: "Android App for Field Staff" },
            { title: "Multi-Company, Multi-Branch" },
            { title: "Real-Time Executive Dashboards" },
            { title: "Cloud-Hosted" },
          ],
        },
      ]}
    />
    </>
  );
}
