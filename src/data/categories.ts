import type { CategoryTile } from "../types";

const img = (seed: string, w = 800, h = 1000) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const sportRail: CategoryTile[] = [
  {
    id: "sport-running",
    label: "Running",
    sport: "running",
    image: img("sport-running"),
    href: "/shop?sport=running",
  },
  {
    id: "sport-training",
    label: "Training",
    sport: "training",
    image: img("sport-training"),
    href: "/shop?sport=training",
  },
  {
    id: "sport-trail",
    label: "Trail",
    sport: "trail",
    image: img("sport-trail"),
    href: "/shop?sport=trail",
  },
  {
    id: "sport-tennis",
    label: "Tennis",
    sport: "tennis",
    image: img("sport-tennis"),
    href: "/shop?sport=tennis",
  },
  {
    id: "sport-golf",
    label: "Golf",
    sport: "golf",
    image: img("sport-golf"),
    href: "/shop?sport=golf",
  },
  {
    id: "sport-street",
    label: "Street",
    sport: "street",
    image: img("sport-street"),
    href: "/shop?sport=street",
  },
];

export const clothingIcons = [
  { id: "cat-outerwear", label: "Outerwear", href: "/shop?category=outerwear" },
  { id: "cat-tops", label: "Tops", href: "/shop?category=tops" },
  { id: "cat-bottoms", label: "Bottoms", href: "/shop?category=bottoms" },
  { id: "cat-footwear", label: "Footwear", href: "/shop?category=footwear" },
  { id: "cat-accessories", label: "Accessories", href: "/shop?category=accessories" },
  { id: "cat-dresses", label: "Dresses", href: "/shop?category=dresses" },
  { id: "cat-new", label: "New Arrivals", href: "/shop?filter=new" },
  { id: "cat-sale", label: "Sale", href: "/shop?filter=sale" },
];
