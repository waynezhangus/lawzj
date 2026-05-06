import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import '@/app/globals.css';
import { getDictionary } from '@/app/dictionaries/dictionaries';

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

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: 'zh' | 'en' }>;
};

export default async function RootLayout(props: RootLayoutProps) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);
  return (
    <html lang={lang} className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Pass the dictionary and current language to your Header component */}
        <Header dict={dict} lang={lang} />

        {/* Main content wrapper */}
        <div className="flex-1">{props.children}</div>

        {/* Pass the dictionary to your Footer component */}
        <Footer dict={dict} />
      </body>
    </html>
  );
}
