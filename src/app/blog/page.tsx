"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/data/blog";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-[var(--muted-foreground)] max-w-md mx-auto">
            Thoughts, tutorials, and insights about web development and software engineering.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {posts.map((post) => (
            <motion.article
              key={post.slug}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:shadow-lg transition-all"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {Math.ceil(post.content.length / 1000)} min read
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-2 hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h2>

                <p className="text-[var(--muted-foreground)] mb-4">
                  {post.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-[var(--accent)]/10 text-[var(--accent)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="flex items-center gap-1 text-[var(--accent)] font-medium">
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
