"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";

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
  const pathname = usePathname();
  const router = useRouter();
  const [languageState, setLanguageState] =
    useState<Language>(initialLanguage);

  const routeLanguage = pathname?.match(/^\/(de|en|ru)(?=\/|$)/)?.[1] ?? null;
  const language = isLanguage(routeLanguage) ? routeLanguage : languageState;

  useEffect(() => {
    document.documentElement.lang =
      isLanguage(routeLanguage) ? routeLanguage : initialLanguage;

    // The root provider must not overwrite a localized page with a saved language.
    if (!respectSavedLanguage || isLanguage(routeLanguage)) {
      return;
    }

    const savedLanguage =
      window.localStorage.getItem("language");

    if (!isLanguage(savedLanguage)) {
      return;
    }

    if (pathname === "/" && savedLanguage !== "de") {
      router.replace(`/${savedLanguage}${window.location.hash}`);
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
    pathname,
    routeLanguage,
    router,
  ]);

  const setLanguage = useCallback(
    (newLanguage: Language) => {
      setLanguageState(newLanguage);

      window.localStorage.setItem("language", newLanguage);

      document.documentElement.lang =
        newLanguage;
    },
    [],
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
