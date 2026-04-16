import type { Metadata } from "next";
import Link from "next/link";
import { HeroBg } from "@/components/common/HeroBg";
import { Section, SectionHeader } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { CTA } from "@/components/sections/CTA";
import { ServiceIconGrid } from "@/components/sections/ServiceHeroWidgets";
import { ServiceHeroDesc } from "@/components/sections/ServiceHeroDesc";
import {
  Code2,
  CheckCircle2,
  BarChart2,
  Globe,
  Smartphone,
  Database,
  ArrowRight,
  Building2,
  ShoppingBag,
  Layers,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Solutions | AYAL TECH",
  description:
    "Tailor-made software built for your unique business — CRM, ERP, POS systems, inventory management, and web applications developed by AYAL TECH.",
};

const features = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Full-stack web apps built with modern frameworks (React, Next.js, Laravel). Fast, secure, and scalable for any audience size.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform iOS and Android apps using React Native. One codebase, two platforms — faster delivery and lower cost.",
  },
  {
    icon: Database,
    title: "ERP & CRM Systems",
    description:
      "Centralize HR, inventory, finance, and CRM into one unified platform tailored to your business workflows.",
  },
  {
    icon: BarChart2,
    title: "POS & Inventory",
    description:
      "Modern point-of-sale and inventory management systems for retail, wholesale, and multi-location businesses.",
  },
  {
    icon: Cpu,
    title: "Automation Platforms",
    description:
      "Eliminate repetitive tasks with workflow automation — from data entry to report generation and approval flows.",
  },
  {
    icon: CheckCircle2,
    title: "Ongoing Maintenance",
    description:
      "We don&apos;t just build and leave. Dedicated post-launch support, updates, and feature enhancements are included.",
  },
];

const useCases = [
  {
    icon: Building2,
    title: "Enterprise Automation",
    description:
      "Replace manual processes with integrated systems that save time, reduce errors, and give full operational visibility.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description:
      "Online shops, inventory tracking, loyalty programs, and POS terminals all connected in one ecosystem.",
  },
  {
    icon: Layers,
    title: "Custom Workflows",
    description:
      "Every business is unique. We model your exact workflow — approval chains, role permissions, notifications — in software.",
  },
  {
    icon: Database,
    title: "Data Management",
    description:
      "Centralize scattered spreadsheets and databases into a clean, searchable, role-based data management system.",
  },
];

const steps = [
  { step: "01", title: "Discovery & Analysis", description: "We deeply analyze your business requirements and define clear specifications." },
  { step: "02", title: "UI/UX Design", description: "Interactive wireframes and visual prototypes — you approve before we code." },
  { step: "03", title: "Agile Development", description: "Iterative sprints with regular demos so you stay informed and in control." },
  { step: "04", title: "Testing & QA", description: "Comprehensive testing — functional, performance, security — before launch." },
  { step: "05", title: "Launch & Support", description: "Smooth production deployment with ongoing maintenance and feature updates." },
];

const techStack = [
  "Next.js", "React", "TypeScript", "Laravel", "Node.js",
  "PostgreSQL", "MySQL", "Redis", "Docker", "AWS",
];

export default function CustomSoftwarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <HeroBg />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Business Software{" "}
                <span className="bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Solutions</span>
              </h1>

              <ServiceHeroDesc>
                Off-the-shelf software rarely fits perfectly. We design and build
                custom solutions — from CRM to ERP to POS — precisely shaped around
                your unique workflows and goals.
              </ServiceHeroDesc>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-linear-to-r from-amber-600 to-orange-600 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Start Your Project <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border dark:border-white/10 border-blue-300 dark:bg-white/5 bg-white dark:text-white text-blue-700 font-semibold dark:hover:bg-white/10 hover:bg-blue-50 hover:border-blue-400 transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <ServiceIconGrid items={[
                { icon: Code2, label: "Web Apps", color: "from-amber-500 to-orange-500" },
                { icon: Globe, label: "Full-stack", color: "from-blue-500 to-cyan-500" },
                { icon: Smartphone, label: "Mobile Apps", color: "from-violet-500 to-purple-500" },
                { icon: Database, label: "ERP & CRM", color: "from-emerald-500 to-teal-500" },
              ]} />
          </div>


        </Container>
      </section>

      {/* Features */}
      <Section className="dark:bg-[#0a1628] bg-slate-50">
        <Container>
          <SectionHeader
            eyebrow="What We Build"
            title="Full-spectrum"
            titleHighlight="Software Services"
            description="From simple web apps to complex enterprise systems — we have the expertise."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="group p-6 rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/15 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-300 ease-in-out will-change-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feat.icon size={18} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{feat.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Our Process"
            title="From Idea to"
            titleHighlight="Live Product"
            description="A transparent, collaborative process that keeps you in control at every stage."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="text-center p-6 rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/15 hover:border-amber-500/25 transition-all duration-300 ease-in-out will-change-transform">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                  {s.step}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{s.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section className="dark:bg-[#0a1628] bg-slate-50">
        <Container>
          <SectionHeader
            eyebrow="Use Cases"
            title="Problems We"
            titleHighlight="Solve"
            description="Real business challenges solved with elegantly engineered software."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="flex gap-4 p-6 rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/15 hover:border-amber-500/30 transition-all duration-300 ease-in-out will-change-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <uc.icon size={18} className="text-amber-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{uc.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{uc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tech Stack */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Technology Stack"
            title="Modern Tools, Proven"
            titleHighlight="Results"
            description="We use industry-leading technologies to build secure, scalable software."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="px-5 py-2.5 rounded-full border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm text-slate-300 text-sm hover:border-amber-500/30 hover:bg-amber-500/5 hover:text-amber-500 transition-all cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
