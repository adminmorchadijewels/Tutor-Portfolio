"use client";

import { motion, type Variants } from "framer-motion";
import { PAIN_POINTS } from "@/lib/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Problem() {
  return (
    <section id="problem" className="py-16 lg:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 lg:mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4"
          >
            The Real Problem
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1C1C1E] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Here&apos;s what nobody talks about
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#5A6070] text-lg max-w-xl">
            If any of these sound familiar, you&apos;re in the right place.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-[#F0EBE0] rounded-2xl p-5 sm:p-8 border-l-4 border-[#C9A84C] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-[120px] font-bold text-[#1C1C1E]/5 leading-none select-none pointer-events-none"
                style={{ fontFamily: "var(--font-playfair)" }}>
                {i + 1}
              </div>
              <h3
                className="text-[#1C1C1E] text-xl font-semibold italic mb-4 leading-snug"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;{point.question}&rdquo;
              </h3>
              <p className="text-[#5A6070] leading-relaxed">{point.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
