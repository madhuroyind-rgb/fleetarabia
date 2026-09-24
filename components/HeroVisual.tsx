import Link from "next/link";
import { Check, type LucideIcon } from "lucide-react";

// Page-specific hero visuals for EnterprisePage and the Integrations page.
// Each one says something about THAT page (its workflow, layers, options or
// modules) instead of repeating the shared "F" hub. Every label here must come
// from copy already on the page it decorates — no new claims, no numbers, no
// mock product screens. Pure markup, no client JS, so it renders without JS.
// The home page keeps ConnectedVisual (all 13 modules around the platform).

type Row = { label: string; detail?: string; icon?: LucideIcon };

export type HeroVisualSpec =
  | { kind: "flow"; caption: string; steps: Row[]; footer?: string }
  | { kind: "stack"; caption: string; layers: (Row & { tag: string })[]; footer?: string }
  | { kind: "split"; caption: string; options: { title: string; icon: LucideIcon; points: string[] }[]; footer: string }
  | { kind: "groups"; caption: string; groups: { title: string; items: Row[] }[] }
  | { kind: "tiles"; caption: string; items: Row[] }
  | { kind: "bridge"; caption: string; left: { title: string; items: string[] }; center: string; right: Row[] }
  | { kind: "docs"; caption: string; docs: { tag: string; title: string; href: string }[]; pending: string }
  | { kind: "facts"; caption: string; facts: Row[] };

const CARD =
  "w-full max-w-[520px] rounded-3xl border border-white/15 bg-white/10 p-7 shadow-2xl shadow-black/15 backdrop-blur";
const CAPTION = "text-xs font-bold uppercase tracking-[0.22em] text-cyan-100";
const ICON_BOX = "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white ring-1 ring-white/20";

export default function HeroVisual({ spec }: { spec: HeroVisualSpec }) {
  return (
    <div className="hidden min-w-0 justify-center xl:flex">
      <div className={CARD}>
        <p className={CAPTION}>{spec.caption}</p>
        <div className="mt-6">
          <Body spec={spec} />
        </div>
      </div>
    </div>
  );
}

