"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations } from "../lib/translations"; // make sure this file exists

type LangContextType = {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const LangContext = createContext<LangContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState("en");

  const t = (key: string) => translations[lang][key] || key;
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LangContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used within LanguageProvider");
  return context;
};

// Add this so AppointmentBooking can import it
export const useTranslation = useLang;
