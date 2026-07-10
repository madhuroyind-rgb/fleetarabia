import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Resources | FleetArabia",
  description:
    "Implementation guides and industry insights for rental, leasing, transportation and fleet organizations — two guides live now, more in progress.",
  alternates: { canonical: "/resources" },
};

const resourceCategories = [
  "Digital Transformation",
  "Vehicle Rental",
  "Fleet Leasing",
  "Limousine Operations",
  "Bus Transportation",
  "Workshop Management",
  "Driver & Fuel Management",
  "GPS Tracking & Geo-Fencing",
  "AI & Business Intelligence",
  "Integrations & APIs",
  "Cloud & Security",
  "Customer Success",
];

export default function ResourcesPage() {
  return (
    <EnterprisePage
      eyebrow="Resources"
      title="Knowledge, Insights & Best Practices for"
      highlight="Modern Mobility Businesses"
      description="Explore expert resources, implementation guides, industry insights and product documentation designed to help rental, leasing, transportation and fleet organizations accelerate their digital transformation. Whether you're evaluating a new ERP platform, optimizing operations or planning your next technology initiative, FleetArabia provides practical knowledge to support every stage of your journey."
      primaryCta={{ label: "Talk to an Expert", href: "/contact#demo-form" }}
      secondaryCta={{ label: "Explore Solutions", href: "/solutions" }}
      proofPoints={["Industry Insights", "Implementation Guides", "Product Resources"]}
      visualItems={["Insights", "Guides", "Cases", "Docs"]}
      sections={[
        {
          eyebrow: "Featured Resources",
          title: "Learn from industry experts",
          text: "Two guides are live below. The rest are in progress — reach out directly and we'll walk you through any of these topics now.",
          items: [
            { tag: "📘", title: "Digital Mobility Transformation Guide", text: "Learn how to modernize rental, leasing, transportation, workshops and fleet operations using connected digital technologies.", href: "/resources/fleet-digital-transformation-guide", linkLabel: "Read Guide →" },
            { tag: "📘", title: "ERP & System Integration Guide", text: "Explore best practices for integrating business operations with finance systems, payment gateways, GPS, telematics and third-party applications.", href: "/resources/erp-integration-checklist", linkLabel: "Read Guide →" },
            { tag: "Soon", title: "📘 Rental & Leasing Best Practices", text: "Improve reservations, contracts, billing, fleet utilization, renewals and customer experience with proven operational strategies." },
            { tag: "Soon", title: "📘 Fleet Maintenance & Workshop Guide", text: "Discover how preventive maintenance, digital inspections, job cards and service planning improve fleet availability and reduce operating costs." },
            { tag: "Soon", title: "📘 Vehicle Damage Management (VDR)", text: "Digitize inspections, capture vehicle condition reports, manage repair workflows, estimate costs and improve customer transparency." },
            { tag: "Soon", title: "📘 Business Intelligence & Analytics", text: "Transform operational data into actionable insights with dashboards, KPIs, profitability analysis and executive reporting." },
          ],
        },
        {
          eyebrow: "Knowledge Hub — Coming Soon",
          title: "Stay informed with the latest insights",
          text: "We're building this out for the people actually doing the work — operations leads, IT and finance teams, not just executives. Nothing fake in the meantime; check back as it goes live.",
          variant: "dark",
          items: [
            { tag: "Soon", title: "📰 Blogs & Industry Insights", text: "Articles covering mobility trends, fleet innovation, digital transformation, operational excellence, AI and emerging technologies." },
            { tag: "Soon", title: "📚 Case Studies", text: "See how organizations improve efficiency, reduce costs and transform operations using FleetArabia." },
            { tag: "Soon", title: "🚀 Product Updates", text: "Stay informed about new modules, platform enhancements, integrations and upcoming releases." },
            { tag: "Soon", title: "📖 Product Documentation", text: "Comprehensive user guides, administrator manuals, API documentation, implementation resources and configuration references." },
            { tag: "Soon", title: "🎥 Webinars & Product Demonstrations", text: "Watch live demonstrations, expert sessions, implementation walkthroughs and product training videos." },
            { tag: "Soon", title: "❓ FAQs & Support Resources", text: "Find answers to common questions, troubleshooting guides, onboarding resources and best practices." },
          ],
        },
      ]}
      finalCtaTitle="Learn. Innovate. Grow."
      finalCtaText="FleetArabia is committed to helping mobility businesses stay ahead through expert knowledge, continuous innovation and practical guidance. Explore our growing resource center to discover strategies, technologies and best practices that drive operational excellence."
    >
      <ResourceCategoriesSection />
    </EnterprisePage>
  );
}

function ResourceCategoriesSection() {
  return (
    <section className="bg-white px-6 py-14 text-slate-950">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
            Resource Categories
          </p>
          <h2 className="mt-4 text-xl font-black tracking-tight md:text-3xl">
            Browse by topic
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resourceCategories.map((item, index) => (
            <Reveal key={item} delay={Math.min(index * 0.05, 0.3)}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-black shadow-sm">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
