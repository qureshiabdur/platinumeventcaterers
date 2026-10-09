"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Utensils,
  Award,
  Heart,
  Briefcase,
  Users,
  MessageSquare,
} from "lucide-react";

// Strictly typed Framer Motion Variant (Fixes TS Error)
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

export default function Home() {
  return (
    <main className="bg-emerald-charcoal text-white min-h-screen overflow-hidden selection:bg-gold selection:text-emerald-charcoal">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
        {/* Hero Background Image Integration */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Platinum Events Royal Venue Setup"
            fill
            priority
            className="object-cover opacity-25 mix-blend-luminosity scale-105 hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-linear-to-b from-emerald-charcoal/80 via-emerald-charcoal/60 to-emerald-charcoal" />
        </div>

        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gold/10 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Subheading Badge */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md text-gold text-xs uppercase tracking-[0.2em]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Luxury Event Management & Catering</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-gray-100 to-gold/70 leading-[1.15]"
          >
            Creating Extraordinary Moments, One Event at a Time.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Premium Event Management & Catering Services Designed to Turn Your Special Occasions Into Unforgettable Experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-linear-to-r from-gold-light via-gold to-gold-dark text-emerald-charcoal font-semibold tracking-wider text-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Plan Your Event
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-gold/40 bg-emerald-deep/30 backdrop-blur-md text-gold tracking-wider text-sm hover:bg-gold/10 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Small Text */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="text-xs uppercase tracking-[0.3em] text-gold/60 pt-6"
          >
            Events • Catering • Weddings • Corporate Functions • Celebrations
          </motion.p>
        </div>
      </section>

      {/* 2. ABOUT INTRO */}
      <section className="py-24 px-6 relative border-t border-gold/10 bg-linear-to-b from-emerald-charcoal via-emerald-dark/40 to-emerald-charcoal">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              About Platinum
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-white via-gray-100 to-gold-light">
              Where Every Celebration Becomes a Story
            </h2>
            <p className="text-gray-300 leading-relaxed font-light">
              At Platinum Events & Caterers, we believe that every event deserves more than just beautiful arrangements — it deserves a memorable experience.
            </p>
            <p className="text-gray-300 leading-relaxed font-light">
              From intimate celebrations to grand weddings and professional corporate gatherings, we bring together thoughtful planning, elegant presentation, quality catering and seamless event execution to create occasions that feel truly special.
            </p>
            <p className="text-gold/90 font-medium italic">
              Our approach is simple: understand your vision, take care of the details and deliver an experience you and your guests will remember.
            </p>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors group text-sm uppercase tracking-wider"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Catering Image Showcase Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-gold/30 via-emerald-deep to-gold/30 blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />
            <div className="relative rounded-2xl border border-gold/20 bg-emerald-charcoal/80 p-6 sm:p-8 backdrop-blur-xl space-y-6 overflow-hidden">
              <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden border border-gold/30">
                <Image
                  src="/catering.png"
                  alt="Platinum Fine Catering & Culinary Services"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-emerald-charcoal/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] uppercase tracking-widest text-gold bg-black/60 px-2.5 py-1 rounded-full border border-gold/30">
                    Bespoke Culinary
                  </span>
                  <h4 className="font-serif text-lg text-white font-semibold mt-1">
                    Exquisite Gourmet Catering
                  </h4>
                </div>
              </div>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-white">Uncompromising Quality & Luxury</h3>
                <p className="text-gray-400 text-sm font-light">
                  Creating extraordinary memories through flawless catering and bespoke design.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 px-6 relative border-t border-gold/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Our Expertise
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Everything You Need for an Exceptional Event
            </h2>
            <p className="text-gray-300 font-light">
              From the first idea to the final guest departure, our team helps bring every important detail together with creativity, precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Event Management",
                desc: "Thoughtful planning and professional execution for events of every scale.",
                icon: Calendar,
              },
              {
                num: "02",
                title: "Wedding Events",
                desc: "Elegant wedding experiences crafted around your style, traditions and vision.",
                icon: Heart,
              },
              {
                num: "03",
                title: "Corporate Events",
                desc: "Professional event solutions designed for meetings, launches, celebrations and corporate gatherings.",
                icon: Briefcase,
              },
              {
                num: "04",
                title: "Catering Services",
                desc: "Delicious menus, refined presentation and catering experiences designed around your event.",
                icon: Utensils,
              },
              {
                num: "05",
                title: "Private & Social Events",
                desc: "Beautifully planned birthdays, anniversaries, family celebrations and special occasions.",
                icon: Users,
              },
            ].map((service, idx) => (
              <motion.div
                key={service.num}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="group relative rounded-2xl border border-gold/20 bg-emerald-deep/20 p-8 hover:border-gold/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] backdrop-blur-md"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-2xl font-bold text-gold/40 group-hover:text-gold transition-colors">
                    {service.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-emerald-charcoal transition-all duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-white mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-emerald-charcoal transition-all duration-300 font-semibold tracking-wider text-sm uppercase"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 px-6 relative bg-linear-to-b from-emerald-charcoal via-emerald-dark/60 to-emerald-charcoal border-t border-gold/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              The Platinum Advantage
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
              Why Choose Platinum?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tailored Experiences",
                desc: "Every event is different. We work around your requirements, preferences and vision.",
              },
              {
                title: "Attention to Detail",
                desc: "From presentation to coordination, we focus on the details that make an event feel complete.",
              },
              {
                title: "Elegant Presentation",
                desc: "We believe the way an event looks is just as important as the experience it creates.",
              },
              {
                title: "Professional Execution",
                desc: "Careful planning and coordinated execution help keep your event organized from beginning to end.",
              },
              {
                title: "Quality Catering",
                desc: "Thoughtfully planned menus and professional presentation add another memorable layer to every occasion.",
              },
              {
                title: "One Trusted Partner",
                desc: "From planning and coordination to catering and event execution, we bring essential services together under one roof.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="rounded-xl border border-gold/15 bg-emerald-charcoal/60 p-6 backdrop-blur-md flex items-start gap-4 hover:border-gold/40 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-24 px-6 relative border-t border-gold/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Our Process
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              From Vision to Celebration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Tell Us Your Vision",
                desc: "Share your event requirements, preferred style, guest count and expectations with our team.",
              },
              {
                step: "02",
                title: "Plan Together",
                desc: "We discuss the details and help shape the right event experience around your needs.",
              },
              {
                step: "03",
                title: "We Handle Details",
                desc: "Our team coordinates the essential elements so you can focus on enjoying your occasion.",
              },
              {
                step: "04",
                title: "Celebrate",
                desc: "On the day, we work behind the scenes to help your event run smoothly and beautifully.",
              },
            ].map((step, idx) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="relative rounded-2xl border border-gold/20 bg-emerald-deep/20 p-8 text-center space-y-4"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-linear-to-br from-gold-light via-gold to-gold-dark text-emerald-charcoal font-bold font-serif text-xl flex items-center justify-center shadow-lg shadow-gold/20">
                  {step.step}
                </div>
                <h3 className="font-serif text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED EVENTS / GALLERY SHOWCASE */}
      <section className="py-24 px-6 relative border-t border-gold/10 bg-emerald-dark/30">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                Moments Worth Celebrating
              </h2>
              <p className="text-gray-300 max-w-xl font-light">
                Every celebration has its own personality. Explore some of the moments we've helped bring to life.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors uppercase tracking-wider text-sm"
            >
              <span>View Our Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Categories Grid with Image Showcases */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Weddings", tag: "Royal Stage & Decor", imgSrc: "/hero.png" },
              { title: "Catering", tag: "Gourmet Culinary Setup", imgSrc: "/catering.png" },
              { title: "Corporate", tag: "Executive Gala", imgSrc: "/hero.png" },
              { title: "Private Events", tag: "Anniversary & Parties", imgSrc: "/catering.png" },
              { title: "Celebrations", tag: "Bespoke Lighting", imgSrc: "/hero.png" },
              { title: "Grand Dinners", tag: "Buffet Presentation", imgSrc: "/catering.png" },
            ].map((cat, idx) => (
              <motion.div
                key={cat.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="group relative h-80 rounded-2xl overflow-hidden border border-gold/20 bg-emerald-charcoal/80 flex items-end p-6 hover:border-gold/60 transition-all duration-500"
              >
                <Image
                  src={cat.imgSrc}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-t from-emerald-charcoal via-emerald-charcoal/40 to-transparent" />
                <div className="relative z-10 space-y-1">
                  <span className="text-xs text-gold uppercase tracking-widest">{cat.tag}</span>
                  <h3 className="font-serif text-2xl font-semibold text-white">{cat.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DARK LUXURY CTA SECTION */}
      <section className="py-24 px-6 relative border-t border-gold/20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gold-light via-gold to-gold-dark">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Planning a wedding, corporate gathering or special celebration? Tell us what you have in mind and let Platinum Events & Caterers help turn your vision into an unforgettable experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-linear-to-r from-gold-light via-gold to-gold-dark text-emerald-charcoal font-semibold tracking-wider text-sm hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Start Planning Your Event
            </Link>

            <a
              href="https://wa.me/923235445558"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-gold/40 bg-emerald-deep/40 text-gold tracking-wider text-sm hover:bg-gold/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-gold" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}