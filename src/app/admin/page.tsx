"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Product = {
  id: number;
  name: string;
  price: number;
  discount: number;
};

const initialProducts: Product[] = [
  { id: 1, name: "Órbita tee", price: 48, discount: 0 },
  { id: 2, name: "Nebula hoodie", price: 96, discount: 10 },
  { id: 3, name: "Eclipse cargo", price: 112, discount: 15 },
];

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mode, setMode] = useState<"login" | "register">("register");
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState<Product[]>(() => {
    return initialProducts;
  });

  async function loadProducts() {
    const supabase = createClient();
    const { data, error } = await supabase.from("products").select("id, name, price, discount").order("id");
    if (error) {
      setMessage(error.message);
      return;
    }
    if (data) setProducts(data);
  }

  async function handleAdminAccess(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const supabase = createClient();

    if (mode === "register") {
      const { error } = await supabase.auth.signUp({ email, password });
      setMessage(error ? error.message : "Cuenta creada. Un administrador debe asignarte el rol admin en Supabase antes de entrar.");
      if (!error) setMode("login");
      return;
    }

    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
    if (loginError) {
      setMessage(loginError.message);
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .single();

    if (profileError || profile?.role !== "admin") {
      await supabase.auth.signOut();
      setMessage("Tu cuenta no tiene permisos de administrador.");
      return;
    }

    if (profile.role === "admin") {
      setIsLoggedIn(true);
      setMessage("");
      await loadProducts();
    } else {
      setMessage("Tu cuenta no tiene permisos de administrador.");
    }
  }

  function updateProduct(id: number, field: "price" | "discount", value: string) {
    const numericValue = Math.max(0, Number(value));
    setProducts((current) => current.map((product) =>
      product.id === id ? { ...product, [field]: numericValue } : product,
    ));
  }

  async function saveCatalog() {
    const supabase = createClient();
    const results = await Promise.all(products.map((product) =>
      supabase.from("products").update({ price: product.price, discount: product.discount }).eq("id", product.id),
    ));
    const failed = results.find((result) => result.error);
    setMessage(failed?.error?.message ?? "Catálogo actualizado correctamente.");
  }

  if (!isLoggedIn) {
    return (
      <main className="auth-shell">
        <Link className="back-link" href="/">← Volver a Etheral</Link>
        <section className="admin-access">
          <div className="form-heading">
            <p className="eyebrow">Zona privada</p>
            <h1>{mode === "register" ? "Crear acceso admin" : "Acceso admin"}</h1>
            <p>Gestiona la colección, los precios y las promociones desde un solo lugar.</p>
          </div>
          <div className="access-tabs" role="tablist" aria-label="Acceso administrativo">
            <button className={mode === "register" ? "tab-active" : ""} onClick={() => setMode("register")} type="button">Registrar admin</button>
            <button className={mode === "login" ? "tab-active" : ""} onClick={() => setMode("login")} type="button">Iniciar sesión</button>
          </div>
          <form className="auth-form" onSubmit={handleAdminAccess}>
            <label htmlFor="admin-email">Correo administrador</label>
            <input id="admin-email" name="email" type="email" placeholder="admin@etheral.com" required />
            <label htmlFor="admin-password">Contraseña</label>
            <input id="admin-password" name="password" type="password" minLength={8} required />
            <button className="button button-primary" type="submit">{mode === "register" ? "Crear acceso" : "Entrar al panel"}</button>
            {message && <p className="form-error" role="alert">{message}</p>}
          </form>
          {mode === "login" && <p className="form-note">El rol admin debe asignarse desde el panel de Supabase.</p>}
        </section>
      </main>
    );
  }

  return (
    <main className="admin-shell">
      <header className="admin-header">
        <div>
          <Link className="brand-mark" href="/">Etheral</Link>
          <p className="eyebrow">Panel de administración</p>
        </div>
        <button className="text-button" onClick={() => setIsLoggedIn(false)} type="button">Cerrar sesión</button>
      </header>
      <section className="admin-content">
        <div className="admin-title-row">
          <div>
            <p className="eyebrow">Catálogo activo</p>
            <h1>Precios y descuentos</h1>
          </div>
          <button className="button button-primary" onClick={saveCatalog} type="button">Guardar cambios</button>
        </div>
        <div className="catalog-table" role="region" aria-label="Editor de catálogo">
          <div className="catalog-row catalog-heading"><span>Producto</span><span>Precio base</span><span>Descuento</span><span>Total</span></div>
          {products.map((product) => {
            const total = product.price * (1 - product.discount / 100);
            return (
              <div className="catalog-row" key={product.id}>
                <strong>{product.name}</strong>
                <label><span className="sr-only">Precio de {product.name}</span><input type="number" min="0" value={product.price} onChange={(event) => updateProduct(product.id, "price", event.target.value)} /></label>
                <label><span className="sr-only">Descuento de {product.name}</span><input type="number" min="0" max="100" value={product.discount} onChange={(event) => updateProduct(product.id, "discount", event.target.value)} /><span className="input-suffix">%</span></label>
                <span className="catalog-total">${total.toFixed(2)}</span>
              </div>
            );
          })}
        </div>
        {message && <p className="form-success" role="status">{message}</p>}
      </section>
    </main>
  );
}
