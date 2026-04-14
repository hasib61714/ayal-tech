import type { Metadata } from "next";
import { HeroBg } from "@/components/common/HeroBg";
import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <Section className="pt-12 relative overflow-hidden">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>
        <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
          <p>Last updated: April 2026</p>
          <p>
            By accessing or using AYAL TECH services, you agree to be bound by these Terms of Service.
            Please read them carefully before using our platform.
          </p>
          <h2 className="text-white text-xl font-semibold mt-8">Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance with applicable
            Bangladesh telecommunications regulations.
          </p>
          <h2 className="text-white text-xl font-semibold mt-8">Intellectual Property</h2>
          <p>
            All content, software, and technology on this site is the property of AYAL TECH and
            protected by applicable intellectual property laws.
          </p>
          <h2 className="text-white text-xl font-semibold mt-8">Contact</h2>
          <p>
            For questions about these terms, contact{" "}
            <a href="mailto:info@ayaltech.com.bd" className="text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
              info@ayaltech.com.bd
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
