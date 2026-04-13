import { cn } from "@/lib/utils";
import { SectionProps } from "@/types";

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 lg:py-28", className)}>
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  center = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", center && "text-center", className)}>
      {eyebrow && (
        <span className="inline-block mb-4 text-xs font-bold tracking-[0.2em] uppercase text-blue-400 border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 rounded-full">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-slate-900 mb-5 leading-tight">
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </h2>
      {description && (
        <p className="text-lg dark:text-slate-400 text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
