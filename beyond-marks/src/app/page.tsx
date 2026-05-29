"use client";

import dynamic from "next/dynamic";

// Above-the-fold: always rendered (SSR via layout.tsx, LCP-critical)
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import AIWorld from "@/components/AIWorld";
import About from "@/components/About";
import Method from "@/components/Method";
import Subjects from "@/components/Subjects";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import WhoFor from "@/components/WhoFor";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

// Below-the-fold: ssr:false prevents hydration mismatches from
// password-manager attribute injection and framer-motion whileInView
const VideoIntro = dynamic(() => import("@/components/VideoIntro"), { ssr: false });
const LeadMagnet = dynamic(() => import("@/components/LeadMagnet"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const Blog = dynamic(() => import("@/components/Blog"), { ssr: false });
const StudentJourney = dynamic(() => import("@/components/StudentJourney"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const BookCall = dynamic(() => import("@/components/BookCall"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Problem />
        <VideoIntro />
        <AIWorld />
        <About />
        <Method />
        <Subjects />
        <Process />
        <Pricing />
        <WhoFor />
        <LeadMagnet />
        <Testimonials />
        <Blog />
        <StudentJourney />
        <FAQ />
        <BookCall />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
