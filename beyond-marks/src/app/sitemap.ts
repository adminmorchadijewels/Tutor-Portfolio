import { MetadataRoute } from "next";
import { blogContent } from "@/lib/blogContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPages = blogContent.map((post) => ({
    url: `https://beyondmarks.co/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://beyondmarks.co",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...blogPages,
  ];
}
