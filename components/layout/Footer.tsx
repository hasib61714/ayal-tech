import Link from "next/link";
import { Zap, Mail, MapPin, MessageSquare, ExternalLink } from "lucide-react";
import { Container } from "@/components/common/Container";

// ──────────────────────────────────────────────────────────────────────
// ICON RATIONALE:
//  Mail    → email contact
//  Phone   → phone / whatsapp
//  MapPin  → physical office location
//  MessageSquare → WhatsApp messaging
//  Facebook/Linkedin/Twitter → social platforms
// ──────────────────────────────────────────────────────────────────────

const services = [
  { label: "Bulk SMS Service", href: "/services/bulk-sms" },
  { label: "Voice Blast", href: "/services/voice-blast" },
  { label: "People Counting", href: "/services/people-counting" },
  { label: "Custom Software", href: "/services/custom-software" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="dark:bg-slate-950 bg-slate-50 border-t dark:border-white/8 border-slate-200">
      {/* Main footer content */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Zap size={18} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold dark:text-white text-slate-900">
                AYAL <span className="gradient-text">TECH</span>
              </span>
            </Link>
            <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-6">
              Smart Communication & Software Solutions empowering businesses to operate intelligently.
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: "Facebook", href: "#", text: "FB" },
                { label: "LinkedIn", href: "#", text: "LI" },
                { label: "Twitter", href: "#", text: "TW" },
              ].map(({ label, href, text }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg dark:bg-white/5 bg-white dark:border-white/10 border-slate-200 flex items-center justify-center dark:text-slate-400 text-slate-600 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all text-xs font-bold"
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="dark:text-white text-slate-900 font-semibold mb-5 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="dark:text-slate-400 text-slate-600 text-sm hover:text-blue-500 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="dark:text-white text-slate-900 font-semibold mb-5 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="dark:text-slate-400 text-slate-600 text-sm hover:text-blue-500 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="dark:text-white text-slate-900 font-semibold mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@ayaltech.com.bd"
                  className="flex items-start gap-3 dark:text-slate-400 text-slate-600 text-sm hover:text-blue-500 transition-colors group"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 group-hover:text-blue-500" />
                  info@ayaltech.com.bd
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801971521964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 dark:text-slate-400 text-slate-600 text-sm hover:text-blue-500 transition-colors group"
                >
                  <MessageSquare size={15} className="mt-0.5 shrink-0 group-hover:text-blue-500" />
                  +880 1971 521964
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 dark:text-slate-400 text-slate-600 text-sm">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>
                    Level 19, SimpleTree Attalika<br />
                    134 Gulshan Ave, Dhaka-1212
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t dark:border-white/8 border-slate-200">
        <Container className="py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="dark:text-slate-500 text-slate-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} AYAL TECH. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="dark:text-slate-500 text-slate-500 text-xs hover:text-blue-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="dark:text-slate-500 text-slate-500 text-xs hover:text-blue-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
