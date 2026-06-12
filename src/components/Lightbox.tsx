import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  imageUrl: string | null;
  onClose: () => void;
}

export default function Lightbox({ imageUrl, onClose }: LightboxProps) {
  if (!imageUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-dark/95 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
      onClick={onClose}
    >
      {/* Absolute Border Accents inside Lightbox frame */}
      <div className="absolute inset-4 md:inset-8 border border-stone-gold/10 pointer-events-none"></div>

      {/* Close button with gold accent and border */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 md:top-10 md:right-10 z-50 text-stone-gold hover:text-stone-white border border-stone-gold/30 p-2 hover:bg-stone-gold/10 hover:border-stone-gold transition-all duration-300 cursor-pointer"
        aria-label="Zamknij"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Frame container */}
      <div
        className="relative max-w-5xl max-h-[85vh] overflow-hidden bg-stone-dark border border-stone-gold/30 p-2 md:p-3 shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt="Podgląd realizacji nagrobka"
          className="max-w-full max-h-[75vh] object-contain select-none"
        />
        
        {/* Soft bottom strip with minimal logo */}
        <div className="mt-3 flex items-center justify-between text-[0.65rem] font-cinzel text-stone-gray uppercase tracking-widest px-1">
          <span>Andar-Gran Zawiercie</span>
          <span className="text-stone-gold">✦ Rezultat Rzemiosła</span>
        </div>
      </div>
    </div>
  );
}
