"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blogPosts";

export default function Blog() {
  return (
    <section id="blog" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-16"
        >
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4">
            Insights
          </p>
          <h2
            className="text-3xl lg:text-[42px] font-semibold text-[#1C1C1E] max-w-2xl leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Thinking out loud about education, learning, and what actually
            works.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-[#FAF7F2] rounded-xl p-6 flex flex-col hover:shadow-sm transition-shadow duration-200"
            >
              {/* Tag */}
              <span className="inline-flex self-start items-center px-3 py-1 rounded-full bg-[#C9A84C]/15 text-[#C9A84C] text-xs font-medium mb-4">
                {post.tag}
              </span>

              {/* Title */}
              <h3
                className="text-[#1C1C1E] text-[18px] font-medium leading-snug mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[#5A6070] text-sm font-light leading-relaxed line-clamp-3 flex-1 mb-4">
                {post.excerpt}
              </p>

              {/* Bottom row */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F0EBE0]">
                <span className="text-[#5A6070] text-xs">{post.readTime}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#C9A84C] text-[13px] font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
