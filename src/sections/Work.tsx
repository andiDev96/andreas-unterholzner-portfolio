import { useState } from "react";
import { Container, Section, Stack } from "@/components/layout";
import { ProjectRow } from "@/components/ui/ProjectRow";
import { ProjectPreview } from "@/components/ui/ProjectPreview";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PROJECTS } from "@/lib/projects";

export function Work() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const headerRef = useScrollReveal<HTMLDivElement>({
    childSelector: "[data-reveal]",
    stagger: 0.12,
  });

  const activeProject = PROJECTS.find((p) => p.id === activeId) ?? null;

  return (
    <Section id="work" spacing="loose" size="lg" className="bg-ink">
      <Container size="lg">
        {/* Header */}
        <div ref={headerRef}>
          <Stack gap={6}>
            <div
              data-reveal
              className="flex items-center gap-3 font-mono text-caption uppercase tracking-widest text-electric"
            >
              <span className="inline-block h-px w-12 bg-electric"></span>
              <span>02 — Selected Work</span>
            </div>
            <h2
              data-reveal
              className="max-w-4xl text-display font-semibold tracking-tight text-paper-strong"
            >
              Selected projects from the last few years.
            </h2>
          </Stack>
        </div>

        {/* Project list */}
        <div className="mt-24 border-t border-charcoal-2">
          {PROJECTS.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              isActive={activeId === project.id}
              isDimmed={activeId !== null && activeId !== project.id}
              onHover={setActiveId}
            />
          ))}
        </div>
      </Container>

      {/* Floating preview — follows cursor */}
      <ProjectPreview project={activeProject} />
    </Section>
  );
}
