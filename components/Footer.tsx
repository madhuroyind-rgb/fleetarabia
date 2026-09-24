import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import { CookieSettingsButton } from "@/components/AnalyticsConsent";
import { LINKEDIN_URL } from "@/lib/site";

type FooterLink = {
  label: string;
  href: string;
};

const columns: { title: string; items: FooterLink[] }[] = [
  {
    title: "Solutions",
    items: [
      { label: "Car Rental Management", href: "/solutions#car-rental-management" },
      { label: "Leasing Management", href: "/solutions#leasing-management" },
      { label: "Fleet Leasing", href: "/fleet-leasing" },
      { label: "Chauffeur & Limousine", href: "/solutions#chauffeur-limousine" },
      { label: "Bus Transportation", href: "/solutions#bus-transportation" },
      { label: "Workshop Management", href: "/solutions#workshop-management" },
      { label: "Business Intelligence & Analytics", href: "/solutions#business-intelligence-analytics" },
      { label: "GPS Tracking & Geo-Fencing", href: "/solutions#gps-tracking-geo-fencing" },
      { label: "Driver Management", href: "/solutions#driver-management" },
      { label: "Fuel Management", href: "/solutions#fuel-management" },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "Platform Overview", href: "/platform" },
      { label: "Deployment Options", href: "/deployment" },
      { label: "Billing & Revenue Management", href: "/solutions#billing-revenue-management" },
      { label: "Vehicle Damage & Claims (VDR)", href: "/solutions#vehicle-damage-claims-vdr" },
      { label: "Reporting & Dashboards", href: "/platform" },
      { label: "ERP Integrations", href: "/integrations" },
      { label: "Implementation Support", href: "/services" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About FleetArabia", href: "/company" },
      { label: "Industries", href: "/industries" },
      { label: "Services", href: "/services" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact#demo-form" },
    ],
  },
];

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: FooterLink[];
}) {
  return (
    <div>
      <h2 className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm leading-6 text-slate-400 transition hover:text-cyan-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#041124] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(37,99,235,0.16),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_2fr_0.85fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Logo className="h-12 w-12 shrink-0" />

              <div>
                <div className="text-2xl font-black leading-none tracking-tight">
                  Fleet<span className="text-cyan-400">Arabia</span>
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Enterprise Mobility
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              FleetArabia helps rental, leasing, transportation, workshop and
              ERP-connected fleet businesses digitize operations across the
              Middle East.
            </p>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-300"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Follow us on LinkedIn
            </a>

          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <FooterColumn
                key={column.title}
                title={column.title}
                items={column.items}
              />
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-6">
            <h2 className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              Contact
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>Dubai, Free Zone, UAE</p>
              <p>Patna, Bihar, India 800002</p>
              <p>
                <a
                  href="mailto:info@fleetarabia.com"
                  className="transition hover:text-cyan-300"
                >
                  info@fleetarabia.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+919060002063"
                  className="transition hover:text-cyan-300"
                >
                  +91 90600 02063 (India)
                </a>
              </p>
              <p>
                <a
                  href="tel:+971585868864"
                  className="transition hover:text-cyan-300"
                >
                  +971 58 586 8864 (UAE)
                </a>
              </p>
            </div>

            <Link
              href="/contact#demo-form"
              className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#087674] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              Book a Demo
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 FleetArabia Technology LLC. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="transition hover:text-cyan-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-cyan-300">
              Terms of Use
            </Link>
            <Link href="/sitemap" className="transition hover:text-cyan-300">
              Sitemap
            </Link>
            <CookieSettingsButton className="transition hover:text-cyan-300" />
          </div>
        </div>
      </div>
    </footer>
  );
}
