import fr from './fr.json';
import en from './en.json';
import nl from './nl.json';
import ru from './ru.json';
import hy from './hy.json';

export const defaultLang = 'fr' as const;
export type Lang = 'fr' | 'en' | 'nl' | 'ru' | 'hy';

const translations = { fr, en, nl, ru, hy } as const;

export function getTranslations(lang: Lang) {
  return translations[lang] ?? translations[defaultLang];
}
