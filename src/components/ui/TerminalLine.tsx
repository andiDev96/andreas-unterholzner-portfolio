import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalLineProps {
  prompt?: string;
  children: ReactNode;
  className?: string;
  showCursor?: boolean;
}

/**
 * Single line styled like a shell prompt.
 * Optional blinking cursor at the end.
 */
export function TerminalLine({
  prompt = "$",
  children,
  className,
  showCursor = false,
}: TerminalLineProps) {
  return (
    <p
      className={cn(
        "flex flex-wrap items-baseline gap-x-3 font-mono text-sm leading-relaxed",
        className,
      )}
    >
      <span className="select-none text-electric">{prompt}</span>
      <span className="text-paper-soft">{children}</span>
      {showCursor && (
        <span
          aria-hidden
          className="inline-block h-4 w-2 translate-y-px animate-pulse bg-electric"
        />
      )}
    </p>
  );
}
