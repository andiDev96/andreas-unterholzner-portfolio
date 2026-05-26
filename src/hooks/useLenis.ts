import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Mounts a Lenis smooth-scroll instance for the lifetime of the component.
 * Auto-disables on touch devices (Lenis detects them internally).
 *
 * Should be called once near the root of the app.
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      // Exponential ease-out — fast start, gentle settle (cinematic feel)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
