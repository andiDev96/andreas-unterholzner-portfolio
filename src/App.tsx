import { CustomCursor } from "@/components/shared/CustomCursor";
import { useLenis } from "@/hooks/useLenis";
import { Hero } from "@/sections/Hero";

function App() {
  useLenis();

  return (
    <>
      <CustomCursor />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
