"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

const mobileLeadCopy = {
  de: {
    label: "Bereit für Ihre Website?",
    button: "Angebot anfragen",
  },
  en: {
    label: "Ready for your website?",
    button: "Request a quote",
  },
  ru: {
    label: "Готовы обсудить сайт?",
    button: "Оставить заявку",
  },
};

export default function MobileLeadBar() {
  const { language } = useLanguage();
  const t = mobileLeadCopy[language];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#080b12]/95 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <p className="min-w-0 flex-1 truncate text-xs font-medium text-white/75">
          {t.label}
        </p>

        <a
          href="#anfrage"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080b12] active:scale-[0.98]"
        >
          {t.button}
        </a>
      </div>
    </div>
  );
}