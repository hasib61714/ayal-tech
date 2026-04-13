"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Building2, Users, Rocket } from "lucide-react";
import { Section, SectionHeader } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { Stat } from "@/types";

// ──────────────────────────────────────────────────────────────────────
// ICON RATIONALE:
//  MessageSquare → SMS / messages delivered
//  Building2     → enterprise clients / businesses served
//  Users         → people counted / users tracked
//  Rocket        → projects completed / delivery speed
// ──────────────────────────────────────────────────────────────────────

const stats: Stat[] = [
  {
    value: "2.4",
    suffix: "M+",
    label: "Messages Delivered",
    icon: MessageSquare,
  },
  {
    value: "500",
    suffix: "+",
    label: "Businesses Served",
    icon: Building2,
  },
  {
    value: "1",
    suffix: "M+",
    label: "People Counted",
    icon: Users,
  },
  {
    value: "150",
    suffix: "+",
    label: "Projects Delivered",
    icon: Rocket,
  },
];

function AnimatedNumber({ value, suffix }: { value: string; suffix?: string }) {
  return (
    <span className="text-4xl lg:text-5xl font-bold dark:text-white text-slate-900">
      {value}
      <span className="gradient-text">{suffix}</span>
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <Section className="bg-linear-to-br from-blue-600/10 via-transparent to-violet-600/10">
      <Container>
        <SectionHeader
          eyebrow="Our Impact"
          title="Numbers That"
          titleHighlight="Speak"
          description="Real results delivered to businesses across Bangladesh and beyond."
        />

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-white/5 bg-white backdrop-blur-sm text-center group hover:border-blue-500/30 hover:bg-blue-50 dark:hover:bg-blue-500/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500/20 to-violet-500/20 border dark:border-white/10 border-slate-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon
                  size={22}
                  className="text-blue-400"
                  strokeWidth={1.5}
                />
              </div>

              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-slate-400 text-sm mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
