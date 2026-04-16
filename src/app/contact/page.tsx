"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, MessageSquare, CheckCircle2, Phone } from "lucide-react";
import { HeroBg } from "@/components/common/HeroBg";
import { ReadMoreText } from "@/components/common/ReadMoreText";
import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Label } from "@/components/ui/Label";
import { contactSchema, ContactFormValues } from "@/lib/validations";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@ayaltech.com.bd",
    href: "mailto:info@ayaltech.com.bd",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+880 1971 521964",
    href: "https://wa.me/8801971521964",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "Level 19, SimpleTree Attalika\n134 Gulshan Avenue\nDhaka-1212, Bangladesh",
    href: "https://maps.google.com/?q=134+Gulshan+Avenue+Dhaka",
    color: "from-violet-500 to-purple-500",
  },
];

const serviceOptions = [
  "Bulk SMS Service",
  "Voice Blast",
  "People Counting System",
  "Custom Software Solution",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch {
      // handle error gracefully
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero — colored */}
      <Section className="pt-12 lg:pt-12 pb-16 lg:pb-16 relative overflow-hidden">
        <HeroBg />
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                We&apos;d Love to{" "}
                <span className="gradient-text">Hear From You</span>
              </h1>
              <ReadMoreText className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Looking for reliable communication technology or custom software? Our
                dedicated team is ready to help.
              </ReadMoreText>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: Mail, label: "Email Us", color: "from-blue-500 to-cyan-500" },
                { icon: Phone, label: "Call Us", color: "from-emerald-500 to-teal-500" },
                { icon: MapPin, label: "Visit Us", color: "from-violet-500 to-purple-500" },
                { icon: MessageSquare, label: "WhatsApp", color: "from-amber-500 to-orange-500" },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:-translate-y-2 hover:scale-[1.02] hover:bg-white/10 hover:shadow-xl hover:shadow-emerald-500/15 hover:border-white/20 transition-all duration-300 ease-in-out will-change-transform">
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${color} flex items-center justify-center`}>
                    <Icon size={28} className="text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-medium text-slate-300 text-center">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact section — white */}
      <Section className="pt-0 pb-10 bg-white dark:bg-[#050d1f]">
        <Container>
          <div className="grid lg:grid-cols-5 gap-8 items-stretch">

            {/* Left panel — always dark (intentional design) */}
            <div className="lg:col-span-2 rounded-2xl bg-[#0a1628] p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4">
                  Get in Touch
                </p>
                <h2 className="text-3xl font-bold text-white mb-4 leading-snug">
                  We&apos;d love to hear from you
                </h2>
                <p className="text-slate-400 text-base leading-relaxed mb-10">
                  If you are looking for reliable communication technology or
                  custom software solutions, our dedicated team is ready to help.
                </p>
              </div>

              <div className="space-y-7">
                {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                      <Icon size={20} className="text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">{label}</p>
                      <p className="text-white text-base leading-relaxed whitespace-pre-line">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right panel — form */}
            <div className="lg:col-span-3 flex flex-col">
              <div className="p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm shadow-sm dark:shadow-none flex-1">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send us a message
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-emerald-700/30 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={32} className="text-emerald-700" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                      Thank you for reaching out. Our team will respond within 24 hours.
                    </p>
                    <Button variant="primary" onClick={() => setSubmitted(false)}>
                      Send Another
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" required>Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          error={errors.name?.message}
                          {...register("name")}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" required>Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          error={errors.email?.message}
                          {...register("email")}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service" required>Service Interested In</Label>
                      <select
                        id="service"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition-all text-sm"
                        {...register("service")}
                      >
                        <option value="" className="bg-white dark:bg-slate-900">Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-white dark:bg-slate-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message" required>Your Message</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="How can we help you?"
                        error={errors.message?.message}
                        {...register("message")}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={Send}
                      disabled={loading}
                      className="w-full"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/* Google Map — clickable static */}
      <section className="bg-white dark:bg-[#050d1f] pb-24">
        <Container>
          <a
            href="https://maps.google.com/?q=SimpleTree+Attalika+134+Gulshan+Avenue+Dhaka+1212"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm h-105 cursor-pointer"
          >
            <iframe
              src="https://maps.google.com/maps?q=SimpleTree+Attalika+134+Gulshan+Avenue+Dhaka+1212&output=embed&z=16"
              width="100%"
              height="100%"
              className="border-0 pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AYAL TECH Office Location"
            />
            {/* Clickable overlay */}
            <div className="absolute inset-0" />
            {/* Address card at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-[#0a1628] border-t border-slate-200 dark:border-white/10 px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-700 to-teal-700 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Office Address</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Level 19, SimpleTree Attalika, 134 Gulshan Ave, Dhaka 1212</p>
              </div>
              <span className="text-xs font-semibold text-white bg-emerald-700 px-3 py-1.5 rounded-lg transition-colors shrink-0 group-hover:bg-emerald-600">
                Directions →
              </span>
            </div>
          </a>
        </Container>
      </section>
    </>
  );
}
