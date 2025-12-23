"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = () => {
    const nextLocale = locale === "en" ? "vi" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <motion.button
      onClick={handleLocaleChange}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors text-sm font-medium"
      aria-label={`Switch to ${localeNames[locale === "en" ? "vi" : "en"]}`}
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase">{locale}</span>
    </motion.button>
  );
}
