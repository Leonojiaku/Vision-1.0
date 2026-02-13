
import React from 'react';
import { WHATSAPP_OPTIONS } from '../constants';

const SponsorshipInfo: React.FC = () => {
  const sponsorshipEnquiries = WHATSAPP_OPTIONS.filter(opt => opt.type === 'enquiry');

  return (
    <section className="py-24 px-6 bg-slate-900/40 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 animate-slide-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              Partner with <br />
              <span className="text-gradient">The Future of Innovation</span>
            </h2>
            
            <div className="space-y-6 text-slate-300">
              <p className="leading-relaxed">
                VISION 1.0 offers brands a unique opportunity to connect with over 5,000+ Nigerian students, tech enthusiasts, and creative minds. Our platform is the primary stage for emerging talent in Owerri.
              </p>
              
              <ul className="space-y-4">
                {[
                  { title: "Brand Visibility", desc: "Extensive digital and physical presence across FUTO and beyond." },
                  { title: "Talent Acquisition", desc: "Direct access to top-tier student developers, designers, and entrepreneurs." },
                  { title: "Community Engagement", desc: "Showcase your CSR initiatives by supporting student innovation and creativity." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                    <div>
                      <span className="text-white font-bold block mb-1">{item.title}</span>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-8 flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
                {sponsorshipEnquiries.map((opt, idx) => (
                  <a 
                    key={idx}
                    href={opt.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-4 purple-gradient rounded-2xl font-bold text-sm shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform active:scale-95"
                  >
                    {opt.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-2 gap-4 animate-slide-right">
            <div className="space-y-4 pt-12">
              <div className="glass p-6 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors group">
                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">💎</div>
                <h4 className="font-bold text-white uppercase text-xs tracking-widest">Diamond</h4>
                <p className="text-[10px] text-slate-500 mt-1">Maximum Impact</p>
              </div>
              <div className="glass p-6 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors group">
                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">🥇</div>
                <h4 className="font-bold text-white uppercase text-xs tracking-widest">Gold</h4>
                <p className="text-[10px] text-slate-500 mt-1">High Visibility</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass p-6 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors group">
                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">🥈</div>
                <h4 className="font-bold text-white uppercase text-xs tracking-widest">Silver</h4>
                <p className="text-[10px] text-slate-500 mt-1">Great Value</p>
              </div>
              <div className="glass p-6 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors group">
                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">🤝</div>
                <h4 className="font-bold text-white uppercase text-xs tracking-widest">Partner</h4>
                <p className="text-[10px] text-slate-500 mt-1">Strategic Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipInfo;
