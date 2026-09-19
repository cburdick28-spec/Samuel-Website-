import type { Campaign } from "../../types";
import { Button } from "../common/Button";
import styles from "./CampaignTile.module.css";

interface CampaignTileProps {
  campaign: Campaign;
  size?: "hero" | "standard";
  headingLevel?: "h1" | "h2";
}

export function CampaignTile({ campaign, size = "standard", headingLevel = "h2" }: CampaignTileProps) {
  const sizeClass = size === "hero" ? styles.hero : styles.standard;
  const themeClass = campaign.theme === "light" ? styles.light : "";
  const Heading = headingLevel;

  return (
    <div className={`${styles.tile} ${sizeClass} ${themeClass}`.trim()}>
      <picture>
        <source media="(max-width: 640px)" srcSet={campaign.imageMobile} />
        <img src={campaign.image} alt="" className={styles.image} loading={size === "hero" ? "eager" : "lazy"} />
      </picture>
      <div className={styles.scrim} />
      <div className={styles.content}>
        <span className={styles.eyebrow}>{campaign.eyebrow}</span>
        <Heading className={styles.headline}>
          {campaign.headline.map((line) => (
            <span key={line} style={{ display: "block" }}>
              {line}
            </span>
          ))}
        </Heading>
        <div className={styles.ctaRow}>
          <Button href={campaign.href} variant="onImage">
            {campaign.ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
