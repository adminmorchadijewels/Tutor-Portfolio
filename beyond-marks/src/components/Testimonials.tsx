"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <div className="min-w-[300px] w-[300px] sm:min-w-[340px] sm:w-[340px] bg-[#FAF7F2] rounded-xl p-6 mx-3 flex-shrink-0 flex flex-col">
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, j) => (
          <span key={j} className="text-[#C9A84C] text-xs">★</span>
        ))}
      </div>
      <span
        className="text-[48px] leading-none select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-playfair)",
          color: "rgba(201,168,76,0.20)",
          lineHeight: 1,
        }}
      >
        &ldquo;
      </span>
      <p
        className="text-[#5A6070] italic text-sm leading-relaxed mt-2 mb-4 flex-1"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        } as React.CSSProperties}
      >
        {t.quote}
      </p>
      <div className="flex items-center gap-3 border-t border-black/[0.06] pt-3 mt-auto">
        <div className="w-9 h-9 rounded-full bg-[#1C1C1E] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-medium">{t.initials}</span>
        </div>
        <div>
          <p className="text-[#1C1C1E] text-sm font-medium">
            {t.name}{"age" in t && t.age ? `, ${t.age}` : ""}
          </p>
          <p className="text-[#5A6070] text-xs">
            {t.role} · {t.location}
          </p>
        </div>
      </div>
    </div>
  );
}

const repeated = [
  ...TESTIMONIALS,
  ...TESTIMONIALS,
  ...TESTIMONIALS,
  ...TESTIMONIALS,
  ...TESTIMONIALS,
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-[#C9A84C] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4">
            What Students and Parents Say
          </p>
          <h2
            className="text-3xl lg:text-4xl font-semibold text-[#1C1C1E]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Real words from real families.
          </h2>
        </motion.div>
      </div>
      <div className="carousel-row overflow-hidden">
        <div className="flex carousel-track" style={{ width: "max-content" }}>
          {repeated.map((t, i) => (
            <TestimonialCard key={`t-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
