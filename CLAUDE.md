# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workflow

**Longueur de contexte** — Faire un `/clear` (ou ouvrir une nouvelle session) dès que le contexte devient long (~500k tokens). Un contexte saturé ralentit les réponses et peut causer des oublis. Toujours commit + push avant de `/clear` pour ne rien perdre.

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

**Key npm deps added:** `gsap@3.15`, `lenis@1.3` (animation). `uipro-cli` installed globally (`uipro init --ai claude` — skill files in `.claude/skills/ui-ux-pro-max/`). Magic MCP (`@21st-dev/magic`) added to user Claude config (`~/.claude.json`).

## Architecture

**Framework:** Astro 6 (static output), TypeScript strict, Tailwind CSS v4 via `@tailwindcss/vite`.

**Styling system** — `src/styles/global.css` uses Tailwind v4 `@theme {}` block (not `tailwind.config.*`). All design tokens are CSS custom properties defined there (`--color-accent`, `--font-serif`, etc.) and used directly in component `<style>` blocks. Never hardcode colors or fonts — always reference a token.

**i18n** — V1 is French-only but structured for V2 multilingue (EN/RU/HY). All UI strings live in `src/i18n/fr.json`. Components call `getTranslations('fr')` which returns the typed JSON object directly (no dot-string lookup needed).

**Page structure** — `index.astro` is a single-scroll page. Section order: Hero → Prestations → Galerie → Vidéos → À propos → Stats → Témoignages → FAQ → Contact. Each section is its own `src/components/sections/Section*.astro`. `Layout.astro` handles `<head>`, Google Fonts (non-render-blocking via `rel="preload"`), View Transitions, scroll-reveal observer, and page-loader dismiss.

**Scroll reveal** — `.reveal` elements animate in via `IntersectionObserver` (adds `.is-visible`). CSS transitions in `global.css`. GSAP ScrollTrigger is also active (see Animation system below) for hero parallax and title word-reveal. Durations: `.reveal` / `.reveal-left` / `.reveal-right` = 950ms, `.reveal-fade` = 1050ms, `.reveal-scale` = 900ms, eyebrow = 750ms, section-title = 1100ms + 200ms delay. Threshold: 0.12.

**Animation system** — `Layout.astro` contains a second `<script>` block that imports `gsap` + `lenis` (both installed as npm deps). It runs `init()` / `destroy()` around View Transitions via `astro:before-swap` / `astro:page-load`. Features active:
- **Lenis** smooth scroll (duration 1.4, `smoothWheel: true`). `prevent: #mobile-menu` so drawer scroll still works. Forces `scrollBehavior: auto` on `<html>` to avoid conflict with CSS smooth scroll.
- **Hero parallax** — `.hero-bg-video` moves `yPercent 28` scrub 2, `.hero-text` fades + moves up scrub 1.5 as user scrolls.
- **Hero title entrance** — three-step sequence in `SectionHero.astro`: (1) `line1` "Bienvenu" CSS fade-up at 500ms; (2) `line2` typewriter via `initHeroTypewriter()` — reads `#hero-line2` text, clears it, re-types char by char (65ms/char ±12ms jitter, no cursor), starts at 900ms; (3) `#hero-italic` GSAP slide-in via `initHeroTitleAnimation()` — "Rozi" from left (`x: -vw*1.15`), "Dance" from right, `.hw-dot` pops in at 0.68s, total delay 2.0s. Works for all languages (text read dynamically).
- **Magnetic buttons** — `.btn-primary`, `.btn-ghost`, `.hero-btn-ghost` attract toward cursor on `mousemove`, spring back on `mouseleave` via `elastic.out`. Uses `AbortController` for cleanup.
- **Section title word-reveal** — `.section-title` inside `.section-header` are split into word-mask spans (`.tw-wrap` / `.tw-inner`), animated via GSAP `yPercent 105→0` stagger on ScrollTrigger enter. Only applied once per element (`data-gsap-split` flag).
- Lenis CSS utilities added to `global.css` (`.lenis-smooth`, `.lenis-stopped`).

