import 'server-only';

const dictionaries = {
  en: () => import('./en.json').then(module => module.default),
  zh: () => import('./zh.json').then(module => module.default),
};

export type Locale = keyof typeof dictionaries;

export type Dictionary = typeof import('./zh.json');

export const hasLocale = (locale: string): locale is Locale => locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
