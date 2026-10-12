"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Utensils,
  Heart,
  Briefcase,
  PartyPopper,
  Users,
  Cake,
  Flame,
  Coffee,
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

const cateringOccasions = [
  { title: "Weddings", desc: "Royal wedding buffets and multi-course grand receptions.", icon: Heart },
  { title: "Corporate Events", desc: "Executive luncheons, formal dinners, and hi-tea platters.", icon: Briefcase },
  { title: "Private Parties", desc: "Intimate gourmet dining tailored for your personal guests.", icon: Users },
  { title: "Family Gatherings", desc: "Warm and authentic feast spreads for family reunions and Milads.", icon: PartyPopper },
  { title: "Birthdays", desc: "Fun live cooking counters, finger foods, and customized menus.", icon: Cake },
  { title: "Social Celebrations", desc: "Engagements, Qawwali nights, and festive celebrations.", icon: Sparkles },
];

const menuCategories = [
  {
    id: "pakistani",
    title: "Pakistani Cuisine",
    items: ["Royal Mutton & Chicken Biryani", "Mutton Qorma & Karahi", "Beef & Mutton Seekh Kabab", "Chicken Reshmi & Tikka", "Fresh Tandoori Naan & Taftan"],
  },
  {
    id: "bbq",
    title: "BBQ Specialties",
    items: ["Charcoal Grilled Tikka Boti", "Matured Beef Bihari Kabab", "Fish Tikka & Fried Fish", "Malai Boti & Kasturi Boti", "Assorted Mint & Garlic Dips"],
  },
  {
    id: "continental",
    title: "Continental & Fine Dining",
    items: ["Creamy Garlic Butter Steak", "Fettuccine Alfredo Pasta", "Pan-Seared Fish with Lemon Butter", "Stuffed Chicken Breast", "Gourmet Fresh Salad Bar"],
  },
  {
    id: "live-stations",
    title: "Live Cooking Stations",
    items: ["Sizzling Live BBQ Counter", "Live Pasta & Stir-Fry Wok", "Live Puri Halwa & Naan Counter", "Live Shawarma & Slider Grill", "Live Gol Gappay & Chaat Desk"],
  },
  {
    id: "desserts",
    title: "Decadent Desserts",
    items: ["Traditional Shahi Kheer", "Warm Gulab Jamun & Jalebi", "Gajar / Lahori Kheer", "Continental Chocolate Lava Cake", "Assorted Pastries & Mousse Shots"],
  },
  {
    id: "beverages",
    title: "Beverages & Refreshments",
    items: ["Chilled Mint Margarita", "Fresh Seasonal Juices", "Pina Colada & Mocktails", "Kashmiri Chai with Dry Fruits", "Doodh Patti Tea & Coffee"],
  },
];

export default function CateringPage() {
  const [activeMenu, setActiveMenu] = useState("pakistani");

  const currentCategory = menuCategories.find((c) => c.id === activeMenu);

  return (
    <main className="bg-emerald-charcoal text-white min-h-screen overflow-hidden selection:bg-gold selection:text-emerald-charcoal pt-24 relative">
      
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/hero.png"
          alt="Platinum Catering Background"
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
            <Utensils className="w-4 h-4 text-gold" />
            <span>Culinary Excellence & Fine Dining</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-gray-100 to-gold/80 leading-tight"
          >
            Catering Services for Every Occasion
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-gray-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl mx-auto font-sans"
          >
            Great food brings people together. At Platinum Events & Caterers, we combine thoughtfully planned menus, quality presentation and professional service to make dining an important part of your event experience.
          </motion.p>
        </section>

        {/* CATERING FOR OCCASIONS */}
        <section className="py-12 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Tailored Menus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              Catering For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cateringOccasions.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="group rounded-2xl border border-gold/20 bg-emerald-deep/20 p-6 hover:border-gold/60 transition-all duration-300 backdrop-blur-md flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-emerald-charcoal transition-all shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-white group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-light mt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE MENU CUISINE SHOWCASE */}
        <section className="py-16 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Explore Culinary Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Our Cuisine Specialties
            </h2>
          </div>

          {/* CUISINE FILTER TABS */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveMenu(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer ${
                  activeMenu === cat.id
                    ? "text-emerald-charcoal font-bold bg-linear-to-r from-gold-light via-gold to-gold-dark shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                    : "text-gray-300 border border-gold/20 bg-emerald-deep/20 hover:border-gold/40 hover:text-gold"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* ACTIVE MENU DISPLAY CARD */}
          <AnimatePresence mode="wait">
            {currentCategory && (
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto rounded-3xl border border-gold/30 bg-linear-to-b from-emerald-deep/40 via-emerald-charcoal to-emerald-charcoal p-8 sm:p-12 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-6"
              >
                <div className="flex items-center justify-between border-b border-gold/20 pb-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gold-light via-gold to-gold-dark">
                    {currentCategory.title}
                  </h3>
                  <Utensils className="w-6 h-6 text-gold" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentCategory.items.map((menuItem, i) => (
                    <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl border border-gold/10 bg-emerald-charcoal/60">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-sm text-gray-200 font-light">{menuItem}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* CTA BANNER */}
        <section className="py-20 mb-16 relative rounded-3xl border border-gold/30 bg-linear-to-b from-emerald-deep/50 via-emerald-charcoal to-emerald-charcoal p-8 sm:p-12 backdrop-blur-2xl text-center space-y-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gold-light via-gold to-gold-dark">
              Customize Your Event Menu
            </h2>
            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              Have specific dietary requirements or guest preferences? Talk to our master chefs to tailor your menu.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-linear-to-r from-gold-light via-gold to-gold-dark text-emerald-charcoal font-semibold tracking-wider text-sm hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Discuss Your Catering Requirements</span>
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