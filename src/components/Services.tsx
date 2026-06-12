import { SERVICES } from '../data';
import { Sparkles, Trash2, ArrowUp, Type, Armchair, Grid3X3 } from 'lucide-react';

export default function Services() {
  // Map strings to Lucide components for strict typing and avoidance of eval or dynamic lookup errors
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-stone-gold" />;
      case 'Trash2':
        return <Trash2 className="w-6 h-6 text-stone-gold" />;
      case 'ArrowUp':
        return <ArrowUp className="w-6 h-6 text-stone-gold" />;
      case 'Type':
        return <Type className="w-6 h-6 text-stone-gold" />;
      case 'Armchair':
        return <Armchair className="w-6 h-6 text-stone-gold" />;
      case 'Grid3X3':
        return <Grid3X3 className="w-6 h-6 text-stone-gold" />;
      default:
        return <Sparkles className="w-6 h-6 text-stone-gold" />;
    }
  };

  return (
    <section id="uslugi" className="py-24 md:py-32 bg-stone-brown-dark bg-grain-dark border-b border-stone-gold/20 relative">
      
      {/* Visual background elements */}
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] bg-stone-gold/2 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 reveal-on-scroll">
          <span className="font-lora text-xs uppercase tracking-[0.25em] text-stone-gold block mb-3 font-semibold">
            Zakres Usług
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold tracking-[0.15em] text-stone-white mb-6">
            CO OFERUJEMY
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-stone-gold/30"></div>
            <span className="text-stone-gold text-xs">✥</span>
            <div className="w-12 h-[1px] bg-stone-gold/30"></div>
          </div>
        </div>

        {/* 3x2 Grid of services - Sharp rect blocks, NO border radius */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative bg-stone-dark/30 border border-stone-gold/20 p-8 hover:border-stone-gold hover:bg-stone-brown-mid/30 transition-all duration-500 flex flex-col group h-full reveal-on-scroll shadow-inner"
            >
              {/* Highlight top gold accent line (3px) */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-stone-gold/50 via-stone-gold to-stone-gold/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>

              {/* Icon Container with border */}
              <div className="w-12 h-12 border border-stone-gold/35 flex items-center justify-center mb-6 group-hover:border-stone-gold group-hover:bg-stone-gold/5 transition-colors">
                {renderIcon(service.iconName)}
              </div>

              {/* Title */}
              <h3 className="font-cinzel text-[1.05rem] font-bold tracking-[0.1em] text-stone-white mb-3 group-hover:text-stone-gold-light transition-colors">
                {service.title}
              </h3>

              {/* Divider in block */}
              <div className="w-10 h-[1.5px] bg-stone-gold/25 mb-4 group-hover:w-16 transition-all duration-500"></div>

              {/* Description */}
              <p className="font-lora text-sm leading-relaxed text-stone-beige-mid/80 group-hover:text-stone-white transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Thin rule divider below */}
        <div className="mt-24 max-w-md mx-auto reveal-on-scroll">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-stone-gold/40 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}
