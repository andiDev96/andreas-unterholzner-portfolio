import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping } from "three";
import { LiquidBlob } from "./LiquidBlob";

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45, near: 0.1, far: 100 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        toneMapping: ACESFilmicToneMapping,
        toneMappingExposure: 1.1,
      }}
      style={{ background: "transparent" }}
    >
      {/* Ambient Light --soft fill */}
      <ambientLight intensity={0.4} />

      {/* Directional Light - key light, siglity cool */}
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#e0f0ff" />

      {/* Point Light rim accent, elettric blue glow */}
      <pointLight position={[-4, 2, 3]} intensity={3} color="#0066ff" distance={20} decay={1.5} />

      {/* Temporany mesh -- will be replaced with shader-driven geomentry */}
      <LiquidBlob />
    </Canvas>
  );
}
