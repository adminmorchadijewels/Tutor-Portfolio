"use client";

import { motion } from "framer-motion";
import { CORE_SUBJECTS, SKILL_CHIPS } from "@/lib/constants";

export default function Subjects() {
  return (
    <section id="subjects" className="py-16 lg:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4">
            What I Teach
          </p>
          <h2
            className="font-semibold text-[#1C1C1E] mb-4 leading-snug"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(28px, 5vw, 42px)",
            }}
          >
            Every subject taught through the lens of real life.
          </h2>
          <p className="text-[#5A6070] text-base font-light leading-relaxed">
            I do not just teach you what to study. I teach you why it matters,
            where it shows up in the real world, and how to think about it
            beyond the textbook.
          </p>
        </motion.div>

        {/* 2-column grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Core Subjects */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#1C1C1E] text-xs font-semibold uppercase tracking-widest mb-6 opacity-50">
              Core Subjects
            </p>
            <ul className="space-y-5">
              {CORE_SUBJECTS.map((subject, i) => (
                <motion.li
                  key={subject.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#C9A84C] mt-1 flex-shrink-0 text-sm">●</span>
                  <div>
                    <p className="text-[#1C1C1E] text-sm font-medium">
                      {subject.name}
                    </p>
                    <p className="text-[#5A6070] text-xs italic leading-snug mt-0.5">
                      {subject.connection}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Always-part-of-every-session */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-[#1C1C1E] text-xs font-semibold uppercase tracking-widest mb-3 opacity-50">
              Always Part of Every Session
            </p>
            <p className="text-[#5A6070] text-[13px] font-light leading-relaxed mb-5">
              These are not separate topics. They are the lens through which
              every subject is taught.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {SKILL_CHIPS.map((chip, i) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#C9A84C]/40 text-[#1C1C1E] text-xs"
                >
                  {chip}
                </motion.span>
              ))}
            </div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#1C1C1E] rounded-xl p-4"
            >
              <p
                className="text-white text-[13px] italic leading-relaxed"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;A maths problem becomes a lesson in financial
                decision-making. A coding project becomes a lesson in structured
                thinking. The subject is the vehicle. Real life is the
                destination.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
