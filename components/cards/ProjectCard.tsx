"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/common/Badge";

export interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  tags: string[];
  index?: number;
}

export function ProjectCard({
  title,
  description,
  category,
  tags,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
    >
      {/* Top accent */}
      <div className="h-1 bg-linear-to-r from-blue-500 via-cyan-400 to-violet-500" />

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <Badge variant="primary">{category}</Badge>
          <ArrowUpRight
            size={18}
            className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
