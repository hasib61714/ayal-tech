"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { services } from "@/lib/data";

export function Services() {
  return (
    <Section id="services" className="bg-slate-50 dark:bg-[#0a1628]">
      <Container>
        <SectionHeader
          eyebrow="What We Offer"
          title="A Complete Suite of"
          titleHighlight="Technology Solutions"
          description="Comprehensive communication and software platforms designed to scale with your organisation's growth."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/services/${service.id}`}
                className={`group flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-[rgba(15,31,61,0.8)] border border-slate-200 dark:border-slate-700/50 border-t-[3px] ${service.accentColor} shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-black/30 transition-all duration-300`}
              >
                {/* Category tag */}
                <span className="inline-block text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2.5 py-1 rounded-full mb-4 w-fit">
                  {service.category}
                </span>

                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  <service.icon size={20} className="text-white" strokeWidth={1.5} />
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>

                {/* Top features */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <CheckCircle2 size={12} className="text-emerald-600 dark:text-emerald-400 shrink-0" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Learn more */}
                <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 group-hover:gap-2 transition-all mt-auto">
                  Learn More <ArrowRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
