"use client";

import { useI18n } from "@/lib/i18n";

const LOGOS = [
  "NORTHWIND",
  "AURORA·CO",
  "QUANTAM",
  "VESPER",
  "HELIX LABS",
  "TIDAL FINANCIAL",
  "BLACKBIRD",
  "MERIDIAN",
];

export default function Trust() {
  const { t } = useI18n();
  // Duplicate logos for seamless marquee loop
  const all = [...LOGOS, ...LOGOS];

  return (
    <section className="border-b border-white/5 bg-navy-950/40 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-8 flex flex-col items-center gap-2 text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400">
            {t.trust.label}
          </div>
          <p className="text-sm text-slate-300">{t.trust.note}</p>
        </div>

        <div className="relative overflow-hidden">
          {/* Edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-900 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-900 to-transparent" />

          <div className="marquee">
            {all.map((logo, i) => (
              <div
                key={`${logo}-${i}`}
                className="flex shrink-0 items-center gap-2 font-mono text-base font-semibold tracking-[0.18em] text-slate-300/70 transition-colors hover:text-slate-100"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
