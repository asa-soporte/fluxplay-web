import React from 'react';
import { Cpu, Sliders, ListFilter, PictureInPicture2, Volume2, Tv, Sparkles, Zap, Search, Smartphone } from 'lucide-react';
import { KEY_FEATURES } from '../data/mockData';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-lime-400" />,
  Sliders: <Sliders className="w-6 h-6 text-cyan-400" />,
  ListFilter: <ListFilter className="w-6 h-6 text-indigo-400" />,
  PictureInPicture2: <PictureInPicture2 className="w-6 h-6 text-amber-400" />,
  Search: <Search className="w-6 h-6 text-fuchsia-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-emerald-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-pink-400" />,
  Volume2: <Volume2 className="w-6 h-6 text-fuchsia-400" />,
  Tv: <Tv className="w-6 h-6 text-teal-400" />
};

export const KeyFeatures: React.FC = () => {
  return (
    <section id="caracteristicas" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-lime-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-lime-500/10 border border-lime-500/25 rounded-full text-xs font-mono font-bold text-lime-400">
            <Zap className="w-3.5 h-3.5" />
            <span>ARQUITECTURA DE ALTO RENDIMIENTO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white">
            Ingeniería Diseñada para la{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-emerald-300 to-cyan-400">
              Máxima Fluidez
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Olvídate de los cuelgues, el desajuste de audio o las interfaces lentas. FluxPlay exprime el hardware de tu dispositivo Android al máximo.
          </p>
        </div>

        {/* Features 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {KEY_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="bg-slate-900/50 border border-white/10 hover:border-lime-500/40 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-500/10 group backdrop-blur-xl relative overflow-hidden"
            >
              {/* Corner gradient accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full blur-2xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`} />

              <div className="space-y-4 relative z-10">
                
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {iconMap[feature.icon] || <Sparkles className="w-6 h-6 text-lime-400" />}
                  </div>

                  {feature.badge && (
                    <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300 rounded-lg group-hover:border-lime-500/30 group-hover:text-lime-300 transition-colors">
                      {feature.badge}
                    </span>
                  )}
                </div>

                {/* Titles */}
                <div>
                  <h3 className="text-xl font-display font-black text-white group-hover:text-lime-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 font-semibold mt-0.5">
                    {feature.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bullet details */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <span className="text-lime-400 font-bold mt-0.5">•</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                  <div className="flex items-start space-x-2 text-xs text-slate-400">
                    <span className="text-lime-400 font-bold mt-0.5">•</span>
                    <span className="tracking-widest font-bold text-slate-400">...</span>
                  </div>
                </div>

              </div>

              {/* Bottom Subtle Status */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>NATIVO ANDROID</span>
                <span className="text-lime-400/80 group-hover:text-lime-400 transition-colors">OPTIMIZADO ✓</span>
              </div>

            </div>
          ))}
        </div>

        {/* Hardware Comparison Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="px-3 py-1 bg-lime-500/10 text-lime-400 border border-lime-500/30 rounded-full text-xs font-mono font-bold">
                RENDIMIENTO EN NÚMEROS
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                ¿Por qué FluxPlay es más rápido que otros reproductores IPTV?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                A diferencia de aplicaciones basadas en webviews lentos o reproductores genéricos sin aceleración, FluxPlay utiliza llamadas directas a la API NDK de Android con decodificación asíncrona de video multihilo.
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-3 font-mono">
              <div className="p-4 bg-slate-950/80 border border-lime-500/30 rounded-2xl text-center">
                <div className="text-2xl font-black text-lime-400">-45%</div>
                <div className="text-[11px] text-slate-400 mt-1">Uso de Batería</div>
              </div>

              <div className="p-4 bg-slate-950/80 border border-cyan-500/30 rounded-2xl text-center">
                <div className="text-2xl font-black text-cyan-400">0.8s</div>
                <div className="text-[11px] text-slate-400 mt-1">Carga de Canal</div>
              </div>

              <div className="p-4 bg-slate-950/80 border border-indigo-500/30 rounded-2xl text-center">
                <div className="text-2xl font-black text-indigo-400">50K+</div>
                <div className="text-[11px] text-slate-400 mt-1">Canales M3U</div>
              </div>

              <div className="p-4 bg-slate-950/80 border border-emerald-500/30 rounded-2xl text-center">
                <div className="text-2xl font-black text-emerald-400">60 FPS</div>
                <div className="text-[11px] text-slate-400 mt-1">Ultra HD 4K</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
