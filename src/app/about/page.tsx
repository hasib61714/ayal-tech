import type { Metadata } from "next";
import { HeroBg } from "@/components/common/HeroBg";
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
      {/* Hero — colored */}
      <Section className="pt-12 lg:pt-12 pb-16 lg:pb-16 relative overflow-hidden">
        <HeroBg />
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Who We <span className="gradient-text">Are</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                AYAL TECH is a technology solutions company focused on helping businesses
                improve communication, automation, and operational intelligence.
              </p>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: Target, label: "Our Mission", color: "from-blue-500 to-cyan-500" },
                { icon: Eye, label: "Our Vision", color: "from-violet-500 to-purple-500" },
                { icon: Award, label: "Excellence", color: "from-amber-500 to-orange-500" },
                { icon: Users, label: "Our Team", color: "from-emerald-500 to-teal-500" },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:-translate-y-2 hover:scale-[1.02] hover:bg-white/10 hover:shadow-xl hover:shadow-emerald-500/15 hover:border-white/20 transition-all duration-300 ease-in-out will-change-transform">
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${color} flex items-center justify-center`}>
                    <Icon size={28} className="text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-medium text-slate-300 text-center">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>


      {/* About Content — white */}
      <Section className="py-16 bg-white dark:bg-[#050d1f]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Building the Future of{" "}
                <span className="gradient-text">Business Technology</span>
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
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
                <div className="flex items-center gap-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3 shadow-sm dark:shadow-none">
                  <Building2 size={20} className="text-emerald-400" strokeWidth={1.5} />
                  <div>
                    <p className="text-white font-semibold text-sm">Dhaka, Bangladesh</p>
                    <p className="dark:text-slate-500 text-slate-500 text-xs">Gulshan Avenue HQ</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3 shadow-sm dark:shadow-none">
                  <Globe size={20} className="text-cyan-400" strokeWidth={1.5} />
                  <div>
                    <p className="text-white font-semibold text-sm">Pan-Bangladesh</p>
                    <p className="dark:text-slate-500 text-slate-500 text-xs">Nationwide service coverage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values cards */}
            <div className="space-y-5">
              {values.map((v) => (
                <Card key={v.title} hover className="p-6 flex items-start gap-5 group">
                  <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${v.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <v.icon size={20} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{v.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Industries — colored */}
      <Section className="bg-teal-50 dark:bg-[#0a1628]">
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
                className="flex items-center gap-2 px-5 py-3 rounded-full border dark:border-white/10 border-slate-200 dark:bg-white/5 bg-white text-slate-300 text-sm hover:border-emerald-700/30 hover:bg-teal-500/5 dark:hover:text-white hover:text-emerald-700 transition-all"
              >
                <Users size={14} className="text-emerald-400" strokeWidth={2} />
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
