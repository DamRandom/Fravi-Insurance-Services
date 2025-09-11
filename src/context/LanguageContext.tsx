"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type LangType = "EN" | "ES";

interface LanguageContextProps {
  lang: LangType;
  setLang: (value: LangType) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<LangType>("EN");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
