import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { Card } from "@/components/common/Card";
import { CTA } from "@/components/sections/CTA";
import { Target, Eye, Users, Award, Building2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AYAL TECH — our mission, vision, and the team behind Bangladesh's leading communication technology company.",
};

// ──────────────────────────────────────────────────────────────────────
// ICON RATIONALE:
//  Target    → Mission — focused goal / purpose
//  Eye       → Vision — looking ahead / future direction
//  Users     → Team → people working together
//  Award     → Excellence — quality & achievement
//  Building2 → Company / location
//  Globe     → Bangladesh-based, serving wider region
// ──────────────────────────────────────────────────────────────────────

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To help businesses improve communication, automation, and operational intelligence through scalable digital solutions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading technology partner for businesses in Bangladesh and beyond, enabling intelligent operations for every organization.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Award,
    title: "Our Excellence",
    description:
      "We follow rigorous standards in security, reliability, and performance, ensuring every solution is production-ready and enterprise-grade.",
    color: "from-amber-500 to-orange-500",
  },
];

const industries = [
  "Retail & Shopping Malls",
  "Financial Services",
  "E-commerce",
  "Marketing Agencies",
  "Political Campaigns",
  "Corporate Businesses",
  "Government Organizations",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-6 text-xs font-bold tracking-[0.2em] uppercase text-blue-400 border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 rounded-full">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-slate-900 mb-6 leading-tight">
              Who We <span className="gradient-text">Are</span>
            </h1>
            <p className="text-lg dark:text-slate-400 text-slate-600 leading-relaxed max-w-2xl mx-auto">
              AYAL TECH is a technology solutions company focused on helping businesses
              improve communication, automation, and operational intelligence.
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured company image */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
          alt="AYAL TECH team working on technology solutions"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/70 via-slate-900/40 to-slate-900/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Dhaka, Bangladesh</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Smart Communication &amp; Software Solutions</h2>
          </div>
        </div>
      </div>

      {/* About Content */}
      <Section className="py-16 dark:bg-slate-900/30 bg-slate-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-6">
                Building the Future of{" "}
                <span className="gradient-text">Business Technology</span>
              </h2>
              <div className="space-y-4 dark:text-slate-400 text-slate-600 leading-relaxed">
                <p>
                  We specialize in developing scalable digital communication systems and smart
                  business software that help organizations operate more efficiently and make
                  data-driven decisions.
                </p>
                <p>
                  Our team focuses on reliability, security, and performance, ensuring every
                  solution we deliver is ready for real-world business demands.
                </p>
                <p>
                  Whether you are a startup, enterprise, retail business, or service provider,
                  we help you leverage technology to streamline operations and engage customers
                  effectively.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 dark:bg-white/5 bg-white dark:border-white/10 border-slate-200 rounded-xl px-5 py-3">
                  <Building2 size={20} className="text-blue-400" strokeWidth={1.5} />
                  <div>
                    <p className="dark:text-white text-slate-900 font-semibold text-sm">Dhaka, Bangladesh</p>
                    <p className="dark:text-slate-500 text-slate-500 text-xs">Gulshan Avenue HQ</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 dark:bg-white/5 bg-white dark:border-white/10 border-slate-200 rounded-xl px-5 py-3">
                  <Globe size={20} className="text-cyan-400" strokeWidth={1.5} />
                  <div>
                    <p className="dark:text-white text-slate-900 font-semibold text-sm">Pan-Bangladesh</p>
                    <p className="dark:text-slate-500 text-slate-500 text-xs">Nationwide service coverage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values cards */}
            <div className="space-y-5">
              {values.map((v) => (
                <Card key={v.title} className="p-6 flex items-start gap-5 group hover:border-white/20 transition-all">
                  <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${v.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <v.icon size={20} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="dark:text-white text-slate-900 font-semibold mb-1">{v.title}</h3>
                    <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Industries */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Industries We Serve"
            title="Delivering Value Across"
            titleHighlight="Diverse Sectors"
            description="AYAL TECH solutions are trusted by businesses across multiple industries throughout Bangladesh."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <div key={ind}
                className="flex items-center gap-2 px-5 py-3 rounded-full border dark:border-white/10 border-slate-200 dark:bg-white/5 bg-white dark:text-slate-300 text-slate-700 text-sm hover:border-blue-500/30 hover:bg-blue-500/5 dark:hover:text-white hover:text-blue-600 transition-all"
              >
                <Users size={14} className="text-blue-400" strokeWidth={2} />
                {ind}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
