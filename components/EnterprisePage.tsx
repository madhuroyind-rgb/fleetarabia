import Link from "next/link";

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

      <div className="relative mx-auto grid min-h-[500px] max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
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
              className="rounded-md bg-blue-700 px-6 py-2.5 text-[11px] font-black text-white shadow-xl shadow-blue-700/30 transition hover:bg-blue-600"
            >
              {primaryCta.label} →
            </Link>

            <Link
              href={secondaryCta.href}
              className="rounded-md border border-white/25 px-6 py-2.5 text-[11px] font-black text-white transition hover:bg-white hover:text-slate-950"
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
        </div>

        <PremiumVisual items={visualItems} />
      </div>
    </section>
  );
}

function PremiumVisual({ items }: { items: string[] }) {
  return (
    <div className="relative hidden min-h-[460px] lg:block">
      <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute right-6 top-8 h-[360px] w-[360px] rounded-full border border-cyan-300/25 bg-[radial-gradient(circle_at_35%_30%,rgba(34,211,238,0.30),rgba(37,99,235,0.16)_35%,rgba(2,6,23,0.45)_72%)] shadow-[0_0_90px_rgba(37,99,235,0.25)]">
        <div className="absolute inset-8 rounded-full border border-cyan-300/20" />
        <div className="absolute inset-16 rounded-full border border-blue-400/20" />

        <div className="absolute left-1/2 top-1/2 h-[2px] w-[500px] -translate-x-1/2 -translate-y-1/2 rotate-12 bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-[2px] w-[500px] -translate-x-1/2 -translate-y-1/2 -rotate-12 bg-gradient-to-r from-transparent via-blue-400/35 to-transparent" />

        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.6rem] bg-gradient-to-r from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-400/25">
          <span className="text-4xl font-black">F</span>
        </div>
      </div>

      <div className="absolute bottom-20 right-0 h-44 w-[620px] rounded-[50%] border border-cyan-300/20" />
      <div className="absolute bottom-28 right-16 h-32 w-[500px] rounded-[50%] border border-blue-400/25" />
      <div className="absolute bottom-36 right-28 h-20 w-[360px] rounded-[50%] border border-cyan-300/20" />

      {items.slice(0, 4).map((item, index) => {
        const positions = [
          "left-4 bottom-36",
          "left-64 bottom-20",
          "right-4 top-52",
          "right-32 bottom-6",
        ];

        return (
          <div
            key={item}
            className={`absolute ${positions[index]} rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl`}
          >
            <div className="h-8 w-20 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300" />
            <p className="mt-3 text-xs font-bold text-cyan-200">{item}</p>
          </div>
        );
      })}
    </div>
  );
}

function PageSection({ section }: { section: Section }) {
  const isDark = true;
  const isTeal = true;

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
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p
            className={`text-xs font-black uppercase tracking-[0.24em] ${
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
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {section.items.map((item) => (
            <article
              key={item.title}
              className={`rounded-2xl border p-5 transition hover:-translate-y-1 ${
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

      <div className="relative mx-auto max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
          Digital Mobility Transformation
        </p>

        <h2 className="mt-5 text-xl font-black tracking-tight md:text-3xl">
          {title}
        </h2>

        <p className="mt-5 text-sm leading-6 text-slate-300">{text}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-blue-700 px-8 py-3 text-xs font-black text-white"
          >
            Book Demo →
          </Link>

          <Link
            href="/solutions"
            className="rounded-md border border-white/30 px-8 py-3 text-xs font-black text-white"
          >
            View Solutions →
          </Link>
        </div>
      </div>
    </section>
  );
}

