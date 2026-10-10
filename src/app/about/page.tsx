"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/Counter"; // 1. Animated Counter Import
import {
  Sparkles,
  ArrowRight,
  Award,
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";

// Typed Framer Motion Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export default function AboutUs() {
  return (
    <main className="bg-emerald-charcoal text-white min-h-screen overflow-hidden selection:bg-gold selection:text-emerald-charcoal pt-24">
      
      {/* 1. HERO HEADER SECTION */}
      <section className="relative py-20 px-6 overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Platinum Events Venue Setup"
            fill
            priority
            className="object-cover opacity-15 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-emerald-charcoal/90 via-emerald-charcoal/70 to-emerald-charcoal" />
        </div>

        {/* Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-gold/10 blur-[160px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md text-gold text-xs uppercase tracking-[0.2em]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover Our Heritage & Passion</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-gray-100 to-gold/70 leading-tight"
          >
            About Platinum Events & Caterers
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-gray-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Crafting extraordinary celebrations with flawless execution, bespoke luxury designs, and unforgettable culinary experiences.
          </motion.p>
        </div>
      </section>

      {/* 2. OPENING & STORY SECTION */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Our Essence
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-white via-gray-100 to-gold-light">
              Personal, Polished & Unforgettable
            </h2>
            <div className="space-y-4 text-gray-300 font-light leading-relaxed">
              <p className="text-lg text-white font-normal">
                At Platinum Events & Caterers, we are passionate about creating events that feel personal, polished and memorable.
              </p>
              <p>
                We understand that an event is more than a venue, decorations or food. It is about bringing people together, creating an atmosphere and making moments that stay with you long after the celebration ends.
              </p>
              <p>
                Our focus is on combining thoughtful planning, elegant presentation, quality catering and reliable event execution to create experiences tailored to every occasion.
              </p>
            </div>

            {/* ANIMATED COUNTER GRID */}
            <div className="pt-6 grid grid-cols-2 gap-6 border-t border-gold/15">
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold">
                  <Counter value={100} suffix="%" />
                </span>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Customized Planning</p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold">
                  <Counter value={100} suffix="%" />
                </span>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Quality & Execution</p>
              </div>
            </div>
          </motion.div>

          {/* Luxury Visual Showcase */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-gold/30 via-emerald-deep to-gold/30 blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />
            <div className="relative rounded-2xl border border-gold/20 bg-emerald-charcoal/80 p-6 sm:p-8 backdrop-blur-xl space-y-6">
              <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden border border-gold/30">
                <Image
                  src="/about.png"
                  alt="Platinum Catering Presentation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-emerald-charcoal/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-gold bg-black/70 px-2.5 py-1 rounded-full border border-gold/30">
                    Bespoke Presentation
                  </span>
                  <h4 className="font-serif text-lg text-white font-semibold">
                    Attention to Every Single Detail
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-4 text-left p-4 rounded-xl border border-gold/15 bg-emerald-deep/30">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-white font-semibold">High Standards of Execution</h4>
                  <p className="text-xs text-gray-400">Seamless coordination from concept to final departure.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. PHILOSOPHY HIGHLIGHT SECTION */}
      <section className="py-20 px-6 relative border-t border-gold/15 bg-linear-to-b from-emerald-charcoal via-emerald-dark/60 to-emerald-charcoal">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold font-semibold">
            <Heart className="w-4 h-4 text-gold" />
            <span>Our Philosophy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gold-light via-gold to-gold-dark leading-tight">
            “Your Vision. Our Expertise. One Memorable Experience.”
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            We listen before we plan. We understand your requirements, preferences and expectations, then work to transform them into an event experience that reflects your personality and purpose.
          </p>
        </div>
      </section>

      {/* 4. MISSION & VISION SECTION */}
      <section className="py-24 px-6 relative border-t border-gold/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="group relative rounded-2xl border border-gold/20 bg-emerald-deep/20 p-8 sm:p-10 hover:border-gold/60 transition-all duration-500 hover:-translate-y-2 backdrop-blur-md space-y-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-light via-gold to-gold-dark text-emerald-charcoal flex items-center justify-center shadow-lg shadow-gold/20">
              <Target className="w-7 h-7" />
            </div>
            
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                Our Purpose
              </span>
              <h3 className="font-serif text-3xl font-bold text-white">Our Mission</h3>
            </div>

            <p className="text-gray-300 text-lg font-light leading-relaxed border-t border-gold/15 pt-6">
              To create exceptional event experiences through creativity, quality and professional execution.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="group relative rounded-2xl border border-gold/20 bg-emerald-deep/20 p-8 sm:p-10 hover:border-gold/60 transition-all duration-500 hover:-translate-y-2 backdrop-blur-md space-y-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-light via-gold to-gold-dark text-emerald-charcoal flex items-center justify-center shadow-lg shadow-gold/20">
              <Eye className="w-7 h-7" />
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                Our Future
              </span>
              <h3 className="font-serif text-3xl font-bold text-white">Our Vision</h3>
            </div>

            <p className="text-gray-300 text-lg font-light leading-relaxed border-t border-gold/15 pt-6">
              To become a trusted name for memorable events and refined catering experiences.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 5. CORE VALUES SECTION */}
      <section className="py-24 px-6 relative border-t border-gold/10 bg-emerald-dark/30">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              What Guides Us
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              The Values Behind Our Success
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Authentic Listening",
                desc: "We prioritize understanding your specific desires before shaping any event concept.",
                icon: Users,
              },
              {
                title: "Refined Luxury",
                desc: "From stage lighting to culinary plating, elegance is infused into every layer.",
                icon: Sparkles,
              },
              {
                title: "Punctual Execution",
                desc: "Timely coordination keeps your schedule relaxed and effortless throughout.",
                icon: Clock,
              },
              {
                title: "Unwavering Quality",
                desc: "Fresh ingredients, skilled craftsmanship, and premium setups on every occasion.",
                icon: ShieldCheck,
              },
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="rounded-2xl border border-gold/20 bg-emerald-charcoal/80 p-6 backdrop-blur-md space-y-4 hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <value.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="py-24 px-6 relative border-t border-gold/20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gold-light via-gold to-gold-dark">
            Ready to Plan Your Unforgettable Event?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Let's discuss your vision and turn your upcoming occasion into an extraordinary story.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-linear-to-r from-gold-light via-gold to-gold-dark text-emerald-charcoal font-semibold tracking-wider text-sm hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Our Planning Team
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-gold/40 bg-emerald-deep/40 text-gold tracking-wider text-sm hover:bg-gold/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}