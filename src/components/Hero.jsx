import { ArrowRight, GraduationCap } from "lucide-react";
import AnimatedHeroVisual from "./AnimatedHeroVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800"/>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(147,197,253,0.15),transparent_30%)]"/>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* Mobile above-the-fold */}
        <div className="lg:hidden mb-10">
          <span className="inline-flex items-center gap-2 text-blue-200/80 text-sm mb-3">
            <GraduationCap className="w-4 h-4" /> Trickstar • Marketing educativo para universidades
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Capte a los postulantes correctos, aumente matrículas
          </h1>
          <p className="mt-3 text-base text-blue-100/90">
            Embudos de conversión + automatización + segmentación inteligente para postgrados, magísteres y diplomados.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Transforme hoy su captación
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-blue-100 border border-white/10 hover:bg-white/5">
              Reserve su diagnóstico
            </a>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 hidden lg:block">
            <span className="inline-flex items-center gap-2 text-blue-200/80 text-sm mb-4">
              <GraduationCap className="w-4 h-4" /> Trickstar • Socio estratégico en captación
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-white">
              Embudos que convierten y automatización que escala
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              Acompañamos a decanos, admisión y marketing a construir una estrategia integral: funnel completo, segmentación por perfiles, remarketing eficaz y medición real del impacto.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-900/30 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Transforme hoy su estrategia de captación
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold text-blue-100 border border-white/10 hover:bg-white/5">
                Solicite diagnóstico gratuito
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4 text-sm text-blue-100/80">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"/> Aumento de matrículas con embudos optimizados</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"/> Automatización que ahorra tiempo al equipo</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"/> Segmentación exacta por perfiles profesionales</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"/> Remarketing que convierte visitas en inscritos</li>
            </ul>
          </div>

          {/* Visual animado */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl bg-slate-800/60 border border-white/10 overflow-hidden">
              <AnimatedHeroVisual />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-blue-200/80 text-xs">
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-3">Profesional adulto estudiando en línea</div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-3">Embudo con gráficas de conversión</div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-3">Equipo de marketing analizando KPI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
