/**
 * Concatenates class names, filtering out falsy values.
 * Useful for conditional Tailwind classes.
 *
 * @example
 * cn("base", isActive && "active", undefined, "always") // "base active always"
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
