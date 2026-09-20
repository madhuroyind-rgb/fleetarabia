import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";

export const metadata: Metadata = {
  title: "Resources | FleetArabia",
  description:
    "Implementation guides and industry insights for rental, leasing, transportation and fleet organizations — two guides live now, more in progress.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <EnterprisePage
      eyebrow="Resources"
      title="Knowledge, Insights & Best Practices for"
      highlight="Modern Mobility Businesses"
      description="Practical guides for rental, leasing, transportation and fleet organizations planning the move from spreadsheets to connected digital operations. Two guides are available now, with more on the way — and if your question isn't covered yet, ask us directly."
      primaryCta={{ label: "Talk to an Expert", href: "/contact#demo-form" }}
      secondaryCta={{ label: "Explore Solutions", href: "/solutions" }}
      proofPoints={["Implementation Guides", "Industry Insights", "No Sign-Up Required"]}
      visualItems={["Insights", "Guides", "Cases", "Docs"]}
      sections={[
        {
          eyebrow: "Featured Resources",
          title: "Learn from industry experts",
          text: "Two guides are live below. The rest are in progress — reach out directly and we'll walk you through any of these topics now.",
          items: [
            { tag: "Guide", title: "Fleet Digital Transformation Guide", text: "Learn how to modernize rental, leasing, transportation, workshops and fleet operations using connected digital technologies.", href: "/resources/fleet-digital-transformation-guide", linkLabel: "Read Guide →" },
            { tag: "Checklist", title: "ERP Integration Checklist", text: "A practical checklist for planning how fleet operations should connect to your ERP, finance, GPS and payment systems.", href: "/resources/erp-integration-checklist", linkLabel: "Read Checklist →" },
            { tag: "Soon", title: "Rental & Leasing Best Practices", text: "Improve reservations, contracts, billing, fleet utilization, renewals and customer experience with proven operational strategies." },
            { tag: "Soon", title: "Fleet Maintenance & Workshop Guide", text: "Discover how preventive maintenance, digital inspections, job cards and service planning improve fleet availability and reduce operating costs." },
            { tag: "Soon", title: "Vehicle Damage Management (VDR)", text: "Digitize inspections, capture vehicle condition reports, manage repair workflows, estimate costs and improve customer transparency." },
            { tag: "Soon", title: "Business Intelligence & Analytics", text: "Transform operational data into actionable insights with dashboards, KPIs, profitability analysis and executive reporting." },
          ],
        },
        {
          eyebrow: "Knowledge Hub — Coming Soon",
          title: "Stay informed with the latest insights",
          text: "We're building this out for the people actually doing the work — operations leads, IT and finance teams, not just executives.",
          variant: "dark",
          items: [
            { tag: "Soon", title: "Blogs & Industry Insights", text: "Articles covering mobility trends, fleet innovation, digital transformation, operational excellence, AI and emerging technologies." },
            { tag: "Soon", title: "Case Studies", text: "See how organizations improve efficiency, reduce costs and transform operations using FleetArabia." },
            { tag: "Soon", title: "Product Updates", text: "Stay informed about new modules, platform enhancements, integrations and upcoming releases." },
            { tag: "Soon", title: "Product Documentation", text: "Comprehensive user guides, administrator manuals, API documentation, implementation resources and configuration references." },
            { tag: "Soon", title: "Webinars & Product Demonstrations", text: "Watch live demonstrations, expert sessions, implementation walkthroughs and product training videos." },
            { tag: "Soon", title: "FAQs & Support Resources", text: "Find answers to common questions, troubleshooting guides, onboarding resources and best practices." },
          ],
        },
      ]}
      finalCtaTitle="Didn't find what you need?"
      finalCtaText="Have a question these guides don't answer yet? Tell us what you're working on and we'll walk you through it."
    />
  );
}
