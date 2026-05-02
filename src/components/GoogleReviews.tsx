'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Dental-context patient testimonials. Replace with real Google reviews when collected.
const reviews = [
  {
    name: "Annvi Shah",
    initials: "AS",
    date: "Recent",
    review:
      "Dr. Shubra is really good at her work. I was really anxious going to the dentist because of my phobia and because I was treated during my pregnancy. But she kept in mind all my concerns and the safety of my baby . It was almost painless and super quick. Would definitely recommend for all your Dental concerns.",
  },
  {
    name: "Pooja Sachdeva",
    initials: "PS",
    date: "Recent",
    review:
      "I visited at Shubhra Sharma denticiti clinic for root canal and capping.she did it very perfectly and ensured that I get assurity that cap get perfectly set. Also their staff members are so humble and nyc in nature.",
  },
  {
    name: "Ashwin Prabhu",
    initials: "AP",
    date: "Recent",
    review:
      "I visited Dr Shubhra Sharma's Denciti dental clinic in Vashi for dental filling and fixing cap. She treated my issues very perfectly. She made sure that I am comfortable after fixing the cap. I truly recommend this clinic for dental treatments.",
  },
  {
    name: "Ari Rajeshwari",
    initials: "AR",
    date: "Recent",
    review:
      "Very very nice experience and treatment after 3 years also still there is no problem shubra mam is so sweet and understanding doctor and staff also very very helpful and nice.",
  },
];

export default function GoogleReviews() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <p className="section-eyebrow mb-2">Testimonials</p>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Image
            src="/images/google.png"
            alt="Google Reviews"
            width={112}
            height={38}
            className="object-contain opacity-90"
          />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            What Our <span className="text-gradient-blue">Patients Say</span>
          </h2>
        </div>
        <div className="w-16 h-0.5 bg-[#F5D548] rounded-full mb-4" />
        <p className="text-slate-600 max-w-2xl mb-14 font-light text-base md:text-lg">
          Real outcomes, in our patients&apos; own words.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-[#2A93C7]/30 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-lg bg-gradient-to-br from-[#2A93C7] to-[#0F2A40] shadow-md shrink-0">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 leading-tight">{review.name}</h3>
                  <p className="text-sm text-slate-500 mt-1">{review.date}</p>
                </div>
              </div>
              <div className="flex text-[#F5D548] mb-4 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed font-light flex-grow text-[15px]">{review.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
