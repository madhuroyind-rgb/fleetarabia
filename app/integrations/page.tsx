import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageOpenGraph } from "@/lib/seo";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroVisual from "@/components/HeroVisual";
import { Fuel, Landmark, ReceiptText, Satellite, SquareParking } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations | FleetArabia",
  description:
    "Bring Salik tolls, traffic fines, parking charges and fuel-card statements into FleetArabia and match them to the right vehicle and contract.",
  alternates: { canonical: "/integrations" },
  openGraph: pageOpenGraph("/integrations"),
};

type Linked = { href?: string; linkLabel?: string };

const ecosystem: ({ id?: string; title: string; text: string } & Linked)[] = [
  {
    title: "Finance Built In",
    href: "/solutions/billing-finance",
    linkLabel: "Billing & Finance →",
    text: "Contracts, invoices, receipts and VAT are recorded in the same system as your operations.",
  },
  {
    title: "Tolls, Fines & Parking",
    href: "/solutions/car-rental-software",
    linkLabel: "Car Rental Software →",
    text: "Import Salik, traffic-fine and parking files and match every charge to the right vehicle, contract and customer.",
  },
  {
    title: "Fuel-Card Statements",
    href: "/solutions/fleet-management#fuel",
    linkLabel: "Fuel in Fleet Management →",
    text: "Import ENOC and ADNOC fuel-card statements, with a check that stops the same file being imported twice.",
  },
  {
    id: "gps",
    title: "GPS Tracking Server",
    text: "FleetArabia connects to a Traccar GPS tracking server, configured during implementation.",
  },
  {
    title: "Customer Portal & CRM",
    text: "Business customers see invoices, statements and contracts and raise requests in the customer portal; leads and tickets are handled in FleetArabia's CRM.",
  },
  {
    title: "APIs",
    text: "The system runs on REST APIs. Integrations such as a traffic-fine data feed are set up during implementation.",
  },
  {
    title: "Dashboards & Reports",
    text: "Dashboards, reports and bulk downloads of operational and financial data.",
  },
  {
    title: "Cloud-Hosted",
    text: "FleetArabia is hosted in the cloud and used through a web browser.",
  },
];

const supportedIntegrations = [
  "Salik Toll Files",
  "Traffic-Fine Files & Data Feed",
  "Parking Charge Files",
  "ENOC & ADNOC Fuel Statements",
  "GPS Tracking Server (Traccar)",
  "Customer Portal",
  "Email Notifications",
  "REST APIs",
];

const whyIntegration = [
  "API-First Architecture",
  "Secure Authentication & Encryption",
  "Role-Based Access",
  "Multi-Company & Multi-Branch",
  "Exception Queues for Unmatched Charges",
  "Audit Logs",
];

const uaeImports: ({ id: string; title: string; description: string; badge: string } & Linked)[] = [
  {
    id: "salik",
    title: "Salik Toll Import",
    href: "/solutions/car-rental-software",
    linkLabel: "Car Rental Software →",
    description: "Import Salik toll files. Each crossing is matched to the contract that had the vehicle at that moment, and invoiced.",
    badge: "UAE",
  },
  {
    id: "fines",
    title: "Traffic Fine Import",
    href: "/solutions/car-rental-software",
    linkLabel: "Car Rental Software →",
    description: "Import fines from a file or a data feed, find who had the vehicle at the time, then allocate, verify, dispute and notify by email.",
    badge: "UAE",
  },
  {
    id: "parking",
    title: "Parking Charge Import",
    href: "/solutions/car-rental-software",
    linkLabel: "Car Rental Software →",
    description: "Import parking charge files and match each charge to the vehicle and the contract it was on.",
    badge: "UAE",
  },
  {
    id: "fuel",
    title: "Fuel-Card Statement Import",
    href: "/solutions/fleet-management#fuel",
    linkLabel: "Fuel in Fleet Management →",
    description: "Import ENOC and ADNOC fuel-card statements and review fuel spend by vehicle, card and station.",
    badge: "ENOC & ADNOC",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("/integrations")} />
    <main className="fleet-teal-page text-white">
      <PageHeader />
      <PageContent />
      <FinalCTA />
    </main>
    </>
  );
}

function PageHeader() {
  return (
    <section className="relative overflow-hidden bg-[#087674] px-5 sm:px-6 py-16 text-white">
      <TealPattern />

      <div className="relative mx-auto grid max-w-[77rem] items-center gap-12 xl:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-50">
            Integrations &amp; Data Imports
          </p>

          <h1 className="mt-5 max-w-3xl text-3xl font-black leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Bring Salik, fines, parking and fuel data into your fleet ERP
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-cyan-50">
            Import Salik tolls, traffic fines, parking charges and fuel-card statements and
            match each one to the right vehicle and contract. FleetArabia can also connect to
            a Traccar GPS tracking server, and runs on REST APIs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/contact#demo-form" className="inline-flex justify-center rounded-md bg-white px-7 py-3 text-sm font-black text-[#087674] shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-cyan-50">
              Talk to an Integration Expert →
            </Link>

            <Link href="/platform" className="inline-flex justify-center rounded-md border border-white/30 px-7 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#087674]">
              Explore the Platform →
            </Link>
          </div>

          <div className="mt-8 grid max-w-2xl gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
            {["REST APIs", "File & Data Imports", "Enterprise Ready"].map((item) => (
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
      <UaeImportsSection />
    </>
  );
}

function TealPattern() {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),radial-gradient(circle_at_100%_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),linear-gradient(135deg,rgba(0,65,70,0.36),rgba(8,118,116,0.96))] bg-[size:130px_130px,130px_130px,cover]" />
  );
}

