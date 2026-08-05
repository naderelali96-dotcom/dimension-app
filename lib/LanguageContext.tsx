"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { translations, type Lang } from "@/lib/translations";

const STORAGE_KEY = "dimension-lang";
const CHANGE_EVENT = "dimension-lang-change";

function getSnapshot(): Lang {
  return localStorage.getItem(STORAGE_KEY) === "fr" ? "fr" : "en";
}

function getServerSnapshot(): Lang {
  return "en";
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function setStoredLang(next: Lang) {
  localStorage.setItem(STORAGE_KEY, next);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

type LanguageContextValue = {
  lang: Lang;
  toggleLang: () => void;
  t: typeof translations["en"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleLang = () => {
    setStoredLang(lang === "en" ? "fr" : "en");
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
