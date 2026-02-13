
import React, { useState, useEffect } from 'react';
import { SPONSORS } from '../constants';

type TierFilter = 'All' | 'Diamond' | 'Gold' | 'Silver' | 'Partner';

interface SponsorsSectionProps {
  onBecomeSponsorClick: () => void;
}

const SponsorsSection: React.FC<SponsorsSectionProps> = ({ onBecomeSponsorClick }) => {
  const [activeFilter, setActiveFilter] = useState<TierFilter>('All');
  const [isAnimating, setIsAnimating] = useState(false);

  const tiers: TierFilter[] = ['All', 'Diamond', 'Gold', 'Silver', 'Partner'];

  const filteredSponsors = SPONSORS.filter(
    (sponsor) => activeFilter === 'All' || sponsor.tier === activeFilter
  );

  // Re-trigger animation when filter changes
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 50);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-purple-900/5 blur-[120px] -z-10 rounded-full"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 blur-[100px] -z-10 rounded-full"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Our Partners & Sponsors</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            These industry leaders are fueling the vision and supporting the next generation of FUTO talent.
          </p>

          {/* Filter UI */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tiers.map((tier) => (
              <button
                key={tier}
                onClick={() => setActiveFilter(tier)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeFilter === tier
                    ? 'purple-gradient border-transparent text-white shadow-lg shadow-purple-500/20 scale-105'
                    : 'glass border-white/10 text-slate-400 hover:border-purple-500/30 hover:text-white'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[300px]">
          {!isAnimating && filteredSponsors.map((sponsor, idx) => (
            <div 
              key={`${activeFilter}-${sponsor.name}-${idx}`}
              className="glass p-8 rounded-[2rem] border border-white/5 hover:border-purple-500/50 hover:bg-white/10 hover:shadow-[0_20px_50px_-12px_rgba(168,85,247,0.3)] hover:scale-105 hover:-rotate-1 transition-all duration-500 group flex flex-col items-center justify-center text-center min-h-[140px] animate-reveal-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <h3 className="font-bold text-lg md:text-xl mb-3 tracking-tight group-hover:text-purple-400 transition-colors">
                {sponsor.name}
              </h3>
              <span className={`inline-block text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full transition-all duration-300 ${
                sponsor.tier === 'Diamond' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20' :
                sponsor.tier === 'Gold' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 group-hover:bg-yellow-500/20' :
                sponsor.tier === 'Silver' ? 'bg-slate-500/10 text-slate-300 border border-slate-500/20 group-hover:bg-slate-500/20' :
                'bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500/20'
              }`}>
                {sponsor.tier}
              </span>
            </div>
          ))}
          
          {/* Become a Sponsor Card - Now Clickable */}
          {!isAnimating && (
            <button 
              onClick={onBecomeSponsorClick}
              className="glass p-8 rounded-[2rem] border border-dashed border-white/20 flex flex-col items-center justify-center text-center min-h-[140px] group hover:bg-purple-500/5 hover:border-purple-500/50 hover:shadow-[0_20px_50px_-12px_rgba(168,85,247,0.3)] hover:scale-105 hover:rotate-1 cursor-pointer transition-all duration-500 w-full animate-reveal-up"
              style={{ animationDelay: `${filteredSponsors.length * 50}ms` }}
            >
              <p className="text-sm font-bold text-slate-400 group-hover:text-white uppercase tracking-widest transition-colors">Your Brand Here</p>
              <p className="text-[10px] text-slate-600 mt-2 uppercase transition-colors group-hover:text-slate-400 font-bold">Partner with VISION 1.0</p>
              <div className="mt-3 text-purple-500/0 group-hover:text-purple-500 transition-all transform group-hover:translate-y-0 translate-y-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7m14-8l-7 7-7-7"></path></svg>
              </div>
            </button>
          )}
        </div>

        {!isAnimating && filteredSponsors.length === 0 && (
          <div className="text-center py-20 text-slate-500 font-medium animate-reveal-up">
            No sponsors found in the "{activeFilter}" tier yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default SponsorsSection;
