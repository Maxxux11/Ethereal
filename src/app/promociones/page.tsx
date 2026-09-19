import Link from "next/link";
import { catalogProducts } from "@/lib/catalog";

const promotions = catalogProducts.slice(0, 6).map((product, index) => ({
  ...product,
  discount: [20, 15, 25, 10, 20, 15][index],
}));

const formatCOP = (price: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);

export default function PromotionsPage() {
  return (
    <main className="catalog-shell">
      <header className="catalog-header">
        <Link className="back-link" href="/">← Volver a Etheral</Link>
        <Link className="brand-mark" href="/" aria-label="Etheral, inicio">Etheral</Link>
        <Link className="catalog-cart-link" href="/carrito">Carrito</Link>
      </header>
      <section className="catalog-content" aria-labelledby="promotions-title">
        <p className="eyebrow">Órbitas con descuento</p>
        <h1 id="promotions-title">Promos</h1>
        <div className="catalog-products">
          {promotions.map((product) => {
            const salePrice = product.price * (1 - product.discount / 100);
            return (
              <article className="product-card" key={product.id}>
                <div className="product-image" style={{ backgroundImage: `url(${product.image})` }} role="img" aria-label={product.name} />
                <div className="product-info">
                  <div>
                    <h2>{product.name}</h2>
                    <p>{product.detail} · -{product.discount}%</p>
                  </div>
                  <div className="price-stack">
                    <del>{formatCOP(product.price)}</del>
                    <strong>{formatCOP(salePrice)}</strong>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
