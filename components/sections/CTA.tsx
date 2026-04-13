"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";

// ──────────────────────────────────────────────────────────────────────
// ICON RATIONALE:
//  ArrowRight     → directional CTA — take action now
//  MessageSquare  → WhatsApp / contact action
// ──────────────────────────────────────────────────────────────────────

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-slate-900 to-violet-900/40" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block mb-5 text-xs font-bold tracking-[0.2em] uppercase text-blue-400 border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 rounded-full">
            Ready to Transform?
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Great Together</span>
          </h2>

          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Contact AYAL TECH today and discover how our technology solutions can
            help your business grow faster and operate smarter.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" icon={ArrowRight}>
              Get in Touch Now
            </Button>
            <Button
              href="https://wa.me/8801971521964"
              variant="outline"
              size="lg"
              icon={MessageSquare}
              iconPosition="left"
            >
              WhatsApp Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
