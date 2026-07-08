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

      <div className="relative mx-auto grid min-h-[420px] max-w-7xl items-start gap-10 px-5 pb-10 pt-7 sm:px-6 md:pb-12 md:pt-9 lg:min-h-[500px] lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-cyan-300 sm:text-sm">
            Enterprise Mobility Platform
          </p>

          <h1 className="max-w-4xl text-3xl font-black leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl">
            Enterprise Mobility Platform for Fleet Operations{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Across the Middle East</span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-cyan-50/90 sm:text-base md:mt-6 md:text-lg md:leading-8">
            FleetArabia helps car rental, leasing, limousine, bus transportation, workshop and warehouse businesses digitize daily operations, automate billing, connect ERP systems and manage the complete fleet lifecycle with real-time visibility.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="/contact"
              className="inline-flex justify-center rounded-md bg-white px-7 py-3 text-sm font-black text-[#087674] shadow-xl shadow-black/10 transition hover:bg-cyan-50"
            >
              Talk to Us →
            </a>

            <a
              href="/solutions"
              className="inline-flex justify-center rounded-md border border-white/25 px-7 py-3 text-sm font-black text-white transition hover:bg-white hover:text-slate-950"
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
                  <span className="text-sm text-cyan-50/85">{item}</span>
                </div>
              )
            )}
          </div>
        </div>

        <PremiumHeroVisual />
      </div>
    </section>
  );
}

function PremiumHeroVisual() {
  const aiProducts = [
    { code: "CR", title: "Car Rental", position: "left-0 top-10" },
    { code: "RL", title: "Rental and Leasing", position: "left-1/2 top-0 -translate-x-1/2" },
    { code: "LC", title: "Limo and Chauffeur", position: "right-0 top-10" },
    { code: "BT", title: "Bus Transport", position: "left-0 top-[190px]" },
    { code: "WM", title: "Workshop", position: "right-0 top-[190px]" },
    { code: "WH", title: "Warehouse", position: "left-0 bottom-10" },
    { code: "VD", title: "Damage and Claims", position: "left-[150px] bottom-0" },
    { code: "BI", title: "Billing Automation", position: "right-[150px] bottom-0" },
    { code: "ES", title: "ERP Support", position: "right-0 bottom-10" },
  ];

  return (
    <div className="relative hidden min-h-[520px] lg:block">
      <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute left-1/2 top-6 z-30 -translate-x-1/2 rounded-full border border-cyan-300/25 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-cyan-100 shadow-xl shadow-black/10 backdrop-blur">
        AI Powered Fleet Intelligence
      </div>

      <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25 bg-[radial-gradient(circle_at_35%_30%,rgba(34,211,238,0.30),rgba(37,99,235,0.18_38%,rgba(2,6,23,0.42)_76%)] shadow-[0_0_90px_rgba(37,99,235,0.28)]">
        <div className="absolute inset-8 rounded-full border border-cyan-300/20" />
        <div className="absolute inset-16 rounded-full border border-blue-400/20" />
        <div className="absolute inset-24 rounded-full border border-cyan-300/10" />
      </div>

      <div className="absolute left-1/2 top-1/2 h-[2px] w-[620px] -translate-x-1/2 -translate-y-1/2 rotate-12 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[2px] w-[620px] -translate-x-1/2 -translate-y-1/2 -rotate-12 bg-gradient-to-r from-transparent via-blue-400/35 to-transparent" />
      <div className="absolute bottom-24 left-1/2 h-40 w-[620px] -translate-x-1/2 rounded-[50%] border border-cyan-300/20" />
      <div className="absolute bottom-32 left-1/2 h-28 w-[500px] -translate-x-1/2 rounded-[50%] border border-blue-400/25" />

      <div className="absolute left-1/2 top-1/2 z-[20] flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] bg-gradient-to-r from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-400/25 ring-1 ring-white/20">
        <span className="text-5xl font-black text-white">AI</span>
        <span className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-50">
          Operations Brain
        </span>
      </div>

      {aiProducts.map((item) => (
        <article
          key={item.code}
          className={"absolute z-30 w-36 rounded-2xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/15 " + item.position}
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 text-xs font-black text-white shadow-lg shadow-cyan-400/20">
            {item.code}
          </div>
          <p className="text-xs font-black leading-4 text-cyan-50">{item.title}</p>
        </article>
      ))}

      <div className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] font-bold text-cyan-50 backdrop-blur">
        Predict • Automate • Integrate
      </div>
    </div>
  );
}

