import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";

export const metadata: Metadata = {
  title: "Fleet Leasing Solutions | FleetArabia",
  description:
    "Professional long-term fleet leasing solutions for businesses and corporate fleets across the UAE, backed by ERP-driven fleet operations and 24/7 support.",
  alternates: { canonical: "/fleet-leasing" },
};

export default function FleetLeasingPage() {
  return (
    <EnterprisePage
      eyebrow="Long-Term Leasing"
      title="Fleet Leasing Solutions for"
      highlight="Corporate & Government Fleets"
      description="Professional long-term leasing solutions for businesses and corporate fleets across the UAE."
      primaryCta={{ label: "Talk to Us", href: "/contact" }}
      secondaryCta={{ label: "Explore Solutions", href: "/solutions" }}
      proofPoints={["Corporate Leasing", "ERP-Driven", "24/7 Support"]}
      visualItems={["Leasing", "Fleet", "Support", "ERP"]}
      sections={[
        {
          eyebrow: "Leasing Capabilities",
          title: "Flexible terms, dedicated support",
          text: "What's included with every FleetArabia leasing agreement.",
          items: [
            { title: "Corporate Leasing", text: "Flexible long-term contracts for corporate customers." },
            { title: "Fleet Management", text: "ERP-driven fleet operations and maintenance support." },
            { title: "24/7 Support", text: "Dedicated customer support across Dubai and Abu Dhabi." },
            { title: "Transparent Billing", text: "One consolidated monthly invoice across your leased fleet, not a stack of separate ones." },
          ],
        },
        {
          eyebrow: "Why Lease Through FleetArabia",
          title: "Built to reduce downtime, not just paperwork",
          text: "Leasing here comes with the operational backbone to run those vehicles, not just a signed contract.",
          variant: "dark",
          items: [
            { title: "Contract Flexibility", text: "Choose terms that match your business cycle instead of a fixed one-size-fits-all lease period." },
            { title: "Replacement Vehicles", text: "Minimize downtime when a leased vehicle needs servicing or is temporarily off the road." },
            { title: "Maintenance Included", text: "Scheduled servicing and upkeep managed as part of the lease, not billed as surprise extras." },
            { title: "ERP-Ready Reporting", text: "Lease costs, utilization and renewals feed directly into your finance system for clean reporting." },
          ],
        },
      ]}
      finalCtaTitle="Ready to lease your corporate fleet?"
      finalCtaText="Talk to our team about terms, vehicle options and rollout timelines for your fleet."
    />
  );
}
