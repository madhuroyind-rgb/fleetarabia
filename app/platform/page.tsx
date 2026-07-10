import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";

export const metadata: Metadata = {
  title: "Platform | FleetArabia",
  description:
    "One platform underneath rental, leasing, maintenance, warehouse and billing — so operational and financial data are always the same numbers.",
  alternates: { canonical: "/platform" },
};

export default function PlatformPage() {
  return (
    <EnterprisePage
      eyebrow="FleetArabia Platform"
      title="Unified Operating Layer for"
      highlight="Mobility Businesses"
      description="Rental, leasing, maintenance, warehouse and billing running on one data model — so a change in one place doesn't need to be re-entered in three others."
      primaryCta={{ label: "Request Platform Demo", href: "/contact" }}
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
              tag: "01",
              title: "Unified Mobility Core",
              text: "One operating layer connecting rental, leasing, limousine, bus transportation, workshop and warehouse workflows.",
            },
            {
              tag: "02",
              title: "ERP-Connected Operations",
              text: "Designed to integrate operational transactions with Oracle ERP, finance, payments, GPS and external systems.",
            },
            {
              tag: "03",
              title: "Enterprise Controls",
              text: "Role-based workflows, approvals, branch visibility, audit controls and standardized business processes.",
            },
            {
              tag: "04",
              title: "Scalable Cloud Platform",
              text: "Built for multi-branch, multi-company and high-volume mobility businesses across the Middle East.",
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
              text: "Reservations, agreements, fleet control, workshop, warehouse and billing workflows.",
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