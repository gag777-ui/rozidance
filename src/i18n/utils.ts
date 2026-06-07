import fr from './fr.json';
import en from './en.json';
import nl from './nl.json';
import ru from './ru.json';
import de from './de.json';
import es from './es.json';
import it from './it.json';

export const defaultLang = 'fr' as const;
export type Lang = 'fr' | 'en' | 'nl' | 'ru' | 'de' | 'es' | 'it';

const translations = { fr, en, nl, ru, de, es, it } as const;

export function getTranslations(lang: Lang) {
  return translations[lang] ?? translations[defaultLang];
}
