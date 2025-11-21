import Hero from './components/Hero';
import WhyNow from './components/WhyNow';
import HowWeDo from './components/HowWeDo';
import Benefits from './components/Benefits';
import Stories from './components/Stories';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Trust from './components/Trust';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-blue-100">
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500"/>
            <span className="text-white font-semibold">Trickstar</span>
            <span className="hidden sm:inline text-blue-200/70 text-sm ml-2">Marketing educativo</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#como" className="hover:text-white">Cómo lo hacemos</a>
            <a href="#beneficios" className="hover:text-white">Beneficios</a>
            <a href="#casos" className="hover:text-white">Casos</a>
            <a href="#cta" className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500">Diagnóstico</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <section id="por-que"><WhyNow /></section>
        <section id="como"><HowWeDo /></section>
        <section id="beneficios"><Benefits /></section>
        <section id="casos"><Stories /></section>
        <Testimonials />
        <CTA />
        <Trust />
      </main>

      <Footer />
    </div>
  );
}

export default App;
