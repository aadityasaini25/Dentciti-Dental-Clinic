'use client';

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OfferSection from "@/components/OfferSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorProfile from "@/components/DoctorProfile";
import ServiceHighlights from "@/components/ServiceHighlights";
import FAQSection from "@/components/FAQSection";
import ClinicPhotos from "@/components/ClinicPhotos";
import GoogleReviews from "@/components/GoogleReviews";
import CTABox from "@/components/CTABox";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import PopupForm from "@/components/PopupForm";
import BackgroundGraphics from "@/components/BackgroundGraphics";

// ── Tunables ──────────────────────────────────────────────────────────
const STICKY_CTA_THRESHOLD = 300;            // px scrolled before sticky CTA appears
const POPUP_DELAY_MS = 12_000;               // delay before booking popup auto-opens

export default function Home() {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Sticky CTA appears once user scrolls past threshold.
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > STICKY_CTA_THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Booking popup auto-opens after a delay so visitors can engage with the page first.
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll while modal is open.
  useEffect(() => {
    if (!showPopup) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showPopup]);

  // Reveal sections on scroll via IntersectionObserver (paired with .fade-up CSS).
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.05 }
    );

    document.querySelectorAll('section, .fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <div className="bg-mist min-h-screen overflow-x-hidden max-w-[100vw]">
      <BackgroundGraphics />

      <div className="relative z-10 overflow-x-hidden">
        <Header onBookAppointment={openPopup} />
        <HeroSection onBookAppointment={openPopup} />
        <OfferSection onBookAppointment={openPopup} />
        <WhyChooseUs />
        <DoctorProfile onBookAppointment={openPopup} />
        <ServiceHighlights />
        <FAQSection onBookAppointment={openPopup} />
        <ClinicPhotos onBookAppointment={openPopup} />
        <GoogleReviews />
        <CTABox onBookAppointment={openPopup} />
        <Footer />
      </div>

      <StickyCTA isVisible={showStickyCta} onBookAppointment={openPopup} />
      <PopupForm isOpen={showPopup} onClose={closePopup} />
    </div>
  );
}
