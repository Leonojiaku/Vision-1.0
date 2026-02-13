
import React, { useState, useEffect } from 'react';
import { PRIZE_POOL } from '../constants';

interface HeroProps {
  onRegisterClick: () => void;
  onLearnMoreClick: () => void;
  onShareClick: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick, onLearnMoreClick, onShareClick }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target date: Feb 20, 2026 at 10:00 AM
    const targetDate = new Date('2026-02-20T10:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimerBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center px-4 py-2 min-w-[80px] md:min-w-[100px] glass rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all group">
      <span className="text-2xl md:text-4xl font-black text-gradient group-hover:scale-110 transition-transform">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 group-hover:text-purple-400 transition-colors">
        {label}
      </span>
    </div>
  );

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

        {/* Countdown Timer */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <TimerBlock value={timeLeft.days} label="Days" />
          <div className="text-2xl font-bold text-slate-700 pb-4 hidden md:block">:</div>
          <TimerBlock value={timeLeft.hours} label="Hours" />
          <div className="text-2xl font-bold text-slate-700 pb-4 hidden md:block">:</div>
          <TimerBlock value={timeLeft.minutes} label="Mins" />
          <div className="text-2xl font-bold text-slate-700 pb-4 hidden md:block">:</div>
          <TimerBlock value={timeLeft.seconds} label="Secs" />
        </div>
        
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
          <button 
            onClick={onShareClick}
            className="w-full sm:w-auto px-6 py-4 glass border border-purple-500/30 rounded-full font-bold text-lg hover:bg-purple-500/10 transition-all active:scale-95 flex items-center justify-center gap-2"
            title="Share with friends"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="sm:hidden lg:inline">Share</span>
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
