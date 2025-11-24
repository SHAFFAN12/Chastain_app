import React from 'react';
import { X, Calendar, Clock, Users } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-sm overflow-hidden shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-dark hover:text-brand-gold transition-colors"
        >
          <X size={24} />
        </button>

        <div className="bg-brand-green p-6 text-center">
            <h3 className="text-white font-serif text-2xl">Reserve a Table</h3>
            <p className="text-brand-stone text-xs mt-2 uppercase tracking-widest">Join us at The Chastain</p>
        </div>

        <div className="p-8 space-y-6">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold uppercase text-brand-stone mb-1">Date</label>
                    <div className="flex items-center border border-brand-stone/30 p-2 rounded-sm hover:border-brand-green transition-colors">
                        <Calendar size={16} className="text-brand-green mr-2" />
                        <input type="date" className="w-full text-sm outline-none text-brand-dark" />
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-xs font-bold uppercase text-brand-stone mb-1">Time</label>
                        <div className="flex items-center border border-brand-stone/30 p-2 rounded-sm hover:border-brand-green transition-colors">
                            <Clock size={16} className="text-brand-green mr-2" />
                            <select className="w-full text-sm outline-none bg-transparent text-brand-dark">
                                <option>5:00 PM</option>
                                <option>6:00 PM</option>
                                <option>7:00 PM</option>
                                <option>8:00 PM</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex-1">
                        <label className="block text-xs font-bold uppercase text-brand-stone mb-1">Guests</label>
                        <div className="flex items-center border border-brand-stone/30 p-2 rounded-sm hover:border-brand-green transition-colors">
                            <Users size={16} className="text-brand-green mr-2" />
                            <select className="w-full text-sm outline-none bg-transparent text-brand-dark">
                                <option>2 People</option>
                                <option>3 People</option>
                                <option>4 People</option>
                                <option>5 People</option>
                                <option>6 People</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <button 
                className="w-full bg-brand-gold text-brand-dark font-bold uppercase tracking-widest py-4 hover:bg-brand-dark hover:text-white transition-all duration-300"
                onClick={() => {
                    alert('This is a demo. In a real app, this would connect to OpenTable or Resy.');
                    onClose();
                }}
            >
                Find a Table
            </button>

            <p className="text-xs text-center text-brand-stone italic">
                For parties of 7 or more, please email reservations@THECHASTAINatl.com
            </p>
        </div>
      </div>
    </div>
  );
};
