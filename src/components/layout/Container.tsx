import { type ReactNode, type ElementType, createElement } from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: ContainerSize;
}

const sizeMap: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[90rem]",
  full: "max-w-none",
};

export function Container({ children, className, as = "div", size = "lg" }: ContainerProps) {
  return createElement(
    as,
    {
      className: cn("mx-auto w-full px-6 sm:px-8 lg:px-12", sizeMap[size], className),
    },
    children,
  );
}
