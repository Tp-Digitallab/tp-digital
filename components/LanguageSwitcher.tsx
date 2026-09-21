"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  type Language,
  useLanguage,
} from "@/components/providers/LanguageProvider";

const languages: Array<{
  code: Language;
  short: string;
  name: string;
}> = [
  {
    code: "de",
    short: "DE",
    name: "Deutsch",
  },
  {
    code: "en",
    short: "EN",
    name: "English",
  },
  {
    code: "ru",
    short: "RU",
    name: "Русский",
  },
];

function getLocalizedPath(
  pathname: string,
  language: Language,
) {
  const localizedMatch = pathname.match(
    /^\/(de|en|ru)(?=\/|$)/,
  );

  if (!localizedMatch) {
    return null;
  }

  const pathWithoutLocale =
    pathname.slice(localizedMatch[0].length) ||
    "/";

  return `/${language}${
    pathWithoutLocale === "/"
      ? ""
      : pathWithoutLocale
  }`;
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } =
    useLanguage();

  const pathname = usePathname();
  const router = useRouter();

  function changeLanguage(
    newLanguage: Language,
  ) {
    setLanguage(newLanguage);
    setOpen(false);

    if (!pathname) {
      return;
    }

    const localizedPath = getLocalizedPath(
      pathname,
      newLanguage,
    );

    if (localizedPath) {
      router.push(localizedPath);
    }
  }

  const currentLanguage =
    languages.find(
      (item) => item.code === language,
    ) ?? languages[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Language: ${currentLanguage.name}`}
        className="flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-xl transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      >
        <span>{currentLanguage.short}</span>

        <span
          aria-hidden="true"
          className={`text-white/60 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
         ⌄
        </span>
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Choose language"
          className="absolute right-0 top-full z-50 mt-2 flex gap-1 rounded-full border border-white/15 bg-black/90 p-1 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        >
          {languages.map((item) => {
            const active =
              item.code === language;

            return (
              <button
                key={item.code}
                type="button"
                role="menuitem"
                aria-current={
                  active ? "true" : undefined
                }
                onClick={() =>
                  changeLanguage(item.code)
                }
                className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.short}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}