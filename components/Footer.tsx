"use client";

import { withBase } from "@/lib/basePath";
import { StoreBadges } from "./StoreBadges";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="support" className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="Doukani"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg object-cover ring-1 ring-zinc-200"
            />
            <span className="font-semibold text-zinc-900">دكاني / Doukani</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-600">{t.heroSubtitle}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-zinc-900">{t.footerSupport}</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600">
            {t.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="transition hover:text-brand-700"
                  dir="ltr"
                >
                  {phone}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a href={withBase("/privacy.html")} className="text-zinc-600 hover:text-brand-700">
              {t.privacy}
            </a>
            <a href={withBase("/delete-account.html")} className="text-zinc-600 hover:text-brand-700">
              {t.deleteAccount}
            </a>
          </div>
        </div>

        <div>
          <StoreBadges size="sm" />
        </div>
      </div>
      <div className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500">
        {t.footerRights}
      </div>
    </footer>
  );
}
