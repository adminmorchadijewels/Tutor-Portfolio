"use client";

import { motion } from "framer-motion";
import { PRICING_FEATURES } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-[#FAF7F2]">
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
            Pricing
          </p>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1C1C1E] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Flexible, transparent, no surprises.
          </h2>
          <p className="text-[#5A6070] text-lg max-w-xl mx-auto">
            Priced based on what we&apos;re working on, session depth, and your
            student&apos;s profile.
          </p>
        </motion.div>

        {/* Pricing card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl bg-white rounded-2xl border-2 border-[#C9A84C] p-6 lg:p-10"
          >
            <p className="text-[#5A6070] text-sm font-medium uppercase tracking-widest mb-4">
              1-on-1 Mentorship
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-2">
              <span
                className="font-semibold text-[#C9A84C]"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px,8vw,64px)" }}
              >
                $15 – $50
              </span>
              <span className="text-[#5A6070] text-lg">/hr</span>
            </div>
            <p className="text-[#5A6070] text-sm mb-8">
              Rate varies based on subject complexity, session depth, and student profile
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {PRICING_FEATURES.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5">
                  <span className="text-[#C9A84C] text-lg leading-none mt-0.5">✓</span>
                  <span className="text-[#5A6070] text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="w-full flex items-center justify-center px-8 py-4 rounded-full bg-[#1C1C1E] text-[#C9A84C] font-semibold text-base hover:bg-[#2C2C2E] transition-colors"
            >
              Start with a Free Discovery Call
            </a>

            {/* Note */}
            <p className="text-center text-[#5A6070] text-sm italic mt-6">
              No factory model. No groups. Just one student, one mentor, complete focus.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
