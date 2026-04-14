import type { Metadata } from "next";
import { HeroBg } from "@/components/common/HeroBg";
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
  ThumbsUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose AYAL TECH",
  description:
    "Discover why businesses across Bangladesh trust AYAL TECH for communication technology and custom software solutions.",
};

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
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    title: "Solution Design",
    description: "Our architects design a tailored solution that fits your scale and budget.",
    color: "from-violet-500 to-purple-500",
  },
  {
    step: "03",
    title: "Agile Development",
    description: "Iterative development with regular demos so you always see progress.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description: "Rigorous QA, security audits, and smooth production deployment.",
    color: "from-amber-500 to-orange-500",
  },
  {
    step: "05",
    title: "Ongoing Support",
    description: "We stay with you post-launch — monitoring, updates, and dedicated assistance.",
    color: "from-rose-500 to-pink-500",
  },
];

export default function WhyUsPage() {
  return (
    <>
      {/* Hero — colored (emerald-50 light / dark bg dark) */}
      <Section className="pt-12 lg:pt-12 pb-16 lg:pb-16 relative overflow-hidden">
        <HeroBg />
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Why Choose{" "}
                <span className="gradient-text">AYAL TECH</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                We combine modern technology with robust infrastructure to deliver
                unparalleled value. Here&apos;s why hundreds of businesses across
                Bangladesh choose AYAL TECH.
              </p>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: Server, label: "Reliable", color: "from-blue-500 to-cyan-500" },
                { icon: Shield, label: "Secure", color: "from-emerald-500 to-teal-500" },
                { icon: Zap, label: "Fast", color: "from-amber-500 to-orange-500" },
                { icon: TrendingUp, label: "Scalable", color: "from-violet-500 to-purple-500" },
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

      {/* Strengths Grid — white */}
      <Section className="pt-0 bg-white dark:bg-[#050d1f]">
        <Container>
          <SectionHeader
            eyebrow="Our Strengths"
            title="What Sets Us"
            titleHighlight="Apart"
            description="Every pillar of our service is engineered to deliver real results."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="group relative p-6 rounded-2xl border border-slate-200 dark:border-emerald-500/15 bg-white dark:bg-[rgba(15,31,61,0.7)] backdrop-blur-sm shadow-sm dark:shadow-none hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/15 hover:border-emerald-400/60 dark:hover:border-emerald-600/40 transition-all duration-300 ease-in-out will-change-transform overflow-hidden"
              >
                {/* Bottom accent on hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div
                  className={`w-11 h-11 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  <item.icon size={20} className="text-white" strokeWidth={1.5} />
                </div>

                <div className={`text-xs font-bold bg-linear-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                  {item.stat}
                </div>

                <h3 className="text-slate-900 dark:text-white font-bold mb-2 text-sm">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats — colored */}
      <Stats />

      {/* Our Process — white */}
      <Section className="bg-white dark:bg-[#050d1f]">
        <Container>
          <SectionHeader
            eyebrow="Our Process"
            title="How We"
            titleHighlight="Deliver"
            description="A proven, transparent process from first conversation to live deployment."
          />
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-linear-to-r from-transparent via-emerald-700/30 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((step) => (
                <div key={step.step} className="relative text-center group">
                  <div
                    className={`w-16 h-16 rounded-full bg-linear-to-br ${step.color} flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{step.description}</p>
                </div>
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
            titleHighlight="Every Sector"
            description="From retail to government — AYAL TECH powers businesses of all types."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <div
                key={ind}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 text-sm hover:border-emerald-700/30 hover:bg-teal-500/5 hover:text-emerald-700 dark:hover:text-white transition-all cursor-default shadow-sm dark:shadow-none"
              >
                <CheckCircle2 size={14} className="text-emerald-400" strokeWidth={2} />
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
