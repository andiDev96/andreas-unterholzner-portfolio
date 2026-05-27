import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionSize = "sm" | "md" | "lg" | "xl" | "full";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  size?: SectionSize;
  contained?: boolean;
  spacing?: "tight" | "normal" | "loose";
}

const spacingMap = {
  tight: "py-16 sm:py-20 lg:py-24",
  normal: "py-24 sm:py-32 lg:py-40",
  loose: "py-32 sm:py-40 lg:py-56",
};

export function Section({
  children,
  className,
  id,
  size = "lg",
  contained = true,
  spacing = "normal",
}: SectionProps) {
  const inner = contained ? <Container size={size}>{children}</Container> : children;

  return (
    <section id={id} className={cn("relative", spacingMap[spacing], className)}>
      {inner}
    </section>
  );
}
