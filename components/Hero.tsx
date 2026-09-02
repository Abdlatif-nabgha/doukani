"use client";

import { PhoneMockup } from "./PhoneMockup";
import { StoreBadges } from "./StoreBadges";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(15,157,126,0.09),_transparent_55%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <div className="animate-fade-up text-center lg:text-start">
          <p className="mb-4 inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            POS · Inventory · Team
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-zinc-950 sm:text-5xl lg:text-[3.25rem]">
            {t.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg lg:mx-0">
            {t.heroSubtitle}
          </p>
          <div id="download" className="mt-8 flex flex-col items-center gap-4 lg:items-start">
            <StoreBadges />
            <p className="text-sm text-zinc-500">{t.ctaHint}</p>
          </div>
        </div>
        <div className="animate-fade-up [animation-delay:120ms]">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
