"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Agar Next.js ka Image component use karna ho
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-emerald-charcoal/90 backdrop-blur-md border-b border-gold/20 py-4 shadow-2xl shadow-black/50"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo with Image */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Platinum Logo"
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-serif tracking-widest text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark group-hover:brightness-125 transition-all">
              PLATINUM
            </span>
            <span className="text-[9px] tracking-[0.25em] text-gray-300 uppercase">
              Events & Caterers
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm uppercase tracking-widest transition-colors duration-300 hover:text-gold ${
                  isActive ? "text-gold font-semibold" : "text-gray-300"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="relative group overflow-hidden rounded-full px-6 py-2.5 text-xs uppercase tracking-widest text-emerald-charcoal font-semibold bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Event</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gold p-2 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-emerald-charcoal/95 border-b border-gold/20 backdrop-blur-xl"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-200 text-lg uppercase tracking-wider hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-emerald-charcoal font-semibold rounded-full uppercase tracking-wider text-sm shadow-lg shadow-gold/20"
              >
                Book Event
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}