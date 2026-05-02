'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, X } from "lucide-react";

interface StickyCtaProps {
  isVisible: boolean;
  onBookAppointment: () => void;
}

// Floating bottom-of-viewport CTA. Minimizable to a small chip; restorable.
//
// Centering note: Framer Motion writes its own `transform` for the slide-up
// animation, which would clobber a Tailwind `-translate-x-1/2`. Keep the
// fixed/centered positioning on the outer wrapper and let motion.div animate
// inside it.
export default function StickyCTA({ isVisible, onBookAppointment }: StickyCtaProps) {
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isVisible) return null;

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 left-6 z-50 bg-[#0A2540] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center gap-2"
        aria-label="Expand booking CTA"
      >
        <Calendar className="w-5 h-5 text-[#C9A961]" />
        <span className="hidden sm:inline font-bold text-xs tracking-widest uppercase">Book Now</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-4xl z-50 sticky-cta">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative glass-premium shadow-2xl rounded-[24px] p-4 md:p-5 border border-white/50 backdrop-blur-2xl"
      >
        <button
          onClick={() => setIsMinimized(true)}
          className="absolute -top-3 -right-3 bg-white text-slate-500 hover:text-[#0A2540] rounded-full w-8 h-8 shadow-md flex items-center justify-center border border-slate-100 transition-colors z-10"
          aria-label="Minimize"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-base md:text-lg text-slate-900 mb-0.5 flex items-center justify-center md:justify-start gap-2">
              <span className="text-[#C9A961]">★</span>
              All Insurance (TPA) Accepted
            </h3>
            <p className="text-[#0E7C7B] font-semibold text-sm">Cashless treatment with Dr. Deepak Kumar · 25+ years trusted</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={onBookAppointment}
              className="flex-1 md:flex-none bg-[#0E7C7B] text-white px-7 py-3 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-[#0B5F5E] hover:shadow-[#0E7C7B]/40 hover:-translate-y-0.5 transition-all"
            >
              Book Now
            </button>
            <a
              href="tel:+919756788082"
              className="flex items-center justify-center bg-white text-[#0E7C7B] border-2 border-[#0E7C7B]/25 px-5 py-3 rounded-full font-bold text-sm hover:bg-[#E6F2F2] transition-colors"
              aria-label="Call clinic"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
