import { CONTACT_INFO } from '../data';
import { ShieldCheck, CalendarRange, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="o-nas" className="py-24 md:py-32 bg-stone-beige bg-grain border-b border-stone-beige-dark/50 relative overflow-hidden">
      
      {/* Absolute Geometric Background Accents */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-stone-gold/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Narrative Text */}
          <div className="lg:col-span-7 reveal-on-scroll">
            <div className="flex items-start gap-6">
              {/* Thin Elegant Vertical Gold Rule */}
              <div className="w-[2px] self-stretch bg-gradient-to-b from-stone-gold via-stone-gold/50 to-transparent flex-shrink-0"></div>
              
              <div className="flex flex-col">
                <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-stone-gold font-bold mb-3">
                  Z tradycją i szacunkiem
                </span>
                
                <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.1em] text-stone-dark mb-4">
                  ANDAR-GRAN
                </h2>
                
                <p className="font-cinzel text-sm uppercase tracking-widest text-stone-brown-mid italic mb-8">
                  Kamieniarstwo z pasją i precyzją
                </p>
              </div>
            </div>

            <div className="mt-4 font-lora text-base leading-relaxed text-stone-brown-mid space-y-6 max-w-2xl pl-[26px]">
              <p>
                Firma <strong className="text-stone-dark font-medium">Andar-Gran</strong> to zakład kamieniarski z siedzibą w Zawierciu, świadczący kompleksowe usługi kamieniarskie na terenie regionu. Specjalizujemy się w odnawianiu, czyszczeniu i renowacji pomników, a także w wykonywaniu nowych nagrobków z granitu i innych kamieni szlachetnych.
              </p>
              <p>
                Każdą realizację traktujemy z najwyższym szacunkiem i starannością — bo każdy pomnik to hołd dla kogoś bliskiego. Rozumiemy, jak ważne jest zachowanie pamięci o zmarłych w godny i trwały sposób, dlatego kładziemy szczególny nacisk na detale, trwałość spoin, oraz wysoką estetykę wykonania.
              </p>
              
              {/* Key Trust Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 not-italic font-cinzel text-xs uppercase tracking-wider text-stone-dark">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-none border border-stone-gold/50 flex items-center justify-center text-stone-gold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span>Gwarancja Trwałości</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-none border border-stone-gold/50 flex items-center justify-center text-stone-gold">
                    <CalendarRange className="w-4 h-4" />
                  </div>
                  <span>Terminowa Realizacja</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Watermarked Monogram Widget & Contact Detail */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end reveal-on-scroll">
            <div className="relative w-full max-w-[380px] p-8 md:p-10 border border-stone-gold/30 bg-stone-beige-mid/40 backdrop-blur-sm shadow-sm select-none">
              
              {/* Frame Corner Accents */}
              <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-stone-gold"></span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-stone-gold"></span>
              <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-stone-gold"></span>
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-stone-gold"></span>

              {/* Huge stylistic watermark Monogram */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none overflow-hidden">
                <span className="font-cinzel text-[14rem] font-bold tracking-tighter text-stone-brown-dark leading-none">
                  AG
                </span>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <MapPin className="w-8 h-8 text-stone-gold mb-4" />
                <h3 className="font-cinzel text-xl font-bold tracking-[0.25em] text-stone-dark">
                  ZAWIERCIE
                </h3>
                <p className="font-lora text-xs text-stone-gray italic mt-1 mb-6">
                  Województwo Śląskie i okolice
                </p>
                
                <div className="w-full h-[1px] bg-stone-gold/30 mb-6"></div>
                
                <span className="font-cinzel text-[0.65rem] uppercase tracking-[0.3em] text-stone-gray mb-3">
                  Szybki kontakt telefoniczny:
                </span>
                
                <a
                  href={`tel:${CONTACT_INFO.phone1Raw}`}
                  className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.1em] text-stone-dark hover:text-stone-gold transition-colors duration-300 mb-2 py-1 block"
                >
                  {CONTACT_INFO.phone1}
                </a>
                
                <a
                  href={`tel:${CONTACT_INFO.phone2Raw}`}
                  className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.1em] text-stone-dark hover:text-stone-gold transition-colors duration-300 py-1 block"
                >
                  {CONTACT_INFO.phone2}
                </a>

                <div className="w-full h-[1px] bg-stone-gold/30 mt-6 mb-4"></div>
                <p className="font-lora text-[0.7rem] text-stone-gray font-medium tracking-wide">
                  Zadzwoń do nas, a bezpłatnie dojedziemy i sporządzimy profesjonalną wycenę.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
