import Image from 'next/image';

export default function CelebrityGallery() {
    const celebpics = [
        '/img/celeb/1 celeb photos (1).jpeg',
        '/img/celeb/1 celeb photos (5).jpeg',
        '/img/celeb/1 celeb photos (6).jpeg',
        '/img/celeb/1 celeb photos (8).jpeg',
        '/img/celeb/3 celeb photos (20).jpeg',
        '/img/celeb/3 celeb photos (8).jpeg',
    ];

    return (
        <section className="py-12 px-4 md:px-8 lg:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-[#01659e] mb-2">
                    Celebrity Smiles
                </h2>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                    Trusted by renowned personalities for their dental care needs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {celebpics.map((src, index) => (
                        <div key={index} className="relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                            <Image
                                src={src}
                                alt={`Celebrity Visit ${index + 1}`}
                                fill
                                className="object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
