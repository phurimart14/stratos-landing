"use client";

import { useI18n } from "@/lib/i18n";

export default function Work() {
  const { t } = useI18n();

  return (
    <section
      id="work"
      className="relative border-b border-white/5 bg-navy-900 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent-light">
              // {t.work.label}
            </div>
            <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t.work.h2}
            </h2>
            <p className="text-lg text-slate-300">{t.work.sub}</p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {t.work.cases.map((c) => (
            <article
              key={c.name}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.04] lg:p-8"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-light">
                  {c.industry}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  Case study
                </span>
              </div>

              <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-white">
                {c.name}
              </h3>
              <div className="mb-4 font-mono text-sm font-medium text-accent-light">
                {c.result}
              </div>

              <p className="mb-6 text-sm leading-relaxed text-slate-300">
                {c.desc}
              </p>

              {/* Stats row */}
              <div className="mt-auto grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]">
                {c.stats.map((s) => (
                  <div key={s.label} className="bg-navy-900/40 p-3">
                    <div className="font-display text-xl font-bold text-white">
                      {s.value}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
