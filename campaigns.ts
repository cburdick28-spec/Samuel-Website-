import type { Campaign } from "../types";

const img = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const heroCampaign: Campaign = {
  id: "campaign-hero",
  eyebrow: "New Season",
  headline: ["Wear", "The", "Line"],
  ctaLabel: "Shop the Drop",
  href: "/shop?filter=new",
  image: img("hero-main", 1920, 1080),
  imageMobile: img("hero-main-mobile", 900, 1125),
  theme: "dark",
};

export const secondaryCampaigns: Campaign[] = [
  {
    id: "campaign-trail",
    eyebrow: "Off the Grid",
    headline: ["Run", "Further"],
    ctaLabel: "Shop Trail",
    href: "/shop?sport=trail",
    image: img("campaign-trail", 1200, 1500),
    imageMobile: img("campaign-trail-m", 900, 1125),
    theme: "light",
  },
  {
    id: "campaign-street",
    eyebrow: "City Edit",
    headline: ["Move", "Different"],
    ctaLabel: "Shop Street",
    href: "/shop?sport=street",
    image: img("campaign-street", 1200, 1500),
    imageMobile: img("campaign-street-m", 900, 1125),
    theme: "dark",
  },
];

export const membershipHero: Campaign = {
  id: "campaign-membership",
  eyebrow: "Aura Access",
  headline: ["Join", "The", "Club"],
  ctaLabel: "Become a Member",
  href: "#join",
  image: img("membership-hero", 1920, 1080),
  imageMobile: img("membership-hero-m", 900, 1125),
  theme: "dark",
};
