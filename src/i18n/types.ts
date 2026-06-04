export type Locale = "it" | "en";

export const DEFAULT_LOCALE = "it";
export const SUPPORTED_LOCALES: Locale[] = ["it", "en"];

export const LOCALE_LABELS: Record<Locale, string> = {
  it: "italiano",
  en: "English",
};

// local storage key for persisting user choise
export const LOCALE_STORAGE_KEY = "portfolio-locale";
