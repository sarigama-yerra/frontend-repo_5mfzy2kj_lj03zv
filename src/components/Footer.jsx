export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="text-white font-semibold">Trickstar</div>
          <p className="text-blue-100/80 mt-2">Especialistas en marketing educativo para postgrados, magísteres y diplomados.</p>
        </div>
        <div>
          <div className="text-white font-semibold">Contacto</div>
          <p className="text-blue-100/80 mt-2">contacto@trickstar.agency</p>
          <p className="text-blue-100/80">LinkedIn • @trickstar</p>
        </div>
        <div id="form">
          <div className="text-white font-semibold">Solicite su diagnóstico</div>
          <p className="text-blue-100/80 mt-2">Complete el formulario y coordinamos una llamada estratégica.</p>
          <a href="#cta" className="inline-block mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500">Ir al formulario</a>
        </div>
      </div>
      <div className="text-center text-blue-100/60 text-xs pb-6">© {new Date().getFullYear()} Trickstar. Todos los derechos reservados.</div>
    </footer>
  );
}
