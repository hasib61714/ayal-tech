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
    >
      <Card
        hover
        className="p-4 md:p-7 h-full group relative overflow-hidden"
      >
        {/* Gradient glow on hover */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${gradient} blur-3xl -z-10 scale-150`}
        />

        {/* Icon */}
        <div
          className={`inline-flex p-3 rounded-xl ${gradient} mb-5 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon size={24} className="text-white" strokeWidth={1.5} />
        </div>

        <h3 className="text-base md:text-xl font-bold dark:text-white text-slate-900 mb-2 md:mb-3 group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
        <p className="hidden sm:block dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-5">
          {description}
        </p>

        <ul className="hidden sm:block space-y-2 mb-5">
          {features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm dark:text-slate-300 text-slate-700">
              <CheckCircle2
                size={14}
                className="text-emerald-400 shrink-0"
                strokeWidth={2}
              />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 text-sm font-semibold text-blue-500 group-hover:gap-2 transition-all mt-auto">
          Learn More <ArrowRight size={14} />
        </div>
      </Card>
    </motion.div>
  );
}