**Custom cursor** — `Cursor.astro` is imported in `Layout.astro` with `transition:persist`. Desktop only (`hover: hover` + `pointer: fine`). Three states: `default` (dot + ring), `cursor-grow` (ring expands gold, on links/buttons), `cursor-text` (liquid glass bubble with "Voir" label, on `.gallery-item` and `.video-thumb-btn`). RAF loop starts only once (guarded by `rafStarted` flag). Event listeners re-attached on every `astro:page-load`.

**Page loader** — `PageLoader.astro` shows "Rozi · Dance" with a breathing/pulse animation (`loaderPulse` keyframe on `.loader-logo-text`). Dismissed via `setTimeout(600ms)` after `window.load` in `Layout.astro`. **TODO:** replace text with logo image (`/images/logo.webp` is now available).

**astro:page-load pattern** — All `<script>` blocks must wrap their init logic in a named function called via `document.addEventListener('astro:page-load', initXxx)`. The GSAP animation block calls `init()` directly at module level AND via `astro:page-load`. **IMPORTANT:** `destroy()` kills all ScrollTriggers but does NOT reset GSAP inline styles on animated elements. The word-reveal (`data-gsap-split`) must therefore re-create its ScrollTrigger on every `init()` call — the split is skipped if already done, but `gsap.set(yPercent:105)` and `ScrollTrigger.create()` always run. Failing to do this leaves `.tw-inner` stuck at `yPercent:105` (invisible behind `overflow:hidden`). For other handlers attached to `document`/`window`, store the reference in a module-level variable and remove it before re-adding.

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

## Page /chant — cards Instagram reels

`src/pages/chant.astro` — 3 cards liées à des reels Instagram via `reelHrefs[]` (index 0/1/2). Chaque card cliquable = `<a target="_blank">`. Pour ajouter/changer un reel, modifier le tableau `reelHrefs` dans le frontmatter de la page. `null` = card sans lien.

**Cards Prestations (`SectionPrestations.astro`)** — les card-shells sont des `<a>` (toute la surface cliquable). Flow: Homepage card "L'art du chant" → `/chant` → cards reels Instagram.

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
- `/chant` — page "L'art du chant" avec 3 cards (Soul, Pop, Jazz) liées à des reels Instagram
- `/404` — custom 404
- `/mentions-legales` — page créée, contenu complet (éditeur, hébergement Vercel, RGPD, droit belge), hardcodée en français seulement
- `/galerie` — page galerie complète avec 15 photos (photo-01 à photo-15), PhotoSwipe lightbox, bouton Instagram

## Schema.org

`SchemaOrg.astro` injects JSON-LD via `<slot name="schema">` in Layout. Contains LocalBusiness + PerformingGroup + Person×2 + Service×3.

## Audit V1 — état au 2026-06-01 (mis à jour session 2)

Audit complet FR + EN + NL + RU — 62 pages buildées, zéro erreur.

**Images hero par page (toutes langues) :**
- `mariages-hero.webp` — mariée avec pivoine rose (2048×1365), bords fondus mask-image
- `cours-hero.webp` — danseuse + clé de sol (1536×1024), bords fondus mask-image
- `chant-hero.webp` — micro + clé de sol dorés (1536×1024), bords fondus mask-image
- Toutes les pages ont hero 2-colonnes (texte gauche, image droite) + mobile 1-colonne

**Image reel universelle :** `reel-mariages.webp` (1013×1372, format 3/4, bords arrondis 1.25rem)
- Utilisée dans : cours/[slug], [lang]/cours/[slug], mariages/[slug], [lang]/mariages/[slug], chant, [lang]/chant, mariages, [lang]/mariages

**Galerie :** 15 photos (photo-01 à photo-15 dont photo-05 ajoutée), layout masonry CSS columns (3 col desktop, 2 col mobile), PhotoSwipe lightbox. Synchronisé FR + EN/NL/RU.

