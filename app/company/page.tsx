import EnterprisePage from "@/components/EnterprisePage";

export default function CompanyPage() {
  return (
    <EnterprisePage
      eyebrow="Company"
      title="Enterprise Mobility Technology for"
      highlight="the Middle East"
      description="FleetArabia is a solutions and services provider helping rental, leasing, transportation and fleet businesses digitize operations, integrate ERP systems and scale with confidence."
      primaryCta={{ label: "Contact FleetArabia", href: "/contact" }}
      secondaryCta={{ label: "Explore Solutions", href: "/solutions" }}
      proofPoints={["Mobility Domain", "ERP Expertise", "Regional Focus"]}
      visualItems={["Domain", "Technology", "ERP", "Support"]}
      sections={[
        {
          eyebrow: "Who We Are",
          title: "A technology partner for mobility transformation",
          text: "FleetArabia combines fleet domain knowledge, enterprise software capability and ERP ecosystem experience.",
          items: [
            { title: "Mobility Domain Expertise", text: "We understand rental, leasing, limousine, bus, workshop, warehouse and fleet operations." },
            { title: "Enterprise Technology", text: "We build scalable digital platforms for complex operating environments." },
            { title: "ERP Ecosystem Knowledge", text: "We support integration between operations, finance and enterprise systems." },
            { title: "Middle East Focus", text: "We design around the needs of regional mobility and fleet businesses." },
          ],
        },
        {
          eyebrow: "What We Believe",
          title: "Operations should be connected, controlled and visible",
          text: "Our mission is to help mobility businesses move away from fragmented tools and manual processes.",
          variant: "teal",
          items: [
            { title: "Automation First", text: "Reduce manual effort and standardize daily operating workflows." },
            { title: "Integration Ready", text: "Connect business operations with finance, ERP and third-party platforms." },
            { title: "Enterprise Control", text: "Improve governance, approvals, visibility and management reporting." },
            { title: "Long-Term Partnership", text: "Support clients from discovery and implementation to continuous improvement." },
          ],
        },
      ]}
    />
  );
}