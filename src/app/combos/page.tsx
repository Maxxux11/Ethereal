import Link from "next/link";
import { catalogProducts } from "@/lib/catalog";

const combos = [
  {
    id: "orbital-set",
    name: "Orbital set",
    detail: "Órbita tee + Eclipse tee",
    price: 319900,
    image: catalogProducts[3].image,
  },
  {
    id: "nebula-layer",
    name: "Nebula layer",
    detail: "Signal tee + Nebula hoodie",
    price: 459900,
    image: catalogProducts[6].image,
  },
  {
    id: "afterglow-pair",
    name: "Afterglow pair",
    detail: "Lunar veil + Afterglow crew",
    price: 469900,
    image: catalogProducts[0].image,
  },
];

const formatCOP = (price: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);

export default function CombosPage() {
  return (
    <main className="catalog-shell">
      <header className="catalog-header">
        <Link className="back-link" href="/">← Volver a Etheral</Link>
        <Link className="brand-mark" href="/" aria-label="Etheral, inicio">Etheral</Link>
        <Link className="catalog-cart-link" href="/carrito">Carrito</Link>
      </header>
      <section className="catalog-content" aria-labelledby="combos-title">
        <p className="eyebrow">Piezas que orbitan juntas</p>
        <h1 id="combos-title">Combos</h1>
        <div className="catalog-products">
          {combos.map((combo) => (
            <article className="product-card" key={combo.id}>
              <div className="product-image" style={{ backgroundImage: `url(${combo.image})` }} role="img" aria-label={combo.name} />
              <div className="product-info">
                <div>
                  <h2>{combo.name}</h2>
                  <p>{combo.detail}</p>
                </div>
                <strong>{formatCOP(combo.price)}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
