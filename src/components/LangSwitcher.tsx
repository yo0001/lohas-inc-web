"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale, Dictionary } from "@/lib/i18n/config";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function LangSwitcher({ locale, dict }: Props) {
  const pathname = usePathname();
  const targetLocale: Locale = locale === "ja" ? "en" : "ja";
  const targetPath = pathname.replace(`/${locale}`, `/${targetLocale}`);

  return (
    <Link
      href={targetPath}
      className="px-2 py-1 border border-white/20 rounded text-xs text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
    >
      {dict.langSwitcher[targetLocale]}
    </Link>
  );
}
