import { useTranslation } from "@/i18n/useTranslation";
import { Scene } from "@/components/three/Scene";
import { HeroText } from "@/components/shared/HeroText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-ink">
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 80% at 20% 50%, rgba(0, 102, 255, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 100% 100%, rgba(0, 102, 255, 0.05) 0%, transparent 50%)
          `,
        }}
      />

      {/* 3D scene */}
      <div className="absolute inset-0">
        <Scene />
      </div>

      {/* Sci-fi UI corners */}
      <div className="pointer-events-none absolute inset-0 z-10 p-8 sm:p-12">
        {/* Top-left: status indicator */}
        <div className="absolute left-8 top-8 sm:left-12 sm:top-12">
          <p className="flex items-center gap-2 font-mono text-caption uppercase text-muted-strong">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-electric"></span>
            {t("hero.statusBadge")}
          </p>
        </div>

        {/* Top-right: location */}
        <div className="absolute right-8 top-8 sm:right-12 sm:top-12">
          <p className="font-mono text-caption uppercase text-muted-strong">{t("hero.location")}</p>
        </div>

        {/* Bottom: scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-12">
          <p className="flex flex-col items-center gap-2 font-mono text-caption uppercase text-muted-strong">
            Scroll
            <span className="inline-block h-8 w-px bg-linear-to-b from-electric to-transparent"></span>
          </p>
        </div>
      </div>

      {/* Main content — centered, layered above 3D scene */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <HeroText
          as="p"
          className="mb-6 font-mono text-caption uppercase tracking-widest text-electric"
          stagger={0.04}
          delay={0.9}
        >
          {t("hero.eyebrow")}
        </HeroText>

        <HeroText
          as="h1"
          className="text-hero font-semibold tracking-tight text-paper-strong"
          stagger={0.05}
          delay={0.9}
        >
          {t("hero.title")}
        </HeroText>

        <HeroText
          as="p"
          className="mt-8 max-w-xl text-lg text-muted-strong"
          stagger={0.012}
          delay={0.1}
        >
          {t("hero.description")}
        </HeroText>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <MagneticButton href="#work">
            {t("hero.cta")}
            <span className="inline-block transition-transform duration-base group-hover:translate-x-1">
              →
            </span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
