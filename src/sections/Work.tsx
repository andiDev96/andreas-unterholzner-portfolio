import { Container, Section, Stack } from "@/components/layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PROJECTS } from "@/lib/projects";

export function Work() {
  const headerRef = useScrollReveal<HTMLDivElement>({
    childSelector: "[data-reveal]",
    stagger: 0.12,
  });

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

        {/* Project list — placeholder, real cards in next step */}
        <div className="mt-24 border-t border-charcoal-2">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="border-b border-charcoal-2 py-8 font-mono text-sm text-muted-strong"
            >
              {project.index} — {project.title} · {project.category}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
