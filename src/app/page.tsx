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
        <nav className="header-nav header-nav-left" aria-label="Navegación principal">
          <Link href="#combos">Combos</Link>
          <Link href="#descuentos">Descuentos</Link>
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

      <section className="account-entry" aria-labelledby="account-entry-title">
        <p className="eyebrow">Universo Etheral</p>
        <h1 id="account-entry-title">Tu órbita empieza aquí</h1>
        <p className="account-entry-copy">
          Regístrate para recibir novedades y gestiona la colección desde el
          espacio privado de la marca.
        </p>
        <div className="entry-actions">
          <Link className="button button-primary" href="/registro">Crear cuenta</Link>
          <Link className="button button-secondary" href="/admin">Área admin</Link>
        </div>
      </section>

      <section className="category-section" aria-labelledby="category-title">
        <p className="eyebrow">Explora la colección</p>
        <h2 id="category-title">Elige tu dimensión</h2>
        <div className="category-tabs" role="tablist" aria-label="Categorías de ropa">
          {categories.map((category) => (
            <Link className="category-tab" href={`/catalogo/${category.slug}`} key={category.slug}>
              <span>{category.label}</span>
              <small>{category.count}</small>
            </Link>
          ))}
        </div>
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
            <button className="button button-primary cart-checkout" type="button">Finalizar compra</button>
          </aside>
        </>
      )}
    </main>
  );
}
