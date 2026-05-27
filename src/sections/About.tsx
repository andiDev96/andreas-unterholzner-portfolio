import { Container, Section, Stack } from "@/components/layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const headerRef = useScrollReveal<HTMLDivElement>({
    childSelector: "[data-reveal]",
    stagger: 0.12,
  });

  return (
    <Section id="#about" spacing="loose" className="bg-ink">
      <Container size="lg">
        <div ref={headerRef}>
          <Stack gap={6}>
            {/* Eyebrow */}
            <div
              data-refeal
              className="flex items-center gap-3 font-mono text-caption uppercase tracking-widest text-electric"
            >
              <span className="inline-block h-px w-12 bg-electric"></span>
              <span>01 - About</span>
            </div>

            {/* Headline - editorial massive */}
            <h2
              data-reveal
              className="max-w-4xl text-display font-semibold tracking-tight text-paper-strong"
            >
              I design and build digital experiences at the intersection of{" "}
              <span className="text-electric">code</span> and{" "}
              <span className="text-electric">craft</span>.
            </h2>
            {/* Subtle divider - placeholder for next blocks  */}
            <div data-reveal className=" mt-8 max-w-2xl text-lg text-muted-strong">
              Based in the Northern Italy, I build immersive web interfaces that blend cinematic
              visuals with engineering precision.
            </div>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
