# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Rozi Dance** — Premium showcase site for an Armenian artistic duo (bridal singing, event dance, singing & dance lessons). Static site, no database.

Client: Gago (project manager). Beneficiaries: Rozi Dance artists (his cousins).
Instagram: [@rozi.dance](https://instagram.com/rozi.dance)

## Commands

```bash
npm run dev        # Dev server → http://localhost:4321
npm run build      # Production build → ./dist/
npm run preview    # Preview production build locally
```

No test suite or linter configured yet.

## Architecture

**Framework:** Astro 6 (static output), TypeScript strict, Tailwind CSS v4 via `@tailwindcss/vite`.

**Styling system** — `src/styles/global.css` uses Tailwind v4 `@theme {}` block (not `tailwind.config.*`). All design tokens are CSS custom properties defined there (`--color-accent`, `--font-serif`, etc.) and used directly in component `<style>` blocks. Never hardcode colors or fonts — always reference a token.

**i18n** — V1 is French-only but structured for V2 multilingue (EN/RU/HY). All UI strings live in `src/i18n/fr.json`. Components call `getTranslations('fr')` which returns the typed JSON object directly (no dot-string lookup needed). To add a language: create the JSON, add it to `utils.ts`, update `astro.config.mjs` locales, show the selector in `Header.astro`.

**Page structure** — `index.astro` is a single-scroll page composed of section components. Each section is its own `src/components/sections/Section*.astro` file that imports translations directly. `Layout.astro` handles all `<head>` SEO, Google Fonts, View Transitions, and injects the scroll-reveal + page-loader scripts globally.

**Scroll reveal** — Elements with class `.reveal` animate in via `IntersectionObserver` in `Layout.astro`'s inline script (adds `.is-visible`). CSS transitions are in `global.css`. No GSAP needed for this — GSAP is available but not yet wired up.

**Custom cursor** — `Cursor.astro` activates only on `(hover: hover) and (pointer: fine)` (desktop). The `cursor-grow` class on `<body>` triggers via JS when hovering interactive elements.

**Images** — All images must be WebP. Placeholders use `onerror` fallback to `/images/placeholder.webp`. The `public/images/galerie/` folder expects `photo-01.webp` through `photo-06.webp`. Portrait at `public/images/portrait-duo.webp`. OG image at `public/images/og-default.webp` (1200×630).

**Video hero** — YouTube embed configured via `PUBLIC_HERO_VIDEO_ID` env var (in `.env`). Falls back to a placeholder ID. The `SectionHero.astro` has a `.yt-cover` div that hides the YouTube logo. **TODO:** replace with real video ID from Gago.

**YouTube video cards** — `SectionVideos.astro` has placeholder IDs (`VIDEO_ID_1/2/3`). Player activates inline on click by swapping `data-src` → `src` on the iframe.

**Schema.org** — `SchemaOrg.astro` injects JSON-LD via a named `<slot name="schema">` in Layout. Contains LocalBusiness + PerformingGroup + Person×2 + Service×3.

## V1 constraints (do not add in V1)

- No contact form (V2: Web3Forms)
- No WhatsApp floating button (V2)
- No audio player (V2)
- No dark mode (V2)
- Language selector hidden (V2: show when EN/RU/HY added)
- No MP4 hero video (V2: replace YouTube iframe)

## Key conventions

- **Sentence case** everywhere in UI text (never Title Case)
- **No emojis** in the site UI (used as temporary icon placeholders only — replace with SVG icons)
- **Mobile-first** CSS — base styles for mobile, then `@media (min-width: ...)` for larger screens
- **Tailwind utility classes** are used sparingly; component-scoped `<style>` blocks with CSS custom properties are preferred for anything beyond basic layout
- **Border radius:** `var(--radius-btn)` = 2px (editorial), `var(--radius-card)` = 8px
- **Animations:** 400–700ms duration, `var(--ease-out-soft)` easing, never use `ease-in` for UI
- Borders are `0.5px solid` (not 1px) for the editorial thin look
