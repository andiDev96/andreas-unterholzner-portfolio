import { type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

type StackGap = 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24;
type StackAlign = "start" | "center" | "end" | "stretch";
type StackJustify = "start" | "center" | "end" | "between";

interface StackProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
  direction?: "column" | "row";
}

const gapMap: Record<StackGap, string> = {
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
  12: "gap-12",
  16: "gap-16",
  24: "gap-24",
};

const alignMap: Record<StackAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifyMap: Record<StackJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

export function Stack({
  children,
  className,
  as: Component = "div",
  gap = 4,
  align = "stretch",
  justify = "start",
  direction = "column",
}: StackProps) {
  return (
    <Component
      className={cn(
        "flex",
        direction === "column" ? "flex-col" : "flex-row",
        gapMap[gap],
        alignMap[align],
        justifyMap[justify],
        className,
      )}
    >
      {children}
    </Component>
  );
}
