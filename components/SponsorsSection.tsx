
import React, { useState } from 'react';
import { SPONSORS } from '../constants';

type TierFilter = 'All' | 'Diamond' | 'Gold' | 'Silver' | 'Partner';

const SponsorsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<TierFilter>('All');

  const tiers: TierFilter[] = ['All', 'Diamond', 'Gold', 'Silver', 'Partner'];

  const filteredSponsors = SPONSORS.filter(
    (sponsor) => activeFilter === 'All' || sponsor.tier === activeFilter
  );

  // Helper to handle image load errors gracefully
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, name: string) => {
    const target = e.target as HTMLImageElement;
    const fallbackUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=4c1d95,7c3aed,db2777&fontFamily=Outfit&fontWeight=700`;
    
    // Prevent infinite loop if fallback also fails
    if (target.src !== fallbackUrl) {
      target.src = fallbackUrl;
    }
  };

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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[400px]">
          {filteredSponsors.map((sponsor, idx) => (
            <div 
              key={`${sponsor.name}-${idx}`}
              className="glass p-6 rounded-[2rem] border border-white/5 hover:border-purple-500/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group flex flex-col items-center justify-between text-center min-h-[180px] animate-in fade-in zoom-in-95 duration-500"
            >
              <div className="flex-grow flex items-center justify-center w-full mb-4">
                <div className="relative w-20 h-20 group-hover:scale-110 transition-transform duration-500 ease-out">
                  {/* Subtle glow effect behind the logo */}
                  <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 blur-xl rounded-full transition-all duration-500"></div>
                  
                  <img 
                    src={sponsor.logo || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(sponsor.name)}`} 
                    alt={`${sponsor.name} logo`} 
                    className="relative z-10 w-full h-full object-contain rounded-2xl p-1 bg-white/5 border border-white/5 group-hover:border-purple-500/30 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-500"
                    onError={(e) => handleImageError(e, sponsor.name)}
                  />
                </div>
              </div>
              
              <div className="w-full">
                <h3 className="font-bold text-sm md:text-base mb-2 truncate px-2 group-hover:text-white transition-colors">{sponsor.name}</h3>
                <span className={`inline-block text-[9px] font-black uppercase tracking-[0.15em] px-3 py-1 rounded-full transition-all duration-300 ${
                  sponsor.tier === 'Diamond' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20' :
                  sponsor.tier === 'Gold' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 group-hover:bg-yellow-500/20' :
                  sponsor.tier === 'Silver' ? 'bg-slate-500/10 text-slate-300 border border-slate-500/20 group-hover:bg-slate-500/20' :
                  'bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500/20'
                }`}>
                  {sponsor.tier}
                </span>
              </div>
            </div>
          ))}
          
          {/* Become a Sponsor Card - Always Visible */}
          <div className="glass p-8 rounded-[2rem] border border-dashed border-white/20 flex flex-col items-center justify-center text-center min-h-[180px] group hover:bg-purple-500/5 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer transition-all duration-500">
            <div className="w-12 h-12 rounded-full border-2 border-slate-700 flex items-center justify-center mb-4 group-hover:border-purple-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-500">
              <span className="text-2xl text-slate-500 group-hover:text-purple-400">+</span>
            </div>
            <p className="text-xs font-bold text-slate-400 group-hover:text-white uppercase tracking-widest transition-colors">Your Logo Here</p>
            <p className="text-[10px] text-slate-600 mt-2 uppercase transition-colors group-hover:text-slate-400">Sponsor VISION 1.0</p>
          </div>
        </div>

        {filteredSponsors.length === 0 && (
          <div className="text-center py-20 text-slate-500 font-medium animate-in fade-in duration-500">
            No sponsors found in the "{activeFilter}" tier yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default SponsorsSection;
