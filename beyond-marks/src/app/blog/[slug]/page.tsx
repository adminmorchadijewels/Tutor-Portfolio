import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogContent } from "@/lib/blogContent";

export async function generateStaticParams() {
  return blogContent.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogContent.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

function renderBody(body: string) {
  return body.split("\n\n").map((block, i) => {
    const lines = block.split("\n");
    if (lines.length > 1 && !lines[0].includes(" ")) {
      return (
        <ul key={i} className="space-y-2 my-2">
          {lines.map((line, j) => (
            <li key={j} className="flex items-start gap-2 text-[#5A6070] text-sm font-light">
              <span className="text-[#C9A84C] flex-shrink-0 mt-0.5">●</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p
        key={i}
        className="text-[#1C1C1E] text-[15px] leading-relaxed font-light"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogContent.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-2xl mx-auto px-4 py-16">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#5A6070] text-sm hover:text-[#C9A84C] transition-colors mb-10"
        >
          ← Back to Beyond Marks
        </Link>

        {/* Tag */}
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#C9A84C]/15 text-[#C9A84C] text-xs font-medium">
          {post.tag}
        </span>

        {/* Title */}
        <h1
          className="text-[#1C1C1E] font-semibold leading-snug mt-3 mb-2"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(28px, 5vw, 42px)",
          }}
        >
          {post.title}
        </h1>

        {/* Meta */}
        <p className="text-[#5A6070] text-sm mb-8">
          {post.date} · {post.readTime}
        </p>

        {/* Divider */}
        <div className="border-t border-[#C9A84C]/30 mb-8" />

        {/* Article body */}
        <article className="space-y-6">
          {post.content.map((section, i) => {
            if (section.type === "cta") {
              return (
                <div
                  key={i}
                  className="bg-[#1C1C1E] rounded-2xl p-8 text-center mt-12"
                >
                  <p
                    className="text-white italic text-lg mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {section.ctaText}
                  </p>
                  <Link
                    href={section.ctaHref ?? "/#contact"}
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#C9A84C] text-[#1C1C1E] font-medium hover:bg-[#E8D5A0] transition-colors"
                  >
                    {section.ctaLabel}
                  </Link>
                </div>
              );
            }

            if (section.type === "section" && section.heading) {
              return (
                <div key={i}>
                  <h2
                    className="text-[#1C1C1E] text-xl font-medium mt-8 mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {section.heading}
                  </h2>
                  <div className="space-y-4">{renderBody(section.body ?? "")}</div>
                </div>
              );
            }

            if (section.body) {
              return (
                <div key={i} className="space-y-4">
                  {renderBody(section.body)}
                </div>
              );
            }

            return null;
          })}
        </article>
      </div>
    </div>
  );
}
