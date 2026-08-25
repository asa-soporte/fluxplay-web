import React, { useState } from 'react';
import { Download, ShieldCheck, Check, Copy, Smartphone, Tv, Sparkles, QrCode, CheckCircle2, Zap, ArrowDownCircle, Info, Lock } from 'lucide-react';
import { APK_RELEASES } from '../data/mockData';
import { ApkRelease } from '../types';

export const DownloadSection: React.FC = () => {
  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadCompleted, setDownloadCompleted] = useState<boolean>(false);
  const [showQrModal, setShowQrModal] = useState<boolean>(false);

  const release = APK_RELEASES[0];

  const handleCopySha = (sha: string) => {
    navigator.clipboard.writeText(sha);
    setCopiedHash(sha);
    setTimeout(() => setCopiedHash(null), 2500);
  };

  const handleTriggerDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    setDownloadCompleted(false);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloadCompleted(true);
          // Trigger file download
          const element = document.createElement("a");
          const file = new Blob([
            `# Fluxplay IPTV Android APK Package\n# Version: ${release.version}\n# Architecture: ${release.architecture}\n# SHA256: ${release.sha256}\n# Official Build\n`
          ], { type: 'application/vnd.android.package-archive' });
          element.href = URL.createObjectURL(file);
          element.download = `Fluxplay_${release.version.replace(/\s+/g, '_')}.apk`;
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 12;
      });
    }, 180);
  };

  return (
    <section id="descarga" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-gradient-to-tr from-lime-500/15 via-cyan-500/15 to-emerald-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-lime-500/10 border border-lime-500/30 rounded-full text-xs font-mono font-bold text-lime-400">
            <ShieldCheck className="w-4 h-4" />
            <span>DESCARGA DIRECTA OFICIAL DE FLUXPLAY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white">
            Descargar Instalador{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400">
              APK Universal
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Instalador oficial todo-en-uno compatible con smartphones y tablets. Libre de publicidad, sin intermediarios y verificado con firma digital SHA-256.
          </p>
        </div>

        {/* Single Premium Download Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-slate-900/90 border-2 border-lime-400/80 rounded-3xl p-7 sm:p-10 backdrop-blur-2xl shadow-2xl shadow-lime-500/10 overflow-hidden">
            
            {/* Top Recommended Tag */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-lime-400 to-emerald-400 text-slate-950 font-display font-black text-[11px] tracking-wider uppercase px-5 py-1.5 rounded-bl-2xl shadow-md flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>COMPILACIÓN OFICIAL RECOMENDADA</span>
            </div>

            <div className="space-y-8">
              
              {/* Header Info */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="px-2.5 py-1 bg-lime-500/10 text-lime-400 rounded-lg border border-lime-500/20 font-bold">
                    UNIVERSAL APK
                  </span>
                  <span>•</span>
                  <span>Android 7.0 a Android 15</span>
                  {release.downloadCount && (
                    <>
                      <span>•</span>
                      <span className="text-cyan-300 font-bold">{release.downloadCount}</span>
                    </>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/app-icon.jpg"
                      alt="Fluxplay App Icon"
                      className="w-10 h-10 rounded-xl object-cover border border-lime-500/30"
                      referrerPolicy="no-referrer"
                    />
                    <h3 className="text-3xl sm:text-4xl font-display font-black text-white">
                      Fluxplay IPTV {release.version}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-lg border border-white/5 self-start sm:self-center">
                    {release.releaseDate}
                  </span>
                </div>

                <p className="text-sm text-slate-300">
                  {release.label}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 sm:p-5 bg-slate-950/80 rounded-2xl border border-white/10 font-mono text-xs">
                <div className="flex justify-between items-center p-2.5 bg-slate-900/60 rounded-xl">
                  <span className="text-slate-400">Tamaño del archivo:</span>
                  <span className="text-lime-400 font-bold text-sm">{release.fileSize}</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-slate-900/60 rounded-xl">
                  <span className="text-slate-400">Arquitectura:</span>
                  <span className="text-cyan-300 font-bold">arm64 / v7a / x86</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-slate-900/60 rounded-xl">
                  <span className="text-slate-400">Dispositivos:</span>
                  <span className="text-white font-bold">Móvil y Tablet</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-slate-900/60 rounded-xl">
                  <span className="text-slate-400">Licencia:</span>
                  <span className="text-emerald-400 font-bold">100% Gratuito / Sin Ads</span>
                </div>
              </div>

              {/* Changelog Checklist */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-lime-400" />
                  <span>Características y Novedades Incluidas:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {release.changelog.map((item, i) => (
                    <div key={i} className="flex items-start space-x-2.5 p-3 bg-slate-900/50 rounded-xl border border-white/5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SHA-256 Hash Verification Box */}
              <div className="p-3.5 bg-slate-950 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 w-full overflow-hidden">
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 flex items-center space-x-1.5">
                    <Lock className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                    <span>FIRMA DIGITAL SHA-256 (VERIFICADA)</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-slate-300 break-all sm:truncate max-w-full select-all leading-tight">
                    {release.sha256}
                  </div>
                </div>

                <button
                  onClick={() => handleCopySha(release.sha256)}
                  className="w-full sm:w-auto justify-center px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-mono font-bold transition-colors cursor-pointer flex items-center space-x-1.5 flex-shrink-0"
                  title="Copiar Hash SHA-256"
                >
                  {copiedHash === release.sha256 ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-lime-400" />
                      <span className="text-lime-400">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar SHA</span>
                    </>
                  )}
                </button>
              </div>

              {/* Download Action & QR Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={handleTriggerDownload}
                    disabled={isDownloading}
                    className="w-full sm:flex-1 py-4 px-8 rounded-2xl font-display font-black text-sm sm:text-base text-slate-950 bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400 shadow-xl shadow-lime-500/25 hover:shadow-lime-500/40 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center space-x-2.5 cursor-pointer disabled:opacity-50"
                  >
                    <Download className="w-5 h-5 stroke-[2.5]" />
                    <span>
                      {isDownloading ? 'Generando Descarga Segura...' : `Descargar APK Directo (${release.fileSize})`}
                    </span>
                  </button>

                  <button
                    onClick={() => setShowQrModal(true)}
                    className="w-full sm:w-auto py-4 px-5 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl border border-white/10 hover:border-lime-500/30 text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer flex-shrink-0"
                    title="Escanear QR para instalar en el móvil"
                  >
                    <QrCode className="w-4 h-4 text-lime-400" />
                    <span>Código QR</span>
                  </button>
                </div>

                {/* Status caption */}
                <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500 font-mono pt-1">
                  <span>✓ Servidor CDN de Alta Velocidad</span>
                  <span>•</span>
                  <span>✓ Sin Registro Requerido</span>
                  <span>•</span>
                  <span>✓ 100% Libre de Virus</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 3-Step Installation Guide */}
        <div className="mt-16 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
              Guía Rápida de Instalación
            </h3>
            <p className="text-slate-400 text-sm">
              Instala Fluxplay en tu teléfono, tablet o televisor Android en tres pasos sencillos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 relative">
              <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center font-display font-black text-lime-400 mb-4">
                01
              </div>
              <h4 className="text-base font-bold text-white mb-1.5">1. Habilitar Fuentes Desconocidas</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                En tu dispositivo Android, ve a <span className="text-slate-200 font-semibold">Ajustes &gt; Seguridad o Aplicaciones</span> y permite la instalación desde tu navegador.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 relative">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-display font-black text-cyan-400 mb-4">
                02
              </div>
              <h4 className="text-base font-bold text-white mb-1.5">2. Abrir e Instalar el APK</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Abre el archivo descargado <span className="text-slate-200 font-mono text-[11px]">Fluxplay_v2.2_Pro.apk</span> desde la barra de descargas y pulsa <span className="text-lime-400 font-semibold">Instalar</span>.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 relative">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-display font-black text-emerald-400 mb-4">
                03
              </div>
              <h4 className="text-base font-bold text-white mb-1.5">3. Cargar tus Listas M3U</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Inicia la app, pulsa en el botón <span className="text-lime-400 font-bold">+</span>, ingresa la URL de tu lista M3U/M3U8 o archivo local y disfruta del streaming 4K.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Real-time Download Progression Modal */}
      {isDownloading && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-900 border border-lime-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200">
            
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-lime-500/20 border border-lime-500/40 flex items-center justify-center text-lime-400">
                <Download className={`w-7 h-7 ${downloadCompleted ? '' : 'animate-bounce'}`} />
              </div>
              <div>
                <h4 className="text-xl font-display font-black text-white">
                  {downloadCompleted ? '¡Descarga Completada!' : 'Descargando Fluxplay APK'}
                </h4>
                <p className="text-xs text-lime-400 font-mono">
                  {release.version} • {release.fileSize}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-300">
                <span>Progreso de transferencia CDN</span>
                <span className="text-lime-400 font-bold">{downloadProgress}%</span>
              </div>
              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-white/10 p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400 rounded-full transition-all duration-200"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>
            </div>

            {downloadCompleted ? (
              <div className="p-4 bg-emerald-950/50 border border-emerald-500/30 rounded-2xl text-xs text-emerald-300 space-y-1.5">
                <div className="font-bold flex items-center space-x-1.5 text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>El archivo APK oficial ha sido transferido.</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Revisa tu carpeta de Descargas o la barra superior de Android para iniciar la instalación.
                </p>
              </div>
            ) : (
              <div className="text-xs text-slate-400 text-center font-mono">
                Conectando con el servidor CDN ultra rápido de Fluxplay...
              </div>
            )}

            <button
              onClick={() => {
                setIsDownloading(false);
                setDownloadCompleted(false);
              }}
              className="w-full py-3.5 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              {downloadCompleted ? 'Cerrar y Abrir APK' : 'Cancelar'}
            </button>

          </div>
        </div>
      )}

      {/* QR Code Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="max-w-sm w-full bg-slate-900 border border-white/15 rounded-3xl p-6 shadow-2xl text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="space-y-1">
              <h4 className="text-lg font-display font-black text-white">
                Escanea para Descargar en tu Móvil
              </h4>
              <p className="text-xs text-slate-400">
                Apunta la cámara de tu smartphone para descargar el archivo APK directamente.
              </p>
            </div>

            {/* Simulated Clean SVG QR Code */}
            <div className="p-5 bg-white rounded-2xl mx-auto w-52 h-52 flex items-center justify-center shadow-2xl">
              <svg className="w-full h-full text-slate-950" viewBox="0 0 100 100" fill="currentColor">
                <rect x="10" y="10" width="25" height="25" fill="#000" />
                <rect x="15" y="15" width="15" height="15" fill="#fff" />
                <rect x="18" y="18" width="9" height="9" fill="#000" />

                <rect x="65" y="10" width="25" height="25" fill="#000" />
                <rect x="70" y="15" width="15" height="15" fill="#fff" />
                <rect x="73" y="18" width="9" height="9" fill="#000" />

                <rect x="10" y="65" width="25" height="25" fill="#000" />
                <rect x="15" y="70" width="15" height="15" fill="#fff" />
                <rect x="18" y="73" width="9" height="9" fill="#000" />

                <rect x="40" y="15" width="6" height="6" fill="#000" />
                <rect x="50" y="20" width="8" height="6" fill="#000" />
                <rect x="42" y="35" width="16" height="8" fill="#000" />
                <rect x="65" y="45" width="10" height="10" fill="#000" />
                <rect x="40" y="65" width="8" height="20" fill="#000" />
                <rect x="55" y="75" width="18" height="10" fill="#000" />
                <rect x="78" y="70" width="12" height="15" fill="#000" />
              </svg>
            </div>

            <div className="text-[11px] font-mono text-lime-400">
              Fluxplay_v2.2_Universal.apk
            </div>

            <button
              onClick={() => setShowQrModal(false)}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
