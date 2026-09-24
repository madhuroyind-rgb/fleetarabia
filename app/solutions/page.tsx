import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";
import { MODULE_ICONS } from "@/lib/modules";

export const metadata: Metadata = {
  title: "Solutions | FleetArabia",
  description:
    "FleetArabia delivers an integrated suite of mobility applications — rental, leasing, workshop, billing, GPS tracking, analytics, CRM and ERP integration — on one connected platform.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <EnterprisePage
      eyebrow="Solution Portfolio"
      title="Thirteen modules."
      highlight="Start with one, or run them all."
      description="From vehicle rentals to enterprise fleet management, FleetArabia delivers an integrated suite of applications designed to automate operations, improve customer experiences and maximize fleet profitability. Whether you run a single branch or a multi-country enterprise, our solutions work together on one platform — eliminating silos and giving you complete visibility across your business."
      primaryCta={{ label: "Book a Demo", href: "/contact#demo-form" }}
      secondaryCta={{ label: "Explore Platform", href: "/platform" }}
      proofPoints={["Unified Platform", "AI-Powered Analytics", "Multi-Country Ready"]}
      visual={{
        kind: "groups",
        caption: "Thirteen modules, one platform",
        groups: [
          {
            title: "Operations",
            items: [
              { label: "Car Rental", icon: MODULE_ICONS["Car Rental Management"] },
              { label: "Leasing", icon: MODULE_ICONS["Leasing Management"] },
              { label: "Chauffeur & Limo", icon: MODULE_ICONS["Chauffeur & Limousine"] },
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
              { label: "GPS Tracking", icon: MODULE_ICONS["GPS Tracking & Geo-Fencing"] },
            ],
          },
          {
            title: "Business",
            items: [
              { label: "Billing", icon: MODULE_ICONS["Billing & Revenue Management"] },
              { label: "Analytics", icon: MODULE_ICONS["Business Intelligence & Analytics"] },
              { label: "CRM", icon: MODULE_ICONS["CRM & Customer Experience"] },
              { label: "ERP Integration", icon: MODULE_ICONS["ERP Integration Platform"] },
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
          text: "Choose individual applications or deploy the complete FleetArabia platform. Every solution is fully integrated, sharing the same data, workflows and analytics to create one intelligent mobility ecosystem.",
          items: [
            { icon: MODULE_ICONS["Car Rental Management"], title: "Car Rental Management", text: "Manage reservations, quotations, agreements, vehicle allocation, pricing, invoicing, extensions, returns, replacements, toll and traffic fine charges, and customer billing." },
            { icon: MODULE_ICONS["Leasing Management"], title: "Leasing Management", text: "Streamline personal and corporate leasing with contract lifecycle management, installment billing, renewals, asset tracking, maintenance scheduling and end-of-lease processing." },
            { icon: MODULE_ICONS["Chauffeur & Limousine"], title: "Chauffeur & Limousine", text: "Manage chauffeur assignments, trip scheduling, dispatch, bookings, customer requests, vehicle allocation, GPS tracking and service quality." },
            { icon: MODULE_ICONS["Bus Transportation"], title: "Bus Transportation", text: "Plan routes, assign drivers and vehicles, manage employee or school transportation, optimize schedules and monitor fleet performance in real time." },
            { icon: MODULE_ICONS["Workshop Management"], title: "Workshop Management", text: "Digitize maintenance operations with preventive servicing, repair orders, inspections, spare parts, technician assignments, warranty management and service history." },
            { icon: MODULE_ICONS["Vehicle Damage & Claims (VDR)"], title: "Vehicle Damage & Claims (VDR)", text: "Record vehicle inspections, capture photos, assess damages, estimate repair costs, manage insurance claims and maintain a complete damage history." },
            { icon: MODULE_ICONS["Billing & Revenue Management"], title: "Billing & Revenue Management", text: "Automate invoicing, recurring billing, collections, tax calculations, payments, credit notes, customer statements and ERP financial integration." },
            { icon: MODULE_ICONS["Fuel Management"], title: "Fuel Management", text: "Monitor fuel consumption, fuel card transactions, mileage, efficiency trends and operating costs to improve fleet profitability." },
            { icon: MODULE_ICONS["Driver Management"], title: "Driver Management", text: "Manage driver profiles, licenses, certifications, violations, training, attendance, assignments and compliance from one central system." },
            { icon: MODULE_ICONS["GPS Tracking & Geo-Fencing"], title: "GPS Tracking & Geo-Fencing", text: "Track vehicles in real time, define geo-fenced zones, receive movement alerts, monitor route compliance and improve fleet utilization." },
            { icon: MODULE_ICONS["Business Intelligence & Analytics"], title: "Business Intelligence & Analytics", text: "Transform operational data into actionable insights with real-time dashboards, executive KPIs, fleet utilization reports, revenue analysis and AI-powered performance insights." },
            { icon: MODULE_ICONS["CRM & Customer Experience"], title: "CRM & Customer Experience", text: "Manage leads, customer profiles, quotations, contracts, communications, service requests, digital agreements and customer feedback throughout the entire lifecycle." },
            { icon: MODULE_ICONS["ERP Integration Platform"], title: "ERP Integration Platform", text: "Connect with accounting systems, payment gateways, telematics, GPS providers, HR, banking, government and regulatory systems, and third-party applications through secure APIs." },
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
            { title: "AI-Powered Analytics & Reporting" },
            { title: "Open APIs & Integrations" },
            { title: "Mobile Apps for Field Operations" },
            { title: "Multi-Company, Multi-Branch, Multi-Country" },
            { title: "Real-Time Executive Dashboards" },
            { title: "Cloud or On-Premises Deployment" },
          ],
        },
      ]}
    />
  );
}
