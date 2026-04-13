"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Home, Info, Layers, Phone, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Services", href: "/services", icon: Layers },
  { label: "Why Us", href: "/why-us", icon: ShieldCheck },
  { label: "Contact", href: "/contact", icon: Phone },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "dark:bg-slate-950/90 bg-white/90 backdrop-blur-xl dark:border-b dark:border-white/8 border-b border-slate-200/80 shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-blue-500 to-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
              <Zap size={18} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-bold dark:text-white text-slate-900">
              AYAL <span className="gradient-text">TECH</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map(({ label, href, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive
                        ? "dark:text-white text-slate-900 dark:bg-white/10 bg-blue-50 font-semibold"
                        : "dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 dark:hover:bg-white/5 hover:bg-slate-100"
                    )}
                  >
                    {Icon && <Icon size={15} strokeWidth={1.5} />}
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + Theme Toggle + Mobile menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button href="/contact" variant="primary" size="sm" className="hidden lg:inline-flex">
              Get Started
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 dark:hover:bg-white/10 hover:bg-slate-100 transition-all"
              aria-label="Toggle menu"
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
            className="lg:hidden dark:bg-slate-950/95 bg-white/95 backdrop-blur-xl dark:border-b dark:border-white/8 border-b border-slate-200"
          >
            <Container className="py-4">
              <ul className="space-y-1">
                {navItems.map(({ label, href, icon: Icon }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                          isActive
                            ? "dark:text-white text-slate-900 bg-blue-500/20 border border-blue-500/30"
                            : "dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 dark:hover:bg-white/5 hover:bg-slate-100"
                        )}
                      >
                        {Icon && <Icon size={18} strokeWidth={1.5} />}
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4 pt-4 dark:border-t dark:border-white/8 border-t border-slate-200">
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
