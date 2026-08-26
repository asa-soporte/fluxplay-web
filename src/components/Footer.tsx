import React from 'react';
import { Download, ShieldCheck, Heart, Sparkles, Tv, Smartphone, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10 text-center md:text-left">
          
          {/* Brand Info (col-span-2) */}
          <div className="lg:col-span-2 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-lime-400 to-cyan-500 p-0.5 shadow-lg shadow-lime-500/20 overflow-hidden">
                <img
                  src="/app-icon.jpg"
                  alt="FluxPlay IPTV Icono"
                  className="w-full h-full object-cover rounded-[14px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <div className="text-base font-display font-black text-white flex items-center space-x-2">
                  <span>FluxPlay IPTV</span>
                  <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold bg-lime-500/20 text-lime-400 rounded">
                    PRO 4K
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono">Build v2.2 Oficial</span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm mx-auto md:mx-0 text-xs">
              Reproductor multimedia de última generación para Android. Experiencia cinemática 16:9 con decodificación nativa por hardware, soporte para listas M3U/M3U8 y cero publicidad intrusiva.
            </p>
          </div>

          {/* Column 1: Navegación */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#caracteristicas" className="hover:text-lime-400 transition-colors">
                  Características Clave
                </a>
              </li>
              <li>
                <a href="#capturas" className="hover:text-lime-400 transition-colors">
                  Galería de Capturas
                </a>
              </li>
              <li>
                <a href="#tester" className="hover:text-lime-400 transition-colors">
                  Inspector de Enlaces M3U
                </a>
              </li>
              <li>
                <a href="#descarga" className="hover:text-lime-400 transition-colors">
                  Descargar APK Universal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Descargas */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">
              Descargas APK
            </h4>
            <ul className="space-y-2 font-mono text-[11px]">
              <li>
                <a href="#descarga" className="text-lime-400 hover:text-lime-300 transition-colors">
                  • Universal APK v2.2
                </a>
              </li>
              <li>
                <a href="#descarga" className="hover:text-white transition-colors">
                  • Móvil & Tablet Edition
                </a>
              </li>
              <li>
                <a href="#descarga" className="hover:text-white transition-colors">
                  • Checksums SHA-256
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Asistencia */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">
              Soporte & Ayuda
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#sugerencias" className="hover:text-lime-400 transition-colors">
                  Sugerencias & Requerimientos
                </a>
              </li>
              <li>
                <a href="#soporte" className="hover:text-lime-400 transition-colors">
                  Preguntas Frecuentes (FAQ)
                </a>
              </li>
              <li>
                <button
                  onClick={scrollToTop}
                  className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 font-bold pt-1 cursor-pointer mx-auto md:mx-0"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Volver al inicio</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="py-6 my-6 border-b border-white/10 bg-slate-900/30 rounded-2xl p-5 border border-white/5 space-y-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-slate-300 font-bold text-[11px]">
            <ShieldCheck className="w-4 h-4 text-lime-400 flex-shrink-0" />
            <span>Aviso Legal y Descargo de Responsabilidad:</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            FluxPlay IPTV es exclusivamente una herramienta de reproducción multimedia y software reproductor para el sistema operativo Android. FluxPlay NO incluye, suministra, aloja ni vende ningún tipo de contenido audiovisual, listas de canales o transmisiones protegidas por derechos de propiedad intelectual. Los usuarios son los únicos responsables de las listas de reproducción (M3U, M3U8, DASH) y flujos que decidan cargar de manera personal y privada en la aplicación.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1">
            <span>© {new Date().getFullYear()} FluxPlay IPTV. Todos los derechos reservados.</span>
            <span className="hidden sm:inline">•</span>
            <span>
              Desarrollado y optimizado por{' '}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-emerald-300 to-cyan-400">
                Asa Soporte Informático
              </span>
            </span>
          </div>
          <div className="flex items-center space-x-4 font-mono text-[10px] justify-center sm:justify-start">
            <span>Android v7.0 a v15</span>
            <span>•</span>
            <span className="text-lime-400 font-bold">Zero Ads</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
