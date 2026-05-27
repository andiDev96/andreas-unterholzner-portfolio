import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  /** vertical offset before settle (px). Default 60 */
  y?: number;
  /** initial opacity. Default 0 */
  opacity?: number;
  /** duration in seconds. Default 1.1 */
  duration?: number;
  /** stagger between children (seconds). Default 0.1 */
  stagger?: number;
  /** when to trigger (ScrollTrigger 'start' syntax). Default 'top 85%' */
  start?: string;
  /** GSAP easing. Default 'expo.out' */
  ease?: string;
  /** Selector for children to stagger. If omitted, animates the container itself */
  childSelector?: string;
  /** Delay before animation starts (seconds). Default 0 */
  delay?: number;
}

/**
 * Reveals an element (or its children) as it scrolls into view.
 * Uses GSAP ScrollTrigger; auto-cleans on unmount.
 *
 * Returns a ref to attach to the target element.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {},
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const {
      y = 60,
      opacity = 0,
      duration = 1.1,
      stagger = 0.1,
      start = "top 85%",
      ease = "expo.out",
      childSelector,
      delay = 0,
    } = options;

    const targets = childSelector ? ref.current.querySelectorAll(childSelector) : ref.current;

    const animation = gsap.fromTo(
      targets,
      { y, opacity, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration,
        ease,
        stagger,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
