import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";

export const metadata: Metadata = {
  title: "Solutions | FleetArabia",
  description:
    "Software for car rental, leasing, limousine, bus transportation, workshop, warehouse, HR, driver and fuel management operations — built to connect with your ERP instead of sitting next to it.",
};

export default function SolutionsPage() {
  return (
    <EnterprisePage
      eyebrow="Solution Portfolio"
      title="Enterprise Software for"
      highlight="Mobility Operations"
      description="Twelve modules covering car rental, leasing, limousine, bus transportation, workshop, warehouse, HR, drivers and fuel — each one built to connect with your ERP instead of sitting next to it."
      primaryCta={{ label: "Discuss Solutions", href: "/contact" }}
      secondaryCta={{ label: "Explore Platform", href: "/platform" }}
      proofPoints={["Rental & Leasing", "Workshop & Warehouse", "ERP Integration"]}
      visualItems={["Rental", "Leasing", "Workshop", "Billing"]}
      sections={[
        {
          eyebrow: "Core Solutions",
          title: "Run your complete mobility business from one ecosystem",
          text: "Run any module standalone, or connect several — each one is built to work with the rest, not just alongside them.",
          items: [
            { tag: "CR", title: "Car Rental Management", text: "Reservations, agreements, fleet availability, counter operations, billing and returns." },
            { tag: "RL", title: "Rental & Leasing", text: "Lease contracts, corporate billing, renewals, installments and vehicle lifecycle control." },
            { tag: "LC", title: "Limo & Chauffeur", text: "Chauffeur allocation, dispatching, trip monitoring, bookings and service tracking." },
            { tag: "BT", title: "Bus Transportation", text: "Route planning, schedules, driver allocation, vehicle assignment and operations control." },
            { tag: "WM", title: "Workshop Management", text: "Job cards, service schedules, preventive maintenance, technicians and spare parts." },
            { tag: "WH", title: "Warehouse Management", text: "Inventory, barcode tracking, parts movement, stock visibility and warehouse control." },
            { tag: "VD", title: "Vehicle Damage Tool", text: "Digital inspection, damage photos, condition reports, claims and repair follow-up." },
            { tag: "BI", title: "Billing & Invoice Automation", text: "Rental billing, corporate invoices, customer charges, approvals and ERP-ready financial handover." },
            { tag: "EI", title: "ERP Integration Tools", text: "Oracle ERP, finance systems, GPS tracking, payment gateway and third-party APIs." },
            { tag: "HR", title: "HRMS & Payroll", text: "Employee records, attendance tracking, leave management, payroll processing and workforce compliance." },
            { tag: "DM", title: "Driver Management", text: "Driver profiles, license and document tracking, performance scoring, trip assignment and compliance monitoring." },
            { tag: "FM", title: "Fuel Management", text: "Fuel consumption tracking, fuel card integration, cost-per-vehicle reporting and consumption anomaly alerts." },
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