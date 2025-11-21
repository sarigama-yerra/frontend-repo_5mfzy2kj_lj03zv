export default function CTA() {
  return (
    <section id="cta" className="relative bg-gradient-to-br from-blue-600 to-indigo-600 py-14">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%),radial-gradient(circle_at_70%_80%,white,transparent_40%)]"/>
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Reserve su diagnóstico estratégico gratuito</h2>
        <p className="mt-3 text-blue-50/90">Analizamos su embudo actual y proponemos un plan claro para aumentar matrículas.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#form" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-slate-900 font-semibold hover:bg-blue-50">Agende una llamada</a>
          <a href="#form" className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-white font-semibold hover:bg-white/10">Transforme hoy su estrategia</a>
        </div>
      </div>
    </section>
  );
}
