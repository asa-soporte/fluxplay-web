import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Play, 
  Pause, 
  Sparkles,
  X
} from 'lucide-react';
import { SCREENSHOT_SLIDES as DEFAULT_SLIDES } from '../data/mockData';

export const InteractiveScreenshots: React.FC = () => {
  const slides = DEFAULT_SLIDES;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Touch swipe states for touch screens (mobile/tablet)
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 45; // in px

  // Autoplay functionality (defaults to automatic transitions every 3.5 seconds)
  useEffect(() => {
    if (!isPlaying || slides.length <= 1 || isModalOpen) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length, isModalOpen]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Keyboard navigation when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, slides.length]);

  // Touch handlers for swipe navigation
  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const activeSlide = slides[activeIndex] || slides[0];

  return (
    <section id="capturas" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-lime-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-lime-500/10 border border-lime-500/25 rounded-full text-xs font-mono font-bold text-lime-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GALERÍA DE CAPTURAS OFICIALES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white">
            Interfaz Fluida e{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-cyan-400">
              Inmersiva
            </span>
          </h2>
        </div>

        {/* Main Interactive Slider Container */}
        {slides.length > 0 && activeSlide && (
          <div className="flex flex-col items-center justify-center bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-2xl relative max-w-3xl mx-auto">
            
            {/* Visual Mockup with Dynamic Frame */}
            <div 
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[9/17] bg-slate-950 border-4 sm:border-[6px] border-slate-800 rounded-[2.8rem] shadow-2xl overflow-hidden p-2 group select-none"
            >
              
              {/* Phone Top Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-700" />
              </div>

              {/* Inner Screen Content */}
              <div className="relative w-full h-full bg-slate-900 rounded-[2.2rem] overflow-hidden flex items-center justify-center">
                {/* Clean Real Image Render without text overlays */}
                <img
                  src={activeSlide.imageUrl}
                  alt={`Captura ${activeIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  draggable={false}
                />
              </div>

              {/* Zoom Action Icon Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="absolute top-4 right-4 p-2.5 bg-slate-950/80 hover:bg-lime-400 hover:text-slate-950 text-white rounded-xl border border-white/20 shadow-lg backdrop-blur-md transition-all cursor-pointer z-30"
                title="Ampliar captura en pantalla completa"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

            </div>

            {/* Slider Controls Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-6 w-full max-w-md">
              <button
                onClick={handlePrev}
                className="p-3 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white rounded-xl border border-white/10 transition-all cursor-pointer"
                title="Anterior captura"
                aria-label="Anterior captura"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="p-3 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white rounded-xl border border-white/10 transition-all cursor-pointer"
                title="Siguiente captura"
                aria-label="Siguiente captura"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center space-x-1.5 text-xs font-semibold ${
                  isPlaying
                    ? 'bg-lime-500/20 text-lime-300 border-lime-500/40'
                    : 'bg-slate-800 text-slate-400 border-white/10'
                }`}
                title={isPlaying ? 'Pausar auto-reproducción' : 'Iniciar auto-reproducción'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Auto' : 'Pausado'}</span>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center space-x-2 px-4 py-3 bg-slate-800/80 hover:bg-lime-500 hover:text-slate-950 text-slate-300 rounded-xl border border-white/10 text-xs font-bold transition-all cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Ampliar HD</span>
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center space-x-2 pt-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 transition-all rounded-full cursor-pointer ${
                    activeIndex === idx
                      ? 'w-8 bg-lime-400'
                      : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Ir a la diapositiva ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        )}

      </div>

      {/* High-Resolution Modal Lightbox with Full Touch Swipe & Navigation */}
      {isModalOpen && (
        <div 
          onClick={() => setIsModalOpen(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-6 lg:p-10 animate-in fade-in duration-200 cursor-pointer select-none"
        >
          {/* Close Button Top Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:px-4 sm:py-2 bg-slate-900/90 hover:bg-lime-400 hover:text-slate-950 text-white rounded-2xl text-xs font-bold border border-white/20 shadow-2xl backdrop-blur-md cursor-pointer transition-all flex items-center space-x-1.5"
            title="Cerrar (Esc)"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Cerrar</span>
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="fixed left-2 sm:left-6 z-50 p-3 sm:p-4 bg-slate-900/80 hover:bg-lime-400 hover:text-slate-950 text-white rounded-2xl border border-white/20 shadow-2xl backdrop-blur-md cursor-pointer transition-all active:scale-95"
            title="Anterior captura (Desliza a la derecha o Flecha Izquierda)"
            aria-label="Anterior captura"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="fixed right-2 sm:right-6 z-50 p-3 sm:p-4 bg-slate-900/80 hover:bg-lime-400 hover:text-slate-950 text-white rounded-2xl border border-white/20 shadow-2xl backdrop-blur-md cursor-pointer transition-all active:scale-95"
            title="Siguiente captura (Desliza a la izquierda o Flecha Derecha)"
            aria-label="Siguiente captura"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Center Image Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full flex flex-col items-center justify-center p-2 cursor-default"
          >
            <img
              key={activeSlide.imageUrl}
              src={activeSlide.imageUrl}
              alt={`Captura ${activeIndex + 1}`}
              className="max-h-[82vh] max-w-[92vw] w-auto object-contain rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl animate-in zoom-in-95 duration-200"
              referrerPolicy="no-referrer"
              draggable={false}
            />

            {/* Bottom Floating Counter & Gesture Helper */}
            <div className="mt-4 flex items-center space-x-3 bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 shadow-xl">
              <span className="text-xs font-mono font-bold text-lime-400">
                {activeIndex + 1} / {slides.length}
              </span>
              <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                • Desliza en pantalla o usa flechas ← →
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

