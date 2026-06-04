/**
 * Italian translations — the source of truth.
 * The shape of this object defines the TypeScript type used to
 * validate all other locales (en.ts must have the exact same keys).
 */
export const it = {
  hero: {
    statusBadge: "Portfolio · v0.2",
    location: "Bolzano — IT",
    eyebrow: "Frontend Developer & Creative Engineer",
    title: "Andreas Unterholzner",
    description: "Creo esperienze digitali immersive con React, Three.js e WebGL.",
    cta: "Esplora i lavori",
    scroll: "Scroll",
  },
} as const;

export type Translations = typeof it;
