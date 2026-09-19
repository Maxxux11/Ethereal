import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabels, catalogProducts, type CategorySlug } from "@/lib/catalog";

const formatCOP = (price: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);

export function generateStaticParams() {
  return Object.keys(categoryLabels).map((categoria) => ({ categoria }));
}

export default async function CatalogCategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  if (!(categoria in categoryLabels)) notFound();

  const category = categoria as CategorySlug;
  const products = catalogProducts.filter((product) => product.category === category);

  return (
    <main className="catalog-shell">
      <header className="catalog-header">
        <Link className="back-link" href="/">← Volver a Etheral</Link>
        <Link className="brand-mark" href="/" aria-label="Etheral, inicio">Etheral</Link>
        <Link className="catalog-cart-link" href="/">Carrito</Link>
      </header>
      <section className="catalog-content" aria-labelledby="catalog-title">
        <p className="eyebrow">Colección Etheral</p>
        <h1 id="catalog-title">{categoryLabels[category]}</h1>
        <div className="catalog-products">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }} role="img" aria-label={product.name} />
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
