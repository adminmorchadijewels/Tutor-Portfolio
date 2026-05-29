"use client";

import { motion } from "framer-motion";
import { METHOD_PILLARS } from "@/lib/constants";

export default function Method() {
  return (
    <section id="method" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-16 max-w-2xl"
        >
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4">
            The Beyond Marks Method
          </p>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1C1C1E] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            A different kind of learning. On purpose.
          </h2>
          <p className="text-[#5A6070] text-lg">
            Every session is built around four pillars that work together to
            build a genuinely independent thinker.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {METHOD_PILLARS.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="relative bg-[#FAF7F2] rounded-2xl p-5 sm:p-8 border-t-4 border-[#C9A84C] overflow-hidden"
            >
              {/* Large number accent */}
              <span
                className="absolute top-0 right-4 text-6xl sm:text-8xl font-bold leading-none select-none pointer-events-none"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "rgba(201, 168, 76, 0.12)",
                }}
              >
                {pillar.number}
              </span>

              <p className="text-[#C9A84C] text-sm font-semibold tracking-widest mb-3">
                {pillar.number}
              </p>
              <h3
                className="text-[#1C1C1E] text-2xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {pillar.title}
              </h3>
              <p className="text-[#5A6070] leading-relaxed">{pillar.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
