import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";

export const metadata: Metadata = {
  title: "Resources | FleetArabia",
  description:
    "Guides and checklists (coming soon) for planning fleet ERP integration, rental and leasing automation, and workshop digitization.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <EnterprisePage
      eyebrow="Resources"
      title="Insights for"
      highlight="Mobility Transformation"
      description="Practical guides for planning your next step — ERP integration, workshop digitization, and getting rental and leasing off spreadsheets. More guides are being added regularly."
      primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
      secondaryCta={{ label: "View Solutions", href: "/solutions" }}
      proofPoints={["2 Guides Live", "More Coming", "Talk to Us"]}
      visualItems={["Insights", "Guides", "Cases", "Docs"]}
      sections={[
        {
          eyebrow: "Resource Center",
          title: "Knowledge for enterprise mobility teams",
          text: "Two guides are live below. The rest are in progress — reach out directly and we'll walk you through any of these topics now.",
          items: [
            { title: "Fleet Digital Transformation Guide", text: "Understand how to modernize rental, leasing, transportation, workshop, and fleet operations.", href: "/resources/fleet-digital-transformation-guide" },
            { title: "ERP Integration Checklist", text: "Plan how fleet operations should connect with finance, Oracle ERP, payment gateways, GPS, and enterprise systems.", href: "/resources/erp-integration-checklist" },
            { tag: "Soon", title: "Rental & Leasing Automation", text: "Learn how to improve bookings, agreements, billing, renewals, replacement vehicles, and fleet control." },
            { tag: "Soon", title: "Workshop Digitization", text: "Explore job cards, maintenance tracking, spare parts, vehicle readiness, and warehouse control best practices." },
            { tag: "Soon", title: "Vehicle Damage Control", text: "Digitize vehicle inspection, damage photos, condition reporting, repair follow-up, and customer approval workflows." },
            { tag: "Soon", title: "Management Reporting", text: "Improve leadership visibility across utilization, revenue, agreements, maintenance, receivables, and operations." },
            { tag: "Soon", title: "Implementation Planning", text: "Prepare branches, users, master data, workflows, data migration, UAT, training, and go-live activities." },
            { tag: "Soon", title: "Customer Success", text: "Understand how continuous improvement, support, and user adoption help maximize long-term business value." },
          ],
        },
        {
          eyebrow: "Knowledge Hub — Coming Soon",
          title: "Case studies, blogs and product documentation",
          text: "We're building this out for the people actually doing the work — operations leads, IT and finance teams, not just executives. Nothing fake in the meantime; check back as it goes live.",
          variant: "dark",
          items: [
            { tag: "Soon", title: "Blogs", text: "Articles on rental, leasing, fleet, transportation, workshop, warehouse, and ERP transformation." },
            { tag: "Soon", title: "Case Studies", text: "Customer success stories covering enterprise implementation, process automation, and measurable operational improvements." },
            { tag: "Soon", title: "Product Notes", text: "Updates about FleetArabia modules, new features, integrations, enhancements, and platform improvements." },
            { tag: "Soon", title: "Documentation", text: "Guides for users, admins, integrations, platform setup, reporting, workflows, and configuration." },
          ],
        },
      ]}
      finalCtaTitle="Ready to modernize your fleet operations?"
      finalCtaText="Explore FleetArabia solutions, or talk to our team directly — no need to wait for the guides."
    />
  );
}