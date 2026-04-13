"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { Testimonial } from "@/types";

// ──────────────────────────────────────────────────────────────────────
// ICON RATIONALE:
//  Star  → rating stars — quality / satisfaction metric
//  Quote → quotation mark — direct testimonial content
// ──────────────────────────────────────────────────────────────────────

const testimonials: Testimonial[] = [
  {
    name: "Rahman Khan",
    role: "Marketing Director",
    company: "RetailBD",
    content:
      "AYAL TECH's Bulk SMS platform transformed our customer campaigns. Delivery rates are exceptional and the real-time reports help us optimize immediately. Highly recommended.",
    initials: "RK",
    rating: 5,
  },
  {
    name: "Fatema Akter",
    role: "Operations Manager",
    company: "City Mall Dhaka",
    content:
      "The People Counting System gave us insights we never had before. We optimized staff schedules based on real traffic data and saw a 20% efficiency improvement.",
    initials: "FA",
    rating: 5,
  },
  {
    name: "Karim Ahmed",
    role: "CEO",
    company: "FinServ BD",
    content:
      "Their OTP SMS delivery is lightning fast and incredibly reliable. Our banking notification system now operates at 99.9% delivery success. AYAL TECH is a true partner.",
    initials: "KA",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <Section className="bg-slate-900/30">
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by"
          titleHighlight="Businesses"
          description="Hear what our clients say about working with AYAL TECH."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-blue-500/20 hover:bg-white/8 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-blue-400/30 mb-4"
                strokeWidth={1}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/8 pt-5">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-xs">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
