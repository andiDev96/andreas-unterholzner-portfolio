import { Section, Stack } from "@/components/layout";
import { cn } from "@/lib/utils";

function App() {
  const accents = [
    { name: "electric", shadow: "shadow-glow-electric", bg: "bg-electric" },
    { name: "cyan", shadow: "shadow-glow-cyan", bg: "bg-cyan" },
    { name: "purple", shadow: "shadow-glow-purple", bg: "bg-purple" },
  ] as const;

  return (
    <main className="min-h-screen">
      <Section spacing="loose" size="md">
        <Stack gap={16} align="center">
          {/* ── Header ── */}
          <Stack gap={3} align="center" className="text-center">
            <p className="font-mono text-caption uppercase text-muted">Design System · v0.1</p>

            <h1 className="text-display font-semibold text-paper-strong">Andreas Unterholzner</h1>

            <p className="max-w-md text-base text-muted-strong">
              Frontend Developer <span className="text-electric">&</span> Creative Engineer.
            </p>
          </Stack>

          {/* ── Accent palette showcase ── */}
          <Stack direction="row" gap={6} justify="center" align="center" className="flex-wrap">
            {accents.map((accent) => (
              <div
                key={accent.name}
                className={cn(
                  "flex h-36 w-36 flex-col items-center justify-center gap-3",
                  "rounded-2xl border border-charcoal-2 bg-ink-3",
                  "transition-transform duration-base ease-magnetic",
                  "hover:-translate-y-1",
                )}
              >
                <div className={cn("h-10 w-10 rounded-full", accent.bg, accent.shadow)} />
                <span className="font-mono text-caption uppercase text-muted">{accent.name}</span>
              </div>
            ))}
          </Stack>

          {/* ── Footer signature ── */}
          <p className="font-mono text-caption text-muted-soft">
            v0.1.0-alpha · crafted in Trentino
          </p>
        </Stack>
      </Section>
    </main>
  );
}

export default App;
