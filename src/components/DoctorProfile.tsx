'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

const doctors = [
  {
    name: "Dr. Shubhra Sharma",
    title: "Cosmetic Dentist & Implantologist",
    image: "/images/doctor/dr-shubhra.jpeg",
    description:
      "Dr. Shubhra Sharma is one of Navi Mumbai's most preferred dentists, with 21 years of clinical experience in cosmetic dentistry, dental implants and full-mouth rehabilitation. Her practice at Dentciti Dental Clinic, Vashi is built on three principles — painless procedures, fast turnaround, and transparent, affordable pricing.",
    highlights: [
      "21+ Years of Clinical Experience",
      "Cosmetic Dentist & Implantologist",
      "Dental Implants from ₹25,000 (incl. crown)",
      "Single-Sitting Root Canal Specialist",
      "Trusted by Thousands Across Navi Mumbai",
    ],
    footer:
      "Dr. Sharma's commitment is simple — premium dental outcomes with the least possible discomfort, the shortest treatment time, and honest pricing that makes quality dentistry accessible to every patient.",
  },
];

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="section-eyebrow mb-2">Meet Your Dentist</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            A Dentist You Can <span className="text-gradient-blue">Trust</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#F5D548] rounded-full mx-auto" />
          <p className="mt-5 text-slate-600 text-base md:text-lg font-light">
            Decades of refined expertise. Modern dental technology. Deeply personal care.
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
                  <div className="relative w-full max-w-sm aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100 shimmer-effect bg-gradient-to-br from-[#2A93C7] to-[#0F2A40]">
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
                      <p className="text-base font-black text-[#0F2A40]">21+ Years</p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left mt-4 md:mt-0">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                    {doctor.name}
                  </h3>
                  <p className="text-[#2A93C7] font-semibold text-sm md:text-base uppercase tracking-[0.2em] mb-6">
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
                          <CheckCircle2 className="w-5 h-5 text-[#2A93C7] mt-0.5 shrink-0" />
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
            className="bg-[#2A93C7] text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-[#1E7AAC] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
