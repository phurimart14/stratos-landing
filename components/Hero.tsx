"use client";

import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/5"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pt-28 lg:px-12 lg:pb-32 lg:pt-32">
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 font-mono text-xs text-accent-light">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-glow opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {t.hero.eyebrow}
        </div>

        <h1 className="mb-6 max-w-4xl whitespace-pre-line font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {t.hero.h1Before}
          <span className="bg-gradient-to-r from-accent-light via-accent to-accent-glow bg-clip-text text-transparent">
            {t.hero.h1Accent}
          </span>
          {t.hero.h1After}
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
          {t.hero.lead}
        </p>

        <div className="mb-16 flex flex-wrap items-center gap-3">
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-slate-100"
          >
            {t.hero.ctaPrimary}
            <span
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/25 hover:bg-white/10"
          >
            {t.hero.ctaGhost}
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-4">
          {t.hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-navy-900/40 p-5 text-center sm:p-6"
            >
              <div className="stat-shine mb-1 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.value}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
