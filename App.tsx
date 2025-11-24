import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { GardenSection } from './components/GardenSection';
import { InfoSection } from './components/InfoSection';
import { Concierge } from './components/Concierge';
import { ReservationModal } from './components/ReservationModal';

const App: React.FC = () => {
  const [isReservationOpen, setReservationOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-brand-dark bg-brand-cream">
      <Navbar onOpenReservation={() => setReservationOpen(true)} />
      
      <main>
        <Hero />
        
        <div id="about" className="py-20 text-center px-6 container mx-auto">
             <span className="text-brand-gold text-4xl block mb-4">❦</span>
             <h2 className="text-3xl md:text-5xl font-serif text-brand-green mb-8">One Team, One Family</h2>
             <p className="max-w-3xl mx-auto text-lg text-brand-stone leading-relaxed font-light">
                The Chastain is a modern bistro that reimagines the history of our location.
                Originally a country store, then the Red Barn, and later the Horseradish Grill, 
                our walls hold the stories of the community. Today, we invite you to experience 
                comfort, refinement, and a deep connection to the land.
             </p>
        </div>

        <MenuSection />
        <GardenSection />
        
        {/* Events Teaser */}
        <section id="events" className="py-20 bg-brand-stone/10">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                 <div className="order-2 md:order-1">
                     <img 
                        src="https://picsum.photos/seed/firepit/600/400" 
                        alt="Fire Pit" 
                        className="w-full rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-700" 
                     />
                 </div>
                 <div className="order-1 md:order-2 space-y-6">
                     <h3 className="text-brand-green font-bold uppercase tracking-widest text-sm">Gatherings</h3>
                     <h2 className="text-4xl font-serif">Private Dining & Events</h2>
                     <p className="text-brand-dark font-light">
                        From intimate dinners on the Old Oak Terrace to gatherings around our fire pit.
                        Whether it's a celebration or a community event, we provide the perfect backdrop.
                        Feel free to bring your own wine (corkage applies) or enjoy our curated selection.
                     </p>
                     <button className="text-brand-green border-b border-brand-green pb-1 uppercase text-xs font-bold tracking-widest hover:text-brand-gold hover:border-brand-gold">
                        Inquire about Events
                     </button>
                 </div>
            </div>
        </section>

        <InfoSection />
      </main>

      <Concierge />
      
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setReservationOpen(false)} 
      />
    </div>
  );
};

export default App;
