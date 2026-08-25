import React, { useState } from 'react';
import { 
  HelpCircle, 
  ShieldCheck, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Mail
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const SupportSection: React.FC = () => {
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // URL del botón de contacto/soporte (fácilmente editable)
  const SUPPORT_LINK = 'mailto:asati.contacto@gmail.com';

  const filteredFaqs = FAQ_ITEMS.filter((faq) => {
    const matchesCat = activeFaqCategory === 'all' || faq.category === activeFaqCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="soporte" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/10">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-lime-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-lime-500/10 border border-lime-500/25 rounded-full text-xs font-mono font-bold text-lime-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CENTRO DE AYUDA Y PREGUNTAS FRECUENTES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white">
            Preguntas Frecuentes y{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-cyan-300 to-emerald-400">
              Respuestas
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Encuentra soluciones rápidas sobre la reproducción de listas M3U/M3U8, códecs soportados y configuración en tus dispositivos.
          </p>
        </div>

        {/* Knowledge Base & FAQs */}
        <div className="space-y-6">
          
          {/* Search & Filter Bar */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar soluciones rápidas (ej. listas m3u, 4K, audio, Android)..."
                className="w-full bg-slate-900 border border-white/10 focus:border-cyan-400 rounded-2xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-1.5">
              {(['all', 'general', 'lists', 'playback', 'tv'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFaqCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeFaqCategory === cat
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                      : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  {cat === 'all' ? 'Todas' : cat === 'general' ? 'General' : cat === 'lists' ? 'Listas M3U' : cat === 'playback' ? 'Reproducción 4K' : 'Android TV'}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion FAQ Items */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-2xl transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900/90 border-lime-500/40 shadow-lg shadow-lime-500/5'
                      : 'bg-slate-900/40 border-white/5 hover:border-white/15'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className={`w-4 h-4 flex-shrink-0 ${isOpen ? 'text-lime-400' : 'text-slate-500'}`} />
                      <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-lime-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Community & Email Banner */}
          <div
            id="sugerencias"
            className="p-6 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 scroll-mt-28 shadow-xl"
          >
            <div className="flex items-center space-x-3 text-center sm:text-left">
              <div className="p-2.5 bg-indigo-500/20 text-indigo-300 rounded-xl flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">¿Tienes requerimientos especiales o sugerencias?</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Escríbenos directamente a nuestro equipo de desarrollo.</div>
              </div>
            </div>

            <a
              href={SUPPORT_LINK}
              className="w-full sm:w-auto text-center px-5 py-2.5 bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 text-slate-950 font-display font-black rounded-xl text-xs shadow-lg shadow-lime-500/20 transition-all whitespace-nowrap cursor-pointer"
            >
              Enviar Correo
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
