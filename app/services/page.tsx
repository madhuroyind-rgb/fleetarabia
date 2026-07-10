import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";

export const metadata: Metadata = {
  title: "Services | FleetArabia",
  description:
    "Implementation, ERP integration, website and app development, training and long-term support delivered by people who understand fleet operations.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <EnterprisePage
      eyebrow="Professional Services"
      title="Implementation, Support and"
      highlight="ERP Consulting"
      description="From process mapping through go-live and beyond — implementation, ERP integration, training and ongoing support, delivered by people who understand fleet operations."
      primaryCta={{ label: "Request Services", href: "/contact" }}
      secondaryCta={{ label: "View Platform", href: "/platform" }}
      proofPoints={["Implementation", "ERP Support", "Customer Success"]}
      visualItems={["Consulting", "Delivery", "Support", "Training"]}
      sections={[
        {
          eyebrow: "Service Portfolio",
          title: "Enterprise services for successful digital transformation",
          text: "We help mobility businesses move off spreadsheets and disconnected tools onto one controlled process — without disrupting operations mid-transition.",
          items: [
            { title: "Solution Implementation", text: "Configure FleetArabia based on business workflows, branches, roles and operating model." },
            { title: "Business Process Consulting", text: "Map rental, leasing, workshop, warehouse, billing and ERP-connected processes." },
            { title: "ERP Support Services", text: "Support Oracle ERP-related process alignment, integration coordination and issue resolution." },
            { title: "Integration Delivery", text: "Design and support integrations with ERP, finance, GPS, payment and API-based systems." },
            { title: "Website & App Development", text: "Custom website and mobile app development for booking portals, customer self-service and branded field apps." },
            { title: "Data Migration", text: "Assist with master data, vehicles, customers, contracts and operational data migration." },
            { title: "User Training", text: "Train operations, finance, workshop, warehouse and management teams." },
            { title: "Go-Live Support", text: "Support launch, stabilization and adoption during implementation rollout." },
            { title: "Customer Success", text: "Provide long-term guidance, enhancements and operational support." },
          ],
        },
        {
          eyebrow: "Delivery Approach",
          title: "Structured delivery from discovery to adoption",
          text: "Our service approach focuses on business fit, controlled rollout and measurable operational improvement.",
          variant: "dark",
          items: [
            { tag: "01", title: "Discover", text: "Understand your operating model, business challenges and system landscape." },
            { tag: "02", title: "Design", text: "Map workflows, roles, data, integrations and reporting requirements." },
            { tag: "03", title: "Deliver", text: "Configure, integrate, migrate data, train users and support go-live." },
            { tag: "04", title: "Improve", text: "Optimize processes, expand modules and support ongoing digital maturity." },
          ],
        },
      ]}
    />
  );
}