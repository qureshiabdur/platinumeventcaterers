"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Heart,
  Briefcase,
  Utensils,
  Users,
  PartyPopper,
  CheckCircle2,
  ShieldCheck,
  Star,
} from "lucide-react";

// Strictly Typed Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

// Services Master Data with Custom Images & Links
const servicesData = [
  {
    id: "event-management",
    title: "Event Management",
    category: "Corporate & Private",
    desc: "Thoughtful planning, full-scale venue transformation, and professional execution tailored for events of every size.",
    icon: Calendar,
    image: "/eventmanagement.png",
    href: "/services/event-management",
    highlights: ["Complete Concept Design", "Vendor Coordination", "On-site Operations Management"],
  },
  {
    id: "wedding-events",
    title: "Wedding Events",
    category: "Weddings",
    desc: "Elegant royal wedding experiences crafted around your unique style, family traditions, and romantic vision.",
    icon: Heart,
    image: "/wedding.png",
    href: "/services/wedding-events",
    highlights: ["Bespoke Stage & Decor", "Bridal Entry Choreography", "Theme Lighting & Floral Styling"],
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    category: "Corporate",
    desc: "Seamless professional event solutions designed for corporate galas, product launches, conferences, and board meetings.",
    icon: Briefcase,
    image: "/corporate.png",
    href: "/services/corporate-events",
    highlights: ["Brand Theme Integration", "AV & Stage Setup", "Executive VIP Hospitality"],
  },
  {
    id: "catering-services",
    title: "Catering Services",
    category: "Catering",
    desc: "Exquisite gourmet menus, refined live cooking stations, and flawless luxury presentation for fine dining experiences.",
    icon: Utensils,
    image: "/caterings.png",
    href: "/services/catering-services",
    highlights: ["Custom Multi-Course Menus", "Live Barbecue & Live Buffets", "Culinary Plating"],
  },
  {
    id: "private-events",
    title: "Private & Social Events",
    category: "Social",
    desc: "Beautifully planned birthday celebrations, anniversary galas, family reunions, and intimate gatherings.",
    icon: Users,
    image: "/private.png",
    href: "/services/private-social-events",
    highlights: ["Customized Decor Themes", "Intimate Atmosphere Design", "Gourmet Finger Foods & Beverages"],
  },
  {
    id: "social-celebrations",
    title: "Social Celebrations",
    category: "Social",
    desc: "Vibrant and joyful celebrations, Qawwali nights, engagement parties, and festive occasions executed to perfection.",
    icon: PartyPopper,
    image: "/social.png",
    href: "/services/private-social-events",
    highlights: ["Ambient Mood Lighting", "Sound & Stage Management", "Guest Protocol Management"],
  },
];

const filterCategories = ["All", "Weddings", "Corporate", "Catering", "Social"];

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredServices =
    activeFilter === "All"
      ? servicesData
      : servicesData.filter((s) => s.category === activeFilter);

  return (
    <main className="bg-emerald-charcoal text-white min-h-screen overflow-hidden selection:bg-gold selection:text-emerald-charcoal pt-24">
      
      {/* 1. HERO HEADER SECTION WITH ULTRA-LUXURY AMBIENCE */}
      <section className="relative py-24 px-6 overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Platinum Luxury Event Setting"
            fill
            priority
            className="object-cover opacity-20 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-emerald-charcoal/95 via-emerald-charcoal/80 to-emerald-charcoal" />
        </div>

        {/* Floating Gold Glow Effects */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/15 blur-[180px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-deep/60 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-xl text-gold text-xs uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
            <span>Exquisite Craftsmanship & Planning</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-gray-100 to-gold/80 leading-tight"
          >
            Our Event & Catering Services
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-gray-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl mx-auto"
          >
            Whether you're planning a once-in-a-lifetime celebration or an important professional gathering, Platinum Events & Caterers provides thoughtfully planned solutions designed around your occasion.
          </motion.p>
        </div>
      </section>

      {/* 2. INTERACTIVE FILTER TABS & SERVICE CARDS GRID */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-6 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  activeFilter === category
                    ? "text-emerald-charcoal font-bold bg-linear-to-r from-gold-light via-gold to-gold-dark shadow-[0_0_20px_rgba(212,175,55,0.5)] scale-105"
                    : "text-gray-300 border border-gold/20 bg-emerald-deep/20 hover:border-gold/50 hover:text-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((service, idx) => (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative rounded-3xl border border-gold/25 bg-linear-to-b from-emerald-deep/40 via-emerald-charcoal/90 to-emerald-charcoal p-6 sm:p-8 hover:border-gold/80 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(212,175,55,0.2)] flex flex-col justify-between overflow-hidden backdrop-blur-xl"
                >
                  {/* Subtle Top Card Image Preview */}
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-gold/20 mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-emerald-charcoal via-emerald-charcoal/30 to-transparent" />
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-emerald-charcoal/80 border border-gold/40 flex items-center justify-center text-gold backdrop-blur-md">
                      <service.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
                      {service.category}
                    </span>

                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold-light transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 text-sm font-light leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Highlights List */}
                    <ul className="space-y-2 pt-2 border-t border-gold/10">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Link Button */}
                  <div className="pt-6 mt-6 border-t border-gold/15">
                    <Link
                      href={service.href}
                      className="inline-flex items-center justify-between w-full text-gold font-semibold text-xs uppercase tracking-widest hover:text-gold-light transition-colors group/btn"
                    >
                      <span>Learn More</span>
                      <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center group-hover/btn:bg-gold group-hover/btn:text-emerald-charcoal transition-all">
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 3. LUXURY SERVICE COMMITMENT HIGHLIGHTS */}
      <section className="py-24 px-6 relative border-t border-gold/20 bg-linear-to-b from-emerald-charcoal via-emerald-dark/80 to-emerald-charcoal">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Bespoke Styling",
              desc: "Every decor element and menu is customized around your personal vision.",
              icon: Star,
            },
            {
              title: "Culinary Excellence",
              desc: "Fresh, premium ingredients prepared by experienced executive chefs.",
              icon: Utensils,
            },
            {
              title: "End-to-End Care",
              desc: "From initial consultation to post-event wrap up, we manage every detail.",
              icon: ShieldCheck,
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              className="rounded-2xl border border-gold/20 bg-emerald-deep/20 p-8 backdrop-blur-md text-center space-y-4 hover:border-gold/50 transition-all"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shadow-lg shadow-gold/10">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. BOTTOM LUXURY CALL TO ACTION */}
      <section className="py-24 px-6 relative border-t border-gold/20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gold-light via-gold to-gold-dark">
            Let's Shape Your Next Event Solution
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Ready to bring royal elegance to your event? Connect with our team today to get a customized proposal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-linear-to-r from-gold-light via-gold to-gold-dark text-emerald-charcoal font-semibold tracking-wider text-sm hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}