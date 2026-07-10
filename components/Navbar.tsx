"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

const nav = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Fleet Leasing", href: "/fleet-leasing" },
  { label: "Industries", href: "/industries" },
  { label: "Integrations", href: "/integrations" },
  { label: "Deployment", href: "/deployment" },
  { label: "Services", href: "/services" },
  { label: "Company", href: "/company" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fleet-navbar sticky top-0 z-50 border-b border-white/10 bg-[#041124]/95 text-white backdrop-blur-xl">
      <div className="fleet-navbar-inner mx-auto flex h-[64px] max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-10 w-10 shrink-0" />

          <div>
            <div className="fleet-logo-title text-xl font-black leading-none tracking-tight">
              Fleet<span className="text-cyan-400">Arabia</span>
            </div>
            <div className="fleet-logo-subtitle mt-1 text-[10px] font-medium tracking-wide text-slate-400">
              Enterprise Mobility Solutions
            </div>
          </div>
        </Link>

        <nav className="fleet-nav-links hidden items-center gap-6 text-xs font-semibold 2xl:flex">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`transition hover:text-cyan-300 ${
                  active
                    ? "border-b-2 border-cyan-400 pb-2 text-white"
                    : "text-slate-200"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact#demo-form"
            className="fleet-contact-cta hidden rounded-md bg-blue-700 px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-blue-700/30 transition hover:bg-blue-600 md:inline-flex"
          >
            Book Demo →
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="fleet-mobile-menu"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white transition hover:bg-white/10 2xl:hidden"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="fleet-mobile-menu"
          className="border-t border-white/10 bg-[#041124] px-6 py-4 2xl:hidden"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-3 py-2.5 text-sm font-bold transition hover:bg-white/10 hover:text-cyan-300 ${
                      active ? "text-white" : "text-slate-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact#demo-form"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex justify-center rounded-md bg-blue-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-700/30 transition hover:bg-blue-600 md:hidden"
          >
            Book Demo →
          </Link>
        </nav>
      )}
    </header>
  );
}
