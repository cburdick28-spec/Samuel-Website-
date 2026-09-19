import { heroCampaign, secondaryCampaigns } from "../data/campaigns";
import { CampaignTile } from "../components/home/CampaignTile";
import { TrendingRow } from "../components/home/TrendingRow";
import { ShopBySportRail } from "../components/home/ShopBySportRail";
import { LatestGrid } from "../components/home/LatestGrid";
import { MemberBenefits } from "../components/home/MemberBenefits";
import { Newsletter } from "../components/home/Newsletter";

export function Home() {
  return (
    <>
      <CampaignTile campaign={heroCampaign} size="hero" headingLevel="h1" />
      <TrendingRow />
      <CampaignTile campaign={secondaryCampaigns[0]} />
      <ShopBySportRail />
      <CampaignTile campaign={secondaryCampaigns[1]} />
      <LatestGrid />
      <MemberBenefits />
      <Newsletter />
    </>
  );
}
