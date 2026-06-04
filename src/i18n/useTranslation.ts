import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

/**
 * Access the current locale, a setter, and the t() translator.
 *
 * @example
 * const { t, locale, setLocale } = useTranslation();
 * <h1>{t("hero.title")}</h1>
 */
export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation must be used inside a LanguageProvider");
  }
  return ctx;
}
