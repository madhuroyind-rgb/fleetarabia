"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Integrations", href: "/integrations" },
  { label: "Services", href: "/services" },
  { label: "Company", href: "/company" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#041124]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[64px] max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-12">
            <div className="absolute left-0 top-1 h-5 w-9 rounded-br-2xl rounded-tl-2xl bg-gradient-to-r from-cyan-400 to-blue-600" />
            <div className="absolute bottom-1 left-0 h-5 w-7 rounded-br-2xl rounded-tl-2xl bg-gradient-to-r from-cyan-300 to-blue-500" />
          </div>

          <div>
            <div className="text-xl font-black leading-none tracking-tight">
              Fleet<span className="text-cyan-400">Arabia</span>
            </div>
            <div className="mt-1 text-[10px] font-medium tracking-wide text-slate-400">
              Enterprise Mobility Solutions
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-semibold xl:flex">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
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

        <Link
          href="/contact"
          className="hidden rounded-md bg-blue-700 px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-blue-700/30 transition hover:bg-blue-600 md:inline-flex"
        >
          Book Demo →
        </Link>
      </div>
    </header>
  );
}
