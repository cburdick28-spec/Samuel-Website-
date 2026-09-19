import type { ReactNode } from "react";
import styles from "./FilterChip.module.css";

interface FilterChipProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function FilterChip({ children, active = false, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      className={`${styles.chip} ${active ? styles.active : ""}`.trim()}
      onClick={onClick}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}
