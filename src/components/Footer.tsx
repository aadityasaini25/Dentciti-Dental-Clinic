'use client';

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#081827] border-t border-white/5 pt-12 pb-6 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="bg-white p-3 md:p-4 rounded-2xl inline-block mb-5 shadow-2xl">
            <Image
              src="/images/logo.jpg"
              alt="Dentciti Dental Clinic"
              width={160}
              height={60}
              className="h-10 md:h-14 w-auto"
            />
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
            <span className="text-white font-semibold">Dentciti Dental Clinic</span> — Premium painless dentistry in Vashi, Navi Mumbai, led by Dr. Shubhra Sharma with 21+ years of trusted clinical experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-12">
          {/* Contact */}
          <div className="space-y-3">
            <h3 className="font-bold text-white text-base border-b border-white/10 pb-2 flex items-center gap-2 justify-center md:justify-start">
              <Phone className="w-4 h-4 text-[#F5D548]" /> Contact Us
            </h3>
            <div className="space-y-2 mt-3">
              <a href="tel:+919320450006" className="block text-[#F5D548] font-bold text-lg hover:text-[#FBE783] transition-colors">
                +91 93204 50006
              </a>
              <a href="tel:+919221405506" className="block text-slate-300 font-medium text-sm hover:text-[#F5D548] transition-colors">
                +91 92214 05506
              </a>
              <a
                href="mailto:dentciti@gmail.com"
                className="text-xs hover:text-[#F5D548] transition-colors flex items-center gap-1.5 justify-center md:justify-start mt-2"
              >
                <Mail className="w-3 h-3" />
                dentciti@gmail.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <h3 className="font-bold text-white text-base border-b border-white/10 pb-2 flex items-center gap-2 justify-center md:justify-start">
              <Clock className="w-4 h-4 text-[#F5D548]" /> Clinic Hours
            </h3>
            <div className="text-slate-300 space-y-2 text-sm mt-3">
              <div>
                <p className="font-bold text-[#F5D548] text-xs uppercase tracking-wider">Monday – Saturday</p>
                <p className="font-medium">10:30 AM – 1:30 PM</p>
                <p className="font-medium">5:00 PM – 9:00 PM</p>
              </div>
              <div className="pt-1">
                <p className="font-bold text-slate-400 text-xs uppercase tracking-wider">Sunday</p>
                <p className="font-medium text-slate-400">Closed</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-3">
            <h3 className="font-bold text-white text-base border-b border-white/10 pb-2 flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-4 h-4 text-[#F5D548]" /> Our Location
            </h3>
            <a
              href="https://maps.app.goo.gl/gbsegEcgFDa8fURH9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all group block text-sm mt-3"
            >
              <span className="text-slate-300 leading-relaxed group-hover:text-[#F5D548] transition-colors block">
                Shop 52, Shiv Centre,
                <br />
                Sector 17, Vashi,
                <br />
                Navi Mumbai
                <br />
                <span className="text-xs text-slate-400">(Behind Everest Cycle)</span>
              </span>
            </a>
            <a
              href="https://maps.app.goo.gl/gbsegEcgFDa8fURH9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-[#F5D548] transition-colors flex items-center gap-1.5 justify-center md:justify-start mt-3"
            >
              <Globe className="w-3 h-3" />
              dentciti.org
            </a>
          </div>
        </div>

        {/* Trust + Map */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-white/[0.04] p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="font-bold text-white mb-3 text-sm border-b border-white/10 pb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F5D548]" /> Why Patients Choose Us
            </h3>
            <ul className="grid grid-cols-2 gap-2 mt-3">
              {[
                "21+ Years Experience",
                "Implants from ₹25,000",
                "Painless Treatments",
                "Single-Sitting Procedures",
                "Transparent Pricing",
                "Family Dental Care",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-slate-300 text-xs"
                >
                  <span className="w-1 h-1 rounded-full bg-[#F5D548]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/[0.04] rounded-2xl overflow-hidden h-[200px] shadow-inner border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7722539.201543805!2d63.24554443359374!3d19.07379935200273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c149d65d94bf%3A0x56fb6ab98d4cad09!2sDentciti%20Clinic!5e0!3m2!1sen!2sin!4v1777725888884!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dentciti Dental Clinic — Vashi, Navi Mumbai"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-slate-500 text-[11px] sm:text-xs">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-slate-300 font-semibold">Dentciti Dental Clinic</span> · Dr. Shubhra Sharma. All rights reserved.
          </p>
          <p className="mt-1 text-slate-600">
            Information on this site is for educational purposes only and does not replace professional dental advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
