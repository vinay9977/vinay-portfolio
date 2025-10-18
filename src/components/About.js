import React from 'react';
import { Terminal, Target, GraduationCap, Award } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg">The journey behind the code</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                <Terminal size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{personalInfo.about.approach.title}</h3>
                <p className="text-blue-400">{personalInfo.about.approach.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {personalInfo.about.approach.description}
            </p>
          </div>

          <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl group-hover:scale-110 transition-transform">
                <Target size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{personalInfo.about.strengths.title}</h3>
                <p className="text-purple-400">{personalInfo.about.strengths.subtitle}</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              {personalInfo.about.strengths.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl">
            <GraduationCap className="text-blue-400 mb-4" size={36} />
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xl font-semibold text-white">{personalInfo.education.degree}</p>
                <p className="text-blue-400">{personalInfo.education.institution}</p>
                <p className="text-gray-400">GPA: {personalInfo.education.gpa} | {personalInfo.education.period}</p>
                <p className="text-sm text-gray-500 mt-2">{personalInfo.education.coursework}</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl">
            <Award className="text-purple-400 mb-4" size={36} />
            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            {personalInfo.certifications.map((cert, idx) => (
              <div key={idx}>
                <p className="text-xl font-semibold text-white mb-2">{cert.name}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};