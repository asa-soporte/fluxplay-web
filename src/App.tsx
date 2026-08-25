import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KeyFeatures } from './components/KeyFeatures';
import { InteractiveScreenshots } from './components/InteractiveScreenshots';
import { M3uTesterTool } from './components/M3uTesterTool';
import { DownloadSection } from './components/DownloadSection';
import { SupportSection } from './components/SupportSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-lime-400 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Top Fixed Navbar */}
      <Navbar
        onOpenDownload={() => scrollToSection('descarga')}
        onOpenSupport={() => scrollToSection('sugerencias')}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOpenDownload={() => scrollToSection('descarga')}
          onOpenScreenshots={() => scrollToSection('capturas')}
        />

        {/* 2. Key Features */}
        <KeyFeatures />

        {/* 3. Interactive Screenshots Carousel & Gallery */}
        <InteractiveScreenshots />

        {/* 4. Online M3U Stream Tester Utility */}
        <M3uTesterTool />

        {/* 5. Direct APK Downloads & Installation Guide */}
        <DownloadSection />

        {/* 6. Integrated Technical Support Hub & FAQs */}
        <SupportSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />

    </div>
  );
}