**Footer logo :** `logo-footer.webp` (500×500) — logo Rozi Dance fond transparent collé sur ivoire `#F7F1E6` via Python Pillow. CSS : `border-radius: 32px`, `background-color: #F7F1E6` (forcé CSS pour éviter fond sombre), `box-shadow` doux. Remplace le texte "Rozi · Dance" dans `.footer-brand`.

**Section Prestations icônes :** Taille 30px dans container 52px. Alliance → or `#B8860B`, Micro → rouge `#D32828`, Notes de musique → violet `#7B5EA7`. Scale 1.15 au hover.

**Hero mobile :** "Bienvenu" animation 200ms/80ms delay. Typewriter démarre à 0ms (immédiat), "Rozi · Dance" GSAP delay 0.3s. Détection mobile via `window.matchMedia('(max-width: 768px)')`.

**Corrections audit session 1 :**
- `SectionStats.astro` — `id="stats"` ajouté
- `cours.astro` — listes i18n via `t.cours.chantList` / `t.cours.danseList`
- `galerie.astro` — lien retour et titre i18n + variable `base`
- `Footer.astro` — Navigation et Liens côte à côte (space-between)

**Corrections audit session 2 (FR/EN/NL/RU) :**
- `cours.reels` ajouté dans `en.json`, `nl.json`, `ru.json` (grille reels était invisible sur EN/NL/RU)
- Hover bug `translate(-50%,-50%)` supprimé dans tous les fichiers [lang]
- Toutes les occurrences de `reel-logo.webp` remplacées par `reel-mariages.webp`
- `cours/[slug]` + `[lang]/cours/[slug]` — image + hover + aspect-ratio 3/4 + border-radius 1.25rem

**État i18n :** 125 clés identiques FR/EN/NL/RU — 0 manquant. `nav.reelLabel` ajouté (session 3).

**Corrections audit session 3 (audit final avant livraison) :**
- `nav.reelLabel` ajouté dans les 4 langues — "Voir le reel" n'est plus hardcodé en FR dans les pages EN/NL/RU
- Footer watermark SVG — polygones en étoile (3×) supprimés, conservé double ligne + losanges
- Footer logo — `logo-footer.webp` sur fond ivoire `#F7F1E6` via `background-color` CSS, `border-radius: 32px`, 150px desktop / 110px mobile
- Favicons régénérés depuis logo Rozi Dance (favicon.svg/ico + icons/apple-touch-icon/192/512)
- Hero mobile — "Bienvenu" 200ms/80ms, typewriter 0ms, "Rozi·Dance" GSAP 0.3s
- Prestations icônes — 30px/52px container, or/rouge/violet, scale hover
- Galerie masonry — photo-05 ajoutée, layout CSS columns

**Audit final — résultat :**
- Build : 62 pages, 0 erreur
- Images référencées : 7/7 présentes
- i18n : 125 clés × 4 langues = 0 manquant
- IDs sections : #prestations #galerie #videos #apropos #stats #temoignages #faq #contact — tous OK
- YouTube IDs : zTQRoFT6tX4, xa3-8ONanC4, mO7R2CxR5mQ — vrais IDs
- reel-logo.webp : 0 occurrence restante
- translate(-50%,-50%) bug : 0 occurrence (les restantes sont légitimes : FAQ accordéon, Cursor, vidéo héro)
- Webmanifest : OK
- Favicons : tous à jour (logo Rozi Dance)

**Non bloquant V1 :**
- `mentions-legales` hardcodée en français uniquement (acceptable V1)
- `"Voir le reel"` hardcodé dans cours.astro (à i18niser en V2)

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
- **Border radius:** `var(--radius-btn)` = 2px (editorial), `var(--radius-card)` = 8px. Exception: `SectionPrestations` cards use `border-radius: 1.75rem` (overrides token) for a more rounded premium look.
- **Animations:** 400–700ms duration, `var(--ease-out-soft)` easing, never `ease-in`
- Borders are `0.5px solid` (not 1px) for the editorial thin look
- **Eyebrow labels** use `#7A5C20` (not `var(--color-gold)`) for WCAG contrast compliance on ivory bg
