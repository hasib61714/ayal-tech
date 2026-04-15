import type { Metadata } from "next";
import Link from "next/link";
import { HeroBg } from "@/components/common/HeroBg";
import { Section, SectionHeader } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { CTA } from "@/components/sections/CTA";
import { ServiceIconGrid, ServiceStatStrip } from "@/components/sections/ServiceHeroWidgets";
import { ServiceHeroDesc } from "@/components/sections/ServiceHeroDesc";
import {
  Radio,
  CheckCircle2,
  BarChart2,
  Upload,
  CalendarClock,
  PhoneCall,
  ArrowRight,
  Megaphone,
  AlertTriangle,
  CreditCard,
  Users2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Blast Service | AYAL TECH",
  description:
    "Send pre-recorded voice messages to thousands of contacts automatically. Political campaigns, payment reminders, emergency alerts — AYAL TECH Voice Blast.",
};

const features = [
  {
    icon: PhoneCall,
    title: "Automated Outbound Calls",
    description:
      "Dial thousands of contacts simultaneously without any manual intervention. Our dialer handles all call attempts automatically.",
  },
  {
    icon: Upload,
    title: "Custom Audio Upload",
    description:
      "Upload your pre-recorded MP3 or WAV message or use our text-to-speech engine to generate professional voice content.",
  },
  {
    icon: BarChart2,
    title: "Real-time Call Reports",
    description:
      "Live dashboards show answered, missed, and failed calls. Filter by campaign, date range, or contact segment.",
  },
  {
    icon: CalendarClock,
    title: "Campaign Scheduling",
    description:
      "Schedule campaigns for the optimal time — early morning reminders, evening promotions, or event-day announcements.",
  },
  {
    icon: Users2,
    title: "Large-scale Campaigns",
    description:
      "Our infrastructure handles millions of concurrent calls. No cap on audience size — ideal for political and mass marketing campaigns.",
  },
  {
    icon: CheckCircle2,
    title: "Multi-network Coverage",
    description:
      "Reach contacts on all Bangladeshi networks: Grameenphone, Banglalink, Robi, Airtel, and Teletalk.",
  },
];

const useCases = [
  {
    icon: Megaphone,
    title: "Political Campaigns",
    description:
      "Deliver candidate messages to millions of voters across constituencies. Personal, impactful, and cost-effective outreach.",
  },
  {
    icon: CreditCard,
    title: "Payment Reminders",
    description:
      "Reduce default rates with proactive voice reminders for loan EMIs, utility bills, and subscription renewals.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Alerts",
    description:
      "Critical safety announcements, evacuation notices, and service outage alerts delivered instantly at scale.",
  },
  {
    icon: Users2,
    title: "Customer Notifications",
    description:
      "Appointment reminders, order delivery updates, event invitations, and service launch announcements.",
  },
];

const steps = [
  { step: "01", title: "Upload Audio", description: "Record or upload your voice message file (MP3/WAV)." },
  { step: "02", title: "Add Contacts", description: "Upload your target contact list or select existing groups." },
  { step: "03", title: "Schedule", description: "Set the launch time or start immediately." },
  { step: "04", title: "Monitor Live", description: "Watch call progress in real-time and download reports." },
];

export default function VoiceBlastPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <HeroBg />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Your Voice to{" "}
                <span className="bg-linear-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Millions
                </span>
              </h1>

              <ServiceHeroDesc>
                Automated voice broadcasting platform for Bangladesh. Send pre-recorded
                messages to thousands of contacts with a single click — campaigns launch
                in minutes.
              </ServiceHeroDesc>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-linear-to-r from-violet-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Launch a Campaign <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border dark:border-white/10 border-blue-300 dark:bg-white/5 bg-white dark:text-white text-blue-700 font-semibold dark:hover:bg-white/10 hover:bg-blue-50 hover:border-blue-400 transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>
            <ServiceIconGrid items={[
                { icon: Radio, label: "Broadcasting", color: "from-violet-500 to-purple-500" },
                { icon: PhoneCall, label: "Auto Calls", color: "from-blue-500 to-violet-500" },
                { icon: Upload, label: "Custom Audio", color: "from-emerald-500 to-teal-500" },
                { icon: CalendarClock, label: "Scheduling", color: "from-amber-500 to-orange-500" },
              ]} />
          </div>

          {/* Stats strip */}
          <ServiceStatStrip
            stats={[
              { value: "500K+", label: "Calls Completed" },
              { value: "95%+", label: "Connect Rate" },
              { value: "All", label: "BD Networks" },
            ]}
            gradientColor="from-violet-400 to-purple-400"
          />
        </Container>
      </section>

      {/* Features */}
      <Section className="dark:bg-[#0a1628] bg-slate-50">
        <Container>
          <SectionHeader
            eyebrow="Features"
            title="Built for High-volume"
            titleHighlight="Voice Campaigns"
            description="Everything you need to run effective voice blast campaigns at any scale."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="group p-6 rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/15 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300 ease-in-out will-change-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
            title="Your Campaign Live in"
            titleHighlight="4 Steps"
            description="Simple, fast, and powerful — voice campaigns launch in minutes."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="text-center p-6 rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/15 hover:border-violet-500/25 transition-all duration-300 ease-in-out will-change-transform">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
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
            title="Who Uses"
            titleHighlight="Voice Blast?"
            description="Voice campaigns bridge the literacy gap and build genuine human connection at scale."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="flex gap-4 p-6 rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/15 hover:border-violet-500/30 transition-all duration-300 ease-in-out will-change-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <uc.icon size={18} className="text-violet-400" strokeWidth={1.5} />
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
