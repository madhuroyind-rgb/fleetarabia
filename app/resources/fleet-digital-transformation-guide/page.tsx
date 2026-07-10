import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";

export const metadata: Metadata = {
  title: "Fleet Digital Transformation Guide | FleetArabia",
  description:
    "A practical guide to modernizing rental, leasing, transportation and workshop operations — where to start and how to roll it out.",
  alternates: { canonical: "/resources/fleet-digital-transformation-guide" },
};

export default function FleetDigitalTransformationGuidePage() {
  return (
    <GuidePage
      eyebrow="Resource Guide"
      title="Fleet Digital Transformation Guide"
      intro="A practical starting point for moving rental, leasing, transportation, workshop and fleet operations off spreadsheets and onto one connected system."
    >
      <p>
        &quot;Digital transformation&quot; gets used as a vague buzzword a lot. For a
        fleet or mobility business, it usually means something specific: replacing
        spreadsheets, WhatsApp threads and disconnected tools with one system that
        operations, workshop and finance all trust. Here&apos;s a practical way to think
        about getting there.
      </p>

      <div>
        <h2 className="text-base font-black text-slate-900">Signs you&apos;re ready to move off spreadsheets</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Month-end close depends on manually reconciling multiple spreadsheets.</li>
          <li>Different branches or teams track the same information differently.</li>
          <li>Leadership can&apos;t get a same-day answer on fleet utilization or revenue.</li>
          <li>Billing errors or missed charges keep coming from manual data entry.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Start with one module, not everything at once</h2>
        <p className="mt-2">
          The businesses that struggle most with digital transformation try to fix
          everything simultaneously — rental, workshop, warehouse, HR and finance in one
          go. Pick the area causing the most pain today (often billing, or workshop job
          tracking), get it working well, and expand from there. A working single module
          beats a half-implemented full platform.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Build a rollout plan in phases</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li><strong>Discover</strong> — map current workflows, pain points and who owns what.</li>
          <li><strong>Design</strong> — define roles, approvals, data structure and reporting needs.</li>
          <li><strong>Migrate</strong> — move master data (vehicles, customers, contracts) cleanly.</li>
          <li><strong>Train</strong> — get the people actually doing the work comfortable before go-live, not after.</li>
          <li><strong>Go-live &amp; stabilize</strong> — expect a rough first few weeks; plan support time for it.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Plan for adoption, not just deployment</h2>
        <p className="mt-2">
          A system going live isn&apos;t the same as people actually using it. The
          rollouts that stick have a clear person on each team accountable for making
          the new process the default — not an optional alternative to the old
          spreadsheet.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">How to measure it&apos;s working</h2>
        <p className="mt-2">
          Track a small number of concrete numbers before and after: time to close the
          month, number of manual reconciliation entries, billing errors caught late,
          and how long it takes to answer &quot;what&apos;s our fleet utilization right
          now.&quot; If those improve, the transformation is working — regardless of how
          modern the interface looks.
        </p>
      </div>
    </GuidePage>
  );
}
