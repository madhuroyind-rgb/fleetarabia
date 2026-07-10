import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";

export const metadata: Metadata = {
  title: "Fleet Leasing Software | FleetArabia",
  description:
    "Software for long-term fleet leasing operations — contracts, corporate billing, renewals and vehicle lifecycle control, connected to your ERP.",
  alternates: { canonical: "/fleet-leasing" },
};

export default function FleetLeasingPage() {
  return (
    <EnterprisePage
      eyebrow="Long-Term Leasing"
      title="Software for Fleet Leasing"
      highlight="Operators"
      description="Run long-term leasing operations for corporate and government fleets on one system — contracts, corporate billing, renewals and vehicle lifecycle control, connected to your ERP."
      primaryCta={{ label: "Talk to Us", href: "/contact" }}
      secondaryCta={{ label: "Explore Solutions", href: "/solutions" }}
      proofPoints={["Contract Automation", "ERP-Connected", "Multi-Branch Ready"]}
      visualItems={["Leasing", "Fleet", "Billing", "ERP"]}
      sections={[
        {
          eyebrow: "Leasing Capabilities",
          title: "Everything a leasing operation needs, in one system",
          text: "What FleetArabia's leasing module handles for corporate and government fleet contracts.",
          items: [
            { title: "Contract Management", text: "Set up and track flexible long-term lease contracts for corporate and government customers." },
            { title: "Fleet Lifecycle Control", text: "Track vehicle assignment, servicing schedules and lifecycle status across your leased fleet." },
            { title: "Renewal & Installment Tracking", text: "Monitor lease renewals, installment schedules and contract milestones without spreadsheets." },
            { title: "Consolidated Billing", text: "Generate one consolidated monthly invoice across a customer's leased fleet, not a stack of separate ones." },
          ],
        },
        {
          eyebrow: "Why Run Leasing on FleetArabia",
          title: "Built to reduce admin work, not just track contracts",
          text: "The leasing module connects contract, operations and billing data so nothing needs re-entering by hand.",
          variant: "dark",
          items: [
            { title: "Configurable Terms", text: "Model lease terms that match your business cycle instead of a fixed one-size-fits-all period." },
            { title: "Replacement Vehicle Tracking", text: "Track and assign replacement vehicles when a leased unit needs servicing or is off the road." },
            { title: "Maintenance Scheduling", text: "Plan and log scheduled servicing and upkeep against each leased vehicle." },
            { title: "ERP-Ready Reporting", text: "Lease costs, utilization and renewals feed directly into your finance system for clean reporting." },
          ],
        },
      ]}
      finalCtaTitle="Ready to run leasing operations on one platform?"
      finalCtaText="Talk to our team about contract setup, billing workflows and rollout timelines for your leasing business."
    />
  );
}
