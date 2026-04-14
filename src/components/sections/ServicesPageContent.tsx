"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionHeader } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { services } from "@/lib/data";

export function ServicesPageContent() {
  return (
    <>
      {/* Expanded service detail cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="rounded-2xl border dark:border-emerald-500/15 border-slate-200 dark:bg-[rgba(15,31,61,0.7)] bg-white backdrop-blur-sm p-8 h-full group shadow-sm dark:shadow-none hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/15 hover:border-emerald-400/60 dark:hover:border-emerald-600/40 transition-all duration-300 ease-in-out will-change-transform"
          >
            <div className={`inline-flex p-3.5 rounded-xl ${service.gradient} mb-6`}>
              <service.icon size={28} className="text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-3">{service.title}</h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6">{service.description}</p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="dark:text-white text-slate-900 font-semibold text-sm mb-3 uppercase tracking-wide">
                  Features
                </h4>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm dark:text-slate-300 text-slate-800">
                      <CheckCircle2
                        size={14}
                        className="text-emerald-400 mt-0.5 shrink-0"
                        strokeWidth={2}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="dark:text-white text-slate-900 font-semibold text-sm mb-3 uppercase tracking-wide">
                  Use Cases
                </h4>
                <ul className="space-y-2">
                  {service.useCases.map((u) => (
                    <li key={u} className="flex items-start gap-2 text-sm dark:text-slate-300 text-slate-800">
                      <CheckCircle2
                        size={14}
                        className="text-emerald-400 mt-0.5 shrink-0"
                        strokeWidth={2}
                      />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t dark:border-white/10 border-slate-200">
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group/link"
              >
                Learn More
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Quick overview cards */}
      <div className="mt-24">
        <SectionHeader
          eyebrow="Quick Overview"
          title="All Services at a"
          titleHighlight="Glance"
        />
        <Container className="px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                gradient={service.gradient}
                index={i}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
