import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";

export const metadata: Metadata = {
  title: "Deployment Options | FleetArabia",
  description:
    "Choose on-premise or SaaS cloud deployment for FleetArabia based on your business operations, security requirements and IT strategy.",
  alternates: { canonical: "/deployment" },
};

export default function DeploymentPage() {
  return (
    <EnterprisePage
      eyebrow="Deployment Flexibility"
      title="On-Premise & SaaS"
      highlight="Cloud Deployment"
      description="Choose the deployment model that fits your business operations, security requirements and IT strategy."
      primaryCta={{ label: "Talk to Us", href: "/contact" }}
      secondaryCta={{ label: "Explore Platform", href: "/platform" }}
      proofPoints={["On-Premise Ready", "SaaS Cloud", "Enterprise Secure"]}
      visualItems={["On-Premise", "Cloud", "Security", "Scale"]}
      sections={[
        {
          eyebrow: "On-Premise Deployment",
          title: "Deploy within your own infrastructure",
          text: "Maximum control, security, compliance and internal data governance for organizations with strict infrastructure requirements.",
          items: [
            { title: "Private Infrastructure", text: "Deploy FleetArabia within your own infrastructure for maximum control." },
            { title: "Enterprise Security", text: "Meet strict security, compliance and data protection requirements." },
            { title: "Internal Data Control", text: "Keep operational and financial data fully within your organization's environment." },
            { title: "Custom Integrations", text: "Support tailored integrations with internal and third-party systems." },
            { title: "Government Ready", text: "Meet public-sector and regulated-industry deployment requirements." },
          ],
        },
        {
          eyebrow: "SaaS Cloud Platform",
          title: "Access FleetArabia from anywhere",
          text: "A scalable, subscription-based cloud platform for businesses that want to move fast without managing infrastructure.",
          variant: "dark",
          items: [
            { title: "Subscription Based", text: "Access FleetArabia through a scalable, subscription-based cloud platform." },
            { title: "Fast Deployment", text: "Get started quickly without infrastructure setup or hardware procurement." },
            { title: "Automatic Updates", text: "Stay current with continuous platform updates and improvements." },
            { title: "Cloud Scalability", text: "Scale usage up or down as your fleet business grows." },
            { title: "Anywhere Access", text: "Access the platform securely from any location or device." },
          ],
        },
      ]}
      finalCtaTitle="Not sure which deployment model fits your business?"
      finalCtaText="Talk to our team about on-premise and SaaS cloud deployment options for your fleet operations."
    />
  );
}
