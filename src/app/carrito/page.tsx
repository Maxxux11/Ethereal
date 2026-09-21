import Link from "next/link";
import { catalogProducts } from "@/lib/catalog";

const cartItems = [
  { productId: 4, detail: "Negro / M" },
  { productId: 7, detail: "Índigo / L" },
];

const formatCOP = (price: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);

export default function CartPage() {
  const items = cartItems.map((item) => {
    const product = catalogProducts.find(({ id }) => id === item.productId);
    if (!product) return null;
    return { ...product, cartDetail: item.detail };
  }).filter((item) => item !== null);
  const subtotal = items.reduce((total, item) => total + item.price, 0);

  return (
    <main className="catalog-shell">
      <div className="catalog-announcement">Envío gratis desde $450.000 <span aria-hidden="true">•</span> Cambios durante 30 días</div>
      <header className="catalog-header">
        <nav className="catalog-nav" aria-label="Navegación de tienda">
          <Link href="/">Inicio</Link>
          <Link href="/catalogo/camisetas">Colección</Link>
          <Link href="/promociones">Promos</Link>
        </nav>
        <Link className="brand-mark" href="/" aria-label="Etheral, inicio">Etheral</Link>
        <nav className="catalog-actions" aria-label="Acciones de cuenta">
          <Link href="/registro">Cuenta</Link>
          <span className="catalog-cart-link">Carrito</span>
        </nav>
      </header>
      <section className="cart-page-content" aria-labelledby="cart-page-title">
        <p className="eyebrow">Tu selección</p>
        <h1 id="cart-page-title">Carrito</h1>
        <div className="cart-page-items">
          {items.map((item) => (
            <article className="cart-page-item" key={item.id}>
              <div className="cart-product-image" style={{ backgroundImage: `url(${item.image})` }} role="img" aria-label={item.name} />
              <div>
                <h2>{item.name}</h2>
                <p>{item.cartDetail}</p>
              </div>
              <strong>{formatCOP(item.price)}</strong>
            </article>
          ))}
        </div>
        <div className="cart-page-total">
          <span>Subtotal</span>
          <strong>{formatCOP(subtotal)}</strong>
        </div>
        <button className="button button-primary" type="button">Continuar al pago</button>
      </section>
    </main>
  );
}