function IntegrationVisual() {
  return (
    <HeroVisual
      spec={{
        kind: "bridge",
        caption: "Outside data, matched to the right record",
        left: { title: "FleetArabia", items: ["Rental & Leasing", "Fleet & Workshop", "Billing", "Drivers"] },
        center: "Imports & APIs",
        right: [
          { label: "Salik Tolls", icon: ReceiptText },
          { label: "Traffic Fines", icon: Landmark },
          { label: "Parking Charges", icon: SquareParking },
          { label: "Fuel-Card Statements", icon: Fuel },
          { label: "GPS Tracking Server", icon: Satellite },
        ],
      }}
    />
  );
}

function EcosystemSection() {
  return (
    <section className="relative overflow-hidden bg-[#087674] px-5 sm:px-6 py-16 text-white">
      <TealPattern />

      <div className="relative mx-auto max-w-[77rem]">
        <SectionHeader
          eyebrow="What Connects"
          title="Outside data, in the same system"
          text="Toll, fine, parking and fuel data are imported and matched to the right vehicle and contract."
          light
          center
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ecosystem.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index * 0.06, 0.24)}>
              <article id={item.id} className="h-full scroll-mt-28 rounded-2xl border border-white/15 bg-[#043f3e]/30 p-6 shadow-xl shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:bg-[#043f3e]/40">
                <h3 className="text-lg font-black leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cyan-50">
                  {item.text}
                </p>
                {item.href && (
                  <Link href={item.href} className="mt-4 inline-flex text-sm font-bold text-white transition hover:translate-x-1">
                    {item.linkLabel}
                  </Link>
                )}
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
    <section className="relative overflow-hidden bg-[#087674] px-5 sm:px-6 py-16 text-white">
      <div className="relative mx-auto max-w-[77rem]">
        <SectionHeader
          eyebrow="Platform Integrations"
          title="Imports that land on the right record"
          text="Tolls, fines, parking and fuel data are matched to the vehicle, contract and customer they belong to; anything that cannot be matched waits in an exception queue."
          light
        />

        <div className="mt-10">
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-cyan-50">
            Supported Imports &amp; Connections
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
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

function UaeImportsSection() {
  return (
    <section className="relative overflow-hidden bg-[#087674] px-5 sm:px-6 py-16 text-white">
      <div className="relative mx-auto max-w-[77rem]">
        <SectionHeader
          eyebrow="Built for the UAE"
          title="UAE operations built in"
          text="Salik tolls, UAE traffic fines, parking charges, UAE VAT and AED billing are part of the product."
          light
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {uaeImports.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index * 0.06, 0.3)}>
              <article id={item.id} className="h-full scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.09]">
                <span className="inline-flex rounded-full bg-[#043f3e]/40 px-3 py-1 text-xs font-black text-white">
                  {item.badge}
                </span>
                <h3 className="mt-4 text-lg font-black leading-snug text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cyan-50">
                  {item.description}
                </p>
                {item.href && (
                  <Link href={item.href} className="mt-4 inline-flex text-sm font-bold text-white transition hover:translate-x-1">
                    {item.linkLabel}
                  </Link>
                )}
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
    <section className="relative overflow-hidden bg-[#087674] px-5 sm:px-6 py-16 text-center text-white">
      <TealPattern />

      <Reveal className="relative mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-50">
          Digital Connectivity
        </p>

        <h2 className="mt-5 text-2xl font-black tracking-tight md:text-4xl">
          One system for your fleet and its data
        </h2>

        <p className="mt-5 text-base leading-8 text-cyan-50">
          FleetArabia brings operations, finance, vehicles, drivers and customers into one
          cloud ERP, with outside data imported and matched instead of re-keyed.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contact#demo-form" className="inline-flex justify-center rounded-md bg-white px-7 py-3 text-sm font-black text-[#087674] shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-cyan-50">
            Book a Demo →
          </Link>
          <Link href="/platform" className="inline-flex justify-center rounded-md border border-white/30 px-7 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#087674]">
            View Platform →
          </Link>
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
      <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">
        {title}
      </h2>
      <p
        className={`mt-5 leading-8 ${
          light ? "text-cyan-50" : "text-slate-600"
        }`}
      >
        {text}
      </p>
    </Reveal>
  );
}
