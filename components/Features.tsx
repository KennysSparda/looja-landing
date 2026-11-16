import { IconBoxes, IconCalendar, IconPeople } from "./icons";

const features = [
  {
    icon: IconCalendar,
    titulo: "Validades",
    descricao:
      "Cadastre lote e data de vencimento uma vez só. A LOOJA avisa com a antecedência que você definir, antes do produto virar perda.",
  },
  {
    icon: IconBoxes,
    titulo: "Estoque",
    descricao:
      "Entradas, saídas e transferências entre lojas em tempo real, com alerta automático quando um item chega perto da ruptura.",
  },
  {
    icon: IconPeople,
    titulo: "Promotores",
    descricao:
      "Escale promotores por loja e fornecedor, acompanhe check-in em campo e veja o relatório de visita assim que ela termina.",
  },
];

export default function Features() {
  return (
    <section id="recursos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-xl">
        <h2 className="text-3xl font-800 tracking-tight text-ink sm:text-4xl">
          Três frentes que hoje vivem em planilhas separadas. Na LOOJA, numa só tela.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.titulo}
            className="tag-shape border-2 border-line bg-white p-7 transition-colors hover:border-orange-pale"
          >
            <span className="tag-hole" />
            <div className="flex h-11 w-11 items-center justify-center rounded-tag bg-orange-pale text-orange-deep">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-700 text-ink">{f.titulo}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
              {f.descricao}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
