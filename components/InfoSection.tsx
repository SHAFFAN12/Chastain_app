import React from 'react';
import { MapPin, Clock, Phone, Mail, Car, Shirt, Calendar } from 'lucide-react';
import { OPERATING_HOURS, BUSINESS_INFO } from '../constants';

export const InfoSection: React.FC = () => {
  return (
    <section id="info" className="bg-brand-dark text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Contact & Location */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif text-brand-gold mb-4">Visit Us</h3>
            <div className="flex items-start gap-4">
                <MapPin className="text-brand-stone shrink-0 mt-1" size={20} />
                <p className="text-brand-cream font-light">{BUSINESS_INFO.address}</p>
            </div>
            <div className="flex items-center gap-4">
                <Phone className="text-brand-stone shrink-0" size={20} />
                <p className="text-brand-cream font-light">{BUSINESS_INFO.phone}</p>
            </div>
            <div className="flex items-center gap-4">
                <Mail className="text-brand-stone shrink-0" size={20} />
                <p className="text-brand-cream font-light">{BUSINESS_INFO.email}</p>
            </div>
            
            <div className="pt-6 border-t border-white/10 mt-6">
                 <h4 className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Car size={16} /> Parking
                 </h4>
                 <p className="text-xs text-brand-stone leading-relaxed">
                     Complimentary valet available from 8am. First come, first served. 
                     Please note: Vehicles cannot be left with valet if attending concerts at Chastain Park.
                 </p>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif text-brand-gold mb-4">Hours</h3>
            <div className="space-y-4">
              {OPERATING_HOURS.map((h, i) => (
                <div key={i} className="flex flex-col border-b border-white/10 pb-2 last:border-0">
                  <span className="text-sm font-bold uppercase tracking-wider text-white">{h.day}</span>
                  <span className="text-sm text-brand-stone font-light">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div className="space-y-6">
             <h3 className="text-xl font-serif text-brand-gold mb-4">Guest Info</h3>
             
             <div className="mb-4">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Shirt size={16} /> Dress Code
                </h4>
                <p className="text-sm text-brand-stone font-light">
                    <strong>Café:</strong> Come as you are.<br/>
                    <strong>Lunch:</strong> Business Casual.<br/>
                    <strong>Dinner (5PM+):</strong> Smart casual. No hats, flip-flops, or tank tops.
                </p>
             </div>

             <div className="mb-4">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Calendar size={16} /> Reservations
                </h4>
                <p className="text-sm text-brand-stone font-light">
                    Reservations encouraged. Parties of 7+ please email us.
                    Cancellation fees apply for no-shows.
                </p>
             </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-brand-stone">
            <p>&copy; {new Date().getFullYear()} THE CHASTAIN. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};
