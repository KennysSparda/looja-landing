import { IconArrowRight } from "./icons";

const produtos = [
  { nome: "Iogurte natural 170g", lote: "L-4821", dias: 2, status: "vence" },
  { nome: "Pão de forma integral", lote: "L-4790", dias: -1, status: "vencido" },
  { nome: "Queijo minas 500g", lote: "L-4855", dias: 14, status: "ok" },
];

const statusMap = {
  vence: { label: "Vence em 2 dias", bg: "bg-orange-pale", text: "text-orange-deep" },
  vencido: { label: "Vencido", bg: "bg-[#FDE2E1]", text: "text-[#B42318]" },
  ok: { label: "Dentro do prazo", bg: "bg-[#DCFCE7]", text: "text-[#15803D]" },
} as const;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center md:pt-24">
        <div>
          <h1 className="text-[2.6rem] font-800 leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-[3.4rem]">
            Nenhum produto vencido passa despercebido.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            A LOOJA cruza validade, estoque e promotores num painel único —
            pra sua loja nunca mais perder dinheiro com produto parado ou
            vencido na prateleira.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="rounded-tag bg-orange px-6 py-3 text-sm font-700 text-white shadow-[0_8px_24px_-8px_rgba(255,90,31,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-orange-deep"
            >
              Testar grátis por 14 dias
            </a>
            <a
              href="#como-funciona"
              className="flex items-center gap-2 text-sm font-600 text-ink hover:text-orange-deep"
            >
              Ver como funciona
              <IconArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-6 text-sm text-ink-soft">
            Sem cartão de crédito. Cancele quando quiser.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="tag-shape animate-swing border-2 border-orange-pale bg-white p-5 shadow-[0_24px_60px_-20px_rgba(27,20,16,0.25)]"
          >
            <span className="tag-hole" />
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="text-sm font-700 text-ink">Prateleira 04 · Laticínios</span>
              <span className="rounded-full bg-orange-pale px-2.5 py-1 text-xs font-700 text-orange-deep">
                3 alertas
              </span>
            </div>

            <ul className="mt-4 space-y-3">
              {produtos.map((p) => {
                const s = statusMap[p.status as keyof typeof statusMap];
                return (
                  <li
                    key={p.nome}
                    className="flex items-center justify-between gap-3 rounded-[10px] border border-line bg-bg-soft px-3 py-2.5"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-600 text-ink">{p.nome}</p>
                      <p className="text-xs text-ink-soft">Lote {p.lote}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-700 ${s.bg} ${s.text}`}
                    >
                      {p.status === "vence"
                        ? `Vence em ${p.dias}d`
                        : s.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="absolute -right-6 -top-6 hidden rotate-6 rounded-tag border-2 border-ink bg-ink px-4 py-3 text-white shadow-lg sm:block">
            <p className="text-xs text-white/70">Promotor em loja</p>
            <p className="text-sm font-700">Rafael Souza · ativo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
