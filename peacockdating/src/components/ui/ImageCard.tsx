import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { ImageWithFallback } from "./ImageWithFallback";

type Props = HTMLAttributes<HTMLDivElement> & {
  imageUrl: string;
  title: string;
  subtitle?: string;
  imgClassName?: string;
};

export function ImageCard({
  imageUrl,
  title,
  subtitle,
  className,
  imgClassName,
  ...rest
}: Props) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-black/10 shadow-md hover:shadow-lg transition-transform duration-300 will-change-transform hover:-translate-y-0.5",
        className
      )}
      {...rest}
    >
      <div className="aspect-[16/9] w-full bg-gray-100">
        <ImageWithFallback
          src={imageUrl}
          fallback="/images/peacock-logo-small.png"
          alt={`${title}${subtitle ? ` — ${subtitle}` : ""}`}
          className={imgClassName ? imgClassName : "h-full w-full object-cover"}
          loading="lazy"
          decoding="async"
        />
      </div>
      {/* Clean, high-contrast title bar */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="rounded-xl px-4 py-3 shadow-lg border border-white/20 bg-white/95 text-gray-900 backdrop-blur-sm">
          <h3 className="font-heading text-base md:text-lg font-semibold tracking-tight">
            {title}
          </h3>
          {subtitle && <p className="text-sm mt-1 text-gray-700">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
