"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Facebook, Instagram, ChevronDown } from "lucide-react";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { personalInfo, socialLinks } from "@/data/personal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
};

const roles = ["Software Engineer", "Full-Stack Developer", "Problem Solver"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.jpg"
          alt="Background"
          fill
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/70 via-[var(--background)]/50 to-[var(--background)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-[var(--accent)] ring-offset-4 ring-offset-[var(--background)]">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="text-[var(--accent)]">{personalInfo.displayName}</span>
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl md:text-2xl text-[var(--muted-foreground)] mb-8 h-8"
        >
          <TypeWriter words={roles} />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center gap-4 mb-12"
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-[var(--card)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors shadow-lg"
                aria-label={link.name}
              >
                {Icon && <Icon className="w-6 h-6" />}
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center gap-4"
        >
          <a
            href="/#contact"
            className="px-8 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
          <a
            href="/#about"
            className="px-8 py-3 rounded-full border border-[var(--border)] hover:bg-[var(--card)] transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="/#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="block text-[var(--muted-foreground)]"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.a>
      </motion.div>
    </section>
  );
}
