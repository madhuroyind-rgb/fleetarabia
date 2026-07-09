import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ConnectedVisual from "@/components/ConnectedVisual";

export const metadata: Metadata = {
  title: "Integrations | FleetArabia",
  description:
    "Oracle ERP, GPS tracking, payment gateways and regional toll/traffic-fine systems — connected to your rental, leasing, workshop and billing workflows instead of run as separate tools.",
  alternates: { canonical: "/integrations" },
};

const ecosystem = [
  {
    title: "Oracle ERP",
    text: "Connect rental, leasing, workshop, warehouse and billing transactions with enterprise finance processes.",
  },
  {
    title: "Finance Systems",
    text: "Support invoicing, customer accounts, payments, receipts, adjustments and posting requirements.",
  },
  {
    title: "GPS Tracking",
    text: "Connect vehicle location, availability, movement, utilization and operational status data.",
  },
  {
    title: "Payment Gateways",
    text: "Enable connected customer payment workflows for rental, leasing and corporate billing.",
  },
  {
    title: "API Layer",
    text: "Use secure APIs to connect external systems, booking channels and internal applications.",
  },
  {
    title: "Cloud Platforms",
    text: "Support scalable enterprise deployment, system connectivity and modern data exchange.",
  },
];

const transactionFlow = [
  "Reservation Created",
  "Agreement Approved",
  "Vehicle Assigned",
  "Charges Calculated",
  "Invoice Prepared",
  "ERP Posting Completed",
];

const controls = [
  {
    title: "Controlled Posting Flow",
    text: "Improve governance over what moves from operations to finance.",
  },
  {
    title: "Integration Audit Visibility",
    text: "Support traceability for connected operational and financial transactions.",
  },
  {
    title: "Branch and Company Mapping",
    text: "Align operational entities with ERP companies, branches and cost centers.",
  },
  {
    title: "Approval-Ready Transactions",
    text: "Prepare transactions for finance review before posting.",
  },
];

const gccIntegrations = [
  {
    title: "Salik Toll Gate Integration",
    description: "Automate UAE toll calculations by pulling toll gate transactions and posting them directly to active rental agreements or corporate lease billing cycles.",
    badge: "UAE",
  },
  {
    title: "GCC Traffic Fine Automation",
    description: "Connect with Dubai Police, Abu Dhabi Police, and SAAHER (Saudi Arabia) portals to retrieve traffic violation tickets and charge customer cards instantly.",
    badge: "UAE & KSA",
  },
  {
    title: "TAMM & ELM Vehicle Permits",
    description: "Query transport authorities (TAMM in Abu Dhabi, ELM/Tamm in KSA) for instant vehicle permits, driver authorization cards, and border crossing permits.",
    badge: "KSA & UAE",
  },
  {
    title: "Mada, KNET & Benefit Payment Rails",
    description: "Direct connectivity to local GCC debit card networks like Mada (Saudi Arabia), KNET (Kuwait), Benefit (Bahrain), and NAPS (Qatar).",
    badge: "GCC Wide",
  },
  {
    title: "Local GPS Gateways (SecurePath/WASL)",
    description: "Ensure complete regulatory compliance by feeding real-time location metrics to local tracking authorities (SecurePath in Dubai, Shahin in Abu Dhabi, WASL in Saudi Arabia).",
    badge: "Regulatory",
  },
  {
    title: "SATA & Border Transit Integrations",
    description: "Track customs clearances, GCC border crossing permits, and international fleet transits through connected logistics portals — no separate manual lookups.",
    badge: "Logistics",
  },
];


export default function IntegrationsPage() {
  return (
    <main className="fleet-teal-page bg-white text-slate-950">
      <PageHeader />
      <PageContent />
      <FinalCTA />
    </main>
  );
}

function PageHeader() {
  return (
    <section className="relative overflow-hidden bg-[#087674] px-6 py-16 text-white">
      <TealPattern />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 xl:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-100">
            ERP & Integration Fabric
          </p>

          <h1 className="mt-5 max-w-3xl text-3xl font-black leading-[1.12] tracking-tight md:text-5xl">
            Connect Mobility Operations with Enterprise Systems
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-cyan-50/90">
            Your rental, leasing, workshop and billing workflows don&apos;t need
            to live apart from your finance system. FleetArabia connects them
            to Oracle ERP, GPS tracking, payment gateways and the regional
            systems your operation already depends on.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-md bg-white px-7 py-3 text-xs font-black text-[#087674] shadow-xl shadow-black/10 transition hover:-translate-y-0.5"
            >
              Discuss Integration
            </a>

            <a
              href="/platform"
              className="rounded-md border border-white/30 px-7 py-3 text-xs font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#087674]"
            >
              View Platform
            </a>
          </div>

          <div className="mt-8 grid max-w-2xl gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
            {["Oracle ERP", "API Ready", "Finance Ready"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-200" />
                <span className="text-xs font-semibold text-cyan-50">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <IntegrationVisual />
        </Reveal>
      </div>
    </section>
  );
}

function PageContent() {
  return (
    <>
      <EcosystemSection />
      <TransactionFlowSection />
      <CapabilitiesSection />
      <GccSpotlightSection />
      <ControlSection />
    </>
  );
}

function TealPattern() {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),radial-gradient(circle_at_100%_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),linear-gradient(135deg,rgba(0,65,70,0.36),rgba(8,118,116,0.96))] bg-[size:130px_130px,130px_130px,cover]" />
  );
}

