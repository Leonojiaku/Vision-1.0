
import React from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-900/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Voices of the <span className="text-gradient">Vision</span></h2>
          <p className="text-slate-400">Hear from those who are shaping the future of innovation at FUTO.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx}
              className="glass p-8 rounded-[2.5rem] border border-white/5 relative group hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Quote Mark Icon */}
              <div className="absolute top-6 right-8 text-purple-500/20 group-hover:text-purple-500/40 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L20.017 3C21.1216 3 22.017 3.89543 22.017 5V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.99997 21L3.99997 18C3.99997 16.8954 4.8954 16 5.99997 16H8.99997C9.55225 16 9.99997 15.5523 9.99997 15V9C9.99997 8.44772 9.55225 8 8.99997 8H5.99997C4.8954 8 3.99997 7.10457 3.99997 6V3L9.99997 3C11.1045 3 11.9999 3.89543 11.9999 5V15C11.9999 18.3137 9.31368 21 5.99997 21H3.99997Z" />
                </svg>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-2xl bg-white/5 p-1 border border-white/10 group-hover:border-purple-500/50 transition-colors"
                />
                <div>
                  <h4 className="font-bold text-white group-hover:text-purple-400 transition-colors">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm italic relative z-10">
                "{t.text}"
              </p>

              {/* Decorative accent */}
              <div className="mt-6 h-1 w-12 bg-purple-500/20 group-hover:w-full transition-all duration-700 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
