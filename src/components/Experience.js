import React from 'react';
import { experienceData } from '../data/experienceData';

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-gradient-to-b from-black to-blue-950/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">Where I have made an impact</p>
        </div>

        <div className="space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute -left-4 top-8 w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 ml-8">
                <div className="flex flex-wrap items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-xl text-blue-400 font-medium mb-1">{exp.company}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-sm font-medium">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 group/item">
                      <span className="text-blue-400 mt-1 group-hover/item:scale-125 transition-transform">▹</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};