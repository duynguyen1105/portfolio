"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle } from "lucide-react";
import { education, certificates } from "@/data/education";
import { useTranslations } from "next-intl";

export function Education() {
  const t = useTranslations("education");

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--card)]">
      <div className="max-w-4xl mx-auto">
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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl bg-[var(--background)] border border-[var(--border)] shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-[var(--accent)]/10">
                <GraduationCap className="w-8 h-8 text-[var(--accent)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t("title")}</h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {education.period}
                </p>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-2">{education.school}</h4>
            <div className="space-y-2 text-[var(--muted-foreground)]">
              <p>
                <span className="font-medium text-[var(--foreground)]">
                  {t("labels.degree")}
                </span>{" "}
                {education.degree}
              </p>
              <p>
                <span className="font-medium text-[var(--foreground)]">
                  {t("labels.field")}
                </span>{" "}
                {education.field}
              </p>
              <p>
                <span className="font-medium text-[var(--foreground)]">
                  {t("labels.grade")}
                </span>{" "}
                {education.grade}
              </p>
            </div>
          </motion.div>

          {/* Certificates Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl bg-[var(--background)] border border-[var(--border)] shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-[var(--accent)]/10">
                <Award className="w-8 h-8 text-[var(--accent)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t("certificates")}</h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {t("professionalAchievements")}
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {certificates.map((cert) => (
                <li key={cert.name} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {cert.issuer}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
