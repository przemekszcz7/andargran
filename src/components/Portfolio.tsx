import { PORTFOLIO } from '../data';
import { ZoomIn, Sparkles } from 'lucide-react';

interface PortfolioProps {
  onImageClick: (url: string) => void;
}

export default function Portfolio({ onImageClick }: PortfolioProps) {
  return (
    <section id="realizacje" className="py-24 md:py-32 bg-stone-beige-mid bg-grain border-b border-stone-beige-dark relative">
      
      {/* Background soft blur glow */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-stone-gold/4 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 reveal-on-scroll">
          <span className="font-lora text-xs uppercase tracking-[0.25em] text-stone-brown-mid block mb-3 font-semibold">
            Nasze Prace
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold tracking-[0.15em] text-stone-dark mb-4">
            REALIZACJE
          </h2>
          <p className="font-lora text-xs md:text-sm text-stone-gray tracking-wide italic max-w-lg mx-auto mb-6">
            „Każda realizacja to efekt starannej pracy i rzemieślniczej precyzji.”
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-stone-gold"></div>
            <span className="text-stone-gold text-xs">✦</span>
            <div className="w-12 h-[1px] bg-stone-gold"></div>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PORTFOLIO.map((item) => (
            <div
              key={item.id}
              className="bg-stone-white border border-stone-gray/30 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-500 relative"
            >
              {/* Badge Pill in corner */}
              <div className="absolute top-4 right-4 z-20 bg-stone-gold/90 text-stone-dark px-3.5 py-1 text-[0.65rem] font-cinzel uppercase tracking-widest font-bold border border-stone-white/20 select-none shadow-sm">
                {item.badge}
              </div>

              {/* Card Media Header */}
              <div className="overflow-hidden bg-stone-beige-dark relative">
                {item.images.length === 1 ? (
                  /* Single Image View */
                  <div 
                    className="aspect-[4/3] w-full overflow-hidden relative cursor-zoom-in"
                    onClick={() => onImageClick(item.images[0])}
                  >
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                    />
                    {/* Hover Zoom overlay indicator */}
                    <div className="absolute inset-0 bg-stone-dark/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="border border-stone-white/50 p-2.5 bg-stone-dark/60 backdrop-blur-sm">
                        <ZoomIn className="w-4 h-4 text-stone-gold-light" />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Double Image View (Demontaż / Renowacja case) */
                  <div className="grid grid-cols-2 gap-[1px] bg-stone-gray/30 aspect-[4/3] w-full">
                    {item.images.map((imgUrl, idx) => (
                      <div 
                        key={idx}
                        className="w-full h-full relative cursor-zoom-in overflow-hidden group/img"
                        onClick={() => onImageClick(imgUrl)}
                      >
                        <img
                          src={imgUrl}
                          alt={`${item.title} - Część ${idx + 1}`}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                        />
                        {/* Independent Hover Zoom overlay for double grid images */}
                        <div className="absolute inset-0 bg-stone-dark/45 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                          <div className="border border-stone-white/50 p-2 bg-stone-dark/60 backdrop-blur-sm">
                            <ZoomIn className="w-3.5 h-3.5 text-stone-gold-light" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Meta Text */}
              <div className="p-8 flex flex-col flex-grow bg-grain">
                
                {/* Title */}
                <h3 className="font-cinzel text-lg font-bold tracking-[0.05em] text-stone-dark mb-3">
                  {item.title}
                </h3>

                {/* Separator rule */}
                <div className="w-12 h-[1px] bg-stone-gold mb-4"></div>

                {/* Description */}
                <p className="font-lora text-xs md:text-sm text-stone-brown-mid leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom stylized rule under the card text */}
              <div className="h-[2px] w-full bg-stone-gold/25 group-hover:bg-stone-gold transition-colors duration-500"></div>

            </div>
          ))}
        </div>

        {/* Center alignment ornament below */}
        <div className="mt-20 flex justify-center items-center gap-3 reveal-on-scroll">
          <div className="w-20 h-[1px] bg-stone-gold/30"></div>
          <p className="font-cinzel text-[0.65rem] tracking-[0.3em] uppercase text-stone-gold font-bold">
            Usługi Kamieniarskie Zawiercie
          </p>
          <div className="w-20 h-[1px] bg-stone-gold/30"></div>
        </div>

      </div>
    </section>
  );
}
