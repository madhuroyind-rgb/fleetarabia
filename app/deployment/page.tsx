import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageOpenGraph } from "@/lib/seo";
import EnterprisePage from "@/components/EnterprisePage";
import { Cloud, Globe, ReceiptText, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Deployment Options | FleetArabia",
  description:
    "FleetArabia is hosted in the cloud and used through a web browser: no servers to buy, subscription licensing and updates handled for you.",
  alternates: { canonical: "/deployment" },
  openGraph: pageOpenGraph("/deployment"),
};

export default function DeploymentPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("/deployment")} />
    <EnterprisePage
      eyebrow="Deployment"
      title="Hosted in the cloud,"
      highlight="used in your browser"
      description="FleetArabia runs as a hosted service. Your branches, workshops and offices use it through a web browser, and FleetArabia looks after the servers and updates."
      primaryCta={{ label: "Talk to Our Experts", href: "/contact#demo-form" }}
      secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
      proofPoints={["SaaS Cloud", "Browser Access", "Enterprise Security"]}
      visual={{
        kind: "facts",
        caption: "How it is delivered",
        facts: [
          { label: "Hosting", detail: "Managed by FleetArabia", icon: Cloud },
          { label: "Access", detail: "Web browser", icon: Globe },
          { label: "Licensing", detail: "Subscription", icon: ReceiptText },
          { label: "Updates", detail: "Applied by FleetArabia", icon: RefreshCw },
        ],
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
          eyebrow: "Included",
          title: "Every module, hosted for you",
          text: "The hosted service includes the modules described across this site.",
          variant: "teal",
          compact: true,
          items: [
            { title: "Vehicle Rental & Leasing" },
            { title: "Fleet Operations" },
            { title: "Workshop Management" },
            { title: "Driver Management" },
            { title: "Fuel-Card Statement Imports" },
            { title: "Finance & Billing" },
            { title: "Dashboards & Reporting" },
            { title: "Data Imports & APIs" },
            { title: "Multi-Company & Multi-Branch Support" },
            { title: "Enterprise Security Controls" },
          ],
        },
      ]}
      finalCtaTitle="Questions about hosting? Ask us."
      finalCtaText="Tell us how many branches and users you have, and we'll walk you through how the hosted service works."
    />
    </>
  );
}
