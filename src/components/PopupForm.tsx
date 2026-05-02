'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BOOKING_SCRIPT_URL = process.env.NEXT_PUBLIC_BOOKING_SCRIPT_URL || '';

const TREATMENT_OPTIONS = [
  'Dental Implants',
  'Smile Makeover / Veneers',
  'Root Canal Treatment',
  'Braces / Clear Aligners',
  'Teeth Whitening',
  'General Consultation',
] as const;

// Booking modal — dental treatment selector.
// A11y: Escape closes, click-outside closes, focus moved into the modal.
export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [treatmentType, setTreatmentType] = useState<string>(TREATMENT_OPTIONS[0]);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  // Close on Escape + initial focus
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    firstFieldRef.current?.focus();
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('fullName') as string,
      phone: formData.get('phoneNumber') as string,
      email: formData.get('email') as string,
      treatment: treatmentType,
      concern: formData.get('concern') as string,
    };

    setIsSubmitting(true);
    try {
      if (BOOKING_SCRIPT_URL.trim()) {
        await fetch(BOOKING_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      }
      onClose();
      router.push('/thank-you');
    } catch {
      alert('Something went wrong. Please call us at +91 93204 50006 to book.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-[#081827]/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="bg-white rounded-[36px] shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto relative border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#2A93C7] hover:text-white transition-all duration-300 z-10"
              aria-label="Close booking form"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-7 md:p-12">
              <div className="text-center mb-8">
                <p className="section-eyebrow mb-2">Book Your Appointment</p>
                <h2 id="popup-title" className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  Consultation with <span className="text-gradient-blue">Dr. Shubhra Sharma</span>
                </h2>
                <p className="text-slate-500 text-sm mt-3 font-light">
                  21+ years of clinical excellence · Painless · Fast · Affordable
                </p>
              </div>

              {/* Treatment selector */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Treatment of interest
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {TREATMENT_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setTreatmentType(opt)}
                      className={`text-left text-xs md:text-sm font-semibold px-4 py-3 rounded-xl border transition-all ${
                        treatmentType === opt
                          ? 'bg-[#0F2A40] text-white border-[#0F2A40] shadow-md'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-[#2A93C7] hover:text-[#2A93C7]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    ref={firstFieldRef}
                    type="text"
                    name="fullName"
                    required
                    placeholder="Full Name"
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:border-[#2A93C7] focus:bg-white focus:ring-4 focus:ring-[#2A93C7]/15 transition-all text-slate-800 font-medium placeholder:text-slate-400"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    pattern="[0-9+\s-]{10,15}"
                    placeholder="Phone Number"
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:border-[#2A93C7] focus:bg-white focus:ring-4 focus:ring-[#2A93C7]/15 transition-all text-slate-800 font-medium placeholder:text-slate-400"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:border-[#2A93C7] focus:bg-white focus:ring-4 focus:ring-[#2A93C7]/15 transition-all text-slate-800 font-medium placeholder:text-slate-400"
                />

                <textarea
                  name="concern"
                  required
                  rows={3}
                  placeholder="Briefly describe your dental concern or what you'd like to discuss..."
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:border-[#2A93C7] focus:bg-white focus:ring-4 focus:ring-[#2A93C7]/15 transition-all text-slate-800 font-medium placeholder:text-slate-400 resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-[#2A93C7] to-[#0F2A40] text-white py-5 rounded-2xl font-black text-lg shadow-2xl hover:shadow-[#2A93C7]/40 active:scale-[0.99] transition-all disabled:opacity-70 disabled:pointer-events-none"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Confirm My Appointment
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </form>

              <p className="mt-6 text-center text-slate-400 text-xs font-medium">
                🔒 Your information is private &amp; secure. We&apos;ll call within 2 hours to confirm.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
