import type { Metadata } from "next";
import { HeroBg } from "@/components/common/HeroBg";
import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { CTA } from "@/components/sections/CTA";
import { ServicesPageContent } from "@/components/sections/ServicesPageContent";
import { MessageSquare, Radio, Users, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore AYAL TECH services: Bulk SMS, Voice Blast, People Counting System, and Custom Software Solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-12 lg:pt-12 pb-16 lg:pb-16 relative overflow-hidden">
        <HeroBg />
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Smart Technology{" "}
                <span className="gradient-text">Solutions</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Comprehensive communication and software platforms designed to scale
                with your organization growth.
              </p>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: MessageSquare, label: "Bulk SMS", color: "from-blue-500 to-cyan-500" },
                { icon: Radio, label: "Voice Blast", color: "from-violet-500 to-purple-500" },
                { icon: Users, label: "People Counting", color: "from-emerald-500 to-teal-500" },
                { icon: Code2, label: "Custom Software", color: "from-amber-500 to-orange-500" },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
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

      <Section className="pt-0 pb-20 bg-white dark:bg-[#0a1628]">
        <Container>
          <ServicesPageContent />
        </Container>
      </Section>

      <CTA />
    </>
  );
}