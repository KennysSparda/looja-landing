import { IconCheck } from "./icons";

const itens = [
  "Alertas de validade configuráveis",
  "Estoque em tempo real por loja",
  "Escala e check-in de promotores",
];

export default function CTA() {
  return (
    <section id="cta" className="bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 px-6 py-20 md:flex-row md:items-center">
        <div>
          <h2 className="max-w-md text-3xl font-800 tracking-tight text-white sm:text-4xl">
            Comece a organizar sua loja hoje.
          </h2>
          <ul className="mt-6 space-y-2.5">
            {itens.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                <IconCheck className="h-4 w-4 text-orange" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="#"
            className="rounded-tag bg-orange px-7 py-3.5 text-center text-sm font-700 text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-deep"
          >
            Testar grátis por 14 dias
          </a>
          <a
            href="#"
            className="rounded-tag border border-white/25 px-7 py-3.5 text-center text-sm font-600 text-white hover:bg-white/10"
          >
            Falar com vendas
          </a>
        </div>
      </div>
    </section>
  );
}
