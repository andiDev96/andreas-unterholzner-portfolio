import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { AdditiveBlending, type Points as PointsType } from "three";

interface ParticlesProps {
  count?: number;
  radius?: number;
}

/**
 * Volumetric particle field surrounding the central object.
 * - Random distribution inside a cube of side 2*radius
 * - Each particle has a tiny per-instance phase, so vertical drift
 *   feels organic instead of synchronized
 * - Additive blending → particles brighten where they overlap,
 *   giving a soft 'mist' effect on dark backgrounds
 *
 * Random initialization happens inside a lazy useState initializer,
 * which the React Compiler accepts as a one-time, render-pure operation.
 */
export function Particles({ count = 3000, radius = 6 }: ParticlesProps) {
  const pointsRef = useRef<PointsType>(null);

  // Lazy initialization — runs once at mount, never again.
  const [{ positions, phases }] = useState(() => {
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * radius * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * radius * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * radius * 2;
      phases[i] = Math.random() * Math.PI * 2;
    }

    return { positions, phases };
  });

  // Animate each particle's Y on every frame, gently
  useFrame((state) => {
    if (!pointsRef.current) return;
    const positionAttr = pointsRef.current.geometry.attributes.position;
    const array = positionAttr.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const phase = phases[i];
      array[i * 3 + 1] += Math.sin(time * 0.3 + phase) * 0.0008;
    }

    positionAttr.needsUpdate = true;

    // Slow global rotation, adds another layer of motion
    pointsRef.current.rotation.y += 0.0003;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.015}
        sizeAttenuation
        transparent
        opacity={0.7}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
