import { MessageSquare, Radio, Users, Code2 } from "lucide-react";
import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "bulk-sms",
    title: "Bulk SMS Service",
    description:
      "Reach thousands of customers instantly with our high-performance Bulk SMS platform for promotional, transactional, and OTP messages.",
    icon: MessageSquare,
    gradient: "bg-linear-to-br from-blue-500/20 to-cyan-500/20",
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
    description:
      "Send pre-recorded voice messages to thousands of phone numbers automatically. Perfect for announcements, promotions, and reminders.",
    icon: Radio,
    gradient: "bg-linear-to-br from-violet-500/20 to-purple-500/20",
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
    description:
      "Track people entering and leaving locations in real-time with AI-based detection. Perfect for retail, malls, offices, and events.",
    icon: Users,
    gradient: "bg-linear-to-br from-emerald-500/20 to-teal-500/20",
    features: [
      "Real-time visitor counting",
      "Accurate AI-based detection",
      "Dashboard analytics",
      "Daily/Weekly/Monthly reports",
      "Business analytics integration",
    ],
    useCases: [
      "Retail traffic analysis",
      "Mall management",
      "Office occupancy",
      "Event analytics",
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software Solutions",
    description:
      "Every business has unique needs. We develop custom software — from CRM/ERP to POS systems and web applications tailored to your requirements.",
    icon: Code2,
    gradient: "bg-linear-to-br from-amber-500/20 to-orange-500/20",
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
