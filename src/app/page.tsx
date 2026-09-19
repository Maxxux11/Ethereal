import Link from "next/link";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <nav className="header-nav header-nav-left" aria-label="Navegación principal">
          <Link href="#combos">Combos</Link>
          <Link href="#descuentos">Descuentos</Link>
        </nav>

        <Link className="brand-mark" href="/" aria-label="Etheral, inicio">
          Etheral
        </Link>

        <nav className="header-nav header-nav-right" aria-label="Acciones de usuario">
          <Link href="/registro">Cuenta</Link>
          <Link href="#carrito">Carrito <span aria-hidden="true">(0)</span></Link>
        </nav>
      </header>

      <section className="account-entry" aria-labelledby="account-entry-title">
        <p className="eyebrow">Universo Etheral</p>
        <h1 id="account-entry-title">Tu órbita empieza aquí</h1>
        <p className="account-entry-copy">
          Regístrate para recibir novedades y gestiona la colección desde el
          espacio privado de la marca.
        </p>
        <div className="entry-actions">
          <Link className="button button-primary" href="/registro">Crear cuenta</Link>
          <Link className="button button-secondary" href="/admin">Área admin</Link>
        </div>
      </section>
    </main>
  );
}
