import { Route, Routes } from "react-router-dom";
import { UtilityBar } from "./components/layout/UtilityBar";
import { PrimaryNav } from "./components/layout/PrimaryNav";
import { Footer } from "./components/layout/Footer";
import { CartDrawer } from "./components/cart/CartDrawer";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Product } from "./pages/Product";
import { Membership } from "./pages/Membership";
import { NotFound } from "./pages/NotFound";
import { useScrollToTop } from "./hooks/useScrollToTop";

export function App() {
  useScrollToTop();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <UtilityBar />
      <PrimaryNav />
      <main id="main-content" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
