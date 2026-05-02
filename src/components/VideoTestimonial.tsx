export default function VideoTestimonial() {
  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Patient Stories</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Hear directly from our satisfied patients about their experience at Beaudent Dental Care.
          </p>
        </div>

        <div className="bg-white border rounded-lg p-0 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 justify-items-center">
            <img
              src="/images/patent1.jpeg"
              alt="Testimonial 1"
              className="w-full h-auto object-cover md:rounded-lg md:shadow-md"
            />
            <img
              src="/images/Patient photos 5.jpeg"
              alt="Testimonial 2"
              className="w-full h-auto object-cover md:rounded-lg md:shadow-md"
            />
            <img
              src="/images/patent3.jpeg"
              alt="Testimonial 3"
              className="w-full h-auto object-cover md:rounded-lg md:shadow-md"
            />
            <img
              src="/images/Patient photos 6.jpeg"
              alt="Testimonial 4"
              className="w-full h-auto object-cover md:rounded-lg md:shadow-md"
            />
          </div>
        </div>
      </div>
    </section >
  );
}
