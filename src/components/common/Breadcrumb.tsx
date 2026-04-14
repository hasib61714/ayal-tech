import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm mb-6" aria-label="Breadcrumb">
      <Link
        href="/"
        className="flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors"
      >
        <Home size={13} strokeWidth={1.8} />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center gap-1.5">
            <ChevronRight size={13} className="text-slate-600" />
            {isLast || !item.href ? (
              <span className="text-emerald-400 font-medium">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
