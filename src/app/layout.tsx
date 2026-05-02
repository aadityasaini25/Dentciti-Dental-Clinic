import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isha-Para Clinic | Dr. Deepak Kumar — Laser & Laparoscopic Surgeon, Haridwar",
  description:
    "Advanced Laser Surgery Specialist in Haridwar. Dr. Deepak Kumar — 25+ years of expertise in Laser Piles/Fistula/Fissure, Varicose Veins, Laparoscopic Hernia, Gallstones & Breast Lump treatment. Pain-free, minimally invasive. All insurance (TPA) accepted.",
  keywords:
    "Dr. Deepak Kumar, Isha-Para Clinic, Haridwar Surgeon, Laser Piles Treatment, Laser Fistula, Laser Fissure, Laser Varicose Veins, Laparoscopic Surgery Haridwar, Hernia Surgery, Gallstone Surgery, Breast Lump Treatment, General Surgeon Uttarakhand, TPA Cashless Surgery",
  authors: [{ name: "Dr. Deepak Kumar" }],
  creator: "Isha-Para Clinic",
  publisher: "Isha-Para Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://id.vyaparify.com"),
  alternates: {
    canonical: "/drdeepak-kumar-general-surgeon",
  },
  openGraph: {
    title: "Isha-Para Clinic | Advanced Laser & Laparoscopic Surgery, Haridwar",
    description:
      "Dr. Deepak Kumar — 25+ years trusted surgeon. Pain-free laser treatment for Piles, Fistula, Fissure, Varicose Veins. All TPA/Insurance accepted.",
    url: "https://id.vyaparify.com/drdeepak-kumar-general-surgeon",
    siteName: "Isha-Para Clinic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Isha-Para Clinic — Dr. Deepak Kumar, Laser & Laparoscopic Surgeon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isha-Para Clinic | Dr. Deepak Kumar",
    description:
      "Advanced Laser Surgery Specialist in Haridwar — 25+ Years Trusted. All Insurance Accepted.",
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

// JSON-LD structured data for local medical business — improves SEO + rich results.
const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Isha-Para Clinic",
  description:
    "Advanced laser & laparoscopic surgery clinic in Haridwar led by Dr. Deepak Kumar. 25+ years of surgical expertise.",
  url: "https://id.vyaparify.com/drdeepak-kumar-general-surgeon",
  telephone: "+91-9756788082",
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-21, Isha-Para Clinic, Near BSNL Office Chowraha",
    addressLocality: "Haridwar",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  medicalSpecialty: ["Surgery", "Laparoscopy", "ColorectalSurgery"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "10:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "19:00",
      closes: "22:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  physician: {
    "@type": "Physician",
    name: "Dr. Deepak Kumar",
    medicalSpecialty: "Surgery",
    yearsOfExperience: 25,
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
        <meta name="theme-color" content="#0E7C7B" />
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
