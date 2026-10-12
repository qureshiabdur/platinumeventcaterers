"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Users,
  Building2,
  Utensils,
  Sparkle,
  ShieldCheck,
  MessageSquare,
  Compass,
} from "lucide-react";

// Typed Framer Motion Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.08,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

// 10 Features / Capabilities Data
const managementCapabilities = [
  { num: "01", title: "Event Planning", desc: "Structured conceptualization, budgeting & theme development tailored around your goals.", icon: Calendar },
  { num: "02", title: "Event Coordination", desc: "Synchronizing all moving operational parts into one flawless timeline.", icon: Clock },
  { num: "03", title: "Venue Coordination", desc: "Liaising directly with venues for spatial layout, tech setups & protocol approvals.", icon: Building2 },
  { num: "04", title: "Guest Management", desc: "Smooth guest welcomes, seating flow, VIP protocols, and hospitality desk control.", icon: Users },
  { num: "05", title: "Event Timelines", desc: "Precision minute-by-minute master schedule to ensure zero operational delays.", icon: Compass },
  { num: "06", title: "Décor Coordination", desc: "Aligning stage design, floral styling, sound & theme lighting with luxury standards.", icon: Sparkle },
  { num: "07", title: "Catering Coordination", desc: "Seamless culinary service timing, menu flow, and live station management.", icon: Utensils },
  { num: "08", title: "On-site Event Management", desc: "Dedicated on-ground managers handling live operations and emergency contingencies.", icon: ShieldCheck },
  { num: "09", title: "Event Setup Coordination", desc: "Supervising stage construction, sound checks, lighting focus & table dressings.", icon: Building2 },
  { num: "10", title: "Vendor Coordination", desc: "Single point of contact for sound engineers, photographers, artists, and decorators.", icon: Users },
];

export default function EventManagementPage() {
  return (
    <main className="bg-emerald-charcoal text-white min-h-screen overflow-hidden selection:bg-gold selection:text-emerald-charcoal pt-24 relative">
      
      {/* GLOBAL HERO IMAGE OVERLAY BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/hero.png"
          alt="Platinum Royal Background"
          fill
          priority
          className="object-cover opacity-15 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-emerald-charcoal/95 via-emerald-charcoal/85 to-emerald-charcoal" />
      </div>

      {/* FLOATING AMBIENT GLOWS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 bg-gold/10 blur-[180px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-3/4 left-1/4 w-120 h-120 bg-emerald-deep/40 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TOP NAVIGATION: BACK TO ALL SERVICES */}
        <div className="pt-6 pb-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/30 bg-emerald-deep/40 text-gold text-xs uppercase tracking-widest hover:border-gold hover:bg-gold hover:text-emerald-charcoal transition-all duration-300 group shadow-lg backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* 1. HERO HEADER SECTION */}
        <section className="py-16 sm:py-20 text-center space-y-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-xl text-gold text-xs uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
            <span>End-to-End Execution & Care</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-gray-100 to-gold/80 leading-tight"
          >
            Professional Event Management Services
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="max-w-4xl mx-auto p-8 rounded-3xl border border-gold/25 bg-emerald-deep/30 backdrop-blur-xl relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-gold-light via-gold to-gold-dark" />
            <p className="text-gray-200 text-lg sm:text-2xl font-serif italic leading-relaxed text-left pl-4">
              “Great events don't happen by accident. They are built through thoughtful planning, careful coordination and attention to every important detail.”
            </p>
          </motion.div>
        </section>

        {/* 2. CAPABILITIES GRID */}
        <section className="py-16 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Complete Solutions
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              We Can Help With
            </h2>
            <p className="text-gray-300 text-sm font-light">
              Every single element carefully managed to deliver an effortless host experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementCapabilities.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="group relative rounded-2xl border border-gold/20 bg-linear-to-b from-emerald-deep/30 via-emerald-charcoal/90 to-emerald-charcoal p-6 hover:border-gold/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)] backdrop-blur-xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl font-bold text-gold/40 group-hover:text-gold transition-colors">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-emerald-charcoal transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-white group-hover:text-gold-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. CLOSING BANNER & CTA */}
        <section className="py-20 mb-16 relative rounded-3xl border border-gold/30 bg-linear-to-b from-emerald-deep/50 via-emerald-charcoal to-emerald-charcoal p-8 sm:p-12 backdrop-blur-2xl text-center space-y-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-relaxed">
              Whether you're organizing an intimate gathering or a large-scale occasion, our goal is to make the planning process simpler and the event experience smoother.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-linear-to-r from-gold-light via-gold to-gold-dark text-emerald-charcoal font-semibold tracking-wider text-sm hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Discuss Your Event</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/923235445558"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-full border border-gold/40 bg-emerald-deep/40 text-gold tracking-wider text-sm hover:bg-gold/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-gold" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}