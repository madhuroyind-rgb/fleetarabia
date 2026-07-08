const solutions = [
  {
    icon: "▱",
    title: "Car Rental Management",
    text: "Reservations, contracts, billing, fleet tracking and customer management.",
  },
  {
    icon: "✎",
    title: "Rental & Leasing",
    text: "Lease management, installments, contracts, renewals and vehicle lifecycle.",
  },
  {
    icon: "♙",
    title: "Limo & Chauffeur",
    text: "Dispatch, chauffeur management, trip operations and real-time monitoring.",
  },
  {
    icon: "▣",
    title: "Bus Rental Management",
    text: "Bus scheduling, route planning, driver allocation and operations management.",
  },
  {
    icon: "⌘",
    title: "Workshop Management",
    text: "Job cards, service scheduling, spare parts and technician productivity.",
  },
  {
    icon: "⌂",
    title: "Warehouse Management",
    text: "Inventory control, barcode, parts movement and multi-warehouse management.",
  },
  {
    icon: "◇",
    title: "Vehicle Damage Tool",
    text: "Damage inspection, image capture, insurance and claim management.",
  },
  {
    icon: "▤",
    title: "ERP Support Services",
    text: "Oracle ERP support, functional consulting, reporting and enhancements.",
  },
  {
    icon: "∞",
    title: "Integration Tools",
    text: "API integrations, GPS, payment gateways and third-party connectivity.",
  },
];

const industries = [
  "Car Rental Companies",
  "Leasing Companies",
  "Limo Operators",
  "Transportation Companies",
  "Corporate Fleets",
  "Workshops & Service Centers",
  "Government Mobility",
];

const benefits = [
  {
    icon: "◎",
    title: "Domain Expertise",
    text: "Specialized in mobility, rental and fleet operations across the Middle East.",
  },
  {
    icon: "▦",
    title: "Enterprise Technology",
    text: "Modern, secure and scalable platform built for enterprise performance.",
  },
  {
    icon: "◉",
    title: "ERP & System Integration",
    text: "Strong expertise in Oracle ERP integration and enterprise ecosystems.",
  },
  {
    icon: "↗",
    title: "End-to-End Operations",
    text: "Complete digital workflow from booking to billing, analytics and beyond.",
  },
];

const stats = [
  ["10+", "Years of Experience"],
  ["100+", "Enterprise Clients"],
  ["50,000+", "Vehicles Managed"],
  ["20+", "Countries Served"],
];

