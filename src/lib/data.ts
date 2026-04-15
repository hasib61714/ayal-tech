import { MessageSquare, Radio, Users, Code2 } from "lucide-react";
import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "bulk-sms",
    title: "Bulk SMS Service",
    category: "Communication",
    accentColor: "border-t-blue-500",
    description:
      "Reach thousands of customers instantly with our high-performance Bulk SMS platform for promotional, transactional, and OTP messages.",
    icon: MessageSquare,
    gradient: "bg-linear-to-br from-blue-500 to-cyan-600",
    features: [
      "High delivery rate guaranteed",
      "Instant message broadcasting",
      "API integration for apps",
      "OTP & verification SMS",
      "Real-time delivery reports",
      "Promotional campaigns",
    ],
    useCases: [
      "Retail promotions",
      "Banking notifications",
      "OTP verification",
      "Marketing campaigns",
    ],
  },
  {
    id: "voice-blast",
    title: "Voice Blast",
    category: "Communication",
    accentColor: "border-t-violet-500",
    description:
      "Send pre-recorded voice messages to thousands of phone numbers automatically. Perfect for announcements, promotions, and reminders.",
    icon: Radio,
    gradient: "bg-linear-to-br from-violet-500 to-purple-600",
    features: [
      "Automated outbound calls",
      "Campaign management dashboard",
      "Real-time call reports",
      "Supports large-scale campaigns",
      "Custom voice message uploads",
    ],
    useCases: [
      "Political campaigns",
      "Payment reminders",
      "Emergency alerts",
      "Customer notifications",
    ],
  },
  {
    id: "people-counting",
    title: "People Counting System",
    category: "Analytics",
    accentColor: "border-t-emerald-500",
    description:
      "CrowdSense — 3D AI-powered people counting with 99%+ accuracy using binocular stereo vision. Real-time crowd analytics with full privacy compliance for retail, offices, transit, and event venues.",
    icon: Users,
    gradient: "bg-linear-to-br from-emerald-500 to-teal-600",
    features: [
      "99%+ accuracy with 3D binocular AI sensing",
      "Two-way counting: entry, exit, pass, dwell",
      "Gender, age & ReID analytics",
      "ReID deduplication — no double counts",
      "90-day offline local storage",
      "Privacy-first anonymous statistics mode",
    ],
    useCases: [
      "Retail stores & shopping malls",
      "Office buildings & co-working spaces",
      "Educational institutions",
      "Healthcare facilities",
      "Transportation hubs",
      "Event venues",
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software Solutions",
    category: "Software",
    accentColor: "border-t-amber-500",
    description:
      "Every business has unique needs. We develop custom software — from CRM/ERP to POS systems and web applications tailored to your requirements.",
    icon: Code2,
    gradient: "bg-linear-to-br from-amber-500 to-orange-600",
    features: [
      "Business management systems",
      "CRM & ERP software",
      "Inventory management",
      "POS systems",
      "Automation platforms",
      "Web applications",
    ],
    useCases: [
      "Enterprise automation",
      "Retail POS",
      "Inventory tracking",
      "Custom workflows",
    ],
  },
];
