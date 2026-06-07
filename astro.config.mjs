// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://rozidance.be',
  trailingSlash: 'never',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'nl', 'ru', 'de', 'es', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-BE', en: 'en-GB', nl: 'nl-BE', ru: 'ru-RU', de: 'de-DE', es: 'es-ES', it: 'it-IT' },
      },
    }),
    icon({
      include: {
        lucide: ['*'],
        'simple-icons': ['instagram', 'youtube'],
      },
    }),
  ],
});
