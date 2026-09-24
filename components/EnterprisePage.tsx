import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import HeroVisual, { type HeroVisualSpec } from "@/components/HeroVisual";
import { slugify } from "@/lib/slug";

type CardItem = {
  title: string;
  text?: string;
  tag?: string;
  icon?: LucideIcon;
  href?: string;
  linkLabel?: string;
};

type Section = {
  eyebrow: string;
  title: string;
  text: string;
  items: CardItem[];
  // All sections stay on brand teal. "light" (default) uses white cards,
  // "dark" sits on a deeper teal band, "teal" uses glass cards.
  variant?: "light" | "dark" | "teal";
  // Give each card an id from its title so other pages can deep-link to it.
  anchors?: boolean;
  // Title-only tiles, for short capability lists where a sentence per item adds nothing.
  compact?: boolean;
  // Number the cards 01, 02… (the homepage's tile style) when they carry no tag of their own.
  numbered?: boolean;
  // Two cards per row in a narrower column, for sections with only a couple of cards.
  columns?: 2 | 4;
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
  // The hero's right-hand visual, specific to the page (see HeroVisual.tsx).
  visual: HeroVisualSpec;
  sections: Section[];
  finalCtaTitle?: string;
  finalCtaText?: string;
  // Render children directly under the hero instead of after the sections.
  childrenFirst?: boolean;
  children?: ReactNode;
};

const TEAL_PATTERN =
  "absolute inset-0 bg-[radial-gradient(circle_at_0_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),radial-gradient(circle_at_100%_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),linear-gradient(135deg,rgba(0,65,70,0.36),rgba(8,118,116,0.96))] bg-[size:130px_130px,130px_130px,cover]";

const PRIMARY_BUTTON =
  "group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-[#087674] shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-cyan-50";

const SECONDARY_BUTTON =
  "group inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#087674]";

const BUTTON_ARROW = "h-4 w-4 transition group-hover:translate-x-0.5";

export default function EnterprisePage({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta = { label: "Book a Demo", href: "/contact#demo-form" },
  secondaryCta = { label: "Explore Solutions", href: "/solutions" },
  proofPoints = ["Enterprise Ready", "ERP Integrated", "Middle East Expertise"],
  visual,
  sections,
  finalCtaTitle = "Ready to modernize your mobility operations?",
  finalCtaText = "Let's build your digital rental, leasing, transportation and ERP-connected operation together.",
  childrenFirst = false,
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
        visual={visual}
      />

      {childrenFirst && children}

      {sections.map((section) => (
        <PageSection key={section.title} section={section} />
      ))}

      {!childrenFirst && children}

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
  visual,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  proofPoints: string[];
  visual: HeroVisualSpec;
}) {
  return (
    <section className="relative overflow-hidden bg-[#087674]">
      <div className={TEAL_PATTERN} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:54px_54px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 md:py-20 xl:min-h-[540px] xl:grid-cols-[0.88fr_1.12fr]">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-50 sm:text-sm">
            {eyebrow}
          </p>

          <h1 className="mt-5 max-w-3xl text-3xl font-black leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {title}{" "}
            <span className="bg-gradient-to-r from-cyan-200 to-cyan-300 bg-clip-text text-transparent">
              {highlight}
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-cyan-50">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href={primaryCta.href} className={PRIMARY_BUTTON}>
              {primaryCta.label}
              <ArrowRight aria-hidden="true" className={BUTTON_ARROW} />
            </Link>

            <Link href={secondaryCta.href} className={SECONDARY_BUTTON}>
              {secondaryCta.label}
              <ArrowRight aria-hidden="true" className={BUTTON_ARROW} />
            </Link>
          </div>

          <div className="mt-8 grid max-w-2xl gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/50 text-cyan-300">
                  <Check aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="text-sm text-cyan-50">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <HeroVisual spec={visual} />
        </Reveal>
      </div>
    </section>
  );
}

// Short tags ("CR", "01") render as the homepage's square tile; longer ones
// ("Layer 01", "Soon") as a pill.
function isTileTag(tag: string) {
  return tag.length <= 2;
}

