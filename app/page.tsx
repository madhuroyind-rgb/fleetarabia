import Link from "next/link";
import Reveal from "@/components/Reveal";
import ConnectedVisual from "@/components/ConnectedVisual";
import { slugify } from "@/lib/slug";
import { MODULE_CODES } from "@/lib/modules";

const outcomes = [
  {
    title: "Operational Control",
    text: "Standardize rental, leasing, dispatch and workshop workflows across branches.",
  },
  {
    title: "ERP-Ready Finance",
    text: "Connect billing, approvals, customer charges and financial posting with enterprise systems.",
  },
  {
    title: "Management Visibility",
    text: "Give leadership real-time insight into fleet status, utilization, revenue and performance.",
  },
];

const solutions = [
  {
    code: MODULE_CODES["Car Rental Management"],
    short: "Car Rental",
    title: "Car Rental Management",
    text: "Reservations, agreements, fleet availability, counter operations, billing and returns.",
  },
  {
    code: MODULE_CODES["Leasing Management"],
    short: "Leasing",
    title: "Leasing Management",
    text: "Lease contracts, corporate billing, renewals, installments, long-term agreements and lifecycle control.",
  },
  {
    code: MODULE_CODES["Chauffeur & Limousine"],
    short: "Limo & Chauffeur",
    title: "Chauffeur & Limousine",
    text: "Chauffeur allocation, dispatching, trip monitoring, bookings and premium service tracking.",
  },
  {
    code: MODULE_CODES["Bus Transportation"],
    short: "Bus Transport",
    title: "Bus Transportation",
    text: "Route planning, schedules, driver allocation, vehicle assignment and transport operations control.",
  },
  {
    code: MODULE_CODES["Workshop Management"],
    short: "Workshop",
    title: "Workshop Management",
    text: "Job cards, service schedules, preventive maintenance, technicians, approvals, repair tracking and AI-driven predictive maintenance alerts.",
  },
  {
    code: MODULE_CODES["Business Intelligence & Analytics"],
    short: "Analytics",
    title: "Business Intelligence & Analytics",
    text: "Real-time dashboards, utilization trends, revenue and fleet performance reporting across branches and business units.",
  },
  {
    code: MODULE_CODES["Vehicle Damage & Claims (VDR)"],
    short: "Damage & Claims",
    title: "Vehicle Damage & Claims (VDR)",
    text: "Digital inspection, damage photos, condition reports, customer charges, claims and repair follow-up.",
  },
  {
    code: MODULE_CODES["Billing & Revenue Management"],
    short: "Billing & Revenue",
    title: "Billing & Revenue Management",
    text: "Automate rental billing, corporate invoices, customer charges, approvals and ERP-ready financial handover.",
  },
  {
    code: MODULE_CODES["ERP Integration Platform"],
    short: "ERP Integration",
    title: "ERP Integration Platform",
    text: "Oracle ERP integration, finance system connectivity, APIs, implementation support and post-go-live assistance.",
  },
  {
    code: MODULE_CODES["GPS Tracking & Geo-Fencing"],
    short: "GPS Tracking",
    title: "GPS Tracking & Geo-Fencing",
    text: "Track vehicles in real time, define geo-fenced zones, receive movement alerts, monitor route compliance and improve fleet utilization.",
  },
  {
    code: MODULE_CODES["Driver Management"],
    short: "Driver Management",
    title: "Driver Management",
    text: "Driver profiles, license and document tracking, performance monitoring, trip assignment and compliance checks.",
  },
  {
    code: MODULE_CODES["Fuel Management"],
    short: "Fuel Management",
    title: "Fuel Management",
    text: "Fuel consumption tracking, fuel card integration, cost-per-vehicle reporting and consumption anomaly alerts.",
  },
  {
    code: MODULE_CODES["CRM & Customer Experience"],
    short: "CRM",
    title: "CRM & Customer Experience",
    text: "Manage leads, customer profiles, quotations, contracts, communications, service requests, digital agreements and customer feedback throughout the entire lifecycle.",
  },
];

const workflow = [
  "Booking",
  "Agreement",
  "Vehicle Handover",
  "Billing",
  "ERP Posting",
  "Reporting",
];

const integrations = [
  "Oracle ERP",
  "Finance Systems",
  "GPS Tracking",
  "Payment Gateways",
  "Open APIs",
  "Cloud Platform",
];

const industries = [
  "Car Rental",
  "Leasing",
  "Limousine",
  "Bus Transport",
  "Corporate Fleets",
  "Workshops",
  "Government Mobility",
];

