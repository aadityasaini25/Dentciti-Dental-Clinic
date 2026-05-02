import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Dentciti Dental Clinic | Dr. Shubhra Sharma — Cosmetic Dentist & Implantologist, Vashi",
  description:
    "Premium painless dentistry in Vashi, Navi Mumbai. Dr. Shubhra Sharma — 21+ years of expertise in dental implants (from ₹25,000), cosmetic dentistry, single-sitting root canal, braces and aligners. Painless · Fast · Affordable. Book your consultation today.",
  keywords:
    "Dr. Shubhra Sharma, Dentciti Dental Clinic, dental clinic Vashi, dentist Navi Mumbai, dental implants Vashi, implants from 25000, cosmetic dentist Navi Mumbai, smile makeover Vashi, painless root canal, single sitting RCT, clear aligners Vashi, braces Sector 17 Vashi",
  authors: [{ name: "Dr. Shubhra Sharma" }],
  creator: "Dentciti Dental Clinic",
  publisher: "Dentciti Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dentciti.org"),
  alternates: {
    canonical: "/dental-clinic-in-navi-mumbai",
  },
  openGraph: {
    title:
      "Dentciti Dental Clinic | Painless · Fast · Affordable Dentistry in Vashi",
    description:
      "Dr. Shubhra Sharma — 21+ years of trusted dental care in Navi Mumbai. Dental implants from ₹25,000, painless root canals, smile makeovers, clear aligners. EMI options available.",
    url: "https://dentciti.org/dental-clinic-in-navi-mumbai",
    siteName: "Dentciti Dental Clinic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dentciti Dental Clinic — Dr. Shubhra Sharma, Cosmetic Dentist & Implantologist, Vashi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentciti Dental Clinic | Dr. Shubhra Sharma",
    description:
      "Painless · Fast · Affordable. Dental implants from ₹25,000. 21+ years of trusted care in Vashi, Navi Mumbai.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data for local dental practice — improves SEO + rich results.
const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dentciti Dental Clinic",
  description:
    "Premium painless dentistry in Vashi, Navi Mumbai led by Dr. Shubhra Sharma — 21+ years of clinical experience in cosmetic dentistry and implantology.",
  url: "https://dentciti.org/dental-clinic-in-navi-mumbai",
  telephone: "+91-9320450006",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop 52, Shiv Centre, Sector 17 (Behind Everest Cycle)",
    addressLocality: "Vashi, Navi Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400703",
    addressCountry: "IN",
  },
  medicalSpecialty: ["Dentistry", "CosmeticDentistry", "Implantology"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:30",
      closes: "13:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "17:00",
      closes: "21:00",
    },
  ],
  physician: {
    "@type": "Physician",
    name: "Dr. Shubhra Sharma",
    medicalSpecialty: ["Dentistry", "CosmeticDentistry", "Implantology"],
    yearsOfExperience: 21,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2A93C7" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
