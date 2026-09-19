export type CategorySlug = "blusas" | "camisetas" | "sudaderas";

export type CatalogProduct = {
  id: number;
  name: string;
  category: CategorySlug;
  price: number;
  detail: string;
  image: string;
};

export const categoryLabels: Record<CategorySlug, string> = {
  blusas: "Blusas",
  camisetas: "Camisetas",
  sudaderas: "Sudaderas",
};

export const catalogProducts: CatalogProduct[] = [
  {
    id: 1,
    name: "Lunar veil",
    category: "blusas",
    price: 219900,
    detail: "Blusa satinada / Plata",
    image: "https://images.unsplash.com/photo-1564257577054-9e2a7a4d5a4c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Nova wrap",
    category: "blusas",
    price: 249900,
    detail: "Blusa cruzada / Violeta",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Stellar mesh",
    category: "blusas",
    price: 189900,
    detail: "Blusa ligera / Negro",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Órbita tee",
    category: "camisetas",
    price: 189900,
    detail: "Algodón premium / Negro",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Eclipse tee",
    category: "camisetas",
    price: 179900,
    detail: "Algodón pesado / Blanco lunar",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Signal tee",
    category: "camisetas",
    price: 199900,
    detail: "Oversize / Azul noche",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "Nebula hoodie",
    category: "sudaderas",
    price: 329900,
    detail: "French terry / Índigo",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    name: "Gravity hoodie",
    category: "sudaderas",
    price: 349900,
    detail: "Algodón pesado / Grafito",
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 9,
    name: "Afterglow crew",
    category: "sudaderas",
    price: 309900,
    detail: "Felpa suave / Violeta",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=85",
  },
];
