import EnterprisePage from "@/components/EnterprisePage";

export default function SolutionsPage() {
  return (
    <EnterprisePage
      eyebrow="Solution Portfolio"
      title="Enterprise Software for"
      highlight="Mobility Operations"
      description="FleetArabia provides business solutions for car rental, leasing, limousine, bus transportation, workshop, warehouse, vehicle damage control and ERP integration."
      primaryCta={{ label: "Discuss Solutions", href: "/contact" }}
      secondaryCta={{ label: "Explore Platform", href: "/platform" }}
      proofPoints={["Rental & Leasing", "Workshop & Warehouse", "ERP Integration"]}
      visualItems={["Rental", "Leasing", "Workshop", "Billing"]}
      sections={[
        {
          eyebrow: "Core Solutions",
          title: "Run your complete mobility business from one ecosystem",
          text: "Each solution is designed to support enterprise workflows, operational control and digital transformation.",
          items: [
            { tag: "CR", title: "Car Rental Management", text: "Reservations, agreements, fleet availability, counter operations, billing and returns." },
            { tag: "RL", title: "Rental & Leasing", text: "Lease contracts, corporate billing, renewals, installments and vehicle lifecycle control." },
            { tag: "LC", title: "Limo & Chauffeur", text: "Chauffeur allocation, dispatching, trip monitoring, bookings and service tracking." },
            { tag: "BT", title: "Bus Transportation", text: "Route planning, schedules, driver allocation, vehicle assignment and operations control." },
            { tag: "WM", title: "Workshop Management", text: "Job cards, service schedules, preventive maintenance, technicians and spare parts." },
            { tag: "WH", title: "Warehouse Management", text: "Inventory, barcode tracking, parts movement, stock visibility and warehouse control." },
            { tag: "VD", title: "Vehicle Damage Tool", text: "Digital inspection, damage photos, condition reports, claims and repair follow-up." },
            { tag: "EI", title: "ERP Integration Tools", text: "Oracle ERP, finance systems, GPS tracking, payment gateway and third-party APIs." },
          ],
        },
        {
          eyebrow: "Business Value",
          title: "Built for enterprise outcomes",
          text: "FleetArabia helps organizations reduce manual work, improve control and connect operations to finance.",
          variant: "dark",
          items: [
            { title: "Operational Automation", text: "Digitize reservations, agreements, dispatch, workshop and warehouse processes." },
            { title: "Billing Accuracy", text: "Control customer charges, invoices, adjustments and corporate billing." },
            { title: "Fleet Visibility", text: "Track vehicle availability, utilization, status and lifecycle movement." },
            { title: "ERP Readiness", text: "Prepare operational transactions for finance and ERP posting." },
          ],
        },
      ]}
    />
  );
}