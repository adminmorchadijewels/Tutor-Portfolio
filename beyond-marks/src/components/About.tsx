"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { CREDENTIALS } from "@/lib/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={fadeUp}
              className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4"
            >
              About Himanshu
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1C1C1E] mb-8 leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The skill nobody taught me, and why I&apos;m making sure your child
              gets it.
            </motion.h2>

            <div className="space-y-5">
              {[
                "I'm Himanshu, an IIT Madras graduate, Senior AI Engineer, and someone who has lived and worked across multiple countries. But the thing I'm most proud of isn't my degree or job title.",
                "I went to coaching for IIT, like most students do. But somewhere along the way, I developed something far more valuable: the ability to learn anything on my own. No spoon-feeding. No waiting for someone to explain it. Just curiosity, a system, and the confidence to figure things out.",
                "That skill has compounded every single day since. Today I'm a Senior AI Engineer working with cutting-edge technology, and I'm still learning new things daily, not because someone is teaching me, but because I know how to teach myself.",
                "I mentor students globally because I know firsthand what real learning looks like, and how rarely the education system actually builds it. My goal with every student is simple: make myself unnecessary.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-[#5A6070] text-base leading-relaxed font-light"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Credential chips */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-2 mt-10"
            >
              {CREDENTIALS.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#C9A84C] bg-white text-[#1C1C1E] text-xs md:text-sm font-medium"
                >
                  {c}
                </span>
              ))}
            </motion.div>

            {/* LinkedIn card */}
            <motion.div variants={fadeUp} className="mt-8">
              <a
                href="https://www.linkedin.com/in/himanshugupta5458/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white rounded-xl border border-[#C9A84C]/20 px-5 py-4 hover:border-[#C9A84C]/50 transition-colors group"
                style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" } as React.CSSProperties}
              >
                <div className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="#0A66C2"
                    className="w-5 h-5 flex-shrink-0"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <div>
                    <p className="text-[#1C1C1E] text-sm font-medium">
                      Connect on LinkedIn
                    </p>
                    <p className="text-[#5A6070] text-xs mt-0.5">
                      Himanshu Gupta · Senior AI Engineer · IIT Madras
                    </p>
                  </div>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="2"
                  className="w-4 h-4 flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[340px]">
              {!imgError ? (
                <div className="relative w-full aspect-[3/4] max-h-[320px] lg:max-h-none rounded-2xl overflow-hidden ring-2 ring-[#C9A84C]/30">
                  <Image
                    src="/himanshu.jpg"
                    alt="Himanshu Gupta — Senior AI Engineer and learning mentor"
                    fill
                    className="object-cover object-top"
                    onError={() => setImgError(true)}
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 340px"
                  />
                </div>
              ) : (
                <div className="w-full aspect-[3/4] max-h-[320px] lg:max-h-none rounded-2xl bg-[#1C1C1E] flex flex-col items-center justify-center border border-[#C9A84C]/20 ring-2 ring-[#C9A84C]/30">
                  <div className="w-24 h-24 rounded-full bg-[#2C2C2E] border-2 border-[#C9A84C] flex items-center justify-center mb-4">
                    <span
                      className="text-[#C9A84C] text-3xl font-semibold"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      H
                    </span>
                  </div>
                  <p
                    className="text-white text-lg font-semibold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Himanshu Gupta
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    Senior AI Engineer
                  </p>
                  <p className="text-white/40 text-xs italic">
                    Based in the Maldives 🌊
                  </p>
                </div>
              )}

              {/* Decorative border offset */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#C9A84C]/30 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
