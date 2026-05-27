import { CustomCursor } from "@/components/shared/CustomCursor";
import { useLenis } from "@/hooks/useLenis";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";

function App() {
  useLenis();

  return (
    <>
      <CustomCursor />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
