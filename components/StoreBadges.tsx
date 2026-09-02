"use client";

import { STORE_LINKS } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="currentColor" aria-hidden>
      <path d="M16.7 12.37c.03 3.23 2.83 4.31 2.86 4.32-.02.07-.45 1.53-1.47 3.03-.89 1.3-1.81 2.59-3.26 2.62-1.43.03-1.88-.84-3.52-.84-1.63 0-2.14.82-3.49.87-1.4.05-2.47-1.4-3.37-2.69-1.84-2.65-3.25-7.48-1.36-10.75.94-1.62 2.62-2.65 4.44-2.68 1.39-.03 2.7.93 3.52.93.82 0 2.36-1.15 3.98-.98.68.03 2.58.27 3.8 2.06-.1.06-2.27 1.33-2.13 4.11ZM14.6 6.2c.75-.91 1.26-2.17 1.12-3.43-1.08.04-2.39.72-3.16 1.63-.7.81-1.31 2.1-1.15 3.34 1.22.09 2.46-.62 3.19-1.54Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden>
      <path fill="#34A853" d="M3.2 20.6 13.1 12 3.2 3.4v17.2Z" />
      <path fill="#4285F4" d="m13.1 12 2.7-2.3 4.6 2.6c.5.3.5 1.1 0 1.4l-4.6 2.6L13.1 12Z" />
      <path fill="#FBBC04" d="M13.1 12 3.2 3.4c-.2.1-.3.4-.3.7v.2L13.1 12Z" />
      <path fill="#EA4335" d="M3.2 20.6c0 .3.1.6.3.7L13.1 12 3.2 20.6Z" />
    </svg>
  );
}

export function StoreBadges({ size = "md" }: { size?: "md" | "sm" }) {
  const { t } = useLanguage();
  const pad = size === "sm" ? "px-3.5 py-2" : "px-4 py-3";
  const title = size === "sm" ? "text-[10px]" : "text-[11px]";
  const store = size === "sm" ? "text-[13px]" : "text-[15px]";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={STORE_LINKS.play}
        className={`inline-flex items-center gap-3 rounded-xl bg-zinc-950 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-black ${pad}`}
      >
        <PlayIcon />
        <span className="leading-tight">
          <span className={`block ${title} font-medium text-zinc-300`}>{t.playLabel}</span>
          <span className={`block font-semibold tracking-tight ${store}`}>{t.playStore}</span>
        </span>
      </a>
      <a
        href={STORE_LINKS.apple}
        className={`inline-flex items-center gap-3 rounded-xl bg-zinc-950 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-black ${pad}`}
      >
        <AppleIcon />
        <span className="leading-tight">
          <span className={`block ${title} font-medium text-zinc-300`}>{t.appleLabel}</span>
          <span className={`block font-semibold tracking-tight ${store}`}>{t.appleStore}</span>
        </span>
      </a>
    </div>
  );
}
