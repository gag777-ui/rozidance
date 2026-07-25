import type { Lang } from './utils';

export const refonteLangs: Lang[] = ['fr', 'en', 'nl', 'ru', 'de', 'es', 'it'];
export const translatedLangs: Exclude<Lang, 'fr'>[] = ['en', 'nl', 'ru', 'de', 'es', 'it'];

export const languageSwitcherLabels: Record<Lang, string> = {
  fr: 'Changer de langue',
  en: 'Change language',
  nl: 'Taal wijzigen',
  ru: 'Сменить язык',
  de: 'Sprache ändern',
  es: 'Cambiar idioma',
  it: 'Cambia lingua',
};

export function localePath(lang: Lang, path = '/') {
  const normalizedPath = path === '/' ? '' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return lang === 'fr' ? normalizedPath || '/' : `/${lang}${normalizedPath}`;
}

export function officialPath(pathname: string) {
  const withoutPreview = pathname.replace(/^\/refonte(?=\/|$)/, '') || '/';
  const localePattern = new RegExp(`^/(${translatedLangs.join('|')})(?=/|$)`);
  return withoutPreview.replace(localePattern, '') || '/';
}
