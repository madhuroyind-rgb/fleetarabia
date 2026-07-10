import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";

export const metadata: Metadata = {
  title: "Deployment Options | FleetArabia",
  description:
    "Deploy FleetArabia as fully managed SaaS cloud or within your own on-premises infrastructure — the same enterprise mobility platform either way.",
  alternates: { canonical: "/deployment" },
};

export default function DeploymentPage() {
  return (
    <EnterprisePage
      eyebrow="Deployment Flexibility"
      title="Deploy FleetArabia"
      highlight="Your Way"
      description="Choose the deployment model that best aligns with your business, security and IT strategy. Whether you prefer the flexibility of the cloud or complete control over your infrastructure, FleetArabia provides enterprise-grade deployment options designed to scale with your organization."
      primaryCta={{ label: "Talk to Our Experts", href: "/contact#demo-form" }}
      secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
      proofPoints={["SaaS Cloud", "On-Premises", "Enterprise Security"]}
      visualItems={["SaaS", "On-Premises", "Security", "Scale"]}
      sections={[
        {
          eyebrow: "SaaS Cloud",
          title: "Fast, secure and always up to date",
          text: "Access FleetArabia through our fully managed cloud platform with no infrastructure to maintain. Deploy quickly, scale effortlessly and always stay on the latest version.",
          items: [
            { title: "Rapid Deployment", text: "Rapid deployment with no infrastructure to maintain." },
            { title: "Subscription Licensing", text: "Subscription-based licensing." },
            { title: "Automatic Updates", text: "Automatic updates to the latest version." },
            { title: "Enterprise Security", text: "Enterprise security built in." },
            { title: "Anywhere Access", text: "Access from anywhere." },
            { title: "High Availability", text: "High availability infrastructure." },
            { title: "Backup & Recovery", text: "Automatic backup and recovery." },
            { title: "Unlimited Scalability", text: "Unlimited scalability as you grow." },
          ],
        },
        {
          eyebrow: "On-Premises",
          title: "Complete control over your infrastructure",
          text: "Deploy FleetArabia within your own data center or private cloud for maximum control, security and compliance while integrating with your existing IT ecosystem.",
          variant: "dark",
          items: [
            { title: "Full Data Ownership", text: "Full ownership of your data." },
            { title: "Private Infrastructure", text: "Deployed within your private infrastructure." },
            { title: "Advanced Security Controls", text: "Advanced security controls." },
            { title: "Custom Integrations", text: "Support for custom integrations." },
            { title: "Regulatory Compliance", text: "Built for regulatory compliance." },
            { title: "Enterprise Performance", text: "Enterprise-grade performance." },
            { title: "Disaster Recovery", text: "Disaster recovery support." },
            { title: "Multi-Site Deployment", text: "Deployment across multiple sites." },
          ],
        },
        {
          eyebrow: "Same Platform, Either Way",
          title: "One platform. Two deployment choices.",
          text: "Whether deployed as SaaS or on-premises, FleetArabia delivers the same enterprise capabilities.",
          items: [
            { title: "Vehicle Rental & Leasing", text: "Vehicle rental and leasing operations." },
            { title: "Fleet Operations", text: "Day-to-day fleet operations." },
            { title: "Workshop Management", text: "Preventive maintenance and workshop operations." },
            { title: "Driver & Fuel Management", text: "Driver and fuel management." },
            { title: "GPS Tracking & Geo-Fencing", text: "Real-time GPS tracking and geo-fencing." },
            { title: "Finance & Billing", text: "Finance and billing automation." },
            { title: "Business Intelligence & Analytics", text: "Business intelligence and analytics dashboards." },
            { title: "API-First Integrations", text: "API-first integrations with your systems." },
            { title: "Multi-Company & Multi-Branch Support", text: "Support for multi-company and multi-branch operations." },
            { title: "Enterprise Security", text: "Enterprise-grade security controls." },
          ],
        },
      ]}
      finalCtaTitle="Digital transformation starts here"
      finalCtaText="Deploy FleetArabia in the way that best fits your organization — cloud for agility or on-premises for complete control — while enjoying the same powerful enterprise mobility platform."
    />
  );
}
