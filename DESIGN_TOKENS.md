# DESIGN_TOKENS

Reference baseline extracted from the live `get.eboo.ai` homepage and recreated for `tools.eboo.ai` without cloning production layout/assets wholesale.

## Visual direction
- **Overall feel:** modern AI landing page with a dark cinematic hero and bright white content sections.
- **Personality:** calm, competent, slightly futuristic.
- **Avoid:** loud rainbow gradients, glassmorphism everywhere, over-animated dashboards, generic neon-cyberpunk sludge.

## Typography
- **Font family:** `Inter, system-ui, sans-serif`
- **Weights used:** 400, 500, 600, 700
- **Heading behavior:** tight tracking, large scale, heavy weight, short line lengths.
- **Body behavior:** 16–18px feeling, comfortable line-height, slightly muted color.

## Color system
### Core darks
- `#202735` – hero gradient start
- `#141928` – hero gradient middle
- `#090D18` – hero gradient end
- `#0F1523` – dark button endpoint / deep ink
- `#273751` – dark button highlight

### Accent greens
- `#4BDE80` – primary glow accent
- `#3AB769` – bright green CTA stop
- `#297845` – darker green CTA stop
- `#9BFFD0` – highlight tint for hero emphasis

### Light neutrals
- `#FFFFFF` – surface
- `#F1F1F1` – muted section background
- `#111827` – primary text
- `rgba(17,24,39,0.72)` – secondary copy
- `rgba(15,21,35,0.08)` – soft borders

## Gradients
### Hero background
```css
linear-gradient(180deg, #202735 0%, #141928 48%, #090D18 100%)
```

### Dark button
```css
radial-gradient(circle at top, #273751, #0F1523)
```

### Primary green CTA
```css
linear-gradient(180deg, #297845, #3AB769)
```

### Light CTA variant
```css
linear-gradient(180deg, #E5ECFC, #C6C7C8)
```

## Radii
- **Hero / pricing / content cards:** 24px
- **Secondary cards:** 20px
- **Buttons:** 12px
- **Pills / chips:** 999px

## Shadows and glow
- Standard surface shadow: `0 18px 50px rgba(15,21,35,0.08)`
- Accent glow: `0 0 20px rgba(75,222,128,0.35)`
- Use glow sparingly for hero or CTA emphasis only.

## Layout rules
- **Container width:** about `1120px max`
- **Hero spacing:** generous, roughly 80–100px vertical padding
- **Section spacing:** 80–90px vertical rhythm
- **Grid behavior:** 2–3 columns on desktop, 1 column on smaller screens

## Components
### Header/nav
- Sticky white header
- Simple text nav links
- Dark compact CTA button on the right

### Hero
- Large headline
- Green highlight word/treatment
- One primary CTA + one secondary CTA
- Orbital visual or operator card motif to echo the live homepage mood

### Logo rail
- Neutral pills or restrained logo tiles
- Keep partner marks low-drama

### Cards
- White background
- Soft border
- Large radius
- Light shadow
- Dark heading, muted copy

### CTA strip
- Return to the dark hero palette
- Strong contrast buttons
- Keep copy concise and high-intent

### Footer
- Minimal white footer
- Thin top border
- Small nav links + compact brand lockup

## Usage rules
1. Keep the **dark-to-light** narrative: hero dark, content light, CTA dark, footer light.
2. Use the green accent as a **signal**, not wallpaper.
3. Prefer short headlines and operational language over fluffy AI buzzword soup.
4. Any added illustrations should feel clean, geometric, and slightly technical.
5. If a new section does not improve clarity, cut it. Landing pages rot when they over-explain.
