import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeroBg } from "@/components/common/HeroBg";
import { Section, SectionHeader } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { CTA } from "@/components/sections/CTA";
import { ServiceIconGrid } from "@/components/sections/ServiceHeroWidgets";
import { ServiceHeroDesc } from "@/components/sections/ServiceHeroDesc";
import { FeaturesSlider } from "@/components/sections/FeaturesSlider";
import {
  Brain,
  LineChart,
  ArrowRight,
  ShoppingBag,
  Building2,
  Calendar,
  Cpu,
  Shield,
  GraduationCap,
  HeartPulse,
  Train,
  ScanLine,
  Globe2,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "People Counting System | AYAL TECH",
  description:
    "AI-powered real-time people counting for retail, malls, offices, and events. Accurate visitor analytics with live dashboards and business intelligence reports.",
};

const stats = [
  { value: "99%+", label: "Detection Accuracy" },
  { value: "90", label: "Days Offline Storage" },
  { value: "2 TOPS", label: "AI Compute Engine" },
  { value: "20%", label: "Energy Efficiency Gain" },
];

const coreTech = [
  {
    icon: ScanLine,
    title: "3D Depth Sensing",
    description:
      "Utilizes advanced ToF (Time of Flight) and structured light technologies for precise real-time depth mapping — far superior to traditional 2D camera systems.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description:
      "Machine learning models trained on diverse datasets for accurate person detection, tracking, gender/age recognition, and ReID-based deduplication.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description:
      "2 TOPS heterogeneous on-device processing with 1GB LPDDR4X cache delivers real-time results with minimal latency and 50% higher data throughput.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "Privacy-First Design",
    description:
      "No personal data collection — only anonymous counting and crowd analytics. Deep pseudo-color mode ensures complete privacy compliance by design.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Globe2,
    title: "Multi-Environment Adaptation",
    description:
      "Robust performance across strong sunlight, dim lighting, decorative entrance lights, and challenging occlusion scenarios in any indoor or outdoor environment.",
    color: "from-rose-500 to-pink-500",
  },
];

const useCases = [
  {
    icon: ShoppingBag,
    title: "Retail Stores",
    description:
      "Customer flow analysis and queue management. Measure peak hours, optimize staff deployment, and boost conversion rates with real visitor data.",
  },
  {
    icon: Building2,
    title: "Office Buildings",
    description:
      "Occupancy monitoring and space optimization. Track space utilization, optimize meeting room availability, and plan expansions with confidence.",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description:
      "Classroom attendance and facility usage tracking. Gain accurate occupancy data for resource planning and campus safety.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Facilities",
    description:
      "Patient flow and waiting area management. Reduce congestion, improve patient experience, and manage capacity in real-time.",
  },
  {
    icon: Train,
    title: "Transportation Hubs",
    description:
      "Passenger flow and crowd control for high-speed railways, buses, and subways — regardless of crowding or lighting conditions.",
  },
  {
    icon: Calendar,
    title: "Event Venues",
    description:
      "Attendance tracking and safety management. Enforce capacity limits and generate post-event crowd reports in real-time.",
  },
];

const steps = [
  { step: "01", title: "Site Survey", description: "Our engineers visit your location to assess entry points, lighting, and optimal 3D sensor placement." },
  { step: "02", title: "Sensor Install", description: "3D binocular AI sensors are mounted at entry and counting zones — powered via POE or DC9‑36V supply." },
  { step: "03", title: "Dashboard Setup", description: "Real-time analytics dashboard goes live with custom detection zones, gender/age filters, and KPIs." },
  { step: "04", title: "Insights Delivered", description: "Receive automated daily/weekly/monthly reports, ReID-deduplicated counts, and 90-day local data history." },
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

              <ServiceHeroDesc>
                CrowdSense — our 3D AI-powered people counting system — delivers
                99%+ accuracy using binocular stereo vision and edge computing.
                Real-time crowd analytics with full privacy compliance across
                retail, offices, transit, healthcare, and event venues.
              </ServiceHeroDesc>

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
            <ServiceIconGrid items={[
                { icon: Brain, label: "3D AI Sensing", color: "from-emerald-500 to-teal-500" },
                { icon: Shield, label: "Privacy-First", color: "from-blue-500 to-cyan-500" },
                { icon: LineChart, label: "Analytics", color: "from-violet-500 to-purple-500" },
                { icon: Cpu, label: "Edge AI", color: "from-amber-500 to-orange-500" },
              ]} />
          </div>


        </Container>
      </section>

      {/* Stats Strip */}
      <section className="dark:bg-[#050d1f] bg-slate-900 border-y dark:border-white/8 border-slate-700">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 dark:divide-white/8 divide-slate-700">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center py-8 px-4 text-center">
                <span className="text-3xl md:text-4xl font-bold bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  {s.value}
                </span>
                <span className="text-slate-400 text-xs mt-1 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Technology */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Core Technology"
            title="Built on Advanced"
            titleHighlight="AI & 3D Sensing"
            description="Our proprietary technology stack combines 3D depth sensing, on-device AI, and edge computing to deliver industry-leading accuracy with complete privacy compliance."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTech.map((tech) => (
              <div
                key={tech.title}
                className="group relative p-6 rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-700/40 transition-all duration-300 ease-in-out will-change-transform overflow-hidden"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tech.icon size={20} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{tech.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{tech.description}</p>
              </div>
            ))}
            {/* Key advantage card spanning full width on small, 1 col on lg */}
            <div className="sm:col-span-2 lg:col-span-3 p-6 rounded-2xl border border-emerald-500/30 bg-linear-to-r from-emerald-500/10 to-teal-500/10 dark:bg-[rgba(15,31,61,0.7)] flex flex-col md:flex-row items-start md:items-center gap-4">
              <Zap size={28} className="text-emerald-400 shrink-0" />
              <div>
                <p className="text-emerald-400 font-semibold text-sm mb-1">Key Advantage</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Our proprietary algorithms achieve <span className="text-white font-semibold">99%+ accuracy rates</span> while maintaining complete privacy compliance and operating in challenging environmental conditions — including strong sunlight, dim light, and high-density crowded scenes.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Slider */}
      <Section className="dark:bg-[#0a1628] bg-slate-50">
        <Container>
          <SectionHeader
            eyebrow="Features"
            title="Smarter Visitor"
            titleHighlight="Intelligence"
            description="Advanced AI counting with the analytics tools to turn data into decisions."
          />
          <FeaturesSlider />
        </Container>
      </Section>

      {/* How it works */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="How It Works"
            title="3D Depth Sensing to"
            titleHighlight="Live Dashboard"
            description="Binocular stereo vision sensors feed real-time 3D depth data into our AI pipeline — from install to actionable insights in days."
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
            eyebrow="Applications"
            title="Built for Every"
            titleHighlight="Environment"
            description="CrowdSense adapts to any indoor or outdoor scene — from busy shopping malls to transit hubs."
          />
          {/* Applications isometric map */}
          <div className="relative w-full rounded-2xl overflow-hidden border dark:border-emerald-500/15 border-slate-200 mb-10 bg-slate-900">
            <Image
              src="/people-counting/applications-map.jpeg"
              alt="CrowdSense Applications Map"
              width={1400}
              height={700}
              className="w-full object-contain"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
