# AURA — Fashion Commerce Site

A minimalist, editorial fashion storefront built with React, TypeScript, and Vite.
The visual system is adapted from a photography-first commerce design language:
extreme typographic contrast (huge uppercase display type burned into full-bleed
campaign imagery), a near-monochrome black/white/soft-gray retail chrome, pill-shaped
CTAs everywhere, flat zero-radius product cards, and an 8px spacing grid.

## Stack

- React 18 + TypeScript
- Vite
- React Router (client-side routing)
- CSS Modules (no UI framework/dependency — every component owns its own styles)
- Design tokens in `src/styles/tokens.css`

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:5173`).

Other scripts:

```bash
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build
npm run lint      # type-check only
```

## Project structure

```
src/
  styles/        design tokens, global reset, motion/animation utilities
  types/         shared TypeScript types (Product, Campaign, CartLine, ...)
  data/          product, category, and campaign content
  icons/         inline SVG icon components
  hooks/         useRevealOnScroll, useScrollToTop
  context/       CartContext (bag state)
  components/
    common/      Button, IconButton, Badge, SwatchDots, FilterChip, SearchPill,
                 DisclosureRow, RevealOnScroll — shared across every page
    layout/      UtilityBar, PrimaryNav (+ mobile drawer/search), Footer
    cart/        CartDrawer
    product/     ProductCard, ProductGrid
    home/        CampaignTile, TrendingRow, ShopBySportRail, LatestGrid,
                 MemberBenefits, Newsletter
    plp/         FilterSidebar, SortBar (product listing page controls)
    pdp/         ProductGallery (product detail page)
  pages/         Home, Shop, Product, Membership, NotFound
  App.tsx        route table + page chrome
  main.tsx       app entry point
```

Product photography uses [Picsum](https://picsum.photos) as deterministic
placeholder imagery — swap the URLs in `src/data/*.ts` for real product/campaign
photography when available.
