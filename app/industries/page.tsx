import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";

export const metadata: Metadata = {
  title: "Industries | FleetArabia",
  description:
    "Industry-specific mobility solutions for rental, leasing, limousine, bus transportation, corporate fleets, workshops and government mobility programs.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <EnterprisePage
      eyebrow="Industries"
      title="Enterprise Mobility Solutions for"
      highlight="Every Fleet Business"
      description="Whether you operate vehicle rentals, long-term leasing, limousine services, bus transportation, corporate fleets, workshops or government mobility programs, FleetArabia delivers industry-specific solutions on one unified enterprise platform. Designed for organizations of every size — from growing regional businesses to large enterprise fleets — our platform automates operations, streamlines workflows and connects every department through a single source of truth."
      primaryCta={{ label: "Talk to an Industry Expert", href: "/contact#demo-form" }}
      secondaryCta={{ label: "Explore Industry Solutions", href: "/solutions" }}
      proofPoints={["Multi-Industry Platform", "Middle East Ready", "Enterprise Scalability"]}
      visualItems={["Rental", "Leasing", "Transport", "Fleet"]}
      sections={[
        {
          eyebrow: "Industries We Serve",
          title: "Purpose-built solutions for every mobility business",
          text: "FleetArabia combines industry expertise with enterprise technology to help organizations optimize operations, improve fleet utilization and deliver exceptional customer experiences.",
          items: [
            { tag: "🚗", title: "Vehicle Rental Companies", text: "Manage reservations, quotations, agreements, fleet allocation, pricing, billing, vehicle returns, replacements, toll and traffic fine charges, and customer service from one integrated platform." },
            { tag: "🚙", title: "Leasing Companies", text: "Digitize the complete lease lifecycle with contract management, corporate billing, renewals, vehicle replacement, maintenance planning and financial integration." },
            { tag: "🚖", title: "Chauffeur & Limousine Services", text: "Optimize chauffeur scheduling, dispatch operations, bookings, trip management, customer service, GPS tracking and executive transportation." },
            { tag: "🚌", title: "Bus & Staff Transportation", text: "Plan routes, assign vehicles and drivers, monitor operations, manage school and employee transport, and improve fleet utilization with real-time visibility." },
            { tag: "🚘", title: "Corporate Fleet Management", text: "Control company-owned fleets through vehicle allocation, driver management, maintenance scheduling, fuel monitoring, GPS tracking and cost center reporting." },
            { tag: "🔧", title: "Workshop & Service Centers", text: "Manage inspections, preventive maintenance, repair orders, spare parts, technician productivity, warranties and complete vehicle service history." },
            { tag: "🏛", title: "Government & Public Sector Mobility", text: "Support secure, auditable and compliant fleet operations for municipalities, ministries, utilities, airports, healthcare and other public-sector organizations." },
            { tag: "🌍", title: "Enterprise Mobility Groups", text: "Operate multiple companies, brands, branches and business units on a single platform with centralized finance, standardized processes and enterprise reporting." },
          ],
        },
        {
          eyebrow: "Why Organizations Choose FleetArabia",
          title: "Built for enterprise mobility across the Middle East",
          text: "FleetArabia is designed to support the operational and regulatory requirements of mobility businesses throughout the GCC and Middle East, providing the flexibility to scale as your organization grows.",
          variant: "dark",
          items: [
            { title: "Multi-Company & Multi-Branch Operations", text: "Manage multiple companies, branches, locations and business units from one centralized platform." },
            { title: "Enterprise Financial Integration", text: "Connect operations with ERP, accounting, procurement, payroll, banking and payment gateways for complete financial visibility." },
            { title: "Real-Time Fleet Visibility", text: "Track vehicles, drivers, contracts, maintenance, fuel, GPS and operational performance through live dashboards." },
            { title: "Business Intelligence & Analytics", text: "Transform operational data into executive insights with interactive dashboards, KPI monitoring, profitability analysis and AI-powered reporting." },
            { title: "Enterprise Security & Compliance", text: "Protect your business with role-based access, audit trails, digital approvals and enterprise-grade security controls." },
            { title: "Regional Expertise", text: "Purpose-built for the Middle East with support for VAT, multilingual operations, local business practices and regional compliance requirements." },
          ],
        },
      ]}
      finalCtaTitle="Power every mobility business with one intelligent platform"
      finalCtaText="FleetArabia brings together people, vehicles, operations, finance and customer service into one connected ecosystem. Replace disconnected systems with intelligent automation, real-time analytics and seamless ERP integration to improve efficiency, reduce costs and accelerate business growth. Transform your mobility operations with FleetArabia."
    />
  );
}
