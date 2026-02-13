
import React from 'react';
import { PRIZE_POOL } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              A Platform Where <br />
              <span className="text-purple-400">Intellect Meets Expression</span>
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <p>
                Curated by the <span className="text-white font-semibold underline decoration-purple-500">Office of the Secretary General</span>, NAITS (Victory) & ALITS (Perpetual), VISION 1.0 is more than just a program — it's the beginning of a legacy at the Federal University of Technology, Owerri.
              </p>
              <p>
                Whether you're a tech genius, a gifted performer, or a future business mogul, we have a stage for you. With cash prizes worth over <span className="text-white font-bold">{PRIZE_POOL}</span>, this is the ultimate opportunity to be recognized.
              </p>
              <div className="p-6 glass rounded-2xl border-l-4 border-purple-500 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <p className="italic text-purple-200">
                  "Participants and winners stand to gain massive opportunities, mentorship, and resources directly from our world-class sponsors and coordinators."
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-slide-right">
            <div className="space-y-4">
              <div className="h-48 bg-purple-600/20 rounded-2xl flex items-center justify-center p-6 text-center border border-white/5 hover:scale-105 transition-transform duration-500">
                <div>
                  <div className="text-4xl mb-2">💻</div>
                  <h3 className="font-bold">Tech</h3>
                  <p className="text-[10px] text-slate-500 mt-1 uppercase">Presentations</p>
                </div>
              </div>
              <div className="h-64 bg-pink-600/20 rounded-2xl flex items-center justify-center p-6 text-center border border-white/5 hover:scale-105 transition-transform duration-500">
                <div>
                  <div className="text-4xl mb-2">🎭</div>
                  <h3 className="font-bold">Talent</h3>
                  <p className="text-[10px] text-slate-500 mt-1 uppercase">Showcase</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 bg-indigo-600/20 rounded-2xl flex items-center justify-center p-6 text-center border border-white/5 hover:scale-105 transition-transform duration-500">
                <div>
                  <div className="text-4xl mb-2">🚀</div>
                  <h3 className="font-bold">Business</h3>
                  <p className="text-[10px] text-slate-500 mt-1 uppercase">Pitches</p>
                </div>
              </div>
              <div className="h-48 bg-blue-600/20 rounded-2xl flex items-center justify-center p-6 text-center border border-white/5 hover:scale-105 transition-transform duration-500">
                <div>
                  <div className="text-4xl mb-2">✨</div>
                  <h3 className="font-bold">Legacy</h3>
                  <p className="text-[10px] text-slate-500 mt-1 uppercase">VISION 1.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
