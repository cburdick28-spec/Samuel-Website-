import type { InputHTMLAttributes } from "react";
import { SearchIcon } from "../../icons";
import styles from "./SearchPill.module.css";

interface SearchPillProps extends InputHTMLAttributes<HTMLInputElement> {}

export function SearchPill(props: SearchPillProps) {
  return (
    <label className={styles.wrap}>
      <SearchIcon size={18} />
      <input
        type="search"
        className={styles.input}
        placeholder="Search"
        aria-label="Search products"
        {...props}
      />
    </label>
  );
}
