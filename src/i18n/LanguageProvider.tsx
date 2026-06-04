import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { en } from "./locales/en";
import { it, type Translations } from "./locales/it";
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, SUPPORTED_LOCALES, type Locale } from "./types";

const dictionaries: Record<Locale, Translations> = { it, en };

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Walks a dot-notation path into a nested object.
 * Returns the original key if the path doesn't resolve (so missing
 * translations are visible at runtime).
 */
function getNested(obj: unknown, path: string): string {
  const value = path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
  return typeof value === "string" ? value : path;
}

/**
 * Detect initial locale: read localStorage first, fall back to
 * browser language, default to italian.
 */
function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored && SUPPORTED_LOCALES.includes(stored as Locale)) {
    return stored as Locale;
  }

  const browserLang = window.navigator.language.toLowerCase();
  if (browserLang.startsWith("it")) return "it";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale);

  // Persist + update <html lang> on every change
  useEffect(() => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const t = useCallback((key: string) => getNested(dictionaries[locale], key), [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
