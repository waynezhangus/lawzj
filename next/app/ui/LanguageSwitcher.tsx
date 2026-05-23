'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const languages = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'English' },
];

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLangLabel = languages.find(l => l.code === currentLang)?.label || 'Language';

  const switchLanguage = (newLang: string) => {
    if (!pathname) return;

    // Replace the language segment in the URL (e.g., /zh/about -> /en/about)
    const segments = pathname.split('/');
    segments[1] = newLang;
    const newPath = segments.join('/');

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-slate-900"
      >
        {currentLangLabel}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-xl border border-slate-100 bg-white py-2 shadow-lg z-50">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-50 hover:text-slate-900 ${
                currentLang === lang.code
                  ? 'font-bold text-slate-900 bg-slate-50'
                  : 'text-slate-600'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
