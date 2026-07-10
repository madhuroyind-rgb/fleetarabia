import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";

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
      title="Enterprise Solutions for"
      highlight="Every Mobility Business"
      description="From vehicle rentals to enterprise fleet management, FleetArabia delivers an integrated suite of applications designed to automate operations, improve customer experiences and maximize fleet profitability. Whether you run a single branch or a multi-country enterprise, our solutions work together on one platform — eliminating silos and giving you complete visibility across your business."
      primaryCta={{ label: "Schedule a Demo", href: "/contact#demo-form" }}
      secondaryCta={{ label: "Explore Platform", href: "/platform" }}
      proofPoints={["Unified Platform", "AI-Powered Analytics", "Multi-Country Ready"]}
      visualItems={["Rental", "Leasing", "Analytics", "ERP"]}
      sections={[
        {
          eyebrow: "Core Solutions",
          title: "Everything you need to run a modern mobility business",
          text: "Choose individual applications or deploy the complete FleetArabia platform. Every solution is fully integrated, sharing the same data, workflows and analytics to create one intelligent mobility ecosystem.",
          items: [
            { tag: "🚗", title: "Car Rental Management", text: "Manage reservations, quotations, agreements, vehicle allocation, pricing, invoicing, extensions, returns, replacements, toll and traffic fine charges, and customer billing." },
            { tag: "🚙", title: "Leasing Management", text: "Streamline personal and corporate leasing with contract lifecycle management, installment billing, renewals, asset tracking, maintenance scheduling and end-of-lease processing." },
            { tag: "🚖", title: "Chauffeur & Limousine", text: "Manage chauffeur assignments, trip scheduling, dispatch, bookings, customer requests, vehicle allocation, GPS tracking and service quality." },
            { tag: "🚌", title: "Bus Transportation", text: "Plan routes, assign drivers and vehicles, manage employee or school transportation, optimize schedules and monitor fleet performance in real time." },
            { tag: "🔧", title: "Workshop Management", text: "Digitize maintenance operations with preventive servicing, repair orders, inspections, spare parts, technician assignments, warranty management and service history." },
            { tag: "📋", title: "Vehicle Damage & Claims (VDR)", text: "Record vehicle inspections, capture photos, assess damages, estimate repair costs, manage insurance claims and maintain a complete damage history." },
            { tag: "💳", title: "Billing & Revenue Management", text: "Automate invoicing, recurring billing, collections, tax calculations, payments, credit notes, customer statements and ERP financial integration." },
            { tag: "⛽", title: "Fuel Management", text: "Monitor fuel consumption, fuel card transactions, mileage, efficiency trends and operating costs to improve fleet profitability." },
            { tag: "👨‍✈️", title: "Driver Management", text: "Manage driver profiles, licenses, certifications, violations, training, attendance, assignments and compliance from one central system." },
            { tag: "📍", title: "GPS Tracking & Geo-Fencing", text: "Track vehicles in real time, define geo-fenced zones, receive movement alerts, monitor route compliance and improve fleet utilization." },
            { tag: "📊", title: "Business Intelligence & Analytics", text: "Transform operational data into actionable insights with real-time dashboards, executive KPIs, fleet utilization reports, revenue analysis and AI-powered performance insights." },
            { tag: "🤝", title: "CRM & Customer Experience", text: "Manage leads, customer profiles, quotations, contracts, communications, service requests, digital agreements and customer feedback throughout the entire lifecycle." },
            { tag: "🔗", title: "ERP Integration Platform", text: "Connect with accounting systems, payment gateways, telematics, GPS providers, HR, banking, government and regulatory systems, and third-party applications through secure APIs." },
          ],
        },
        {
          eyebrow: "Why Choose FleetArabia",
          title: "Built for enterprise mobility operations",
          text: "One platform, eight reasons operations, finance and IT teams trust it to run the business.",
          variant: "dark",
          items: [
            { title: "Unified Platform", text: "Unified platform for all mobility operations." },
            { title: "Enterprise Security", text: "Enterprise-grade security and compliance." },
            { title: "AI-Powered Analytics", text: "AI-powered analytics and reporting." },
            { title: "Open Integration", text: "Open API and seamless integrations." },
            { title: "Mobile Applications", text: "Mobile applications for field operations." },
            { title: "Multi-Country Ready", text: "Multi-company, multi-branch, multi-country support." },
            { title: "Real-Time Insights", text: "Real-time dashboards and executive insights." },
            { title: "Cloud-Native Platform", text: "Cloud-native architecture with enterprise scalability." },
          ],
        },
      ]}
    />
  );
}
