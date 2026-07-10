type LegalPageProps = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalPage({ eyebrow, title, lastUpdated, children }: LegalPageProps) {
  return (
    <main className="fleet-teal-page bg-[#087674] text-white">
      <section className="relative overflow-hidden bg-[#087674] px-6 py-14">
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-50">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-3xl font-black tracking-tight text-white md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-cyan-50">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="bg-[#087674] px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 rounded-2xl border border-amber-300/40 bg-amber-300/10 p-5 text-sm leading-6 text-amber-100">
            <strong className="font-black">Draft placeholder.</strong> This page has not yet
            been reviewed by legal counsel. Do not rely on this content until it has been
            finalized and approved.
          </div>

          <div className="rounded-3xl border border-white/20 bg-white p-8 text-slate-800 shadow-2xl shadow-black/10 sm:p-10">
            <div className="space-y-6 text-sm leading-7">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
