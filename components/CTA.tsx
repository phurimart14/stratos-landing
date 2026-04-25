"use client";

import { useI18n } from "@/lib/i18n";
import { useState } from "react";

export default function CTA() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // In production, send to API endpoint or email service
    setSubmitted(true);
  };

  return (
    <section id="cta" className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 font-mono text-xs text-accent-light">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {t.cta.eyebrow}
        </div>

        <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t.cta.h2Before}
          <span className="bg-gradient-to-r from-accent-light via-accent to-accent-glow bg-clip-text text-transparent">
            {t.cta.h2Accent}
          </span>
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-lg text-slate-300">
          {t.cta.sub}
        </p>

        {submitted ? (
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-3 text-sm text-accent-light">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Got it — we&apos;ll reach out within 24 hours.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.cta.placeholder}
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-400 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
            <button
              type="submit"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_0_24px_-8px_rgba(99,102,241,0.6)] transition-all hover:bg-accent-dark hover:shadow-[0_0_32px_-4px_rgba(99,102,241,0.7)]"
            >
              {t.cta.button}
            </button>
          </form>
        )}

        <p className="mt-6 font-mono text-xs text-slate-400">{t.cta.note}</p>
      </div>
    </section>
  );
}
