'use client';

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface CTABoxProps {
  onBookAppointment: () => void;
}

// Final conversion-driver block before footer. Two parallel CTAs (book + call).
export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden bg-[#0A2540]">
      {/* Ambient backdrop */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#0E7C7B] rounded-full blur-[120px] opacity-30" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#C9A961] rounded-full blur-[120px] opacity-15" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <p className="text-[#C9A961] font-semibold text-xs md:text-sm uppercase tracking-[0.25em] mb-5">
          Take The Next Step
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
          Talk to <span className="text-gradient-gold">Dr. Deepak Kumar.</span>
          <br />
          Trusted by Thousands.
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Bring your reports, your questions, your concerns. Walk out with clarity and a personalized treatment plan from a surgeon with 25+ years of experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
          <button
            onClick={onBookAppointment}
            className="relative group bg-gradient-to-r from-[#C9A961] to-[#E6CF94] text-[#0A2540] py-4 px-10 rounded-full font-bold text-base hover:shadow-[0_8px_30px_rgba(201,169,97,0.5)] hover:-translate-y-1 overflow-hidden transition-all duration-300 ring-4 ring-white/10"
          >
            <span className="relative flex items-center justify-center gap-2">
              Book Your Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <a
            href="tel:+919756788082"
            className="bg-white/10 hover:bg-white/15 backdrop-blur-md text-white border-2 border-white/30 py-4 px-10 rounded-full font-bold text-base text-center hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            +91 97567 88082
          </a>
        </div>

        <p className="mt-8 text-white/60 text-sm font-light">
          25+ years of trusted surgical care · All insurance (TPA) accepted
        </p>
      </motion.div>
    </section>
  );
}
