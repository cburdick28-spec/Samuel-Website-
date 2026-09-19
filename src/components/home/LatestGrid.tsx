import { Link } from "react-router-dom";
import { clothingIcons } from "../../data/categories";
import { RevealOnScroll } from "../common/RevealOnScroll";
import styles from "./LatestGrid.module.css";

export function LatestGrid() {
  return (
    <section className="section container">
      <RevealOnScroll>
        <h2 className="section-heading">Latest in Clothing</h2>
      </RevealOnScroll>
      <div className={styles.grid}>
        {clothingIcons.map((item) => (
          <Link to={item.href} className={styles.card} key={item.id}>
            <span className={styles.icon}>{item.label.charAt(0)}</span>
            <span className={styles.label}>{item.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
