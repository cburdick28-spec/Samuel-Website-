import { useCart } from "../../context/CartContext";
import { CloseIcon, MinusIcon, PlusIcon, TrashIcon, BagIcon } from "../../icons";
import { Button } from "../common/Button";
import { IconButton } from "../common/IconButton";
import styles from "./CartDrawer.module.css";

export function CartDrawer() {
  const { lines, isOpen, closeCart, updateQuantity, removeLine, subtotal } = useCart();

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`.trim()}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />
      <aside
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`.trim()}
        aria-hidden={!isOpen}
        aria-label="Shopping bag"
      >
        <div className={styles.header}>
          <span className={styles.title}>Bag ({lines.reduce((n, l) => n + l.quantity, 0)})</span>
          <IconButton label="Close bag" variant="ghost" onClick={closeCart}>
            <CloseIcon size={20} />
          </IconButton>
        </div>

        {lines.length === 0 ? (
          <div className={styles.empty}>
            <BagIcon size={40} />
            <p>Your bag is empty.</p>
            <Button href="/shop" variant="primary" onClick={closeCart}>
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className={styles.lines}>
              {lines.map((line) => {
                const price = line.product.salePrice ?? line.product.price;
                return (
                  <div className={styles.line} key={`${line.product.id}-${line.size}-${line.color}`}>
                    <img
                      src={line.product.images[0]}
                      alt={line.product.name}
                      className={styles.lineImage}
                      loading="lazy"
                    />
                    <div className={styles.lineBody}>
                      <span className={styles.lineName}>{line.product.name}</span>
                      <span className={styles.lineMeta}>
                        {line.color} · Size {line.size}
                      </span>
                      <div className={styles.lineFooter}>
                        <div className={styles.qtyControl}>
                          <button
                            type="button"
                            className={styles.qtyBtn}
                            aria-label="Decrease quantity"
                            onClick={() =>
                              updateQuantity(line.product, line.size, line.color, line.quantity - 1)
                            }
                          >
                            <MinusIcon size={12} />
                          </button>
                          <span>{line.quantity}</span>
                          <button
                            type="button"
                            className={styles.qtyBtn}
                            aria-label="Increase quantity"
                            onClick={() =>
                              updateQuantity(line.product, line.size, line.color, line.quantity + 1)
                            }
                          >
                            <PlusIcon size={12} />
                          </button>
                        </div>
                        <span className={styles.price}>${price * line.quantity}</span>
                      </div>
                    </div>
                    <IconButton
                      label="Remove item"
                      variant="ghost"
                      onClick={() => removeLine(line.product, line.size, line.color)}
                    >
                      <TrashIcon size={16} />
                    </IconButton>
                  </div>
                );
              })}
            </div>
            <div className={styles.footer}>
              <div className={styles.subtotalRow}>
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <Button variant="primary" fullWidth>
                Checkout
              </Button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
