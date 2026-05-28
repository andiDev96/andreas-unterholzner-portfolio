import { motion } from "framer-motion";
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
          {/* Index */}
          <span className="font-mono text-caption text-muted">{project.index}</span>

          {/* Title — slides right on hover */}
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

        {/* Meta — category + year */}
        <div className="hidden flex-col items-end gap-1 text-right sm:flex">
          <span className="font-mono text-caption uppercase tracking-widest text-muted-strong">
            {project.category}
          </span>
          <span className="font-mono text-caption text-muted">{project.year}</span>
        </div>
      </div>
    </a>
  );
}
