'use client';

import { motion } from "framer-motion";
import { Zap, Activity, Stethoscope, Shield, Heart, Sparkles } from "lucide-react";

// Surgical service catalog. Icon-driven cards (no procedure photos — cleaner + more clinical).
// 6th card is the trust capstone (insurance acceptance) so the 3-col grid stays balanced.
const serviceData = [
  {
    title: "Laser Treatment",
    subtitle: "Piles · Fistula · Fissure",
    icon: Zap,
    description: "Painless, scarless laser procedure with same-day discharge. Most patients return to work within 48 hours.",
    benefits: [
      "No cuts, no stitches, no large wounds",
      "Less than 30-minute procedure",
      "Same-day discharge in most cases",
      "Minimal recurrence rates",
    ],
    accent: "from-[#0E7C7B] to-[#0A2540]",
    featured: true,
  },
  {
    title: "Laser Varicose Veins",
    subtitle: "EVLA / EVLT Treatment",
    icon: Activity,
    description: "Endovenous Laser Ablation — the modern, minimally invasive way to treat varicose veins with no major surgery.",
    benefits: [
      "Walk-in, walk-out treatment",
      "No general anesthesia needed",
      "Cosmetic & long-lasting result",
      "Insurance covered",
    ],
    accent: "from-[#0E7C7B] to-[#0B5F5E]",
  },
  {
    title: "Laparoscopic Surgery",
    subtitle: "Gallstones · Appendix",
    icon: Stethoscope,
    description: "Keyhole surgery using high-definition laparoscopic equipment — small incisions, fast recovery.",
    benefits: [
      "Tiny 5–10mm incisions only",
      "Faster recovery vs. open surgery",
      "Reduced post-operative pain",
      "Shorter hospital stay",
    ],
    accent: "from-[#0A2540] to-[#0E7C7B]",
  },
  {
    title: "Hernia Surgery",
    subtitle: "Laparoscopic Repair",
    icon: Shield,
    description: "Advanced laparoscopic hernia repair with mesh placement — strong, durable repair with cosmetic incisions.",
    benefits: [
      "Inguinal, umbilical & ventral hernias",
      "Mesh-reinforced strong repair",
      "Lower recurrence rate",
      "Day-care surgery available",
    ],
    accent: "from-[#0A2540] to-[#061B2E]",
  },
  {
    title: "Breast Lump Treatment",
    subtitle: "Minimal / No-Scar",
    icon: Heart,
    description: "Discreet, minimally invasive lump removal designed to preserve appearance — with full pathology workup.",
    benefits: [
      "Hidden / minimal incision technique",
      "Complete histopathology evaluation",
      "Sensitive, women-centred care",
      "Quick recovery, day-care discharge",
    ],
    accent: "from-[#0E7C7B] to-[#083F3F]",
  },
  {
    title: "Cashless Insurance",
    subtitle: "All TPAs Accepted",
    icon: Sparkles,
    description: "Hassle-free cashless treatment with all major insurers and TPAs. Our team handles approvals end-to-end.",
    benefits: [
      "Pre-authorization assistance",
      "All major TPAs supported",
      "Full claim documentation help",
      "EMI options also available",
    ],
    accent: "from-[#C9A961] to-[#E6CF94]",
    isGold: true,
  },
];

export default function ServiceHighlights() {
  return (
    <section className="relative bg-[#061B2E] text-white py-20 md:py-32 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0E7C7B] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#C9A961] rounded-full blur-[120px] opacity-10" />

      <div className="relative max-w-4xl mx-auto text-center mb-20 md:mb-24">
        <p className="font-semibold text-xs md:text-sm uppercase tracking-[0.25em] text-[#C9A961] mb-4">
          Our Specialised Services
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Advanced Surgical
          <br />
          <span className="text-gradient-gold">Treatments</span>
        </h2>
        <div className="w-24 h-[2px] bg-[#C9A961] rounded-full mx-auto mb-10" />
        <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
          From advanced laser care to laparoscopic excellence — every procedure performed by Dr. Deepak Kumar is built around <span className="text-white font-semibold">precision, comfort, and rapid recovery</span>.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`bg-white/[0.03] border ${
                service.featured ? "border-[#0E7C7B]/40" : "border-white/10"
              } p-7 rounded-[28px] flex flex-col hover:border-[#C9A961]/40 hover:bg-white/[0.06] transition-all duration-700 hover-lift group cursor-default shadow-2xl relative overflow-hidden ${
                service.featured ? "lg:scale-[1.02]" : ""
              }`}
            >
              {service.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#C9A961] text-[#0A2540] text-[10px] font-black uppercase tracking-wider">
                  Most Booked
                </div>
              )}

              {/* Icon plate */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
              >
                <service.icon
                  className={`w-8 h-8 ${service.isGold ? "text-[#0A2540]" : "text-white"}`}
                  strokeWidth={1.6}
                />
              </div>

              <div className="flex flex-col flex-grow">
                <p className="text-[11px] uppercase tracking-widest text-[#C9A961] font-bold mb-2">
                  {service.subtitle}
                </p>
                <h3 className="font-bold text-2xl text-white mb-4 group-hover:text-[#C9A961] transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-[14px] text-slate-400 leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                <ul className="space-y-3 text-[13px] text-slate-300 mt-auto">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="text-[#C9A961] mt-1 shrink-0 text-[10px]">✦</span>
                      <span className="leading-snug font-light">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing strip */}
        <div className="mt-16 max-w-3xl mx-auto bg-white/[0.04] border border-white/10 rounded-3xl p-6 md:p-8 text-center backdrop-blur-sm">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C9A961] font-bold mb-2">Transparent Pricing</p>
          <p className="text-2xl md:text-3xl font-bold text-white mb-2">
            Treatment plans starting from <span className="text-gradient-gold">₹45,000</span>
          </p>
          <p className="text-slate-400 text-sm font-light">
            Final pricing is finalized only after consultation. EMI & insurance options available on every procedure.
          </p>
        </div>
      </div>
    </section>
  );
}
