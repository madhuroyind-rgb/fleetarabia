import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ConnectedVisual from "@/components/ConnectedVisual";

export const metadata: Metadata = {
  title: "Integrations | FleetArabia",
  description:
    "FleetArabia connects your mobility operations with finance, banking, telematics, payment gateways, government platforms, CRM, HR and third-party applications through a secure, API-first framework.",
  alternates: { canonical: "/integrations" },
};

const ecosystem = [
  {
    title: "ERP & Financial Systems",
    text: "Synchronize contracts, invoices, payments, receivables, taxation, journals and financial transactions with your existing accounting or ERP solution.",
  },
  {
    title: "Payment Gateways",
    text: "Support online payments, recurring billing, payment links, refunds, digital wallets and automated collections through leading payment providers.",
  },
  {
    title: "GPS Tracking & Geo-Fencing",
    text: "Connect GPS and telematics providers to monitor live vehicle locations, trip history, utilization, driver behavior, geo-fencing events and fleet performance.",
  },
  {
    title: "Government Services",
    text: "Integrate with traffic authorities, toll systems, parking platforms, identity verification, licensing authorities and other digital government services.",
  },
  {
    title: "CRM & Customer Platforms",
    text: "Connect websites, customer portals, mobile apps, call centers and CRM solutions to deliver a seamless customer experience.",
  },
  {
    title: "Open API Platform",
    text: "Use secure REST APIs and webhooks to integrate with booking engines, partner portals, HR systems, business applications and custom enterprise software.",
  },
  {
    title: "Business Intelligence & Analytics",
    text: "Stream operational and financial data into dashboards, reporting platforms, data warehouses and AI-powered analytics tools for better decision-making.",
  },
  {
    title: "Cloud & Enterprise Infrastructure",
    text: "Deploy on cloud or on-premises environments with enterprise-grade scalability, security, high availability and disaster recovery.",
  },
];

const supportedIntegrations = [
  "ERP & Accounting Systems",
  "Payment Gateways",
  "GPS & Telematics Providers",
  "Banking Systems",
  "Government Services",
  "CRM Platforms",
  "HR & Payroll Systems",
  "Business Intelligence Tools",
  "Customer Websites & Mobile Apps",
  "Fleet IoT Devices",
  "Digital Signature Platforms",
  "Document Management Systems",
];

const whyIntegration = [
  "API-First Architecture",
  "Real-Time Data Synchronization",
  "Event-Driven Workflows",
  "Secure Authentication & Encryption",
  "Enterprise-Grade Security",
  "Multi-Company & Multi-Branch Connectivity",
  "Scalable Cloud Architecture",
  "Low-Code Integration Framework",
  "Monitoring & Audit Logs",
  "High Availability & Performance",
];

const gccIntegrations = [
  {
    title: "Salik Toll Gate Integration",
    description: "Designed to automate UAE toll calculations by pulling toll gate transactions and posting them directly to active rental agreements or corporate lease billing cycles.",
    badge: "UAE",
  },
  {
    title: "GCC Traffic Fine Automation",
    description: "Built to connect with Dubai Police, Abu Dhabi Police, and SAAHER (Saudi Arabia) portals to retrieve traffic violation tickets and charge customer cards.",
    badge: "UAE & KSA",
  },
  {
    title: "TAMM & ELM Vehicle Permits",
    description: "Built to query transport authorities (TAMM in Abu Dhabi, ELM/Tamm in KSA) for vehicle permits, driver authorization cards, and border crossing permits.",
    badge: "KSA & UAE",
  },
  {
    title: "Mada, KNET & Benefit Payment Rails",
    description: "Designed for direct connectivity to local GCC debit card networks like Mada (Saudi Arabia), KNET (Kuwait), Benefit (Bahrain), and NAPS (Qatar).",
    badge: "GCC Wide",
  },
  {
    title: "Local GPS Gateways (SecurePath/WASL)",
    description: "Built to support regulatory compliance by feeding location metrics to local tracking authorities (SecurePath in Dubai, Shahin in Abu Dhabi, WASL in Saudi Arabia).",
    badge: "Regulatory",
  },
  {
    title: "SATA & Border Transit Integrations",
    description: "Designed to track customs clearances, GCC border crossing permits, and international fleet transits through connected logistics portals.",
    badge: "Logistics",
  },
];

