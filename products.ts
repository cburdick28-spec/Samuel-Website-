import type { Product } from "../types";

const img = (seed: string, w = 900, h = 1125) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const products: Product[] = [
  {
    id: "p-01",
    slug: "aura-shell-anorak",
    name: "Aura Shell Anorak",
    subtitle: "Men's Packable Jacket",
    category: "outerwear",
    sport: "trail",
    price: 180,
    colors: [
      { name: "Ink Black", hex: "#111111" },
      { name: "Stone", hex: "#9e9ea0" },
      { name: "Teal Wash", hex: "#0a7281" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [img("anorak-1"), img("anorak-2"), img("anorak-3"), img("anorak-4")],
    badge: "Just In",
    description:
      "A packable shell built for the in-between weather — wind-sealed seams, a single chest pocket, and a drop-back hem that moves with you off the trail and onto the street.",
    details: [
      "Shell: 100% recycled nylon ripstop",
      "Fully seam-sealed, packs into its own pocket",
      "Adjustable hood with laminated brim",
      "Reflective hits at back yoke",
    ],
    isNew: true,
    isFeatured: true,
  },
  {
    id: "p-02",
    slug: "form-crew-tee",
    name: "Form Crew Tee",
    subtitle: "Unisex Essential Tee",
    category: "tops",
    sport: "training",
    price: 38,
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Ink Black", hex: "#111111" },
      { name: "Charcoal", hex: "#39393b" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [img("tee-1"), img("tee-2"), img("tee-3"), img("tee-4")],
    description:
      "The everyday tee, refined. A heavier-weight cotton jersey that holds its shape wash after wash, cut with a slightly dropped shoulder for an easy, unstructured line.",
    details: [
      "220gsm combed cotton jersey",
      "Dropped shoulder, straight hem",
      "Pre-shrunk, garment-dyed",
    ],
    isFeatured: true,
  },
  {
    id: "p-03",
    slug: "motion-tapered-pant",
    name: "Motion Tapered Pant",
    subtitle: "Men's Woven Training Pant",
    category: "bottoms",
    sport: "training",
    price: 98,
    salePrice: 68,
    colors: [
      { name: "Ink Black", hex: "#111111" },
      { name: "Olive", hex: "#4b4b4d" },
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    images: [img("pant-1"), img("pant-2"), img("pant-3"), img("pant-4")],
    description:
      "A tapered woven pant with just enough stretch to move through a full session and straight into the day — zip cuffs, a hidden waistband key pocket, and no bunching at the ankle.",
    details: [
      "88% nylon / 12% elastane woven",
      "Tapered leg, zip ankle cuffs",
      "Hidden zip key pocket at waistband",
    ],
  },
  {
    id: "p-04",
    slug: "zegama-trail-runner",
    name: "Zegama Trail Runner",
    subtitle: "Trail Running Shoe",
    category: "footwear",
    sport: "trail",
    price: 160,
    colors: [
      { name: "Ink Black", hex: "#111111" },
      { name: "Teal Wash", hex: "#0a7281" },
      { name: "Sale Red", hex: "#d30005" },
    ],
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    images: [img("run-1"), img("run-2"), img("run-3"), img("run-4")],
    badge: "Recycled Materials",
    description:
      "Built for vertical trail days — an aggressive lugged outsole, a rock plate underfoot, and a recycled-mesh upper that drains fast and dries faster.",
    details: [
      "Recycled mesh upper, gusseted tongue",
      "4mm lugged rubber outsole",
      "Internal rock plate, 8mm drop",
    ],
    isFeatured: true,
  },
  {
    id: "p-05",
    slug: "court-classic-low",
    name: "Court Classic Low",
    subtitle: "Unisex Tennis Shoe",
    category: "footwear",
    sport: "tennis",
    price: 110,
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Ink Black", hex: "#111111" },
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    images: [img("court-1"), img("court-2"), img("court-3"), img("court-4")],
    description:
      "The clean-court silhouette that never left. A full-grain leather upper, a herringbone outsole for lateral grip, and a cupsole built to age well.",
    details: [
      "Full-grain leather upper",
      "Herringbone rubber outsole",
      "Cushioned cupsole midsole",
    ],
  },
  {
    id: "p-06",
    slug: "range-quarter-zip",
    name: "Range Quarter-Zip",
    subtitle: "Men's Golf Pullover",
    category: "tops",
    sport: "golf",
    price: 85,
    colors: [
      { name: "Stone", hex: "#9e9ea0" },
      { name: "Ink Black", hex: "#111111" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [img("golf-1"), img("golf-2"), img("golf-3"), img("golf-4")],
    description:
      "A brushed-back quarter-zip that layers clean under a shell or stands alone on a warm front nine — four-way stretch, quiet branding, zero flap.",
    details: [
      "Brushed four-way stretch knit",
      "Quarter-zip mock neck",
      "Articulated sleeves for swing range",
    ],
  },
  {
    id: "p-07",
    slug: "field-tote",
    name: "Field Tote",
    subtitle: "Canvas Carry Tote",
    category: "accessories",
    sport: "street",
    price: 58,
    colors: [
      { name: "Charcoal", hex: "#39393b" },
      { name: "Ink Black", hex: "#111111" },
    ],
    sizes: ["One Size"],
    images: [img("tote-1"), img("tote-2"), img("tote-3"), img("tote-4")],
    badge: "Member Exclusive",
    description:
      "A heavy-canvas tote built to outlast the gym bag it replaced — reinforced base, an interior slip pocket, and straps long enough to sling cross-body.",
    details: [
      "18oz waxed canvas",
      "Reinforced leather base",
      "Interior zip and slip pockets",
    ],
  },
  {
    id: "p-08",
    slug: "layer-half-zip",
    name: "Layer Half-Zip",
    subtitle: "Women's Running Half-Zip",
    category: "tops",
    sport: "running",
    price: 72,
    salePrice: 50,
    colors: [
      { name: "Pink Wash", hex: "#ed1aa0" },
      { name: "Ink Black", hex: "#111111" },
      { name: "White", hex: "#ffffff" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [img("halfzip-1"), img("halfzip-2"), img("halfzip-3"), img("halfzip-4")],
    description:
      "A brushed thermal half-zip for the miles before sunrise — thumbholes, a reflective chest hit, and a fit that layers without bulk.",
    details: [
      "Brushed thermal knit interior",
      "Thumbhole cuffs",
      "Reflective logo at chest",
    ],
  },
  {
    id: "p-09",
    slug: "street-cargo-short",
    name: "Street Cargo Short",
    subtitle: "Unisex Utility Short",
    category: "bottoms",
    sport: "street",
    price: 64,
    colors: [
      { name: "Olive", hex: "#4b4b4d" },
      { name: "Ink Black", hex: "#111111" },
    ],
    sizes: ["28", "30", "32", "34", "36"],
    images: [img("cargo-1"), img("cargo-2"), img("cargo-3"), img("cargo-4")],
    badge: "Coming Soon",
    description:
      "A relaxed cargo short in heavyweight cotton twill — six pockets, a garment-washed finish, and a hem that sits right at the knee.",
    details: [
      "12oz cotton twill, garment-washed",
      "Six-pocket cargo construction",
      "Relaxed fit through hip and thigh",
    ],
  },
  {
    id: "p-10",
    slug: "aura-slip-dress",
    name: "Aura Slip Dress",
    subtitle: "Women's Bias-Cut Dress",
    category: "dresses",
    sport: "street",
    price: 96,
    colors: [
      { name: "Ink Black", hex: "#111111" },
      { name: "Purple Pale", hex: "#d6d1ff" },
    ],
    sizes: ["XS", "S", "M", "L"],
    images: [img("dress-1"), img("dress-2"), img("dress-3"), img("dress-4")],
    description:
      "A bias-cut slip in a fluid recycled satin — adjustable straps, a clean cowl neckline, and a drape that moves without clinging.",
    details: [
      "100% recycled satin",
      "Adjustable straps, cowl neckline",
      "Bias-cut for natural drape",
    ],
    isNew: true,
  },
  {
    id: "p-11",
    slug: "peak-insulated-vest",
    name: "Peak Insulated Vest",
    subtitle: "Men's Trail Vest",
    category: "outerwear",
    sport: "trail",
    price: 130,
    colors: [
      { name: "Ink Black", hex: "#111111" },
      { name: "Teal Wash", hex: "#0a7281" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [img("vest-1"), img("vest-2"), img("vest-3"), img("vest-4")],
    description:
      "Lightweight synthetic insulation for the shoulder seasons — packs small, blocks wind at the core, and leaves your arms free to move.",
    details: [
      "Recycled synthetic fill",
      "Wind-resistant shell face",
      "Packs into internal chest pocket",
    ],
  },
  {
    id: "p-12",
    slug: "grid-sock-3pk",
    name: "Grid Crew Sock 3-Pack",
    subtitle: "Unisex Cushioned Sock",
    category: "accessories",
    sport: "training",
    price: 22,
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Ink Black", hex: "#111111" },
    ],
    sizes: ["S", "M", "L"],
    images: [img("sock-1"), img("sock-2"), img("sock-3"), img("sock-4")],
    description:
      "Cushioned crew socks with mesh zones for breathability and an arch band that stays put through the last mile.",
    details: ["Cushioned heel and forefoot", "Mesh ventilation zones", "Arch compression band"],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getFeaturedProducts = () => products.filter((p) => p.isFeatured);

export const getNewProducts = () => products.filter((p) => p.isNew);

export const getRelatedProducts = (product: Product, limit = 4) =>
  products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
