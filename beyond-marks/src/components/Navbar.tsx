"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 80);
    setScrolled(latest > 60);
  });

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      {/* ─── Backdrop (outside-click to close) ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-[59] bg-black/30"
            onClick={close}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* ─── Header bar ─── */}
      <motion.header
        ref={headerRef}
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden && !mobileOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-300 ${
          scrolled || mobileOpen
            ? "bg-[#FAF7F2] shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        {/* Top bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={close}
            className="font-display text-lg sm:text-xl font-semibold tracking-tight flex-shrink-0"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span
              className={`transition-colors duration-300 ${
                scrolled || mobileOpen ? "text-[#1C1C1E]" : "text-white"
              }`}
            >
              Beyond Marks
            </span>
            <span className="text-[#C9A84C]">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#C9A84C] ${
                  scrolled ? "text-[#1C1C1E]/70" : "text-white/70"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              scrolled
                ? "bg-[#1C1C1E] text-[#C9A84C] hover:bg-[#2C2C2E]"
                : "bg-[#C9A84C] text-[#1C1C1E] hover:bg-[#E8D5A0]"
            }`}
          >
            Book Free Call
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-11 h-11 p-2.5 -mr-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 origin-center ${
                scrolled || mobileOpen ? "bg-[#1C1C1E]" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                scrolled || mobileOpen ? "bg-[#1C1C1E]" : "bg-white"
              } ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 origin-center ${
                scrolled || mobileOpen ? "bg-[#1C1C1E]" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>

        {/* ─── Mobile Drawer (absolute, no layout shift) ─── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden absolute top-full left-0 right-0 bg-[#FAF7F2] border-t border-[#F0EBE0] shadow-lg z-[60]"
            >
              <nav className="flex flex-col px-4 py-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className="flex items-center min-h-[52px] px-3 text-[#1C1C1E]/70 text-base font-medium hover:text-[#C9A84C] transition-colors border-b border-[#F0EBE0] last:border-0"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 pb-1">
                  <a
                    href="#contact"
                    onClick={close}
                    className="flex items-center justify-center w-full min-h-[52px] rounded-full text-sm font-semibold bg-[#1C1C1E] text-[#C9A84C] hover:bg-[#2C2C2E] transition-colors"
                  >
                    Book Free Call
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
