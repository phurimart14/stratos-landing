"use client";

import { useI18n } from "@/lib/i18n";

export default function Process() {
  const { t } = useI18n();

  return (
    <section
      id="process"
      className="relative border-b border-white/5 bg-navy-950 py-24 lg:py-32"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent-light">
            // {t.process.label}
          </div>
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t.process.h2}
          </h2>
          <p className="text-lg text-slate-300">{t.process.sub}</p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {t.process.steps.map((step) => (
              <div key={step.num} className="relative">
                {/* Number badge */}
                <div className="relative z-10 mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-navy-900 font-mono text-base font-semibold text-accent shadow-[0_0_24px_-4px_rgba(99,102,241,0.4)]">
                  {step.num}
                </div>

                <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  {step.weeks}
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-white">
                  {step.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
