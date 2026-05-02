import React from 'react';

export default function AboutSection() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-[#fdf7fc]">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#964782] mb-8 tracking-tight">Welcome to Beaudent Dental Care</h2>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
                        At <strong>Beaudent Dental Care</strong> in Pune, we believe every smile tells a story. Our clinic is dedicated to providing premium endodontic and comprehensive dental care using the latest digital technology and a patient-first approach.
                    </p>
                </div>

                <div className="bg-white p-10 md:p-16 rounded-[32px] shadow-premium border border-white/50 mb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full -mr-32 -mt-32"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#964782] mb-8 tracking-tight">Advanced Endodontics & Laser Dentistry</h3>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                            Our clinic is led by <strong>Dr. Ankita Nagrani</strong>, an expert <strong>Endodontist</strong>.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed font-light">
                            With 8–10 years of experience, Dr. Nagrani specializes in root canals, laser dentistry, and advanced 3D scanning technology to ensure precise and painless treatments.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-t-4 border-[#964782]">
                        <h3 className="text-xl md:text-2xl font-bold text-[#964782] mb-4">Key Specializations</h3>
                        <ul className="grid grid-cols-1 gap-3">
                            {[
                                "Root Canal Treatment",
                                "Laser Dentistry",
                                "3D Scanning Technology",
                                "Dental Implants",
                                "State-of-the-art Equipment",
                                "Painless Dentistry"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                    <span className="text-[#964782] text-xl">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-t-4 border-[#964782]">
                        <h3 className="text-xl md:text-2xl font-bold text-[#964782] mb-4">Meet Our Expert</h3>
                        <div className="space-y-4">
                            <p className="font-bold text-xl text-gray-900">Dr. Ankita Nagrani</p>
                            <ul className="space-y-3">
                                {[
                                    "Endodontist",
                                    "8–10 Years Experience",
                                    "Laser Dentistry Expert",
                                    "Advanced 3D Tech User"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                        <span className="text-[#964782] text-xl">🦷</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

