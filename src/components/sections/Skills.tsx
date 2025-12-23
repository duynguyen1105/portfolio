"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Cloud } from "lucide-react";
import { skillCategories, softSkills } from "@/data/skills";
import { useTranslations } from "next-intl";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  layout: Layout,
  server: Server,
  cloud: Cloud,
};

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

export function Skills() {
  const t = useTranslations("skills");

  // Map category titles to translation keys
  const getCategoryTitle = (title: string) => {
    const titleMap: Record<string, string> = {
      "Programming Languages": t("categories.programmingLanguages"),
      Frontend: t("categories.frontend"),
      Backend: t("categories.backend"),
      "Tools & Cloud": t("categories.toolsCloud"),
    };
    return titleMap[title] || title;
  };

  // Map soft skills to translation keys
  const getSoftSkill = (skill: string) => {
    const skillMap: Record<string, string> = {
      "English Communication": t("soft.englishCommunication"),
      "Task Management": t("soft.taskManagement"),
      "Team Collaboration": t("soft.teamCollaboration"),
      Documentation: t("soft.documentation"),
      "Problem Solving": t("soft.problemSolving"),
    };
    return skillMap[skill] || skill;
  };

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--card)]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-[var(--background)] border border-[var(--border)] shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {Icon && (
                    <div className="p-2 rounded-lg bg-[var(--accent)]/10">
                      <Icon className="w-6 h-6 text-[var(--accent)]" />
                    </div>
                  )}
                  <h3 className="font-semibold">
                    {getCategoryTitle(category.title)}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-sm rounded-full bg-[var(--card)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center mb-16 gap-4"
        >
          <h3 className="text-xl font-semibold mb-4">{t("softSkills")}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
              >
                {getSoftSkill(skill)}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
