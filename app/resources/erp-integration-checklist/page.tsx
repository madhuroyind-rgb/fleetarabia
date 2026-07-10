import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";

export const metadata: Metadata = {
  title: "ERP Integration Checklist | FleetArabia",
  description:
    "A practical checklist for planning how fleet operations should connect to Oracle ERP, finance, GPS, and payment systems.",
  alternates: { canonical: "/resources/erp-integration-checklist" },
};

export default function ErpIntegrationChecklistPage() {
  return (
    <GuidePage
      eyebrow="Resource Guide"
      title="ERP Integration Checklist"
      intro="A practical starting point for planning how rental, leasing, workshop and warehouse operations should connect to your ERP and other enterprise systems."
    >
      <p>
        Most fleet and mobility businesses run operations in one system and finance in
        another, with someone re-keying data between the two. Integration removes that
        step — but only if it&apos;s planned properly. This checklist covers the areas
        worth thinking through before any integration work starts.
      </p>

      <div>
        <h2 className="text-base font-black text-slate-900">1. Map your current process first</h2>
        <p className="mt-2">
          Before connecting any systems, document how a transaction actually flows today
          — from booking or agreement, through to invoice, through to the entry your
          finance team makes in the ERP. Most integration problems trace back to gaps in
          this mapping, not the technical connection itself.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">2. Get your master data in order</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Chart of accounts — which operational transactions map to which GL codes?</li>
          <li>Customer master — one source of truth, not separate customer lists per system.</li>
          <li>Vehicle/asset master — consistent vehicle IDs across operations and finance.</li>
          <li>Branch and cost center mapping — how do operational branches map to ERP entities?</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">3. Decide what actually needs to integrate</h2>
        <p className="mt-2">
          Not everything needs a real-time connection. Typical candidates: invoice and
          billing postings, customer payments and receipts, vehicle/asset data, and GPS
          or telematics feeds for utilization reporting. Batch/scheduled sync is often
          good enough for reporting-only data; real-time matters most for billing and
          payments.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">4. Plan approvals and controls</h2>
        <p className="mt-2">
          Decide what needs human approval before it posts to finance (e.g. credit notes,
          discounts, high-value adjustments) versus what can flow through automatically.
          Building this in from the start avoids a painful retrofit later.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">5. Test with real transaction volume</h2>
        <p className="mt-2">
          Run a full month-end cycle in a test environment before go-live, not just a
          handful of sample transactions. Reconciliation issues usually only show up at
          volume.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Common pitfalls</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Starting integration work before master data is clean.</li>
          <li>No agreed owner on either side (operations vs. finance) when something breaks.</li>
          <li>Treating go-live as the finish line instead of month one of monitoring.</li>
        </ul>
      </div>
    </GuidePage>
  );
}
