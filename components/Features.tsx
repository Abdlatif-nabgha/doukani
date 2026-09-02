"use client";

import { useLanguage } from "./LanguageProvider";

const icons = [
  <svg key="sales" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 19V7m5 12V5m5 14v-8m5 8V3" strokeLinecap="round" />
  </svg>,
  <svg key="stock" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 8.5 12 4l8 4.5v9L12 22l-8-4.5v-9Z" />
    <path d="M12 12.5 20 8M12 12.5V22M12 12.5 4 8" />
  </svg>,
  <svg key="reports" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 19h14M7 16V9m5 7V5m5 11v-6" strokeLinecap="round" />
  </svg>,
  <svg key="team" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="9" cy="8" r="3" />
    <circle cx="16.5" cy="9" r="2.4" />
    <path d="M3.8 19c.6-3 2.8-4.8 5.2-4.8S13.6 16 14.2 19M14.4 14.4c1.8-.3 3.6.8 4.4 2.8" strokeLinecap="round" />
  </svg>,
];

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="border-t border-zinc-200/80 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-brand-700">{t.featuresEyebrow}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
            {t.featuresTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">{t.featuresSubtitle}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.map((feature, index) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-zinc-200/80 bg-[#fbfcfb] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-soft"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-4 inline-flex rounded-xl bg-brand-50 p-3 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
                {icons[index]}
              </div>
              <h3 className="text-lg font-bold text-zinc-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
