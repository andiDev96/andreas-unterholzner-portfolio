import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface HeroTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "p";
}

/**
 * Splits the text into individual character spans and animates each
 * one with a cinematic stagger (slide up + blur fade).
 *
 * Uses GSAP directly — no plugins required (we manually split, no
 * dependency on SplitText which is paid).
 */
export function HeroText({
  children,
  className,
  delay = 0,
  stagger = 0.03,
  as: Tag = "h1",
}: HeroTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const chars = containerRef.current.querySelectorAll("[data-char]");

    gsap.fromTo(
      chars,
      {
        yPercent: 110,
        opacity: 0,
        filter: "blur(8px)",
      },
      {
        yPercent: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "expo.out",
        stagger,
        delay,
      },
    );
  }, [children, delay, stagger]);

  // Split into characters (preserve whitespace via non-breaking space)
  const characters = children.split("").map((char, i) => (
    <span key={i} data-char style={{ display: "inline-block", willChange: "transform" }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <Tag
      ref={containerRef as React.Ref<HTMLHeadingElement & HTMLParagraphElement>}
      className={className}
      style={{ overflow: "hidden" }}
    >
      {characters}
    </Tag>
  );
}
