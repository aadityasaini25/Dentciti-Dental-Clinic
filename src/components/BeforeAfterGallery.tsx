'use client';

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {
  const localVideos = [
    {
      src: "/videos/'I was here for my gaps... and  now it's all resolved!' 🥳There is no better feeling than the da.mp4#t=0.1",
      poster: "/images/patent1.jpeg",
      title: "Smile Transformation - Gap Closure"
    },
    {
      src: "/videos/A positive patient experience defines quality dental care. Patient satisfaction is at the heart .mp4#t=0.1",
      poster: "/images/patent3.jpeg",
      title: "Patient Experience & Quality Care"
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-[#fdf7fc]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="text-[#964782] text-sm md:text-base font-medium mb-2">
            Beaudent Dental Care
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Patient Success Stories
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full mb-12">
          {localVideos.map((video, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-[9/16] md:aspect-video group flex items-center justify-center">
                <video
                  className="w-full h-full object-contain"
                  src={video.src}
                  poster={video.poster}
                  controls
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 left-4 bg-[#964782] text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm opacity-90 font-bold z-10">
                  Patient Story {index + 1}
                </div>
              </div>
              <p className="mt-4 text-center text-gray-700 font-medium italic">"{video.title}"</p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-lg mt-8 border border-[#964782]/10">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Ready for Your <span className="text-[#964782]">Smile Transformation?</span>
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who have transformed their smiles with Dr. Ankita Nagrani&apos;s expertise. Book your consultation today and take the first step towards your dream smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookAppointment}
              className="bg-[#964782] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#7a326a] transition-colors"
            >
              Book Consultation
            </button>
            <a
              href="tel:+918788305936"
              className="bg-[#301b2a] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#1f111b] transition-colors text-center"
            >
              Call Now: +91 87883 05936
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Professional consultation includes digital scan
          </p>
        </div>
      </div>
    </section>
  );
}
