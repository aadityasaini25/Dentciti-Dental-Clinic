'use client';

import { motion } from "framer-motion";
import { Award, Smile, Zap, Wallet } from "lucide-react";

const points = [
  {
    icon: Award,
    title: "21+ Years of Clinical Experience",
    desc: "Dr. Shubhra Sharma is one of Navi Mumbai's most preferred dentists, with over two decades of expertise in cosmetic dentistry, implants and full-mouth rehabilitation.",
  },
  {
    icon: Smile,
    title: "Painless Treatment, Always",
    desc: "Modern anesthesia, gentle technique and patient-first protocols make every visit calm and comfortable — even for the most anxious patients and children.",
  },
  {
    icon: Zap,
    title: "Fast, Single-Sitting Procedures",
    desc: "Most root canals, fillings, whitening sessions and minor cosmetic treatments are completed in a single visit so you spend less time in the chair and more time smiling.",
  },
  {
    icon: Wallet,
    title: "Cost-Efficient, Transparent Dentistry",
    desc: "Honest, written estimates upfront. Dental implants start at ₹25,000 (with crown). EMI options available on all major treatments — premium care without premium hassle.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-[#F5FAFD]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-14">
          <p className="section-eyebrow mb-2">Why Dentciti</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Why Patients <span className="text-gradient-blue">Trust Us</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#F5D548] rounded-full mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {points.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#2A93C7]/30 hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2A93C7] to-[#0F2A40] flex items-center justify-center mb-5 shadow-lg shadow-[#2A93C7]/20 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-[#2A93C7] transition-colors">
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
