"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { InlineWidget } from "react-calendly";

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  childAge: string;
  goal: string;
  source: string;
}

export default function BookCall() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ??
    "https://calendly.com/himanshu-g302000/30min";

  const {
    register,
    handleSubmit,
    reset,
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
          subject: "New Beyond Marks Enquiry",
          from_name: data.name,
          ...data,
        }),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 min-h-[44px] rounded-xl bg-[#2C2C2E]/60 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors";
  const labelClass = "block text-white/70 text-xs font-medium mb-1.5 uppercase tracking-wide";
  const errorClass = "mt-1 text-red-400 text-xs";

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#1C1C1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text + Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4">
              Book a Free Discovery Call
            </p>
            <h2
              className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-6 leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Not sure yet? Let&apos;s just talk.
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-10 font-light">
              Book a free 20-minute call. No sales pitch, no pressure. Just an
              honest conversation about your child, their learning, and whether
              what I do is the right fit. Worst case, you walk away with
              clarity.
            </p>

            {/* Contact details */}
            <div className="space-y-3 mb-10">
              <a
                href="mailto:himanshu.g302000@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-[#C9A84C] transition-colors text-sm"
              >
                <span>📧</span>
                <span>himanshu.g302000@gmail.com</span>
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "9607375336"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[#C9A84C] transition-colors text-sm"
              >
                <span>📱</span>
                <span>+960 7375336</span>
              </a>
              <a
                href="https://www.linkedin.com/in/himanshugupta5458/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[#C9A84C] transition-colors text-sm"
              >
                <span>🔗</span>
                <span>LinkedIn, Himanshu Gupta</span>
              </a>
            </div>

            {/* Availability card */}
            <div className="bg-[#2C2C2E] rounded-xl p-5 mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#C9A84C] text-base">🕐</span>
                <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">
                  Availability
                </span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Friday and Saturday</span>
                  <span className="text-white/50">9 AM to 9 PM IST</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Monday to Thursday</span>
                  <span className="text-white/50">6 PM to 9 PM IST</span>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 mb-3">
                <p className="text-white/40 text-xs mb-2">IST (UTC+5:30) — students from any timezone welcome.</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {[
                    ["🌍 Europe", "IST −4:30 to −5:30"],
                    ["🌍 Middle East", "IST −1:30 to −2:30"],
                    ["🌍 Southeast Asia", "IST +1:30 to +2:30"],
                    ["🌍 Australia", "IST +4:30 to +5:30"],
                  ].map(([region, offset]) => (
                    <p key={region} className="text-white/40 text-xs">
                      {region} {offset}
                    </p>
                  ))}
                </div>
              </div>
              <p className="text-[#C9A84C] text-xs italic">
                Flexible on timings for the right student. Mention your timezone
                when you book.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 border-t border-white/10" />
              <span className="text-white/30 text-sm">or send a message</span>
              <div className="flex-1 border-t border-white/10" />
            </div>

            {/* Form */}
            {status === "success" ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
                <p className="text-green-400 text-lg font-semibold mb-2">
                  Message received! 🎉
                </p>
                <p className="text-white/60 text-sm">
                  I&apos;ll get back to you within 24 hours. If it&apos;s urgent, drop a
                  WhatsApp message.
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
                    <p className={errorClass}>{errors.name.message}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Email</label>
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
                      <p className={errorClass}>{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>WhatsApp Number</label>
                    <input
                      {...register("whatsapp")}
                      type="tel"
                      placeholder="+91 98765 43210"
                      className={inputClass}
                      suppressHydrationWarning={true}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Child&apos;s Age</label>
                  <input
                    {...register("childAge", { required: "Age is required" })}
                    type="text"
                    placeholder="e.g. 14"
                    className={inputClass}
                    suppressHydrationWarning={true}
                  />
                  {errors.childAge && (
                    <p className={errorClass}>{errors.childAge.message}</p>
                  )}
                </div>

                <div>
                  <label className={labelClass}>Your Goal</label>
                  <textarea
                    {...register("goal", { required: "Tell me your goal" })}
                    rows={3}
                    placeholder="What are you hoping to achieve? What's the main challenge?"
                    className={`${inputClass} resize-none`}
                    suppressHydrationWarning={true}
                  />
                  {errors.goal && (
                    <p className={errorClass}>{errors.goal.message}</p>
                  )}
                </div>

                <div>
                  <label className={labelClass}>How did you hear about us?</label>
                  <select
                    {...register("source")}
                    className={`${inputClass} cursor-pointer`}
                    suppressHydrationWarning={true}
                  >
                    <option value="" className="bg-[#1C1C1E]">
                      Select an option
                    </option>
                    {["Instagram", "LinkedIn", "WhatsApp", "Google", "Referred", "Other"].map(
                      (s) => (
                        <option key={s} value={s} className="bg-[#1C1C1E]">
                          {s}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center px-8 py-4 rounded-full bg-[#C9A84C] text-[#1C1C1E] font-semibold text-base hover:bg-[#E8D5A0] hover:scale-[1.02] disabled:opacity-60 transition-all duration-200"
                  suppressHydrationWarning={true}
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please try again or WhatsApp me directly.
                  </p>
                )}
              </form>
            )}
          </motion.div>

          {/* Right: Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white"
          >
            <InlineWidget
              url={calendlyUrl}
              styles={{ minWidth: "320px", height: "clamp(500px, 700px, 700px)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
