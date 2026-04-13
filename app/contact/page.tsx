"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, MessageSquare, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Label } from "@/components/ui/Label";
import { contactSchema, ContactFormValues } from "@/lib/validations";

// ──────────────────────────────────────────────────────────────────────
// ICON RATIONALE:
//  Send          → submit form action
//  Mail          → email contact method
//  Phone         → phone / call
//  MapPin        → office physical address
//  MessageSquare → WhatsApp / instant messaging
//  CheckCircle2  → success confirmation
// ──────────────────────────────────────────────────────────────────────

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
    label: "Office",
    value: "Level 19, SimpleTree Attalika, 134 Gulshan Ave, Dhaka-1212",
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
      // handle error gracefully in production
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-6 text-xs font-bold tracking-[0.2em] uppercase text-blue-400 border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 rounded-full">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              We&apos;d Love to{" "}
              <span className="gradient-text">Hear From You</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Looking for reliable communication technology or custom software? Our
              dedicated team is ready to help.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact section */}
      <Section className="pt-0 pb-24 bg-slate-900/30">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>

              <div className="space-y-5 mb-10">
                {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8 transition-all group"
                  >
                    <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon size={20} className="text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">{label}</p>
                      <p className="text-white font-medium text-sm leading-relaxed">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Business hours */}
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <h3 className="text-white font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { day: "Saturday – Thursday", hours: "9:00 AM – 6:00 PM" },
                    { day: "Friday", hours: "Closed" },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-slate-400">{day}</span>
                      <span className="text-white font-medium">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={32} className="text-emerald-400" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400 text-sm mb-6">
                      Thank you for reaching out. Our team will respond within 24 hours.
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>
                      Send Another
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <Label htmlFor="name" required>Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        error={errors.name?.message}
                        {...register("name")}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" required>Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        error={errors.email?.message}
                        {...register("email")}
                      />
                    </div>

                    <div>
                      <Label htmlFor="service" required>Service Interested In</Label>
                      <select
                        id="service"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-white/20"
                        {...register("service")}
                      >
                        <option value="" className="bg-slate-900">Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-slate-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-400">{errors.service.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message" required>Your Message</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your project or requirements..."
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
    </>
  );
}
