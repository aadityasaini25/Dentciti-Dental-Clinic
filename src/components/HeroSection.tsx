'use client';

import { motion } from "framer-motion";
import { Phone, ShieldCheck, Award, Smile, Sparkles, Tag } from "lucide-react";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

// Premium hero — eyebrow + USP chips + headline + dual CTA + specialization card.
// Motion: fade/slide on mount, hover scale on CTAs (no surprise on reduced-motion).
export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 px-4 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="text-center mb-12 md:mb-16"
      >
        <p className="section-eyebrow mb-4">Dentciti Dental Clinic · Vashi, Navi Mumbai</p>

        {/* Limited-time clear aligners offer — eye-catching promo strip */}
        <div className="flex justify-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-[#F5D548] to-[#FBE783] text-[#0F2A40] shadow-lg shadow-[#F5D548]/40"
          >
            <Tag className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={2.6} />
            <span className="text-[11px] md:text-xs font-black tracking-wider uppercase">
              Up to 30% Off · Clear Aligners
            </span>
          </motion.div>
        </div>

        {/* USP trust strip — Painless · Fast · Affordable + experience */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 px-3 md:px-5 py-2.5 md:py-3 rounded-full bg-white/75 backdrop-blur-xl border border-[#2A93C7]/15 shadow-lg shadow-[#2A93C7]/5"
        >
          {[
            { icon: Award, label: "21+ Years Experience" },
            { icon: Smile, label: "Painless Treatments" },
            { icon: Sparkles, label: "Implants from ₹25,000" },
            { icon: ShieldCheck, label: "Single-Sitting Procedures" },
          ].map((usp, i) => (
            <div
              key={usp.label}
              className="flex items-center gap-1.5 px-2.5 md:px-3 py-1 text-[11px] md:text-xs font-semibold text-slate-700"
            >
              <usp.icon className="w-3.5 h-3.5 text-[#2A93C7]" strokeWidth={2.4} />
              <span>{usp.label}</span>
              {i < 3 && <span className="hidden md:inline text-slate-300 ml-1">·</span>}
            </div>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.05]"
        >
          Painless, Fast & Affordable
          <br className="hidden md:block" />
          <span className="text-gradient-blue">Premium Dental Care</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
        >
          One of Navi Mumbai&apos;s most preferred dentists — Dr. Shubhra Sharma brings <span className="font-semibold text-slate-800">21+ years</span> of expertise in cosmetic dentistry, dental implants, single-sitting root canals and family dental care. <span className="font-semibold text-[#2A93C7]">Dental implants starting at just ₹25,000.</span>
        </motion.p>
      </motion.div>

      {/* Hero showcase: 16:9 YouTube video + specializations card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="md:flex md:items-stretch md:justify-center md:gap-10 md:mb-12 max-w-6xl mx-auto"
      >
        <div className="relative w-full md:flex-1 md:max-w-[640px] mb-8 md:mb-0">
          <div className="relative rounded-3xl aspect-video overflow-hidden shadow-2xl ring-4 ring-white ring-offset-2 ring-offset-[#E5F3FB] bg-[#0F2A40]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/1SaB1WCdVIc?autoplay=1&mute=1&loop=1&playlist=1SaB1WCdVIc&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&disablekb=1&cc_load_policy=0&fs=0"
              title="Dentciti Dental Clinic — Dr. Shubhra Sharma"
              allow="autoplay; encrypted-media; picture-in-picture"
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0 pointer-events-none"
            />
            {/* Floating doctor credential badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-2xl border border-white/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2A93C7] to-[#0F2A40] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Trusted Dentist</p>
                <p className="text-sm font-bold text-slate-900">21+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative md:w-[400px] md:flex-shrink-0">
          <div className="glass-premium p-8 md:p-10 rounded-[32px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2A93C7] opacity-5 blur-3xl -mr-16 -mt-16" />
            <h2 className="text-lg font-bold text-[#0F2A40] uppercase tracking-[0.2em] mb-8 border-b border-[#2A93C7]/20 pb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#2A93C7]" />
              Our Specializations
            </h2>
            <ul className="space-y-5 mb-10 text-[15px] text-slate-700 font-medium">
              {[
                "Cosmetic Dentistry & Smile Makeovers",
                "Dental Implants from ₹25,000",
                "Single-Sitting Root Canal Treatment",
                "21+ Years of Trusted Care",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                  className="flex items-center gap-4 group"
                >
                  <span className="w-8 h-8 rounded-full bg-[#2A93C7]/10 flex items-center justify-center group-hover:bg-[#2A93C7] transition-colors duration-300">
                    <ShieldCheck className="w-4 h-4 text-[#2A93C7] group-hover:text-white transition-colors" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
            <button
              onClick={onBookAppointment}
              className="w-full bg-[#0F2A40] text-white px-6 py-5 rounded-2xl text-base font-bold hover:bg-[#081827] transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </motion.div>

      {/* Dual primary CTAs — booking + direct call */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mt-14 md:mt-20"
      >
        <button
          onClick={onBookAppointment}
          className="bg-[#2A93C7] text-white py-4 px-12 rounded-2xl font-bold text-lg shadow-xl shadow-[#2A93C7]/25 hover:bg-[#1E7AAC] transition-all hover:scale-105 active:scale-95 md:min-w-[260px]"
        >
          Book Your Appointment
        </button>
        <a
          href="tel:+919320450006"
          className="bg-white text-[#2A93C7] border-2 border-[#2A93C7]/30 py-4 px-12 rounded-2xl font-bold text-lg text-center hover:bg-[#E5F3FB] transition-all hover:scale-105 active:scale-95 md:min-w-[260px] flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          +91 93204 50006
        </a>
      </motion.div>
    </section>
  );
}
