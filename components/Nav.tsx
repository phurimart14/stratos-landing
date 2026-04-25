"use client";

import { useI18n } from "@/lib/i18n";

export default function Nav() {
  const { lang, setLang, t } = useI18n();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-navy-900/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="relative">
            <div className="h-7 w-7 rotate-45 rounded-md bg-gradient-to-br from-accent to-accent-dark" />
            <div className="absolute inset-0 h-7 w-7 rotate-45 rounded-md bg-accent/40 blur-md" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-sm font-bold tracking-tight text-white">
              {t.brand.name}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-300">
              digital
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-sm text-slate-200 transition-colors hover:text-white"
          >
            {t.nav.services}
          </a>
          <a
            href="#process"
            className="text-sm text-slate-200 transition-colors hover:text-white"
          >
            {t.nav.process}
          </a>
          <a
            href="#work"
            className="text-sm text-slate-200 transition-colors hover:text-white"
          >
            {t.nav.work}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-0.5 font-mono text-[11px]">
            <button
              onClick={() => setLang("th")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "th"
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              TH
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "en"
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#cta"
            className="hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-[0_0_24px_-8px_rgba(99,102,241,0.6)] transition-all hover:bg-accent-dark hover:shadow-[0_0_32px_-4px_rgba(99,102,241,0.7)] sm:inline-flex"
          >
            {t.nav.cta}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
