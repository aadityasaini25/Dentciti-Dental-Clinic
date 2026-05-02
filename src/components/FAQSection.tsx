'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  onBookAppointment: () => void;
}

type FAQCategory = 'implants' | 'general';

// Two-tab FAQ — dental implants + general dentistry, mapped to clinic positioning.
export default function FAQSection({ onBookAppointment }: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('implants');
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const implantFAQs = [
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
      question: "How long does the implant process take?",
      answer:
        "The actual surgery is under an hour. The full process — from placement to final crown — typically takes 3–4 months to allow proper bone integration. In selected cases, immediate-load implants can be done so you walk out the same day with a temporary tooth.",
    },
    {
      question: "Am I a candidate for dental implants?",
      answer:
        "Most adults with reasonably healthy gums and bone are candidates. A short consultation with a digital X-ray or CBCT scan tells us with certainty. Even patients who lack bone often qualify after simple bone grafting procedures.",
    },
    {
      question: "How long do implants last?",
      answer:
        "With proper hygiene and routine check-ups, modern dental implants typically last 15–25 years and often a lifetime. Dentciti uses globally trusted implant systems with strong long-term clinical track records.",
    },
    {
      question: "Do you offer EMI on implants?",
      answer:
        "Yes. We offer flexible EMI plans through partner financing, plus full transparency on what's included in your package. Ask our front desk during consultation and we'll walk you through the options.",
    },
  ];

  const generalFAQs = [
    {
      question: "Is root canal treatment really painful?",
      answer:
        "Not anymore. With modern rotary endodontics, rubber-dam isolation and digital X-ray, most root canals at Dentciti are completed in a single sitting and are virtually painless under local anesthesia. You'll feel the same as you would for a regular filling.",
    },
    {
      question: "How long does professional teeth whitening take?",
      answer:
        "An in-clinic whitening session takes about 45 minutes and delivers visibly brighter teeth in a single visit. We also offer take-home whitening kits for gradual results, depending on your preference and case.",
    },
    {
      question: "Do you treat children?",
      answer:
        "Yes. Dentciti offers full pediatric dental services — preventive check-ups, fluoride application, sealants, kid-friendly fillings and habit counselling — in a calm, fear-free environment that children actually enjoy visiting.",
    },
    {
      question: "How often should I visit for a check-up?",
      answer:
        "We recommend a professional cleaning and check-up every 6 months. Catching issues early prevents bigger and costlier treatments later — and most preventive visits are quick, painless and inexpensive.",
    },
    {
      question: "Do you offer braces and clear aligners?",
      answer:
        "Yes — traditional metal braces, discreet ceramic braces, and invisible clear aligners. Dr. Shubhra Sharma will recommend the best option for your lifestyle, treatment goal and budget after a free orthodontic consultation.",
    },
    {
      question: "Do I need to book in advance, or can I walk in?",
      answer:
        "Walk-ins are welcome but booking ensures zero wait. Call +91 93204 50006 or +91 92214 05506, or use the online booking form to confirm a slot. We'll call back within 2 hours to confirm.",
    },
  ];

  const currentFAQs = activeCategory === 'implants' ? implantFAQs : generalFAQs;

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleCategoryChange = (category: FAQCategory) => {
    setActiveCategory(category);
    setOpenFAQ(0);
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

        {/* Tab switcher */}
        <div className="flex justify-center mb-12 p-1.5 bg-[#E5F3FB] rounded-2xl max-w-md mx-auto border border-[#2A93C7]/15">
          <button
            onClick={() => handleCategoryChange('implants')}
            className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
              activeCategory === 'implants'
                ? 'bg-[#0F2A40] text-white shadow-lg'
                : 'text-[#0F2A40] hover:bg-white/60'
            }`}
          >
            Dental Implants
          </button>
          <button
            onClick={() => handleCategoryChange('general')}
            className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
              activeCategory === 'general'
                ? 'bg-[#0F2A40] text-white shadow-lg'
                : 'text-[#0F2A40] hover:bg-white/60'
            }`}
          >
            General Dentistry
          </button>
        </div>

        <div className="space-y-4">
          {currentFAQs.map((faq, index) => {
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
