"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Cake,
  Heart,
  Users,
  Sparkle,
  PartyPopper,
  Crown,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

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

const socialEvents = [
  {
    title: "Birthday Celebrations",
    desc: "Vibrant theme decor, live food stalls, and unforgettable moments for all ages.",
    icon: Cake,
    highlights: ["Customized Theme Styling", "Live Fast-Food & Dessert Counters", "AV & Music System Setup"],
  },
  {
    title: "Anniversaries",
    desc: "Intimate romantic dinners and grand milestone anniversary galas tailored around your journey.",
    icon: Heart,
    highlights: ["Candlelight Table Settings", "Fine Dining Plating", "Bespoke Floral Decor"],
  },
  {
    title: "Family Gatherings",
    desc: "Warm and organized family reunions, Milad gatherings, and homecoming feasts.",
    icon: Users,
    highlights: ["Comfortable Lounge Seating", "Traditional Pakistani Buffets", "Flawless Guest Protocol"],
  },
  {
    title: "Engagements & Dholkis",
    desc: "Joyful pre-wedding celebrations, festive Mehndi/Dholki setups, and ring ceremonies.",
    icon: Sparkle,
    highlights: ["Traditional Floral Decor", "Stage & Lighting Installations", "Qawwali / Music Stage Setup"],
  },
  {
    title: "Private Parties",
    desc: "Exclusive indoor and outdoor lawn parties executed with complete privacy and luxury.",
    icon: PartyPopper,
    highlights: ["VIP Security & Protocol", "Gourmet Finger Foods & Beverages", "Ambient Mood Lighting"],
  },
  {
    title: "Special Occasions",
    desc: "Graduation parties, retirement celebrations, and personal milestones honored beautifully.",
    icon: Crown,
    highlights: ["Customized Photo Backdrops", "Personalized Event Timelines", "Full Event Coordination"],
  },
];

export default function PrivateEventsPage() {
  return (
    <main className="bg-emerald-charcoal text-white min-h-screen overflow-hidden selection:bg-gold selection:text-emerald-charcoal pt-24 relative">
      
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/hero.png"
          alt="Platinum Social Events Background"
          fill
          priority
          className="object-cover opacity-15 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-emerald-charcoal/95 via-emerald-charcoal/85 to-emerald-charcoal" />
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 bg-gold/10 blur-[180px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* BACK TO SERVICES */}
        <div className="pt-6 pb-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/30 bg-emerald-deep/40 text-gold text-xs uppercase tracking-widest hover:border-gold hover:bg-gold hover:text-emerald-charcoal transition-all duration-300 group shadow-lg backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* HERO HEADER */}
        <section className="py-16 sm:py-20 text-center space-y-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-xl text-gold text-xs uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Cherished Milestones & Parties</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-gray-100 to-gold/80 leading-tight"
          >
            Celebrate Life's Special Moments
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-gray-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl mx-auto font-sans"
          >
            Birthdays, anniversaries, family gatherings and personal milestones deserve to be celebrated beautifully. Whether you're planning an intimate gathering or a larger celebration, we help bring together the details that make your occasion feel special.
          </motion.p>
        </section>

        {/* EVENTS CARDS GRID */}
        <section className="py-16 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Bespoke Celebrations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Events We Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialEvents.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="group relative rounded-3xl border border-gold/25 bg-linear-to-b from-emerald-deep/40 via-emerald-charcoal/90 to-emerald-charcoal p-8 hover:border-gold/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(212,175,55,0.18)] backdrop-blur-xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-emerald-charcoal transition-all shadow-md">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold-light transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-gold/15">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-20 mb-16 relative rounded-3xl border border-gold/30 bg-linear-to-b from-emerald-deep/50 via-emerald-charcoal to-emerald-charcoal p-8 sm:p-12 backdrop-blur-2xl text-center space-y-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gold-light via-gold to-gold-dark">
              Ready to Plan Your Next Celebration?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              Let us take care of the decor, catering, and management while you enjoy creating memories with your loved ones.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-linear-to-r from-gold-light via-gold to-gold-dark text-emerald-charcoal font-semibold tracking-wider text-sm hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Plan Your Celebration</span>
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