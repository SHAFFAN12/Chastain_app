import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        style={{ 
            backgroundImage: 'url("https://picsum.photos/seed/chastain4/1920/1080")', 
            // Using a static seed for consistent placeholder showing a restaurant/nature vibe
            filter: 'brightness(0.6)'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <span className="text-brand-gold uppercase tracking-[0.2em] mb-4 text-sm md:text-base animate-fade-in-up">
          Atlanta, Georgia
        </span>
        <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight max-w-4xl drop-shadow-lg">
          Refined Comfort from the <br/>
          <span className="italic text-brand-gold">Garden to Table</span>
        </h1>
        <p className="text-gray-200 max-w-lg mb-10 font-sans font-light text-lg">
          A Michelin Green Star destination where the menu is written by the season.
        </p>
        
        <div className="flex gap-4">
            <a href="#menu" className="border border-white text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-white hover:text-brand-dark transition-all">
                View Menus
            </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={24} />
      </div>
    </div>
  );
};
