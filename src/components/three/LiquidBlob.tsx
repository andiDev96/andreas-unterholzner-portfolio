import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

/**
 * Liquid blob: a soft-distorting sphere with physically-based material.
 * Black, metallic, glossy — reflects an HDR environment for cinematic depth.
 * The electric-blue accent comes from the point light defined in Scene.tsx,
 * caught by the surface as a rim highlight.
 */
export function LiquidBlob() {
  const meshRef = useRef<Mesh>(null);

  // Slow continuous rotation across two axes
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.08;
    meshRef.current.rotation.x += delta * 0.03;
  });

  return (
    <>
      <mesh ref={meshRef}>
        {/* High-tessellation sphere — needed for smooth distortion */}
        <sphereGeometry args={[1.5, 128, 128]} />

        <MeshDistortMaterial
          color="#050505"
          metalness={0.95}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.05}
          distort={0.35}
          speed={1.2}
        />
      </mesh>

      {/* HDR environment for realistic reflections.
          Suspense wraps it because the HDR loads asynchronously. */}
      <Suspense fallback={null}>
        <Environment preset="city" />
      </Suspense>
    </>
  );
}
