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

**Page loader** — `PageLoader.astro` shows "Rozi · Dance" with a breathing/pulse animation (`loaderPulse` keyframe on `.loader-logo-text`). Dismissed via `setTimeout(600ms)` after `window.load` in `Layout.astro`. **TODO:** replace text with logo image (`/images/logo.webp` is now available).

**astro:page-load pattern** — All `<script>` blocks must wrap their init logic in a named function called via `document.addEventListener('astro:page-load', initXxx)`. Never call init functions directly at module level — View Transitions re-fires `astro:page-load` on each navigation, and direct calls skip re-init or accumulate listeners. For handlers attached to `document`/`window`, store the reference in a module-level variable and remove it before re-adding.

## Hero section (SectionHero.astro)

Full-screen video background using a **self-hosted MP4** (`/videos/hero.mp4`, 9.8MB, 720p 30s, no audio). Works on all breakpoints — mobile and desktop share the same layout.

- `<video autoplay muted loop playsinline disablepictureinpicture>` — no script needed, browser handles autoplay
- `poster="/images/og-default.webp"` while video loads
- Dark filter: `linear-gradient` top + `radial-gradient` on `.hero-filter` (z-index 1 above video)
- Geometric SVG watermark pattern (`.hero-pattern`) visible desktop only, opacity 0.07
- White text, `text-shadow` for legibility over video
- No YouTube iframe in the hero — replaced due to YouTube anti-bot (SABR) blocking embeds

Video was downloaded via yt-dlp (`--cookies-from-browser chrome --js-runtimes "node:/usr/local/bin/node"`) and compressed with ffmpeg (`-crf 26 -preset slow -movflags +faststart`).

## YouTube embeds (SectionVideos only)

Used exclusively in `SectionVideos.astro` for the 3 video cards.

- Domain: `www.youtube.com/embed/` (standard embed)
- Params: `autoplay=1&rel=0&modestbranding=1`
- Thumbnails: `https://img.youtube.com/vi/{id}/hqdefault.jpg`
- Click on thumbnail → `data-src` swapped into `iframe.src` → video plays inline
- Close button resets `iframe.src = ''` to stop playback
- All click listeners wrapped in `initVideos()` via `astro:page-load`
- **TODO:** replace placeholder video IDs with real IDs from Gago

## Mobile menu (Header.astro)

Frosted-glass drawer sliding from the right on mobile (≤768px).

- Hamburger button (`#menu-toggle`) in `.header-end` group alongside `LanguageSwitcher`
- Drawer (`#mobile-menu`, `.nav-mobile`) is `position: fixed; right: 0` — outside `<header>` in DOM
- Backdrop overlay (`#menu-backdrop`) sits between page content and drawer (z-index 139 / 140)
- Open: `translateX(100%) → translateX(0)` on drawer + `opacity: 0 → 1` on backdrop
- Link entrance: `opacity 0 + translateX(22px) + blur(4px) → visible`, staggered 60–260ms per link
- Close triggers: hamburger click, backdrop click, any link click, swipe up >60px
- `document.body.style.overflow = 'hidden'` when open to prevent scroll behind drawer
- Desktop: drawer hidden with `display: none !important`

## Sections with placeholder content

- **SectionStats** — 4 stat numbers, waiting for real figures from Gago
- **SectionTemoignages** — 3 testimonial cards, waiting for real quotes
- **SectionVideos** — 3 cards, waiting for real YouTube IDs from Gago

## Favicon

All favicon files generated from `public/images/logo.webp` (500×500):

| File | Size | Purpose |
|---|---|---|
| `public/favicon.svg` | 32px base64-embedded PNG | Modern browsers (priority 1) |
| `public/favicon.ico` | 32×32 | Legacy browsers / fallback |
| `public/icons/apple-touch-icon.png` | 180×180 | iOS home screen |
| `public/icons/icon-192.png` | 192×192 | Android PWA |
| `public/icons/icon-512.png` | 512×512 | PWA splash screen |

`Layout.astro` links: `favicon.svg` → `favicon.ico` → `apple-touch-icon`. `site.webmanifest` references `icon-192` and `icon-512`.

## Images

All images must be WebP. Placeholders use `onerror` fallback to `/images/placeholder.webp`.
- `public/images/logo.webp` — 500×500, used as favicon source and in header
- `public/images/galerie/photo-01.webp` → `photo-06.webp` — **TODO: real photos from Gago**
- `public/images/portrait-duo.webp` — **TODO: real portrait**
- `public/images/og-default.webp` (1200×630) — **TODO: real OG image**, also used as video poster
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

## Key conventions

- **Sentence case** everywhere in UI text (never Title Case)
- **No emojis** in the site UI
- **Mobile-first** CSS — base styles for mobile, then `@media (min-width: ...)` for larger screens
- **Tailwind utility classes** are used sparingly; component-scoped `<style>` blocks preferred
- **Border radius:** `var(--radius-btn)` = 2px (editorial), `var(--radius-card)` = 8px
- **Animations:** 400–700ms duration, `var(--ease-out-soft)` easing, never `ease-in`
- Borders are `0.5px solid` (not 1px) for the editorial thin look
- **Eyebrow labels** use `#7A5C20` (not `var(--color-gold)`) for WCAG contrast compliance on ivory bg
