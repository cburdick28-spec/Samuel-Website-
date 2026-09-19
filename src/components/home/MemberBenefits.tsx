import { RevealOnScroll } from "../common/RevealOnScroll";
import buttonStyles from "../common/Button.module.css";
import styles from "./MemberBenefits.module.css";

const img = (seed: string) => `https://picsum.photos/seed/${seed}/900/1125`;

const benefits = [
  {
    id: "benefit-access",
    title: "Early Access to Drops",
    image: img("benefit-access"),
  },
  {
    id: "benefit-shipping",
    title: "Free Shipping & Returns",
    image: img("benefit-shipping"),
  },
  {
    id: "benefit-events",
    title: "Members-Only Events",
    image: img("benefit-events"),
  },
];

export function MemberBenefits() {
  return (
    <section className="section container">
      <RevealOnScroll>
        <h2 className="section-heading">Member Benefits</h2>
      </RevealOnScroll>
      <div className={styles.grid}>
        {benefits.map((benefit) => (
          <div className={styles.card} key={benefit.id}>
            <img src={benefit.image} alt="" className={styles.image} loading="lazy" />
            <div className={styles.scrim} />
            <div className={styles.content}>
              <span className={styles.title}>{benefit.title}</span>
              <span className={`${buttonStyles.btn} ${buttonStyles.onImage} ${buttonStyles.sm}`} style={{ width: "fit-content" }}>
                Explore
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
