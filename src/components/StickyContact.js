import React, { useState } from 'react';
import { MessageCircle, X, Mail, Linkedin, Calendar, Phone } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const StickyContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Contact Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 animate-pulse"
        aria-label="Contact Options"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Contact Options Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-50 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-6 w-80 animate-fade-in">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Let's Connect!</h3>
          
          <div className="space-y-3">
            {/* Email */}
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-all duration-300 group"
            >
              <div className="p-2 bg-blue-600 text-white rounded-lg group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Email Me</div>
                <div className="text-sm text-gray-600">{personalInfo.contact.email}</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-all duration-300 group"
            >
              <div className="p-2 bg-blue-700 text-white rounded-lg group-hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">LinkedIn</div>
                <div className="text-sm text-gray-600">Connect professionally</div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${personalInfo.contact.phone}`}
              className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-all duration-300 group"
            >
              <div className="p-2 bg-green-600 text-white rounded-lg group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Call Me</div>
                <div className="text-sm text-gray-600">{personalInfo.contact.phone}</div>
              </div>
            </a>

            {/* Calendar - Optional: Add Calendly link */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg transition-all duration-300 group"
            >
              <div className="p-2 bg-purple-600 text-white rounded-lg group-hover:scale-110 transition-transform">
                <Calendar size={20} />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Schedule a Call</div>
                <div className="text-sm text-gray-600">Use contact form below</div>
              </div>
            </a>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Response time: Within 24 hours
            </p>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};