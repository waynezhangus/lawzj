import Link from 'next/link';
import { Dictionary } from '@/app/dictionaries/dictionaries';
import WechatModal from '@/app/ui/WechatModal';

interface FooterProps {
  dict: Dictionary;
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear().toString();

  // Replace the {year} placeholder in the dictionary with the actual year
  const copyrightText = dict.footer.legal.copyright.replace('{year}', currentYear);

  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-8 text-sm text-slate-500">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand & Intro */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="text-lg font-semibold text-slate-900">{dict.footer.brand.name}</div>
            <p className="mt-4 max-w-xs leading-relaxed text-slate-600">
              {dict.footer.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-900">{dict.footer.links.quickLinksTitle}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="hover:text-slate-900">
                  {dict.footer.links.about}
                </Link>
              </li>
              <li>
                <Link href="/professionals" className="hover:text-slate-900">
                  {dict.footer.links.professionals}
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-slate-900">
                  {dict.footer.links.expertise}
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-slate-900">
                  {dict.footer.links.news}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Careers */}
          <div>
            <h3 className="font-semibold text-slate-900">{dict.footer.contact.title}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <WechatModal
                  buttonText={dict.footer.contact.contactUs}
                  buttonClassName="hover:text-slate-900 text-left transition"
                />
              </li>
              <li>
                <Link href="/careers" className="hover:text-slate-900">
                  {dict.footer.contact.careers}
                </Link>
              </li>
            </ul>
          </div>

          {/* Address Info */}
          <div>
            <h3 className="font-semibold text-slate-900">{dict.footer.address.title}</h3>
            <address className="mt-4 not-italic leading-relaxed">
              {dict.footer.address.line1}
              <br />
              {dict.footer.address.line2}
              <br />
              <a href="tel:+86041100000000" className="mt-2 block hover:text-slate-900">
                {dict.footer.address.phone}
              </a>
            </address>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-slate-200 pt-8 sm:flex-row text-xs">
          <p>{copyrightText}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 sm:mt-0">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900"
            >
              {dict.footer.legal.icp}
            </a>
            <a
              href="http://www.beian.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-slate-900"
            >
              {dict.footer.legal.police}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
