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
        className
      )}
      {...props}
    />
  );
}
