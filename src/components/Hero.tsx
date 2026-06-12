import React, { useEffect, useState } from 'react';
import { ChevronDown, Phone, Compass } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface Particle {
  id: number;
  left: string;
  delay: string;
  duration: string;
  opacity: number;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate static yet randomly placed particle configurations to prevent Hydration mismatches
    const list: Particle[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${5 + (i * 7) % 90}%`,
      delay: `${(i * 0.7) % 5}s`,
      duration: `${6 + (i * 1.5) % 8}s`,
      opacity: 0.15 + (i % 3) * 0.1
    }));
    setParticles(list);
  }, []);

  const handleScrollToGallery = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('realizacje');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-stone-dark flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-grain-dark z-10 border-b border-stone-gold/20">
      {/* Decorative Subtle Stone Dust Particle Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {particles.map((p) => (
          <div
            key={p.id}
            className="stone-dust-particle"
            style={{
              left: p.left,
              bottom: '10%',
              animationDelay: p.delay,
              animationDuration: p.duration,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Decorative Gold Frame Border Borders (Gothic / Artisan architectural look) */}
      <div className="absolute inset-4 md:inset-8 border border-stone-gold/10 pointer-events-none">
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-stone-gold/40"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-stone-gold/40"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-stone-gold/40"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-stone-gold/40"></div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-20 pt-16">
        {/* Top Animated Gold Line */}
        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-stone-gold to-transparent mb-10 animate-line-grow"></div>

        {/* Headline */}
        <h1 className="flex flex-col gap-2 md:gap-4 mb-8 select-none">
          <span className="font-cinzel text-xs md:text-sm uppercase tracking-[0.4em] text-stone-gray font-medium">
            Usługi Kamieniarskie
          </span>
          <span className="font-cinzel text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.25em] text-stone-gold drop-shadow-xl my-2">
            ANDAR-GRAN
          </span>
        </h1>

        {/* Bottom Animated Gold Line */}
        <div className="w-64 h-[1px] bg-gradient-to-r from-transparent via-stone-gold to-transparent mb-8 animate-line-grow delay-300"></div>

        {/* Tagline & Subtext */}
        <p className="font-cinzel text-base md:text-xl text-stone-white font-medium tracking-[0.1em] max-w-2xl px-4 mb-4">
          Zawiercie — Rzemiosło z tradycją i szacunkiem
        </p>
        <p className="font-lora text-xs md:text-sm text-stone-gray tracking-wide italic max-w-lg mb-12">
          „Odnawiamy, tworzymy i pielęgnujemy miejsca wiecznego spoczynku”
        </p>

        {/* CTA Buttons - Strict rectangular forms with thin border rules */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-4">
          <a
            href="#realizacje"
            onClick={handleScrollToGallery}
            className="px-8 py-4 bg-stone-gold border border-stone-gold text-stone-dark font-cinzel text-xs uppercase tracking-[0.2em] font-bold hover:bg-stone-gold-light hover:border-stone-gold-light transition-all shadow-md text-center cursor-pointer"
          >
            Nasze realizacje
          </a>
          <a
            href={`tel:${CONTACT_INFO.phone1Raw}`}
            className="px-8 py-4 border border-stone-gold text-stone-gold hover:text-stone-white hover:bg-stone-gold/10 font-cinzel text-xs uppercase tracking-[0.2em] font-bold transition-all text-center flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            Zadzwoń do nas
          </a>
        </div>
      </div>

      {/* Pulsing down chevron indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-pulse pointer-events-none">
        <span className="font-cinzel text-[0.6rem] uppercase tracking-[0.25em] text-stone-gold">
          Rozwiń
        </span>
        <ChevronDown className="w-4 h-4 text-stone-gold" />
      </div>
    </section>
  );
}
