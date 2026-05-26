import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
  range?: number;
}

/**
 * Button that drifts toward the cursor when inside its 'range'.
 * The pull strength is configurable; spring physics make the
 * return-to-center feel natural and bouncy.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  className,
  strength = 0.4,
  range = 120,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 18, stiffness: 250, mass: 0.5 });
  const springY = useSpring(y, { damping: 18, stiffness: 250, mass: 0.5 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = Math.hypot(dx, dy);

    if (distance < range) {
      x.set(dx * strength);
      y.set(dy * strength);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.span
      className="inline-flex items-center gap-2"
      style={{
        x: useSpring(x, { damping: 22, stiffness: 350 }),
        y: useSpring(y, { damping: 22, stiffness: 350 }),
      }}
    >
      {children}
    </motion.span>
  );

  const baseClasses = cn(
    "group relative inline-flex cursor-none items-center justify-center",
    "rounded-full border border-charcoal-2 bg-ink-3 px-8 py-4",
    "font-mono text-caption uppercase tracking-widest text-paper-strong",
    "transition-colors duration-base ease-magnetic",
    "hover:border-electric/40 hover:bg-ink-4",
    className,
  );

  if (href) {
    return (
      <motion.div
        ref={ref}
        data-cursor="hover"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ x: springX, y: springY }}
        className="inline-block"
      >
        <a href={href} className={baseClasses}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      data-cursor="hover"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <button type="button" onClick={onClick} className={baseClasses}>
        {content}
      </button>
    </motion.div>
  );
}
