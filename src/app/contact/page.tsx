"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Send,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Clock,
  MessageSquare,
  X,
} from "lucide-react";

// Typed Framer Motion Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

// FAQ Data
const faqs = [
  {
    question: "What types of events do you manage?",
    answer:
      "We provide event management and catering solutions for weddings, corporate gatherings, private celebrations and other special occasions.",
  },
  {
    question: "Can you customize an event according to our requirements?",
    answer:
      "Yes. We work around the specific requirements, style and expectations of each event to deliver a personalized experience.",
  },
  {
    question: "Do you provide catering services separately?",
    answer:
      "Yes, catering requirements can be discussed based on your event type, guest count and preferred menu.",
  },
  {
    question: "How early should I book my event?",
    answer:
      "We recommend getting in touch as early as possible so there is enough time to discuss your requirements and plan the event properly.",
  },
  {
    question: "Do you handle corporate events?",
    answer:
      "Yes, our services can be tailored for corporate gatherings, professional events and business celebrations.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "Contact us through WhatsApp, phone or our online inquiry form with your event details and our team can discuss your requirements.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    eventType: "Wedding Events",
    eventDate: "",
    guests: "",
    location: "",
    services: "Full Event Management",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Auto-hide success animation overlay after 3.5 seconds
  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setShowSuccessModal(true);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          eventType: "Wedding Events",
          eventDate: "",
          guests: "",
          location: "",
          services: "Full Event Management",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message:
            data.error || "Something went wrong. Please try again or reach out on WhatsApp.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Failed to connect to the server. Please check your network.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-emerald-charcoal text-white min-h-screen overflow-hidden selection:bg-gold selection:text-emerald-charcoal pt-24 relative">
      
      {/* SUCCESS ANIMATION OVERLAY MODAL */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-md w-full rounded-3xl border border-gold/40 bg-linear-to-b from-emerald-deep via-emerald-charcoal to-emerald-charcoal p-8 text-center space-y-6 shadow-[0_0_60px_rgba(212,175,55,0.3)] overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40 bg-gold/20 blur-3xl rounded-full pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gold/60 hover:text-gold transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Animated Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center text-gold shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                <CheckCircle2 className="w-10 h-10 text-gold" />
              </motion.div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gold-light via-gold to-gold-dark">
                  Inquiry Sent Successfully!
                </h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  Thank you for reaching out. Our team will review your event details and get back to you shortly.
                </p>
              </div>

              {/* Progress Indicator Line */}
              <div className="w-full bg-gold/10 h-1 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3.5, ease: "linear" }}
                  className="bg-linear-to-r from-gold-light via-gold to-gold-dark h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GLOBAL HERO BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/hero.png"
          alt="Platinum Events Contact Background"
          fill
          priority
          className="object-cover opacity-15 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-emerald-charcoal/95 via-emerald-charcoal/85 to-emerald-charcoal" />
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 bg-gold/10 blur-[180px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 1. HERO HEADER */}
        <section className="py-16 sm:py-20 text-center space-y-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-xl text-gold text-xs uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
            <span>Get in Touch</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-gray-100 to-gold/80 leading-tight"
          >
            Let's Plan Your Next Event
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-gray-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl mx-auto font-sans"
          >
            Have an event in mind? We'd love to hear about it. Tell us about your occasion, preferred date, guest count and requirements, and our team will get back to you to discuss the possibilities.
          </motion.p>
        </section>

        {/* 2. FORM & SIDE CONTACT INFO SECTION */}
        <section className="pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: INQUIRY FORM */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl border border-gold/30 bg-linear-to-b from-emerald-deep/40 via-emerald-charcoal/90 to-emerald-charcoal p-8 sm:p-10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-6"
          >
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white border-b border-gold/20 pb-4">
              Send Us an Inquiry
            </h2>

            {/* ERROR ALERT NOTIFICATION */}
            {status.type === "error" && (
              <div className="p-4 rounded-xl border bg-rose-900/50 border-rose-500/50 text-rose-200 flex items-start gap-3 text-sm">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gold font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Your Name"
                    className="w-full px-4 py-3.5 rounded-xl border border-gold/20 bg-emerald-charcoal/80 text-white placeholder-gray-500 focus:border-gold focus:outline-hidden transition-all text-sm"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gold font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+92 323 5445558"
                    className="w-full px-4 py-3.5 rounded-xl border border-gold/20 bg-emerald-charcoal/80 text-white placeholder-gray-500 focus:border-gold focus:outline-hidden transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gold font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="info@platinumevents.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-gold/20 bg-emerald-charcoal/80 text-white placeholder-gray-500 focus:border-gold focus:outline-hidden transition-all text-sm"
                  />
                </div>

                {/* Event Type */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gold font-medium">
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData({ ...formData, eventType: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl border border-gold/20 bg-emerald-charcoal/80 text-white focus:border-gold focus:outline-hidden transition-all text-sm"
                  >
                    <option value="Wedding Events">Wedding Events</option>
                    <option value="Corporate Events">Corporate Events</option>
                    <option value="Catering Services">Catering Services</option>
                    <option value="Private Events">Private Parties & Birthdays</option>
                    <option value="Social Celebrations">Social Celebrations / Qawwali</option>
                    <option value="Other">Other Occasion</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Event Date */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gold font-medium">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) =>
                      setFormData({ ...formData, eventDate: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl border border-gold/20 bg-emerald-charcoal/80 text-white focus:border-gold focus:outline-hidden transition-all text-sm"
                  />
                </div>

                {/* Number of Guests */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gold font-medium">
                    Number of Guests
                  </label>
                  <input
                    type="text"
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                    placeholder="e.g. 250"
                    className="w-full px-4 py-3.5 rounded-xl border border-gold/20 bg-emerald-charcoal/80 text-white placeholder-gray-500 focus:border-gold focus:outline-hidden transition-all text-sm"
                  />
                </div>

                {/* Event Location */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gold font-medium">
                    Event Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    placeholder="DHA Lahore, etc."
                    className="w-full px-4 py-3.5 rounded-xl border border-gold/20 bg-emerald-charcoal/80 text-white placeholder-gray-500 focus:border-gold focus:outline-hidden transition-all text-sm"
                  />
                </div>
              </div>

              {/* Your Message */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gold font-medium">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Share details regarding decor preference, menu choice, or specific requirements..."
                  className="w-full px-4 py-3.5 rounded-xl border border-gold/20 bg-emerald-charcoal/80 text-white placeholder-gray-500 focus:border-gold focus:outline-hidden transition-all text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-linear-to-r from-gold-light via-gold to-gold-dark text-emerald-charcoal font-semibold tracking-wider text-sm hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending Inquiry...</span>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* RIGHT: SIDE CONTACT CARDS */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-3xl border border-gold/25 bg-emerald-deep/30 p-8 backdrop-blur-xl space-y-8">
              <h3 className="font-serif text-2xl font-bold text-white border-b border-gold/20 pb-4">
                Direct Contact
              </h3>

              <div className="space-y-6">
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
                      Location
                    </h4>
                    <p className="text-white text-sm font-medium mt-1 leading-relaxed">
                      Plaza No 278, Y block, Phase 3 DHA, Lahore, Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone & Direct Calling */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
                      Phone Number
                    </h4>
                    <a
                      href="tel:+923235445558"
                      className="text-white text-base font-semibold mt-1 block hover:text-gold transition-colors"
                    >
                      +92 323 5445558
                    </a>
                  </div>
                </div>

                {/* WhatsApp Chat Link */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
                      WhatsApp Instant Chat
                    </h4>
                    <a
                      href="https://wa.me/923235445558"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold text-sm font-medium mt-1 block hover:underline"
                    >
                      Click here to chat on WhatsApp →
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
                      Email Address
                    </h4>
                    <a
                      href="mailto:info@platinumevents.com"
                      className="text-white text-sm font-medium mt-1 block hover:text-gold transition-colors"
                    >
                      info@platinumevents.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Office Hours Card */}
            <div className="rounded-3xl border border-gold/20 bg-emerald-charcoal/80 p-8 backdrop-blur-xl space-y-3">
              <div className="flex items-center gap-3 text-gold">
                <Clock className="w-5 h-5" />
                <h4 className="font-serif text-lg font-semibold text-white">
                  Consultation Hours
                </h4>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed font-light">
                Monday – Saturday: 10:00 AM – 6:00 PM
              </p>
            </div>
          </motion.div>

        </section>

        {/* 3. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
        <section className="py-20 mb-16 border-t border-gold/20">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="rounded-2xl border border-gold/20 bg-emerald-deep/30 overflow-hidden backdrop-blur-md"
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-gold/5 transition-colors"
                >
                  <span className="font-serif text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold transition-transform duration-300 ${
                      activeFaq === index ? "rotate-180 bg-gold text-emerald-charcoal" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-300 text-sm font-light leading-relaxed border-t border-gold/10 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}