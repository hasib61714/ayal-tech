"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    name: "Rahman Khan",
    role: "Marketing Director",
    company: "RetailBD",
    content:
      "AYAL TECH's Bulk SMS platform transformed our customer campaigns. Delivery rates are exceptional and the real-time reports help us optimise immediately. Highly recommended.",
    initials: "RK",
    rating: 5,
  },
  {
    name: "Fatema Akter",
    role: "Operations Manager",
    company: "City Mall Dhaka",
    content:
      "The People Counting System gave us insights we never had before. We optimised staff schedules based on real traffic data and saw a 20% efficiency improvement.",
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

// Section 4 — white bg
export function Testimonials() {
  return (
    <Section className="bg-white dark:bg-[#050d1f]">
      <Container>
        <SectionHeader
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
              className="relative flex flex-col p-8 rounded-2xl border border-slate-200 dark:border-emerald-500/15 bg-white dark:bg-[rgba(15,31,61,0.7)] backdrop-blur-sm shadow-sm dark:shadow-none hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/15 hover:border-emerald-400/60 dark:hover:border-emerald-600/40 transition-all duration-300 ease-in-out will-change-transform"
            >
              <Quote size={28} className="text-emerald-400/50 mb-4" strokeWidth={1} />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={14} className="text-amber-400 fill-amber-400" strokeWidth={0} />
                ))}
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 italic flex-1">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex items-center gap-3 border-t border-slate-100 dark:border-emerald-700/10 pt-5">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">
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
