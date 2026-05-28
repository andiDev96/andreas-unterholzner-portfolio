import { useEffect } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import type { Project } from "@/lib/projects";

interface ProjectPreviewProps {
  project: Project | null;
}

const accentGradient: Record<Project["accent"], string> = {
  electric: "from-electric/30 to-ink-3",
  cyan: "from-cyan/30 to-ink-3",
  purple: "from-purple/30 to-ink-3",
};

/**
 * Floating preview panel that follows the cursor.
 * Appears only when a project is hovered (project != null).
 * Hidden on touch / small screens via the parent (pointer-events).
 */
export function ProjectPreview({ project }: ProjectPreviewProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { damping: 25, stiffness: 200, mass: 0.5 });
  const y = useSpring(mouseY, { damping: 25, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 hidden lg:block"
      style={{ x, y }}
    >
      <AnimatePresence>
        {project && (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="-translate-x-1/2 -translate-y-1/2"
          >
            <div
              className={`h-64 w-96 overflow-hidden rounded-2xl border border-charcoal-2 bg-gradient-to-br ${accentGradient[project.accent]} p-6 shadow-cinema-lg`}
            >
              <div className="flex h-full flex-col justify-between">
                <span className="font-mono text-caption uppercase tracking-widest text-paper-soft">
                  {project.category}
                </span>
                <div>
                  <h4 className="text-3xl font-semibold tracking-tight text-paper-strong">
                    {project.title}
                  </h4>
                  <p className="mt-2 font-mono text-caption text-paper-soft">
                    {project.tags.join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
