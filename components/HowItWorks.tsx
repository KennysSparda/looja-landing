const passos = [
  {
    numero: "01",
    titulo: "Cadastre produtos e lotes",
    descricao:
      "Importe sua planilha atual ou cadastre direto pelo celular, com data de validade e código de lote.",
  },
  {
    numero: "02",
    titulo: "Organize o estoque por loja",
    descricao:
      "Separe por unidade, setor e prateleira. A contagem fica visível pra toda a equipe, em tempo real.",
  },
  {
    numero: "03",
    titulo: "Acompanhe alertas e promotores",
    descricao:
      "Veja o que vence essa semana, o que está em ruptura e quem está em campo, tudo no mesmo painel.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="max-w-lg text-3xl font-800 tracking-tight text-ink sm:text-4xl">
          Do cadastro ao alerta, em três passos
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {passos.map((p, i) => (
            <div key={p.numero} className="relative pl-1">
              <span className="text-5xl font-900 text-orange-pale">{p.numero}</span>
              <h3 className="mt-4 text-lg font-700 text-ink">{p.titulo}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                {p.descricao}
              </p>
              {i < passos.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-[-1.25rem] top-3 hidden h-px w-10 bg-line md:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
