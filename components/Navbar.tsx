import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-brand-green/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-6'
  }`;

  const linkClasses = `text-sm uppercase tracking-widest font-sans hover:text-brand-gold transition-colors ${
    isScrolled ? 'text-white' : 'text-white'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Leaf className={`w-5 h-5 ${isScrolled ? 'text-brand-gold' : 'text-white'}`} />
          <h1 className={`text-xl md:text-2xl font-serif font-bold tracking-widest ${isScrolled ? 'text-white' : 'text-white'}`}>
            THE CHASTAIN
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className={linkClasses}>About</a>
          <a href="#menu" className={linkClasses}>Menu</a>
          <a href="#garden" className={linkClasses}>Garden</a>
          <a href="#events" className={linkClasses}>Events</a>
          <a href="#info" className={linkClasses}>Info</a>
          <button 
            onClick={onOpenReservation}
            className="bg-brand-gold text-brand-dark px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Reservations
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-green border-t border-brand-green/50 shadow-xl p-6 flex flex-col space-y-4">
          <a href="#about" className="text-white text-lg font-serif" onClick={() => setIsMobileOpen(false)}>About</a>
          <a href="#menu" className="text-white text-lg font-serif" onClick={() => setIsMobileOpen(false)}>Menu</a>
          <a href="#garden" className="text-white text-lg font-serif" onClick={() => setIsMobileOpen(false)}>Garden</a>
          <a href="#events" className="text-white text-lg font-serif" onClick={() => setIsMobileOpen(false)}>Events</a>
          <a href="#info" className="text-white text-lg font-serif" onClick={() => setIsMobileOpen(false)}>Info</a>
          <button 
             onClick={() => {
               onOpenReservation();
               setIsMobileOpen(false);
             }}
             className="bg-brand-gold text-brand-dark px-5 py-3 text-center text-sm font-bold uppercase tracking-widest"
          >
            Book a Table
          </button>
        </div>
      )}
    </nav>
  );
};
