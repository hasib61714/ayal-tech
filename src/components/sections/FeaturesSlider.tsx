"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Users, ScanLine, UserCheck, Brain, Cpu, HardDrive, Sun, Camera } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Two-Way People Counting",
    image: "/people-counting/feature-two-way.jpeg",
    description:
      "Detects entry, exit, pass, dwell, and return traffic by drawing custom detection frames. Supports regional counting with configurable zones and dwell-time tracking.",
  },
  {
    icon: ScanLine,
    title: "Regional People Counting",
    image: "/people-counting/feature-regional.jpeg",
    description:
      "Custom-draw detection areas to count exactly how many people are in a specific zone at any time, plus how long they stay — ideal for queue and capacity management.",
  },
  {
    icon: UserCheck,
    title: "Adults & Children Detection",
    image: "/people-counting/feature-age.jpeg",
    description:
      "Custom elevation cutoff points distinguish between adults and children, counting both demographics separately for accurate audience segmentation.",
  },
  {
    icon: Brain,
    title: "Gender Identification",
    image: "/people-counting/feature-gender.jpeg",
    description:
      "Built-in AI realizes gender recognition and generates rich crowd portraits — enabling in-depth demographic data analysis for retail and marketing insights.",
  },
  {
    icon: Cpu,
    title: "Built-in AI Algorithm",
    image: "/people-counting/feature-ai.jpeg",
    description:
      "Age, gender, and ReID data collection in one device. Employee badge identification accurately filters staff from visitor counts for clean analytics.",
  },
  {
    icon: HardDrive,
    title: "90-Day Offline Storage",
    image: "/people-counting/feature-storage.jpeg",
    description:
      "Large local storage holds up to 90 days of data with 99%+ accuracy. Query and export records directly on-device — no cloud dependency required.",
  },
  {
    icon: Sun,
    title: "Strong Environmental Adaptability",
    image: "/people-counting/feature-environment.jpeg",
    description:
      "Adapts to strong sunlight, decorative entrance lighting, and dim or dark environments — robust performance where 2D systems fail.",
  },
  {
    icon: Camera,
    title: "HD Image & Video Acquisition",
    image: "/people-counting/feature-storage.jpeg",
    description:
      "2-megapixel imaging system acquires high-definition, full-color images and video data — combining visual evidence with analytics in a single device.",
  },
];

export function FeaturesSlider() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + features.length) % features.length);
  const next = () => setActive((i) => (i + 1) % features.length);

  const feat = features[active];

  return (
    <div className="space-y-4">
      {/* Main card */}
      <div className="relative rounded-3xl overflow-hidden border dark:border-emerald-500/15 border-slate-200 shadow-2xl dark:shadow-emerald-900/20">
        <div className="grid lg:grid-cols-[55%_45%]">

          {/* Image side */}
          <div className="relative bg-slate-950 flex items-center justify-center min-h-[280px] lg:min-h-[460px] overflow-hidden">
            {/* Subtle dot bg */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#10b981_1px,transparent_1px)] bg-[size:24px_24px]" />
            <Image
              key={feat.image + active}
              src={feat.image}
              alt={feat.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-6 transition-opacity duration-500"
              priority
            />
            {/* Slide counter */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white text-xs font-mono tracking-widest">
              {String(active + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
            </div>
            {/* Left/Right arrows on image */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-emerald-500/80 hover:border-emerald-400 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-emerald-500/80 hover:border-emerald-400 transition-all"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Content side */}
          <div className="flex flex-col justify-between dark:bg-[#0b1e3d] bg-slate-50 p-8 lg:p-10">
            <div>
              {/* Step label */}
              <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-5">
                Feature {String(active + 1).padStart(2, "0")}
              </p>
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25">
                <feat.icon size={26} className="text-white" strokeWidth={1.5} />
              </div>
              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                {feat.title}
              </h3>
              {/* Divider */}
              <div className="w-10 h-0.5 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full mb-5" />
              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>

            {/* Dot navigation */}
            <div className="flex items-center gap-2 mt-10 flex-wrap">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-7 h-2.5 bg-emerald-400"
                      : "w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
        {features.map((f, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all duration-200 ${
              i === active
                ? "border-emerald-500 scale-105 shadow-lg shadow-emerald-500/20"
                : "border-transparent opacity-50 hover:opacity-80"
            }`}
            aria-label={f.title}
          >
            <Image src={f.image} alt={f.title} fill sizes="(max-width: 768px) 100vw, 10vw" className="object-contain bg-slate-950 p-1" />
          </button>
        ))}
      </div>
    </div>
  );
}
