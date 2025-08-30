import { cn } from "../../utils/cn";
import type { ButtonHTMLAttributes } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "gold"
  | "ghost"
  | "emerald"
  | "royal"
  | "inverse";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 backdrop-blur-sm";

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#0066cc] to-[#004d99] hover:from-[#0052a3] hover:to-[#003d80] text-white shadow-lg hover:shadow-xl transform hover:scale-105 dark:from-[#1E40AF] dark:to-[#1E3A8A] dark:hover:from-[#1D4ED8] dark:hover:to-[#1E40AF] focus-visible:ring-[#0066cc]/50 dark:focus-visible:ring-[#1E40AF]/50",
  secondary:
    "border-2 border-[#0066cc] bg-white/10 backdrop-blur-md text-[#0066cc] hover:bg-[#0066cc] hover:text-white shadow-md hover:shadow-lg transform hover:scale-105 dark:border-[#60A5FA] dark:bg-peacock-900/20 dark:text-[#60A5FA] dark:hover:bg-[#1E40AF] dark:hover:text-white focus-visible:ring-[#0066cc]/50 dark:focus-visible:ring-[#60A5FA]/50",
  gold: "bg-gradient-to-r from-[#FFD700] to-[#FFA000] hover:from-[#FFEB3B] hover:to-[#FFD700] text-[#1a1a1a] shadow-lg hover:shadow-xl transform hover:scale-105 dark:from-[#FFC107] dark:to-[#FF8F00] dark:hover:from-[#FFD54F] dark:hover:to-[#FFC107] focus-visible:ring-[#FFD700]/50",
  ghost:
    "border border-[#0066cc]/20 bg-white/5 backdrop-blur-sm text-[#0066cc] hover:bg-[#0066cc]/10 hover:border-[#0066cc]/40 dark:border-[#60A5FA]/30 dark:text-[#60A5FA] dark:hover:bg-[#1E40AF]/15 dark:hover:border-[#60A5FA]/50 focus-visible:ring-[#0066cc]/50 dark:focus-visible:ring-[#60A5FA]/50",
  emerald:
    "bg-gradient-to-r from-[#00B894] to-[#00A085] hover:from-[#00C9A7] hover:to-[#00B894] text-white shadow-lg hover:shadow-xl transform hover:scale-105 focus-visible:ring-[#00B894]/50",
  royal:
    "bg-gradient-to-r from-[#6A0DAD] to-[#5A0B92] hover:from-[#7B1FA2] hover:to-[#6A0DAD] text-white shadow-lg hover:shadow-xl transform hover:scale-105 focus-visible:ring-[#6A0DAD]/50",
  inverse:
    "bg-white/90 hover:bg-white text-[#0066cc] border border-[#0066cc]/20 shadow-lg hover:shadow-xl dark:bg-peacock-800/80 dark:hover:bg-peacock-700/90 dark:text-[#60A5FA] dark:border-[#60A5FA]/30 focus-visible:ring-[#0066cc]/50 dark:focus-visible:ring-[#60A5FA]/50",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
};

export function Button({
  className,
  variant = "primary",
  size = "lg",
  asChild, // destructure but do not pass to <button>
  ...props
}: Props) {
  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    />
  );
}
