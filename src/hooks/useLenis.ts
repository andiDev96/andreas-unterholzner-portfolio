import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Mounts a Lenis smooth-scroll instance and syncs it with GSAP ScrollTrigger.
 *
 * - Lenis takes over the wheel/touch scroll with cinematic easing
 * - On every Lenis tick, we notify ScrollTrigger so that scroll-driven
 *   animations stay perfectly aligned with the smoothed scroll position
 * - Both are driven by GSAP's ticker for a single, stable RAF loop
 *
 * Should be called once near the root of the app.
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Whenever Lenis scrolls, refresh ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis via GSAP's ticker (single source of truth for RAF)
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);
}
