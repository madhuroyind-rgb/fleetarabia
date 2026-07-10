import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import { SITE_ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found | FleetArabia",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-[#041124] px-6 py-20 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),radial-gradient(circle_at_100%_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),linear-gradient(135deg,rgba(0,65,70,0.32),rgba(8,118,116,0.96))] bg-[size:130px_130px,130px_130px,cover]" />

      <div className="relative">
        <Logo className="mx-auto h-14 w-14" />

        <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
          404
        </p>

        <h1 className="mt-5 text-3xl font-black tracking-tight text-white md:text-4xl">
          This page doesn&apos;t exist
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-300">
          The page you&apos;re looking for may have been moved or the link may be
          incorrect. Here are a few places to go instead.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-md bg-blue-700 px-6 py-2.5 text-[11px] font-black text-white shadow-xl shadow-blue-700/30 transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Back to Home →
          </Link>

          <Link
            href="/contact"
            className="rounded-md border border-white/25 px-6 py-2.5 text-[11px] font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
          >
            Contact Us →
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-slate-400">
          {SITE_ROUTES.filter((r) => r.path !== "/").map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="transition hover:text-cyan-300"
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
