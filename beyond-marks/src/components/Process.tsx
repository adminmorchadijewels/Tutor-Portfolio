"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="process" className="py-16 lg:py-24 bg-white">
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
            How It Works
          </p>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1C1C1E] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Four steps. One transformation.
          </h2>
          <p className="text-[#5A6070] text-lg">
            Simple, transparent, no pressure at any stage.
          </p>
        </motion.div>

        {/* Stepper */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#F0EBE0] lg:left-8" />

          <div className="space-y-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="flex gap-4 lg:gap-10 relative"
              >
                {/* Step circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className={`w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-bold text-sm lg:text-base ${
                      step.isFree
                        ? "bg-[#C9A84C] text-[#1C1C1E]"
                        : "bg-[#1C1C1E] text-white"
                    }`}
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="pb-4 sm:pb-8 flex-1">
                  {/* Badge */}
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        step.isFree
                          ? "bg-[#C9A84C]/15 text-[#C9A84C]"
                          : "bg-[#1C1C1E]/10 text-[#1C1C1E]"
                      }`}
                    >
                      {step.badge}
                    </span>
                    {step.isFree && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                        FREE
                      </span>
                    )}
                  </div>

                  <h3
                    className="text-[#1C1C1E] text-xl lg:text-2xl font-semibold mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#5A6070] leading-relaxed max-w-2xl">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
