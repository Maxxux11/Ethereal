import { notFound } from "next/navigation";
import CatalogCollection from "@/app/catalogo/CatalogCollection";
import { categoryLabels, catalogProducts, type CategorySlug } from "@/lib/catalog";

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

  return <CatalogCollection categoryLabel={categoryLabels[category]} products={products} />;
}
