
import React from 'react';
import { EVENT_DATE } from '../constants';

interface EventPopupProps {
  onClose: () => void;
  isRegistrationRemind?: boolean;
}

const EventPopup: React.FC<EventPopupProps> = ({ onClose, isRegistrationRemind }) => {
  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="glass max-w-md w-full p-8 rounded-[2.5rem] border border-white/10 relative text-center shadow-2xl overflow-hidden">
        {/* Animated accent */}
        <div className="absolute top-0 left-0 w-full h-1 purple-gradient"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <div className="w-20 h-20 rounded-3xl purple-gradient mx-auto mb-6 flex items-center justify-center text-4xl shadow-xl shadow-purple-500/20">
          ✨
        </div>
        
        <h3 className="text-xl font-bold mb-4 tracking-tight leading-tight uppercase">
          {isRegistrationRemind ? 'Account Created Successfully! 💜' : 'Attention FUTO Students!'}
        </h3>
        
        <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/20 mb-8 transform hover:scale-105 transition-all">
          <p className="text-sm font-bold text-purple-300 uppercase tracking-widest mb-3">Important Update</p>
          <p className="text-2xl font-black text-white leading-tight">
            DON'T MISS VISION 1.0 ON <span className="text-gradient">{EVENT_DATE.toUpperCase()}</span>
          </p>
        </div>
        
        <p className="text-slate-400 text-sm mb-8 px-4">
          Prepare for an immersive experience of talent, innovation, and ideas that will redefine the future.
        </p>
        
        <button 
          onClick={onClose}
          className="w-full py-4 purple-gradient rounded-2xl font-bold text-white shadow-lg shadow-purple-500/20 hover:scale-[1.02] transition-all active:scale-95"
        >
          I'll Be There!
        </button>
      </div>
    </div>
  );
};

export default EventPopup;
