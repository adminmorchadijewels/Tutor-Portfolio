"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface MobileCarouselProps {
  items: React.ReactNode[];
  autoAdvanceMs?: number;
}

export default function MobileCarousel({
  items,
  autoAdvanceMs = 3000,
}: MobileCarouselProps) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, items.length - 1));
      setCurrent(clamped);
      trackRef.current?.children[clamped]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    },
    [items.length]
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % items.length;
        trackRef.current?.children[next]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
        return next;
      });
    }, autoAdvanceMs);
  }, [autoAdvanceMs, items.length]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, resetTimer]);

  const handleScroll = useCallback(() => {
    if (!trackRef.current) return;
    const scrollLeft = trackRef.current.scrollLeft;
    const width = trackRef.current.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setCurrent(index);
    resetTimer();
  }, [resetTimer]);

  return (
    <div className="w-full">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-full snap-start flex-shrink-0"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-5 h-2 bg-[#C9A84C]"
                : "w-2 h-2 bg-[#C9A84C]/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
