import { cn } from "@/lib/utils";

function App() {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-center gap-2 px-6 text-center",
      )}
    >
      <h1 className="text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
        Andreas Unterholzner
      </h1>
      <p className="text-sm text-muted sm:text-base">Frontend Developer &amp; Creative Engineer</p>
    </main>
  );
}

export default App;
