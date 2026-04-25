"use client";

import { useI18n } from "@/lib/i18n";

export default function Services() {
  const { t } = useI18n();

  return (
    <section
      id="services"
      className="relative border-b border-white/5 bg-navy-900 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent-light">
            // {t.services.label}
          </div>
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t.services.h2}
          </h2>
          <p className="text-lg text-slate-300">{t.services.sub}</p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2">
          {t.services.items.map((item, idx) => (
            <div
              key={item.num}
              className="group card-gradient relative bg-navy-900 p-8 transition-colors hover:bg-white/[0.04] lg:p-10"
            >
              {/* Subtle gradient on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 opacity-0 transition-opacity group-hover:from-accent/[0.03] group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-accent">
                    {item.num}
                  </span>
                  <span
                    className="font-mono text-xs text-slate-400 opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden
                  >
                    →
                  </span>
                </div>

                <h3 className="mb-3 font-display text-2xl font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mb-6 text-[15px] leading-relaxed text-slate-300">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
