
import React, { useState } from 'react';
import { CATEGORIES, PAYMENT_DETAILS, REG_DEADLINE } from '../constants';

interface RegistrationSectionProps {
  onComplete: () => void;
}

const ErrorIcon = () => (
  <svg className="w-3 h-3 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

const RegistrationSection: React.FC<RegistrationSectionProps> = ({ onComplete }) => {
  const [copied, setCopied] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(PAYMENT_DETAILS.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const getWhatsAppLink = () => {
    const selectedCat = CATEGORIES.find(c => c.id === selectedCategoryId);
    const text = encodeURIComponent(`Hello VISION 1.0 Team,\n\nI want to register for ${selectedCat?.name || 'the event'}.\nEmail: ${email}\n\nI have made the payment. Here is my proof:`);
    return `https://wa.me/2348158983927?text=${text}`;
  };

  const isFormValid = selectedCategoryId && email && !emailError;

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">How to Register</h2>
          <p className="text-slate-400">Secure your spot in 3 simple steps. Open to all Nigerian students.</p>
          <div className="inline-block mt-4 px-4 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest">
            Deadline: {REG_DEADLINE}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1: Categories */}
          <div className="glass p-8 rounded-3xl border border-white/10 flex flex-col h-full relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl purple-gradient flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-purple-500/20">1</div>
            <h3 className="text-xl font-bold mb-6">Select Category</h3>
            <div className="space-y-4 flex-grow relative z-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 text-left group relative ${
                    selectedCategoryId === cat.id
                      ? 'bg-purple-600/20 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.2)] scale-[1.02]'
                      : 'bg-white/5 border-white/5 hover:border-purple-500/30 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-3xl transition-transform duration-300 ${selectedCategoryId === cat.id ? 'scale-110 drop-shadow-md' : 'grayscale group-hover:grayscale-0'}`}>
                      {cat.icon}
                    </span>
                    <div>
                      <span className={`block text-sm font-bold tracking-tight ${selectedCategoryId === cat.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                        {cat.name}
                      </span>
                      {selectedCategoryId === cat.id && (
                        <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider animate-pulse">Selected</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`block font-black text-base ${selectedCategoryId === cat.id ? 'text-white' : 'text-purple-400'}`}>
                      {cat.price}
                    </span>
                  </div>

                  {/* Highlight bar */}
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full transition-all duration-300 ${selectedCategoryId === cat.id ? 'bg-purple-500 opacity-100' : 'bg-transparent opacity-0'}`}></div>
                </button>
              ))}
            </div>
            
            {/* Background glowing orb for selection area */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/10 blur-[60px] pointer-events-none"></div>
          </div>

          {/* Step 2: Payment */}
          <div className="glass p-8 rounded-3xl border border-white/10 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl"></div>
            <div className="w-12 h-12 rounded-2xl purple-gradient flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-purple-500/20">2</div>
            <h3 className="text-xl font-bold mb-6">Make Payment</h3>
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-white/10 space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Bank Name</p>
                <p className="font-bold text-white">{PAYMENT_DETAILS.bank}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Account Number</p>
                <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <p className="font-mono text-xl font-bold text-purple-300">{PAYMENT_DETAILS.accountNumber}</p>
                  <button 
                    onClick={handleCopyAccount}
                    className={`p-2 rounded-lg transition-all ${copied ? 'bg-green-500/20 text-green-400' : 'hover:bg-white/10 text-slate-400'}`}
                    title="Copy Account Number"
                  >
                    {copied ? '✅' : '📋'}
                  </button>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Account Name</p>
                <p className="font-bold text-white">{PAYMENT_DETAILS.accountName}</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-6 italic">Save your proof of payment (screenshot/receipt).</p>
          </div>

          {/* Step 3: Confirmation */}
          <div className="glass p-8 rounded-3xl border border-white/10 flex flex-col h-full relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-600/5 blur-[80px] pointer-events-none"></div>
            <div className="w-12 h-12 rounded-2xl purple-gradient flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-purple-500/20">3</div>
            <h3 className="text-xl font-bold mb-6">Confirm details</h3>
            <div className="space-y-4 flex-grow relative z-10">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 ml-1">Email for Confirmation</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="yourname@gmail.com"
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm outline-none transition-all ${
                    emailError ? 'border-red-500 focus:ring-1 focus:ring-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.1)]' : 'border-white/10 focus:border-purple-500'
                  }`}
                />
                {emailError && (
                  <div className="flex items-center text-red-400 text-[10px] mt-2 ml-1 font-bold tracking-tight">
                    <ErrorIcon />
                    {emailError}
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-4">
                <a 
                  href={isFormValid ? getWhatsAppLink() : '#'} 
                  target={isFormValid ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!isFormValid) {
                      e.preventDefault();
                      if (!selectedCategoryId) alert('Please select a category first (Step 1)');
                      else if (!email) alert('Please enter your email');
                      else if (emailError) alert('Please correct your email address');
                    } else {
                      onComplete();
                    }
                  }}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all group ${
                    isFormValid 
                      ? 'bg-green-500/10 border-green-500/20 text-green-400 hover:bg-green-500/20 hover:scale-[1.02] shadow-lg shadow-green-500/10' 
                      : 'bg-white/5 border-white/5 text-slate-500 cursor-not-allowed grayscale'
                  }`}
                >
                  <span className="font-bold text-sm">Send Proof via WhatsApp</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <p className="text-[10px] text-center text-slate-500 font-medium">Attach your proof of payment in the chat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
