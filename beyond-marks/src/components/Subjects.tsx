"use client";

import { motion } from "framer-motion";
import { SUBJECTS } from "@/lib/constants";

export default function Subjects() {
  const categories = Object.entries(SUBJECTS);

  return (
    <section id="subjects" className="py-16 lg:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4">
            What I Teach
          </p>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1C1C1E] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Subjects are just the vehicle. Thinking is the destination.
          </h2>
          <p className="text-[#5A6070] text-lg">
            I work across academics, real-world skills, and life skills,
            because a curious mind needs all three.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white rounded-2xl p-8 border-t-4 border-[#1C1C1E]"
            >
              <h3
                className="text-[#1C1C1E] text-xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] mt-0.5 flex-shrink-0">●</span>
                    <span className="text-[#5A6070] text-sm leading-snug">
                      {item}
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
