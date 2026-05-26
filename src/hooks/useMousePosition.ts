import { useEffect, useRef } from "react";

/**
 * Mouse position normalized to [-1, 1] on both axes, with the origin
 * at the center of the viewport.
 *
 * Returns a ref (not state) so consumers can read it inside animation
 * loops (useFrame) without triggering re-renders on every mousemove.
 */
export function useMousePosition() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return mouse;
}
