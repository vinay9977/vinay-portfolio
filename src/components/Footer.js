import React from 'react';
import { personalInfo } from '../data/personalInfo';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-400">
          © 2025 {personalInfo.name}. Built with React and Tailwind CSS.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Designed to inspire. Crafted with passion.
        </p>
      </div>
    </footer>
  );
};