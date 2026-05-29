"use client";

import { motion } from "framer-motion";
import { WHO_FOR } from "@/lib/constants";

export default function WhoFor() {
  const sections = [WHO_FOR.parents, WHO_FOR.students];

  return (
    <section id="who-for" className="py-12 md:py-20 bg-[#1C1C1E]">
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
            Who This Is For
          </p>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            This might be exactly what you&apos;ve been looking for.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#2C2C2E] rounded-2xl p-5 md:p-8 border border-white/10"
            >
              <h3
                className="text-[#C9A84C] text-lg md:text-2xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {section.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
                {section.intro}
              </p>
              <ul className="space-y-0">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 py-1">
                    <span className="text-[#C9A84C] mt-0.5 flex-shrink-0">→</span>
                    <span className="text-white/70 text-sm leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
