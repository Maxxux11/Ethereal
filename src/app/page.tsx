"use client";

import Link from "next/link";
import { useState } from "react";
import { catalogProducts } from "@/lib/catalog";

const cartItems = [
  { productId: 4, detail: "Negro / M" },
  { productId: 7, detail: "Índigo / L" },
];

const categories = [
  { slug: "blusas", label: "Blusas", count: "06 piezas" },
  { slug: "camisetas", label: "Camisetas", count: "08 piezas" },
  { slug: "sudaderas", label: "Sudaderas", count: "05 piezas" },
];

const formatCOP = (price: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const items = cartItems.map((item) => {
    const product = catalogProducts.find(({ id }) => id === item.productId);
    if (!product) return null;
    return { ...product, cartDetail: item.detail };
  }).filter((item) => item !== null);

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="announcement-bar">Envío gratis desde $450.000 <span aria-hidden="true">•</span> Cambios durante 30 días</div>
        <nav className="header-nav header-nav-left" aria-label="Navegación principal">
          <Link href="/catalogo/camisetas">Camisetas</Link>
          <Link href="/catalogo/sudaderas">Sudaderas</Link>
          <Link href="/promociones">Promociones</Link>
          <Link href="/combos">Combos</Link>
        </nav>

        <Link className="brand-mark" href="/" aria-label="Etheral, inicio">
          Etheral
        </Link>

        <nav className="header-nav header-nav-right" aria-label="Acciones de usuario">
          <Link href="/registro">Cuenta</Link>
          <button className="cart-trigger" onClick={() => setIsCartOpen(true)} type="button">
            Carrito <span aria-hidden="true">({cartItems.length})</span>
          </button>
        </nav>
      </header>

      <section className="home-hero" aria-labelledby="account-entry-title">
        <div className="home-hero-media" role="img" aria-label="Colección Etheral en tonos oscuros" />
        <div className="home-hero-copy">
          <p className="eyebrow">Nueva colección / 2026</p>
          <h1 id="account-entry-title">Vestir lo esencial.</h1>
          <p className="account-entry-copy">
            Piezas pensadas para todos los días. Siluetas precisas, materiales honestos y una paleta que deja espacio para ti.
          </p>
          <div className="entry-actions">
            <Link className="button button-primary" href="/catalogo/camisetas">Ver colección</Link>
            <Link className="text-link" href="/registro">Únete a Etheral <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="category-section" aria-labelledby="category-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Compra por categoría</p>
            <h2 id="category-title">Lo que necesitas.</h2>
          </div>
          <Link className="text-link" href="/catalogo/camisetas">Ver todo <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="category-tabs" role="tablist" aria-label="Categorías de ropa">
          {categories.map((category) => (
            <Link className="category-tab" href={`/catalogo/${category.slug}`} key={category.slug}>
              <span className="category-tab-image" aria-hidden="true" />
              <span>{category.label}</span>
              <small>{category.count}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-setup" aria-labelledby="setup-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Arma tu universo</p>
            <h2 id="setup-title">Personaliza tu órbita.</h2>
          </div>
          <Link className="text-link" href="/combos">Empezar con una pieza <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="setup-grid">
          <Link className="setup-card setup-card-main" href="/catalogo/camisetas">
            <div className="setup-card-image" aria-hidden="true" />
            <span>01 / Empieza por la base</span>
            <strong>Camisetas</strong>
          </Link>
          <Link className="setup-card setup-card-side" href="/catalogo/sudaderas">
            <div className="setup-card-image" aria-hidden="true" />
            <span>02 / Añade una capa</span>
            <strong>Sudaderas</strong>
          </Link>
        </div>
      </section>

      <section className="home-featured" aria-labelledby="featured-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Compra directo</p>
            <h2 id="featured-title">Más razones para elegir Etheral.</h2>
          </div>
          <Link className="text-link" href="/registro">Conocer más <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="feature-grid">
          <Link className="feature-card feature-card-purple" href="/promociones">
            <span>Selección Etheral</span>
            <strong>Promociones y bundles exclusivos.</strong>
            <small>Ver ofertas ↗</small>
          </Link>
          <Link className="feature-card feature-card-coral" href="/combos">
            <span>Hecho para combinar</span>
            <strong>Combos que ya tienen sentido.</strong>
            <small>Ver selección ↗</small>
          </Link>
          <Link className="feature-card feature-card-blue" href="/registro">
            <span>Comunidad Etheral</span>
            <strong>Novedades antes que nadie.</strong>
            <small>Unirme ↗</small>
          </Link>
        </div>
      </section>

      <section className="home-benefits" aria-label="Beneficios de comprar directamente en Etheral">
        <article>
          <span className="benefit-number">01</span>
          <h3>Envíos simples</h3>
          <p>Envío gratis desde $450.000 a todo el país.</p>
        </article>
        <article>
          <span className="benefit-number">02</span>
          <h3>Cambios fáciles</h3>
          <p>Prueba tus piezas con 30 días para cambios.</p>
        </article>
        <article>
          <span className="benefit-number">03</span>
          <h3>Compra con intención</h3>
          <p>Diseños pensados para quedarse en tu armario.</p>
        </article>
      </section>

      <section className="home-experience" aria-labelledby="experience-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Experiencia Etheral</p>
            <h2 id="experience-title">El universo detrás de las piezas.</h2>
          </div>
        </div>
        <div className="experience-grid">
          <Link className="experience-card experience-card-large" href="/catalogo/sudaderas">
            <span>01 / Texturas y capas</span>
            <strong>Profundidad para todos los días.</strong>
          </Link>
          <Link className="experience-card experience-card-small" href="/promociones">
            <span>02 / Ediciones</span>
            <strong>Colores que cambian la órbita.</strong>
          </Link>
          <Link className="experience-card experience-card-small" href="/registro">
            <span>03 / Guías</span>
            <strong>Encuentra tu siguiente combinación.</strong>
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <Link className="brand-mark" href="/">Etheral</Link>
          <p>Ropa esencial para una vida en movimiento.</p>
        </div>
        <div className="footer-column">
          <strong>Comprar</strong>
          <Link href="/catalogo/camisetas">Camisetas</Link>
          <Link href="/catalogo/sudaderas">Sudaderas</Link>
          <Link href="/promociones">Promociones</Link>
        </div>
        <div className="footer-column">
          <strong>Etheral</strong>
          <Link href="/registro">Cuenta</Link>
          <Link href="/combos">Combos</Link>
          <Link href="/carrito">Carrito</Link>
        </div>
        <div className="footer-newsletter">
          <strong>Únete al estudio</strong>
          <p>Recibe novedades y lanzamientos en tu correo.</p>
          <Link className="text-link" href="/registro">Suscribirme <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Etheral Studio</span>
          <span>Hecho para moverse distinto.</span>
        </div>
      </footer>

      {isCartOpen && (
        <>
          <button className="cart-backdrop" onClick={() => setIsCartOpen(false)} type="button" aria-label="Cerrar carrito" />
          <aside className="cart-drawer" aria-label="Carrito de compras" aria-live="polite">
            <div className="cart-drawer-header">
              <div>
                <p className="eyebrow">Tu selección</p>
                <h2>Carrito</h2>
              </div>
              <button className="drawer-close" onClick={() => setIsCartOpen(false)} type="button" aria-label="Cerrar carrito">×</button>
            </div>
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-image" style={{ backgroundImage: `url(${item.image})` }} role="img" aria-label={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.cartDetail}</span>
                  </div>
                  <span>{formatCOP(item.price)}</span>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <span>Subtotal</span>
              <strong>{formatCOP(items.reduce((total, item) => total + item.price, 0))}</strong>
            </div>
            <Link className="button button-primary cart-checkout" href="/carrito">Abrir carrito</Link>
          </aside>
        </>
      )}
    </main>
  );
}
