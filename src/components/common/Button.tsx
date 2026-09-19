import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "onImage" | "outline";
type Size = "md" | "sm";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: ReactNode;
  icon?: ReactNode;
}

interface ButtonAsButton
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> {
  href?: undefined;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

function classes(variant: Variant, size: Size, fullWidth: boolean, disabled?: boolean) {
  return [
    styles.btn,
    styles[variant],
    size === "sm" ? styles.sm : "",
    fullWidth ? styles.full : "",
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", fullWidth = false, children, icon } = props;

  if ("href" in props && props.href !== undefined) {
    const { href, disabled, onClick } = props;
    return (
      <Link
        to={href}
        className={classes(variant, size, fullWidth, disabled)}
        aria-disabled={disabled}
        onClick={onClick}
      >
        {icon}
        {children}
      </Link>
    );
  }

  const { href: _href, variant: _v, size: _s, fullWidth: _fw, icon: _icon, ...buttonProps } =
    props as ButtonAsButton;

  return (
    <button {...buttonProps} className={classes(variant, size, fullWidth, buttonProps.disabled)}>
      {icon}
      {children}
    </button>
  );
}
