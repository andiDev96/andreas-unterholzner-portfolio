import { Scene } from "@/components/three/Scene";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-ink">
      {/* 3D Scene - absolute, fills the section */}
      <div className="absolute inset-0">
        <Scene />
      </div>
      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <p className="font-mono text-caption uppercase text-muted-strong">Hero ° scene online</p>
      </div>
    </section>
  );
}
