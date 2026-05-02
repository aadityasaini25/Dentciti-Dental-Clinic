import Image from 'next/image';

interface TransformingSmilesProps {
  onBookAppointment: () => void;
}

export default function TransformingSmiles({ onBookAppointment }: TransformingSmilesProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-2">
        <u>Transforming Smiles</u>
      </h2>
      <p className="text-center text-orange-500 font-bold mb-6 md:text-lg">
        Witness the before and after the magic of our Painless Dental Implants!
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-100 rounded-xl p-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-xl p-2 w-full">
                  <div className="relative w-full min-h-[160px] md:min-h-[192px] max-h-[400px]">
                    <Image
                      src={
                        i === 1 ? `/img/before-after/before1.jpg` :
                        i === 2 ? `/img/before-after/b2.jpg` :
                        i === 3 ? `/img/before-after/b3.jpg` :
                        `/img/before-after/before4.jpg`
                      }
                      alt={`Before Smile ${i}`}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <span className="text-sm mt-2 text-gray-600 font-medium">Before</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-xl p-2 w-full">
                  <div className="relative w-full min-h-[160px] md:min-h-[192px] max-h-[400px]">
                    <Image
                      src={
                        i === 1 ? `/img/before-after/after1.jpg` :
                        i === 2 ? `/img/before-after/a2.jpg` :
                        i === 3 ? `/img/before-after/a3.jpg` :
                        `/img/before-after/after4.jpg`
                      }
                      alt={`After Smile ${i}`}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <span className="text-sm mt-2 text-gray-600 font-medium">After</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center my-6 md:text-lg max-w-3xl mx-auto">
        Ready to witness the enchanting before-and-after journey?<br />
        Explore the magic of your potential new smile today!
      </p>

      <div className="max-w-3xl mx-auto">
        <div>
          <div className="bg-gray-200 rounded-xl overflow-hidden mb-4 relative" style={{ paddingBottom: '133.33%' }}>
            <video
              src="/videos/2.mp4"
              controls
              className="absolute inset-0 w-full h-full object-cover"
              poster="/videos/1-thumbnail.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <button onClick={onBookAppointment} className="bg-[#5d2350] text-white py-3 px-6 rounded-lg font-bold w-full mb-2">
            Request a Call back ➤
          </button>
          <small className="block text-center text-gray-600">
            Professional Consultation & Digital scan
          </small>
        </div>
      </div>
    </section>
  );
}