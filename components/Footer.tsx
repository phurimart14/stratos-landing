"use client";

import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-navy-950 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          {/* Brand column */}
          <div>
            <a href="#top" className="mb-4 flex items-center gap-2.5">
              <div className="h-7 w-7 rotate-45 rounded-md bg-gradient-to-br from-accent to-accent-dark" />
              <div className="flex flex-col leading-none">
                <span className="font-display text-sm font-bold tracking-tight text-white">
                  {t.brand.name}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-300">
                  digital
                </span>
              </div>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-slate-300">
              {t.footer.desc}
            </p>
          </div>

          {/* Link columns */}
          {t.footer.columns.map((col) => (
            <div key={col.title}>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-slate-200 transition-colors hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-6 font-mono text-xs text-slate-400">
          <div>{t.footer.copyright}</div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
