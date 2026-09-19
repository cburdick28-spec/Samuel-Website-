import type { Product } from "../../types";
import { RevealOnScroll } from "../common/RevealOnScroll";
import { ProductCard } from "./ProductCard";
import styles from "./ProductGrid.module.css";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return <p className={styles.empty}>No products match these filters yet.</p>;
  }

  return (
    <div className={styles.grid}>
      {products.map((product, i) => (
        <RevealOnScroll key={product.id} delay={(i % 3) * 80}>
          <ProductCard product={product} />
        </RevealOnScroll>
      ))}
    </div>
  );
}
