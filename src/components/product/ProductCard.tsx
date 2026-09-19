import { Link } from "react-router-dom";
import type { Product } from "../../types";
import { Badge, SaleText } from "../common/Badge";
import { SwatchDots } from "../common/SwatchDots";
import { IconButton } from "../common/IconButton";
import { HeartIcon } from "../../icons";
import styles from "./ProductCard.module.css";

export function ProductCard({ product }: { product: Product }) {
  const onSale = typeof product.salePrice === "number";
  const percentOff = onSale
    ? Math.round((1 - (product.salePrice as number) / product.price) * 100)
    : 0;

  return (
    <Link to={`/product/${product.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={product.images[0]}
          alt={product.name}
          className={styles.image}
          loading="lazy"
        />
        {product.badge && (
          <div className={styles.badgeSlot}>
            <Badge>{product.badge}</Badge>
          </div>
        )}
        <IconButton
          label="Add to wishlist"
          variant="onImage"
          className={styles.wishBtn}
          onClick={(e) => e.preventDefault()}
        >
          <HeartIcon size={18} />
        </IconButton>
      </div>
      <div className={styles.body}>
        <div className={styles.swatchRow}>
          <SwatchDots colors={product.colors} />
        </div>
        <span className={styles.name}>{product.name}</span>
        <span className={styles.subtitle}>{product.subtitle}</span>
        <div className={styles.priceRow}>
          {onSale ? (
            <>
              <SaleText>{`$${product.salePrice}`}</SaleText>
              <span className={styles.strikePrice}>${product.price}</span>
              <SaleText>{`${percentOff}% off`}</SaleText>
            </>
          ) : (
            <span className={styles.regularPrice}>${product.price}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
