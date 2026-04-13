import type { Metadata } from "next";
import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { CTA } from "@/components/sections/CTA";
import { ServicesPageContent } from "@/components/sections/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore AYAL TECH services: Bulk SMS, Voice Blast, People Counting System, and Custom Software Solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-6 text-xs font-bold tracking-[0.2em] uppercase text-blue-400 border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 rounded-full">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Smart Technology{" "}
              <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Comprehensive communication and software platforms designed to scale
              with your organization growth.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0 pb-20 bg-slate-900/30">
        <Container>
          <ServicesPageContent />
        </Container>
      </Section>

      <CTA />
    </>
  );
}