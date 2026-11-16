const stats = [
  { numero: "-38%", legenda: "em produtos descartados por vencimento" },
  { numero: "3,2x", legenda: "mais giro nos itens em promoção" },
  { numero: "12 min", legenda: "economizados em cada conferência de prateleira" },
];

export default function Stats() {
  return (
    <section className="border-y border-line bg-bg-soft">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.legenda} className="text-center sm:text-left">
            <p className="text-4xl font-900 tracking-tight text-orange-deep sm:text-5xl">
              {s.numero}
            </p>
            <p className="mx-auto mt-2 max-w-[20ch] text-sm leading-relaxed text-ink-soft sm:mx-0">
              {s.legenda}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
