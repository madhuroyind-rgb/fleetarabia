import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";

export const metadata: Metadata = {
  title: "Resources | FleetArabia",
  description:
    "Guides and checklists for planning fleet ERP integration, rental and leasing automation, workshop digitization and fleet lifecycle reporting.",
};

export default function ResourcesPage() {
  return (
    <EnterprisePage
      eyebrow="Resources"
      title="Insights for"
      highlight="Mobility Transformation"
      description="Practical guides for planning your next step — whether that's ERP integration, workshop digitization, or just getting rental and leasing off spreadsheets."
      primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
      secondaryCta={{ label: "View Solutions", href: "/solutions" }}
      proofPoints={["Guides", "Case Studies", "Documentation"]}
      visualItems={["Insights", "Guides", "Cases", "Docs"]}
      sections={[
        {
          eyebrow: "Resource Center",
          title: "Knowledge for enterprise mobility teams",
          text: "Start wherever your operation actually is right now — not where a generic transformation roadmap assumes you are.",
          items: [
            { title: "Fleet Digital Transformation Guide", text: "Understand how to modernize rental, leasing, transportation, workshop, and fleet operations." },
            { title: "ERP Integration Checklist", text: "Plan how fleet operations should connect with finance, Oracle ERP, payment gateways, GPS, and enterprise systems." },
            { title: "Rental & Leasing Automation", text: "Learn how to improve bookings, agreements, billing, renewals, replacement vehicles, and fleet control." },
            { title: "Workshop Digitization", text: "Explore job cards, maintenance tracking, spare parts, vehicle readiness, and warehouse control best practices." },
            { title: "Vehicle Damage Control", text: "Digitize vehicle inspection, damage photos, condition reporting, repair follow-up, and customer approval workflows." },
            { title: "Management Reporting", text: "Improve leadership visibility across utilization, revenue, agreements, maintenance, receivables, and operations." },
            { title: "Implementation Planning", text: "Prepare branches, users, master data, workflows, data migration, UAT, training, and go-live activities." },
            { title: "Customer Success", text: "Understand how continuous improvement, support, and user adoption help maximize long-term business value." },
          ],
        },
        {
          eyebrow: "Knowledge Hub",
          title: "Case studies, blogs and product documentation",
          text: "Written for the people actually doing the work — operations leads, IT and finance teams, not just executives.",
          variant: "dark",
          items: [
            { title: "Blogs", text: "Articles on rental, leasing, fleet, transportation, workshop, warehouse, and ERP transformation." },
            { title: "Case Studies", text: "Customer success stories covering enterprise implementation, process automation, and measurable operational improvements." },
            { title: "Product Notes", text: "Updates about FleetArabia modules, new features, integrations, enhancements, and platform improvements." },
            { title: "Documentation", text: "Guides for users, admins, integrations, platform setup, reporting, workflows, and configuration." },
          ],
        },
      ]}
      finalCtaTitle="Ready to modernize your fleet operations?"
      finalCtaText="Explore FleetArabia solutions, or talk to our team about where to start."
    />
  );
}