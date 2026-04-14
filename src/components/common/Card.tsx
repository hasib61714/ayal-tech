import { cn } from "@/lib/utils";
import { CardProps } from "@/types";

export function Card({ children, className, hover = false, glass = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300 ease-in-out will-change-transform",
        glass
          ? "bg-white dark:bg-[rgba(15,31,61,0.7)] border-slate-200 dark:border-emerald-500/15 backdrop-blur-sm shadow-sm dark:shadow-none"
          : "bg-slate-50 dark:bg-slate-800/60 border-slate-300 dark:border-slate-700/50",
        hover &&
          "hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/15 hover:border-emerald-400/60 dark:hover:border-emerald-600/40 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
