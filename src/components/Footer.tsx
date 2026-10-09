"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

// Brand SVG Icons for Social Platforms
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.36 1.51-1.41 2.51-.12 1.51.78 3.03 2.18 3.58 1.4.58 3.09.28 4.15-.75.64-.61.99-1.49 1.02-2.38.03-3.62.01-7.24.01-10.86z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-emerald-charcoal border-t border-gold/20 text-gray-300 relative overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-linear-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info & Large Logo */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative w-52 h-20 sm:w-60 sm:h-24 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Platinum Events & Caterers Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm font-light leading-relaxed text-gray-400">
              Creating extraordinary moments through thoughtful event planning, elegant presentation and quality catering.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/platinumeventscaterers?obrf=ZTgzanJ6azBzNG9q"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/20 bg-emerald-deep/30 flex items-center justify-center text-gold hover:border-gold hover:bg-gold hover:text-emerald-charcoal transition-all duration-300"
                title="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/share/1ESFdCfHkP/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/20 bg-emerald-deep/30 flex items-center justify-center text-gold hover:border-gold hover:bg-gold hover:text-emerald-charcoal transition-all duration-300"
                title="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.tiktok.com/@platinumeventscaterers?_r=1&_t=ZS-9APZ0I9L67Y"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/20 bg-emerald-deep/30 flex items-center justify-center text-gold hover:border-gold hover:bg-gold hover:text-emerald-charcoal transition-all duration-300"
                title="TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://www.youtube.com/@platinumeventscaterers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/20 bg-emerald-deep/30 flex items-center justify-center text-gold hover:border-gold hover:bg-gold hover:text-emerald-charcoal transition-all duration-300"
                title="YouTube"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-semibold tracking-wide border-b border-gold/20 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold group-hover:w-2.5 transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-semibold tracking-wide border-b border-gold/20 pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                "Event Management",
                "Wedding Events",
                "Corporate Events",
                "Catering Services",
                "Private Events",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold group-hover:w-2.5 transition-all duration-300" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-semibold tracking-wide border-b border-gold/20 pb-2 inline-block">
              Contact
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Plaza No 278, Y block, Phase 3 DHA, Lahore</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+923235445558" className="hover:text-gold transition-colors">
                  +92 323 5445558
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@platinumevents.com" className="hover:text-gold transition-colors">
                  info@platinumevents.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Platinum Events & Caterers. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}