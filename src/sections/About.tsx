import { Container, Section, Stack } from "@/components/layout";
import { TerminalLine } from "@/components/ui/TerminalLine";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const STACK = ["waiter", "gamer", "react", "framer-motion", "tailwindcss", "vite"];

const DISCIPLINES = [
  {
    n: "01",
    title: "Waiter",
    body: "I'm a professional waiter with 12 years of experience, I worked in the best restaurants in my town.",
  },
  {
    n: "02",
    title: "Frontend Engineering",
    body: "Production-grade React applications with TypeScript, modern build tooling and a focus on long-term maintainability.",
  },
  {
    n: "03",
    title: "Creative Coding",
    body: "WebGL shaders, generative graphics and motion experiments. Where the browser becomes a canvas.",
  },
  {
    n: "04",
    title: "3D & Spatial UI",
    body: "Three.js scenes, R3F architectures, performant geometries and physically-based materials.",
  },
  {
    n: "05",
    title: "3D print & engineer",
    body: "I work also with a 3D printer and I also Design all of my works.",
  },
];

export function About() {
  const headerRef = useScrollReveal<HTMLDivElement>({
    childSelector: "[data-reveal]",
    stagger: 0.12,
  });
  const bioRef = useScrollReveal<HTMLDivElement>({
    childSelector: "[data-reveal]",
    stagger: 0.15,
  });
  const stackRef = useScrollReveal<HTMLDivElement>({
    childSelector: "[data-reveal]",
    stagger: 0.05,
  });
  const disciplinesRef = useScrollReveal<HTMLDivElement>({
    childSelector: "[data-reveal]",
    stagger: 0.1,
  });
  const footerRef = useScrollReveal<HTMLDivElement>({
    childSelector: "[data-reveal]",
  });

  return (
    <Section id="about" spacing="loose" size="lg" className="bg-ink">
      <Container size="lg">
        {/* ── Header ── */}
        <div ref={headerRef}>
          <Stack gap={6}>
            <div
              data-reveal
              className="flex items-center gap-3 font-mono text-caption uppercase tracking-widest text-electric"
            >
              <span className="inline-block h-px w-12 bg-electric"></span>
              <span>01 — About</span>
            </div>
            <h2
              data-reveal
              className="max-w-4xl text-display font-semibold tracking-tight text-paper-strong"
            >
              I design and build digital experiences at the intersection of{" "}
              <span className="text-electric">code</span> and{" "}
              <span className="text-electric">craft</span>.
            </h2>
          </Stack>
        </div>

        {/* ── Bio ── */}
        <div ref={bioRef} className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p
              data-reveal
              className="font-mono text-caption uppercase tracking-widest text-muted md:sticky md:top-32"
            >
              Bio
            </p>
          </div>
          <div className="space-y-6 md:col-span-8">
            <p data-reveal className="text-lg text-paper-soft">
              Based in Northern Italy, I build immersive web interfaces that blend{" "}
              <span className="text-electric">cinematic visuals</span> with engineering precision.
              From WebGL shaders to performant scroll storytelling, I create experiences that don’t
              just look beautiful — they feel inevitable.
            </p>
            <p data-reveal className="text-lg text-paper-soft">
              I work at the seam between <span className="text-electric">design</span> and{" "}
              <span className="text-electric">engineering</span>: caring about typography,
              micro-interactions and how light moves on a surface, while shipping production-grade
              React applications with modern tooling and clean architecture.
            </p>
            <p data-reveal className="text-lg text-paper-soft">
              Currently freelancing on selected projects. I’m drawn to work that pushes the medium
              forward — products with <span className="text-electric">identity</span>, motion as
              language, and a craftsmanship-first culture.
            </p>
          </div>
        </div>

        {/* ── Stack ── */}
        <div ref={stackRef} className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p
              data-reveal
              className="font-mono text-caption uppercase tracking-widest text-muted md:sticky md:top-32"
            >
              Stack
            </p>
          </div>
          <div className="md:col-span-9">
            <div className="rounded-2xl border border-charcoal-2 bg-ink-3 p-6 sm:p-8">
              <Stack gap={2}>
                <div data-reveal>
                  <TerminalLine prompt="$">cat stack.json</TerminalLine>
                </div>
                {STACK.map((tech) => (
                  <div key={tech} data-reveal>
                    <TerminalLine prompt="→">{tech}</TerminalLine>
                  </div>
                ))}
                <div data-reveal>
                  <TerminalLine prompt="$" showCursor>
                    {" "}
                  </TerminalLine>
                </div>
              </Stack>
            </div>
          </div>
        </div>

        {/* ── Disciplines ── */}
        <div ref={disciplinesRef} className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p
              data-reveal
              className="font-mono text-caption uppercase tracking-widest text-muted md:sticky md:top-32"
            >
              Disciplines
            </p>
          </div>
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-charcoal-2 bg-charcoal-2 sm:grid-cols-2">
              {DISCIPLINES.map((d) => (
                <div
                  key={d.n}
                  data-reveal
                  className="bg-ink-3 p-8 transition-colors duration-base hover:bg-ink-4"
                >
                  <Stack gap={3}>
                    <p className="font-mono text-caption tracking-widest text-electric">{d.n}</p>
                    <h3 className="text-xl font-semibold tracking-tight text-paper-strong">
                      {d.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-strong">{d.body}</p>
                  </Stack>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section footer ── */}
        <div ref={footerRef}>
          <div data-reveal className="mt-32 flex justify-end border-t border-charcoal-2 pt-8">
            <a
              href="#work"
              data-cursor="hover"
              className="group inline-flex items-center gap-3 font-mono text-caption uppercase tracking-widest text-muted transition-colors duration-base hover:text-paper-strong"
            >
              <span className="inline-block h-px w-12 bg-current transition-all duration-base group-hover:w-16" />
              Continue — selected work
              <span className="inline-block transition-transform duration-base group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
