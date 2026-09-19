"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function RegistroPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      options: { data: { full_name: String(formData.get("name")) } },
    });

    if (!error) {
      setSubmitted(true);
      event.currentTarget.reset();
    }
  }

  return (
    <main className="auth-shell">
      <Link className="back-link" href="/">← Volver a Etheral</Link>
      <section className="auth-layout">
        <div className="auth-intro">
          <p className="eyebrow">Comunidad Etheral</p>
          <h1>Entra en tu órbita</h1>
          <p>Recibe lanzamientos, combinaciones y acceso anticipado a los descuentos de la colección.</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <p className="eyebrow">Nueva cuenta</p>
            <h2>Crear cuenta</h2>
          </div>
          <label htmlFor="name">Nombre completo</label>
          <input id="name" name="name" type="text" placeholder="Tu nombre" required />
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" type="email" placeholder="nombre@correo.com" required />
          <label htmlFor="password">Contraseña</label>
          <input id="password" name="password" type="password" minLength={8} placeholder="Mínimo 8 caracteres" required />
          <button className="button button-primary" type="submit">Registrarme</button>
          {submitted && <p className="form-success" role="status">Tu registro quedó guardado. Bienvenido a Etheral.</p>}
          <p className="form-note">Al registrarte aceptas recibir comunicaciones de la marca.</p>
        </form>
      </section>
    </main>
  );
}
