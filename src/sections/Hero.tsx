import { Scene } from "@/components/three/Scene";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-ink">
      {/* Background atmosphere — radial gradient with electric tint */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 80% at 20% 50%,
              rgba(0, 102, 255, 0.12) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse 60% 60% at 100% 100%,
              rgba(0, 102, 255, 0.05) 0%,
              transparent 50%
            )
          `,
        }}
      />

      {/* 3D scene */}
      <div className="absolute inset-0">
        <Scene />
      </div>

      {/* Content overlay — placeholder until Step 4/5 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <p className="font-mono text-caption uppercase text-muted-strong">
          Hero · atmosphere online
        </p>
      </div>
    </section>
  );
}
