import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Select elements and start observation
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-stone-beige text-stone-dark selection:bg-stone-gold selection:text-stone-dark overflow-x-hidden">
      {/* Decorative Fixed background pattern overlays on the main container */}
      <div className="fixed inset-0 bg-grain pointer-events-none opacity-[0.15] z-30"></div>

      {/* Main navigation */}
      <Navbar />

      <main>
        {/* Dynamic & engaging sections */}
        <Hero />
        <About />
        <Services />
        <Portfolio onImageClick={(url) => setActiveLightboxImage(url)} />
        <Contact />
      </main>

      {/* Solid footer with location & Facebook anchors */}
      <Footer />

      {/* Floating immersive lightroom modal popup for active portfolio images */}
      <Lightbox
        imageUrl={activeLightboxImage}
        onClose={() => setActiveLightboxImage(null)}
      />
    </div>
  );
}
