"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextProps {
  lang: "EN" | "ES";
  setLang: (value: "EN" | "ES") => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: "EN",
  setLang: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<"EN" | "ES">("EN");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
