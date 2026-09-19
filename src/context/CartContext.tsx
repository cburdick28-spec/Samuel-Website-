import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { CartLine, Product } from "../types";

interface CartContextValue {
  lines: CartLine[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, size: string, color: string) => void;
  removeLine: (product: Product, size: string, color: string) => void;
  updateQuantity: (product: Product, size: string, color: string, quantity: number) => void;
  itemCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const sameLine = (line: CartLine, product: Product, size: string, color: string) =>
  line.product.id === product.id && line.size === size && line.color === color;

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product: Product, size: string, color: string) => {
    setLines((prev) => {
      const existing = prev.find((l) => sameLine(l, product, size, color));
      if (existing) {
        return prev.map((l) =>
          sameLine(l, product, size, color) ? { ...l, quantity: l.quantity + 1 } : l
        );
      }
      return [...prev, { product, size, color, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeLine = (product: Product, size: string, color: string) => {
    setLines((prev) => prev.filter((l) => !sameLine(l, product, size, color)));
  };

  const updateQuantity = (product: Product, size: string, color: string, quantity: number) => {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => !sameLine(l, product, size, color))
        : prev.map((l) => (sameLine(l, product, size, color) ? { ...l, quantity } : l))
    );
  };

  const itemCount = useMemo(() => lines.reduce((sum, l) => sum + l.quantity, 0), [lines]);
  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + (l.product.salePrice ?? l.product.price) * l.quantity, 0),
    [lines]
  );

  const value: CartContextValue = {
    lines,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addToCart,
    removeLine,
    updateQuantity,
    itemCount,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
