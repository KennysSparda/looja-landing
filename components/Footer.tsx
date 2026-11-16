const colunas = [
  {
    titulo: "Produto",
    links: ["Validades", "Estoque", "Promotores", "Preços"],
  },
  {
    titulo: "Empresa",
    links: ["Sobre", "Carreiras", "Contato"],
  },
  {
    titulo: "Suporte",
    links: ["Central de ajuda", "Status", "Fale conosco"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-tag bg-orange text-sm font-900 text-white">
                L
              </span>
              <span className="text-lg font-800 text-ink">LOOJA</span>
            </div>
            <p className="mt-3 max-w-[22ch] text-sm text-ink-soft">
              Validade, estoque e promotores em um só lugar.
            </p>
          </div>

          {colunas.map((coluna) => (
            <div key={coluna.titulo}>
              <p className="text-sm font-700 text-ink">{coluna.titulo}</p>
              <ul className="mt-3 space-y-2.5">
                {coluna.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-ink-soft hover:text-orange-deep">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LOOJA. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-orange-deep">Privacidade</a>
            <a href="#" className="hover:text-orange-deep">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
