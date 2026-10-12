"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  PartyPopper,
  Music,
  Heart,
  Crown,
  Sparkle,
  Flame,
  CheckCircle2,
  MessageSquare,
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

// 6 Social Celebration Event Cards
const celebrationTypes = [
  {
    title: "Qawwali & Sufi Nights",
    desc: "Enchanting indoor or lawn Qawwali setups featuring floor seating, royal velvet bolsters, traditional brass lanterns, and acoustic sound perfection.",
    icon: Music,
    highlights: ["Traditional Floor & Stage Setups", "Ambient Mood & Warm Lantern Lighting", "VIP Seating & Protocol Management"],
  },
  {
    title: "Engagement & Ring Ceremonies",
    desc: "Elegant ring exchange celebrations with bespoke backdrop styling, romantic floral arrangements, and fine catering.",
    icon: Heart,
    highlights: ["Custom Backdrop & Stage Decor", "Gourmet Welcome Drinks & Appetizers", "Personalized Event Flow"],
  },
  {
    title: "Dholki & Sangeet Evenings",
    desc: "Vibrant, joyful, and festive pre-wedding celebrations filled with traditional marigold decor, dance stage setups, and live food stalls.",
    icon: PartyPopper,
    highlights: ["Colorful Traditional Floral Styling", "Interactive Live Cooking Counters", "Dance Floor & Sound System Installation"],
  },
  {
    title: "Festive Gatherings & Milads",
    desc: "Soulful and respectful religious or festive occasions organized with utmost grace, comfortable lounge seating, and traditional feasts.",
    icon: Crown,
    highlights: ["Respectful Seating Arrangements", "Traditional Authentic Banquet Buffets", "Seamless Guest Protocol"],
  },
  {
    title: "Theme Parties & Galas",
    desc: "Bespoke themed galas, masquerade balls, and exclusive social bashes tailored to your personal aesthetic vision.",
    icon: Sparkle,
    highlights: ["Full Theme Lighting & AV Setups", "Customized Photo & Lounge Booths", "Executive Barbecue & Mocktail Bars"],
  },
  {
    title: "Cultural & Special Gatherings",
    desc: "High-profile cultural celebrations, poetry nights, and reunion banquets executed with luxury hospitality.",
    icon: Flame,
    highlights: ["Acoustic & Stage Management", "Fine Porcelain & Plating Service", "Dedicated Event Coordinators"],
  },
];

export default function SocialCelebrationsPage() {
  return (
    <main className="bg-emerald-charcoal text-white min-h-screen overflow-hidden selection:bg-gold selection:text-emerald-charcoal pt-24 relative">
      
      {/* GLOBAL HERO IMAGE OVERLAY BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/hero.png"
          alt="Platinum Royal Social Celebrations Background"
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
            <span>Vibrant & Unforgettable Festivities</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-gray-100 to-gold/80 leading-tight"
          >
            Social Celebrations Executed to Perfection
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-gray-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl mx-auto font-sans"
          >
            Every social gathering carries its own rhythm and joy. From magical Qawwali nights to vibrant engagement ceremonies and cultural festivities, Platinum Events & Caterers brings warmth, luxury, and flawless organization to every occasion.
          </motion.p>
        </section>

        {/* 2. CELEBRATIONS GRID */}
        <section className="py-16 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Bespoke Festivities
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Celebrations We Bring to Life
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {celebrationTypes.map((item, idx) => (
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

                {/* Highlights List */}
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

        {/* 3. CLOSING BANNER & CTA */}
        <section className="py-20 mb-16 relative rounded-3xl border border-gold/30 bg-linear-to-b from-emerald-deep/50 via-emerald-charcoal to-emerald-charcoal p-8 sm:p-12 backdrop-blur-2xl text-center space-y-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
            <PartyPopper className="w-8 h-8 text-gold animate-bounce" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gold-light via-gold to-gold-dark">
              Let's Plan an Unforgettable Social Event
            </h2>
            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              Share your event ideas, guest count, and preferred style with us. We'll handle everything from decor and lighting to gourmet catering.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-linear-to-r from-gold-light via-gold to-gold-dark text-emerald-charcoal font-semibold tracking-wider text-sm hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Plan Your Social Celebration</span>
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