import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";
import { Cloud, Server } from "lucide-react";

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
      visual={{
        kind: "split",
        caption: "Two deployment choices",
        options: [
          { title: "SaaS Cloud", icon: Cloud, points: ["No hardware to buy", "Subscription licensing", "Updates handled for you"] },
          { title: "On-Premises", icon: Server, points: ["Full data ownership", "Your security controls", "Your backup policies"] },
        ],
        footer: "Same platform, either way",
      }}
      sections={[
        {
          eyebrow: "SaaS Cloud",
          title: "Fast, secure and always up to date",
          text: "Access FleetArabia through our fully managed cloud platform with no infrastructure to maintain. Deploy quickly, scale effortlessly and always stay on the latest version.",
          items: [
            { title: "No Hardware to Buy", text: "The hosted option does not require you to buy or install server hardware." },
            { title: "Subscription Licensing", text: "The hosted option is licensed on a subscription basis." },
            { title: "Updates Handled for You", text: "New versions are applied by FleetArabia as part of the hosted service." },
            { title: "Role-Based Access", text: "Access to the system is controlled through user roles and permissions." },
            { title: "Browser Access", text: "Branches, workshops and offices reach the system through a web browser." },
            { title: "Grows With You", text: "Add users, branches and vehicles as your operation grows." },
          ],
        },
        {
          eyebrow: "On-Premises",
          title: "Complete control over your infrastructure",
          text: "Deploy FleetArabia within your own data center or private cloud for maximum control, security and compliance while integrating with your existing IT ecosystem.",
          variant: "dark",
          items: [
            { title: "Full Data Ownership", text: "Your data stays on servers you own and control, under your own retention and access policies." },
            { title: "Private Infrastructure", text: "Runs inside your data center or private cloud, behind your own network perimeter." },
            { title: "Your Security Controls", text: "The system sits behind your organization's own firewalls and monitoring tools." },
            { title: "Custom Integrations", text: "Connect directly to internal systems that are not reachable from the public internet." },
            { title: "Data Location", text: "Data stays in your own environment, which can help where data must remain in-country or on-site." },
            { title: "Hardware Sized by You", text: "You choose the hardware to match your own transaction volumes and peak periods." },
            { title: "Your Backup Policies", text: "Backups and recovery follow your own IT policies and tools, because the system runs on your infrastructure." },
            { title: "Multi-Branch Use", text: "One installation can be shared across several branches." },
          ],
        },
        {
          eyebrow: "Same Platform, Either Way",
          title: "One platform. Two deployment choices.",
          text: "Whether deployed as SaaS or on-premises, FleetArabia delivers the same enterprise capabilities.",
          variant: "teal",
          compact: true,
          items: [
            { title: "Vehicle Rental & Leasing" },
            { title: "Fleet Operations" },
            { title: "Workshop Management" },
            { title: "Driver & Fuel Management" },
            { title: "GPS Tracking & Geo-Fencing" },
            { title: "Finance & Billing" },
            { title: "Business Intelligence & Analytics" },
            { title: "API-First Integrations" },
            { title: "Multi-Company & Multi-Branch Support" },
            { title: "Enterprise Security Controls" },
          ],
        },
      ]}
      finalCtaTitle="Digital transformation starts here"
      finalCtaText="Deploy FleetArabia in the way that best fits your organization — cloud for agility or on-premises for complete control — while enjoying the same powerful enterprise mobility platform."
    />
  );
}
