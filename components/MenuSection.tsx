import React, { useState } from 'react';
import { MENUS } from '../constants';
import { MenuCategory } from '../types';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(MenuCategory.DINNER);

  return (
    <section id="menu" className="py-20 bg-brand-cream relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-brand-green uppercase tracking-widest text-sm font-bold mb-2">Our Offerings</h3>
          <h2 className="text-4xl font-serif text-brand-dark">Seasonal Menus</h2>
          <p className="mt-4 text-brand-stone italic">Menus are subject to change based on our garden harvest.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 border-b border-brand-stone/30">
          {(Object.values(MenuCategory) as MenuCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-4 text-sm uppercase tracking-widest transition-all relative ${
                activeCategory === category 
                  ? 'text-brand-green font-bold' 
                  : 'text-brand-stone hover:text-brand-dark'
              }`}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-green"></span>
              )}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto animate-fade-in">
          {MENUS[activeCategory].map((section, idx) => (
            <div key={idx} className="mb-8">
              <h4 className="text-2xl font-serif text-brand-dark mb-6 border-b border-brand-green/10 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-6">
                {section.items.map((item, i) => (
                  <li key={i} className="group">
                    <div className="flex justify-between items-baseline">
                      <h5 className="text-lg font-serif font-medium text-brand-dark group-hover:text-brand-green transition-colors">
                        {item.name}
                      </h5>
                      <span className="text-brand-gold font-sans font-bold">${item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-brand-stone text-sm mt-1 font-light">{item.description}</p>
                    )}
                    {item.dietary && item.dietary.length > 0 && (
                      <div className="flex gap-2 mt-1">
                        {item.dietary.map(d => (
                          <span key={d} className="text-[10px] uppercase border border-brand-stone/40 text-brand-stone px-1 rounded-sm">
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
             <button className="text-brand-green border-b border-brand-green pb-0.5 hover:text-brand-gold hover:border-brand-gold transition-colors uppercase text-xs tracking-widest">
                 Download Full PDF Menu
             </button>
        </div>
      </div>
    </section>
  );
};
