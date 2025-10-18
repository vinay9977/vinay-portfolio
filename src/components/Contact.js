import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Let's Build Something Amazing
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently pursuing my Master's degree at Purdue University and actively seeking full-time opportunities starting December 2025. Let's connect and discuss how I can contribute to your team.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          <a href={`mailto:${personalInfo.contact.email}`} className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300">
            <Mail className="mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform" size={32} />
            <p className="text-sm text-gray-400 mb-1">Email</p>
            <p className="text-white font-medium">{personalInfo.contact.email}</p>
          </a>
          <a href={`tel:${personalInfo.contact.phone.replace(/[^\d]/g, '')}`} className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">
            <Phone className="mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform" size={32} />
            <p className="text-sm text-gray-400 mb-1">Phone</p>
            <p className="text-white font-medium">{personalInfo.contact.phone}</p>
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300">
            <Github className="text-gray-400 group-hover:text-white transition-colors" size={28} />
          </a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300">
            <Linkedin className="text-gray-400 group-hover:text-white transition-colors" size={28} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-400">
          <MapPin size={18} />
          <span>{personalInfo.contact.location}</span>
        </div>
      </div>
    </section>
  );
};