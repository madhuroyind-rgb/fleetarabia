import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";

export const metadata: Metadata = {
  title: "Fleet Leasing Software | FleetArabia",
  description:
    "Enterprise software for corporate and government fleet leasing — contracts, billing, maintenance, renewals and financial reporting on one connected ERP.",
  alternates: { canonical: "/fleet-leasing" },
};

export default function FleetLeasingPage() {
  return (
    <EnterprisePage
      eyebrow="Enterprise Leasing Platform"
      title="Enterprise Software for"
      highlight="Corporate & Government Fleet Leasing"
      description="Digitize your entire leasing operation with FleetArabia's enterprise leasing platform. Manage the complete lease lifecycle — from quotations and contracts to billing, maintenance, renewals, vehicle replacement and financial reporting — all connected through one intelligent ERP. Whether you manage hundreds or thousands of leased vehicles, FleetArabia provides the automation, visibility and control needed to scale your business with confidence."
      primaryCta={{ label: "Request a Demo", href: "/contact#demo-form" }}
      secondaryCta={{ label: "Explore Leasing", href: "/solutions" }}
      proofPoints={["Lease Lifecycle Management", "ERP & Finance Integration", "Multi-Company & Multi-Branch Support"]}
      visualItems={["Leasing", "Fleet Ops", "Billing", "Finance"]}
      visualTopLabel="Enterprise Leasing Platform"
      visualBottomLabel="Leasing • Fleet Ops • Billing • Finance • Analytics"
      sections={[
        {
          eyebrow: "Enterprise Leasing Capabilities",
          title: "Everything required to manage the complete lease lifecycle",
          text: "Every capability a leasing operation needs, connected on one platform.",
          items: [
            { title: "Contract Lifecycle Management", text: "Create quotations, generate lease agreements, manage approvals, amendments, extensions, renewals and contract closures from a centralized workspace." },
            { title: "Fleet Lifecycle Management", text: "Monitor vehicle allocation, delivery, returns, replacement vehicles, maintenance history, warranty tracking and asset utilization throughout the lease period." },
            { title: "Automated Billing & Revenue Management", text: "Generate recurring invoices, installment schedules, consolidated customer billing, taxes, deposits, credit notes and revenue recognition automatically." },
            { title: "Corporate Customer Management", text: "Manage corporate accounts, multiple branches, cost centers, driver assignments, billing contacts, payment terms and service-level agreements." },
            { title: "Maintenance & Service Management", text: "Schedule preventive maintenance, repairs, inspections, recalls, tyre replacement, warranties and workshop activities without disrupting lease operations." },
            { title: "Vehicle Replacement Management", text: "Allocate temporary or replacement vehicles while maintaining contract continuity, billing accuracy and complete audit history." },
            { title: "Driver & Asset Assignment", text: "Track drivers, assigned vehicles, licenses, violations, fuel cards, accessories and operational responsibilities throughout the lease." },
            { title: "Financial & ERP Integration", text: "Automatically synchronize contracts, invoices, payments, depreciation, taxes, journals and receivables with your ERP and accounting systems." },
            { title: "Business Intelligence & Analytics", text: "Monitor fleet utilization, contract profitability, lease expirations, maintenance costs, revenue trends, KPIs and executive dashboards in real time." },
          ],
        },
        {
          eyebrow: "Why FleetArabia for Leasing",
          title: "Built for enterprise mobility operations",
          text: "FleetArabia connects leasing, operations, finance, workshops and customer service on a single platform — eliminating duplicate data entry and providing complete visibility across your business.",
          variant: "dark",
          items: [
            { title: "Lease Lifecycle", text: "End-to-end lease lifecycle management." },
            { title: "Automated Billing", text: "Automated billing and collections." },
            { title: "Corporate Fleet", text: "Corporate fleet management." },
            { title: "Multi-Branch Ready", text: "Multi-company and multi-branch operations." },
            { title: "Fleet Visibility", text: "Real-time fleet visibility." },
            { title: "Preventive Maintenance", text: "Preventive maintenance automation." },
            { title: "Driver Assignment", text: "Driver and vehicle assignment." },
            { title: "ERP Integration", text: "ERP and financial integration." },
            { title: "GPS & Geo-Fencing", text: "GPS tracking and geo-fencing." },
            { title: "AI-Powered Analytics", text: "AI-powered dashboards and analytics." },
            { title: "Enterprise Security", text: "Enterprise security and audit trail." },
            { title: "Mobile Applications", text: "Mobile applications for field operations." },
          ],
        },
      ]}
      finalCtaTitle="Transform your leasing business with one intelligent platform"
      finalCtaText="Replace spreadsheets and disconnected systems with an enterprise leasing platform that automates contracts, operations, maintenance, billing and reporting. From customer onboarding to vehicle retirement, FleetArabia delivers complete visibility, intelligent automation and seamless ERP integration — helping leasing companies reduce operational costs, improve fleet utilization and deliver exceptional customer experiences."
    />
  );
}
