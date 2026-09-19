import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getProductBySlug, getRelatedProducts } from "../data/products";
import { Button } from "../components/common/Button";
import { DisclosureRow } from "../components/common/DisclosureRow";
import { SwatchPicker } from "../components/common/SwatchDots";
import { SaleText } from "../components/common/Badge";
import { ProductGallery } from "../components/pdp/ProductGallery";
import { ProductGrid } from "../components/product/ProductGrid";
import { RevealOnScroll } from "../components/common/RevealOnScroll";
import { useCart } from "../context/CartContext";
import { BackArrowIcon } from "../icons";
import styles from "./Product.module.css";

export function Product() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name ?? "");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  if (!product) return <Navigate to="/shop" replace />;

  const onSale = typeof product.salePrice === "number";
  const related = getRelatedProducts(product);

  const handleAddToBag = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize, selectedColor);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container">
      <div className={styles.layout}>
        <ProductGallery images={product.images} name={product.name} />

        <div className={styles.info}>
          <a href="/shop" className={styles.backLink}>
            <BackArrowIcon size={16} />
            Back to Shop
          </a>

          <div className={styles.titleBlock}>
            <h1 className={styles.name}>{product.name}</h1>
            <span className={styles.subtitle}>{product.subtitle}</span>
          </div>

          <div className={styles.priceRow}>
            {onSale ? (
              <>
                <SaleText>{`$${product.salePrice}`}</SaleText>
                <span className={styles.strike}>${product.price}</span>
              </>
            ) : (
              <span>${product.price}</span>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <span className={styles.fieldLabel}>Color — {selectedColor}</span>
            <SwatchPicker
              colors={product.colors}
              selected={selectedColor}
              onSelect={setSelectedColor}
            />
          </div>

          <div className={styles.fieldGroup}>
            <span className={styles.fieldLabel}>Select Size</span>
            <div className={styles.sizeGrid}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`${styles.sizeBtn} ${selectedSize === size ? styles.sizeBtnActive : ""}`.trim()}
                  onClick={() => setSelectedSize(size)}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.ctaRow}>
            <Button variant="primary" fullWidth onClick={handleAddToBag} disabled={!selectedSize}>
              {added ? "Added to Bag" : selectedSize ? "Add to Bag" : "Select a Size"}
            </Button>
          </div>

          <p className={styles.description}>{product.description}</p>

          <div className={styles.disclosures}>
            <DisclosureRow label="View Product Details" defaultOpen>
              <ul>
                {product.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </DisclosureRow>
            <DisclosureRow label="Shipping & Returns">
              Free standard shipping on orders over $75. Free returns within 30 days of delivery.
            </DisclosureRow>
            <DisclosureRow label="Reviews (24)">
              4.6 out of 5 stars based on 24 reviews.
            </DisclosureRow>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className={`section ${styles.relatedSection}`}>
          <RevealOnScroll>
            <h2 className="section-heading">You May Also Like</h2>
          </RevealOnScroll>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
