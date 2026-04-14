"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
  type = "button",
  disabled,
  icon: Icon,
  iconPosition = "right",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-linear-to-r from-emerald-700 to-teal-700 text-white hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-700/25 hover:shadow-emerald-700/40 hover:scale-105",
    secondary:
      "bg-cyan-500 text-slate-900 hover:bg-cyan-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105",
    outline:
      "border dark:border-white/25 border-slate-300 dark:text-white text-slate-800 dark:hover:bg-white/10 hover:bg-slate-100 dark:hover:border-white/50 hover:border-slate-400 backdrop-blur-sm",
    ghost:
      "dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-900 dark:hover:bg-white/10 hover:bg-slate-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={18} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={18} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
