const links = [
  { label: "Recursos", href: "#recursos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-tag bg-orange text-sm font-900 text-white">
            L
          </span>
          <span className="text-lg font-800 tracking-tight text-ink">LOOJA</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-500 text-ink-soft md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#entrar"
            className="hidden text-sm font-600 text-ink-soft hover:text-ink sm:block"
          >
            Entrar
          </a>
          <a
            href="#cta"
            className="rounded-tag bg-ink px-4 py-2 text-sm font-600 text-white transition-colors hover:bg-orange-deep"
          >
            Testar grátis
          </a>
        </div>
      </nav>
    </header>
  );
}
