'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

const doctors = [
  {
    name: "Dr. Deepak Kumar",
    title: "Senior Laser & Laparoscopic Surgeon",
    image: "/images/doctor/dr. deepak.png",
    description:
      "Dr. Deepak Kumar is a highly respected General Surgeon with over 25 years of clinical and operative experience. He specializes in advanced laser treatment for piles, fistula and fissure, laser varicose veins, and laparoscopic procedures including hernia, gallstone and appendix surgery, as well as minimal-scar breast lump treatment.",
    highlights: [
      "25+ Years of Surgical Experience",
      "Advanced Laser Surgery Specialist",
      "Laparoscopic & Minimally Invasive Expert",
      "Thousands of Successful Procedures",
      "All Insurance (TPA) — Cashless Treatment",
    ],
    footer:
      "Dr. Kumar's commitment is simple — deliver world-class surgical outcomes with the least possible discomfort, the shortest recovery, and complete transparency through every step.",
  },
];

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="section-eyebrow mb-2">Meet Your Surgeon</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            A Surgeon You Can <span className="text-gradient-teal">Trust</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A961] rounded-full mx-auto" />
          <p className="mt-5 text-slate-600 text-base md:text-lg font-light">
            Decades of refined expertise. Modern surgical technology. Deeply personal care.
          </p>
        </div>

        <div className="space-y-24">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="max-w-6xl mx-auto"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 lg:gap-16 items-center md:items-start`}>
                <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100 shimmer-effect bg-gradient-to-br from-[#0E7C7B] to-[#0A2540]">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                    />
                    {/* Credential badge floating bottom-left */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-2xl border border-white/50">
                      <p className="text-[9px] uppercase tracking-widest font-bold text-slate-400">Experience</p>
                      <p className="text-base font-black text-[#0A2540]">25+ Years</p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left mt-4 md:mt-0">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                    {doctor.name}
                  </h3>
                  <p className="text-[#0E7C7B] font-semibold text-sm md:text-base uppercase tracking-[0.2em] mb-6">
                    {doctor.title}
                  </p>
                  <div className="text-slate-600 text-base md:text-lg leading-relaxed space-y-5 font-light">
                    <p>{doctor.description}</p>
                    <ul className="space-y-3 not-italic">
                      {doctor.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 justify-center md:justify-start text-slate-700 font-medium"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#0E7C7B] mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="italic text-slate-500">{doctor.footer}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={onBookAppointment}
            className="bg-[#0E7C7B] text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-[#0B5F5E] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
