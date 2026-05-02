'use client';

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

interface OfferSectionProps {
  onBookAppointment: () => void;
}

// Implant pricing + Painless · Fast · Affordable promise.
// Surfaces the strongest USPs without resorting to fake-discount framing.
export default function OfferSection({ onBookAppointment }: OfferSectionProps) {
  const benefits = [
    "Dental implants from ₹25,000 (incl. crown)",
    "Single-sitting root canal treatment",
    "Painless, gentle technique under local anesthesia",
    "Same-day cosmetic procedures available",
    "Transparent pricing — no surprises",
    "EMI options on all major treatments",
    "Special offers on combo packages",
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#2A93C7]/8 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#F5D548]/10 rounded-full blur-3xl -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(15,42,64,0.08)] border border-[#2A93C7]/10 p-8 md:p-16 relative overflow-hidden group hover:shadow-[0_30px_60px_rgba(42,147,199,0.15)] transition-all duration-700"
          >
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E5F3FB] border border-[#2A93C7]/20 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#2A93C7]" strokeWidth={2.4} />
                  <span className="text-[#2A93C7] text-xs font-bold tracking-widest uppercase">Painless · Fast · Affordable</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                  Implants from{" "}
                  <span className="text-gradient-blue">₹25,000.</span>
                  <br />
                  No compromise on quality.
                </h2>

                <p className="text-slate-600 text-lg mb-10 font-light leading-relaxed">
                  Premium dentistry shouldn&apos;t feel premium-priced. Dr. Shubhra Sharma&apos;s practice is built on three promises — painless procedures, fast single-sitting treatments wherever possible, and honest pricing that makes quality care accessible to every patient.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-10">
                  {benefits.map((benefit, i) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#2A93C7]/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#2A93C7] transition-colors duration-300">
                        <Check className="w-3 h-3 text-[#2A93C7] group-hover/item:text-white transition-colors" strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 font-medium text-sm md:text-base leading-snug">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={onBookAppointment}
                  className="bg-[#2A93C7] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#1E7AAC] transition-all transform hover:scale-105 shadow-xl shadow-[#2A93C7]/25 active:scale-95"
                >
                  Check Implant Pricing
                </button>
              </div>

              {/* Right-side visual — implant pricing brand panel */}
              <div className="flex-1 relative w-full max-w-sm lg:max-w-none">
                <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] md:aspect-square shadow-[0_20px_60px_rgba(15,42,64,0.18)] group-hover:shadow-[0_30px_80px_rgba(42,147,199,0.25)] transition-all duration-700">
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-gradient-to-r from-[#F5D548] to-[#FBE783] text-[#0F2A40] px-5 py-2.5 rounded-full text-sm font-black tracking-wider shadow-[0_8px_25px_rgba(245,213,72,0.45)] transform group-hover:scale-105 transition-transform">
                      FROM ₹25,000 · INCL. CROWN
                    </div>
                  </div>

                  {/* Brand-colored gradient panel */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2A93C7] via-[#0F2A40] to-[#081827]">
                    <div className="absolute inset-0 bg-pattern-dots opacity-30" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#F5D548] rounded-full blur-3xl opacity-30 animate-pulse" />
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-10">
                    <div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mb-6 shadow-2xl">
                      <Sparkles className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <p className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight text-center">
                      Premium
                      <br />
                      Dental Implants
                    </p>
                    <p className="text-white/90 text-base font-medium mt-3 text-center">
                      Single, multiple & full-mouth
                    </p>
                    <div className="pt-6">
                      <div className="inline-flex items-center bg-white/95 backdrop-blur-md px-5 py-2 rounded-xl shadow-2xl">
                        <span className="text-[#0F2A40] font-bold text-sm tracking-tight">21+ Years of Trusted Care</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-[11px] text-slate-400 font-medium italic text-right lg:text-left opacity-80">
                  *Final pricing depends on case complexity and material chosen. Our team will share a detailed plan after your consultation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
