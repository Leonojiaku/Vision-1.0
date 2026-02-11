
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SponsorsSection from './components/SponsorsSection';
import RegistrationSection from './components/RegistrationSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import EventPopup from './components/EventPopup';
import AuthModal from './components/AuthModal';
import ShareModal from './components/ShareModal';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [user, setUser] = useState<{ fullName: string; email: string } | null>(null);

  useEffect(() => {
    // Check localStorage for existing user
    const savedUser = localStorage.getItem('vision_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Initial load delay for popup if not registered
    if (!savedUser) {
        const timer = setTimeout(() => {
          setShowPopup(true);
        }, 3000);
        return () => clearTimeout(timer);
    }
  }, []);

  const handleAuthSuccess = (userData: { fullName: string; email: string }) => {
    localStorage.setItem('vision_user', JSON.stringify(userData));
    setUser(userData);
    setShowAuth(false);
    // After successful account creation, trigger the popup
    setShowPopup(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegisterClick = () => {
    if (!user) {
      setShowAuth(true);
    } else {
      scrollToSection('register');
    }
  };

  const handleAboutClick = () => scrollToSection('about');
  const handleSponsorsClick = () => scrollToSection('sponsors');

  return (
    <div className="min-h-screen selection:bg-purple-500/30">
      <Header 
        userName={user?.fullName} 
        onAuthClick={() => setShowAuth(true)}
        onAboutClick={handleAboutClick}
        onSponsorsClick={handleSponsorsClick}
        onRegisterClick={handleRegisterClick}
      />
      
      <main>
        <Hero 
          onRegisterClick={handleRegisterClick} 
          onLearnMoreClick={handleAboutClick}
          onShareClick={() => setShowShare(true)}
        />
        
        <div id="about" className="scroll-mt-24">
          <About />
        </div>

        <div id="sponsors" className="scroll-mt-24">
          <SponsorsSection />
        </div>

        <div id="register" className="scroll-mt-24">
          <RegistrationSection onComplete={() => setShowPopup(true)} />
        </div>

        <div id="faq" className="scroll-mt-24">
          <FAQSection />
        </div>

        <div id="testimonials" className="scroll-mt-24">
          <TestimonialsSection />
        </div>
      </main>

      <Footer />
      
      <WhatsAppButton />
      
      {showPopup && (
        <EventPopup 
          onClose={() => setShowPopup(false)} 
          isRegistrationRemind={!!user}
        />
      )}

      {showAuth && (
        <AuthModal 
          onClose={() => setShowAuth(false)} 
          onSuccess={handleAuthSuccess}
        />
      )}

      {showShare && (
        <ShareModal 
          onClose={() => setShowShare(false)} 
        />
      )}
    </div>
  );
};

export default App;
