import type { Metadata } from "next";
import Link from "next/link";
import { HeroBg } from "@/components/common/HeroBg";
import { Section, SectionHeader } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { CTA } from "@/components/sections/CTA";
import {
  MessageSquare,
  CheckCircle2,
  Zap,
  BarChart2,
  Code2,
  Lock,
  Users,
  ArrowRight,
  Phone,
  ShoppingBag,
  Building2,
  CreditCard,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bulk SMS Service | AYAL TECH",
  description:
    "Send thousands of SMS instantly with AYAL TECH's high-performance Bulk SMS platform. Promotional, transactional, and OTP messages with real-time delivery reports.",
};

const features = [
  {
    icon: Zap,
    title: "Instant Broadcasting",
    description:
      "Send to millions of numbers in seconds. Our infrastructure handles massive concurrent delivery with sub-3-second average latency.",
  },
  {
    icon: BarChart2,
    title: "Real-time Reports",
    description:
      "Track every message with live delivery receipts, open rates, and campaign dashboards. Know exactly who received your message.",
  },
  {
    icon: Code2,
    title: "Developer API",
    description:
      "RESTful API with SDKs for popular languages. Integrate SMS into your existing app, CRM, or e-commerce platform in minutes.",
  },
  {
    icon: Lock,
    title: "OTP & Verification",
    description:
      "Secure, time-bound one-time passwords for 2FA flows, account verification, and transaction confirmation.",
  },
  {
    icon: Users,
    title: "Contact Management",
    description:
      "Upload and manage contact groups. Schedule campaigns, create segments, and re-use lists across campaigns.",
  },
  {
    icon: CheckCircle2,
    title: "High Delivery Rate",
    description:
      "Multiple operator partnerships ensure the highest possible delivery rates across all Bangladeshi mobile networks.",
  },
];

const useCases = [
  {
    icon: ShoppingBag,
    title: "Retail Promotions",
    description:
      "Drive footfall with exclusive offers, flash sales, and loyalty rewards sent straight to your customers' phones.",
  },
  {
    icon: CreditCard,
    title: "Banking & Finance",
    description:
      "Transaction alerts, low-balance notifications, EMI reminders, and account statements via SMS.",
  },
  {
    icon: Phone,
    title: "OTP Verification",
    description:
      "Secure your users with time-bound one-time passwords for logins, transactions, and sign-ups.",
  },
  {
    icon: Building2,
    title: "Corporate Communications",
    description:
      "HR notifications, meeting reminders, policy announcements, and internal alerts for your entire organization.",
  },
];

const steps = [
  { step: "01", title: "Create Account", description: "Sign up and get instant access to the SMS dashboard." },
  { step: "02", title: "Upload Contacts", description: "Import your contact list via CSV or connect via API." },
  { step: "03", title: "Compose Message", description: "Write your message with dynamic fields and schedule timing." },
  { step: "04", title: "Launch Campaign", description: "Hit send and watch real-time delivery reports populate." },
];

export default function BulkSmsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <HeroBg />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Reach Thousands{" "}
                <span className="gradient-text">Instantly</span>
              </h1>

              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Bangladesh&apos;s most reliable Bulk SMS platform. Promotional campaigns,
                transactional alerts, OTPs — all delivered in under 3 seconds.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Started Free <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border dark:border-white/10 border-blue-300 dark:bg-white/5 bg-white dark:text-white text-blue-700 font-semibold dark:hover:bg-white/10 hover:bg-blue-50 hover:border-blue-400 transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: MessageSquare, label: "Bulk SMS", color: "from-blue-500 to-cyan-500" },
                { icon: Zap, label: "Instant Delivery", color: "from-cyan-500 to-blue-500" },
                { icon: BarChart2, label: "Live Analytics", color: "from-violet-500 to-purple-500" },
                { icon: Lock, label: "OTP Secure", color: "from-emerald-500 to-teal-500" },
              ].map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:-translate-y-2 hover:scale-[1.02] hover:bg-white/10 hover:shadow-xl hover:shadow-emerald-500/15 hover:border-white/20 transition-all duration-300 ease-in-out will-change-transform">
                  <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${color} flex items-center justify-center`}>
                    <Icon size={20} className="text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs font-medium text-slate-300 text-center">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
            {[
              { value: "2.4M+", label: "Messages Delivered" },
              { value: "99.5%", label: "Delivery Rate" },
              { value: "< 3s", label: "Avg. Delivery Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-5 rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm backdrop-blur-sm hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/15 transition-all duration-300 ease-in-out will-change-transform">
                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
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
            title="Everything You Need to"
            titleHighlight="Scale Your Reach"
            description="A complete SMS platform built for Bangladesh's growing businesses."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="group p-6 rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/15 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 ease-in-out will-change-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
            title="Start Sending in"
            titleHighlight="4 Simple Steps"
            description="From sign-up to your first campaign in under 10 minutes."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="relative text-center p-6 rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/15 hover:border-emerald-500/25 transition-all duration-300 ease-in-out will-change-transform">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-cyan-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
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
            titleHighlight="Bulk SMS?"
            description="Trusted by businesses across every industry in Bangladesh."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="flex gap-4 p-6 rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/15 hover:border-blue-500/30 transition-all duration-300 ease-in-out will-change-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <uc.icon size={18} className="text-blue-400" strokeWidth={1.5} />
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
