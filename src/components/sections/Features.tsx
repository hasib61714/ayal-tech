"use client";

import { motion } from "framer-motion";
import { Server, TrendingUp, Shield, HeadphonesIcon } from "lucide-react";
import { Section, SectionHeader } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { Feature } from "@/types";

const features: Feature[] = [
  {
    title: "Reliable Infrastructure",
    description:
      "Our systems handle large-scale communication and real-time data processing without downtime, backed by enterprise-grade infrastructure.",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Scalable Solutions",
    description:
      "Platforms designed to grow seamlessly alongside your business — from startup to enterprise — without performance degradation.",
    icon: TrendingUp,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Secure Technology",
    description:
      "We follow rigorous modern security practices — encrypted communications, secure APIs, and OWASP-compliant data handling.",
    icon: Shield,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Dedicated Support",
    description:
      "Our technical team is always ready to assist clients, ensuring smooth, uninterrupted operation with proactive monitoring.",
    icon: HeadphonesIcon,
    color: "from-amber-500 to-orange-500",
  },
];

// Section 2 — white bg
export function Features() {
  return (
    <Section id="why-us" className="bg-white dark:bg-[#050d1f]">
      <Container>
        <SectionHeader
          title="Built for"
          titleHighlight="Performance"
          description="We combine modern technology with robust infrastructure to deliver unparalleled value to our clients."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-7 rounded-2xl border border-slate-200 dark:border-emerald-500/15 bg-white dark:bg-[rgba(15,31,61,0.7)] backdrop-blur-sm shadow-sm dark:shadow-none hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/15 hover:border-emerald-400/60 dark:hover:border-emerald-600/40 transition-all duration-300 ease-in-out will-change-transform">
                <div
                  className={`w-12 h-12 rounded-xl bg-linear-to-br ${feat.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feat.icon size={22} className="text-white" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{feat.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{feat.description}</p>

                {/* Colored bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-linear-to-r ${feat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
