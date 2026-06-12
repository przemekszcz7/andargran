import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-stone-dark/95 backdrop-blur-md border-b border-stone-gold/30 shadow-lg py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex flex-col select-none group"
          >
            <span className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.2em] text-stone-gold group-hover:text-stone-gold-light transition-colors duration-300">
              ANDAR-GRAN
            </span>
            <span className="font-lora text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.3em] text-stone-gray group-hover:text-stone-white transition-colors duration-300">
              Usługi Kamieniarskie
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection('o-nas')}
              className="font-cinzel text-xs uppercase tracking-[0.15em] text-stone-white hover:text-stone-gold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-stone-gold hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              O nas
            </button>
            <button
              onClick={() => scrollToSection('uslugi')}
              className="font-cinzel text-xs uppercase tracking-[0.15em] text-stone-white hover:text-stone-gold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-stone-gold hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              Usługi
            </button>
            <button
              onClick={() => scrollToSection('realizacje')}
              className="font-cinzel text-xs uppercase tracking-[0.15em] text-stone-white hover:text-stone-gold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-stone-gold hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              Realizacje
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="font-cinzel text-xs uppercase tracking-[0.15em] text-stone-white hover:text-stone-gold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-stone-gold hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              Kontakt
            </button>
            <a
              href={`tel:${CONTACT_INFO.phone1Raw}`}
              className="flex items-center gap-2 border border-stone-gold/50 hover:border-stone-gold px-4 py-2 hover:bg-stone-gold/10 transition-all duration-300 group"
            >
              <Phone className="w-3.5 h-3.5 text-stone-gold group-hover:scale-110 transition-transform" />
              <span className="font-cinzel text-[0.7rem] uppercase tracking-[0.15em] text-stone-white group-hover:text-stone-gold transition-colors">
                {CONTACT_INFO.phone1}
              </span>
            </a>
          </nav>

          {/* Hamburger Bar */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-stone-gold hover:text-stone-gold-light focus:outline-none transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (with elegant smooth curtain fade-in/fade-out) */}
      <div
        className={`fixed inset-0 z-40 bg-stone-dark/98 backdrop-blur-lg md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-6">
          <div className="absolute top-[21px] left-6">
            <div className="flex flex-col">
              <span className="font-cinzel text-xl font-bold tracking-[0.2em] text-stone-gold">
                ANDAR-GRAN
              </span>
              <span className="font-lora text-[0.6rem] uppercase tracking-[0.3em] text-stone-gray">
                Usługi Kamieniarskie
              </span>
            </div>
          </div>
          
          <button
            onClick={() => scrollToSection('o-nas')}
            className="font-cinzel text-lg uppercase tracking-[0.25em] text-stone-white hover:text-stone-gold transition-all"
          >
            O nas
          </button>
          <button
            onClick={() => scrollToSection('uslugi')}
            className="font-cinzel text-lg uppercase tracking-[0.25em] text-stone-white hover:text-stone-gold transition-all"
          >
            Usługi
          </button>
          <button
            onClick={() => scrollToSection('realizacje')}
            className="font-cinzel text-lg uppercase tracking-[0.25em] text-stone-white hover:text-stone-gold transition-all"
          >
            Realizacje
          </button>
          <button
            onClick={() => scrollToSection('kontakt')}
            className="font-cinzel text-lg uppercase tracking-[0.25em] text-stone-white hover:text-stone-gold transition-all"
          >
            Kontakt
          </button>

          <div className="w-24 h-[1px] bg-stone-gold/30 my-2"></div>

          <div className="flex flex-col items-center space-y-4">
            <span className="font-lora text-xs text-stone-gray tracking-wide">Kontakt w Zawierciu:</span>
            <a
              href={`tel:${CONTACT_INFO.phone1Raw}`}
              className="font-cinzel text-base tracking-[0.15em] text-stone-gold hover:text-stone-gold-light"
            >
              {CONTACT_INFO.phone1}
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone2Raw}`}
              className="font-cinzel text-base tracking-[0.15em] text-stone-gold hover:text-stone-gold-light"
            >
              {CONTACT_INFO.phone2}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
