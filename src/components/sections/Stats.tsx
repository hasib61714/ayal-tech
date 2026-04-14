"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/common/Container";

const stats = [
  { value: "2.4M+", label: "Messages Delivered" },
  { value: "500+",  label: "Businesses Served"  },
  { value: "1M+",   label: "People Counted"     },
  { value: "150+",  label: "Projects Delivered" },
];

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="bg-[#022c22] dark:bg-[#011a12] border-y border-emerald-900/40">
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-emerald-900/40"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center py-10 px-6"
            >
              <p className="text-3xl lg:text-4xl font-bold text-white mb-1.5">
                {stat.value.replace(/[M+]+$/, "")}
                <span className="text-emerald-400">
                  {stat.value.match(/[M+]+$/)?.[0] ?? ""}
                </span>
              </p>
              <p className="text-emerald-200/60 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
