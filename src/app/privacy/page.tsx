import type { Metadata } from "next";
import { HeroBg } from "@/components/common/HeroBg";
import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AYAL TECH Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <Section className="pt-12 relative overflow-hidden">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <div className="prose prose-invert space-y-4 text-slate-400 text-sm leading-relaxed">
          <p>Last updated: April 2026</p>
          <p>
            AYAL TECH (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal
            information and your right to privacy. This policy describes how we collect, use, and
            safeguard data when you use our website and services.
          </p>
          <h2 className="text-white text-xl font-semibold mt-8">Information We Collect</h2>
          <p>
            We collect information you provide directly, such as your name, email, and message
            when you submit our contact form. We do not sell or share personal data with third parties.
          </p>
          <h2 className="text-white text-xl font-semibold mt-8">How We Use Your Information</h2>
          <p>
            Your information is used solely to respond to your inquiries and provide requested services.
          </p>
          <h2 className="text-white text-xl font-semibold mt-8">Contact</h2>
          <p>
            For privacy-related questions, contact us at{" "}
            <a href="mailto:info@ayaltech.com.bd" className="text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
              info@ayaltech.com.bd
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
