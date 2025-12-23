"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border)] -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--accent)] ring-4 ring-[var(--background)]" />

              <div
                className={`p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div
                  className={`flex items-center gap-4 mb-4 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white flex-shrink-0">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className={index % 2 === 0 ? "md:text-right" : ""}>
                    <h3 className="text-lg font-bold">{exp.title}</h3>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
                    >
                      {exp.company}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div
                  className={`text-sm text-[var(--muted)] mb-4 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {exp.startDate} - {exp.endDate}
                </div>

                <p
                  className={`text-[var(--muted-foreground)] mb-4 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {exp.description}
                </p>

                <ul
                  className={`text-sm text-[var(--muted-foreground)] mb-4 space-y-1 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {index % 2 !== 0 && (
                        <span className="text-[var(--accent)] mt-1">•</span>
                      )}
                      <span className="flex-1">{achievement}</span>
                      {index % 2 === 0 && (
                        <span className="text-[var(--accent)] mt-1">•</span>
                      )}
                    </li>
                  ))}
                </ul>

                <div
                  className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-[var(--accent)]/10 text-[var(--accent)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
