import { useFrame } from "@react-three/fiber";
import { useMousePosition } from "@/hooks/useMousePosition";

interface CameraRigProps {
  intensity?: number;
  damping?: number;
}

/**
 * Subtle parallax: the camera drifts toward the mouse position,
 * smoothed with linear interpolation (lerp). The blob appears to
 * 'rotate' as the viewer's perspective shifts.
 *
 * Always keeps looking at the origin.
 *
 * Note: we read `camera` from `state` inside useFrame instead of
 * destructuring it from useThree at the top level. This keeps the
 * mutation contained inside the frame callback, which React Compiler
 * recognizes as safe.
 */
export function CameraRig({ intensity = 0.4, damping = 0.05 }: CameraRigProps) {
  const mouse = useMousePosition();

  useFrame((state) => {
    const camera = state.camera;

    // Target position based on mouse
    const targetX = mouse.current.x * intensity;
    const targetY = mouse.current.y * intensity;

    // Lerp current camera position toward target — smooth chase
    camera.position.x += (targetX - camera.position.x) * damping;
    camera.position.y += (targetY - camera.position.y) * damping;

    // Always face the center of the scene
    camera.lookAt(0, 0, 0);
  });

  return null;
}
