import { getFeaturedProducts } from "../../data/products";
import { RevealOnScroll } from "../common/RevealOnScroll";
import { ProductGrid } from "../product/ProductGrid";

export function TrendingRow() {
  const items = getFeaturedProducts();

  return (
    <section className="section container">
      <RevealOnScroll>
        <h2 className="section-heading">Trending Now</h2>
      </RevealOnScroll>
      <ProductGrid products={items} />
    </section>
  );
}
