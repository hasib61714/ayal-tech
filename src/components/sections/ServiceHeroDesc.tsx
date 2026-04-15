"use client";

import { useState } from "react";

interface ServiceHeroDescProps {
  children: string;
}

export function ServiceHeroDesc({ children }: ServiceHeroDescProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-10">
      <p className={`text-lg text-slate-300 leading-relaxed ${expanded ? "" : "line-clamp-2"}`}>
        {children}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm text-emerald-400 hover:text-emerald-300 font-medium mt-1 transition-colors"
      >
        {expanded ? "Show less ↑" : "Read more ↓"}
      </button>
    </div>
  );
}
