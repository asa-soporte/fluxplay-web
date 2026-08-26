import React, { useState, useEffect } from 'react';
import { Download, Tv, Smartphone, Menu, X, Sparkles, MessageSquareCode, ShieldCheck, Headphones, SmartphoneNfc } from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
  onOpenSupport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, onOpenSupport }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Listen for PWA / WebAPK beforeinstallprompt event
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstallPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setIsInstallable(false);
      }
      setDeferredPrompt(null);
    } else {
      // Direct user to instructions or section
      const downloadEl = document.getElementById('descarga');
      if (downloadEl) {
        downloadEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-lime-400 via-emerald-500 to-cyan-500 p-0.5 shadow-lg shadow-lime-500/25 group-hover:shadow-lime-500/50 group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[14px] overflow-hidden flex items-center justify-center relative">
                <img
                  src="./app-icon.jpg"
                  alt="FluxPlay IPTV Icono Oficial"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xl font-display font-black tracking-tight text-white group-hover:text-lime-400 transition-colors">
                FluxPlay
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-lime-500/20 text-lime-400 border border-lime-500/30 rounded-md">
                PRO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a
              href="#caracteristicas"
              className="hover:text-lime-400 transition-colors py-1 relative group"
            >
              Características
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-400 transition-all group-hover:w-full" />
            </a>

            <a
              href="#capturas"
              className="hover:text-lime-400 transition-colors py-1 relative group"
            >
              Capturas Oficiales
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-400 transition-all group-hover:w-full" />
            </a>

            <a
              href="#tester"
              className="hover:text-lime-400 transition-colors py-1 relative group"
            >
              Test M3U
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-400 transition-all group-hover:w-full" />
            </a>

            <a
              href="#soporte"
              className="hover:text-lime-400 transition-colors py-1 relative group"
            >
              Preguntas Frecuentes
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-400 transition-all group-hover:w-full" />
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            {isInstallable && (
              <button
                onClick={handleInstallPWA}
                className="inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold text-lime-400 hover:text-white bg-lime-500/10 hover:bg-lime-500/20 border border-lime-500/30 rounded-xl transition-all cursor-pointer animate-pulse"
                title="Instalar como App en tu dispositivo"
              >
                <SmartphoneNfc className="w-4 h-4" />
                <span>Instalar App Web</span>
              </button>
            )}

            <a
              href="#sugerencias"
              onClick={(e) => {
                e.preventDefault();
                onOpenSupport();
              }}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 rounded-xl transition-all cursor-pointer"
            >
              <Headphones className="w-4 h-4 text-lime-400" />
              <span>Ayuda / Soporte</span>
            </a>

            <a
              href="#descarga"
              onClick={(e) => {
                e.preventDefault();
                onOpenDownload();
              }}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400 rounded-xl shadow-lg shadow-lime-500/25 hover:shadow-lime-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 mr-2 stroke-[2.5]" />
              <span>Descargar APK</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => onOpenDownload()}
              className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-lime-400 rounded-lg"
            >
              APK
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-white/10"
              aria-label="Abrir Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 px-4 bg-slate-900/95 border border-white/10 rounded-2xl backdrop-blur-2xl shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#caracteristicas"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-sm font-semibold text-slate-200 hover:text-lime-400 bg-slate-800/40 rounded-xl border border-white/5"
              >
                Características
              </a>
              <a
                href="#capturas"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-sm font-semibold text-slate-200 hover:text-lime-400 bg-slate-800/40 rounded-xl border border-white/5"
              >
                Capturas
              </a>
              <a
                href="#tester"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-sm font-semibold text-slate-200 hover:text-lime-400 bg-slate-800/40 rounded-xl border border-white/5"
              >
                Test M3U
              </a>
              <a
                href="#soporte"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-sm font-semibold text-slate-200 hover:text-lime-400 bg-slate-800/40 rounded-xl border border-white/5"
              >
                FAQ / Ayuda
              </a>
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col space-y-2">
              {isInstallable && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleInstallPWA();
                  }}
                  className="w-full py-3 px-4 bg-lime-500/15 hover:bg-lime-500/25 text-lime-400 border border-lime-500/30 font-bold rounded-xl flex items-center justify-center space-x-2 transition-all"
                >
                  <SmartphoneNfc className="w-5 h-5" />
                  <span>Instalar como App Web / PWA</span>
                </button>
              )}

              <a
                href="#sugerencias"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSupport();
                }}
                className="flex items-center justify-between p-3 text-sm font-medium text-slate-300 bg-slate-800/30 rounded-xl cursor-pointer"
              >
                <span>Sugerencias & Contacto</span>
                <span className="text-xs text-lime-400">Atención Directa</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-lime-400 to-emerald-400 text-slate-950 font-bold rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-lime-500/20"
              >
                <Download className="w-5 h-5 stroke-[2.5]" />
                <span>Descargar APK Directo (v2.2)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
