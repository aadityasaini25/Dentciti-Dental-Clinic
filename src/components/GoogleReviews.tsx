'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Surgical-context patient testimonials. Replace with real Google reviews when collected.
const reviews = [
  {
    name: "Rajesh Verma",
    initials: "RV",
    date: "Recent",
    review:
      "I had laser piles surgery with Dr. Deepak Kumar after suffering for years. The procedure was painless and I was back home the same evening. Within 2 days I was walking comfortably and back to work in a week. Highly recommended for anyone hesitating about surgery.",
  },
  {
    name: "Sunita Sharma",
    initials: "SS",
    date: "Recent",
    review:
      "I had laparoscopic gallbladder surgery here. Dr. Deepak Kumar explained everything patiently before and after. The clinic is very clean, the staff is supportive, and my insurance was processed cashless without any hassle. Recovery was much faster than I expected.",
  },
  {
    name: "Mohit Aggarwal",
    initials: "MA",
    date: "Recent",
    review:
      "Got my hernia surgery done laparoscopically. Just three small scars and zero pain after the second day. Dr. Deepak Kumar's experience really shows — he handles everything with calm confidence. The TPA team handled all my insurance paperwork.",
  },
  {
    name: "Priya Joshi",
    initials: "PJ",
    date: "Recent",
    review:
      "I came in for varicose veins laser treatment. The team was professional and respectful throughout. The procedure was quick, walk-in walk-out. Within a few weeks the veins were almost completely gone. Truly grateful to Dr. Kumar and his team.",
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
            What Our <span className="text-gradient-teal">Patients Say</span>
          </h2>
        </div>
        <div className="w-16 h-0.5 bg-[#C9A961] rounded-full mb-4" />
        <p className="text-slate-600 max-w-2xl mb-14 font-light text-base md:text-lg">
          Real outcomes, in our patients' own words.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-[#0E7C7B]/30 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-lg bg-gradient-to-br from-[#0E7C7B] to-[#0A2540] shadow-md shrink-0">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 leading-tight">{review.name}</h3>
                  <p className="text-sm text-slate-500 mt-1">{review.date}</p>
                </div>
              </div>
              <div className="flex text-[#C9A961] mb-4 gap-0.5">
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
