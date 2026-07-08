import EnterprisePage from "@/components/EnterprisePage";

export default function ResourcesPage() {
  return (
    <EnterprisePage
      eyebrow="Resources"
      title="Insights for"
      highlight="Mobility Transformation"
      description="Explore FleetArabia resources covering fleet ERP, rent a car software, leasing automation, transportation, ERP integration, workshop management, warehouse control, and fleet lifecycle transformation."
      primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
      secondaryCta={{ label: "View Solutions", href: "/solutions" }}
      proofPoints={["Guides", "Case Studies", "Documentation"]}
      visualItems={["Insights", "Guides", "Cases", "Docs"]}
      sections={[
        {
          eyebrow: "Resource Center",
          title: "Knowledge for enterprise mobility teams",
          text: "Use these resources to plan digital transformation, ERP integration, automation, and operational improvement across your fleet business.",
          items: [
            { title: "Fleet Digital Transformation Guide", text: "Understand how to modernize rental, leasing, transportation, workshop, and fleet operations." },
            { title: "ERP Integration Checklist", text: "Plan how fleet operations should connect with finance, Oracle ERP, payment gateways, GPS, and enterprise systems." },
            { title: "Rental & Leasing Automation", text: "Learn how to improve bookings, agreements, billing, renewals, replacement vehicles, and fleet control." },
            { title: "Workshop Digitization", text: "Explore job cards, maintenance tracking, spare parts, vehicle readiness, and warehouse control best practices." },
            { title: "Vehicle Damage Control", text: "Digitize vehicle inspection, damage photos, condition reporting, repair follow-up, and customer approval workflows." },
            { title: "Management Reporting", text: "Improve leadership visibility across utilization, revenue, agreements, maintenance, receivables, and operations." },
            { title: "Implementation Planning", text: "Prepare branches, users, master data, workflows, data migration, UAT, training, and go-live activities." },
            { title: "Customer Success", text: "Understand how continuous improvement, support, and user adoption help maximize long-term business value." },
          ],
        },
        {
          eyebrow: "Knowledge Hub",
          title: "Case studies, blogs and product documentation",
          text: "FleetArabia resources help business leaders, IT teams, finance teams, and operations teams understand how to improve mobility operations.",
          variant: "dark",
          items: [
            { title: "Blogs", text: "Articles on rental, leasing, fleet, transportation, workshop, warehouse, and ERP transformation." },
            { title: "Case Studies", text: "Customer success stories covering enterprise implementation, process automation, and measurable operational improvements." },
            { title: "Product Notes", text: "Updates about FleetArabia modules, new features, integrations, enhancements, and platform improvements." },
            { title: "Documentation", text: "Guides for users, admins, integrations, platform setup, reporting, workflows, and configuration." },
          ],
        },
      ]}
      finalCtaTitle="Ready to modernize your fleet operations?"
      finalCtaText="Explore FleetArabia solutions or speak with our team to plan your rental, leasing, workshop, transportation, warehouse, and ERP integration roadmap."
    />
  );
}