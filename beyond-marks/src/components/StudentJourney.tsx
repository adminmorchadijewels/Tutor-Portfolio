"use client";

import { motion } from "framer-motion";
import MobileCarousel from "@/components/MobileCarousel";

const journeys = [
  {
    label: "The Dependent Studier",
    before:
      "Cannot study without someone explaining everything first. Waits for a tutor to break down every concept before attempting.",
    after:
      "Picks up new topics independently. Knows how to use resources, ask the right questions, and work through confusion on their own.",
  },
  {
    label: "The Exam Memoriser",
    before:
      "Scores well on familiar problems. Falls apart on anything slightly different. Cannot explain why an answer is correct.",
    after:
      "Approaches unseen problems with a framework. Reasons out loud. Understands the why behind every concept, not just the how.",
  },
  {
    label: "The Directionless Young Adult",
    before:
      "Has a degree and a job but feels stuck. No clear direction, no system for learning new skills, no confidence in their own thinking.",
    after:
      "Has a personal learning system. Can pick up any new skill in weeks. Makes decisions with clarity and thinks strategically about their career.",
  },
];

export default function StudentJourney() {
  return (
    <section id="journey" className="py-16 lg:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-16"
        >
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4">
            The Transformation
          </p>
          <h2
            className="text-3xl lg:text-[42px] font-semibold text-[#1C1C1E] mb-4 leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Where students start. Where they end up.
          </h2>
          <p className="text-[#5A6070] text-lg max-w-xl">
            These are real patterns I see consistently. No names, no
            exaggeration.
          </p>
        </motion.div>

        {/* Mobile carousel */}
        <div className="md:hidden mb-16">
          <MobileCarousel
            items={journeys.map((journey, i) => (
              <div key={i} className="mx-1 rounded-2xl overflow-hidden border border-black/8">
                <div className="bg-[#FAF7F2] px-4 py-3 border-b border-black/6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#1C1C1E]">
                    {journey.label}
                  </p>
                </div>
                <div className="bg-[#FFF5F5] p-4 border-b border-black/6">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-red-400 mb-2">Before</p>
                  <p className="text-sm text-[#1C1C1E] leading-relaxed">
                    {journey.before}
                  </p>
                </div>
                <div className="flex justify-center py-2 bg-white">
                  <div className="w-7 h-7 rounded-full bg-[#C9A84C] flex items-center justify-center text-white text-sm">
                    ↓
                  </div>
                </div>
                <div className="bg-[#F0FFF4] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-green-500 mb-2">After</p>
                  <p className="text-sm text-[#1C1C1E] leading-relaxed">
                    {journey.after}
                  </p>
                </div>
              </div>
            ))}
          />
        </div>

        {/* Desktop grid — hidden on mobile */}
        <div className="hidden md:block space-y-6 mb-16">
          {journeys.map((journey, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white rounded-2xl overflow-hidden border border-[#F0EBE0]"
            >
              {/* Card label */}
              <div className="px-6 py-4 border-b border-[#F0EBE0]">
                <span className="text-[#1C1C1E] font-semibold text-sm uppercase tracking-wide">
                  {journey.label}
                </span>
              </div>

              {/* Before / After */}
              <div className="grid sm:grid-cols-2 relative">
                {/* Before */}
                <div className="p-5 sm:p-6 bg-red-500/5 border-b sm:border-b-0 sm:border-r border-[#F0EBE0]">
                  <p className="text-red-600/70 text-xs font-semibold uppercase tracking-widest mb-3">
                    Before
                  </p>
                  <p className="text-[#5A6070] text-sm leading-relaxed font-light">
                    {journey.before}
                  </p>
                </div>

                {/* After */}
                <div className="p-5 sm:p-6 bg-green-500/5 relative">
                  {/* Desktop arrow: pointing right */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden sm:flex w-6 h-6 rounded-full bg-[#C9A84C] items-center justify-center shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-3 h-3">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-green-700/70 text-xs font-semibold uppercase tracking-widest mb-3">
                    After
                  </p>
                  <p className="text-[#5A6070] text-sm leading-relaxed font-light">
                    {journey.after}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-[#5A6070] text-lg mb-6">
            Recognise your child in any of these? Let&apos;s talk.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#C9A84C] text-[#1C1C1E] font-semibold text-base hover:bg-[#E8D5A0] hover:scale-[1.02] transition-all duration-200"
          >
            Book Free Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
