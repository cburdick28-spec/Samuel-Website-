import type { Category, Sport } from "../../types";
import styles from "./FilterSidebar.module.css";

interface Option<T extends string> {
  value: T;
  label: string;
  count: number;
}

interface FilterSidebarProps {
  categoryOptions: Option<Category>[];
  sportOptions: Option<Sport>[];
  activeCategory: Category | null;
  activeSport: Sport | null;
  saleOnly: boolean;
  onCategory: (value: Category | null) => void;
  onSport: (value: Sport | null) => void;
  onSaleOnly: (value: boolean) => void;
  onClearAll: () => void;
  hasActiveFilters: boolean;
}

export function FilterSidebar({
  categoryOptions,
  sportOptions,
  activeCategory,
  activeSport,
  saleOnly,
  onCategory,
  onSport,
  onSaleOnly,
  onClearAll,
  hasActiveFilters,
}: FilterSidebarProps) {
  return (
    <aside className={styles.sidebar} aria-label="Product filters">
      {hasActiveFilters && (
        <button type="button" className={styles.clearBtn} onClick={onClearAll}>
          Clear All Filters
        </button>
      )}

      <div className={styles.group}>
        <h3 className={styles.groupHeader}>Category</h3>
        <div className={styles.optionList}>
          {categoryOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`${styles.option} ${activeCategory === opt.value ? styles.optionActive : ""}`.trim()}
              onClick={() => onCategory(activeCategory === opt.value ? null : opt.value)}
              aria-pressed={activeCategory === opt.value}
            >
              <span>{opt.label}</span>
              <span className={styles.count}>({opt.count})</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.group}>
        <h3 className={styles.groupHeader}>Sport</h3>
        <div className={styles.optionList}>
          {sportOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`${styles.option} ${activeSport === opt.value ? styles.optionActive : ""}`.trim()}
              onClick={() => onSport(activeSport === opt.value ? null : opt.value)}
              aria-pressed={activeSport === opt.value}
            >
              <span>{opt.label}</span>
              <span className={styles.count}>({opt.count})</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.group} style={{ borderBottom: "none" }}>
        <h3 className={styles.groupHeader}>Offers</h3>
        <div className={styles.optionList}>
          <button
            type="button"
            className={`${styles.option} ${saleOnly ? styles.optionActive : ""}`.trim()}
            onClick={() => onSaleOnly(!saleOnly)}
            aria-pressed={saleOnly}
          >
            <span>Sale</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
