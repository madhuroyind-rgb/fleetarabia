"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const nav: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Platform Overview", href: "/platform" },
      { label: "Deployment Options", href: "/deployment" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "All Solutions", href: "/solutions" },
      { label: "Fleet Leasing", href: "/fleet-leasing" },
      { label: "Industries", href: "/industries" },
    ],
  },
  { label: "Integrations", href: "/integrations" },
  { label: "Services", href: "/services" },
  { label: "Company", href: "/company" },
  { label: "Resources", href: "/resources" },
];

function isActive(pathname: string, item: NavItem) {
  const hrefs = item.children ? item.children.map((child) => child.href) : [item.href];
  return hrefs.some((href) => pathname === href || pathname.startsWith(`${href}/`));
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fleet-navbar sticky top-0 z-50 border-b border-white/10 bg-[#041124]/95 text-white backdrop-blur-xl">
      <div className="fleet-navbar-inner mx-auto flex h-[64px] max-w-7xl items-center justify-between px-5 sm:px-6">
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

        <nav className="hidden items-center gap-5 whitespace-nowrap text-sm font-extrabold lg:flex xl:gap-7 xl:text-[15px]">
          {nav.map((item) => {
            const active = isActive(pathname, item);
            const linkClass = `inline-flex items-center gap-1.5 border-b-2 py-2 transition hover:text-cyan-300 ${
              active ? "border-cyan-400 text-white" : "border-transparent text-slate-200"
            }`;

            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={linkClass}
                >
                  {item.label}
                </Link>
              );
            }

            const expanded = openMenu === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={expanded}
                  onClick={() => setOpenMenu(expanded ? null : item.label)}
                  className={linkClass}
                >
                  {item.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {expanded && (
                  <div className="absolute left-0 top-full pt-2">
                    <ul className="w-56 rounded-xl border border-white/10 bg-[#041124] p-2 shadow-2xl shadow-black/40">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpenMenu(null)}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className={`block rounded-lg px-3 py-2.5 text-sm font-bold transition hover:bg-white/10 hover:text-cyan-300 ${
                              pathname === child.href ? "text-white" : "text-slate-200"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact#demo-form"
            className="fleet-contact-cta group hidden items-center gap-2 rounded-md bg-white px-5 py-2.5 text-xs font-black text-[#087674] shadow-lg shadow-black/20 transition hover:bg-cyan-50 md:inline-flex"
          >
            Book a Demo
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="fleet-mobile-menu"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
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
          className="max-h-[calc(100dvh-70px)] overflow-y-auto border-t border-white/10 bg-[#041124] px-5 sm:px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const links = item.children ?? [{ label: item.label, href: item.href }];

              return (
                <li key={item.label}>
                  {item.children && (
                    <div className="px-3 pb-1 pt-3 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                      {item.label}
                    </div>
                  )}
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={pathname === link.href ? "page" : undefined}
                      className={`block rounded-md px-3 py-2.5 text-sm font-bold transition hover:bg-white/10 hover:text-cyan-300 ${
                        pathname === link.href ? "text-white" : "text-slate-200"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact#demo-form"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-[#087674] shadow-lg shadow-black/20 transition hover:bg-cyan-50 md:hidden"
          >
            Book a Demo
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </nav>
      )}
    </header>
  );
}
