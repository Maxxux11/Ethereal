import Link from "next/link";

const cartItems = [
  { id: 1, name: "Órbita tee", detail: "Negro / M", price: 189900 },
  { id: 2, name: "Nebula hoodie", detail: "Índigo / L", price: 329900 },
];

const formatCOP = (price: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);

export default function CartPage() {
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <main className="catalog-shell">
      <header className="catalog-header">
        <Link className="back-link" href="/">← Volver a Etheral</Link>
        <Link className="brand-mark" href="/" aria-label="Etheral, inicio">Etheral</Link>
        <span className="catalog-cart-link">Carrito</span>
      </header>
      <section className="cart-page-content" aria-labelledby="cart-page-title">
        <p className="eyebrow">Tu selección</p>
        <h1 id="cart-page-title">Carrito</h1>
        <div className="cart-page-items">
          {cartItems.map((item) => (
            <article className="cart-page-item" key={item.id}>
              <div>
                <h2>{item.name}</h2>
                <p>{item.detail}</p>
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
