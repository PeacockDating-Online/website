import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "../utils/cn";

type Props = PropsWithChildren<{
  id: string;
  title: ReactNode;
  className?: string;
}>;

export function Section({ id, title, className, children }: Props) {
  return (
    <section id={id} className={cn("bg-white ", className)}>
      <div className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold font-heading text-ink">
          {title}
        </h2>
        <div
          className="mt-2 h-1 w-16 rounded-full bg-peacock"
          aria-hidden
        ></div>
        <div className="mt-4 text-ink/80">{children}</div>
      </div>
    </section>
  );
}
