import fr from './fr.json';
import en from './en.json';
import nl from './nl.json';
import ru from './ru.json';

export const defaultLang = 'fr' as const;
export type Lang = 'fr' | 'en' | 'nl' | 'ru';

const translations = { fr, en, nl, ru } as const;

export function getTranslations(lang: Lang) {
  return translations[lang] ?? translations[defaultLang];
}
