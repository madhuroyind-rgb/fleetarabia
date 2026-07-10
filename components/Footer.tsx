import Link from "next/link";
import Logo from "@/components/Logo";

type FooterLink = {
  label: string;
  href: string;
};

const columns: { title: string; items: FooterLink[] }[] = [
  {
    title: "Solutions",
    items: [
      { label: "Car Rental Management", href: "/solutions" },
      { label: "Rental & Leasing", href: "/solutions" },
      { label: "Fleet Leasing", href: "/fleet-leasing" },
      { label: "Limousine Operations", href: "/solutions" },
      { label: "Bus Transportation", href: "/solutions" },
      { label: "Workshop Management", href: "/solutions" },
      { label: "Warehouse & Spare Parts", href: "/solutions" },
      { label: "HRMS & Payroll", href: "/solutions" },
      { label: "Driver Management", href: "/solutions" },
      { label: "Fuel Management", href: "/solutions" },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "Platform Overview", href: "/platform" },
      { label: "Deployment Options", href: "/deployment" },
      { label: "Billing Automation", href: "/solutions" },
      { label: "Damage Inspection", href: "/solutions" },
      { label: "Analytics & Reporting", href: "/platform" },
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
      { label: "Contact", href: "/contact" },
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
      <h3 className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
        {title}
      </h3>
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
                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Enterprise Mobility
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              FleetArabia helps rental, leasing, transportation, workshop and
              ERP-connected fleet businesses digitize operations across the
              Middle East.
            </p>

            <div className="mt-7 grid max-w-sm grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-lg font-black text-white">9+</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">
                  Fleet solution modules
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-lg font-black text-white">ERP</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">
                  Finance-ready integration
                </div>
              </div>
            </div>
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
            <h3 className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>Patna, Bihar, India 800002</p>
              <p>Dubai, Free Zone, UAE</p>
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
                  href="tel:+91960002063"
                  className="transition hover:text-cyan-300"
                >
                  +91 960002063 (India)
                </a>
              </p>
              <p>
                <a
                  href="tel:+971521333050"
                  className="transition hover:text-cyan-300"
                >
                  +971 52 133 3050 (UAE)
                </a>
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 FleetArabia. All rights reserved.</p>

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
          </div>
        </div>
      </div>
    </footer>
  );
}
