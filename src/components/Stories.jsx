export default function Stories() {
  const cases = [
    {
      title: "Facultad de Negocios",
      text:
        "Rediseño del funnel para MBA y Magíster en Dirección. +42% en leads calificados y aumento del 28% en tasa de inscripción en 2 admisiones.",
    },
    {
      title: "Escuela de Salud",
      text:
        "Implementación de nurturing y scoring para diplomados clínicos. Reducción de tiempos de respuesta de 48h a 4h y +35% en conversión a entrevista.",
    },
    {
      title: "Educación Online",
      text:
        "Segmentación por motivación profesional y remarketing multicanal. CPA -23% y crecimiento sostenido de cohortes por programa.",
    },
  ];

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Historias de impacto</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="rounded-xl border border-white/10 bg-slate-800/60 p-5">
              <h3 className="font-semibold text-blue-100">{c.title}</h3>
              <p className="text-blue-100/80 text-sm mt-2">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