function Body({ spec }: { spec: HeroVisualSpec }) {
  switch (spec.kind) {
    case "flow":
      return (
        <>
          <ol className="relative space-y-4">
            <span aria-hidden="true" className="absolute bottom-5 left-[17px] top-5 w-px bg-gradient-to-b from-cyan-200/70 to-cyan-200/10" />
            {spec.steps.map((step, i) => (
              <li key={step.label} className="relative flex items-start gap-4">
                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-[#087674] shadow-lg shadow-black/10">
                  {i + 1}
                </span>
                <div className="flex min-w-0 flex-1 items-start justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5">
                  <div className="min-w-0">
                    <p className="text-[15px] font-bold leading-6 text-white">{step.label}</p>
                    {step.detail && <p className="text-sm leading-5 text-cyan-50">{step.detail}</p>}
                  </div>
                  {step.icon && <step.icon aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-cyan-200" />}
                </div>
              </li>
            ))}
          </ol>
          {spec.footer && <Footer text={spec.footer} />}
        </>
      );

    case "stack":
      return (
        <>
          <ol className="space-y-3">
            {spec.layers.map((layer, i) => (
              <li
                key={layer.label}
                className="flex items-center gap-4 rounded-2xl border border-white/15 px-5 py-4 shadow-lg shadow-black/10"
                style={{ marginLeft: `${i * 14}px`, background: `rgba(255,255,255,${0.16 - i * 0.03})` }}
              >
                {layer.icon && (
                  <span className={ICON_BOX}>
                    <layer.icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.9} />
                  </span>
                )}
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">{layer.tag}</p>
                  <p className="text-[15px] font-bold leading-6 text-white">{layer.label}</p>
                  {layer.detail && <p className="text-sm leading-5 text-cyan-50">{layer.detail}</p>}
                </div>
              </li>
            ))}
          </ol>
          {spec.footer && <Footer text={spec.footer} />}
        </>
      );

    case "split":
      return (
        <>
          <div className="grid grid-cols-2 gap-4">
            {spec.options.map((option) => (
              <div key={option.title} className="rounded-2xl border border-white/15 bg-white/[0.08] p-5">
                <span className={ICON_BOX}>
                  <option.icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.9} />
                </span>
                <p className="mt-4 text-base font-bold text-white">{option.title}</p>
                <ul className="mt-3 space-y-2">
                  {option.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm leading-5 text-cyan-50">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" strokeWidth={2.5} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div aria-hidden="true" className="mx-auto grid w-1/2 grid-cols-2">
            <span className="h-5 border-r border-dashed border-cyan-200/50" />
            <span />
          </div>
          <p className="rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-[#087674]">{spec.footer}</p>
        </>
      );

    case "groups":
      return (
        <div className="grid grid-cols-3 gap-4">
          {spec.groups.map((group) => (
            <div key={group.title}>
              <p className="border-b border-white/15 pb-2 text-sm font-bold text-white">{group.title}</p>
              <ul className="mt-3 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.label} className="flex items-center gap-2.5 text-sm leading-5 text-cyan-50">
                    {item.icon && <item.icon aria-hidden="true" className="h-4 w-4 shrink-0 text-cyan-200" strokeWidth={1.9} />}
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case "tiles":
      return (
        <ul className="grid grid-cols-2 gap-3">
          {spec.items.map((item) => (
            <li key={item.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3">
              {item.icon && (
                <span className={ICON_BOX}>
                  <item.icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.9} />
                </span>
              )}
              <span className="text-sm font-semibold leading-5 text-white">{item.label}</span>
            </li>
          ))}
        </ul>
      );

    case "bridge":
      return (
        <div className="grid grid-cols-[1fr_auto_1.15fr] items-center gap-4">
          <div className="rounded-2xl bg-white p-5 text-[#087674] shadow-xl shadow-black/10">
            <p className="text-base font-black">{spec.left.title}</p>
            <ul className="mt-3 space-y-2">
              {spec.left.items.map((item) => (
                <li key={item} className="text-sm font-semibold text-slate-700">{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex h-full flex-col items-center justify-center gap-2">
            <span aria-hidden="true" className="w-px flex-1 bg-gradient-to-b from-transparent to-cyan-200/60" />
            <span className="rounded-full border border-cyan-200/40 bg-[#065f5e] px-3 py-1.5 text-xs font-bold text-cyan-50">
              {spec.center}
            </span>
            <span aria-hidden="true" className="w-px flex-1 bg-gradient-to-b from-cyan-200/60 to-transparent" />
          </div>
          <ul className="space-y-2.5">
            {spec.right.map((item) => (
              <li key={item.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-3.5 py-2.5">
                {item.icon && <item.icon aria-hidden="true" className="h-4 w-4 shrink-0 text-cyan-200" strokeWidth={1.9} />}
                <span className="text-sm font-semibold leading-5 text-white">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "docs":
      return (
        <div className="space-y-4">
          {spec.docs.map((doc, i) => (
            <Link
              key={doc.title}
              href={doc.href}
              className="block rounded-2xl bg-white p-5 text-slate-900 shadow-xl shadow-black/10 transition hover:-translate-y-0.5"
              style={{ marginLeft: `${i * 28}px`, marginRight: `${(spec.docs.length - 1 - i) * 28}px` }}
            >
              <span className="inline-flex rounded-lg bg-cyan-50 px-2.5 py-1 text-xs font-black text-[#087674] ring-1 ring-cyan-100">
                {doc.tag}
              </span>
              <p className="mt-3 text-base font-bold leading-6">{doc.title}</p>
              <div aria-hidden="true" className="mt-3 space-y-2">
                <span className="block h-2 w-full rounded-full bg-slate-100" />
                <span className="block h-2 w-5/6 rounded-full bg-slate-100" />
                <span className="block h-2 w-2/3 rounded-full bg-slate-100" />
              </div>
            </Link>
          ))}
          <p className="rounded-2xl border border-dashed border-white/25 px-5 py-4 text-sm text-cyan-50">{spec.pending}</p>
        </div>
      );

    case "facts":
      return (
        <dl className="divide-y divide-white/10">
          {spec.facts.map((fact) => (
            <div key={fact.label} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
              {fact.icon && (
                <span className={ICON_BOX}>
                  <fact.icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.9} />
                </span>
              )}
              <div className="min-w-0">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">{fact.label}</dt>
                <dd className="mt-1 text-[15px] font-semibold leading-6 text-white">{fact.detail}</dd>
              </div>
            </div>
          ))}
        </dl>
      );
  }
}

function Footer({ text }: { text: string }) {
  return (
    <p className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-cyan-50">
      <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-cyan-300" strokeWidth={2.5} />
      {text}
    </p>
  );
}