export default function IntegrationsPage() {
  return (
    <main className="fleet-teal-page text-white">
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
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-50">
            Enterprise Integration Platform
          </p>

          <h1 className="mt-5 max-w-3xl text-3xl font-black leading-[1.12] tracking-tight md:text-5xl">
            Connect Your Mobility Business Without Limits
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-cyan-50">
            FleetArabia seamlessly connects your mobility operations with finance, banking,
            telematics, payment gateways, government platforms, CRM, HR and third-party
            applications through a secure, API-first integration framework. Eliminate manual
            data entry, automate business processes and keep every system synchronized in
            real time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact#demo-form"
              className="rounded-md bg-white px-7 py-3 text-xs font-black text-[#087674] shadow-xl shadow-black/10 transition hover:-translate-y-0.5"
            >
              Talk to an Integration Expert
            </a>

            <a
              href="/platform"
              className="rounded-md border border-white/30 px-7 py-3 text-xs font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#087674]"
            >
              Explore the Platform
            </a>
          </div>

          <div className="mt-8 grid max-w-2xl gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
            {["Open API Platform", "Real-Time Integration", "Enterprise Ready"].map((item) => (
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
      <PlatformIntegrationsSection />
      <GccSpotlightSection />
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
    { title: "ERP" },
    { title: "Payments" },
    { title: "GPS" },
    { title: "CRM" },
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
          title="Connect Every System That Powers Your Business"
          text="FleetArabia enables secure, real-time connectivity across your entire business ecosystem."
          light
          center
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ecosystem.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index * 0.06, 0.24)}>
              <article className="h-full rounded-2xl border border-white/15 bg-white/10 p-6 shadow-xl shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
                <h3 className="text-base font-black">{item.title}</h3>
                <p className="mt-3 text-xs leading-6 text-cyan-50">
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

function PlatformIntegrationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#087674] px-6 py-16 text-white">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Platform Integrations"
          title="Connect Once. Automate Everywhere."
          text="FleetArabia acts as the central integration hub between your business applications, fleet technologies and customer-facing systems."
          light
        />

        <div className="mt-10">
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-cyan-50">
            Supported Integrations
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportedIntegrations.map((item, index) => (
              <Reveal key={item} delay={Math.min(index * 0.05, 0.3)}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-sm font-black text-white shadow-sm">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-cyan-50">
            Why FleetArabia Integration?
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whyIntegration.map((item, index) => (
              <Reveal key={item} delay={Math.min(index * 0.05, 0.3)}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-sm font-black text-white shadow-sm">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GccSpotlightSection() {
  return (
    <section className="relative overflow-hidden bg-[#087674] px-6 py-16 text-white">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="GCC Localization"
          title="Engineered for Middle East Mobility Ecosystems"
          text="Integration pathways designed for GCC government transport authorities, toll platforms, local payment networks, and compliance portals."
          light
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gccIntegrations.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index * 0.06, 0.3)}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.09]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-black text-cyan-50">
                    {item.badge}
                  </span>
                  <span className="text-xl text-cyan-50">⚡</span>
                </div>
                <h3 className="mt-4 text-base font-black text-white">{item.title}</h3>
                <p className="mt-3 text-xs leading-5 text-cyan-50">
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

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#087674] px-6 py-16 text-center text-white">
      <TealPattern />

      <Reveal className="relative mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-50">
          Digital Connectivity
        </p>

        <h2 className="mt-5 text-2xl font-black tracking-tight md:text-3xl">
          One Connected Platform for Your Entire Mobility Business
        </h2>

        <p className="mt-5 text-sm leading-7 text-cyan-50">
          FleetArabia brings together operations, finance, vehicles, drivers, customers and
          partners into one connected ecosystem. By integrating every critical business
          system, you gain real-time visibility, automate workflows, improve operational
          efficiency and accelerate digital transformation. Integrate. Automate. Scale.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/contact#demo-form"
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
          light ? "text-cyan-50" : "text-blue-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-4 text-2xl font-black tracking-tight md:text-3xl">
        {title}
      </h2>
      <p
        className={`mt-4 text-sm leading-7 ${
          light ? "text-cyan-50" : "text-slate-600"
        }`}
      >
        {text}
      </p>
    </Reveal>
  );
}
