import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./IconButton.module.css";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  label: string;
  variant?: "solid" | "ghost" | "onImage";
  badgeCount?: number;
}

export function IconButton({
  children,
  label,
  variant = "solid",
  badgeCount,
  className = "",
  ...rest
}: IconButtonProps) {
  const variantClass =
    variant === "ghost" ? styles.ghost : variant === "onImage" ? styles.onImage : "";

  return (
    <button aria-label={label} className={`${styles.iconBtn} ${variantClass} ${className}`.trim()} {...rest}>
      {children}
      {typeof badgeCount === "number" && badgeCount > 0 && (
        <span className={styles.badgeCount}>{badgeCount > 9 ? "9+" : badgeCount}</span>
      )}
    </button>
  );
}
