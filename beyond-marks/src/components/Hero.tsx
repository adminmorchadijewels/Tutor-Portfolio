"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { TRUST_BAR_ITEMS } from "@/lib/constants";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] bg-[#1C1C1E] flex items-center overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 60%), radial-gradient(circle at 80% 20%, #2C2C2E 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-20 pb-16">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Text — 3/5 */}
          <motion.div
            className="lg:col-span-3 order-2 lg:order-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow pill */}
            <motion.div variants={item} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse flex-shrink-0" />
                Now accepting students: India · UK · UAE · Singapore
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={item}
              className="font-semibold leading-tight text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 7vw, 72px)" }}
            >
              Your child can score well{" "}
              <span className="text-[#C9A84C]">and</span> think for themselves.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={item}
              className="text-white/70 text-[15px] sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl font-light"
            >
              Most tutors teach what to memorise. I teach how to think,
              question, and learn independently. Skills that outlast every exam
              they&apos;ll ever take.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#C9A84C] text-[#1C1C1E] font-semibold text-base hover:bg-[#E8D5A0] hover:scale-[1.02] transition-all duration-200 min-h-[52px]"
                style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" } as React.CSSProperties}
              >
                Book a Free Discovery Call
              </a>
              <a
                href="#method"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#C9A84C] text-[#C9A84C] font-medium text-base hover:bg-[#C9A84C]/10 transition-all duration-200 min-h-[52px]"
                style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" } as React.CSSProperties}
              >
                See How It Works ↓
              </a>
            </motion.div>

            {/* Trust bar — horizontal scroll on mobile */}
            <motion.div
              variants={item}
              className="pt-8 border-t border-white/10"
            >
              <div className="flex gap-x-6 gap-y-2 overflow-x-auto pb-1 scrollbar-none flex-nowrap lg:flex-wrap">
                {TRUST_BAR_ITEMS.map((t) => (
                  <span
                    key={t.label}
                    className={`text-sm whitespace-nowrap flex-shrink-0 ${
                      t.highlight
                        ? "text-white/80 border-b border-[#C9A84C]/60 pb-0.5"
                        : "text-white/50"
                    }`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Photo — 2/5 — hidden below 380px to prevent overflow */}
          <motion.div
            className="lg:col-span-2 hidden min-[380px]:flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[320px]">
              {!imgError ? (
                <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[500px] rounded-2xl overflow-hidden ring-2 ring-[#C9A84C]/30">
                  <Image
                    src="/himanshu.jpg"
                    alt="Himanshu Gupta — Beyond Marks mentor and IIT Madras graduate"
                    fill
                    priority
                    className="object-cover object-top"
                    onError={() => setImgError(true)}
                    sizes="(max-width: 1024px) 300px, 320px"
                  />
                </div>
              ) : (
                <div className="w-full h-[240px] sm:h-[300px] lg:h-[500px] rounded-2xl bg-[#2C2C2E] flex flex-col items-center justify-center overflow-hidden border border-white/10 ring-2 ring-[#C9A84C]/30">
                  <div className="w-24 h-24 rounded-full bg-[#1C1C1E] border-2 border-[#C9A84C] flex items-center justify-center mb-4">
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
                  <p className="text-white/60 text-sm mb-4">
                    Senior AI Engineer · IIT Madras
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center px-4">
                    {["🇮🇳 India", "🇬🇧 UK", "🇦🇪 UAE", "🇸🇬 SG"].map((geo) => (
                      <span
                        key={geo}
                        className="px-2.5 py-1 rounded-full bg-white/10 text-white/80 text-xs"
                      >
                        {geo}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 bg-[#C9A84C] rounded-xl px-4 py-3 shadow-lg">
                <p className="text-[#1C1C1E] font-semibold text-sm">
                  IIT Madras Graduate
                </p>
                <p className="text-[#1C1C1E]/70 text-xs">
                  Building independent thinkers
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom italic */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center text-white/30 text-sm italic mt-16"
        >
          Mentoring globally from the Maldives 🌊
        </motion.p>
      </div>
    </section>
  );
}
