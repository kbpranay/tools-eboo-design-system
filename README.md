# tools.eboo.ai design-system starter

A small deployable React/Vite starter inspired by the live `get.eboo.ai` homepage design language.

## What this includes
- Inter-based typography
- Sticky header with anchor navigation
- Dark gradient hero with neon-green glow accents
- Reusable feature, template, use-case, CTA, and pricing sections
- Integration/logo pill treatment
- Responsive landing-page layout
- `DESIGN_TOKENS.md` documenting colors, typography, spacing, and usage rules

## Why this exists
This is a practical baseline for `tools.eboo.ai`.
It borrows the **style system and layout rhythm** from `get.eboo.ai` while recreating the UI in clean custom code instead of copying the production HubSpot site wholesale.

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Files to know
- `src/App.jsx` – page structure and reusable content sections
- `src/App.css` – all layout, component, and tokenized styling
- `DESIGN_TOKENS.md` – extracted design baseline and usage rules

## Extracted baseline from get.eboo.ai
- **Font:** Inter
- **Hero palette:** deep navy/charcoal gradient (`#202735 → #141928 → #090D18`)
- **Accent:** green glow (`#4BDE80`) with green CTA ramp (`#297845 → #3AB769`)
- **Structure:** sticky header, cinematic hero, white content cards, muted logo rail, minimal footer
- **Buttons:** dark radial primary buttons and bright accent CTAs with 12px radius
- **Card language:** white surfaces, large radii, soft shadows, restrained borders

## Deployment
This repo is designed to deploy cleanly on Vercel as a static Vite site.
