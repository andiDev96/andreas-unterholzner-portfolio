import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Spring physics for outer ring — slight lag creates depth and elegance
  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);

    const handleHoverable = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor="hover"]');
      setIsHovering(!!interactive);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleHoverable);
    document.documentElement.addEventListener("mouseenter", handleEnter);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleHoverable);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Inner dot — follows mouse precisely */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-100"
        style={{ x: cursorX, y: cursorY }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper-strong mix-blend-difference" />
      </motion.div>

      {/* Outer ring — follows with spring lag, scales on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-100"
        style={{ x: ringX, y: ringY }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-paper-strong mix-blend-difference"
          animate={{
            width: isHovering ? 56 : 32,
            height: isHovering ? 56 : 32,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </>
  );
}
