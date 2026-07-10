import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";

export const metadata: Metadata = {
  title: "Industries | FleetArabia",
  description:
    "Built for the operational reality of rental, leasing, limousine, bus transportation, workshop and fleet businesses across the Middle East.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <EnterprisePage
      eyebrow="Industries"
      title="Mobility Solutions for"
      highlight="Every Fleet Business"
      description="Rental, leasing, limousine, bus transportation, corporate fleet, workshop and government mobility operations — each with different workflows, and each supported directly rather than squeezed into a generic template."
      primaryCta={{ label: "Talk to Industry Expert", href: "/contact" }}
      secondaryCta={{ label: "View Solutions", href: "/solutions" }}
      proofPoints={["Multi-Industry", "Middle East Ready", "Enterprise Scale"]}
      visualItems={["Rental", "Leasing", "Transport", "Fleet"]}
      sections={[
        {
          eyebrow: "Industries We Serve",
          title: "Purpose-built for mobility and fleet businesses",
          text: "Our solutions support the operational realities of high-volume fleet, transport and rental organizations.",
          items: [
            { title: "Car Rental Companies", text: "Manage reservations, contracts, fleet availability, billing and customer service." },
            { title: "Leasing Companies", text: "Control lease contracts, renewals, corporate billing and vehicle lifecycle." },
            { title: "Limousine Operators", text: "Manage chauffeur allocation, dispatching, trip schedules and service delivery." },
            { title: "Bus Transport Operators", text: "Plan routes, assign vehicles, manage drivers and control transportation operations." },
            { title: "Corporate Fleets", text: "Track vehicle usage, maintenance, cost centers and operational accountability." },
            { title: "Workshops", text: "Control job cards, maintenance schedules, technicians, labor and spare parts." },
            { title: "Government Mobility", text: "Support controlled, auditable and scalable fleet operations for public-sector mobility." },
            { title: "Enterprise Mobility Groups", text: "Unify multiple business units, branches and subsidiaries under one platform." },
          ],
        },
        {
          eyebrow: "Regional Fit",
          title: "Designed for Middle East operating models",
          text: "Multi-branch, multi-company operations that need to report up to one finance system, not run as separate silos.",
          variant: "teal",
          items: [
            { title: "Multi-Branch Control", text: "Operate across cities, locations and customer counters." },
            { title: "Corporate Billing", text: "Support B2B customers, long-term contracts and monthly billing cycles." },
            { title: "ERP Ecosystem", text: "Connect operations to finance, procurement, assets and reporting systems." },
            { title: "Operational Support", text: "Implementation, training and customer success for regional mobility businesses." },
          ],
        },
      ]}
    />
  );
}