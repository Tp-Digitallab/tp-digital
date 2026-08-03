"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const languages = [
  {
    code: "de",
    name: "Deutsch",
  },
  {
    code: "en",
    name: "English",
  },
  {
    code: "ru",
    name: "Русский",
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
            mt-3
            w-36
            rounded-2xl
            border
            border-white/10
            bg-black/80
            p-2
            backdrop-blur-xl
          "
        >

          {languages.map((item) => (
            <button
              key={item.code}
              onClick={() => changeLanguage(item.code)}
              className="
                block
                w-full
                rounded-xl
                px-3
                py-2
                text-left
                text-sm
                text-white/80
                hover:bg-white/10
                hover:text-white
              "
            >
              {item.name}
            </button>
          ))}

        </div>
      )}

    </div>
  );
}