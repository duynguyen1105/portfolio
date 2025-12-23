"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, type Locale } from "@/i18n/config";
import { Globe, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = () => {
    const nextLocale = locale === "en" ? "vi" : "en";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <motion.button
      onClick={handleLocaleChange}
      disabled={isPending}
      whileHover={{ scale: isPending ? 1 : 1.05 }}
      whileTap={{ scale: isPending ? 1 : 0.95 }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors text-sm font-medium disabled:opacity-70"
      aria-label={`Switch to ${localeNames[locale === "en" ? "vi" : "en"]}`}
    >
      {isPending ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Globe className="w-4 h-4" />
      )}
      <span className="uppercase">{locale}</span>
    </motion.button>
  );
}
