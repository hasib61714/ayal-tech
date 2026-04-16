"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";

// Always colored — emerald gradient
export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#022c22] dark:bg-[#020d0a]">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-900/60 via-[#022c22] to-teal-900/60 dark:from-emerald-900/50 dark:via-[#050d1f] dark:to-teal-900/50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Great Together</span>
          </h2>

          <p className="text-base md:text-lg text-emerald-100/80 mb-10 leading-relaxed">
            Contact AYAL TECH today and discover how our technology solutions can
            help your business grow faster and operate smarter.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" icon={ArrowRight}>
              Get in Touch Now
            </Button>
            <a
              href="https://wa.me/8801971521964"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-white/20 text-white font-semibold text-base hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300"
            >
              <MessageSquare size={18} />
              WhatsApp Us
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-12 flex flex-nowrap items-center justify-center gap-8 text-emerald-200/60 text-sm overflow-x-auto">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Phone size={14} />
              <span>+880 1971 521964</span>
            </div>
            <div className="w-px h-4 bg-teal-500/30 shrink-0" />
            <div className="flex items-center gap-2 whitespace-nowrap">
              <MessageSquare size={14} />
              <span>info@ayaltech.com.bd</span>
            </div>
            <div className="w-px h-4 bg-teal-500/30 shrink-0" />
            <div className="flex items-center gap-2 whitespace-nowrap">
              <MapPin size={14} />
              <span>134 Gulshan Ave, Dhaka-1212</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
