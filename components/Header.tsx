
import React from 'react';

interface HeaderProps {
  userName?: string | null;
  onAuthClick: () => void;
  onAboutClick: () => void;
  onSponsorsClick: () => void;
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  userName, 
  onAuthClick, 
  onAboutClick, 
  onSponsorsClick,
  onRegisterClick
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <div 
        className="flex items-center space-x-2 cursor-pointer group"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="w-8 h-8 rounded-full purple-gradient flex items-center justify-center font-bold text-sm text-white group-hover:scale-110 transition-transform">V</div>
        <span className="font-bold text-xl tracking-tighter">VISION <span className="text-purple-400">1.0</span></span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
        <button 
          onClick={onAboutClick}
          className="hover:text-white transition-colors cursor-pointer"
        >
          About
        </button>
        <button 
          onClick={onSponsorsClick}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Sponsors
        </button>
        <button 
          onClick={onRegisterClick}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Register
        </button>
        
        {userName ? (
          <div className="flex items-center space-x-3 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-white font-bold">{userName.split(' ')[0]}</span>
          </div>
        ) : (
          <button 
            onClick={onAuthClick}
            className="glass px-6 py-2 rounded-full text-white hover:bg-white/10 transition-all border border-purple-500/30 font-bold"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Auth Button */}
      <div className="md:hidden">
        {userName ? (
          <div className="w-8 h-8 rounded-full purple-gradient flex items-center justify-center font-bold text-xs">
            {userName.charAt(0)}
          </div>
        ) : (
          <button 
            onClick={onAuthClick}
            className="p-2 glass rounded-full border border-purple-500/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