export default function Home() {
  return (
    <main className="fleet-teal-page bg-[#087674] text-white">
      <Hero />
      <ExecutiveOutcomes />
      <Solutions />
      <Workflow />
      <Integrations />
      <Industries />
      <WhyFleetArabia />
      <CTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#087674]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),radial-gradient(circle_at_100%_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),linear-gradient(135deg,rgba(0,65,70,0.36),rgba(8,118,116,0.96))] bg-[size:130px_130px,130px_130px,cover]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:54px_54px]" />

      <div className="relative mx-auto grid min-h-[420px] max-w-7xl items-start gap-10 px-5 pb-10 pt-7 sm:px-6 md:pb-12 md:pt-9 xl:min-h-[500px] xl:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-cyan-50 sm:text-sm">
            For Rental, Leasing &amp; Fleet Operators
          </p>

          <h1 className="max-w-4xl text-3xl font-black leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl">
            Enterprise Mobility Platform for Fleet Operations{" "}
            <span className="bg-gradient-to-r from-cyan-200 to-cyan-300 bg-clip-text text-transparent">Across the Middle East</span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-cyan-50 sm:text-base md:mt-6 md:text-lg md:leading-8">
            FleetArabia replaces spreadsheets and disconnected systems with one platform for rental, leasing, chauffeur, bus, workshop and fleet operations — connected to your finance system, with real-time dashboards for the people running the business.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact#demo-form"
              className="inline-flex justify-center rounded-md bg-white px-7 py-3 text-sm font-black text-[#087674] shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              Book a Demo →
            </Link>

            <Link
              href="/solutions"
              className="inline-flex justify-center rounded-md border border-white/30 px-7 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#087674]"
            >
              Explore Solutions →
            </Link>
          </div>

          <div className="mt-8 grid max-w-2xl gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            {['Rental & Leasing Operations', 'ERP & Billing Integration', 'Fleet Lifecycle Visibility'].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/50 text-cyan-300">
                    ✓
                  </span>
                  <span className="text-sm text-cyan-50">{item}</span>
                </div>
              )
            )}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <PremiumHeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

function PremiumHeroVisual() {
  const productNodes = solutions.map((item) => ({ code: item.code, title: item.short }));

  return (
    <div className="hidden min-w-0 justify-center overflow-hidden xl:flex">
      <ConnectedVisual
        nodes={productNodes}
        size={560}
        centerLabel="F"
        centerSub="FleetArabia"
        topLabel="Connected Fleet Operations"
        bottomLabel="Automate • Integrate • Control"
      />
    </div>
  );
}

