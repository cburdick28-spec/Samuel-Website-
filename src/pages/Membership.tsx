import { membershipHero } from "../data/campaigns";
import { CampaignTile } from "../components/home/CampaignTile";
import { MemberBenefits } from "../components/home/MemberBenefits";
import { DisclosureRow } from "../components/common/DisclosureRow";
import { RevealOnScroll } from "../components/common/RevealOnScroll";
import styles from "./Membership.module.css";

const faqs = [
  {
    q: "Is Aura Access free to join?",
    a: "Yes. Membership is free and takes less than a minute to set up with your email.",
  },
  {
    q: "What do members get?",
    a: "Early access to new drops, free shipping and returns on every order, and invitations to members-only events and restocks.",
  },
  {
    q: "Can I use my member benefits in store?",
    a: "Member pricing and early access currently apply online only; in-store perks are rolling out by region.",
  },
  {
    q: "How do I cancel my membership?",
    a: "There's no subscription to cancel — Aura Access has no recurring fee. You can unsubscribe from emails at any time.",
  },
];

export function Membership() {
  return (
    <div>
      <CampaignTile campaign={membershipHero} size="hero" headingLevel="h1" />

      <section className="section container">
        <RevealOnScroll>
          <h2 className="section-heading">Why Join</h2>
          <p className={styles.intro}>
            Aura Access is our free membership program — built for the people who move first.
            Sign up once for lasting perks across every future order.
          </p>
        </RevealOnScroll>
      </section>

      <MemberBenefits />

      <section className="section container">
        <RevealOnScroll>
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </RevealOnScroll>
        <div className={styles.faqSection}>
          {faqs.map((item) => (
            <DisclosureRow key={item.q} label={item.q} size="lg">
              {item.a}
            </DisclosureRow>
          ))}
        </div>
      </section>
    </div>
  );
}
