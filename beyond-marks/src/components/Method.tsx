"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import MobileCarousel from "@/components/MobileCarousel";

const nodes = [
  {
    number: "01",
    emoji: "🧠",
    title: "Think First",
    story:
      "Before anything else, we ask why. Students learn to reason through a problem before reaching for an answer. The question always matters more than the solution.",
    tag: "Understanding over memorising",
  },
  {
    number: "02",
    emoji: "🔍",
    title: "Research and Analyse",
    story:
      "Now they know how to find answers themselves. From maths to geopolitics, they learn to find, evaluate, and use information the way real professionals do every day.",
    tag: "Curiosity as a skill",
  },
  {
    number: "03",
    emoji: "🛠️",
    title: "Build and Apply",
    story:
      "Theory meets the real world. Coding, case studies, financial decisions, real projects. Learning by doing, not by watching someone else do it on a whiteboard.",
    tag: "Real world, real stakes",
  },
  {
    number: "04",
    emoji: "🚀",
    title: "Own It",
    story:
      "The final stage is full independence. No tutor, no hand-holding. Just a student who knows how to learn anything, completely on their own, for the rest of their life.",
    tag: "The only goal that matters",
  },
];

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
          className="mb-10 max-w-2xl"
        >
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4">
            The Beyond Marks Method
          </p>
          <h2
            className="font-semibold text-[#1C1C1E] mb-4 leading-snug"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(28px, 5vw, 42px)",
            }}
          >
            Every student goes through the same four stages.
          </h2>
          <p className="text-[#5A6070] font-light text-base">
            Not a curriculum. A journey.
          </p>
        </motion.div>

        {/* Mobile carousel */}
        <div className="md:hidden mt-10">
          <MobileCarousel
            items={nodes.map((node) => (
              <div className="bg-[#FAF7F2] rounded-2xl p-5 mx-1 flex flex-col min-h-[220px]">
                <div
                  className="text-4xl text-[#C9A84C]/20 font-semibold leading-none mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {node.number}
                </div>
                <div className="text-2xl mb-2">{node.emoji}</div>
                <h3 className="text-base font-medium text-[#1C1C1E] mb-2">
                  {node.title}
                </h3>
                <p className="text-xs text-[#5A6070] leading-relaxed flex-1">
                  {node.story}
                </p>
                <p className="text-[10px] text-[#C9A84C] italic mt-3">
                  {node.tag}
                </p>
              </div>
            ))}
          />
        </div>

        {/* Desktop flow — hidden on mobile */}
        <div className="hidden md:flex items-stretch gap-0 mt-10">
          {nodes.map((node, i) => (
            <Fragment key={node.number}>
              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="flex-1 bg-[#FAF7F2] rounded-2xl p-5 flex flex-col"
              >
                <span
                  className="text-[48px] leading-none font-semibold select-none"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "rgba(201,168,76,0.15)",
                  }}
                >
                  {node.number}
                </span>
                <span className="text-2xl mt-1">{node.emoji}</span>
                <h3 className="text-[#1C1C1E] text-base font-medium mt-2 mb-2">
                  {node.title}
                </h3>
                <p className="text-[#5A6070] text-[12px] leading-relaxed flex-1">
                  {node.story}
                </p>
                <p
                  className="text-[#C9A84C] text-[10px] italic mt-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {node.tag}
                </p>
              </motion.div>
              {i < nodes.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                  className="flex items-center px-2 flex-shrink-0 text-[#C9A84C] text-xl select-none"
                >
                  →
                </motion.div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Outcome block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 bg-[#1C1C1E] rounded-2xl p-6 grid grid-cols-[auto_1fr] gap-4 items-center"
        >
          <span className="text-3xl">🎯</span>
          <div>
            <p
              className="text-[#C9A84C] text-base italic"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              My job is done when you do not need me anymore.
            </p>
            <p className="text-white/55 text-[13px] font-light mt-1">
              That is the only metric I measure success by. Not grades. Not
              ranks. Just a student who completely owns their own learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