function ExecutiveOutcomes() {
  return (
    <section className="bg-[#087674] px-5 py-10 sm:px-6 md:py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
            Executive Outcomes
          </p>
          <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">
            Built for enterprise mobility leadership
          </h2>
          <p className="mt-5 leading-8 text-cyan-50/85">
            FleetArabia is designed for business owners, operations leaders,
            finance teams and technology teams who need control, automation and
            integration across the mobility lifecycle.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <article
              key={item.title}
              className="group min-h-[260px] rounded-3xl border border-white/20 bg-white p-8 text-slate-950 shadow-2xl shadow-black/10 transition duration-300 hover:-translate-y-2 hover:shadow-black/20"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#087674] text-sm font-black text-white transition group-hover:scale-110">
                0{index + 1}
              </div>
              <h3 className="mt-7 text-2xl font-black tracking-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
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
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
            Our Product Portfolio
          </p>
          <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">
            Complete mobility products for rental, leasing, transport and ERP-connected fleet businesses
          </h2>
          <p className="mt-5 leading-8 text-cyan-50/85">
            Connect rental, leasing, dispatch, workshop, warehouse, finance and
            ERP workflows into a unified enterprise platform.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((item) => (
            <article
              key={item.title}
              className="group flex min-h-[230px] flex-col rounded-3xl border border-white/20 bg-white p-7 text-slate-950 shadow-2xl shadow-black/10 transition duration-300 hover:-translate-y-2 hover:shadow-black/20"
            >
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
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#087674]">
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
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workflow.map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-white/20 bg-[#087674] p-6 text-white"
            >
              <div className="text-sm font-black text-cyan-100">
                Step {index + 1}
              </div>
              <div className="mt-3 text-xl font-black">{item}</div>
            </div>
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
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
            ERP & Integration Fabric
          </p>
          <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">
            Seamless connectivity with enterprise systems
          </h2>
          <p className="mt-5 leading-8 text-cyan-50/85">
            Pre-built connectors and APIs help integrate mobility operations
            with Oracle ERP, finance systems, GPS tracking, payment gateways and
            cloud platforms.
          </p>

          <a
            href="/integrations"
            className="mt-8 inline-flex rounded-md bg-white px-8 py-4 text-sm font-black text-[#087674]"
          >
            Explore Integrations →
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/15 bg-white/10 p-8 text-center text-sm font-black text-white shadow-2xl shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/15"
            >
              {item}
            </div>
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
        <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
          Industries
        </p>
        <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">
          Industries We Serve
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-7">
          {industries.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/15 bg-white/10 p-6 text-sm font-black text-white shadow-lg shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/15"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyFleetArabia() {
  const reasons = [
    { title: "Middle East Domain Expertise", text: "Built around regional rental, leasing, limousine, bus transportation, workshop and enterprise fleet operations." },
    { title: "ERP-Connected Operations", text: "Connect billing, approvals, customer charges, financial posting and operational workflows with ERP and finance systems." },
    { title: "End-to-End Fleet Lifecycle", text: "Manage booking, agreement, dispatch, billing, maintenance, warehouse, damage inspection and reporting in one connected flow." },
    { title: "Implementation Support", text: "Support for process mapping, configuration, data migration, integration planning, training and rollout execution." },
  ];

  return (
    <section className="bg-[#087674] px-5 py-10 text-white sm:px-6 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">Why FleetArabia</p>
          <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">Built for serious fleet transformation</h2>
          <p className="mt-5 leading-8 text-cyan-50/85">FleetArabia combines mobility domain expertise, enterprise integration capability and practical implementation support to help fleet businesses modernize with confidence.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item, index) => (
            <article key={item.title} className="group rounded-3xl border border-white/15 bg-white/10 p-7 shadow-2xl shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/15">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#087674] transition group-hover:scale-110">0{index + 1}</div>
              <h3 className="text-xl font-black tracking-tight text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-cyan-50/85">{item.text}</p>
            </article>
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

      <div className="relative mx-auto max-w-4xl rounded-[2rem] border border-white/15 bg-white/10 px-6 py-10 shadow-2xl shadow-black/10 backdrop-blur">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
          Start the Conversation
        </p>
        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
          Ready to modernize your fleet operations?
        </h2>
        <p className="mt-5 text-base leading-8 text-cyan-50/85 md:text-lg">
          Let&apos;s map your rental, leasing, transport, workshop, warehouse and ERP workflows into one connected platform.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="inline-flex justify-center rounded-md bg-white px-8 py-3 text-sm font-black text-[#087674] transition hover:bg-cyan-50"
          >
            Book a Demo
          </a>
          <a
            href="mailto:info@fleetarabia.com"
            className="inline-flex justify-center rounded-md border border-white/40 px-8 py-3 text-sm font-black text-white transition hover:bg-white hover:text-[#087674]"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}






