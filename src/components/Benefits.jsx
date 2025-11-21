import { Target, TimerReset, TrendingUp, RefreshCw } from "lucide-react";

export default function Benefits() {
  const items = [
    { icon: TrendingUp, title: "Más matrículas", desc: "Embudo optimizado de punta a punta" },
    { icon: TimerReset, title: "Ahorro de tiempo", desc: "Automatización y nurturing que liberan al equipo" },
    { icon: Target, title: "Segmentación exacta", desc: "Perfiles ideales: liderazgo, transformación, valor profesional" },
    { icon: RefreshCw, title: "Remarketing que convierte", desc: "Secuencias para recuperar interesados" },
  ];

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Beneficios clave</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-slate-800/60 p-5">
              <Icon className="w-6 h-6 text-blue-300" />
              <h3 className="mt-3 font-semibold text-blue-100">{title}</h3>
              <p className="text-sm text-blue-100/80 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
