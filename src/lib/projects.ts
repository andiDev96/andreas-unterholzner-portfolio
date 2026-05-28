export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  /** Accent color token for this project's hover state */
  accent: "electric" | "cyan" | "purple";
  /** Optional external link */
  href?: string;
}

/**
 * Placeholder projects — replace with real case studies.
 * Keep 3-6 for the best visual rhythm in the list layout.
 */
export const PROJECTS: Project[] = [
  {
    id: "aurora",
    index: "01",
    title: "Aurora",
    category: "WebGL Experience",
    year: "2025",
    description:
      "An immersive product launch site with real-time fluid simulation and scroll-driven 3D storytelling.",
    tags: ["Three.js", "GLSL", "GSAP"],
    accent: "electric",
    href: "#",
  },
  {
    id: "meridian",
    index: "02",
    title: "Meridian",
    category: "Design System",
    year: "2025",
    description:
      "A component library and design system for a fintech platform, built for scale and theming.",
    tags: ["React", "TypeScript", "Storybook"],
    accent: "cyan",
    href: "#",
  },
  {
    id: "lumen",
    index: "03",
    title: "Lumen",
    category: "Interactive Installation",
    year: "2024",
    description:
      "A generative art installation responding to sound, projected across a 12-meter LED wall.",
    tags: ["WebGL", "Web Audio", "Shaders"],
    accent: "purple",
    href: "#",
  },
  {
    id: "vertex",
    index: "04",
    title: "Vertex",
    category: "SaaS Platform",
    year: "2024",
    description:
      "Frontend architecture for a real-time collaboration tool, focused on performance and motion.",
    tags: ["React", "WebSockets", "Framer Motion"],
    accent: "electric",
    href: "#",
  },
];
