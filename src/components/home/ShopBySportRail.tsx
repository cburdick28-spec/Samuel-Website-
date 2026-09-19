import { Link } from "react-router-dom";
import { sportRail } from "../../data/categories";
import { RevealOnScroll } from "../common/RevealOnScroll";
import buttonStyles from "../common/Button.module.css";
import styles from "./ShopBySportRail.module.css";

export function ShopBySportRail() {
  return (
    <section className="section container">
      <RevealOnScroll>
        <h2 className="section-heading">Shop by Sport</h2>
      </RevealOnScroll>
      <div className={styles.rail}>
        {sportRail.map((tile) => (
          <Link to={tile.href} className={styles.tile} key={tile.id}>
            <img src={tile.image} alt="" className={styles.image} loading="lazy" />
            <div className={styles.scrim} />
            <div className={styles.content}>
              <span className={styles.label}>{tile.label}</span>
              <span className={`${buttonStyles.btn} ${buttonStyles.onImage} ${buttonStyles.sm}`}>
                Shop
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