function IntegrationVisual() {
  const nodes = [
    { title: "Oracle ERP" },
    { title: "Finance" },
    { title: "GPS" },
    { title: "API Layer" },
  ];

  return (
    <div className="hidden min-w-0 justify-center overflow-hidden xl:flex">
      <ConnectedVisual nodes={nodes} size={460} centerLabel="F" centerSub="FleetArabia" />
    </div>
  );
}

function EcosystemSection() {
  return (
    <section className="relative overflow-hidden bg-[#087674] px-6 py-16 text-white">
      <TealPattern />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Integration Ecosystem"
          title="Connect the systems your business relies on"
          text="Keep operations, finance, fleet tracking and management reporting connected through secure integration workflows."
          light
          center
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index * 0.06, 0.24)}>
              <article className="h-full rounded-2xl border border-white/15 bg-white/10 p-6 shadow-xl shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
                <h3 className="text-base font-black">{item.title}</h3>
                <p className="mt-3 text-xs leading-6 text-cyan-50/85">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransactionFlowSection() {
  return (
    <section className="bg-slate-50 px-6 py-16 text-slate-950">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionHeader
              eyebrow="Transaction Flow"
              title="From operations to finance posting"
              text="Convert operational activity into clean, controlled and finance-ready transactions."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {transactionFlow.map((item, index) => (
              <Reveal key={item} delay={Math.min(index * 0.06, 0.24)}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-xs font-black text-blue-700">
                    Step {index + 1}
                  </div>
                  <div className="mt-3 text-sm font-black">{item}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section className="bg-white px-6 py-16 text-slate-950">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Integration Capabilities"
          title="Built for connected enterprise operations"
          text="FleetArabia helps reduce duplicate entry, improve financial control and keep enterprise systems aligned with daily mobility operations."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "ERP posting readiness",
            "Finance transaction mapping",
            "Customer and vehicle data sync",
            "GPS and fleet tracking integration",
            "Payment gateway connectivity",
            "API-based data exchange",
            "Operational reporting feeds",
            "Audit-ready transaction flow",
          ].map((item, index) => (
            <Reveal key={item} delay={Math.min(index * 0.05, 0.3)}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-black shadow-sm">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GccSpotlightSection() {
  return (
    <section className="bg-slate-50 px-6 py-16 text-slate-950">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="GCC Localization"
          title="Engineered for Middle East Mobility Ecosystems"
          text="Pre-built connectors to GCC government transport authorities, toll platforms, local payment networks, and compliance portals."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gccIntegrations.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index * 0.06, 0.3)}>
              <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
                    {item.badge}
                  </span>
                  <span className="text-xl text-blue-700">⚡</span>
                </div>
                <h3 className="mt-4 text-base font-black text-slate-900">{item.title}</h3>
                <p className="mt-3 text-xs leading-5 text-slate-600">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


function ControlSection() {
  return (
    <section className="bg-[#041124] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Enterprise Control"
          title="Secure, controlled and audit-ready integration"
          text="Manage approvals, mapping rules, transaction readiness and connected system touchpoints with enterprise discipline."
          light
          center
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {controls.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index * 0.06, 0.24)}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
                <h3 className="text-base font-black">{item.title}</h3>
                <p className="mt-3 text-xs leading-6 text-slate-300">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#087674] px-6 py-16 text-center text-white">
      <TealPattern />

      <Reveal className="relative mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100">
          Integration Discussion
        </p>

        <h2 className="mt-5 text-2xl font-black tracking-tight md:text-3xl">
          Ready to connect FleetArabia with your enterprise ecosystem?
        </h2>

        <p className="mt-5 text-sm leading-7 text-cyan-50/85">
          Discuss Oracle ERP, finance, GPS, payment gateway and API integration
          requirements with our enterprise mobility team.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="rounded-md bg-white px-8 py-3 text-xs font-black text-[#087674] transition hover:-translate-y-0.5"
          >
            Discuss Integration
          </a>
          <a
            href="/platform"
            className="rounded-md border border-white/30 px-8 py-3 text-xs font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#087674]"
          >
            View Platform
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto mb-12 max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`text-xs font-bold uppercase tracking-[0.24em] ${
          light ? "text-cyan-100" : "text-blue-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-4 text-2xl font-black tracking-tight md:text-3xl">
        {title}
      </h2>
      <p
        className={`mt-4 text-sm leading-7 ${
          light ? "text-cyan-50/85" : "text-slate-600"
        }`}
      >
        {text}
      </p>
    </Reveal>
  );
}