import fr from './fr.json';

export const defaultLang = 'fr' as const;
export type Lang = 'fr';

const translations = { fr } as const;

export function getLangFromUrl(url: URL): Lang {
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: unknown = translations[lang];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };
}

export function getTranslations(lang: Lang) {
  return translations[lang];
}
