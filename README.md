# Rozi Dance — Site vitrine

Site vitrine premium pour Rozi Dance, duo artistique arménien (chant, danse, cours).

**Stack :** Astro 6 · TypeScript · Tailwind CSS v4 · GSAP · PhotoSwipe · Vercel

---

## Lancer en local

```bash
cd Projets/rozidance
npm install
npm run dev          # http://localhost:4321
```

## Build & preview

```bash
npm run build        # Build de production → ./dist/
npm run preview      # Preview du build en local
```

## Déploiement Vercel

```bash
vercel               # Preview
vercel --prod        # Production
```

## Variables d'environnement

Copier `.env.example` en `.env.local` et remplir :

| Variable | Description |
|---|---|
| `PUBLIC_HERO_VIDEO_ID` | ID YouTube de la vidéo hero |

## Structure

```
src/
├── components/layout/    # Header, Footer
├── components/sections/  # SectionHero, Prestations, Galerie, Vidéos, etc.
├── components/ui/        # Cursor, PageLoader, GeoDivider
├── i18n/fr.json          # Tous les textes FR (prêt multilingue V2)
├── layouts/Layout.astro  # Layout principal + SEO
└── pages/                # index.astro, cours.astro, 404.astro
```

## Ajouter les photos

WebP uniquement dans `public/images/` :
- `galerie/photo-01.webp` → `photo-06.webp`
- `portrait-duo.webp`
- `og-default.webp` (1200×630 px)

Conversion JPG → WebP : `cwebp input.jpg -q 85 -o output.webp`

## V2 — Multilingue

1. Créer `src/i18n/en.json`, `ru.json`, `hy.json`
2. Mettre à jour `src/i18n/utils.ts` (type `Lang`)
3. Mettre à jour `astro.config.mjs` (locales)
4. Afficher le sélecteur dans `Header.astro`
