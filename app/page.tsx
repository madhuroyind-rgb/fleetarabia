import Reveal from "@/components/Reveal";
import ConnectedVisual from "@/components/ConnectedVisual";

const outcomes = [
  {
    title: "Operational Control",
    text: "Standardize rental, leasing, dispatch, workshop and warehouse workflows across branches.",
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
    code: "CR",
    title: "Car Rental Management",
    text: "Reservations, agreements, fleet availability, counter operations, billing and returns.",
  },
  {
    code: "RL",
    title: "Rental & Leasing Management",
    text: "Lease contracts, corporate billing, renewals, installments, long-term agreements and lifecycle control.",
  },
  {
    code: "LC",
    title: "Limousine & Chauffeur Operations",
    text: "Chauffeur allocation, dispatching, trip monitoring, bookings and premium service tracking.",
  },
  {
    code: "BT",
    title: "Bus Transportation Management",
    text: "Route planning, schedules, driver allocation, vehicle assignment and transport operations control.",
  },
  {
    code: "WM",
    title: "Workshop Management",
    text: "Job cards, service schedules, preventive maintenance, technicians, approvals and repair tracking.",
  },
  {
    code: "WH",
    title: "Warehouse & Spare Parts Management",
    text: "Inventory, barcode tracking, parts movement, stock visibility and spare parts warehouse control.",
  },
  {
    code: "VD",
    title: "Damage Inspection & Claims Tool",
    text: "Digital inspection, damage photos, condition reports, customer charges, claims and repair follow-up.",
  },
  {
    code: "BI",
    title: "Billing & Invoice Automation",
    text: "Automate rental billing, corporate invoices, customer charges, approvals and ERP-ready financial handover.",
  },
  {
    code: "ES",
    title: "ERP Integration & Support Services",
    text: "Oracle ERP integration, finance system connectivity, APIs, implementation support and post-go-live assistance.",
  },
  {
    code: "HR",
    title: "HRMS & Payroll Management",
    text: "Employee records, attendance, leave management, payroll processing and workforce compliance for operations and workshop staff.",
  },
  {
    code: "DM",
    title: "Driver Management",
    text: "Driver profiles, license and document tracking, performance monitoring, trip assignment and compliance checks.",
  },
  {
    code: "FM",
    title: "Fuel Management",
    text: "Fuel consumption tracking, fuel card integration, cost-per-vehicle reporting and consumption anomaly alerts.",
  },
  {
    code: "DL",
    title: "Dealer Management",
    text: "Dealer and franchise network operations, branch performance, commission tracking and territory management.",
  },
];

const workflow = [
  "Booking",
  "Agreement",
  "Car Rental",
  "Billing",
  "ERP Posting",
  "Reporting",
];

const integrations = [
  "Oracle ERP",
  "Finance Systems",
  "GPS Tracking",
  "Payment Gateway",
  "ERP Integration",
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
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Across the Middle East</span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-cyan-50 sm:text-base md:mt-6 md:text-lg md:leading-8">
            FleetArabia replaces spreadsheets and disconnected tools with one operating system for rental, leasing, limousine, bus transportation, workshop and warehouse businesses. Bookings, billing and maintenance stay in sync with your ERP — so your team spends less time reconciling and more time running the business.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="/contact"
              className="inline-flex justify-center rounded-md bg-white px-7 py-3 text-sm font-black text-[#087674] shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              Talk to Us →
            </a>

            <a
              href="/solutions"
              className="inline-flex justify-center rounded-md border border-white/25 px-7 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
            >
              Explore Solutions →
            </a>
          </div>

          <div className="mt-8 grid max-w-2xl gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            {['Rental & Leasing Operations', 'ERP & Billing Integration', 'Fleet Lifecycle Visibility'].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/50 text-cyan-300">
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
  const productNodes = [
    { code: "CR", title: "Car Rental" },
    { code: "RL", title: "Rental & Leasing" },
    { code: "LC", title: "Limo & Chauffeur" },
    { code: "BT", title: "Bus Transport" },
    { code: "WM", title: "Workshop" },
    { code: "WH", title: "Warehouse" },
    { code: "VD", title: "Damage & Claims" },
    { code: "BI", title: "Billing Automation" },
    { code: "ES", title: "ERP Support" },
    { code: "HR", title: "HR & Payroll" },
    { code: "DM", title: "Driver Management" },
    { code: "FM", title: "Fuel Management" },
    { code: "DL", title: "Dealer Management" },
  ];

  return (
    <div className="hidden min-w-0 justify-center overflow-hidden xl:flex">
      <ConnectedVisual
        nodes={productNodes}
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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index * 0.05, 0.3)}>
              <article className="group flex min-h-[230px] flex-col rounded-3xl border border-white/20 bg-white p-7 text-slate-950 shadow-2xl shadow-black/10 transition duration-300 hover:-translate-y-2 hover:shadow-black/20">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-black text-[#087674] ring-1 ring-cyan-100 transition group-hover:bg-[#087674] group-hover:text-white">
                  {item.code}
                </div>
                <h3 className="text-xl font-black tracking-tight">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{item.text}</p>
                <a
                  href="/solutions"
                  className="mt-6 inline-flex items-center text-sm font-black text-[#087674] transition group-hover:translate-x-1"
                >
                  Learn More →
                </a>
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
          <a
            href="/platform"
            className="mt-7 inline-flex rounded-md border border-[#087674] px-7 py-3 text-sm font-black text-[#087674] transition hover:bg-[#087674] hover:text-white"
          >
            Explore Platform →
          </a>
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

          <a
            href="/integrations"
            className="mt-8 inline-flex rounded-md bg-white px-8 py-4 text-sm font-black text-[#087674] transition hover:-translate-y-0.5 hover:bg-cyan-50"
          >
            Explore Integrations →
          </a>
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
          <a
            href="/contact"
            className="inline-flex justify-center rounded-md bg-white px-8 py-3 text-sm font-black text-[#087674] transition hover:-translate-y-0.5 hover:bg-cyan-50"
          >
            Book a Demo
          </a>
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


