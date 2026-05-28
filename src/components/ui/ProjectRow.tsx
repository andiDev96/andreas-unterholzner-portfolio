import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

interface ProjectRowProps {
  project: Project;
  isActive: boolean;
  isDimmed: boolean;
  onHover: (id: string | null) => void;
}

const accentText: Record<Project["accent"], string> = {
  electric: "text-electric",
  cyan: "text-cyan",
  purple: "text-purple",
};

export function ProjectRow({ project, isActive, isDimmed, onHover }: ProjectRowProps) {
  return (
    <a
      href={project.href ?? "#"}
      data-cursor="hover"
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      className={cn(
        "group block border-b border-charcoal-2 py-8 transition-opacity duration-base",
        isDimmed ? "opacity-40" : "opacity-100",
      )}
    >
      <div className="flex items-baseline justify-between gap-6">
        <div className="flex items-baseline gap-6">
          <span className="font-mono text-caption text-muted">{project.index}</span>
          <motion.h3
            animate={{ x: isActive ? 24 : 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "text-4xl font-semibold tracking-tight transition-colors duration-base sm:text-5xl",
              isActive ? accentText[project.accent] : "text-paper-strong",
            )}
          >
            {project.title}
          </motion.h3>
        </div>

        <div className="hidden flex-col items-end gap-1 text-right sm:flex">
          <span className="font-mono text-caption uppercase tracking-widest text-muted-strong">
            {project.category}
          </span>
          <span className="font-mono text-caption text-muted">{project.year}</span>
        </div>
      </div>

      {/* Expandable description on hover */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="ml-[3.5rem] mt-6 max-w-2xl">
              <p className="text-base text-muted-strong">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-charcoal-2 bg-ink-3 px-3 py-1 font-mono text-caption text-muted-strong"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  );
}
