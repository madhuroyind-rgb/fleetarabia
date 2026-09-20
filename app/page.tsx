import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Bus,
  Car,
  CarTaxiFront,
  Check,
  Cloud,
  CreditCard,
  Database,
  Eye,
  Globe,
  Handshake,
  KeyRound,
  Landmark,
  MapPin,
  Network,
  Plug,
  ReceiptText,
  Settings2,
  Workflow as WorkflowIcon,
  Wrench,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ConnectedVisual from "@/components/ConnectedVisual";
import { slugify } from "@/lib/slug";
import { MODULE_ICONS } from "@/lib/modules";

const outcomes = [
  {
    icon: Settings2,
    title: "Operational Control",
    text: "Standardize rental, leasing, dispatch and workshop workflows across branches.",
  },
  {
    icon: ReceiptText,
    title: "ERP-Ready Finance",
    text: "Connect billing, approvals, customer charges and financial posting with enterprise systems.",
  },
  {
    icon: Eye,
    title: "Management Visibility",
    text: "Give leadership real-time insight into fleet status, utilization, revenue and performance.",
  },
];

const solutions = [
  {
    icon: MODULE_ICONS["Car Rental Management"],
    short: "Car Rental",
    title: "Car Rental Management",
    text: "Reservations, agreements, fleet availability, counter operations, billing and returns.",
  },
  {
    icon: MODULE_ICONS["Leasing Management"],
    short: "Leasing",
    title: "Leasing Management",
    text: "Lease contracts, corporate billing, renewals, installments, long-term agreements and lifecycle control.",
  },
  {
    icon: MODULE_ICONS["Chauffeur & Limousine"],
    short: "Limo & Chauffeur",
    title: "Chauffeur & Limousine",
    text: "Chauffeur allocation, dispatching, trip monitoring, bookings and premium service tracking.",
  },
  {
    icon: MODULE_ICONS["Bus Transportation"],
    short: "Bus Transport",
    title: "Bus Transportation",
    text: "Route planning, schedules, driver allocation, vehicle assignment and transport operations control.",
  },
  {
    icon: MODULE_ICONS["Workshop Management"],
    short: "Workshop",
    title: "Workshop Management",
    text: "Job cards, service schedules, preventive maintenance, technicians, approvals, repair tracking and AI-driven predictive maintenance alerts.",
  },
  {
    icon: MODULE_ICONS["Business Intelligence & Analytics"],
    short: "Analytics",
    title: "Business Intelligence & Analytics",
    text: "Real-time dashboards, utilization trends, revenue and fleet performance reporting across branches and business units.",
  },
  {
    icon: MODULE_ICONS["Vehicle Damage & Claims (VDR)"],
    short: "Damage & Claims",
    title: "Vehicle Damage & Claims (VDR)",
    text: "Digital inspection, damage photos, condition reports, customer charges, claims and repair follow-up.",
  },
  {
    icon: MODULE_ICONS["Billing & Revenue Management"],
    short: "Billing & Revenue",
    title: "Billing & Revenue Management",
    text: "Automate rental billing, corporate invoices, customer charges, approvals and ERP-ready financial handover.",
  },
  {
    icon: MODULE_ICONS["ERP Integration Platform"],
    short: "ERP Integration",
    title: "ERP Integration Platform",
    text: "Oracle ERP integration, finance system connectivity, APIs, implementation support and post-go-live assistance.",
  },
  {
    icon: MODULE_ICONS["GPS Tracking & Geo-Fencing"],
    short: "GPS Tracking",
    title: "GPS Tracking & Geo-Fencing",
    text: "Track vehicles in real time, define geo-fenced zones, receive movement alerts, monitor route compliance and improve fleet utilization.",
  },
  {
    icon: MODULE_ICONS["Driver Management"],
    short: "Driver Management",
    title: "Driver Management",
    text: "Driver profiles, license and document tracking, performance monitoring, trip assignment and compliance checks.",
  },
  {
    icon: MODULE_ICONS["Fuel Management"],
    short: "Fuel Management",
    title: "Fuel Management",
    text: "Fuel consumption tracking, fuel card integration, cost-per-vehicle reporting and consumption anomaly alerts.",
  },
  {
    icon: MODULE_ICONS["CRM & Customer Experience"],
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
  { label: "Oracle ERP", icon: Database },
  { label: "Finance Systems", icon: Landmark },
  { label: "GPS Tracking", icon: MapPin },
  { label: "Payment Gateways", icon: CreditCard },
  { label: "Open APIs", icon: Network },
  { label: "Cloud Platform", icon: Cloud },
];

const industries = [
  { label: "Car Rental", icon: Car },
  { label: "Leasing", icon: KeyRound },
  { label: "Limousine", icon: CarTaxiFront },
  { label: "Bus Transport", icon: Bus },
  { label: "Corporate Fleets", icon: Briefcase },
  { label: "Workshops", icon: Wrench },
  { label: "Government Mobility", icon: Landmark },
];

const TEAL_PATTERN =
  "absolute inset-0 bg-[radial-gradient(circle_at_0_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),radial-gradient(circle_at_100%_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),linear-gradient(135deg,rgba(0,65,70,0.36),rgba(8,118,116,0.96))] bg-[size:130px_130px,130px_130px,cover]";

const SECTION = "px-5 py-16 sm:px-6 md:py-24";
const EYEBROW = "text-sm font-bold uppercase tracking-[0.22em] text-cyan-50";
const H2 = "mt-4 text-3xl font-black tracking-tight md:text-[2.6rem] md:leading-[1.1]";
const LEAD = "mt-5 text-base leading-8 text-cyan-50 md:text-lg";

const PRIMARY_BUTTON =
  "group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-[#087674] shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-cyan-50";
const SECONDARY_BUTTON =
  "group inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#087674]";
const BUTTON_ARROW = "h-4 w-4 transition group-hover:translate-x-0.5";

const WHITE_CARD =
  "rounded-2xl border border-white/40 bg-white text-slate-950 shadow-xl shadow-black/[0.08] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/15";
const GLASS_CARD =
  "rounded-2xl border border-white/15 bg-white/10 shadow-xl shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/15";
const ICON_TILE_ON_WHITE =
  "flex h-12 w-12 items-center justify-center rounded-xl bg-[#087674]/10 text-[#087674] ring-1 ring-[#087674]/10 transition group-hover:bg-[#087674] group-hover:text-white";
const ICON_TILE_ON_GLASS =
  "flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/20";

export default function Home() {
  return (
    <main className="fleet-teal-page bg-[#087674] text-white">
      <Hero />
      <BuiltFor />
      <ExecutiveOutcomes />
      <Solutions />
      <Workflow />
      <Integrations />
      <WhyFleetArabia />
      <CTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#087674]">
      <div className={TEAL_PATTERN} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:54px_54px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-9 sm:px-6 md:pb-14 md:pt-11 xl:min-h-[540px] xl:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-cyan-50 sm:text-sm">
            For Rental, Leasing &amp; Fleet Operators
          </p>

          <h1 className="max-w-4xl text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            Enterprise Mobility Platform for Fleet Operations{" "}
            <span className="bg-gradient-to-r from-cyan-200 to-cyan-300 bg-clip-text text-transparent">Across the Middle East</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-cyan-50 md:text-lg md:leading-8">
            FleetArabia replaces spreadsheets and disconnected systems with one platform for rental, leasing, chauffeur, bus, workshop and fleet operations — connected to your finance system, with real-time dashboards for the people running the business.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/contact#demo-form" className={PRIMARY_BUTTON}>
              Book a Demo
              <ArrowRight aria-hidden="true" className={BUTTON_ARROW} />
            </Link>

            <Link href="/solutions" className={SECONDARY_BUTTON}>
              Explore Solutions
              <ArrowRight aria-hidden="true" className={BUTTON_ARROW} />
            </Link>
          </div>

          <div className="mt-9 grid max-w-2xl gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
            {['Rental & Leasing Operations', 'ERP & Billing Integration', 'Fleet Lifecycle Visibility'].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/50 text-cyan-300">
                    <Check aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
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
  const productNodes = solutions.map((item) => ({ icon: item.icon, title: item.short }));

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

function BuiltFor() {
  return (
    <section aria-label="Industries" className="border-y border-white/10 bg-[#065f5e] px-5 py-7 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 lg:flex-row lg:gap-8">
        <p className="shrink-0 text-xs font-bold uppercase tracking-[0.24em] text-cyan-100">Built for</p>

        <ul className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
          {industries.map((item) => (
            <li key={item.label}>
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/15"
              >
                <item.icon aria-hidden="true" className="h-4 w-4 text-cyan-200" strokeWidth={2} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
      <p className={EYEBROW}>{eyebrow}</p>
      <h2 className={H2}>{title}</h2>
      {text && <p className={LEAD}>{text}</p>}
    </Reveal>
  );
}

function ExecutiveOutcomes() {
  return (
    <section className={`bg-[#087674] text-white ${SECTION}`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Executive Outcomes"
          title="Made for the people running the business"
          text="Owners who need visibility, operations leaders who need control, and finance teams who need clean numbers at close."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className={`group h-full p-8 ${WHITE_CARD}`}>
                <div className="flex items-center justify-between">
                  <div className={ICON_TILE_ON_WHITE}>
                    <item.icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.9} />
                  </div>
                  <span aria-hidden="true" className="text-sm font-bold tabular-nums text-slate-300">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
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
    <section className={`relative overflow-hidden bg-[#065f5e] text-white ${SECTION}`}>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Product Portfolio"
          title="Thirteen modules. One connected platform."
          text="Run every module on its own, or plug in the ones you need and let them share the same data — no double entry, no reconciling spreadsheets at month end."
        />

        {/* Flex rather than grid so the 13th card is centred, not orphaned left. */}
        <div className="flex flex-wrap justify-center gap-5">
          {solutions.map((item, index) => (
            <Reveal
              key={item.title}
              delay={Math.min(index * 0.05, 0.3)}
              className="w-full md:w-[calc(50%-10px)] xl:w-[calc(25%-15px)]"
            >
              <article className={`group flex h-full min-h-[240px] flex-col p-7 ${WHITE_CARD}`}>
                <div className={`mb-6 ${ICON_TILE_ON_WHITE}`}>
                  <item.icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.9} />
                </div>
                <h3 className="text-lg font-bold leading-snug tracking-tight">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{item.text}</p>
                <Link
                  href={`/solutions#${slugify(item.title)}`}
                  aria-label={`Learn more about ${item.title}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#087674]"
                >
                  Learn More
                  <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
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
    <section className={`bg-[#087674] text-slate-950 ${SECTION}`}>
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/40 bg-white p-7 shadow-2xl shadow-black/10 md:p-12">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#087674]">
              Enterprise Workflow
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              From booking to ERP posting
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Build a connected digital process across front office, operations,
              finance and management reporting.
            </p>
          </div>

          <Link
            href="/platform"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-[#087674] px-7 py-3.5 text-sm font-bold text-[#087674] transition hover:bg-[#087674] hover:text-white"
          >
            Explore Platform
            <ArrowRight aria-hidden="true" className={BUTTON_ARROW} />
          </Link>
        </Reveal>

        <ol className="relative mt-12 grid gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {/* The line that joins the step markers on wide screens. */}
          <span
            aria-hidden="true"
            className="absolute left-[8.33%] right-[8.33%] top-6 hidden h-0.5 bg-gradient-to-r from-[#087674]/15 via-[#087674]/50 to-[#087674]/15 lg:block"
          />

          {workflow.map((item, index) => (
            <li key={item} className="relative flex flex-col items-center text-center">
              <Reveal delay={index * 0.06} className="flex flex-col items-center">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#087674] text-sm font-bold tabular-nums text-white shadow-lg shadow-[#087674]/30 ring-4 ring-white">
                  {index + 1}
                </span>
                <span className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Step {index + 1}
                </span>
                <span className="mt-1.5 text-base font-bold leading-snug text-slate-950">{item}</span>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section className={`relative overflow-hidden bg-[#087674] text-white ${SECTION}`}>
      <div className={TEAL_PATTERN} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className={EYEBROW}>ERP &amp; Integration Fabric</p>
          <h2 className={H2}>Talks to the systems you already run</h2>
          <p className={LEAD}>
            Pre-built connectors and APIs help integrate mobility operations
            with Oracle ERP, finance systems, GPS tracking, payment gateways and
            cloud platforms.
          </p>

          <Link href="/integrations" className={`mt-9 ${PRIMARY_BUTTON}`}>
            Explore Integrations
            <ArrowRight aria-hidden="true" className={BUTTON_ARROW} />
          </Link>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item, index) => (
            <Reveal key={item.label} delay={Math.min(index * 0.06, 0.3)}>
              <div className={`flex h-full flex-col items-center gap-4 p-7 text-center ${GLASS_CARD}`}>
                <div className={ICON_TILE_ON_GLASS}>
                  <item.icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.9} />
                </div>
                <span className="text-sm font-bold text-white">{item.label}</span>
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
    { icon: Globe, title: "Middle East Domain Expertise", text: "Built around how rental, leasing, limousine, bus transportation and workshop operations actually run in this region — not adapted from a generic template." },
    { icon: Plug, title: "ERP-Connected Operations", text: "Billing, approvals and customer charges post cleanly to your finance system instead of getting re-keyed by hand." },
    { icon: WorkflowIcon, title: "End-to-End Fleet Lifecycle", text: "One flow from booking through agreement, dispatch, maintenance and reporting, instead of five disconnected tools." },
    { icon: Handshake, title: "Implementation Support", text: "Hands-on help with process mapping, data migration, integration planning, training and rollout — not just a login and a manual." },
  ];

  return (
    <section className={`bg-[#065f5e] text-white ${SECTION}`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why FleetArabia"
          title="Built by people who know fleet operations"
          text="Domain knowledge of how mobility businesses actually operate, the integration depth to connect with your finance systems, and hands-on support to get there."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index * 0.06, 0.24)}>
              <article className={`h-full p-7 ${GLASS_CARD}`}>
                <div className={`mb-6 ${ICON_TILE_ON_GLASS}`}>
                  <item.icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.9} />
                </div>
                <h3 className="text-lg font-bold leading-snug tracking-tight text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-50">{item.text}</p>
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
      className={`relative overflow-hidden bg-[#087674] text-center text-white ${SECTION}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.22),transparent_45%)]" />

      <Reveal className="relative mx-auto max-w-4xl rounded-3xl border border-white/15 bg-white/10 px-6 py-12 shadow-2xl shadow-black/10 backdrop-blur md:px-12 md:py-16">
        <p className={EYEBROW}>Start the Conversation</p>
        <h2 className={H2}>Ready to modernize your fleet operations?</h2>
        <p className={LEAD}>
          Tell us how your operation runs today, and we&apos;ll show you what it looks like connected end to end.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contact#demo-form" className={PRIMARY_BUTTON}>
            Book a Demo
            <ArrowRight aria-hidden="true" className={BUTTON_ARROW} />
          </Link>
          <a href="mailto:info@fleetarabia.com" className={SECONDARY_BUTTON}>
            Contact Sales
          </a>
        </div>
      </Reveal>
    </section>
  );
}
