import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center animate-in fade-in zoom-in duration-300">
      <button
        onClick={scrollToTop}
        id="scroll-to-top-btn"
        className="p-3 sm:p-3.5 bg-slate-900/90 hover:bg-slate-800 text-lime-400 hover:text-white border border-lime-500/30 hover:border-lime-400 rounded-2xl shadow-xl shadow-black/60 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group cursor-pointer"
        aria-label="Volver arriba"
        title="Volver arriba"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5] group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>
    </div>
  );
}
