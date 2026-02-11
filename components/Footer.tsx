
import React from 'react';
import { EVENT_DATE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full purple-gradient flex items-center justify-center font-bold text-sm text-white">V</div>
              <span className="font-bold text-xl tracking-tighter text-white">VISION <span className="text-purple-400">1.0</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Curated by the Office of the Secretary General, NAITS (Victory) & ALITS (Perpetual). Shaping the future of FUTO through innovation.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contact Organizers</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <span className="text-purple-400"> Victory:</span> 08158983927
              </p>
              <p className="flex items-center gap-2">
                <span className="text-purple-400"> Perpetual:</span> 09135093053
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Event Details</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p>📅 {EVENT_DATE}</p>
              <p>📍 FUTO, Owerri</p>
              <p>⏰ Time: Loading...</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© 2026 VISION 1.0. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
