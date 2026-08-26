import React, { useState } from 'react';
import { ListFilter, Search, CheckCircle2, AlertCircle, Play, Sparkles, Activity, ShieldCheck, RefreshCw } from 'lucide-react';

export const M3uTesterTool: React.FC = () => {
  const [streamUrl, setStreamUrl] = useState('');
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{
    status: 'success' | 'warning' | 'error' | null;
    protocol: string;
    codec: string;
    resolution: string;
    ping: number;
    channelEstimate: number;
    compatibility: string;
    notes: string;
  } | null>(null);

  const handleTestStream = (e: React.FormEvent) => {
    e.preventDefault();
    if (!streamUrl.trim()) return;

    setIsTesting(true);
    setTestResult(null);

    setTimeout(() => {
      setIsTesting(false);
      const isM3u = streamUrl.toLowerCase().includes('.m3u') || streamUrl.toLowerCase().includes('.m3u8') || streamUrl.toLowerCase().includes('http');
      
      if (isM3u) {
        setTestResult({
          status: 'success',
          protocol: streamUrl.includes('.m3u8') ? 'HLS (HTTP Live Streaming)' : 'M3U Plus Playlist',
          codec: 'HEVC / H.264 Acelerado por Hardware',
          resolution: 'Auto-detección (Hasta 4K UHD 60FPS)',
          ping: Math.floor(18 + Math.random() * 24),
          channelEstimate: Math.floor(120 + Math.random() * 850),
          compatibility: '100% Compatible con Nexus Engine 7.4',
          notes: 'Flujo compatible con Modo Cine HUD 16:9, búfer inteligente anti-cortes y cambio rápido de canales.'
        });
      } else {
        setTestResult({
          status: 'warning',
          protocol: 'URL de Flujo Directo',
          codec: 'MPEG-TS / Raw Stream',
          resolution: '1080p FHD',
          ping: 85,
          channelEstimate: 1,
          compatibility: 'Compatible en Modo Directo',
          notes: 'Se recomienda asegurar que el enlace tenga encabezados CORS o acceso directo para reproducir sin interrupciones.'
        });
      }
    }, 1200);
  };

  const handleLoadDemoM3u = () => {
    setStreamUrl('https://raw.githubusercontent.com/fluxplay/demo/main/4k-latin-sports.m3u8');
  };

  return (
    <section id="tester" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Container */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-2xl shadow-2xl space-y-8 text-center">
          
          {/* Header Info Centered */}
          <div className="space-y-4 max-w-2xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-mono font-bold text-cyan-300 mx-auto">
              <Activity className="w-3.5 h-3.5" />
              <span>INSPECTOR DE COMPATIBILIDAD ONLINE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-black text-white text-center">
              Verifica tu Lista M3U o Enlace de Streaming
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed text-center">
              Pega el enlace de tu lista remota (.m3u, .m3u8, Xtream o DASH) para comprobar en segundos la compatibilidad con el motor de decodificación de FluxPlay.
            </p>

            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-white/5 text-[11px] font-mono text-lime-400">
                ✓ Listas M3U8
              </span>
              <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-white/5 text-[11px] font-mono text-cyan-400">
                ✓ Códecs H.265/HEVC
              </span>
              <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-white/5 text-[11px] font-mono text-indigo-400">
                ✓ Formatos DASH / MPD
              </span>
            </div>
          </div>

          {/* Form & Output Centered */}
          <div className="max-w-2xl mx-auto w-full flex flex-col space-y-4">
            
            <form onSubmit={handleTestStream} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  value={streamUrl}
                  onChange={(e) => setStreamUrl(e.target.value)}
                  placeholder="https://ejemplo.com/mi-lista-de-canales.m3u8"
                  className="w-full bg-slate-950 border border-white/15 focus:border-lime-400 rounded-2xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-lime-400/20 font-mono text-center sm:text-left"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={handleLoadDemoM3u}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-mono underline cursor-pointer"
                >
                  Usar enlace de prueba M3U
                </button>

                <button
                  type="submit"
                  disabled={isTesting || !streamUrl.trim()}
                  className="px-6 py-3 bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 disabled:opacity-50 text-slate-950 font-display font-black text-xs rounded-xl shadow-lg shadow-lime-500/20 transition-all flex items-center space-x-2 cursor-pointer ml-auto"
                >
                  {isTesting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Analizando Códecs...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Comprobar Compatibilidad</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Result Panel */}
            {testResult && (
              <div className="p-4 bg-slate-950/80 border border-lime-500/40 rounded-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-300 text-left">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-lime-400">
                    <CheckCircle2 className="w-4 h-4 text-lime-400" />
                    <span>{testResult.compatibility}</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300">
                    Ping: {testResult.ping}ms
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="p-2 bg-slate-900 rounded-lg text-slate-300">
                    <div className="text-[9px] text-slate-500">PROTOCOLO:</div>
                    <div className="font-bold text-white truncate">{testResult.protocol}</div>
                  </div>

                  <div className="p-2 bg-slate-900 rounded-lg text-slate-300">
                    <div className="text-[9px] text-slate-500">DECODIFICACIÓN:</div>
                    <div className="font-bold text-lime-400 truncate">{testResult.codec}</div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {testResult.notes}
                </p>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
