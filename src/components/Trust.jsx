export default function Trust() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Confianza y experiencia</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-slate-800/60 p-5">
            <p className="text-blue-100 font-semibold">Equipo especializado</p>
            <p className="text-blue-100/80 text-sm mt-1">Estrategas, performance y marketing automation con foco en educación superior.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-800/60 p-5">
            <p className="text-blue-100 font-semibold">Socio de facultades</p>
            <p className="text-blue-100/80 text-sm mt-1">Acompañamos planificación, operación y reporte a dirección. Somos partner, no proveedor.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-800/60 p-5">
            <p className="text-blue-100 font-semibold">Resultados medibles</p>
            <p className="text-blue-100/80 text-sm mt-1">KPIs por programa, cohortes y canales. Reportes con impacto en ROI institucional.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
