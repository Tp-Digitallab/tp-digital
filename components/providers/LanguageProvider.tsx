"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Language = "de" | "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

interface LanguageProviderProps {
  children: React.ReactNode;
  initialLanguage?: Language;
  respectSavedLanguage?: boolean;
}

const LanguageContext =
  createContext<LanguageContextType | null>(null);

function isLanguage(
  value: string | null,
): value is Language {
  return (
    value === "de" ||
    value === "en" ||
    value === "ru"
  );
}

export default function LanguageProvider({
  children,
  initialLanguage = "de",
  respectSavedLanguage = true,
}: LanguageProviderProps) {
  const [language, setLanguageState] =
    useState<Language>(initialLanguage);

  useEffect(() => {
    document.documentElement.lang =
      initialLanguage;

    if (!respectSavedLanguage) {
      return;
    }

    const savedLanguage =
      window.localStorage.getItem("language");

    if (!isLanguage(savedLanguage)) {
      return;
    }

    const animationFrame =
      window.requestAnimationFrame(() => {
        setLanguageState(savedLanguage);

        document.documentElement.lang =
          savedLanguage;
      });

    return () => {
      window.cancelAnimationFrame(
        animationFrame,
      );
    };
  }, [
    initialLanguage,
    respectSavedLanguage,
  ]);

  const setLanguage = useCallback(
    (newLanguage: Language) => {
      setLanguageState(newLanguage);

      if (respectSavedLanguage) {
        window.localStorage.setItem(
          "language",
          newLanguage,
        );
      }

      document.documentElement.lang =
        newLanguage;
    },
    [respectSavedLanguage],
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
    LanguageContext,
  );

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider",
    );
  }

  return context;
}