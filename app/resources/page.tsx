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
      title="Practical guides for"
      highlight="moving fleet operations off spreadsheets"
      description="Practical guides for rental, leasing, transportation and fleet organizations planning the move from spreadsheets to connected digital operations. Two guides are available now, with more on the way — and if your question isn't covered yet, ask us directly."
      primaryCta={{ label: "Talk to an Expert", href: "/contact#demo-form" }}
      secondaryCta={{ label: "Explore Solutions", href: "/solutions" }}
      proofPoints={["Implementation Guides", "Industry Insights", "No Sign-Up Required"]}
      visual={{
        kind: "docs",
        caption: "Available now",
        docs: [
          { tag: "Guide", title: "Fleet Digital Transformation Guide", href: "/resources/fleet-digital-transformation-guide" },
          { tag: "Checklist", title: "ERP Integration Checklist", href: "/resources/erp-integration-checklist" },
        ],
        pending: "More guides are in progress — ask us about any topic in the meantime.",
      }}
      sections={[
        {
          eyebrow: "Featured Resources",
          title: "Practical guides from the FleetArabia team",
          columns: 2,
          text: "Two guides are live below. The rest are in progress — reach out directly and we'll walk you through any of these topics now.",
          items: [
            { tag: "Guide", title: "Fleet Digital Transformation Guide", text: "Learn how to modernize rental, leasing, transportation, workshops and fleet operations using connected digital technologies.", href: "/resources/fleet-digital-transformation-guide", linkLabel: "Read Guide →" },
            { tag: "Checklist", title: "ERP Integration Checklist", text: "A practical checklist for planning how fleet operations should connect to your ERP, finance, GPS and payment systems.", href: "/resources/erp-integration-checklist", linkLabel: "Read Checklist →" },
          ],
        },
      ]}
      finalCtaTitle="Didn't find what you need?"
      finalCtaText="Have a question these guides don't answer yet? Tell us what you're working on and we'll walk you through it."
    />
  );
}
