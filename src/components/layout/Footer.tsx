"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram, Heart } from "lucide-react";
import { socialLinks } from "@/data/personal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
};

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)] bg-[var(--card)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-[var(--card)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
                aria-label={link.name}
              >
                {Icon && <Icon className="w-5 h-5" />}
              </motion.a>
            );
          })}
        </div>

        <p className="text-sm text-[var(--muted-foreground)] flex items-center gap-1">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Duy Nguyen
        </p>

        <p className="text-sm text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
