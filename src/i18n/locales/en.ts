import type { Translations } from "./it";

/**
 * English translations.
 * TypeScript enforces the same shape as it.ts — if you forget a key here
 * or add an extra one, the compiler will complain.
 */
export const en: Translations = {
  hero: {
    statusBadge: "Portfolio · v0.2",
    location: "Bolzano — IT",
    eyebrow: "Frontend Developer & Creative Engineer",
    title: "Andreas Unterholzner",
    description: "Crafting immersive digital experiences with React, Three.js and WebGL.",
    cta: "Discover work",
    scroll: "Scroll",
  },
};
