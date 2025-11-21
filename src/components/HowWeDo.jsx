export default function HowWeDo() {
  const steps = [
    {
      title: "Diagnóstico del embudo",
      desc: "Auditoría de canales, mensajes y trazabilidad. Definimos KPIs y brechas.",
    },
    {
      title: "Estrategia de funnel",
      desc: "Arquitectura TOFU-MOFU-BOFU por programa. Propuestas de valor para cada perfil.",
    },
    {
      title: "Automatización",
      desc: "Nurturing, scoring y workflows: email, SMS, WhatsApp y CRM integrados.",
    },
    {
      title: "Segmentación inteligente",
      desc: "Clusters por motivación: liderazgo, transformación, ascenso profesional.",
    },
    {
      title: "Remarketing eficaz",
      desc: "Secuencias y audiencias que recuperan interesados y elevan conversiones.",
    },
    {
      title: "Medición y optimización",
      desc: "Paneles de control, pruebas A/B y mejoras continuas por cohorte.",
    },
  ];

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Cómo lo hacemos</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-slate-800/60 p-5">
              <div className="text-xs text-blue-300/80">Paso {i + 1}</div>
              <h3 className="mt-1 font-semibold text-blue-100">{s.title}</h3>
              <p className="mt-1 text-sm text-blue-100/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
