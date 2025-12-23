"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { useTranslations } from "next-intl";

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

export function About() {
  const t = useTranslations("about");

  const infoItems = [
    { icon: Mail, label: t("info.email"), value: personalInfo.email },
    { icon: Phone, label: t("info.phone"), value: personalInfo.phone },
    { icon: MapPin, label: t("info.location"), value: personalInfo.location },
    { icon: Calendar, label: t("info.birthday"), value: personalInfo.birthday },
  ];

  const stats = [
    { icon: Briefcase, value: "3+", label: t("stats.yearsExperience") },
    { icon: GraduationCap, value: "4", label: t("stats.companiesWorked") },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-6"
            >
              {t("subtitle")}
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-[var(--muted-foreground)] mb-4 leading-relaxed"
            >
              {t("bio1")}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-[var(--muted-foreground)] mb-4 leading-relaxed"
            >
              {t("bio2")}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 mt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-[var(--accent)]" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-[var(--muted-foreground)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Info Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {infoItems.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="flex items-center gap-4 p-4 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:shadow-md transition-shadow"
              >
                <div className="p-3 rounded-full bg-[var(--accent)]/10">
                  <item.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <div className="text-sm text-[var(--muted-foreground)]">
                    {item.label}
                  </div>
                  <div className="font-medium">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
