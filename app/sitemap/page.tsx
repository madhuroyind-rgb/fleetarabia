import type { Metadata } from "next";
import Link from "next/link";
import { SITE_ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitemap | FleetArabia",
  description: "Browse all pages on the FleetArabia website.",
  alternates: { canonical: "/sitemap" },
};

export default function SitemapPage() {
  return (
    <main className="fleet-teal-page bg-[#087674] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
          Sitemap
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
          All FleetArabia Pages
        </h1>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {SITE_ROUTES.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className="block rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-sm font-black transition hover:border-cyan-300/40 hover:bg-white/15"
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
