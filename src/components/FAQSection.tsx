'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  onBookAppointment: () => void;
}

// Single FAQ list — 2 implants, 2 clear aligners, 2 general dentistry.
export default function FAQSection({ onBookAppointment }: FAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is the dental implant procedure painful?",
      answer:
        "No. Implant placement is performed under local anesthesia using a gentle, modern surgical technique. Most patients describe only mild pressure during the procedure. Post-op discomfort is minimal and easily managed with simple oral medication.",
    },
    {
      question: "How much do dental implants cost at Dentciti?",
      answer:
        "Single-tooth implants start at ₹25,000 — and that price includes the crown. Final pricing depends on the implant brand, your bone condition and the crown material chosen. We share a transparent, written estimate after your consultation, with no surprises later.",
    },
    {
      question: "What are clear aligners and how do they work?",
      answer:
        "Clear aligners are virtually invisible, custom-made trays that gently shift your teeth into the right position. You wear a new set every 1–2 weeks, and each set moves your teeth a little closer to the final smile — no metal wires, no brackets.",
    },
    {
      question: "How much do clear aligners cost at Dentciti?",
      answer:
        "Aligner treatment at Dentciti starts from ₹75,000 and varies based on case complexity and the aligner brand chosen (Invisalign, ClearPath, etc.). After a free consultation and 3D scan, we share a transparent fixed-cost plan with no hidden charges.",
    },
    {
      question: "Is root canal treatment really painful?",
      answer:
        "Not anymore. With modern rotary endodontics, rubber-dam isolation and digital X-ray, most root canals at Dentciti are completed in a single sitting and are virtually painless under local anesthesia. You'll feel the same as you would for a regular filling.",
    },
    {
      question: "How often should I visit for a check-up?",
      answer:
        "We recommend a professional cleaning and check-up every 6 months. Catching issues early prevents bigger and costlier treatments later — and most preventive visits are quick, painless and inexpensive.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-white" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-eyebrow mb-3">Common Questions</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
            Frequently Asked <span className="text-gradient-blue">Questions</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-light">
            Everything you need to know before booking your consultation.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const open = openFAQ === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-[#2A93C7]/30 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 md:p-7 text-left font-bold hover:bg-[#F5FAFD] transition-colors flex justify-between items-center group"
                  aria-expanded={open}
                >
                  <span className="flex-grow pr-4 text-base md:text-lg text-slate-800 group-hover:text-[#0F2A40] transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full border border-[#2A93C7]/20 flex items-center justify-center text-[#2A93C7] transform transition-all duration-300 shrink-0 ${
                      open ? 'rotate-180 bg-[#2A93C7] text-white border-[#2A93C7]' : 'group-hover:border-[#2A93C7]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-7 md:px-7 md:pb-8 bg-white">
                        <div className="w-full h-px bg-slate-100 mb-6"></div>
                        <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed mb-6">
                          {faq.answer}
                        </p>
                        <button
                          onClick={onBookAppointment}
                          className="inline-flex items-center gap-2 text-[#2A93C7] font-bold text-base hover:gap-3 transition-all group/btn"
                        >
                          Book Your Consultation
                          <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
