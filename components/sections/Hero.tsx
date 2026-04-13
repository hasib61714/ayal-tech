"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";

// ──────────────────────────────────────────────────────────────────────
// ICON RATIONALE:
//  ArrowRight → CTA direction — action forward
//  Play       → demo / start now — initiate
//  CheckCircle2 → feature checkmark — confirmed benefit
//  TrendingUp → growth / data-driven focus
//  Activity   → system status / real-time monitoring
// ──────────────────────────────────────────────────────────────────────

const heroFeatures = [
  "Fast & Reliable Messaging",
  "Intelligent Voice Broadcasting",
  "Real-time People Analytics",
  "Tailor-made Software Solutions",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-40 w-150 h-150 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-violet-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-cyan-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 dark:bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-semibold tracking-wide">
                SYSTEM STATUS — OPTIMAL
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold dark:text-white text-slate-900 leading-tight mb-6">
              Powering{" "}
              <span className="gradient-text">Businesses</span>
              <br />
              with Technology
            </h1>

            <p className="text-lg dark:text-slate-400 text-slate-600 leading-relaxed mb-8 max-w-lg">
              AYAL TECH provides advanced Bulk SMS, Voice Broadcasting, People
              Counting Systems, and Custom Software Solutions to automate
              communication and improve operational efficiency.
            </p>

            {/* Feature checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
              {heroFeatures.map((feat, i) => (
                <motion.li
                  key={feat}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm dark:text-slate-300 text-slate-700"
                >
                  <CheckCircle2
                    size={16}
                    className="text-emerald-400 shrink-0"
                    strokeWidth={2}
                  />
                  {feat}
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/services" variant="primary" size="lg" icon={ArrowRight}>
                Explore Our Services
              </Button>
              <Button href="/contact" variant="outline" size="lg" icon={Play} iconPosition="left">
                Start Growing Today
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Company hero image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative animate-float">
              {/* Hero image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border dark:border-white/10 border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="AYAL TECH — team working on technology solutions"
                  width={800}
                  height={560}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>

              {/* Floating stat — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute -top-5 -right-5 glass rounded-2xl px-5 py-3.5 shadow-xl dark:shadow-none shadow-slate-200"
              >
                <p className="text-xs dark:text-slate-400 text-slate-600 mb-0.5">Delivery Rate</p>
                <p className="text-2xl font-bold dark:text-white text-slate-900">99.8%</p>
              </motion.div>

              {/* Floating stat — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                className="absolute -bottom-5 -left-5 glass rounded-2xl px-5 py-3.5 shadow-xl dark:shadow-none shadow-slate-200"
              >
                <p className="text-xs dark:text-slate-400 text-slate-600 mb-0.5">Data-Driven Focus</p>
                <p className="text-2xl font-bold gradient-text">100%</p>
              </motion.div>

              {/* Floating badge — bottom right */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="absolute bottom-6 right-4 flex items-center gap-2 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                SYSTEM STATUS — OPTIMAL
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
