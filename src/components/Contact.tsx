import { CONTACT_INFO } from '../data';
import { Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-stone-dark bg-grain-dark text-stone-white relative border-b border-stone-gold/20 overflow-hidden">
      
      {/* Background Soft Gold Nebula Effect */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-stone-gold/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Top Gold Thin Rule */}
        <div className="w-24 h-[1px] bg-stone-gold mx-auto mb-10"></div>

        {/* Section Label */}
        <span className="font-lora text-xs uppercase tracking-[0.3em] text-stone-gold block mb-4 font-semibold">
          Kontakt
        </span>

        {/* Headline */}
        <h2 className="font-cinzel text-3xl md:text-5xl font-bold tracking-[0.15em] text-stone-white mb-6 select-none">
          SKONTAKTUJ SIĘ Z NAMI
        </h2>

        {/* Subtext */}
        <p className="font-lora text-sm md:text-base text-stone-beige-mid/80 max-w-xl mx-auto mb-16 leading-relaxed">
          Odpowiemy na wszystkie Twoje pytania. Wycenę renowacji lub wykonania nowego nagrobka przygotujemy <strong className="text-stone-gold font-medium">całkowicie bezpłatnie i bez zobowiązań</strong>.
        </p>

        {/* Info Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto mb-16 text-center">
          
          {/* Location Block */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-stone-gold-light/40 flex items-center justify-center text-stone-gold mb-4 bg-stone-gold/5">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="font-cinzel text-[0.7rem] uppercase tracking-[0.25em] text-stone-gray mb-1">
              Lokalizacja
            </span>
            <span className="font-cinzel text-base tracking-widest text-stone-white font-semibold">
              Zawiercie
            </span>
          </div>

          {/* Phone Block 1 */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-stone-gold-light/40 flex items-center justify-center text-stone-gold mb-4 bg-stone-gold/5">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-cinzel text-[0.7rem] uppercase tracking-[0.25em] text-stone-gray mb-1">
              Telefon (Andrzej)
            </span>
            <a
              href={`tel:${CONTACT_INFO.phone1Raw}`}
              className="font-cinzel text-base tracking-widest text-stone-white font-bold hover:text-stone-gold transition-colors duration-300"
            >
              {CONTACT_INFO.phone1}
            </a>
          </div>

          {/* Phone Block 2 */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-stone-gold-light/40 flex items-center justify-center text-stone-gold mb-4 bg-stone-gold/5">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-cinzel text-[0.7rem] uppercase tracking-[0.25em] text-stone-gray mb-1">
              Telefon (Marek)
            </span>
            <a
              href={`tel:${CONTACT_INFO.phone2Raw}`}
              className="font-cinzel text-base tracking-widest text-stone-white font-bold hover:text-stone-gold transition-colors duration-300"
            >
              {CONTACT_INFO.phone2}
            </a>
          </div>

        </div>

        {/* Two CTAs - Strict rectangular with gold border rules */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center max-w-lg mx-auto mb-16">
          <a
            href={`tel:${CONTACT_INFO.phone1Raw}`}
            className="px-8 py-4 bg-stone-gold text-stone-dark hover:bg-stone-gold-light font-cinzel text-xs uppercase tracking-[0.2em] font-black transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            Zadzwoń: {CONTACT_INFO.phone1}
          </a>
          
          <a
            href={CONTACT_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-stone-white/40 text-stone-white hover:border-stone-gold hover:bg-stone-gold/10 font-cinzel text-xs uppercase tracking-[0.2em] font-bold transition-all flex items-center justify-center gap-2"
          >
            {/* Custom Facebook Inline SVG */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
            </svg>
            Napisz na Facebooku
          </a>
        </div>

        {/* Bottom Horizontal Thin Rule */}
        <div className="w-56 h-[1px] bg-gradient-to-r from-transparent via-stone-gold/30 to-transparent mx-auto mb-6"></div>

        {/* Operating Area Line */}
        <p className="font-lora text-xs text-stone-gray italic relative z-10">
          * Działamy na terenie powiatu zawierciańskiego oraz całego regionu Śląska i Zagłębia
        </p>

      </div>
    </section>
  );
}
