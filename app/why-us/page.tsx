import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { CTA } from "@/components/sections/CTA";
import { Stats } from "@/components/sections/Stats";
import {
  Server,
  TrendingUp,
  Shield,
  HeadphonesIcon,
  Zap,
  BarChart2,
  CheckCircle2,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose AYAL TECH",
  description:
    "Discover why businesses across Bangladesh trust AYAL TECH for communication technology and custom software solutions.",
};

// ──────────────────────────────────────────────────────────────────────
// ICON RATIONALE:
//  Server         → Reliable Infrastructure — backend uptime
//  TrendingUp     → Scalable Solutions — grows with your business
//  Shield         → Secure Technology — data protection
//  HeadphonesIcon → Dedicated Support — always available team
//  Zap            → Speed / Performance — fast delivery
//  BarChart2      → Data-Driven — analytics & reporting
//  CheckCircle2   → Proven Track Record — verified results
//  Clock          → Fast Turnaround — quick deployment
// ──────────────────────────────────────────────────────────────────────

const strengths = [
  {
    icon: Server,
    title: "Reliable Infrastructure",
    description:
      "Our systems are engineered to handle large-scale communication and real-time data processing without downtime. Enterprise-grade uptime guaranteed.",
    color: "from-blue-500 to-cyan-500",
    stat: "99.9% Uptime",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Our platforms grow seamlessly alongside your business — from startup to enterprise — without performance degradation or re-architecture.",
    color: "from-violet-500 to-purple-500",
    stat: "Startup → Enterprise",
  },
  {
    icon: Shield,
    title: "Secure Technology",
    description:
      "We follow rigorous modern security practices — encrypted APIs, OWASP-compliant development, and industry-standard data protection protocols.",
    color: "from-emerald-500 to-teal-500",
    stat: "OWASP Compliant",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Our technical team is always ready to assist clients with proactive monitoring, rapid response, and smooth uninterrupted operation.",
    color: "from-amber-500 to-orange-500",
    stat: "24/7 Available",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Bulk SMS delivered in under 3 seconds. Voice blast campaigns launch instantly. People counting data streams in real-time.",
    color: "from-yellow-500 to-amber-500",
    stat: "< 3s Delivery",
  },
  {
    icon: BarChart2,
    title: "Data-Driven Insights",
    description:
      "Every solution comes with a rich analytics dashboard — real-time delivery reports, traffic trends, and actionable business intelligence.",
    color: "from-pink-500 to-rose-500",
    stat: "Real-time Analytics",
  },
  {
    icon: CheckCircle2,
    title: "Proven Track Record",
    description:
      "500+ businesses served, 2.4M+ messages delivered, 150+ custom projects completed. Our results speak for themselves.",
    color: "from-cyan-500 to-blue-500",
    stat: "500+ Clients",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "We deploy solutions quickly without sacrificing quality. Agile methodology, rapid iterations, and on-time delivery every time.",
    color: "from-indigo-500 to-violet-500",
    stat: "On-time Delivery",
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

const process = [
  {
    step: "01",
    title: "Requirement Analysis",
    description: "We deeply understand your business needs and define clear project goals.",
  },
  {
    step: "02",
    title: "Solution Design",
    description: "Our architects design a tailored solution that fits your scale and budget.",
  },
  {
    step: "03",
    title: "Agile Development",
    description: "Iterative development with regular demos so you always see progress.",
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description: "Rigorous QA, security audits, and smooth production deployment.",
  },
  {
    step: "05",
    title: "Ongoing Support",
    description: "We stay with you post-launch — monitoring, updates, and dedicated assistance.",
  },
];

export default function WhyUsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-6 text-xs font-bold tracking-[0.2em] uppercase text-blue-400 border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 rounded-full">
              Why Choose Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Built for{" "}
              <span className="gradient-text">Performance</span>
              <br />
              Trusted by Business
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              We combine modern technology with robust infrastructure to deliver
              unparalleled value. Here&apos;s why hundreds of businesses across
              Bangladesh choose AYAL TECH.
            </p>
          </div>
        </Container>
      </Section>

      {/* Strengths Grid */}
      <Section className="pt-0 bg-slate-900/30">
        <Container>
          <SectionHeader
            eyebrow="Our Strengths"
            title="What Sets Us"
            titleHighlight="Apart"
            description="Every pillar of our service is engineered to deliver real results."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-white/8 transition-all duration-300 overflow-hidden"
              >
                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div
                  className={`w-11 h-11 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon size={20} className="text-white" strokeWidth={1.5} />
                </div>

                <div
                  className={`text-xs font-bold bg-linear-to-r ${item.color} bg-clip-text text-transparent mb-2`}
                >
                  {item.stat}
                </div>

                <h3 className="text-white font-bold mb-2 text-sm">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Stats />

      {/* Our Process */}
      <Section className="bg-slate-900/30">
        <Container>
          <SectionHeader
            eyebrow="Our Process"
            title="How We"
            titleHighlight="Deliver"
            description="A proven, transparent process from first conversation to live deployment."
          />
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((step) => (
                <div key={step.step} className="relative text-center">
                  {/* Step number circle */}
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-violet-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20 relative z-10">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.description}</p>
                </div>
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
            titleHighlight="Every Sector"
            description="From retail to government — AYAL TECH powers businesses of all types."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <div
                key={ind}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-white transition-all cursor-default"
              >
                <CheckCircle2 size={14} className="text-blue-400" strokeWidth={2} />
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
