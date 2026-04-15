import type { LucideIcon } from "lucide-react";

// ── Icon Grid ─────────────────────────────────────────────────────────────────

export interface IconGridItem {
  icon: LucideIcon;
  label: string;
  color: string; // Tailwind gradient, e.g. "from-blue-500 to-cyan-500"
}

interface ServiceIconGridProps {
  items: IconGridItem[];
}

export function ServiceIconGrid({ items }: ServiceIconGridProps) {
  return (
    <div className="hidden lg:grid grid-cols-2 gap-4">
      {items.map(({ icon: Icon, label, color }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:-translate-y-2 hover:scale-[1.02] hover:bg-white/10 hover:shadow-xl hover:shadow-emerald-500/15 hover:border-white/20 transition-all duration-300 ease-in-out will-change-transform"
        >
          <div
            className={`w-14 h-14 rounded-2xl bg-linear-to-br ${color} flex items-center justify-center`}
          >
            <Icon size={28} className="text-white" strokeWidth={1.5} />
          </div>
          <p className="text-sm font-medium text-slate-300 text-center">{label}</p>
        </div>
      ))}
    </div>
  );
}

// ── Stat Strip ────────────────────────────────────────────────────────────────

export interface StatItem {
  value: string;
  label: string;
}

interface ServiceStatStripProps {
  stats: StatItem[];
  /** Tailwind gradient classes for the value text, e.g. "from-blue-400 to-cyan-400" */
  gradientColor?: string;
}

export function ServiceStatStrip({
  stats,
  gradientColor = "from-emerald-400 to-teal-400",
}: ServiceStatStripProps) {
  return (
    <div className="grid grid-cols-3 gap-3 mt-8 max-w-lg mx-auto">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center px-3 py-2 rounded-lg border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm backdrop-blur-sm hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/15 transition-all duration-300 ease-in-out will-change-transform"
        >
          <div
            className={`text-base font-bold bg-linear-to-r ${gradientColor} bg-clip-text text-transparent`}
          >
            {stat.value}
          </div>
          <div className="text-[11px] text-slate-300 leading-tight">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
