
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
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <span className="text-purple-400 font-semibold">Victory:</span> 
                <a href="tel:+2348158983927" className="hover:text-white transition-colors">08158983927</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-purple-400 font-semibold">Perpetual:</span> 
                <a href="tel:+2349135093053" className="hover:text-white transition-colors">09135093053</a>
              </p>
              <div className="pt-3">
                <a 
                  href="https://wa.me/2348158983927" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-xs font-bold uppercase tracking-wider hover:bg-green-500/20 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Event Details</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <span className="text-purple-400">📅</span> {EVENT_DATE}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-purple-400">📍</span> FUTO, Owerri
              </p>
              <p className="flex items-center gap-2">
                <span className="text-purple-400">⏰</span> Time: 10:00 AM Prompt
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium text-center md:text-left">
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
