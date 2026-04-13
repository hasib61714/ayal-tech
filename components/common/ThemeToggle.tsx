"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300
        border border-slate-200 dark:border-white/10
        bg-slate-100 dark:bg-white/5
        hover:bg-slate-200 dark:hover:bg-white/10
        text-slate-700 dark:text-slate-300
        hover:text-blue-600 dark:hover:text-blue-400"
    >
      {isDark ? (
        <Sun size={16} strokeWidth={1.8} />
      ) : (
        <Moon size={16} strokeWidth={1.8} />
      )}
    </button>
  );
}
