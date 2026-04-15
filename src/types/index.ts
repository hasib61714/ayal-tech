import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  useCases: string[];
  gradient: string;
  accentColor: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  initials: string;
  rating: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning";
  className?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
