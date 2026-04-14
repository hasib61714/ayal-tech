import type { Metadata } from "next";
import { HeroBg } from "@/components/common/HeroBg";
import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { CTA } from "@/components/sections/CTA";
import { Project } from "@/types";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore AYAL TECH's portfolio of Bulk SMS, Voice Blast, People Counting, and Custom Software projects.",
};

const projects: Project[] = [
  {
    id: "1",
    title: "Retail Chain SMS Campaign Platform",
    description:
      "Built a high-volume SMS campaign platform for a nationwide retail chain, enabling 500K messages per day with real-time delivery analytics.",
    category: "Bulk SMS",
    tags: ["SMS API", "Campaign Management", "Analytics Dashboard", "Retail"],
  },
  {
    id: "2",
    title: "Political Campaign Voice Broadcasting",
    description:
      "Delivered automated voice blast system reaching 2M+ voters across 8 districts with pre-recorded candidate messages and real-time call tracking.",
    category: "Voice Blast",
    tags: ["Voice Broadcasting", "Campaign", "Real-time Reports", "Scale"],
  },
  {
    id: "3",
    title: "Dhaka Shopping Mall People Counter",
    description:
      "Deployed AI-based people counting system across a 5-level shopping mall with 12 entry points, providing hourly and daily traffic analytics.",
    category: "People Counting",
    tags: ["AI Detection", "IoT", "Dashboard", "Real-time Analytics"],
  },
  {
    id: "4",
    title: "Banking OTP SMS Gateway",
    description:
      "Engineered a high-availability OTP delivery system for a leading bank, achieving 99.9% uptime and sub-3-second delivery for security codes.",
    category: "Bulk SMS",
    tags: ["OTP", "Banking", "High Availability", "Security"],
  },
  {
    id: "5",
    title: "Inventory Management System",
    description:
      "Custom ERP solution for a mid-size manufacturer with real-time inventory tracking, purchase order management, and financial reporting.",
    category: "Custom Software",
    tags: ["ERP", "Inventory", "Manufacturing", "Web App"],
  },
  {
    id: "6",
    title: "E-commerce POS & Analytics",
    description:
      "Integrated point-of-sale system with e-commerce backend for omnichannel retail, including footfall correlation with conversion analytics.",
    category: "Custom Software",
    tags: ["POS", "E-commerce", "Analytics", "Custom Dev"],
  },
];

const categories = ["All", "Bulk SMS", "Voice Blast", "People Counting", "Custom Software"];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 pb-16 relative overflow-hidden">
        <HeroBg />
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Real projects delivered for real businesses. Explore how AYAL TECH
              has transformed operations for companies across Bangladesh.
            </p>
          </div>
        </Container>
      </Section>

      {/* Category badges */}
      <div className="pb-12">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all cursor-pointer ${
                  cat === "All"
                    ? "bg-teal-500/20 border-emerald-500/40 text-emerald-300"
                    : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </Container>
      </div>

      {/* Projects Grid */}
      <Section className="pt-0 pb-20 bg-slate-900/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                category={project.category}
                tags={project.tags}
                index={i}
              />
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
