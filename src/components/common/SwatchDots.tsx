import styles from "./SwatchDots.module.css";
import type { ColorSwatch } from "../../types";

interface SwatchDotsProps {
  colors: ColorSwatch[];
  max?: number;
}

export function SwatchDots({ colors, max = 6 }: SwatchDotsProps) {
  const shown = colors.slice(0, max);
  const remaining = colors.length - shown.length;

  return (
    <div className={styles.row}>
      {shown.map((c) => (
        <span
          key={c.name}
          className={styles.dot}
          style={{ background: c.hex }}
          title={c.name}
        />
      ))}
      {remaining > 0 && <span className={styles.more}>+{remaining}</span>}
    </div>
  );
}

interface SwatchPickerProps {
  colors: ColorSwatch[];
  selected: string;
  onSelect: (name: string) => void;
}

export function SwatchPicker({ colors, selected, onSelect }: SwatchPickerProps) {
  return (
    <div className={styles.row}>
      {colors.map((c) => (
        <button
          key={c.name}
          type="button"
          className={styles.dotButton}
          onClick={() => onSelect(c.name)}
          aria-pressed={selected === c.name}
          aria-label={c.name}
          title={c.name}
        >
          <span
            className={`${styles.dot} ${selected === c.name ? styles.active : ""}`}
            style={{ background: c.hex }}
          />
        </button>
      ))}
    </div>
  );
}