function ExecutiveOutcomes() {
  return (
    <section className="bg-[#087674] px-5 py-10 sm:px-6 md:py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-50">
            Executive Outcomes
          </p>
          <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">
            Made for the people running the business
          </h2>
          <p className="mt-5 leading-8 text-cyan-50">
            Owners who need visibility, operations leaders who need control,
            and finance teams who need clean numbers at close.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group min-h-[260px] rounded-3xl border border-white/20 bg-white p-8 text-slate-950 shadow-2xl shadow-black/10 transition duration-300 hover:-translate-y-2 hover:shadow-black/20">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#087674] text-sm font-black text-white transition group-hover:scale-110">
                  0{index + 1}
                </div>
                <h3 className="mt-7 text-2xl font-black tracking-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section className="bg-[#087674] px-5 py-10 sm:px-6 md:py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-50">
            Our Product Portfolio
          </p>
          <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">
            Thirteen modules. One connected platform.
          </h2>
          <p className="mt-5 leading-8 text-cyan-50">
            Run every module on its own, or plug in the ones you need and let
            them share the same data — no double entry, no reconciling
            spreadsheets at month end.
          </p>
        </Reveal>

        {/* Flex rather than grid so the 13th card is centred, not orphaned left. */}
        <div className="flex flex-wrap justify-center gap-5">
          {solutions.map((item, index) => (
            <Reveal
              key={item.title}
              delay={Math.min(index * 0.05, 0.3)}
              className="w-full md:w-[calc(50%-10px)] xl:w-[calc(25%-15px)]"
            >
              <article className="group flex h-full min-h-[230px] flex-col rounded-3xl border border-white/20 bg-white p-7 text-slate-950 shadow-2xl shadow-black/10 transition duration-300 hover:-translate-y-2 hover:shadow-black/20">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-black text-[#087674] ring-1 ring-cyan-100 transition group-hover:bg-[#087674] group-hover:text-white">
                  {item.code}
                </div>
                <h3 className="text-xl font-black tracking-tight">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{item.text}</p>
                <Link
                  href={`/solutions#${slugify(item.title)}`}
                  aria-label={`Learn more about ${item.title}`}
                  className="mt-6 inline-flex items-center text-sm font-black text-[#087674] transition group-hover:translate-x-1"
                >
                  Learn More →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="bg-[#087674] px-5 py-10 sm:px-6 md:py-12 text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/15 bg-white p-6 text-slate-950 shadow-2xl shadow-black/10 md:p-8 lg:grid-cols-[0.75fr_1.25fr]">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#087674]">
            Enterprise Workflow
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight">
            From booking to ERP posting
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Build a connected digital process across front office, operations,
            finance and management reporting.
          </p>
          <Link
            href="/platform"
            className="mt-7 inline-flex rounded-md border border-[#087674] px-7 py-3 text-sm font-black text-[#087674] transition hover:bg-[#087674] hover:text-white"
          >
            Explore Platform →
          </Link>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workflow.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="rounded-2xl border border-white/20 bg-[#087674] p-6 text-white">
                <div className="text-sm font-black text-cyan-100">
                  Step {index + 1}
                </div>
                <div className="mt-3 text-xl font-black">{item}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section className="relative overflow-hidden bg-[#087674] px-5 py-10 sm:px-6 md:py-12 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),radial-gradient(circle_at_100%_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),linear-gradient(135deg,rgba(0,65,70,0.32),rgba(8,118,116,0.96))] bg-[size:130px_130px,130px_130px,cover]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-50">
            ERP & Integration Fabric
          </p>
          <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">
            Talks to the systems you already run
          </h2>
          <p className="mt-5 leading-8 text-cyan-50">
            Pre-built connectors and APIs help integrate mobility operations
            with Oracle ERP, finance systems, GPS tracking, payment gateways and
            cloud platforms.
          </p>

          <Link
            href="/integrations"
            className="mt-8 inline-flex rounded-md bg-white px-7 py-3 text-sm font-black text-[#087674] transition hover:-translate-y-0.5 hover:bg-cyan-50"
          >
            Explore Integrations →
          </Link>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item, index) => (
            <Reveal key={item} delay={Math.min(index * 0.06, 0.3)}>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-8 text-center text-sm font-black text-white shadow-2xl shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/15">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="bg-[#087674] px-5 py-10 sm:px-6 md:py-12 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-50">
            Industries
          </p>
          <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">
            Industries We Serve
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-7">
          {industries.map((item, index) => (
            <Reveal key={item} delay={Math.min(index * 0.05, 0.3)}>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-sm font-black text-white shadow-lg shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/15">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyFleetArabia() {
  const reasons = [
    { title: "Middle East Domain Expertise", text: "Built around how rental, leasing, limousine, bus transportation and workshop operations actually run in this region — not adapted from a generic template." },
    { title: "ERP-Connected Operations", text: "Billing, approvals and customer charges post cleanly to your finance system instead of getting re-keyed by hand." },
    { title: "End-to-End Fleet Lifecycle", text: "One flow from booking through agreement, dispatch, maintenance and reporting, instead of five disconnected tools." },
    { title: "Implementation Support", text: "Hands-on help with process mapping, data migration, integration planning, training and rollout — not just a login and a manual." },
  ];

  return (
    <section className="bg-[#087674] px-5 py-10 text-white sm:px-6 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-50">Why FleetArabia</p>
          <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">Built by people who know fleet operations</h2>
          <p className="mt-5 leading-8 text-cyan-50">Domain knowledge of how mobility businesses actually operate, the integration depth to connect with your finance systems, and hands-on support to get there.</p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index * 0.06, 0.24)}>
              <article className="group h-full rounded-3xl border border-white/15 bg-white/10 p-7 shadow-2xl shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/15">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#087674] transition group-hover:scale-110">0{index + 1}</div>
                <h3 className="text-xl font-black tracking-tight text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cyan-50">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#087674] px-5 py-12 text-center text-white sm:px-6 md:py-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.22),transparent_45%)]" />

      <Reveal className="relative mx-auto max-w-4xl rounded-[2rem] border border-white/15 bg-white/10 px-6 py-10 shadow-2xl shadow-black/10 backdrop-blur">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-50">
          Start the Conversation
        </p>
        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
          Ready to modernize your fleet operations?
        </h2>
        <p className="mt-5 text-base leading-8 text-cyan-50 md:text-lg">
          Tell us how your operation runs today, and we&apos;ll show you what it looks like connected end to end.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact#demo-form"
            className="inline-flex justify-center rounded-md bg-white px-7 py-3 text-sm font-black text-[#087674] transition hover:-translate-y-0.5 hover:bg-cyan-50"
          >
            Book a Demo →
          </Link>
          <a
            href="mailto:info@fleetarabia.com"
            className="inline-flex justify-center rounded-md border border-white/40 px-8 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#087674]"
          >
            Contact Sales
          </a>
        </div>
      </Reveal>
    </section>
  );
}


