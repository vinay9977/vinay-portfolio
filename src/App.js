import React, { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollEffect } from './hooks/useScrollEffect';
import './styles/App.css';

function App() {
  const { activeSection, scrolled, mousePosition, scrollToSection } = useScrollEffect();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Cool Breezy Background */}
      <div className="fixed inset-0 z-0">
        {/* Soft gradient waves */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20"></div>
        
        {/* Subtle animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle mouse follow effect */}
        <div 
          className="absolute inset-0 opacity-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.1), transparent 70%)`
          }}
        ></div>
      </div>

      <Navigation 
        activeSection={activeSection} 
        scrolled={scrolled} 
        scrollToSection={scrollToSection} 
      />

      <div className="relative z-10">
        <div className="fade-in-section"><Hero scrollToSection={scrollToSection} /></div>
        <div className="fade-in-section"><About /></div>
        <div className="fade-in-section"><Experience /></div>
        <div className="fade-in-section"><Projects /></div>
        <div className="fade-in-section"><Skills /></div>
        <div className="fade-in-section"><Contact /></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;