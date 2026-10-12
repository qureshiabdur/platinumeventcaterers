"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  Rocket,
  Presentation,
  GraduationCap,
  Network,
  PartyPopper,
  Users,
  Utensils,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
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

const corporateServices = [
  { title: "Corporate Gatherings", desc: "Refined executive galas and annual board meetings designed to impress.", icon: Building2 },
  { title: "Business Events", desc: "Seamless logistical management for shareholder meetings and executive summits.", icon: Briefcase },
  { title: "Product Launches", desc: "High-impact stage, lighting, and media setups to elevate your brand unveilings.", icon: Rocket },
  { title: "Conferences", desc: "Full-scale conference management with stage AV, delegate registration & acoustics.", icon: Presentation },
  { title: "Seminars & Workshops", desc: "Professional workshop environments equipped with pristine sound & seating layouts.", icon: GraduationCap },
  { title: "Networking Events", desc: "Engaging cocktail & lounge setups crafted to facilitate meaningful business networking.", icon: Network },
  { title: "Corporate Celebrations", desc: "Award ceremonies, holiday galas, and milestone achievements celebrated in style.", icon: PartyPopper },
  { title: "Employee Events", desc: "Team building retreats, family days, and appreciation gatherings for staff.", icon: Users },
  { title: "Corporate Catering", desc: "Executive hi-tea, multi-course buffet luncheons, and formal sit-down dinners.", icon: Utensils },
];

export default function CorporateEventsPage() {
  return (
    <main className="bg-emerald-charcoal text-white min-h-screen overflow-hidden selection:bg-gold selection:text-emerald-charcoal pt-24 relative">
      
      {/* GLOBAL HERO BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/hero.png"
          alt="Platinum Corporate Event Background"
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
            <span>Executive Event Solutions</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-gray-100 to-gold/80 leading-tight"
          >
            Corporate Events With a Professional Touch
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-gray-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl mx-auto font-sans"
          >
            From corporate gatherings and conferences to launches, celebrations and formal occasions, we help businesses create organized, elegant, and engaging event experiences.
          </motion.p>
        </section>

        {/* SERVICES GRID */}
        <section className="py-16 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Tailored Corporate Solutions
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Our Corporate Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateServices.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="group relative rounded-2xl border border-gold/20 bg-linear-to-b from-emerald-deep/30 via-emerald-charcoal/90 to-emerald-charcoal p-6 hover:border-gold/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)] backdrop-blur-xl space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-emerald-charcoal transition-all">
                  <item.icon className="w-6 h-6" />
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

        {/* CTA BANNER */}
        <section className="py-20 mb-16 relative rounded-3xl border border-gold/30 bg-linear-to-b from-emerald-deep/50 via-emerald-charcoal to-emerald-charcoal p-8 sm:p-12 backdrop-blur-2xl text-center space-y-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gold-light via-gold to-gold-dark">
              Elevate Your Next Corporate Gathering
            </h2>
            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              Connect with our corporate team to discuss event logistics, custom branding, and executive catering packages.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-linear-to-r from-gold-light via-gold to-gold-dark text-emerald-charcoal font-semibold tracking-wider text-sm hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Plan Your Corporate Event</span>
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