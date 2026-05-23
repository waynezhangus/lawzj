import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/app/ui/Header';
import Footer from '@/app/ui/Footer';
import '@/app/globals.css';
import { getDictionary, Locale } from '@/app/dictionaries/dictionaries';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateStaticParams() {
  return [{ lang: 'zh' }, { lang: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'zh' | 'en' }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

export default async function RootLayout(props: LayoutProps<'/[lang]'>) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang as Locale);
  return (
    <html lang={lang} className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header dict={dict} lang={lang} />

        <div className="flex-1">{props.children}</div>

        <Footer dict={dict} />
      </body>
    </html>
  );
}
