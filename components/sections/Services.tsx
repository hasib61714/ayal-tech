"use client";

import Link from "next/link";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/lib/data";

// ──────────────────────────────────────────────────────────────────────
// ICON RATIONALE:
//  MessageSquare → Bulk SMS — text messaging / conversations
//  Radio         → Voice Blast — broadcasting / transmission
//  Users         → People Counting — tracking individuals
//  Code2         → Custom Software — development / coding
// ──────────────────────────────────────────────────────────────────────

export function Services() {
  return (
    <Section id="services" className="dark:bg-slate-900/30 bg-slate-50">
      <Container>
        <SectionHeader
          eyebrow="Our Services"
          title="Smart Technology"
          titleHighlight="Solutions"
          description="Comprehensive communication and software platforms designed to scale with your organization's growth."
        />

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, i) => (
            <Link key={service.id} href={`/services/${service.id}`} className="block h-full">
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                gradient={service.gradient}
                index={i}
              />
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
