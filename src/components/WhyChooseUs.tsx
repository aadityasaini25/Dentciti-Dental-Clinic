'use client';

import { motion } from "framer-motion";
import { Award, ShieldCheck, Sparkles, HeartPulse } from "lucide-react";

const points = [
  {
    icon: Award,
    title: "25+ Years of Surgical Excellence",
    desc: "Dr. Deepak Kumar brings over two and a half decades of operative experience — thousands of successful procedures across laser, laparoscopic and general surgery.",
  },
  {
    icon: Sparkles,
    title: "Advanced Laser & Laparoscopic Technology",
    desc: "State-of-the-art laser systems and HD laparoscopic equipment enable precise, scarless and minimally invasive treatment with faster recovery.",
  },
  {
    icon: ShieldCheck,
    title: "All Insurance (TPA) Accepted — Cashless",
    desc: "Comprehensive cashless support across all major TPAs and insurance providers. Our team handles every claim end-to-end so you focus on recovery.",
  },
  {
    icon: HeartPulse,
    title: "Pain-Free, Patient-First Care",
    desc: "Every treatment plan is built around your comfort — same-day discharge, minimal blood loss, no large incisions, and a dedicated post-op follow-up team.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-[#F4F9F9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-14">
          <p className="section-eyebrow mb-2">Why Isha-Para Clinic</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Why Patients <span className="text-gradient-teal">Trust Us</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A961] rounded-full mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {points.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#0E7C7B]/30 hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0E7C7B] to-[#0A2540] flex items-center justify-center mb-5 shadow-lg shadow-[#0E7C7B]/20 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-[#0E7C7B] transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
