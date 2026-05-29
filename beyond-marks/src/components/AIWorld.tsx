"use client";

import { motion, type Variants } from "framer-motion";
import { AI_WORLD_STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/AnimatedCounter";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function AIWorld() {
  return (
    <section id="ai-world" className="py-12 md:py-20 bg-[#1C1C1E]">
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
            Why It Matters Now
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The rules just changed. Is your child ready?
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-3 md:space-y-4"
          >
            <motion.p variants={fadeUp} className="text-white/75 text-sm md:text-base leading-relaxed font-light">
              We are living through the biggest shift in human history. AI can
              write essays, solve equations, generate code, and answer any
              factual question in seconds.
            </motion.p>

            <motion.p variants={fadeUp} className="text-white/75 text-sm md:text-base leading-relaxed font-light">
              The students who will thrive aren&apos;t the ones who memorised the
              most. They&apos;re the ones who can{" "}
              <span className="text-[#C9A84C] font-medium">
                think critically, adapt fast, ask better questions, and learn
                anything on their own.
              </span>
            </motion.p>

            <motion.p variants={fadeUp} className="text-white/75 text-sm md:text-base leading-relaxed font-light">
              The window to build these skills is narrow. Before 25, the brain
              is wiring its habits of thinking, curiosity, and resilience.
              Right now. A good mentor at this stage doesn&apos;t just improve
              grades. They shape the kind of adult your child becomes.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-white/50 text-base italic border-l-2 border-[#C9A84C] pl-4"
            >
              That&apos;s not tutoring. That&apos;s the most important investment you&apos;ll make.
            </motion.p>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {AI_WORLD_STATS.map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.92 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                className="bg-[#2C2C2E] rounded-2xl p-4 md:p-6 border border-[#C9A84C]/20"
              >
                <p
                  className="text-[#C9A84C] text-2xl md:text-3xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.animated && stat.numericTarget ? (
                    <AnimatedCounter target={stat.numericTarget} suffix="+" duration={2000} />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="text-white/60 text-sm leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
