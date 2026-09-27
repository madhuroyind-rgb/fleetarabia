import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageOpenGraph } from "@/lib/seo";
import GuidePage from "@/components/GuidePage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "ERP Integration Checklist | FleetArabia",
  description:
    "A practical checklist for bringing fleet operations and finance together: process mapping, master data, what to connect, approvals and month-end testing.",
  alternates: { canonical: "/resources/erp-integration-checklist" },
  openGraph: pageOpenGraph("/resources/erp-integration-checklist"),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ERP Integration Checklist",
  description:
    "A practical checklist for bringing fleet operations and finance together: process mapping, master data, what to connect, approvals and month-end testing.",
  datePublished: "2026-07-09",
  dateModified: "2026-09-27",
  image: `${SITE_URL}/opengraph-image`,
  author: { "@type": "Organization", name: "FleetArabia", url: SITE_URL },
  publisher: { "@type": "Organization", name: "FleetArabia" },
  mainEntityOfPage: `${SITE_URL}/resources/erp-integration-checklist`,
};

export default function ErpIntegrationChecklistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <JsonLd data={breadcrumbJsonLd("/resources/erp-integration-checklist")} />
      <GuidePage
      eyebrow="Resource Guide"
      title="ERP Integration Checklist"
      intro="A practical starting point for bringing rental, leasing and workshop operations and finance together, whether finance moves into one system straight away or an existing accounting system runs alongside it for a while."
    >
      <p>
        Many fleet and mobility businesses run operations in one system and finance in
        another, with someone re-keying data between the two. Bringing them together
        removes that step — but only if it&apos;s planned properly. FleetArabia includes
        the ledger itself; during a move, some businesses keep their current accounting
        system running for a while. Either way, this checklist covers the areas worth
        thinking through before the work starts.
      </p>

      <div>
        <h2 className="text-base font-black text-slate-900">1. Map your current process first</h2>
        <p className="mt-2">
          Before connecting any systems, document how a transaction actually flows today
          — from booking or agreement, through to invoice, through to the entry your
          finance team makes in the accounts. Most integration problems trace back to gaps in
          this mapping, not the technical connection itself.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">2. Get your master data in order</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Chart of accounts — which operational transactions map to which GL codes?</li>
          <li>Customer master — one source of truth, not separate customer lists per system.</li>
          <li>Vehicle/asset master — consistent vehicle IDs across operations and finance.</li>
          <li>Branch and cost center mapping — how do operational branches map to finance entities?</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">3. Decide what actually needs to integrate</h2>
        <p className="mt-2">
          Not everything has to move at the same moment. Typical candidates: invoice and
          billing postings, customer receipts and vehicle/asset data. Scheduled transfers
          are often good enough for reporting-only data; timing matters most for billing
          and receipts.
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
    </>
  );
}
