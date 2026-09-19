import styles from "./Footer.module.css";

const columns = [
  {
    title: "Resources",
    links: ["Order Status", "Shipping & Delivery", "Returns", "Size Chart", "Gift Cards"],
  },
  {
    title: "Help",
    links: ["Get Help", "Product Advice", "Send Feedback", "Contact Us"],
  },
  {
    title: "Company",
    links: ["About AURA", "Careers", "Sustainability", "Press"],
  },
  {
    title: "Promotions & Discounts",
    links: ["Student Discount", "Aura Access", "Referral Program", "Gift Ideas"],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.columns}>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className={styles.columnHeader}>{col.title}</h3>
              <ul className={styles.linkList}>
                {col.links.map((label) => (
                  <li key={label}>
                    <a href="#">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className={styles.divider} />
        <div className={styles.fine}>
          <span>&copy; {new Date().getFullYear()} AURA, Inc. All Rights Reserved</span>
          <div className={styles.fineLinks}>
            <a href="#">Locations</a>
            <a href="#">Terms of Sale</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
