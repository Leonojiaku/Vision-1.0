
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
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://vision1-futo.com';
  const shareTitle = "Join me at VISION 1.0 — FUTO's biggest event of the year! 🚀";

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

  const socialShares = [
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      color: 'hover:text-green-400',
      link: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`
    },
    {
      name: 'X (Twitter)',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: 'hover:text-slate-200',
      link: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: 'hover:text-blue-500',
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    }
  ];

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
        
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight flex flex-col items-center">
          <span className="block animate-slide-left">STEP INTO THE</span>
          <span className="text-gradient block animate-slide-right" style={{ animationDelay: '200ms' }}>VISION</span>
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
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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
            title="More share options"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="sm:hidden lg:inline">Share</span>
          </button>
        </div>

        {/* Quick Social Share Buttons */}
        <div className="flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Quick Share:</p>
          <div className="flex gap-4">
            {socialShares.map((social) => (
              <a 
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-125`}
                title={`Share on ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
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
