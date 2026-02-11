
import React, { useState } from 'react';

interface AuthModalProps {
  onClose: () => void;
  onSuccess: (userData: { fullName: string; email: string }) => void;
}

const ErrorIcon = () => (
  <svg className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({ fullName: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ fullName?: string; email?: string }>({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors: { fullName?: string; email?: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    // Simulate slight delay
    setTimeout(() => {
      onSuccess(formData);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="glass max-w-md w-full p-8 rounded-[2.5rem] border border-white/10 relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Create Your Account</h3>
          <p className="text-slate-400 text-sm">Join the Vision 1.0 community today.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Full Name</label>
            <input 
              type="text" 
              placeholder="e.g. Victory Emmanuel"
              className={`w-full bg-white/5 border rounded-2xl px-6 py-4 focus:ring-2 outline-none transition-all placeholder:text-white/10 ${
                errors.fullName ? 'border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:ring-purple-500'
              }`}
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: undefined });
              }}
            />
            {errors.fullName && (
              <div className="flex items-center text-red-400 text-[10px] mt-1.5 ml-1 font-bold tracking-tight">
                <ErrorIcon />
                {errors.fullName}
              </div>
            )}
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="example@futo.edu.ng"
              className={`w-full bg-white/5 border rounded-2xl px-6 py-4 focus:ring-2 outline-none transition-all placeholder:text-white/10 ${
                errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:ring-purple-500'
              }`}
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
            />
            {errors.email && (
              <div className="flex items-center text-red-400 text-[10px] mt-1.5 ml-1 font-bold tracking-tight">
                <ErrorIcon />
                {errors.email}
              </div>
            )}
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 mt-4 purple-gradient rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/20 hover:scale-[1.02] transition-transform active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? 'Creating...' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
