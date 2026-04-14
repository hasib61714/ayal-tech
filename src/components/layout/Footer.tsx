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
              {[
                { label: "Facebook", href: "#", text: "FB" },
                { label: "LinkedIn", href: "#", text: "LI" },
                { label: "Twitter",  href: "#", text: "TW" },
              ].map(({ label, href, text }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-500/20 hover:border-emerald-700/30 transition-all text-xs font-bold"
                >
                  {text}
                </Link>
              ))}
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
