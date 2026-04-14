"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";
import { Card } from "@/components/common/Card";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  gradient: string;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  gradient,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card hover className="p-5 md:p-7 h-full group relative overflow-hidden flex flex-col">
        {/* Subtle gradient glow on hover */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-8 transition-opacity duration-500 ${gradient} blur-2xl -z-10`}
        />

        {/* Icon */}
        <div
          className={`inline-flex w-12 h-12 rounded-xl ${gradient} items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shrink-0`}
        >
          <Icon size={22} className="text-white" strokeWidth={1.5} />
        </div>

        <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2 dark:group-hover:text-emerald-400 group-hover:text-emerald-700 transition-colors">
          {title}
        </h3>

        <p className="hidden sm:block text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 flex-1">
          {description}
        </p>

        <ul className="hidden sm:block space-y-1.5 mb-5">
          {features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <CheckCircle2 size={12} className="text-emerald-700 dark:text-emerald-400 shrink-0" strokeWidth={2.5} />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 group-hover:gap-2 transition-all mt-auto">
          Learn More <ArrowRight size={12} />
        </div>
      </Card>
    </motion.div>
  );
}
