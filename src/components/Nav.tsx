import Link from "next/link";
import type { Locale, Dictionary } from "@/lib/i18n/config";
import { LangSwitcher } from "./LangSwitcher";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export function Nav({ dict, locale }: Props) {
  return (
    <nav className="sticky top-0 z-50 nav-dark">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-lg font-bold text-white">
          LOHAS Inc.
        </Link>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a
            href={`/${locale}#products`}
            className="hover:text-white transition-colors"
          >
            {dict.nav.products}
          </a>
          <a
            href={`/${locale}#about`}
            className="hover:text-white transition-colors"
          >
            {dict.nav.about}
          </a>
          <Link
            href={`/${locale}/legal`}
            className="hover:text-white transition-colors"
          >
            {dict.nav.legal}
          </Link>
          <LangSwitcher locale={locale} dict={dict} />
        </div>
      </div>
    </nav>
  );
}
