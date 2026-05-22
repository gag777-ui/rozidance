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

**i18n** — V1 is French-only but structured for V2 multilingue (EN/RU/HY). All UI strings live in `src/i18n/fr.json`. Components call `getTranslations('fr')` which returns the typed JSON object directly (no dot-string lookup needed).

**Page structure** — `index.astro` is a single-scroll page. Section order: Hero → Prestations → Galerie → Vidéos → À propos → Stats → Témoignages → FAQ → Contact. Each section is its own `src/components/sections/Section*.astro`. `Layout.astro` handles `<head>`, Google Fonts (non-render-blocking via `rel="preload"`), View Transitions, scroll-reveal observer, and page-loader dismiss.

**Scroll reveal** — `.reveal` elements animate in via `IntersectionObserver` (adds `.is-visible`). CSS transitions in `global.css`.

**Custom cursor** — `Cursor.astro`, desktop only (`hover: hover` + `pointer: fine`).

**Page loader** — `PageLoader.astro` shows "Rozi · Dance" with a breathing/pulse animation (`loaderPulse` keyframe on `.loader-logo-text`). Dismissed via `setTimeout(600ms)` after `window.load` in `Layout.astro`. **TODO:** replace text with logo image when available.

## Hero section (SectionHero.astro)

Dual layout — same component, different behaviour per breakpoint:

- **Mobile (<901px):** ivory background, 1-col grid (text above, video widget below). Widget uses `data-src` loaded at `window.load`. Edge fade (4 linear-gradient layers) on `.video-edge-fade` inside the frame.
- **Desktop (≥901px):** full-screen YouTube background (`youtube-nocookie.com`, `disablepictureinpicture`, `data-src` loaded at `window.load`). Dark radial-gradient filter + strong top gradient (`rgba 0.96 → transparent over 42%`) to hide YouTube title overlay. White text with text-shadow. Section `background-color: var(--color-bg-dark)` so no flash before video loads.

Both iframes use `data-src` (not `src`) to avoid blocking `window.load`. The script swaps `data-src` → `src` after load.

## YouTube embeds

- Domain: `www.youtube-nocookie.com` (reduces Chrome media session integration)
- Params: `controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&fs=0&autoplay=1&mute=1&loop=1`
- Attribute: `disablepictureinpicture` on all hero iframes
- Hero video ID: `PUBLIC_HERO_VIDEO_ID` env var → `.env`. Falls back to a placeholder.
- **Known limitation:** Chrome briefly shows its Global Media Controls overlay on video start. Cannot be prevented with CSS/HTML on YouTube iframes. V2 fix: replace with native `<video>` element.
- **TODO:** replace placeholder IDs with real IDs from Gago (`PUBLIC_HERO_VIDEO_ID` + 3 cards in `SectionVideos.astro`).

## Sections with placeholder content

- **SectionStats** — 4 stat numbers, waiting for real figures from Gago
- **SectionTemoignages** — 3 testimonial cards, waiting for real quotes
- **SectionFAQ** — 5 Q&A items, CSS-only `<details>/<summary>` accordion
- **SectionVideos** — 3 cards with `video-placeholder.webp`, waiting for real YouTube IDs

## Images

All images must be WebP. Placeholders use `onerror` fallback to `/images/placeholder.webp`.
- `public/images/galerie/photo-01.webp` → `photo-06.webp` — **TODO: real photos from Gago**
- `public/images/portrait-duo.webp` — **TODO: real portrait**
- `public/images/og-default.webp` (1200×630) — **TODO: real OG image**
- `public/images/video-placeholder.webp` — dark 480×270 placeholder for video cards

## Pages

- `/` — single-scroll homepage
- `/cours` — tarifs + FAQ accordion
- `/404` — custom 404
- `/mentions-legales` — **TODO: page not yet created**, linked in Footer

## Schema.org

`SchemaOrg.astro` injects JSON-LD via `<slot name="schema">` in Layout. Contains LocalBusiness + PerformingGroup + Person×2 + Service×3.

## V1 constraints (do not add in V1)

- No contact form (V2: Web3Forms)
- No WhatsApp floating button (V2)
- No audio player (V2)
- No dark mode (V2)
- Language selector hidden (V2: show when EN/RU/HY added)
- No MP4 hero video (V2: replace YouTube iframe with `<video autoplay muted loop playsinline>`)

## Key conventions

- **Sentence case** everywhere in UI text (never Title Case)
- **No emojis** in the site UI
- **Mobile-first** CSS — base styles for mobile, then `@media (min-width: ...)` for larger screens
- **Tailwind utility classes** are used sparingly; component-scoped `<style>` blocks preferred
- **Border radius:** `var(--radius-btn)` = 2px (editorial), `var(--radius-card)` = 8px
- **Animations:** 400–700ms duration, `var(--ease-out-soft)` easing, never `ease-in`
- Borders are `0.5px solid` (not 1px) for the editorial thin look
- **Eyebrow labels** use `#7A5C20` (not `var(--color-gold)`) for WCAG contrast compliance on ivory bg
