"use client";

import { useState } from "react";

interface ReadMoreTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ReadMoreText({ children, className }: ReadMoreTextProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className={`${expanded ? "" : "line-clamp-2"} ${className ?? ""}`}>
        {children}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-emerald-400 text-sm mt-2 hover:underline focus:outline-none"
      >
        {expanded ? "Read less ↑" : "Read more ↓"}
      </button>
    </div>
  );
}
