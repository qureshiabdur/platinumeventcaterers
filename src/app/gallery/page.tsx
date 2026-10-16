"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Maximize2,
  X,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.05,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

// Exact Category Mapping Provided by You (1 to 30)
const imageCategoryMap: { [key: number]: string } = {
  1: "Weddings",
  2: "Weddings",
  3: "Catering",
  4: "Decor",
  5: "Catering",
  6: "Private Events",
  7: "Decor",
  8: "Corporate",
  9: "Private Events",
  10: "Events",
  11: "Catering",
  12: "Private Events",
  13: "Decor",
  14: "Decor",
  15: "Weddings",
  16: "Decor",
  17: "Decor",
  18: "Weddings",
  19: "Weddings",
  20: "Catering",
  21: "Weddings",
  22: "Weddings",
  23: "Private Events",
  24: "Private Events",
  25: "Private Events",
  26: "Private Events",
  27: "Private Events",
  28: "Catering",
  29: "Private Events",
  30: "Decor",
};

// 30 Images mapped with clean titles (No Numbering)
const galleryItems = Array.from({ length: 30 }, (_, index) => {
  const id = index + 1;
  const category = imageCategoryMap[id] || "Events";

  return {
    id,
    src: `/${id}.jpeg`,
    category,
    title: `${category} Showcase`,
  };
});

const categories = ["All", "Weddings", "Corporate", "Catering", "Private Events", "Decor", "Events"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <main className="bg-emerald-charcoal text-white min-h-screen overflow-hidden selection:bg-gold selection:text-emerald-charcoal pt-24 relative">
      
      {/* GLOBAL HERO BACKGROUND OVERLAY */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/hero.png"
          alt="Platinum Gallery Background"
          fill
          priority
          className="object-cover opacity-15 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-emerald-charcoal/95 via-emerald-charcoal/85 to-emerald-charcoal" />
      </div>

      {/* AMBIENT GLOW */}
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
            <span>Visual Showcase</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-gray-100 to-gold/80 leading-tight"
          >
            Our Event Gallery
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-gray-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl mx-auto font-sans"
          >
            A glimpse into the celebrations, details and experiences created by Platinum Events & Caterers.
          </motion.p>
        </section>

        {/* 2. FILTER TABS */}
        <section className="pb-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? "text-emerald-charcoal font-bold bg-linear-to-r from-gold-light via-gold to-gold-dark shadow-[0_0_20px_rgba(212,175,55,0.5)] scale-105"
                    : "text-gray-300 border border-gold/20 bg-emerald-deep/20 hover:border-gold/50 hover:text-gold backdrop-blur-md"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* 3. GALLERY GRID */}
        <section className="pb-24">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImage(item.src)}
                  className="group relative h-80 rounded-2xl overflow-hidden border border-gold/20 bg-emerald-charcoal/80 cursor-pointer hover:border-gold/70 transition-all duration-500 hover:shadow-[0_15px_35px_rgba(212,175,55,0.2)]"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-emerald-charcoal via-emerald-charcoal/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Hover Overlay Details (No Numbering) */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    <div className="flex justify-end">
                      <div className="w-9 h-9 rounded-full bg-emerald-charcoal/80 border border-gold/40 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold bg-black/60 px-3 py-1 rounded-full border border-gold/30 inline-block mb-2">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* 4. LIGHTBOX IMAGE MODAL */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-gold p-3 rounded-full bg-emerald-charcoal/80 border border-gold/40 hover:bg-gold hover:text-emerald-charcoal transition-all z-50 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative max-w-5xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden border border-gold/40">
                <Image
                  src={selectedImage}
                  alt="Full preview"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 5. BOTTOM CTA */}
        <section className="py-20 mb-16 relative rounded-3xl border border-gold/30 bg-linear-to-b from-emerald-deep/50 via-emerald-charcoal to-emerald-charcoal p-8 sm:p-12 backdrop-blur-2xl text-center space-y-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gold-light via-gold to-gold-dark">
              Want a Similar Setup for Your Event?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              Connect with our design and management team to create an extraordinary experience tailored to your vision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-linear-to-r from-gold-light via-gold to-gold-dark text-emerald-charcoal font-semibold tracking-wider text-sm hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Book Your Event</span>
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