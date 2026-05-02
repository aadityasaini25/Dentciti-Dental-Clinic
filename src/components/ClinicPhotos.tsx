'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  const clinicImages = [
    { src: '/images/clinic/1.jpeg', alt: '' },
    { src: '/images/clinic/2.jpeg', alt: '' },
    { src: '/images/clinic/3.jpeg', alt: '' },
    { src: '/images/clinic/4.jpeg', alt: '' },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-[#F5FAFD]" id="gallery">
      <div className="max-w-[95%] 2xl:max-w-screen-2xl mx-auto w-full">
        <p className="section-eyebrow mb-2">Our Clinic</p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Inside <span className="text-gradient-blue">Dentciti Dental Clinic</span>
        </h2>
        <div className="w-16 h-0.5 bg-[#F5D548] rounded-full mb-4" />
        <p className="text-slate-600 max-w-2xl mb-12 font-light text-base md:text-lg">
          Shop 52, Shiv Centre, Sector 17, Vashi, Navi Mumbai (Behind Everest Cycle).
          <br />
          <span className="text-sm font-medium opacity-80">A modern, sterile and welcoming clinical environment built around patient comfort and clinical precision.</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {clinicImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-lg group border-4 border-white hover:shadow-2xl transition-shadow duration-500"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A40]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={onBookAppointment} className="btn-primary">
            Visit Our Clinic
          </button>
        </div>
      </div>
    </section>
  );
}
