export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <nav className="header-nav header-nav-left" aria-label="Navegación principal">
          <a href="#combos">Combos</a>
          <a href="#descuentos">Descuentos</a>
        </nav>

        <a className="brand-mark" href="#" aria-label="Etheral, inicio">
          Etheral
        </a>

        <nav className="header-nav header-nav-right" aria-label="Acciones de usuario">
          <a href="#cuenta">Cuenta</a>
          <a href="#carrito">Carrito <span aria-hidden="true">(0)</span></a>
        </nav>
      </header>
    </main>
  );
}
