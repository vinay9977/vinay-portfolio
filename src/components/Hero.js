import React from 'react';
import { ArrowRight, Download, Mail, Linkedin, Github, MapPin, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-left">
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
            
            <p className="text-lg md:text-xl text-gray-600 mb-4 leading-relaxed max-w-2xl">
              {personalInfo.tagline}
            </p>
            
            <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed max-w-2xl">
              {personalInfo.subtitle}
            </p>

            {/* Status */}
            <div className="flex flex-wrap gap-4 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-purple-600" />
                <span>5+ Years Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href={`${process.env.PUBLIC_URL}/Vinay_Resume.pdf`}
                download="Vinay_Korrapati_Resume.pdf"
                className="group px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href={`mailto:${personalInfo.contact.email}`}
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

          {/* Right Column - Professional Image/Visual */}
          <div className="relative lg:block">
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Image Placeholder - Replace with actual photo */}
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-1 hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-3xl p-8 flex items-center justify-center aspect-square">
                  {/* Replace this div with an actual img tag when you have a photo */}
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-6xl font-bold text-white">{personalInfo.initials}</span>
                    </div>
                    <p className="text-gray-500 text-sm">Add your professional photo here</p>
                    <p className="text-gray-400 text-xs mt-2">Recommended: 400x400px</p>
                  </div>
                  {/* When you have a photo, replace above with: */}
                  {/* <img src="/path/to/photo.jpg" alt="Vinay Korrapati" className="w-full h-full object-cover rounded-2xl" /> */}
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200 animate-float">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Years Exp</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200 animate-float" style={{animationDelay: '1s'}}>
                <div className="text-3xl font-bold text-purple-600">10+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};