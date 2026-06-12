import React from 'react';
import { CONTACT_INFO } from '../data';

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1a0f08] text-stone-gray py-16 px-6 relative overflow-hidden">
      {/* Decorative grain style */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-[0.2]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Company Title */}
        <a href="#" onClick={handleScrollTop} className="group flex flex-col items-center mb-6 h-auto">
          <span className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.25em] text-stone-gold group-hover:text-stone-gold-light transition-colors duration-300">
            ANDAR-GRAN
          </span>
          <span className="font-lora text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.3em] text-stone-gray-400 group-hover:text-stone-white transition-colors duration-300 mt-1">
            Usługi Kamieniarskie
          </span>
        </a>

        {/* Dynamic Location & Contact info line */}
        <p className="font-cinzel text-xs md:text-sm tracking-[0.1em] text-stone-beige-mid/80 mb-6 font-medium">
          Zawiercie &nbsp;|&nbsp; Tel: <a href={`tel:${CONTACT_INFO.phone1Raw}`} className="hover:text-stone-gold transition-colors">{CONTACT_INFO.phone1}</a> &nbsp;|&nbsp; <a href={`tel:${CONTACT_INFO.phone2Raw}`} className="hover:text-stone-gold transition-colors">{CONTACT_INFO.phone2}</a>
        </p>

        {/* Facebook Link */}
        <a
          href={CONTACT_INFO.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-cinzel text-[0.7rem] uppercase tracking-[0.2em] text-stone-gold hover:text-stone-gold-light transition-colors mb-10 flex items-center gap-1.5"
        >
          {/* Subtle icon */}
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
          </svg>
          Odwiedź profil na Facebooku
        </a>

        {/* Gold separator rule */}
        <div className="w-48 h-[1px] bg-stone-gold/20 mb-8"></div>

        {/* Disclaimer / Copyright details */}
        <p className="font-lora text-[0.65rem] md:text-[0.7rem] tracking-wider text-stone-gray/60 leading-relaxed font-light">
          © 2026 Usługi Kamieniarskie Andar-Gran — Wszelkie prawa zastrzeżone. 
          <br />
          Projekt i rzemiosło najwyższej jakości.
        </p>

      </div>
    </footer>
  );
}
