import type { Metadata } from "next";
import Link from "next/link";
import { HeroBg } from "@/components/common/HeroBg";
import { Section, SectionHeader } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { CTA } from "@/components/sections/CTA";
import {
  Users,
  CheckCircle2,
  BarChart2,
  Wifi,
  Brain,
  LineChart,
  ArrowRight,
  ShoppingBag,
  Building2,
  Calendar,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "People Counting System | AYAL TECH",
  description:
    "AI-powered real-time people counting for retail, malls, offices, and events. Accurate visitor analytics with live dashboards and business intelligence reports.",
};

const features = [
  {
    icon: Brain,
    title: "AI-Based Detection",
    description:
      "Computer vision algorithms accurately count individuals even in high-density scenarios, handling occlusion and varying lighting conditions.",
  },
  {
    icon: Wifi,
    title: "Real-time Streaming",
    description:
      "Live visitor counts update instantly on your dashboard. No delay — watch footfall change second by second.",
  },
  {
    icon: BarChart2,
    title: "Analytics Dashboard",
    description:
      "Rich, intuitive dashboards with heatmaps, peak-hour analysis, and zone-level breakdowns of visitor movement.",
  },
  {
    icon: LineChart,
    title: "Trend Reports",
    description:
      "Daily, weekly, and monthly reports help you spot patterns, optimize staff scheduling, and justify marketing spend.",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description:
      "Processing happens on-device for ultra-low latency. No heavy cloud dependency — works reliably even with limited connectivity.",
  },
  {
    icon: CheckCircle2,
    title: "Multi-zone Support",
    description:
      "Monitor multiple entries, floors, or departments simultaneously. Centralized management for multi-location deployments.",
  },
];

const useCases = [
  {
    icon: ShoppingBag,
    title: "Retail Stores",
    description:
      "Measure conversion rates, identify peak shopping hours, and optimize staff deployment based on real visitor data.",
  },
  {
    icon: Building2,
    title: "Shopping Malls",
    description:
      "Track footfall across entrances, floors, and tenant zones. Share visitor data with tenants to justify lease rates.",
  },
  {
    icon: Calendar,
    title: "Events & Venues",
    description:
      "Monitor crowd levels in real-time, enforce capacity limits, and generate post-event attendance reports.",
  },
  {
    icon: Brain,
    title: "Office & Workspace",
    description:
      "Track space utilization, optimize meeting room availability, and plan facility expansions with confidence.",
  },
];

const steps = [
  { step: "01", title: "Site Survey", description: "Our team visits your location to assess entry points and camera placement." },
  { step: "02", title: "Hardware Install", description: "AI-powered sensors and cameras are installed at all monitoring points." },
  { step: "03", title: "Dashboard Setup", description: "Your custom analytics dashboard goes live with your branding and KPIs." },
  { step: "04", title: "Insights Delivered", description: "Receive daily reports and real-time alerts based on your thresholds." },
];

export default function PeopleCountingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <HeroBg />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Know Your{" "}
                <span className="bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Visitor Flow
                </span>
              </h1>

              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                AI-powered people counting for retail, malls, offices, and events.
                Get real-time visitor data and actionable insights to make smarter
                business decisions.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Get a Free Demo <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border dark:border-white/10 border-blue-300 dark:bg-white/5 bg-white dark:text-white text-blue-700 font-semibold dark:hover:bg-white/10 hover:bg-blue-50 hover:border-blue-400 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: Brain, label: "AI Detection", color: "from-emerald-500 to-teal-500" },
                { icon: Wifi, label: "Real-time", color: "from-blue-500 to-cyan-500" },
                { icon: LineChart, label: "Analytics", color: "from-violet-500 to-purple-500" },
                { icon: Cpu, label: "Edge AI", color: "from-amber-500 to-orange-500" },
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

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
            {[
              { value: "98%+", label: "Counting Accuracy" },
              { value: "Real-time", label: "Data Streaming" },
              { value: "Multi-zone", label: "Coverage" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-5 rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm backdrop-blur-sm hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/15 transition-all duration-300 ease-in-out will-change-transform">
                <div className="text-2xl font-bold bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1">{stat.value}</div>
                <div className="text-xs text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <Section className="dark:bg-[#0a1628] bg-slate-50">
        <Container>
          <SectionHeader
            eyebrow="Features"
            title="Smarter Visitor"
            titleHighlight="Intelligence"
            description="Advanced AI counting with the analytics tools to turn data into decisions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="group p-6 rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/15 hover:border-emerald-700/40 hover:bg-teal-500/5 transition-all duration-300 ease-in-out will-change-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
            eyebrow="How It Works"
            title="Up and Running in"
            titleHighlight="Days, Not Months"
            description="Our team handles everything from site survey to live dashboard."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="text-center p-6 rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/15 hover:border-emerald-500/25 transition-all duration-300 ease-in-out will-change-transform">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
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
            title="Who Benefits from"
            titleHighlight="People Counting?"
            description="Any business that values understanding its physical customer traffic."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="flex gap-4 p-6 rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/15 hover:border-emerald-700/30 transition-all duration-300 ease-in-out will-change-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-700/20 flex items-center justify-center shrink-0">
                  <uc.icon size={18} className="text-emerald-400" strokeWidth={1.5} />
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

      <CTA />
    </>
  );
}
