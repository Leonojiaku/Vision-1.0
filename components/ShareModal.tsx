
import React, { useState, useEffect } from 'react';

interface ShareModalProps {
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;
  const shareTitle = "Join me at VISION 1.0 — FUTO's biggest event of the year! 🚀";

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialPlatforms = [
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      color: 'bg-green-500',
      link: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`
    },
    {
      name: 'X (Twitter)',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: 'bg-slate-900',
      link: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: 'bg-blue-600',
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-[500] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="glass max-w-sm w-full p-8 rounded-[2.5rem] border border-white/10 relative text-center shadow-2xl overflow-hidden">
        {/* Animated header background */}
        <div className="absolute top-0 left-0 w-full h-2 purple-gradient"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <h3 className="text-2xl font-bold mb-2 tracking-tight">Share the <span className="text-purple-400">Vision</span></h3>
        <p className="text-slate-400 text-sm mb-8">Invite your fellow students to step into the future.</p>
        
        <div className="flex justify-center gap-4 mb-8">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 rounded-2xl ${platform.color} flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform active:scale-95`}
              title={`Share on ${platform.name}`}
            >
              {platform.icon}
            </a>
          ))}
        </div>

        <div className="space-y-4">
          <div className="relative group">
            <input 
              type="text" 
              readOnly 
              value={shareUrl}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-xs text-slate-400 outline-none pr-24 focus:border-purple-500/50 transition-colors"
            />
            <button 
              onClick={handleCopyLink}
              className={`absolute top-1/2 -translate-y-1/2 right-2 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase transition-all ${
                copied ? 'bg-green-500 text-white' : 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/40'
              }`}
            >
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
          <p className="text-[10px] text-slate-500 italic">"Ideas, Talent, Innovation."</p>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
