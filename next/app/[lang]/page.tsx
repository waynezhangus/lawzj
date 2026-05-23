import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '@/app/dictionaries/dictionaries';
import WechatModal from '@/app/ui/WechatModal';

export default async function HomePage(props: PageProps<'/[lang]'>) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const home = dict.home;

  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:px-8 lg:py-28">
          <div className="lg:col-span-7">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              {home.hero.label}
            </p>

            <h1 className="max-w-4xl whitespace-pre-line text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {home.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {home.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <WechatModal
                buttonText={home.hero.ctaPrimary}
                buttonClassName="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              />
              <a
                href="#about"
                className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                {home.hero.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-1">
              {home.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-slate-950">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-500">
              {home.about.label}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {home.about.title}
            </h2>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="space-y-6 text-base leading-8 text-slate-600">
                {home.about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{home.about.promise.title}</h3>
                <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                  {home.about.promise.items.map((item, index) => (
                    <li key={index}>
                      <span className="font-medium text-slate-900">{item.label} </span>
                      {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-500">
              {home.practiceAreas.label}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {home.practiceAreas.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {home.practiceAreas.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {home.practiceAreas.items.map(item => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section id="strengths" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-500">
              {home.strengths.label}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {home.strengths.title}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {home.strengths.items.map((item, index) => (
              <div key={index} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold tracking-[0.2em] text-slate-500">
                {home.qualifications.label}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {home.qualifications.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {home.qualifications.description}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {home.qualifications.items.map(item => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-500">
              {home.capabilities.label}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {home.capabilities.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {home.capabilities.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {home.capabilities.items.map(item => (
              <div key={item} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