export default function Home() {
  return (
    <main className="fleet-teal-page min-h-screen bg-slate-50 text-slate-950">
      <Hero />
      <TrustStrip />
      <Solutions />
      <WhyChoose />
      <Industries />
      <IntegrationExpertise />
      <Stats />
      <CTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#061833] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.35),transparent_30%),linear-gradient(90deg,rgba(2,12,27,0.96),rgba(2,12,27,0.72))]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(0deg,rgba(2,12,27,0.92),transparent)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Digitize Rental, Leasing & Fleet Operations Across the Middle East
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
            FleetArabia enables rental, leasing, transportation, limousine,
            workshop, warehouse, and enterprise fleet businesses to automate
            operations, integrate ERP ecosystems, and scale digitally.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-blue-700 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-800"
            >
              Request Demo
            </a>
            <a
              href="#solutions"
              className="rounded-md border border-white/50 px-7 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
            >
              Explore Platform
            </a>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="rounded-xl bg-white/10 p-3 shadow-2xl ring-1 ring-white/10 backdrop-blur">
      <div className="overflow-hidden rounded-lg bg-white text-slate-900 shadow-2xl">
        <div className="flex">
          <aside className="hidden w-32 bg-[#071936] p-4 text-white md:block">
            <div className="mb-5 flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-blue-600" />
              <div>
                <div className="text-xs font-bold">FleetArabia</div>
                <div className="text-[8px] text-slate-400">Enterprise Mobility</div>
              </div>
            </div>
            {[
              "Dashboard",
              "Reservations",
              "Fleet",
              "Leasing",
              "Workshop",
              "Billing",
              "Reports",
              "Settings",
            ].map((item, index) => (
              <div
                key={item}
                className={`mb-2 rounded px-2 py-2 text-[10px] ${
                  index === 0 ? "bg-blue-600" : "text-slate-300"
                }`}
              >
                {item}
              </div>
            ))}
          </aside>

          <div className="flex-1 bg-slate-50 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div className="h-8 w-64 rounded bg-white shadow-sm" />
              <div className="flex gap-3">
                <div className="h-5 w-5 rounded-full bg-slate-200" />
                <div className="h-5 w-5 rounded-full bg-slate-200" />
                <div className="h-5 w-5 rounded-full bg-slate-200" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                ["Total Vehicles", "2,451", "+12.9%"],
                ["Active Rentals", "1,325", "+8.7%"],
                ["Fleet Utilization", "86%", "+6.3%"],
                ["Today’s Revenue", "AED 1.2M", "+21.5%"],
              ].map(([label, value, growth]) => (
                <div key={label} className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="text-[11px] font-semibold text-slate-500">
                    {label}
                  </div>
                  <div className="mt-2 text-2xl font-black">{value}</div>
                  <div className="mt-1 text-[10px] font-bold text-emerald-600">
                    {growth}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-4 text-sm font-black">Fleet Utilization</div>
                <div className="flex h-32 items-end gap-3">
                  {[45, 58, 54, 65, 78, 62, 80].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t bg-blue-600"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-4 text-sm font-black">Vehicle Status</div>
                <div className="flex items-center justify-center gap-6">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-[18px] border-blue-600 bg-white text-xl font-black">
                    2,451
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>● On Rent — 1,225</div>
                    <div>● Available — 866</div>
                    <div>● Maintenance — 160</div>
                    <div>● Inactive — 90</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-3 text-sm font-black">Recent Activities</div>
                {["New Reservation", "Vehicle Returned", "Workshop Job Completed"].map(
                  (item) => (
                    <div
                      key={item}
                      className="mb-3 flex items-center justify-between text-xs"
                    >
                      <span>{item}</span>
                      <span className="text-slate-400">10 min ago</span>
                    </div>
                  )
                )}
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-4 text-sm font-black">Revenue Overview</div>
                <div className="flex h-24 items-end gap-4">
                  {[42, 54, 65, 80, 88, 90].map((height, index) => (
                    <div
                      key={index}
                      className="w-8 rounded-t bg-sky-500"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustStrip() {
  const items = [
    ["⌖", "Middle East Expertise", "Deep understanding of regional mobility operations"],
    ["▱", "Enterprise Platform", "Scalable, secure and cloud-ready architecture"],
    ["⌘", "ERP Integration", "Seamless integration with Oracle ERP and more"],
    ["⌑", "Reliable Support", "24/7 enterprise support and customer success"],
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-5 py-8 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
        {items.map(([icon, title, text]) => (
          <div key={title} className="flex items-center gap-5 px-4 py-4">
            <div className="text-5xl font-light text-blue-700">{icon}</div>
            <div>
              <h3 className="text-sm font-black">{title}</h3>
              <p className="mt-1 text-sm leading-5 text-slate-600">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="bg-slate-50 px-5 py-10">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-black tracking-tight">Our Solutions</h2>
        <p className="mt-3 text-sm text-slate-600">
          End-to-end solutions for every mobility business need
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {solutions.slice(0, 5).map((item) => (
            <SolutionCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mx-auto mt-3 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.slice(5).map((item) => (
            <SolutionCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <article className="min-h-[170px] rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="text-4xl text-blue-700">{icon}</div>
      <h3 className="mt-4 text-base font-black">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
      <a href="#" className="mt-4 inline-block text-sm font-bold text-blue-700">
        Learn More →
      </a>
    </article>
  );
}

function WhyChoose() {
  return (
    <section className="bg-[#061833] px-5 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-black">Why Choose FleetArabia?</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 border-white/10 lg:border-r lg:pr-6"
            >
              <div className="text-5xl text-blue-400">{item.icon}</div>
              <div>
                <h3 className="text-base font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="bg-white px-5 py-10">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-black">Industries We Serve</h2>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {industries.map((industry) => (
            <div
              key={industry}
              className="border-r border-slate-200 px-3 text-center last:border-r-0"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg text-3xl text-blue-700">
                ▣
              </div>
              <div className="text-sm font-black leading-5">{industry}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationExpertise() {
  return (
    <section className="bg-slate-50 px-5 pb-10">
      <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_1.7fr]">
        <div>
          <h2 className="text-2xl font-black">
            Enterprise ERP & Integration Expertise
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Seamless integration with Oracle ERP, finance systems, GPS tracking,
            payment gateways and enterprise platforms.
          </p>
          <a
            href="#"
            className="mt-5 inline-flex rounded-md bg-blue-700 px-7 py-3 text-sm font-bold text-white"
          >
            Learn More
          </a>
        </div>

        <div className="grid grid-cols-2 gap-5 text-center md:grid-cols-5">
          {["Oracle ERP", "GPS Tracking", "API Integration", "Payment Gateway", "Cloud Platform"].map(
            (item) => (
              <div key={item}>
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl border-2 border-blue-700 text-xl font-black text-blue-700">
                  {item.split(" ")[0].slice(0, 3).toUpperCase()}
                </div>
                <div className="text-xs font-black uppercase tracking-wide">
                  {item}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-[#061833] px-5 py-8 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map(([number, label]) => (
          <div key={label} className="flex items-center gap-5 border-white/10 md:border-r">
            <div className="text-5xl text-blue-400">▥</div>
            <div>
              <div className="text-4xl font-black">{number}</div>
              <div className="text-sm text-slate-300">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#061833] px-5 py-12 text-center text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.3),transparent_45%)]" />
      <div className="relative mx-auto max-w-4xl">
        <h2 className="text-4xl font-black tracking-tight">
          Ready to Digitize Your Mobility Operations?
        </h2>
        <p className="mt-3 text-lg text-slate-300">
          Let’s build your digital mobility platform together.
        </p>
        <div className="mt-7 flex justify-center gap-4">
          <a
            href="mailto:info@fleetarabia.com"
            className="rounded-md bg-blue-700 px-10 py-3 text-sm font-bold text-white"
          >
            Book Demo
          </a>
          <a
            href="mailto:info@fleetarabia.com"
            className="rounded-md border border-white/50 px-10 py-3 text-sm font-bold text-white"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}