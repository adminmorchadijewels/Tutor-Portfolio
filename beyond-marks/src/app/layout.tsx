import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beyondmarks.co"),
  title: {
    default: "Beyond Marks — Himanshu Gupta | Premium 1-on-1 Mentorship",
    template: "%s | Beyond Marks",
  },
  description:
    "IIT Madras graduate and Senior AI Engineer mentoring students aged 6 to 25 from India, UK, UAE and Singapore. Learn how to think independently, not just score marks. Book a free discovery call today.",
  keywords: [
    "online tutor India",
    "IIT mentor online",
    "holistic education mentor",
    "critical thinking tutor for kids",
    "independent learning mentor",
    "online tutor Dubai",
    "online tutor Singapore",
    "beyond marks",
    "himanshu gupta mentor",
    "IIT Madras tutor",
  ],
  authors: [{ name: "Himanshu Gupta" }],
  creator: "Himanshu Gupta",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://beyondmarks.co",
    siteName: "Beyond Marks",
    title: "Beyond Marks — Where Curious Minds Are Built, Not Drilled.",
    description:
      "IIT Madras graduate and Senior AI Engineer mentoring students aged 6 to 25. Book a free 20-minute discovery call.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        // TODO: Replace /public/og-image.jpg with a real 1200x630 branded image before going live
        alt: "Beyond Marks — Himanshu Gupta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Marks — Himanshu Gupta",
    description:
      "IIT Madras graduate mentoring students to think independently, not just score marks.",
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
  alternates: {
    canonical: "https://beyondmarks.co",
  },
  verification: {
    google: "PLACEHOLDER_GOOGLE_VERIFICATION",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Himanshu Gupta",
  jobTitle: "Learning Mentor and Senior AI Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "IIT Madras",
  },
  url: "https://beyondmarks.co",
  sameAs: ["https://www.linkedin.com/in/himanshugupta5458/"],
  knowsAbout: [
    "Critical Thinking",
    "Independent Learning",
    "Mathematics",
    "Coding",
    "AI Education",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics — replace G-PLACEHOLDER with real ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"></script> */}
        {/* Meta Pixel — replace PLACEHOLDER with real ID */}
        {/* <script>fbq placeholder</script> */}
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
