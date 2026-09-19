import styles from "./UtilityBar.module.css";

const links = ["Find a Store", "Help", "Join Us", "Sign In"];

export function UtilityBar() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        {links.map((label) => (
          <a key={label} href="#" className={styles.link}>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
