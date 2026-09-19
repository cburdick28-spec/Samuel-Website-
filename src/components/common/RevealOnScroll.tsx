import type { ElementType, ReactNode } from "react";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

interface RevealOnScrollProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  variant?: "up" | "fade";
  className?: string;
}

export function RevealOnScroll({
  children,
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className = "",
}: RevealOnScrollProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();
  const base = variant === "fade" ? "reveal-fade" : "reveal";

  return (
    <Tag
      ref={ref}
      className={`${base} ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ animationDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
