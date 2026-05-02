'use client';

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#061B2E] border-t border-white/5 pt-12 pb-6 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="bg-white p-3 md:p-4 rounded-2xl inline-block mb-5 shadow-2xl">
            <Image
              src="/images/logo.svg"
              alt="Isha-Para Clinic"
              width={160}
              height={60}
              className="h-10 md:h-14 w-auto"
            />
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
            <span className="text-white font-semibold">Isha-Para Clinic</span> — Advanced laser & laparoscopic surgery in Haridwar, led by Dr. Deepak Kumar with 25+ years of trusted surgical experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-12">
          {/* Contact */}
          <div className="space-y-3">
            <h3 className="font-bold text-white text-base border-b border-white/10 pb-2 flex items-center gap-2 justify-center md:justify-start">
              <Phone className="w-4 h-4 text-[#C9A961]" /> Contact Us
            </h3>
            <div className="space-y-2 mt-3">
              <a href="tel:+919756788082" className="block text-[#C9A961] font-bold text-lg hover:text-[#E6CF94] transition-colors">
                +91 97567 88082
              </a>
              <a href="tel:+919456190901" className="block text-slate-300 font-medium text-sm hover:text-[#C9A961] transition-colors">
                +91 94561 90901
              </a>
              <a href="tel:+918445453909" className="block text-slate-400 text-xs hover:text-[#C9A961] transition-colors">
                Patient Helpline · +91 84454 53909
              </a>
              <a
                href="mailto:myfamilydentists@gmail.com"
                className="text-xs hover:text-[#C9A961] transition-colors block flex items-center gap-1.5 justify-center md:justify-start mt-2"
              >
                <Mail className="w-3 h-3" />
                myfamilydentists@gmail.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <h3 className="font-bold text-white text-base border-b border-white/10 pb-2 flex items-center gap-2 justify-center md:justify-start">
              <Clock className="w-4 h-4 text-[#C9A961]" /> Clinic Hours
            </h3>
            <div className="text-slate-300 space-y-2 text-sm mt-3">
              <div>
                <p className="font-bold text-[#C9A961] text-xs uppercase tracking-wider">Monday – Saturday</p>
                <p className="font-medium">9:00 AM – 10:30 AM</p>
                <p className="font-medium">7:00 PM – 10:30 PM</p>
              </div>
              <div className="pt-1">
                <p className="font-bold text-[#C9A961] text-xs uppercase tracking-wider">Sunday</p>
                <p className="font-medium">10:00 AM – 2:00 PM</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-3">
            <h3 className="font-bold text-white text-base border-b border-white/10 pb-2 flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-4 h-4 text-[#C9A961]" /> Our Location
            </h3>
            <a
              href="https://maps.google.com/?q=Isha-Para+Clinic+Near+BSNL+Office+Chowraha+Haridwar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all group block text-sm mt-3"
            >
              <span className="text-slate-300 leading-relaxed group-hover:text-[#C9A961] transition-colors block">
                D-21, Isha-Para Clinic,
                <br />
                Near BSNL Office Chowraha,
                <br />
                Haridwar, Uttarakhand
              </span>
            </a>
            <a
              href="https://id.vyaparify.com/drdeepak-kumar-general-surgeon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-[#C9A961] transition-colors flex items-center gap-1.5 justify-center md:justify-start mt-3"
            >
              <Globe className="w-3 h-3" />
              View Online Profile
            </a>
          </div>
        </div>

        {/* Trust + Map */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-white/[0.04] p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="font-bold text-white mb-3 text-sm border-b border-white/10 pb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C9A961]" /> Insurance &amp; Payment
            </h3>
            <ul className="grid grid-cols-2 gap-2 mt-3">
              {[
                "All TPA Networks",
                "Cashless Treatment",
                "EMI Options Available",
                "UPI · Card · Cash",
                "Health Insurance Claims",
                "Pre-auth Support",
              ].map((method) => (
                <li
                  key={method}
                  className="flex items-center gap-2 text-slate-300 text-xs"
                >
                  <span className="w-1 h-1 rounded-full bg-[#C9A961]" />
                  {method}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/[0.04] rounded-2xl overflow-hidden h-[200px] shadow-inner border border-white/10">
            <iframe
              src="https://www.google.com/maps?q=Near+BSNL+Office+Chowraha+Haridwar&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Isha-Para Clinic — Haridwar"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-slate-500 text-[11px] sm:text-xs">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-slate-300 font-semibold">Isha-Para Clinic</span> · Dr. Deepak Kumar. All rights reserved.
          </p>
          <p className="mt-1 text-slate-600">
            Information on this site is for educational purposes only and does not replace medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
