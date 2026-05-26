import { Scene } from "@/components/three/Scene";
import { HeroText } from "@/components/shared/HeroText";

export function Hero() {
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
            Portfolio · v0.2
          </p>
        </div>

        {/* Top-right: location */}
        <div className="absolute right-8 top-8 sm:right-12 sm:top-12">
          <p className="font-mono text-caption uppercase text-muted-strong">Bolzano — IT</p>
        </div>

        {/* Bottom: scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-12">
          <p className="flex flex-col items-center gap-2 font-mono text-caption uppercase text-muted-strong">
            Scroll
            <span className="inline-block h-8 w-px bg-gradient-to-b from-electric to-transparent"></span>
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
          Frontend Developer & Creative Engineer
        </HeroText>

        <HeroText
          as="h1"
          className="text-hero font-semibold tracking-tight text-paper-strong"
          stagger={0.05}
          delay={0.9}
        >
          Andreas Unterholzner
        </HeroText>

        <HeroText
          as="p"
          className="mt-8 max-w-xl text-lg text-muted-strong"
          stagger={0.012}
          delay={0.1}
        >
          Crafting immersive digital experiences with React, Three.js and WebGL.
        </HeroText>
      </div>
    </section>
  );
}
