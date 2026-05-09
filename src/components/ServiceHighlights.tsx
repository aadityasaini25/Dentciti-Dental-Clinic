'use client';

import { motion } from "framer-motion";
import { Sparkles, Smile, Zap, Wand2, Baby, Gift } from "lucide-react";

// Dental service catalog. Icon-driven cards (no procedure photos — cleaner + more clinical).
// 6th card is the "Special Offers" capstone in gold so the 3-col grid stays balanced.
const serviceData = [
  {
    title: "Dental Implants",
    subtitle: "From ₹25,000 · Incl. Crown",
    icon: Sparkles,
    description:
      "Single-tooth, multiple-tooth and full-mouth implant solutions. Long-lasting, natural-looking and priced transparently — including the crown.",
    benefits: [
      "From ₹25,000 (with crown)",
      "Painless under local anesthesia",
      "15–25+ year typical lifespan",
      "Transparent pricing",
    ],
    accent: "from-[#2A93C7] to-[#0F2A40]",
    featured: true,
  },
  {
    title: "Smile Makeover",
    subtitle: "Veneers · Whitening · Bonding",
    icon: Smile,
    description:
      "Reshape, brighten and perfect your smile. Custom porcelain veneers, in-clinic whitening and digital smile design — tailored to your face.",
    benefits: [
      "Custom porcelain veneers",
      "1-sitting professional whitening",
      "Digital smile preview",
      "Cosmetic bonding for chips & gaps",
    ],
    accent: "from-[#2A93C7] to-[#1E7AAC]",
  },
  {
    title: "Root Canal Treatment",
    subtitle: "Single-Sitting · Painless",
    icon: Zap,
    description:
      "Modern rotary endodontics with rubber-dam isolation and digital X-ray. Most cases finished in a single visit — virtually painless.",
    benefits: [
      "Single-sitting RCT in most cases",
      "Painless modern technique",
      "Tooth-coloured crown options",
      "Saves your natural tooth",
    ],
    accent: "from-[#0F2A40] to-[#2A93C7]",
  },
  {
    title: "Braces & Aligners",
    subtitle: "Metal · Ceramic · Clear",
    icon: Wand2,
    description:
      "Straighten your smile your way — traditional metal, discreet ceramic or invisible clear aligners. Custom plans for adults and teens.",
    benefits: [
      "Metal, ceramic & clear aligner options",
      "Adult & teen treatment plans",
      "3D digital smile preview",
      "Free orthodontic consultation",
    ],
    accent: "from-[#0F2A40] to-[#081827]",
  },
  {
    title: "Pediatric & Family Care",
    subtitle: "Gentle Kids' Dentistry",
    icon: Baby,
    description:
      "Cavity-free check-ups, fluoride applications and sealants for children, plus complete family dental care under one roof.",
    benefits: [
      "Gentle, fear-free kids' care",
      "Preventive sealants & fluoride",
      "Family-friendly environment",
      "Saturday & evening slots",
    ],
    accent: "from-[#2A93C7] to-[#155E84]",
  },
  {
    title: "Special Offers",
    subtitle: "Limited-Time Plans",
    icon: Gift,
    description:
      "Flexible packages on implants, smile makeovers and aligners. Talk to our team about current offers and combo plans.",
    benefits: [
      "Implant packages from ₹25,000",
      "Smile-makeover combo deals",
      "Seasonal whitening offers",
      "Family-care discounts",
    ],
    accent: "from-[#F5D548] to-[#FBE783]",
    isGold: true,
  },
];

export default function ServiceHighlights() {
  return (
    <section className="relative bg-[#081827] text-white py-20 md:py-32 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2A93C7] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#F5D548] rounded-full blur-[120px] opacity-10" />

      <div className="relative max-w-4xl mx-auto text-center mb-20 md:mb-24">
        <p className="font-semibold text-xs md:text-sm uppercase tracking-[0.25em] text-[#F5D548] mb-4">
          Our Specialised Services
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Premium Dental
          <br />
          <span className="text-gradient-yellow">Treatments</span>
        </h2>
        <div className="w-24 h-[2px] bg-[#F5D548] rounded-full mx-auto mb-10" />
        <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
          From advanced implants to gentle family dentistry — every treatment performed by Dr. Shubhra Sharma is built around <span className="text-white font-semibold">comfort, speed, and transparent pricing</span>.
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
                service.featured ? "border-[#2A93C7]/40" : "border-white/10"
              } p-7 rounded-[28px] flex flex-col hover:border-[#F5D548]/40 hover:bg-white/[0.06] transition-all duration-700 hover-lift group cursor-default shadow-2xl relative overflow-hidden ${
                service.featured ? "lg:scale-[1.02]" : ""
              }`}
            >
              {service.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#F5D548] text-[#0F2A40] text-[10px] font-black uppercase tracking-wider">
                  Most Booked
                </div>
              )}

              {/* Icon plate */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
              >
                <service.icon
                  className={`w-8 h-8 ${service.isGold ? "text-[#0F2A40]" : "text-white"}`}
                  strokeWidth={1.6}
                />
              </div>

              <div className="flex flex-col flex-grow">
                <p className="text-[11px] uppercase tracking-widest text-[#F5D548] font-bold mb-2">
                  {service.subtitle}
                </p>
                <h3 className="font-bold text-2xl text-white mb-4 group-hover:text-[#F5D548] transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-[14px] text-slate-400 leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                <ul className="space-y-3 text-[13px] text-slate-300 mt-auto">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="text-[#F5D548] mt-1 shrink-0 text-[10px]">✦</span>
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
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#F5D548] font-bold mb-2">Transparent Pricing</p>
          <p className="text-2xl md:text-3xl font-bold text-white mb-2">
            Dental implants starting from <span className="text-gradient-yellow">₹25,000</span>
          </p>
          <p className="text-slate-400 text-sm font-light">
            Final pricing is finalized only after consultation — written estimates upfront, no hidden charges.
          </p>
        </div>
      </div>
    </section>
  );
}
