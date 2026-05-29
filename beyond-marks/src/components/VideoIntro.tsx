"use client";

import { motion } from "framer-motion";

export default function VideoIntro() {
  const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL ?? "";

  return (
    <section id="video" className="py-16 lg:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Video (60%) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4">
              Meet Himanshu
            </p>
            <h2
              className="text-3xl lg:text-[42px] font-semibold text-[#1C1C1E] mb-4 leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Before you book, hear it from me directly.
            </h2>
            <p className="text-[#5A6070] font-light mb-8">
              A quick 90-second introduction. Who I am, what I believe about
              learning, and why I built Beyond Marks.
            </p>

            {/* Video player */}
            <div className="rounded-2xl overflow-hidden bg-[#1C1C1E] aspect-video relative">
              {videoUrl ? (
                <iframe
                  src={`${videoUrl}?autoplay=0&controls=1&modestbranding=1`}
                  className="w-full h-full"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Himanshu Gupta — Beyond Marks Introduction"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  {/* Pulsing play button */}
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full bg-[#C9A84C]/30"
                    />
                    <div className="relative w-16 h-16 rounded-full bg-[#C9A84C] flex items-center justify-center shadow-lg">
                      <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-6 h-6 ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm text-center px-8">
                    Video coming soon. Check back this week.
                  </p>
                </div>
              )}
            </div>

          </motion.div>

          {/* Right: Bullets + CTA (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 lg:pt-24"
          >
            <ul className="space-y-6 mb-10">
              {[
                "Why I believe marks are the wrong goal",
                "What makes Beyond Marks different from every other tutor",
                "What the first free call actually looks like",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-4 pl-4 border-l-2 border-[#C9A84C]"
                >
                  <p className="text-[#1C1C1E] font-medium leading-snug">
                    {point}
                  </p>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full px-8 py-4 rounded-full bg-[#C9A84C] text-[#1C1C1E] font-semibold text-base hover:bg-[#E8D5A0] hover:scale-[1.02] transition-all duration-200"
            >
              Book Free Discovery Call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
