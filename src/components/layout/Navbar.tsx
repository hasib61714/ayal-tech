"use client";

import { useState, useEffect, useRef, startTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { services } from "@/lib/data";

const mainNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

const serviceGradients: Record<string, string> = {
  "bulk-sms": "from-blue-500 to-cyan-500",
  "voice-blast": "from-violet-500 to-purple-500",
  "people-counting": "from-emerald-500 to-teal-500",
  "custom-software": "from-amber-500 to-orange-500",
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setIsOpen(false);
      setServicesOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-white dark:bg-[rgba(5,13,31,0.97)] backdrop-blur-xl border-b border-slate-200 dark:border-white/8",
        scrolled ? "shadow-md dark:shadow-black/40" : "shadow-none"
      )}
    >
      {/* Top info bar — hides on scroll */}
      <div className={cn(
        "hidden lg:block bg-slate-900 dark:bg-[#020d0a] border-b border-white/8 overflow-hidden transition-all duration-300",
        scrolled ? "h-0 opacity-0" : "h-9 opacity-100"
      )}>
        <Container>
          <div className="flex items-center justify-between h-9 text-xs text-slate-300 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <MapPin size={12} className="text-emerald-400 shrink-0" />
              <span>Level 19, SimpleTree Attalika, Gulshan Ave, Dhaka</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="mailto:info@ayaltech.com.bd" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail size={12} className="text-emerald-400 shrink-0" />
                info@ayaltech.com.bd
              </a>
              <a href="tel:+8801971521964" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone size={12} className="text-emerald-400 shrink-0" />
                +880 1971521964
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/ayal tech logo.png"
              alt="AYAL TECH"
              width={150}
              height={52}
              className="h-10 w-auto object-contain dark:brightness-200 transition-opacity group-hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <li>
              <Link
                href="/"
                className={cn(
                  "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === "/"
                    ? "text-slate-900 dark:text-white bg-teal-50 dark:bg-white/10 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                )}
              >
                Home
              </Link>
            </li>

            {/* Services mega dropdown */}
            <li
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
                  isServicesActive
                    ? "text-slate-900 dark:text-white bg-teal-50 dark:bg-white/10 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                )}
                onClick={() => setServicesOpen(!servicesOpen)}
                type="button"
              >
                Services
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-200",
                    servicesOpen ? "rotate-180" : ""
                  )}
                />
              </button>

              {/* Mega menu dropdown */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-110 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/8 rounded-2xl shadow-2xl shadow-slate-200/60 dark:shadow-black/60 z-50 overflow-hidden"
                  >
                    {/* Header strip */}
                    <div className="px-5 py-3 bg-slate-50 dark:bg-white/5 border-b border-slate-100 dark:border-white/8">
                      <p className="text-xs font-bold tracking-[0.18em] uppercase text-emerald-700 dark:text-emerald-400">
                        Our Services
                      </p>
                    </div>

                    {/* 2-column service grid */}
                    <div className="grid grid-cols-2 gap-1 p-3">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          className="group flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-150"
                          onClick={() => setServicesOpen(false)}
                        >
                          <div
                            className={cn(
                              "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-linear-to-br",
                              serviceGradients[service.id]
                            )}
                          >
                            <service.icon size={15} className="text-white" strokeWidth={1.8} />
                          </div>
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                            {service.title}
                          </p>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="px-3 pb-3">
                      <Link
                        href="/services"
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-50 dark:bg-white/5 hover:bg-emerald-700/10 text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 border border-slate-200 dark:border-white/8 transition-all duration-200"
                        onClick={() => setServicesOpen(false)}
                      >
                        View All Services <ArrowRight size={13} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* About, Why Us, Contact */}
            {mainNavItems.slice(1).map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-slate-900 dark:text-white bg-teal-50 dark:bg-white/10 font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            <Button href="/contact" variant="primary" size="sm" className="hidden lg:inline-flex">
              Get Started
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
              type="button"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/98 dark:bg-[rgba(5,13,31,0.97)] backdrop-blur-xl border-b border-slate-200 dark:border-white/8"
          >
            <Container className="py-4">
              <ul className="space-y-1">
                {/* Home */}
                <li>
                  <Link
                    href="/"
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                      pathname === "/"
                        ? "text-slate-900 dark:text-white bg-teal-500/10 border border-emerald-700/30"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                    )}
                  >
                    Home
                  </Link>
                </li>

                {/* Services accordion */}
                <li>
                  <button
                    className={cn(
                      "w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                      isServicesActive
                        ? "text-slate-900 dark:text-white bg-teal-500/10 border border-emerald-700/30"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                    )}
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    type="button"
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        mobileServicesOpen ? "rotate-180" : ""
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-1 pl-4 border-l border-slate-200 dark:border-white/10 space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.id}`}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                            >
                              <div
                                className={cn(
                                  "w-6 h-6 rounded-lg flex items-center justify-center shrink-0 bg-linear-to-br",
                                  serviceGradients[service.id]
                                )}
                              >
                                <service.icon size={12} className="text-white" strokeWidth={2} />
                              </div>
                              {service.title}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                          >
                            View All Services <ArrowRight size={12} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* About, Why Us, Contact */}
                {mainNavItems.slice(1).map(({ label, href }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                          isActive
                            ? "text-slate-900 dark:text-white bg-teal-500/10 border border-emerald-700/30"
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                        )}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/8">
                <Button href="/contact" variant="primary" size="md" className="w-full">
                  Get Started
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
