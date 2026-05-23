// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://rozidance.be',
  trailingSlash: 'never',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'nl', 'ru', 'hy'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-BE', en: 'en-GB', nl: 'nl-BE', ru: 'ru-RU', hy: 'hy-AM' },
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
