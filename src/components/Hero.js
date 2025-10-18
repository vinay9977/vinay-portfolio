import React from 'react';
import { ArrowRight, Code, Briefcase, Users, Zap, Download } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Hero = ({ scrollToSection }) => {
  const iconMap = {
    'Years Experience': Code,
    'Projects Delivered': Briefcase,
    'Team Members Mentored': Users,
    'Systems Migrated': Zap
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-600 text-sm font-medium backdrop-blur-sm">
            {personalInfo.availability}
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {personalInfo.title}
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.tagline}
          <br className="hidden md:block" />
          {personalInfo.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button onClick={() => scrollToSection('projects')} className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 hover-lift">
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Resume Download Button */}
          <a 
            href={`${process.env.PUBLIC_URL}/Vinay_Resume.pdf`}
            download="Vinay_Resume.pdf"
            className="group px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 flex items-center gap-2 hover-lift"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            Download Resume
          </a>
          
          <a href={`mailto:${personalInfo.contact.email}`} className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-white hover:border-blue-400 hover:text-blue-600 transition-all duration-300 hover-lift">
            Get In Touch
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {personalInfo.stats.map((stat, idx) => {
            const Icon = iconMap[stat.label];
            return (
              <div key={idx} className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 hover-lift">
                <Icon className="mx-auto mb-3 text-blue-600" size={28} />
                <div className="text-3xl font-bold mb-1 text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};