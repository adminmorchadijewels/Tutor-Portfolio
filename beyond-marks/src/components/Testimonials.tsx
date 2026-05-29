"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth * 0.85 + 16;
    setActiveIndex(Math.round(scrollRef.current.scrollLeft / cardWidth));
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-16 text-center"
        >
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4">
            What Students & Parents Say
          </p>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1C1C1E] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Real words from real families.
          </h2>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-[#FAF7F2] rounded-2xl p-8 relative overflow-hidden"
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="snap-start min-w-[85vw] flex-shrink-0 bg-[#FAF7F2] rounded-2xl p-6 relative overflow-hidden"
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (!scrollRef.current) return;
                  const cardWidth = scrollRef.current.clientWidth * 0.85 + 16;
                  scrollRef.current.scrollTo({ left: i * cardWidth, behavior: "smooth" });
                  setActiveIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  activeIndex === i ? "bg-[#C9A84C] w-4" : "bg-[#D0C8B8]"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <>
      {/* Decorative quote mark */}
      <span
        className="absolute top-4 right-6 text-7xl leading-none select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-playfair)",
          color: "rgba(201, 168, 76, 0.18)",
        }}
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, j) => (
          <span key={j} className="text-[#C9A84C] text-sm">
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-[#5A6070] italic text-sm leading-relaxed mb-6 font-light relative z-10">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#1C1C1E] flex items-center justify-center flex-shrink-0">
          <span
            className="text-white text-sm font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {t.initials}
          </span>
        </div>
        <div>
          <p className="text-[#1C1C1E] text-sm font-semibold">
            {t.name}
            {"age" in t && t.age ? `, ${t.age}` : ""}
          </p>
          <p className="text-[#5A6070] text-xs">
            {t.role} · {t.location}
          </p>
        </div>
      </div>
    </>
  );
}
