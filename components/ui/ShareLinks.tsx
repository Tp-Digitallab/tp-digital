"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ShareLinks() {
  const { language } = useLanguage();
  const url = encodeURIComponent("https://tpdigitallab.de/");
  return (
    <div className="border-t border-white/10 bg-[#050505] px-6 py-5 text-center text-sm text-white/60">
      <p>{language === "de" ? "TP Digital Lab weiterempfehlen" : language === "ru" ? "Поделиться TP Digital Lab" : "Share TP Digital Lab"}</p>
      <div className="mt-3 flex flex-wrap justify-center gap-6">
        <a href={`https://api.whatsapp.com/send?text=${url}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">WhatsApp</a>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">LinkedIn</a>
      </div>
    </div>
  );
}
