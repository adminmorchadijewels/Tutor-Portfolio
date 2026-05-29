"use client";

import { motion } from "framer-motion";

const panels = [
  {
    emoji: "😓",
    scene: "10 PM. TEXTBOOKS OPEN.",
    who: "Parent",
    quote: "He studied for 3 hours last night. Still failed the test.",
    truth:
      "Hard work is not the problem. Nobody ever taught him how to actually think through a problem.",
  },
  {
    emoji: "🆘",
    scene: "EVERY HOMEWORK SESSION.",
    who: "Parent",
    quote: "My daughter cannot do anything unless someone is sitting right next to her.",
    truth:
      "She is smart. But she has been trained to wait for instructions. Every extra class quietly makes this worse.",
  },
  {
    emoji: "💸",
    scene: "TUTOR NUMBER FOUR.",
    who: "Parent",
    quote: "We have spent so much on tutors. The improvement never lasts.",
    truth:
      "Tutors fix symptoms, not root causes. When they leave, the problem always comes back.",
  },
  {
    emoji: "🤔",
    scene: "THE AI QUESTION.",
    who: "Student",
    quote: "If AI can answer everything in seconds, what am I actually learning right now?",
    truth:
      "Exactly the right question. The answer to this one changes everything.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-16 lg:py-24 bg-[#1C1C1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-14"
        >
          <p className="text-[#C9A84C] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4">
            The Real Problem
          </p>
          <h2
            className="font-semibold text-white mb-4 leading-snug"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 5vw, 42px)" }}
          >
            Every week, parents tell me the same things.
          </h2>
          <p className="text-white/55 font-light text-base max-w-xl">
            Four patterns I hear over and over. Do any of these sound familiar?
          </p>
        </motion.div>

        {/* 2×2 comic strip grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {panels.map((panel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-white/[0.08]"
            >
              {/* Scene header */}
              <div
                className="flex flex-col items-center py-5 px-4"
                style={{
                  background: "rgba(201,168,76,0.08)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span className="text-4xl mb-2">{panel.emoji}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">
                  {panel.scene}
                </span>
              </div>

              {/* Speech bubble */}
              <div className="p-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#C9A84C]/15 text-[#C9A84C] text-[10px] font-medium mb-3">
                  {panel.who}
                </span>
                <p
                  className="text-white text-[13px] sm:text-sm leading-relaxed italic mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;{panel.quote}&rdquo;
                </p>
                <p className="text-white/45 text-[11px] leading-relaxed">
                  {panel.truth}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conclusion bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 rounded-xl border border-white/10 px-6 py-[18px] text-center"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <p
            className="text-white text-sm leading-relaxed italic"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            These are not four separate problems. They are all symptoms of the same root cause: nobody taught your child{" "}
            <span className="text-[#C9A84C] not-italic font-medium">how to learn.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