function PageSection({ section }: { section: Section }) {
  const variant = section.variant ?? "light";
  const onWhite = variant === "light";

  const cardClass = onWhite
    ? "border-white/40 bg-white text-slate-950 shadow-xl shadow-black/[0.08] hover:shadow-2xl hover:shadow-black/15"
    : "border-white/15 bg-white/10 text-white shadow-xl shadow-black/10 backdrop-blur hover:border-cyan-300/40 hover:bg-white/15";

  return (
    <section
      className={`relative overflow-hidden px-5 py-16 text-white sm:px-6 md:py-24 ${
        variant === "dark" ? "bg-[#065f5e]" : "bg-[#087674]"
      }`}
    >
      {variant !== "dark" && <div className={TEAL_PATTERN} />}

      <div className="relative mx-auto max-w-[77rem]">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-50">
            {section.eyebrow}
          </p>

          <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">
            {section.title}
          </h2>

          <p className="mt-5 leading-8 text-cyan-50">
            {section.text}
          </p>
        </Reveal>

        {section.compact ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {section.items.map((item, index) => (
              <Reveal key={item.title} delay={Math.min(index * 0.05, 0.3)}>
                <div className="flex h-full items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-sm font-bold text-white">
                  <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-cyan-300" strokeWidth={2.5} />
                  {item.title}
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
        /* Flex rather than grid so a short last row is centred, not orphaned left. */
        <div className={`flex flex-wrap justify-center gap-5 ${section.columns === 2 ? "mx-auto max-w-4xl" : ""}`}>
          {section.items.map((item, index) => {
            const tag = item.tag ?? (section.numbered ? String(index + 1).padStart(2, "0") : undefined);

            return (
            <Reveal
              key={item.title}
              delay={Math.min(index * 0.06, 0.24)}
              className={`w-full md:w-[calc(50%-10px)] ${section.columns === 2 ? "" : "lg:w-[calc(25%-15px)]"}`}
            >
              <article
                id={section.anchors ? slugify(item.title) : undefined}
                className={`flex h-full scroll-mt-28 flex-col rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${cardClass}`}
              >
                {item.icon ? (
                  <div
                    aria-hidden="true"
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${
                      onWhite ? "bg-[#087674]/10 text-[#087674] ring-1 ring-[#087674]/10" : "bg-white/15 text-white ring-1 ring-white/20"
                    }`}
                  >
                    <item.icon className="h-6 w-6" strokeWidth={1.9} />
                  </div>
                ) : null}
                {!item.icon && tag &&
                  (isTileTag(tag) ? (
                    <div
                      aria-hidden="true"
                      className={`mb-5 flex items-center justify-center rounded-2xl text-sm font-black text-[#087674] ${
                        onWhite ? "h-14 w-14 bg-cyan-50 ring-1 ring-cyan-100" : "h-12 w-12 bg-white"
                      }`}
                    >
                      {tag}
                    </div>
                  ) : (
                    <div
                      className={`mb-5 inline-flex self-start rounded-xl px-3 py-1.5 text-xs font-black ${
                        onWhite ? "bg-cyan-50 text-[#087674] ring-1 ring-cyan-100" : "bg-white/10 text-cyan-50"
                      }`}
                    >
                      {tag}
                    </div>
                  ))}

                <h3 className="text-lg font-bold leading-snug tracking-tight">{item.title}</h3>
                {item.text && (
                  <p className={`mt-3 flex-1 text-sm leading-6 ${onWhite ? "text-slate-600" : "text-cyan-50"}`}>
                    {item.text}
                  </p>
                )}
                {item.href && (
                  <Link
                    href={item.href}
                    className={`mt-5 inline-flex items-center text-sm font-bold transition hover:translate-x-1 ${
                      onWhite ? "text-[#087674]" : "text-cyan-50"
                    }`}
                  >
                    {item.linkLabel ?? "Read Guide →"}
                  </Link>
                )}
              </article>
            </Reveal>
            );
          })}
        </div>
        )}
      </div>
    </section>
  );
}

function FinalCTA({ title, text }: { title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-[#087674] px-5 py-16 text-center text-white sm:px-6 md:py-24">
      <div className={TEAL_PATTERN} />

      <Reveal className="relative mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-50">
          Start the Conversation
        </p>

        <h2 className="mt-5 text-2xl font-black tracking-tight md:text-4xl">
          {title}
        </h2>

        <p className="mt-5 text-base leading-8 text-cyan-50">{text}</p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contact#demo-form" className={PRIMARY_BUTTON}>
            Book a Demo
            <ArrowRight aria-hidden="true" className={BUTTON_ARROW} />
          </Link>

          <Link href="/solutions" className={SECONDARY_BUTTON}>
            View Solutions
            <ArrowRight aria-hidden="true" className={BUTTON_ARROW} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
