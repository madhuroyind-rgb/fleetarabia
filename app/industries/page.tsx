import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageOpenGraph } from "@/lib/seo";
import EnterprisePage from "@/components/EnterprisePage";
import { Briefcase, Building2, Bus, Car, CarTaxiFront, KeyRound, Landmark, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries | FleetArabia",
  description:
    "Industry-specific software for rental, leasing, chauffeur, bus and school transport, corporate fleets, workshops and government fleets.",
  alternates: { canonical: "/industries" },
  openGraph: pageOpenGraph("/industries"),
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("/industries")} />
    <EnterprisePage
      eyebrow="Industries"
      title="Eight kinds of fleet business,"
      highlight="one platform"
      description="Whether you operate vehicle rentals, long-term leasing, chauffeur services, bus and school transport, corporate fleets, workshops or government mobility programs, FleetArabia delivers industry-specific solutions on one unified enterprise platform. Designed for organizations of every size — from growing regional businesses to large enterprise fleets — our platform automates operations, streamlines workflows and connects every department through a single source of truth."
      primaryCta={{ label: "Talk to an Industry Expert", href: "/contact#demo-form" }}
      secondaryCta={{ label: "Explore Industry Solutions", href: "/solutions" }}
      proofPoints={["Multi-Industry Platform", "Built for the UAE", "Enterprise Scalability"]}
      visual={{
        kind: "tiles",
        caption: "Industries we serve",
        items: [
          { label: "Vehicle Rental", icon: Car },
          { label: "Leasing", icon: KeyRound },
          { label: "Chauffeur", icon: CarTaxiFront },
          { label: "Bus & School Transport", icon: Bus },
          { label: "Corporate Fleets", icon: Briefcase },
          { label: "Workshops", icon: Wrench },
          { label: "Government & Public Sector", icon: Landmark },
          { label: "Mobility Groups", icon: Building2 },
        ],
      }}
      sections={[
        {
          eyebrow: "Industries We Serve",
          title: "Purpose-built solutions for every mobility business",
          text: "FleetArabia combines industry expertise with enterprise technology to help organizations optimize operations, improve fleet utilization and deliver exceptional customer experiences.",
          items: [
            { icon: Car, title: "Vehicle Rental Companies", text: "Manage reservations, quotations, agreements, fleet allocation, pricing, billing, vehicle returns, replacements, toll and traffic fine charges, and customer service from one integrated platform." },
            { icon: KeyRound, title: "Leasing Companies", text: "Digitize the complete lease lifecycle with contract management, corporate billing, renewals, vehicle replacement, maintenance planning and financial integration." },
            { icon: CarTaxiFront, title: "Chauffeur Services", text: "Take transport inquiries, send quotations, book and dispatch trips to drivers, and bill per trip, hour, day or kilometer." },
            { icon: Bus, title: "Bus & School Transport", text: "Plan routes and school-run schedules, generate trips, assign drivers and vehicles, record driver attendance and bill transport contracts." },
            { icon: Briefcase, title: "Corporate Fleet Management", text: "Run company-owned fleets: vehicle register and movements, driver records and compliance, workshop jobs, fuel-card statement imports and reports by company and branch." },
            { icon: Wrench, title: "Workshops", text: "Run the workshop from service booking and vehicle receipt to inspection, estimate and approval, job card, parts and labor, quality check and road test, release and invoice." },
            { icon: Landmark, title: "Government & Public Sector", text: "Role-based access, approvals and a full audit trail for public-sector fleets." },
            { icon: Building2, title: "Enterprise Mobility Groups", text: "Operate multiple companies, brands, branches and business units on a single platform with centralized finance, standardized processes and enterprise reporting." },
          ],
        },
        {
          eyebrow: "Why FleetArabia",
          title: "Built for fleet businesses in the UAE",
          text: "FleetArabia handles the UAE-specific parts of running a fleet: Salik, traffic fines, parking charges, UAE VAT and AED billing.",
          variant: "dark",
          items: [
            { title: "Multi-Company & Multi-Branch Operations", text: "Manage multiple companies, branches, locations and business units from one centralized platform." },
            { title: "Finance in the Same System", text: "Ledger, VAT, payables and procurement run in the same system as your fleet operations." },
            { title: "Fleet Dashboards", text: "See vehicles, drivers, contracts, workshop jobs and fuel spend on dashboards that read the same records your teams work in." },
            { title: "Business Intelligence & Analytics", text: "Transform operational data into executive insights with interactive dashboards, KPI monitoring and profitability reports." },
            { title: "Enterprise Security & Compliance", text: "Protect your business with role-based access, audit trails, digital approvals and enterprise-grade security controls." },
            { title: "UAE VAT and Salik", text: "UAE VAT on every invoice line, and Salik and fine charges matched to the right contract." },
          ],
        },
      ]}
      finalCtaTitle="Tell us which kind of fleet you run"
      finalCtaText="FleetArabia puts vehicles, contracts, drivers, workshop, billing and finance in one system. Tell us how your fleet runs today."
    />
    </>
  );
}
