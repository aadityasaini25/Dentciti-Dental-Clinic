'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone, MapPin } from "lucide-react";

interface HeaderProps {
  onBookAppointment: () => void;
}

// Sticky glass header. Switches to opaque + shadow once user scrolls past 20px.
export default function Header({ onBookAppointment }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-header scrolled py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <div className="bg-white p-1.5 md:p-2 rounded-xl shadow-md ring-1 ring-[#2A93C7]/10">
            <Image
              src="/images/logo.jpg"
              alt="Dentciti Dental Clinic"
              width={160}
              height={60}
              className="h-10 md:h-14 w-auto"
              priority
            />
          </div>
          <div className="hidden lg:block">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-0.5 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Location
            </p>
            <a
              href="https://maps.app.goo.gl/gbsegEcgFDa8fURH9"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[11px] leading-tight font-semibold text-slate-700 max-w-[280px] hover:text-[#2A93C7] transition-colors"
            >
              Shop 52, Shiv Centre,<br />
              Sector 17, Vashi, Navi Mumbai
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden sm:block text-right">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-0.5">Contact Us</p>
            <div className="flex flex-col">
              <a
                href="tel:+919320450006"
                className="text-sm font-bold text-[#0F2A40] hover:text-[#2A93C7] transition-colors flex items-center justify-end gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                +91 93204 50006
              </a>
              <a
                href="mailto:dentciti@gmail.com"
                className="text-[11px] font-medium text-slate-600 hover:text-[#2A93C7] transition-colors"
              >
                dentciti@gmail.com
              </a>
            </div>
          </div>
          <button
            onClick={onBookAppointment}
            className="bg-[#2A93C7] text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#1E7AAC] hover:shadow-[0_10px_30px_-8px_rgba(42,147,199,0.6)] hover:-translate-y-0.5 transition-all shadow-md"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
