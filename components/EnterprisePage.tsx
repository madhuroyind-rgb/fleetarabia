import type { ReactNode } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ConnectedVisual from "@/components/ConnectedVisual";

type CardItem = {
  title: string;
  text: string;
  tag?: string;
};

type Section = {
  eyebrow: string;
  title: string;
  text: string;
  items: CardItem[];
  variant?: "light" | "dark" | "teal";
};

type EnterprisePageProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  proofPoints?: string[];
  visualItems?: string[];
  sections: Section[];
  finalCtaTitle?: string;
  finalCtaText?: string;
  children?: ReactNode;
};

export default function EnterprisePage({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta = { label: "Book Demo", href: "/contact" },
  secondaryCta = { label: "Explore Solutions", href: "/solutions" },
  proofPoints = ["Enterprise Ready", "ERP Integrated", "Middle East Expertise"],
  visualItems = ["Operations", "Fleet", "Finance", "ERP"],
  sections,
  finalCtaTitle = "Ready to modernize your mobility operations?",
  finalCtaText = "Let's build your digital rental, leasing, transportation and ERP-connected operation together.",
  children,
}: EnterprisePageProps) {
  return (
    <main className="fleet-teal-page bg-[#087674] text-white">
      <Hero
        eyebrow={eyebrow}
        title={title}
        highlight={highlight}
        description={description}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        proofPoints={proofPoints}
        visualItems={visualItems}
      />

      {sections.map((section) => (
        <PageSection key={section.title} section={section} />
      ))}

      {children}

      <FinalCTA title={finalCtaTitle} text={finalCtaText} />
    </main>
  );
}

function Hero({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
  proofPoints,
  visualItems,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  proofPoints: string[];
  visualItems: string[];
}) {
  return (
    <section className="relative overflow-hidden bg-[#041124]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),radial-gradient(circle_at_100%_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),linear-gradient(135deg,rgba(0,65,70,0.32),rgba(8,118,116,0.96))] bg-[size:130px_130px,130px_130px,cover]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:54px_54px]" />

      <div className="relative mx-auto grid min-h-[500px] max-w-7xl items-center gap-10 px-6 py-10 xl:grid-cols-[0.88fr_1.12fr]">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
            {eyebrow}
          </p>

          <h1 className="mt-5 max-w-3xl text-3xl font-black leading-[1.12] tracking-tight text-white md:text-4xl">
            {title}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {highlight}
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-300">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={primaryCta.href}
              className="rounded-md bg-blue-700 px-6 py-2.5 text-[11px] font-black text-white shadow-xl shadow-blue-700/30 transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
              {primaryCta.label} →
            </Link>

            <Link
              href={secondaryCta.href}
              className="rounded-md border border-white/25 px-6 py-2.5 text-[11px] font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
            >
              {secondaryCta.label} →
            </Link>
          </div>

          <div className="mt-8 grid max-w-2xl gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/50 text-xs text-cyan-300">
                  ✓
                </span>
                <span className="text-xs font-semibold text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <PremiumVisual items={visualItems} />
        </Reveal>
      </div>
    </section>
  );
}

function PremiumVisual({ items }: { items: string[] }) {
  return (
    <div className="hidden min-w-0 justify-center overflow-hidden xl:flex">
      <ConnectedVisual
        nodes={items.slice(0, 4).map((title) => ({ title }))}
        size={460}
        centerLabel="F"
        centerSub="FleetArabia"
      />
    </div>
  );
}

function PageSection({ section }: { section: Section }) {
  const variant = section.variant ?? "teal";
  const isDark = variant === "dark";
  const isTeal = variant === "teal";

  return (
    <section
      className={`relative overflow-hidden px-6 py-14 ${
        isTeal
          ? "bg-[#087674] text-white"
          : isDark
            ? "bg-[#061426] text-white"
            : "bg-slate-50 text-slate-950"
      }`}
    >
      {isTeal && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),radial-gradient(circle_at_100%_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),linear-gradient(135deg,rgba(0,65,70,0.32),rgba(8,118,116,0.96))] bg-[size:130px_130px,130px_130px,cover]" />
      )}

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <p
            className={`text-xs font-bold uppercase tracking-[0.24em] ${
              isDark || isTeal ? "text-cyan-300" : "text-blue-700"
            }`}
          >
            {section.eyebrow}
          </p>

          <h2 className="mt-4 text-xl font-black tracking-tight md:text-3xl">
            {section.title}
          </h2>

          <p
            className={`mt-5 leading-7 ${
              isDark || isTeal ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {section.text}
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {section.items.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index * 0.06, 0.24)}>
              <article
                className={`h-full rounded-2xl border p-5 transition hover:-translate-y-1 ${
                  isDark || isTeal
                    ? "border-white/10 bg-white/[0.06] hover:border-cyan-300/40 hover:bg-white/[0.09]"
                    : "border-slate-200 bg-white shadow-sm hover:shadow-xl"
                }`}
              >
                {item.tag && (
                  <div
                    className={`mb-5 inline-flex rounded-xl px-3 py-2 text-xs font-black ${
                      isDark || isTeal
                        ? "bg-white/10 text-cyan-200"
                        : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    {item.tag}
                  </div>
                )}

                <h3 className="text-sm font-black">{item.title}</h3>
                <p
                  className={`mt-2 text-xs leading-5 ${
                    isDark || isTeal ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ title, text }: { title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-[#087674] px-6 py-14 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),radial-gradient(circle_at_100%_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),linear-gradient(135deg,rgba(0,65,70,0.36),rgba(8,118,116,0.96))] bg-[size:130px_130px,130px_130px,cover]" />

      <Reveal className="relative mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
          Digital Mobility Transformation
        </p>

        <h2 className="mt-5 text-xl font-black tracking-tight md:text-3xl">
          {title}
        </h2>

        <p className="mt-5 text-sm leading-6 text-slate-300">{text}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-blue-700 px-8 py-3 text-xs font-black text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Book Demo →
          </Link>

          <Link
            href="/solutions"
            className="rounded-md border border-white/30 px-8 py-3 text-xs font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#087674]"
          >
            View Solutions →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

