export type Category =
  | "outerwear"
  | "tops"
  | "bottoms"
  | "footwear"
  | "accessories"
  | "dresses";

export type Sport =
  | "running"
  | "training"
  | "street"
  | "tennis"
  | "golf"
  | "trail";

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: Category;
  sport: Sport;
  price: number;
  salePrice?: number;
  colors: ColorSwatch[];
  sizes: string[];
  images: string[];
  badge?: "Just In" | "Coming Soon" | "Recycled Materials" | "Member Exclusive";
  description: string;
  details: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface CategoryTile {
  id: string;
  label: string;
  sport: Sport;
  image: string;
  href: string;
}

export interface Campaign {
  id: string;
  eyebrow: string;
  headline: string[];
  ctaLabel: string;
  href: string;
  image: string;
  imageMobile: string;
  theme: "light" | "dark";
}

export interface CartLine {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}
