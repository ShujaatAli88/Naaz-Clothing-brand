import { useState } from "react";
import "./Dashboard.css";

const NAV_LINKS = ["NEW IN", "EID COLLECTION", "READY TO WEAR", "FABRICS", "SALE", "NOW TRENDING"];

const COLLECTIONS = [
  {
    id: 1,
    title: "Floral Serenity",
    sub: "Ready to Wear Eid Collection",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80",
  },
  {
    id: 2,
    title: "Golden Radiance",
    sub: "Luxury Embroidered Series",
    img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&q=80",
  },
  {
    id: 3,
    title: "Pastel Dreams",
    sub: "Unstitched Fabric Collection",
    img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&q=80",
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Rose Embroidered Kurta",
    price: "PKR 4,850",
    badge: "NEW",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4b4357?w=400&q=80",
  },
  {
    id: 2,
    name: "Silk Floral 3-Piece",
    price: "PKR 8,200",
    badge: "EID",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
  },
  {
    id: 3,
    name: "Embellished Lawn Set",
    price: "PKR 6,500",
    badge: "HOT",
    img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&q=80",
  },
  {
    id: 4,
    name: "Chiffon Dupatta Suit",
    price: "PKR 7,100",
    badge: "NEW",
    img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=80",
  },
];

const FOOTER_COLS = [
  { title: "SHOP", links: ["New In", "Eid Collection", "Ready to Wear", "Fabrics", "Sale"] },
  { title: "HELP", links: ["Size Guide", "Track Order", "Returns", "FAQs", "Contact Us"] },
  { title: "COMPANY", links: ["About Us", "Careers", "Press", "Stores", "Blog"] },
];

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const toggleWishlist = (id) => {
    setWishlist((w) =>
      w.includes(id) ? w.filter((x) => x !== id) : [...w, id]
    );
  };

  return (
    <div className="app">

      {/* ── Announcement Bar ── */}
      <div className="announcement-bar">
        ✨ Explore Eid Exclusives — Free Shipping on Orders Above PKR 5,000&nbsp;
        <span className="announcement-link">SHOP NOW</span>
      </div>

      {/* ── Navbar ── */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <span className="logo-main">SYWANNA'S</span>
          <span className="logo-sub">WARDROBE</span>
          <span className="logo-by">by NaazAtif</span>
        </div>

        {/* Nav Links */}
        <ul className="nav-links">
          {NAV_LINKS.map((link, i) => (
            <li
              key={i}
              className={`nav-item ${i === 4 ? "nav-sale" : ""} ${i === 1 ? "nav-highlight" : ""}`}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="nav-icons">
          <span className="icon">🔍</span>
          <span className="icon">🤍</span>
          <span className="icon">👤</span>
          <div className="cart-wrapper" onClick={() => setCartCount((c) => c + 1)}>
            <span className="icon">🛍️</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1400&q=80"
          alt="hero"
          className="hero-img"
        />
        <div className="hero-overlay">
          <p className="hero-eyebrow">EID COLLECTION 2025</p>
          <h1 className="hero-title">FLORAL<br />RADIANCE</h1>
          <p className="hero-sub">ready to wear • eid collection</p>
          <div className="hero-btns">
            <button className="btn btn-primary">SHOP NOW</button>
            <button className="btn btn-outline-white">EXPLORE</button>
          </div>
        </div>
        <div className="hero-dots">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`dot ${i === activeSlide ? "dot-active" : ""}`}
              onClick={() => setActiveSlide(i)}
            />
          ))}
        </div>
      </section>

      {/* ── Category Strip ── */}
      <div className="category-strip">
        {["🌸 EID SPECIAL", "✨ LUXURY LAWN", "👗 READY TO WEAR", "🧵 UNSTITCHED"].map((cat, i) => (
          <div key={i} className="category-item">{cat}</div>
        ))}
      </div>

      {/* ── Collections ── */}
      <section className="section collections-section">
        <div className="section-header">
          <p className="section-eyebrow">OUR COLLECTIONS</p>
          <h2 className="section-title">Curated for You</h2>
          <div className="section-divider gold" />
        </div>
        <div className="collections-grid">
          {COLLECTIONS.map((col) => (
            <div key={col.id} className="collection-card">
              <img src={col.img} alt={col.title} className="collection-img" />
              <div className="collection-overlay">
                <p className="collection-sub">{col.sub}</p>
                <h3 className="collection-title">{col.title}</h3>
                <span className="collection-link">EXPLORE →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── New Arrivals ── */}
      <section className="section products-section">
        <div className="section-header">
          <p className="section-eyebrow">HAND PICKED</p>
          <h2 className="section-title">New Arrivals</h2>
          <div className="section-divider maroon" />
        </div>
        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={p.img} alt={p.name} className="product-img" />
                <div className="product-hover-overlay">
                  <button
                    className="btn btn-add-to-bag"
                    onClick={() => setCartCount((c) => c + 1)}
                  >
                    ADD TO BAG
                  </button>
                </div>
                <span className="product-badge">{p.badge}</span>
                <span
                  className="product-wishlist"
                  onClick={() => toggleWishlist(p.id)}
                >
                  {wishlist.includes(p.id) ? "❤️" : "🤍"}
                </span>
              </div>
              <div className="product-info">
                <p className="product-name">{p.name}</p>
                <p className="product-price">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-wrapper">
          <button className="btn btn-outline-maroon">VIEW ALL PRODUCTS</button>
        </div>
      </section>

      {/* ── Sale Banner ── */}
      <section className="sale-banner">
        <img
          src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1400&q=80"
          alt="sale"
          className="sale-img"
        />
        <div className="sale-overlay" />
        <div className="sale-content">
          <p className="sale-eyebrow">LIMITED OFFER</p>
          <h2 className="sale-title">SALE UP TO 50% OFF</h2>
          <p className="sale-sub">On selected ready-to-wear and unstitched pieces</p>
          <button className="btn btn-gold">SHOP SALE</button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-grid">
          {/* Brand col */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-main">SYWANNA'S</span>
              <br />
              <span className="footer-logo-sub">WARDROBE by NaazAtif</span>
            </div>
            <p className="footer-desc">
              Crafted with love, designed for the modern South Asian woman.
              Elegance in every thread.
            </p>
            <div className="footer-socials">
              {["📘", "📸", "🎵", "▶️"].map((icon, i) => (
                <span key={i} className="social-icon">{icon}</span>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {FOOTER_COLS.map((col, i) => (
            <div key={i} className="footer-col">
              <h4 className="footer-col-title">{col.title}</h4>
              {col.links.map((l, j) => (
                <p key={j} className="footer-link">{l}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2025 SYWANNA'S Wardrobe by NaazAtif. All rights reserved.
          </p>
          <div className="footer-legal">
            {["Privacy Policy", "Terms", "Cookies"].map((l, i) => (
              <span key={i} className="footer-legal-link">{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}