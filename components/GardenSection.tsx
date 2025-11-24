import React from 'react';
import { Flower2, Sprout, Sun } from 'lucide-react';

export const GardenSection: React.FC = () => {
  return (
    <section id="garden" className="bg-brand-green text-brand-cream py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 p-12 opacity-5">
            <Sprout size={400} />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block border border-brand-gold px-4 py-1 text-brand-gold text-xs uppercase tracking-widest">
              Michelin Green Star
            </div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Rooted in the <br/> <span className="text-brand-gold italic">Rhythm of Nature</span>
            </h2>
            <p className="text-lg text-brand-stone font-light leading-relaxed">
              Our culinary philosophy begins in the soil. Just steps from the kitchen, our on-site garden connects our chefs directly to the growing season. We revive the legacy of the Langford family orchard, cultivating ingredients that dictate our daily menus.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="flex flex-col gap-2">
                    <Flower2 className="text-brand-gold mb-2" />
                    <h4 className="font-bold uppercase tracking-wider text-sm">Heirloom Varieties</h4>
                    <p className="text-xs text-brand-stone">Preserving flavors of the past through careful cultivation.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Sun className="text-brand-gold mb-2" />
                    <h4 className="font-bold uppercase tracking-wider text-sm">Hyper-Local</h4>
                    <p className="text-xs text-brand-stone">Zero-mile ingredients harvested hours before service.</p>
                </div>
            </div>
          </div>

          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                 <img 
                    src="https://picsum.photos/seed/garden1/400/600" 
                    alt="The Garden" 
                    className="w-full h-64 object-cover rounded-sm shadow-xl mt-12"
                 />
                 <img 
                    src="https://picsum.photos/seed/garden2/400/600" 
                    alt="Fresh Produce" 
                    className="w-full h-64 object-cover rounded-sm shadow-xl"
                 />
             </div>
             <div className="absolute -bottom-6 -left-6 bg-brand-cream text-brand-dark p-6 shadow-lg max-w-xs">
                 <p className="font-serif italic text-lg">"We listen to the land, and the plate follows."</p>
                 <p className="text-xs uppercase tracking-widest mt-2 text-brand-stone">— Chef Christopher Grossman</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
