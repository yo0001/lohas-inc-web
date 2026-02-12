import Link from "next/link";
import type { Locale, Dictionary } from "@/lib/i18n/config";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export function Footer({ dict, locale }: Props) {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} {dict.footer.copyright}
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={`/${locale}/legal`}
            className="hover:text-gray-600 transition-colors"
          >
            {dict.footer.legalLink}
          </Link>
          <a
            href="mailto:tatsuaki.lohas@gmail.com"
            className="hover:text-gray-600 transition-colors"
          >
            {dict.footer.contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
