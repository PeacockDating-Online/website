import { cn } from "../../utils/cn";
import type { HTMLAttributes, PropsWithChildren } from "react";

export function Card({
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn(
        "glass-card hover:shadow-2xl transition-all duration-300",
        "focus-within:ring-2 focus-within:ring-peacock-gold/60 focus-within:ring-offset-2",
        // Dark mode enhancements
        "bg-white/80 border border-white/20 backdrop-blur-md",
        "dark:bg-peacock-900/80 dark:border-peacock-700/40 dark:shadow-peacock-950/40",
        className
      )}
      {...props}
    />
  );
}
