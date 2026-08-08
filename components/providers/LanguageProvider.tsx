"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Language = "de" | "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext =
  createContext<LanguageContextType | null>(
    null
  );

function isLanguage(
  value: string | null
): value is Language {
  return (
    value === "de" ||
    value === "en" ||
    value === "ru"
  );
}

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] =
    useState<Language>("de");

  useEffect(() => {
    const savedLanguage =
      localStorage.getItem("language");

    if (!isLanguage(savedLanguage)) {
      return;
    }

    const animationFrame =
      requestAnimationFrame(() => {
        setLanguageState(savedLanguage);

        document.documentElement.lang =
          savedLanguage;
      });

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const setLanguage = useCallback(
    (newLanguage: Language) => {
      setLanguageState(newLanguage);

      localStorage.setItem(
        "language",
        newLanguage
      );

      document.documentElement.lang =
        newLanguage;
    },
    []
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(
    LanguageContext
  );

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}