import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher'; // Adjust path if needed
import { Dictionary } from '@/app/dictionaries/dictionaries';

interface HeaderProps {
  dict: Dictionary;
  lang: string;
}

export default function Header({ dict, lang }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo Section */}
        <Link href={`/${lang}`} className="flex flex-col">
          <span className="text-xl font-bold tracking-wide text-slate-900">
            {dict.header.logoTitle}
          </span>
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">
            {dict.header.logoSubtitle}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden h-full items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {/* About Us Dropdown */}
          <div className="group relative flex h-full items-center">
            <Link href={`/${lang}/about`} className="transition hover:text-slate-900">
              {dict.header.nav.about}
            </Link>
            <div className="absolute left-0 top-full hidden w-48 rounded-xl border border-slate-100 bg-white p-2 shadow-lg group-hover:block">
              <Link
                href={`/${lang}/about/headquarters`}
                className="block rounded-lg px-4 py-2 text-sm hover:bg-slate-50 hover:text-slate-900"
              >
                {dict.header.nav.aboutHeadquarters}
              </Link>
              <Link
                href={`/${lang}/about/dalian`}
                className="block rounded-lg px-4 py-2 text-sm hover:bg-slate-50 hover:text-slate-900"
              >
                {dict.header.nav.aboutDalian}
              </Link>
              <Link
                href={`/${lang}/about/locations`}
                className="block rounded-lg px-4 py-2 text-sm hover:bg-slate-50 hover:text-slate-900"
              >
                {dict.header.nav.aboutLocations}
              </Link>
              <Link
                href={`/${lang}/about/clients`}
                className="block rounded-lg px-4 py-2 text-sm hover:bg-slate-50 hover:text-slate-900"
              >
                {dict.header.nav.aboutClients}
              </Link>
              <Link
                href={`/${lang}/about/qualifications`}
                className="block rounded-lg px-4 py-2 text-sm hover:bg-slate-50 hover:text-slate-900"
              >
                {dict.header.nav.aboutQualifications}
              </Link>
            </div>
          </div>

          <Link href={`/${lang}/professionals`} className="transition hover:text-slate-900">
            {dict.header.nav.professionals}
          </Link>

          {/* Expertise Dropdown */}
          <div className="group relative flex h-full items-center">
            <Link href={`/${lang}/expertise`} className="transition hover:text-slate-900">
              {dict.header.nav.expertise}
            </Link>
            <div className="absolute left-0 top-full hidden w-48 rounded-xl border border-slate-100 bg-white p-2 shadow-lg group-hover:block">
              <Link
                href={`/${lang}/expertise/practices`}
                className="block rounded-lg px-4 py-2 text-sm hover:bg-slate-50 hover:text-slate-900"
              >
                {dict.header.nav.expertisePractices}
              </Link>
              <Link
                href={`/${lang}/expertise/sectors`}
                className="block rounded-lg px-4 py-2 text-sm hover:bg-slate-50 hover:text-slate-900"
              >
                {dict.header.nav.expertiseSectors}
              </Link>
              <Link
                href={`/${lang}/expertise/services`}
                className="block rounded-lg px-4 py-2 text-sm hover:bg-slate-50 hover:text-slate-900"
              >
                {dict.header.nav.expertiseServices}
              </Link>
            </div>
          </div>

          <Link href={`/${lang}/news`} className="transition hover:text-slate-900">
            {dict.header.nav.news}
          </Link>
        </nav>

        {/* Action Buttons: Search & Language */}
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-slate-500 transition hover:text-slate-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <div className="h-4 w-px bg-slate-200"></div>

          {/* Client Component for Language Switching */}
          <LanguageSwitcher currentLang={lang} />
        </div>
      </div>
    </header>
  );
}
