"use client";

import Link from "next/link";
import { useState } from "react";
import type { CatalogProduct } from "@/lib/catalog";

const formatCOP = (price: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);

type CatalogCollectionProps = {
  categoryLabel: string;
  products: CatalogProduct[];
};

export default function CatalogCollection({ categoryLabel, products }: CatalogCollectionProps) {
  const [sortOrder, setSortOrder] = useState("featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const sortedProducts = [...products].sort((firstProduct, secondProduct) => {
    if (sortOrder === "price-asc") return firstProduct.price - secondProduct.price;
    if (sortOrder === "price-desc") return secondProduct.price - firstProduct.price;
    return firstProduct.id - secondProduct.id;
  });

  return (
    <main className="catalog-shell">
      <div className="catalog-announcement" role="status">
        Envío gratis desde $450.000 <span aria-hidden="true">•</span> 30 días para cambios
      </div>
      <header className="catalog-header">
        <nav className="catalog-nav" aria-label="Navegación de tienda">
          <Link href="/">Inicio</Link>
          <Link href="/combos">Combos</Link>
          <Link href="/promociones">Promos</Link>
        </nav>
        <Link className="brand-mark" href="/" aria-label="Etheral, inicio">Etheral</Link>
        <nav className="catalog-actions" aria-label="Acciones de cuenta">
          <Link href="/registro">Cuenta</Link>
          <Link href="/carrito">Carrito</Link>
        </nav>
      </header>
      <section className="catalog-content" aria-labelledby="catalog-title">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow">Colección Etheral</p>
            <h1 id="catalog-title">{categoryLabel}</h1>
          </div>
          <p className="catalog-description">
            Básicos elevados para moverte con ligereza por tu día y tu propia órbita.
          </p>
        </div>
        <div className="catalog-toolbar">
          <button className="filter-trigger" onClick={() => setIsFilterOpen(!isFilterOpen)} type="button" aria-expanded={isFilterOpen}>
            <span aria-hidden="true">☷</span> Filtros
          </button>
          <span className="catalog-count">{products.length} piezas</span>
          <label className="sort-control">
            <span>Ordenar por</span>
            <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
              <option value="featured">Destacados</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
            </select>
          </label>
        </div>
        {isFilterOpen && (
          <div className="catalog-filter-panel" aria-label="Filtros activos">
            <span>Color: Todos</span>
            <span>Talla: Todas</span>
            <span>Disponibilidad: En stock</span>
          </div>
        )}
        <div className="catalog-products">
          {sortedProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-visual">
                <div className="product-image" style={{ backgroundImage: `url(${product.image})` }} role="img" aria-label={product.name} />
                <button className="product-buy" type="button">Comprar</button>
              </div>
              <div className="product-info">
                <div>
                  <h2>{product.name}</h2>
                  <p>{product.detail}</p>
                </div>
                <strong>{formatCOP(product.price)}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
