'use client';

import Image from 'next/image';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F4F9F9] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        <div className="bg-gradient-to-r from-[#0E7C7B] to-[#0A2540] p-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            Thank You!
          </h1>
          <p className="text-white/90 text-lg font-light">
            Your appointment request has been received
          </p>
        </div>

        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="w-44 h-44 relative rounded-full overflow-hidden border-4 border-[#E6F2F2] shadow-lg shrink-0 bg-gradient-to-br from-[#0E7C7B] to-[#0A2540]">
              <Image
                src="/images/doctor/dr. deepak.png"
                alt="Dr. Deepak Kumar"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 tracking-tight">
                Dr. Deepak Kumar
              </h2>
              <p className="text-[#0E7C7B] font-semibold mb-4 text-sm uppercase tracking-widest">
                Senior Laser & Laparoscopic Surgeon
              </p>
              <p className="text-slate-600 max-w-lg font-light leading-relaxed">
                Our team will review your appointment request and call you within <span className="font-semibold text-slate-800">2 hours</span> to confirm a time that works for you. You can also reach us directly at the number below.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">
              What happens next?
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { n: 1, t: "We review your request within 2 hours" },
                { n: 2, t: "Our team calls you to confirm the slot" },
                { n: 3, t: "You receive an SMS / email with details" },
              ].map((step) => (
                <div key={step.n} className="bg-[#F4F9F9] p-5 rounded-2xl text-center border border-slate-100">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#0E7C7B] to-[#0A2540] flex items-center justify-center text-white font-black text-sm">
                    {step.n}
                  </div>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{step.t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick info */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            <div className="bg-[#F4F9F9] rounded-xl p-4 flex items-start gap-3 border border-slate-100">
              <MapPin className="w-5 h-5 text-[#0E7C7B] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Location</p>
                <p className="text-sm font-semibold text-slate-800">D-21, Isha-Para Clinic</p>
                <p className="text-xs text-slate-500">Near BSNL Office Chowraha, Haridwar</p>
              </div>
            </div>
            <div className="bg-[#F4F9F9] rounded-xl p-4 flex items-start gap-3 border border-slate-100">
              <Clock className="w-5 h-5 text-[#0E7C7B] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Open Hours</p>
                <p className="text-sm font-semibold text-slate-800">Mon–Sat · 9–10:30 AM, 7–10:30 PM</p>
                <p className="text-xs text-slate-500">Sunday · 10 AM – 2 PM</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919756788082"
              className="inline-flex justify-center items-center px-7 py-3.5 bg-[#0E7C7B] text-white font-semibold rounded-full hover:bg-[#0B5F5E] transition-all gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call +91 97567 88082
            </a>
            <a
              href="/"
              className="inline-flex justify-center items-center px-7 py-3.5 bg-white text-[#0A2540] font-semibold rounded-full border-2 border-slate-200 hover:border-[#0E7C7B] hover:text-[#0E7C7B] transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
