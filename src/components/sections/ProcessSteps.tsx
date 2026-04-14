"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/common/Section";
import { Container } from "@/components/common/Container";

const steps = [
  {
    num: "01",
    title: "Consultation",
    description: "We discuss your business goals, challenges, and requirements to understand exactly what you need.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    num: "02",
    title: "Solution Design",
    description: "Our team designs a tailored solution — architecture, workflow, and timeline — and presents it for your approval.",
    color: "from-violet-500 to-purple-500",
  },
  {
    num: "03",
    title: "Deployment",
    description: "Fast, smooth deployment with regular progress updates. You stay in control at every stage.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    num: "04",
    title: "Ongoing Support",
    description: "Dedicated post-launch support, proactive monitoring, and continuous optimization for your success.",
    color: "from-amber-500 to-orange-500",
  },
];

export function ProcessSteps() {
  return (
    <Section className="bg-slate-50 dark:bg-[#0a1628]">
      <Container>
        <SectionHeader
          eyebrow="How It Works"
          title="Simple 4-Step"
          titleHighlight="Onboarding"
          description="From first contact to live deployment — a transparent process designed around your needs."
        />

        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-transparent via-emerald-700/25 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center group"
              >
                {/* Number circle */}
                <div
                  className={`w-16 h-16 rounded-full bg-linear-to-br ${step.color} flex items-center justify-center mx-auto mb-5 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white font-bold text-sm">{step.num}</span>
                </div>

                <h3 className="text-slate-900 dark:text-white font-bold mb-2">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
