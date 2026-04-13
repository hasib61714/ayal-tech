import { cn } from "@/lib/utils";
import { CardProps } from "@/types";

export function Card({ children, className, hover = false, glass = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300",
        glass
          ? "dark:bg-white/5 bg-white dark:border-white/10 border-slate-200 backdrop-blur-sm"
          : "dark:bg-slate-800/50 bg-slate-100 dark:border-slate-700/50 border-slate-300",
        hover &&
          "dark:hover:bg-white/10 hover:bg-slate-50 hover:border-blue-300 dark:hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
