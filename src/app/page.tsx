"use client";

import Link from "next/link";
import { useState } from "react";

const cartItems = [
  { id: 1, name: "Órbita tee", detail: "Negro / M", price: 189900 },
  { id: 2, name: "Nebula hoodie", detail: "Índigo / L", price: 329900 },
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

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="announcement-bar">Envío gratis desde $450.000 <span aria-hidden="true">•</span> Cambios durante 30 días</div>
        <nav className="header-nav header-nav-left" aria-label="Navegación principal">
          <Link href="/catalogo/camisetas">Camisetas</Link>
          <Link href="/catalogo/sudaderas">Sudaderas</Link>
          <Link href="/promociones">Promociones</Link>
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
        <div className="home-hero-media" role="img" aria-label="Colección Etheral en tonos oscuros" />
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

      <section className="home-statement" aria-labelledby="statement-title">
        <p className="eyebrow">Etheral / Estudio independiente</p>
        <h2 id="statement-title">Menos ruido.<br />Más intención.</h2>
        <p>Diseñamos un armario reducido para vivir mejor dentro de él.</p>
      </section>

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
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.detail}</span>
                  </div>
                  <span>{formatCOP(item.price)}</span>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <span>Subtotal</span>
              <strong>{formatCOP(cartItems.reduce((total, item) => total + item.price, 0))}</strong>
            </div>
            <Link className="button button-primary cart-checkout" href="/carrito">Abrir carrito</Link>
          </aside>
        </>
      )}
    </main>
  );
}
