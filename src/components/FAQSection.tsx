'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  onBookAppointment: () => void;
}

type FAQCategory = 'laser' | 'laparoscopic';

// Two-tab FAQ — surgical-context (laser proctology + laparoscopy) instead of dental.
export default function FAQSection({ onBookAppointment }: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('laser');
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const laserFAQs = [
    {
      question: "Is laser surgery for piles really painless?",
      answer:
        "Almost. Laser piles surgery is performed under short-acting anesthesia and uses focused laser energy instead of cuts or stitches. Most patients describe only mild discomfort post-procedure, manageable with simple oral medication, and resume routine work within 24–48 hours.",
    },
    {
      question: "How long does the laser procedure take?",
      answer:
        "Most laser treatments — for piles, fistula, fissure, or varicose veins — are completed in 30–45 minutes. Patients are usually discharged the same day after a brief observation period.",
    },
    {
      question: "Will laser treatment leave scars?",
      answer:
        "No. Laser procedures are virtually scarless. There are no large surgical incisions, no external stitches, and the laser fiber is introduced through tiny natural openings, leaving no visible mark.",
    },
    {
      question: "Are laser treatments covered under insurance?",
      answer:
        "Yes. Isha-Para Clinic accepts all major insurance providers and TPAs. Our administrative team takes care of pre-authorization, claims and discharge paperwork so your treatment is fully cashless.",
    },
    {
      question: "What is the recurrence rate after laser surgery?",
      answer:
        "Modern laser treatment has significantly lower recurrence rates compared to traditional open surgery. With Dr. Deepak Kumar's experience and proper post-procedure care guidance, long-term results are excellent.",
    },
    {
      question: "How soon can I return to work after laser piles surgery?",
      answer:
        "Most patients resume desk work within 24–48 hours and physically demanding work within 5–7 days. You will receive a personalized recovery plan after your procedure.",
    },
  ];

  const laparoscopicFAQs = [
    {
      question: "What is laparoscopic surgery?",
      answer:
        "Laparoscopic (or 'keyhole') surgery is a minimally invasive technique where the surgeon operates through a few small 5–10 mm incisions using a camera and specialized instruments — instead of one large open cut.",
    },
    {
      question: "Is laparoscopic gallstone or hernia surgery safe?",
      answer:
        "Yes — it is now the gold standard for both procedures. With Dr. Deepak Kumar's 25+ years of operative experience, laparoscopic surgery here delivers excellent outcomes with smaller incisions, less pain and quicker discharge.",
    },
    {
      question: "How long is the hospital stay?",
      answer:
        "Most laparoscopic procedures (gallbladder, appendix, hernia repair) require only a 1-day hospital stay. Many simpler cases are managed as day-care surgeries with same-day discharge.",
    },
    {
      question: "Will I have visible scars after laparoscopic surgery?",
      answer:
        "Scars from laparoscopic surgery are very small (5–10 mm) and tend to fade significantly over a few months. They are far less visible than traditional open-surgery scars.",
    },
    {
      question: "What is the recovery time?",
      answer:
        "Most patients are walking within hours, eating normally within a day, and return to routine work in 5–10 days. A full personalized recovery roadmap is shared at discharge.",
    },
    {
      question: "Is laparoscopic surgery covered by insurance?",
      answer:
        "Yes. All laparoscopic procedures are covered under most health insurance policies and TPAs. Cashless treatment and pre-authorization are fully handled by our team.",
    },
  ];

  const currentFAQs = activeCategory === 'laser' ? laserFAQs : laparoscopicFAQs;

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
            Frequently Asked <span className="text-gradient-teal">Questions</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-light">
            Everything you need to know before booking your consultation.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12 p-1.5 bg-[#E6F2F2] rounded-2xl max-w-md mx-auto border border-[#0E7C7B]/15">
          <button
            onClick={() => handleCategoryChange('laser')}
            className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
              activeCategory === 'laser'
                ? 'bg-[#0A2540] text-white shadow-lg'
                : 'text-[#0A2540] hover:bg-white/60'
            }`}
          >
            Laser Treatment
          </button>
          <button
            onClick={() => handleCategoryChange('laparoscopic')}
            className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
              activeCategory === 'laparoscopic'
                ? 'bg-[#0A2540] text-white shadow-lg'
                : 'text-[#0A2540] hover:bg-white/60'
            }`}
          >
            Laparoscopy
          </button>
        </div>

        <div className="space-y-4">
          {currentFAQs.map((faq, index) => {
            const open = openFAQ === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-[#0E7C7B]/30 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 md:p-7 text-left font-bold hover:bg-[#F4F9F9] transition-colors flex justify-between items-center group"
                  aria-expanded={open}
                >
                  <span className="flex-grow pr-4 text-base md:text-lg text-slate-800 group-hover:text-[#0A2540] transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full border border-[#0E7C7B]/20 flex items-center justify-center text-[#0E7C7B] transform transition-all duration-300 shrink-0 ${
                      open ? 'rotate-180 bg-[#0E7C7B] text-white border-[#0E7C7B]' : 'group-hover:border-[#0E7C7B]'
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
                          className="inline-flex items-center gap-2 text-[#0E7C7B] font-bold text-base hover:gap-3 transition-all group/btn"
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
