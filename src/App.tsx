import { CustomCursor } from "@/components/shared/CustomCursor";
import { useLenis } from "@/hooks/useLenis";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Work } from "@/sections/Work";

function App() {
  useLenis();

  return (
    <>
      <CustomCursor />
      <main>
        <Hero />
        <About />
        <Work />
      </main>
    </>
  );
}

export default App;
