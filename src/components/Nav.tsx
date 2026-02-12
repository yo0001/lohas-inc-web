import Link from "next/link";
import type { Locale, Dictionary } from "@/lib/i18n/config";
import { LangSwitcher } from "./LangSwitcher";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export function Nav({ dict, locale }: Props) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-lg font-bold text-gray-900">
          LOHAS Inc.
        </Link>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a
            href={`/${locale}#products`}
            className="hover:text-gray-900 transition-colors"
          >
            {dict.nav.products}
          </a>
          <a
            href={`/${locale}#about`}
            className="hover:text-gray-900 transition-colors"
          >
            {dict.nav.about}
          </a>
          <Link
            href={`/${locale}/legal`}
            className="hover:text-gray-900 transition-colors"
          >
            {dict.nav.legal}
          </Link>
          <LangSwitcher locale={locale} dict={dict} />
        </div>
      </div>
    </nav>
  );
}
