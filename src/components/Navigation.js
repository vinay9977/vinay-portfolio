import React, { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Navigation = ({ activeSection, scrolled, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {personalInfo.initials}
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
              <button key={section} onClick={() => scrollToSection(section)} className={`capitalize text-sm font-medium transition-all duration-300 hover:text-blue-400 ${activeSection === section ? 'text-blue-400' : 'text-gray-400'}`}>
                {section}
              </button>
            ))}
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button key={section} onClick={() => handleNavClick(section)} className={`capitalize text-lg font-medium transition-all duration-300 hover:text-blue-400 text-left py-2 ${activeSection === section ? 'text-blue-400' : 'text-gray-400'}`}>
                  {section}
                </button>
              ))}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};