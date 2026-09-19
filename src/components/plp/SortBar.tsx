import { ChevronIcon } from "../../icons";
import styles from "./SortBar.module.css";

export type SortOption = "featured" | "price-asc" | "price-desc" | "newest";

interface SortBarProps {
  breadcrumb: string;
  count: number;
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
  filtersVisible: boolean;
  onToggleFilters: () => void;
}

export function SortBar({
  breadcrumb,
  count,
  sort,
  onSortChange,
  filtersVisible,
  onToggleFilters,
}: SortBarProps) {
  return (
    <div className={styles.bar}>
      <div>
        <div className={styles.breadcrumb}>{breadcrumb}</div>
        <div className={styles.count}>{count} Results</div>
      </div>
      <div className={styles.right}>
        <button type="button" className={styles.toggleBtn} onClick={onToggleFilters}>
          {filtersVisible ? "Hide Filters" : "Show Filters"}
          <ChevronIcon size={16} direction={filtersVisible ? "up" : "down"} />
        </button>
        <label className={styles.select}>
          Sort By:
          <select value={sort} onChange={(e) => onSortChange(e.target.value as SortOption)}>
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </label>
      </div>
    </div>
  );
}
