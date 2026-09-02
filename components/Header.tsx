"use client";

import { useLanguage } from "./LanguageProvider";

export function Header() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="Doukani"
            width={36}
            height={36}
            className="h-9 w-9 rounded-xl object-cover ring-1 ring-zinc-200"
          />
          <span className="text-[15px] font-semibold tracking-tight text-zinc-900">
            {t.brand}
            <span className="mx-1.5 text-zinc-300">/</span>
            <span className="font-medium text-zinc-500">{t.brandEn}</span>
          </span>
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center rounded-full bg-zinc-100 p-0.5 text-xs font-semibold text-zinc-500">
            <button
              type="button"
              onClick={() => setLocale("ar")}
              className={`rounded-full px-2.5 py-1 transition ${
                locale === "ar" ? "bg-white text-brand-700 shadow-sm" : "hover:text-zinc-800"
              }`}
            >
              AR
            </button>
            <button
              type="button"
              onClick={() => setLocale("fr")}
              className={`rounded-full px-2.5 py-1 transition ${
                locale === "fr" ? "bg-white text-brand-700 shadow-sm" : "hover:text-zinc-800"
              }`}
            >
              FR
            </button>
          </div>
          <a
            href="#support"
            className="text-sm font-medium text-zinc-600 transition hover:text-brand-700"
          >
            {t.navSupport}
          </a>
        </div>
      </div>
    </header>
  );
}
