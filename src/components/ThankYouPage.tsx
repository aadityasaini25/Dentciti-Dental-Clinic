'use client';

import Image from 'next/image';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F5FAFD] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        <div className="bg-gradient-to-r from-[#2A93C7] to-[#0F2A40] p-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            Thank You!
          </h1>
          <p className="text-white/90 text-lg font-light">
            Your appointment request has been received
          </p>
        </div>

        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="w-44 h-44 relative rounded-full overflow-hidden border-4 border-[#E5F3FB] shadow-lg shrink-0 bg-gradient-to-br from-[#2A93C7] to-[#0F2A40]">
              <Image
                src="/images/doctor/dr-shubhra.jpg"
                alt="Dr. Shubhra Sharma"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 tracking-tight">
                Dr. Shubhra Sharma
              </h2>
              <p className="text-[#2A93C7] font-semibold mb-4 text-sm uppercase tracking-widest">
                Cosmetic Dentist &amp; Implantologist
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
                <div key={step.n} className="bg-[#F5FAFD] p-5 rounded-2xl text-center border border-slate-100">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#2A93C7] to-[#0F2A40] flex items-center justify-center text-white font-black text-sm">
                    {step.n}
                  </div>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{step.t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick info */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            <div className="bg-[#F5FAFD] rounded-xl p-4 flex items-start gap-3 border border-slate-100">
              <MapPin className="w-5 h-5 text-[#2A93C7] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Location</p>
                <p className="text-sm font-semibold text-slate-800">Shop 52, Shiv Centre</p>
                <p className="text-xs text-slate-500">Sector 17, Vashi, Navi Mumbai</p>
              </div>
            </div>
            <div className="bg-[#F5FAFD] rounded-xl p-4 flex items-start gap-3 border border-slate-100">
              <Clock className="w-5 h-5 text-[#2A93C7] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Open Hours</p>
                <p className="text-sm font-semibold text-slate-800">Mon–Sat · 10:30 AM – 1:30 PM</p>
                <p className="text-xs text-slate-500">Evenings · 5:00 PM – 9:00 PM</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919320450006"
              className="inline-flex justify-center items-center px-7 py-3.5 bg-[#2A93C7] text-white font-semibold rounded-full hover:bg-[#1E7AAC] transition-all gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call +91 93204 50006
            </a>
            <a
              href="/"
              className="inline-flex justify-center items-center px-7 py-3.5 bg-white text-[#0F2A40] font-semibold rounded-full border-2 border-slate-200 hover:border-[#2A93C7] hover:text-[#2A93C7] transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
