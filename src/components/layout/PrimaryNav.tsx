import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { BagIcon, CloseIcon, HamburgerIcon, HeartIcon, SearchIcon } from "../../icons";
import { IconButton } from "../common/IconButton";
import { SearchPill } from "../common/SearchPill";
import styles from "./PrimaryNav.module.css";

const navLinks = [
  { label: "New & Featured", href: "/shop?filter=new" },
  { label: "Men", href: "/shop?department=men" },
  { label: "Women", href: "/shop?department=women" },
  { label: "Footwear", href: "/shop?category=footwear" },
  { label: "Accessories", href: "/shop?category=accessories" },
  { label: "Membership", href: "/membership" },
];

export function PrimaryNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { itemCount, openCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchOpen(false);
    navigate(query.trim() ? `/shop?q=${encodeURIComponent(query.trim())}` : "/shop");
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={`container ${styles.inner}`}>
          <IconButton
            label="Open menu"
            variant="ghost"
            className={styles.hamburger}
            onClick={() => setDrawerOpen(true)}
          >
            <HamburgerIcon size={22} />
          </IconButton>

          <NavLink to="/" className={styles.logo} aria-label="AURA home">
            AURA
          </NavLink>

          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.linkActive : ""}`.trim()
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={styles.right}>
            <div className={styles.desktopSearch}>
              <form onSubmit={submitSearch}>
                <SearchPill value={query} onChange={(e) => setQuery(e.target.value)} />
              </form>
            </div>
            <IconButton
              label="Search"
              variant="ghost"
              className={styles.searchIconOnly}
              onClick={() => setSearchOpen((s) => !s)}
            >
              <SearchIcon size={20} />
            </IconButton>
            <IconButton label="Wishlist" variant="ghost">
              <HeartIcon size={20} />
            </IconButton>
            <IconButton label="Open bag" variant="ghost" badgeCount={itemCount} onClick={openCart}>
              <BagIcon size={20} />
            </IconButton>
          </div>
        </div>
      </nav>

      <div
        className={`${styles.searchOverlay} ${searchOpen ? styles.searchOverlayOpen : ""}`.trim()}
        aria-hidden={!searchOpen}
      >
        <form className={styles.searchOverlayInner} onSubmit={submitSearch}>
          <SearchPill
            autoFocus={searchOpen}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <IconButton label="Close search" variant="ghost" onClick={() => setSearchOpen(false)} type="button">
            <CloseIcon size={20} />
          </IconButton>
        </form>
      </div>

      <div
        className={`${styles.drawerOverlay} ${drawerOpen ? styles.drawerOverlayOpen : ""}`.trim()}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />
      <aside
        className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`.trim()}
        aria-hidden={!drawerOpen}
        aria-label="Site menu"
      >
        <div className={styles.drawerHeader}>
          <span className={styles.logo}>AURA</span>
          <IconButton label="Close menu" variant="ghost" onClick={() => setDrawerOpen(false)}>
            <CloseIcon size={20} />
          </IconButton>
        </div>
        <ul className={styles.drawerLinks}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink to={link.href} className={styles.drawerLink} onClick={() => setDrawerOpen(false)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
