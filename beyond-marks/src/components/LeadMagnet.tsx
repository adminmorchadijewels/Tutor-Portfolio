"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  childAge: string;
}

export default function LeadMagnet() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "Lead Magnet Request — Beyond Marks",
          redirect: "false",
          ...data,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 min-h-[44px] rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] text-[#1C1C1E] placeholder-[#9A9A9A] text-sm focus:outline-none focus:border-[#C9A84C] transition-colors";
  const labelClass = "block text-[#5A6070] text-xs font-medium mb-1.5 uppercase tracking-wide";

  return (
    <section id="guide" className="py-16 lg:py-24 bg-[#1C1C1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4">
              Free Resource
            </p>
            <h2
              className="text-3xl lg:text-[38px] font-semibold text-white mb-6 leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              5 Questions Every Parent Should Ask Before Hiring Any Tutor
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-8 font-light">
              Most parents hire tutors based on qualifications and price. They
              rarely ask the questions that actually predict whether their child
              will improve. This free guide gives you exactly what to ask, what
              red flags to watch for, and what a great mentor actually looks
              like.
            </p>

            <ul className="space-y-4">
              {[
                "The one question that reveals if a tutor actually cares",
                "What to look for in the first session",
                "The red flag most parents miss until it is too late",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-0.5 flex-shrink-0 text-lg">✓</span>
                  <span className="text-white/70 text-base font-light leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Form card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-5 sm:p-8">
              <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-6">
                Get the free guide instantly
              </p>

              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#C9A84C] text-3xl">✓</span>
                  </div>
                  <p className="text-[#1C1C1E] font-semibold text-lg mb-2">
                    Check your inbox!
                  </p>
                  <p className="text-[#5A6070] text-sm">
                    The guide is on its way.
                  </p>
                  <p className="text-[#5A6070] text-xs mt-4 italic">
                    You will also receive occasional insights on learning and
                    education. Unsubscribe anytime.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      placeholder="Your full name"
                      className={inputClass}
                      suppressHydrationWarning={true}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email",
                        },
                      })}
                      type="email"
                      placeholder="your@email.com"
                      className={inputClass}
                      suppressHydrationWarning={true}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>Your Child&apos;s Age</label>
                    <input
                      {...register("childAge", { required: "Age is required" })}
                      type="number"
                      placeholder="e.g. 14"
                      min="1"
                      max="30"
                      className={inputClass}
                      suppressHydrationWarning={true}
                    />
                    {errors.childAge && (
                      <p className="mt-1 text-red-500 text-xs">{errors.childAge.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center px-8 py-4 rounded-full bg-[#C9A84C] text-[#1C1C1E] font-semibold text-base hover:bg-[#E8D5A0] hover:scale-[1.02] disabled:opacity-60 transition-all duration-200"
                    suppressHydrationWarning={true}
                  >
                    {status === "loading" ? "Sending…" : "Send Me the Guide"}
                  </button>

                  {status === "error" && (
                    <p className="text-red-500 text-sm text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}

              <p className="text-[#9A9A9A] text-xs mt-4 text-center">
                No spam. No sales pitch. Just useful content for parents who
                care about real learning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
