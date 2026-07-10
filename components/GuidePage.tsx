import Link from "next/link";

type GuidePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

export default function GuidePage({ eyebrow, title, intro, children }: GuidePageProps) {
  return (
    <main className="fleet-teal-page bg-[#087674] text-white">
      <section className="relative overflow-hidden bg-[#041124] px-6 py-14">
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-3xl font-black tracking-tight text-white md:text-4xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300">
            {intro}
          </p>
        </div>
      </section>

      <section className="bg-[#087674] px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-white/20 bg-white p-8 text-slate-800 shadow-2xl shadow-black/10 sm:p-10">
            <div className="space-y-6 text-sm leading-7">{children}</div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-white px-7 py-3 text-xs font-black text-[#087674] shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              Talk to Us →
            </Link>
            <Link
              href="/resources"
              className="rounded-md border border-white/25 px-7 py-3 text-xs font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
            >
              Back to Resources →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
