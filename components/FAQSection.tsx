
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-purple-600/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-400">Everything you need to know about VISION 1.0.</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div 
              key={index}
              className={`glass rounded-3xl border border-white/5 overflow-hidden transition-all duration-300 animate-slide-up ${
                activeIndex === index ? 'bg-white/10 border-purple-500/30 shadow-lg shadow-purple-500/5' : 'hover:bg-white/5'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
                aria-expanded={activeIndex === index}
              >
                <span className={`font-bold text-lg transition-colors ${activeIndex === index ? 'text-purple-400' : 'text-white group-hover:text-purple-300'}`}>
                  {item.question}
                </span>
                <span className={`ml-4 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-slate-400 leading-relaxed">
                  <div className="h-px w-full bg-white/5 mb-6"></div>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '600ms' }}>
          <p className="text-sm text-slate-500">
            Still have questions? <a href="https://wa.me/2348158983927" target="_blank" rel="noopener noreferrer" className="text-purple-400 font-bold hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
