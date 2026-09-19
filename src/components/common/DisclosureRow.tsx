import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronIcon } from "../../icons";
import styles from "./DisclosureRow.module.css";

interface DisclosureRowProps {
  label: string;
  children: ReactNode;
  size?: "md" | "lg";
  defaultOpen?: boolean;
}

export function DisclosureRow({ label, children, size = "md", defaultOpen = false }: DisclosureRowProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={styles.row}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={size === "lg" ? styles.labelLg : styles.label}>{label}</span>
        <ChevronIcon
          size={18}
          direction="down"
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`.trim()}
        />
      </button>
      <div className={`${styles.panel} ${open ? styles.panelOpen : ""}`.trim()}>
        <div className={styles.panelInner}>{children}</div>
      </div>
    </div>
  );
}
