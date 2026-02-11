
import React from 'react';
import { PRIZE_POOL } from '../constants';

interface HeroProps {
  onRegisterClick: () => void;
  onLearnMoreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick, onLearnMoreClick }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-600/10 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/20 glass mb-8 animate-pulse">
          <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-3"></span>
          <span className="text-xs font-semibold tracking-wider uppercase text-purple-300">VISION 1.0: Ideas • Talent • Innovation</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
          STEP INTO THE <br />
          <span className="text-gradient">VISION</span>
        </h1>
        
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl py-3 px-6 inline-block mb-10 transform hover:scale-105 transition-all">
          <p className="text-slate-300 text-sm font-medium tracking-widest uppercase mb-1">Total Prize Pool</p>
          <p className="text-3xl md:text-4xl font-bold text-white tracking-tighter">Win Over <span className="text-purple-400">{PRIZE_POOL}</span></p>
        </div>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Open to all Nigerian Students. A convergence of brilliance, creative expression, and raw talent shaping the future of FUTO.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onRegisterClick}
            className="w-full sm:w-auto px-10 py-4 purple-gradient rounded-full font-bold text-lg shadow-lg shadow-purple-500/25 hover:scale-105 transition-transform active:scale-95"
          >
            Register Now
          </button>
          <button 
            onClick={onLearnMoreClick}
            className="w-full sm:w-auto px-10 py-4 glass border border-white/10 rounded-full font-bold text-lg hover:bg-white/5 transition-all active:scale-95"
          >
            Learn More
          </button>
        </div>
      </div>
      
      <div className="mt-20 flex flex-wrap justify-center gap-8 text-slate-500 font-medium text-sm tracking-widest uppercase">
        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Brilliant Ideas</span>
        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Raw Talent</span>
        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Creative Energy</span>
      </div>
    </section>
  );
};

export default Hero;
