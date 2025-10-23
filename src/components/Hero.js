import React from 'react';
import { ArrowRight, Download, Mail, Linkedin, Github, MapPin, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Centered Text Content */}
        <div className="text-center">
          {/* Open to Work Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-600 text-sm font-medium backdrop-blur-sm animate-pulse">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Open to Work - Available Dec 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-700">
            {personalInfo.title}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto">
            {personalInfo.tagline}
          </p>
          
          <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed max-w-3xl mx-auto">
            {personalInfo.subtitle}
          </p>

          {/* Status Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-700">
              <MapPin size={16} />
              <span className="text-sm font-medium">{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-lg text-purple-700">
              <Briefcase size={16} />
              <span className="text-sm font-medium">{personalInfo.experience}</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href={personalInfo.resumeLink}
              download
              className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-gray-100 hover:bg-blue-100 border border-gray-200 hover:border-blue-300 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} className="text-gray-700 hover:text-blue-600" />
            </a>
            <a 
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-blue-100 border border-gray-200 hover:border-blue-300 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-700 hover:text-blue-600" />
            </a>
            <a 
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-gray-800 border border-gray-200 hover:border-gray-800 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-700 hover:text-white" />
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};