import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";

const serviceLinks = [
  { label: "Bulk SMS Service",          href: "/services/bulk-sms"         },
  { label: "Voice Blast",               href: "/services/voice-blast"       },
  { label: "People Counting System",    href: "/services/people-counting"   },
  { label: "Custom Software Solutions", href: "/services/custom-software"   },
];

const companyLinks = [
  { label: "About Us",  href: "/about"     },
  { label: "Why Us",    href: "/why-us"    },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact",   href: "/contact"   },
];

// Footer is always dark regardless of theme
export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/8">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5 group">
              <Image
                src="/ayal tech logo.png"
                alt="AYAL TECH"
                width={140}
                height={48}
                className="h-9 w-auto object-contain brightness-200 transition-opacity group-hover:opacity-80"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Smart Communication &amp; Software Solutions empowering businesses
              to operate intelligently across Bangladesh.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-500/20 hover:border-emerald-700/30 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-500/20 hover:border-emerald-700/30 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-500/20 hover:border-emerald-700/30 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-400 text-sm hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-400" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-400 text-sm hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-400" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@ayaltech.com.bd"
                  className="flex items-start gap-3 text-slate-400 text-sm hover:text-emerald-400 transition-colors group"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 group-hover:text-emerald-400" />
                  info@ayaltech.com.bd
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801971521964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-400 text-sm hover:text-emerald-400 transition-colors group"
                >
                  <MessageSquare size={15} className="mt-0.5 shrink-0 group-hover:text-emerald-400" />
                  +880 1971 521964
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=SimpleTree+Attalika+Gulshan+Dhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-400 text-sm hover:text-emerald-400 transition-colors group"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0 group-hover:text-emerald-400" />
                  <span>
                    Level 19, SimpleTree Attalika<br />
                    134 Gulshan Ave, Dhaka-1212
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <Container className="py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} AYAL TECH Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-slate-500 text-xs hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-500 text-xs hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
