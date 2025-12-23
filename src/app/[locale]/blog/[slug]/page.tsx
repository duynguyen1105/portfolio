"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { getBlogPost } from "@/data/blog";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPost(slug);
  const t = useTranslations("blog");
  const locale = useLocale();

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backToBlog")}
          </Link>

          <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)] mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString(
                locale === "vi" ? "vi-VN" : "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {Math.ceil(post.content.length / 1000)} {t("minRead")}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-[var(--accent)]/10 text-[var(--accent)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="w-full h-px bg-[var(--border)] mb-8" />

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Simple markdown-like rendering */}
            {post.content.split("\n").map((line, index) => {
              if (line.startsWith("# ")) {
                return (
                  <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                    {line.slice(2)}
                  </h1>
                );
              }
              if (line.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                    {line.slice(3)}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-bold mt-4 mb-2">
                    {line.slice(4)}
                  </h3>
                );
              }
              if (line.startsWith("```")) {
                return null; // Skip code fence markers
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={index} className="ml-4 text-[var(--muted-foreground)]">
                    {line.slice(2)}
                  </li>
                );
              }
              if (line.trim() === "") {
                return <br key={index} />;
              }
              // Check if it looks like code
              if (
                line.includes("import ") ||
                line.includes("const ") ||
                line.includes("function ") ||
                line.includes("@") ||
                line.includes("  ") ||
                line.includes("{") ||
                line.includes("}")
              ) {
                return (
                  <code
                    key={index}
                    className="block bg-[var(--card)] p-1 rounded text-sm font-mono text-[var(--foreground)]"
                  >
                    {line}
                  </code>
                );
              }
              return (
                <p key={index} className="text-[var(--muted-foreground)] mb-4">
                  {line}
                </p>
              );
            })}
          </div>
        </motion.div>
      </article>
    </div>
  );
}
