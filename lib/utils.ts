import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function getWhatsAppLink(phone: string, message?: string): string {
  const cleaned = formatPhoneNumber(phone);
  const encoded = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${cleaned}${encoded}`;
}
