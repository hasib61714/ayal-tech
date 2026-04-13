import type { Metadata } from "next";
import Link from "next/link";
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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-600/20 via-transparent to-teal-600/10" />
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10">
              <Users size={14} className="text-emerald-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">
                People Counting System
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Know Your{" "}
              <span className="bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Visitor Flow
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              AI-powered people counting for retail, malls, offices, and events.
              Get real-time visitor data and actionable insights to make smarter
              business decisions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get a Free Demo <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
            {[
              { value: "98%+", label: "Counting Accuracy" },
              { value: "Real-time", label: "Data Streaming" },
              { value: "Multi-zone", label: "Coverage" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="text-2xl font-bold bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <Section className="bg-slate-900/30">
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
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feat.icon size={18} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{feat.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{feat.description}</p>
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
              <div key={s.step} className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                  {s.step}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{s.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section className="bg-slate-900/30">
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
                className="flex gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-emerald-500/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <uc.icon size={18} className="text-emerald-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{uc.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{uc.description}</p>
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
