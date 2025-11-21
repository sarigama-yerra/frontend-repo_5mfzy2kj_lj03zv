export default function WhyNow() {
  return (
    <section className="relative bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">¿Por qué hacerlo ahora?</h2>
        <p className="mt-4 text-blue-100/90 max-w-3xl">
          El contexto educativo cambió: estudiantes adultos comparan programas como consumidores digitales exigentes. Los ciclos de decisión son largos, la competencia creció y el costo por lead sube. Quien ordena su embudo y automatiza hoy, captura la intención antes que otros.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/60 border border-white/10 rounded-xl p-5">
            <p className="text-blue-100 font-semibold">Demanda más volátil</p>
            <p className="text-blue-100/80 text-sm mt-1">Temporadas irregulares y mayor investigación previa exigen journeys claros y seguimiento oportuno.</p>
          </div>
          <div className="bg-slate-800/60 border border-white/10 rounded-xl p-5">
            <p className="text-blue-100 font-semibold">Costos de captación al alza</p>
            <p className="text-blue-100/80 text-sm mt-1">Sin segmentación y remarketing, el presupuesto se diluye y la medición es opaca.</p>
          </div>
          <div className="bg-slate-800/60 border border-white/10 rounded-xl p-5">
            <p className="text-blue-100 font-semibold">Exigencia de ROI institucional</p>
            <p className="text-blue-100/80 text-sm mt-1">Decisiones basadas en datos: trazabilidad de punta a punta y reportes para dirección.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
