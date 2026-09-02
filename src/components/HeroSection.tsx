import React from 'react';
import { Tv, Play, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenDownload: () => void;
  onOpenScreenshots: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenDownload,
  onOpenScreenshots,
}) => {
  const coverImage = './fluxplay-01.jpg';

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-lime-500/15 via-cyan-500/10 to-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-lime-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Cyber Grid Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            
            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display font-black tracking-tight leading-[1.08] text-white">
                La Evolución del <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-emerald-300 to-cyan-400">
                  Streaming IPTV
                </span>{' '}
                en Android.
              </h1>
              
              <p className="text-slate-300 sm:text-lg md:text-xl font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Reproductor multimedia de ultra alto rendimiento con <strong className="text-white font-semibold">Modo Cine HUD 16:9</strong>, decodificación por hardware <strong className="text-white font-semibold">MediaCodec 4K a 60 FPS</strong>, búfer anti-cortes inteligente y gestión avanzada de listas M3U/M3U8.
              </p>
            </div>

            {/* High Impact Numbers */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 max-w-lg mx-auto lg:mx-0 border-t border-white/10">
              <div className="p-3 bg-slate-900/40 rounded-xl border border-white/5 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-display font-black text-lime-400">&lt; 1s</div>
                <div className="text-[11px] text-slate-400 font-medium">Baja Latencia</div>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-xl border border-white/5 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-display font-black text-cyan-400">4K 60FPS</div>
                <div className="text-[11px] text-slate-400 font-medium">MediaCodec HW</div>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-xl border border-white/5 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-display font-black text-white">0% Ads</div>
                <div className="text-[11px] text-slate-400 font-medium">Sin Publicidad</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Mockup with Real Screenshot */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Backing Card */}
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Glowing Aura Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-lime-500 via-cyan-500 to-indigo-600 rounded-[2.8rem] opacity-30 blur-xl animate-pulse" />

              {/* Futuristic Smartphone Frame */}
              <div className="relative bg-slate-950 border-[6px] border-slate-800 rounded-[2.8rem] shadow-2xl overflow-hidden p-2.5">
                
                {/* Phone Speaker & Camera Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-700" />
                  <div className="w-8 h-1 bg-slate-800 rounded-full" />
                </div>

                {/* Main Screen Container */}
                <div className="relative bg-slate-900 rounded-[2.2rem] overflow-hidden aspect-[9/18] flex flex-col border border-white/10 group">
                  
                  {/* Real screenshot image */}
                  <img 
                    src={coverImage} 
                    alt="FluxPlay IPTV Reproductor Android" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                </div>

                {/* Interactive CTA overlay on phone */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center z-30">
                  <button
                    onClick={onOpenScreenshots}
                    className="w-full py-2.5 px-4 bg-lime-400 hover:bg-lime-300 text-slate-950 font-display font-black text-xs rounded-xl shadow-lg shadow-lime-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Explorar Capturas HD</span>
                  </button>
                </div>

              </div>

              {/* Floating feature pills around phone */}
              <div className="hidden sm:block absolute -left-8 top-1/4 bg-slate-900/90 backdrop-blur-md border border-lime-500/30 p-3 rounded-2xl shadow-xl shadow-black/60 text-left">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-lime-500/20 rounded-lg text-lime-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">HW MediaCodec</div>
                    <div className="text-[10px] text-lime-400 font-mono">4K 60FPS</div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -right-8 bottom-1/4 bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 p-3 rounded-2xl shadow-xl shadow-black/60 text-left">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-cyan-500/20 rounded-lg text-cyan-400">
                    <Tv className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Android TV + PiP</div>
                    <div className="text-[10px] text-cyan-400 font-mono">Ventana Flotante</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
