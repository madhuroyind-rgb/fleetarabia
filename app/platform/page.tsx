import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";

export const metadata: Metadata = {
  title: "Platform | FleetArabia",
  description:
    "One platform underneath rental, leasing, maintenance and billing — so operational and financial data are always the same numbers.",
  alternates: { canonical: "/platform" },
};

export default function PlatformPage() {
  return (
    <EnterprisePage
      eyebrow="FleetArabia Platform"
      title="Unified Operating Layer for"
      highlight="Mobility Businesses"
      description="Rental, leasing, maintenance and billing running on one data model — so a change in one place doesn't need to be re-entered in three others."
      primaryCta={{ label: "Request Platform Demo", href: "/contact#demo-form" }}
      secondaryCta={{ label: "View Solutions", href: "/solutions" }}
      proofPoints={["Cloud Ready", "ERP Integrated", "Enterprise Secure"]}
      visualItems={["Rental", "Fleet", "Workshop", "ERP"]}
      sections={[
        {
          eyebrow: "Platform at a Glance",
          title: "Built for enterprise mobility operations",
          text: "Everything below runs on the same data model — nothing here is a bolt-on integration.",
          variant: "dark",
          items: [
            {
              tag: "🚀",
              title: "Unified Operations",
              text: "Manage rental, leasing, transportation, workshops, drivers and finance from one integrated platform.",
            },
            {
              tag: "⚡",
              title: "Intelligent Automation",
              text: "Automate reservations, contracts, invoicing, renewals, approvals, maintenance scheduling and business workflows.",
            },
            {
              tag: "🔗",
              title: "Open Integration Platform",
              text: "Connect with ERP, accounting, payment gateways, GPS providers, telematics, government and regulatory systems, CRM, HR and third-party applications through secure APIs.",
            },
            {
              tag: "📊",
              title: "Real-Time Analytics",
              text: "Monitor KPIs, fleet utilization, revenue, profitability, maintenance costs and operational performance through interactive dashboards and AI-powered insights.",
            },
            {
              tag: "📱",
              title: "Mobile Workforce",
              text: "Native mobile applications for drivers, workshop technicians, field staff, delivery teams and managers.",
            },
            {
              tag: "📍",
              title: "GPS Tracking & Geo-Fencing",
              text: "Track vehicle locations in real time, create geo-fenced operational zones, monitor route compliance and receive instant alerts.",
            },
            {
              tag: "🔒",
              title: "Enterprise Security",
              text: "Role-based access control, audit trails, multi-factor authentication, encryption and compliance with enterprise security standards.",
            },
            {
              tag: "☁️",
              title: "Cloud & On-Premise Deployment",
              text: "Deploy on your preferred cloud infrastructure or on-premise environment with enterprise scalability and high availability.",
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
              text: "Oracle ERP, finance posting, GPS tracking, payments, APIs and analytics.",
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
  );
}