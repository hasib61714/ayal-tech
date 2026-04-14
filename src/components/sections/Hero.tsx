"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquare, Radio, Users, Code2 } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";

const heroFeatures = [
  "Fast & Reliable Messaging",
  "Intelligent Voice Broadcasting",
  "Real-time People Analytics",
  "Tailor-made Software Solutions",
];

export function Hero() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="relative min-h-[calc(100vh-116px)] flex items-center pt-12 pb-16 overflow-hidden">

      {/* Gradient background */}
      <div className="absolute inset-0 -z-10
        bg-[linear-gradient(135deg,#0f172a_0%,#042f2e_50%,#0f172a_100%)]
        dark:bg-[linear-gradient(135deg,#050d1f_0%,#022c22_60%,#050d1f_100%)]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-size-[60px_60px]" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.15] mb-6">
              <span className="block whitespace-nowrap">Powering <span className="gradient-text">Businesses</span></span>
              <span className="block whitespace-nowrap">with Communication</span>
              <span className="block">{"& Technology"}</span>
            </h1>

            <p className={`text-base lg:text-lg text-slate-300 leading-relaxed max-w-lg ${
              expanded ? "" : "line-clamp-2"
            }`}>
              AYAL TECH provides advanced Bulk SMS, Voice Broadcasting, People Counting
              Systems, and Custom Software Solutions to help businesses automate communication,
              analyze customer behavior, and improve operational efficiency.
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm text-emerald-400 hover:text-emerald-300 font-medium mt-1 mb-7 transition-colors"
            >
              {expanded ? "Show less ↑" : "Read more ↓"}
            </button>

            {/* Feature checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {heroFeatures.map((feat, i) => (
                <motion.li
                  key={feat}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-2.5 text-sm text-slate-200
                    bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm"
                >
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" strokeWidth={2} />
                  {feat}
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/services" variant="primary" size="lg" icon={ArrowRight}>
                Explore Services
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get Free Consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Icon grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-5"
          >
            {[
              { icon: MessageSquare, label: "Bulk SMS",        sub: "Instant delivery",     color: "from-blue-500 to-cyan-500" },
              { icon: Radio,         label: "Voice Blast",     sub: "Mass broadcasting",    color: "from-violet-500 to-purple-500" },
              { icon: Users,         label: "People Counting", sub: "AI-powered analytics", color: "from-emerald-500 to-teal-500" },
              { icon: Code2,         label: "Custom Software", sub: "Tailored solutions",   color: "from-amber-500 to-orange-500" },
            ].map(({ icon: Icon, label, sub, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="flex flex-col gap-3 p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/15 hover:border-white/20 transition-all duration-300 ease-in-out will-change-transform"
              >
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${color} flex items-center justify-center`}>
                  <Icon size={28} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
