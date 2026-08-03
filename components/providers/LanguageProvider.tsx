"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


type Language = "de" | "en" | "ru";


interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}


const LanguageContext = createContext<LanguageContextType | null>(null);


export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [language, setLanguage] = useState<Language>("de");


  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;

    if (
      savedLanguage === "de" ||
      savedLanguage === "en" ||
      savedLanguage === "ru"
    ) {
      setLanguage(savedLanguage);
    }

  }, []);


  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);


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
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}