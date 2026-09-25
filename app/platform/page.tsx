import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { ORGANIZATION_ID, breadcrumbJsonLd, pageOpenGraph } from "@/lib/seo";
import { MODULE_ICONS } from "@/lib/modules";
import { SITE_URL } from "@/lib/site";
import EnterprisePage from "@/components/EnterprisePage";
import { ChartColumn, Cloud, Layers, Link2, Lock, MapPin, MonitorSmartphone, Plug, ShieldCheck, Smartphone, Workflow, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform | FleetArabia",
  description:
    "One platform underneath rental, leasing, maintenance and billing — so operational and financial data are always the same numbers.",
  alternates: { canonical: "/platform" },
  openGraph: pageOpenGraph("/platform"),
};

// Only what the site itself states. No offers, ratings or operating systems:
// there is no published price, no reviews, and the site names no platforms.
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FleetArabia",
  applicationCategory: "BusinessApplication",
  description:
    "One platform underneath rental, leasing, maintenance and billing — so operational and financial data are always the same numbers.",
  url: `${SITE_URL}/platform`,
  featureList: Object.keys(MODULE_ICONS),
  publisher: { "@id": ORGANIZATION_ID },
};

export default function PlatformPage() {
  return (
    <>
      <JsonLd data={softwareJsonLd} />
      <JsonLd data={breadcrumbJsonLd("/platform")} />
    <EnterprisePage
      eyebrow="FleetArabia Platform"
      title="Rental, leasing, maintenance and billing on"
      highlight="one data model"
      description="Rental, leasing, maintenance and billing running on one data model — so a change in one place doesn't need to be re-entered in three others."
      primaryCta={{ label: "Book a Demo", href: "/contact#demo-form" }}
      secondaryCta={{ label: "View Solutions", href: "/solutions" }}
      proofPoints={["Cloud Ready", "ERP Integrated", "Enterprise Secure"]}
      visual={{
        kind: "stack",
        caption: "Platform architecture",
        layers: [
          { tag: "Layer 01", label: "Experience Layer", detail: "Web portal, mobile access and customer touchpoints", icon: MonitorSmartphone },
          { tag: "Layer 02", label: "Operations Layer", detail: "Reservations, agreements, fleet, workshop and billing", icon: Workflow },
          { tag: "Layer 03", label: "Enterprise Layer", detail: "ERP and finance posting, GPS, payments and APIs", icon: Plug },
          { tag: "Layer 04", label: "Governance Layer", detail: "Roles, approvals and audit controls", icon: ShieldCheck },
        ],
        footer: "Everything runs on the same data model",
      }}
      finalCtaTitle="See how the platform fits your operation"
      sections={[
        {
          eyebrow: "Platform at a Glance",
          title: "Built for enterprise mobility operations",
          text: "Everything below runs on the same data model — nothing here is a bolt-on integration.",
          variant: "dark",
          items: [
            {
              icon: Layers,
              title: "Unified Operations",
              text: "Manage rental, leasing, transportation, workshops, drivers and finance from one integrated platform.",
            },
            {
              icon: Zap,
              title: "Intelligent Automation",
              text: "Automate reservations, contracts, invoicing, renewals, approvals, maintenance scheduling and business workflows.",
            },
            {
              icon: Link2,
              title: "Open Integration Platform",
              text: "Connect with ERP, accounting, payment gateways, GPS providers, telematics, government and regulatory systems, CRM, HR and third-party applications through secure APIs.",
            },
            {
              icon: ChartColumn,
              title: "Real-Time Analytics",
              text: "Monitor KPIs, fleet utilization, revenue, profitability, maintenance costs and operational performance through interactive dashboards and AI-powered insights.",
            },
            {
              icon: Smartphone,
              title: "Mobile Workforce",
              text: "Native mobile applications for drivers, workshop technicians, field staff, delivery teams and managers.",
            },
            {
              icon: MapPin,
              title: "GPS Tracking & Geo-Fencing",
              text: "Track vehicle locations in real time, create geo-fenced operational zones, monitor route compliance and receive instant alerts.",
            },
            {
              icon: Lock,
              title: "Enterprise Security",
              text: "Role-based access control, audit trails, multi-factor authentication, encryption and compliance with enterprise security standards.",
            },
            {
              icon: Cloud,
              title: "Cloud & On-Premise Deployment",
              text: "Deploy on your preferred cloud infrastructure or in your own on-premise environment.",
              href: "/deployment",
              linkLabel: "See Deployment Options →",
            },
          ],
        },
        {
          eyebrow: "Architecture",
          title: "Structured for control, scale and integration",
          text: "FleetArabia connects users, operational teams, finance teams and enterprise systems through controlled digital workflows.",
          items: [
            {
              tag: "Layer 01",
              title: "Experience Layer",
              text: "Web portal, mobile access, customer touchpoints and branch operations.",
            },
            {
              tag: "Layer 02",
              title: "Operations Layer",
              text: "Reservations, agreements, fleet control, workshop and billing workflows.",
            },
            {
              tag: "Layer 03",
              title: "Enterprise Layer",
              text: "ERP and finance posting, GPS tracking, payments, APIs and analytics.",
            },
            {
              tag: "Layer 04",
              title: "Governance Layer",
              text: "Roles, approvals, audit controls, branch permissions and management visibility.",
            },
          ],
        },
        {
          eyebrow: "Enterprise Control",
          title: "Governance, visibility and operational discipline",
          text: "Approvals, user access, branch workflows, financial posting and operational reporting — all from a single connected platform.",
          variant: "teal",
          items: [
            { title: "Role-Based Access", text: "Control user permissions across branches, departments and business units." },
            { title: "Approval Workflows", text: "Manage operational, financial and exception approvals digitally." },
            { title: "Audit-Ready Transactions", text: "Improve compliance with controlled, traceable business processes." },
            { title: "Operational Dashboards", text: "Track business performance, utilization and workflow status." },
          ],
        },
      ]}
    />
    </>
  );
}