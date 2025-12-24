"use client";

import { createContext, useContext, useState } from "react";
import { translations } from "../lib/translations";

const LangContext = createContext<any>(null);

export const LanguageProvider = ({ children }: any) => {
  const [lang, setLang] = useState("en");

  const t = (key: string) => translations[lang][key] || key;
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LangContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);


