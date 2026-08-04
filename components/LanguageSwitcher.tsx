"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const languages = [
  {
    code: "de",
    short: "DE",
  },
  {
    code: "en",
    short: "EN",
  },
  {
    code: "ru",
    short: "RU",
  },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
 const { language, setLanguage } = useLanguage();

  const changeLanguage = (code: string) => {
  setLanguage(code as "de" | "en" | "ru");
  setOpen(false);
};

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-white/5
          px-4
          py-2
          text-sm
          text-white
          backdrop-blur-xl
          hover:bg-white/10
          transition
        "
      >
        {language.toUpperCase()}
        <span>⌄</span>
      </button>


     {open && (
  <div
    className="
      absolute
      right-0
      top-full
      mt-2
      flex
      gap-1
      rounded-full
      border
      border-white/15
      bg-black/80
      p-1
      backdrop-blur-xl
      shadow-[0_10px_40px_rgba(0,0,0,0.5)]
    "
  >

    {languages.map((item) => (
      <button
        key={item.code}
        onClick={() => changeLanguage(item.code)}
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          text-xs
          font-medium
          text-white/70
          transition
          hover:bg-white/10
          hover:text-white
        "
      >
        {item.short}
      </button>
    ))}

  </div>
)}




    </div>
  );
}