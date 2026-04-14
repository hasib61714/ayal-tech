import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-lg text-sm",
            "bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500",
            "border focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition-all",
            error
              ? "border-red-400 dark:border-red-500/60 focus:ring-red-500"
              : "border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
