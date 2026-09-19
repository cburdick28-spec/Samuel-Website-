import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import type { Category, Sport } from "../types";
import { FilterChip } from "../components/common/FilterChip";
import { FilterSidebar } from "../components/plp/FilterSidebar";
import { SortBar, type SortOption } from "../components/plp/SortBar";
import { ProductGrid } from "../components/product/ProductGrid";
import styles from "./Shop.module.css";

const categoryLabels: Record<Category, string> = {
  outerwear: "Outerwear",
  tops: "Tops",
  bottoms: "Bottoms",
  footwear: "Footwear",
  accessories: "Accessories",
  dresses: "Dresses",
};

const sportLabels: Record<Sport, string> = {
  running: "Running",
  training: "Training",
  street: "Street",
  tennis: "Tennis",
  golf: "Golf",
  trail: "Trail",
};

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState<SortOption>("featured");
  const [filtersVisible, setFiltersVisible] = useState(true);

  const activeCategory = (searchParams.get("category") as Category) || null;
  const activeSport = (searchParams.get("sport") as Sport) || null;
  const filterParam = searchParams.get("filter");
  const query = searchParams.get("q");
  const saleOnly = filterParam === "sale";
  const newOnly = filterParam === "new";

  const setParam = (key: string, value: string | null) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory) list = list.filter((p) => p.category === activeCategory);
    if (activeSport) list = list.filter((p) => p.sport === activeSport);
    if (saleOnly) list = list.filter((p) => typeof p.salePrice === "number");
    if (newOnly) list = list.filter((p) => p.isNew);
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q)
      );
    }

    const sorted = [...list];
    if (sort === "price-asc") {
      sorted.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
    } else if (sort === "price-desc") {
      sorted.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
    } else if (sort === "newest") {
      sorted.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    }
    return sorted;
  }, [activeCategory, activeSport, saleOnly, newOnly, query, sort]);

  const categoryOptions = (Object.keys(categoryLabels) as Category[]).map((value) => ({
    value,
    label: categoryLabels[value],
    count: products.filter((p) => p.category === value).length,
  }));

  const sportOptions = (Object.keys(sportLabels) as Sport[]).map((value) => ({
    value,
    label: sportLabels[value],
    count: products.filter((p) => p.sport === value).length,
  }));

  const hasActiveFilters = Boolean(activeCategory || activeSport || saleOnly || newOnly || query);

  const clearAll = () => setSearchParams({}, { replace: true });

  const title = query
    ? `Results for "${query}"`
    : activeSport
    ? sportLabels[activeSport]
    : activeCategory
    ? categoryLabels[activeCategory]
    : newOnly
    ? "New Arrivals"
    : saleOnly
    ? "Sale"
    : "All Products";

  return (
    <div className="container">
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>

      <div className={styles.chipsRow}>
        <FilterChip active={newOnly} onClick={() => setParam("filter", newOnly ? null : "new")}>
          New Arrivals
        </FilterChip>
        <FilterChip active={saleOnly} onClick={() => setParam("filter", saleOnly ? null : "sale")}>
          Sale
        </FilterChip>
        {(Object.keys(sportLabels) as Sport[]).map((s) => (
          <FilterChip
            key={s}
            active={activeSport === s}
            onClick={() => setParam("sport", activeSport === s ? null : s)}
          >
            {sportLabels[s]}
          </FilterChip>
        ))}
      </div>

      <SortBar
        breadcrumb={`Home / Shop${activeCategory ? ` / ${categoryLabels[activeCategory]}` : ""}`}
        count={filtered.length}
        sort={sort}
        onSortChange={setSort}
        filtersVisible={filtersVisible}
        onToggleFilters={() => setFiltersVisible((v) => !v)}
      />

      <div className={styles.layout}>
        {filtersVisible && (
          <FilterSidebar
            categoryOptions={categoryOptions}
            sportOptions={sportOptions}
            activeCategory={activeCategory}
            activeSport={activeSport}
            saleOnly={saleOnly}
            onCategory={(v) => setParam("category", v)}
            onSport={(v) => setParam("sport", v)}
            onSaleOnly={(v) => setParam("filter", v ? "sale" : null)}
            onClearAll={clearAll}
            hasActiveFilters={hasActiveFilters}
          />
        )}
        <div className={styles.gridArea}>
          <ProductGrid products={filtered} />
        </div>
      </div>
    </div>
  );
}
