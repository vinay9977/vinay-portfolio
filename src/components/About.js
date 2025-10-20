import React from 'react';
import { Terminal, Target, GraduationCap, Award, Briefcase, Users, Code, Lightbulb } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 text-lg">The journey behind the code</p>
        </div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* My Approach Card */}
          <div className="group p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl hover:shadow-xl hover:border-blue-400 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                <Terminal size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{personalInfo.about.approach.title}</h3>
                <p className="text-blue-600 font-medium">{personalInfo.about.approach.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {personalInfo.about.approach.description}
            </p>
          </div>

          {/* Core Strengths Card */}
          <div className="group p-8 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl hover:shadow-xl hover:border-purple-400 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                <Target size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{personalInfo.about.strengths.title}</h3>
                <p className="text-purple-600 font-medium">{personalInfo.about.strengths.subtitle}</p>
              </div>
            </div>
            <ul className="space-y-3">
              {personalInfo.about.strengths.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="text-purple-600 mt-1 text-xl">✓</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="group p-8 bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-200 rounded-2xl hover:shadow-xl hover:border-green-400 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                <GraduationCap size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                <p className="text-green-600 font-medium">Academic Foundation</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-bold text-gray-900">{personalInfo.education.degree}</h4>
                <p className="text-lg text-gray-700 font-medium">{personalInfo.education.institution}</p>
                <div className="flex flex-wrap gap-4 mt-2 text-gray-600">
                  <span className="flex items-center gap-1">
                    <span className="font-semibold">GPA:</span> {personalInfo.education.gpa}
                  </span>
                  <span>•</span>
                  <span>{personalInfo.education.period}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-green-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Relevant Coursework:</p>
                <p className="text-gray-600">{personalInfo.education.coursework}</p>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="group p-8 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl hover:shadow-xl hover:border-orange-400 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                <Award size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
                <p className="text-orange-600 font-medium">Industry Recognition</p>
              </div>
            </div>
            
            {personalInfo.certifications.map((cert, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{cert.name}</h4>
                    <p className="text-gray-600 leading-relaxed mt-2">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I Bring Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">What I Bring to Your Team</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="inline-flex p-4 bg-white/20 rounded-full mb-4">
                <Code size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Technical Excellence</h4>
              <p className="text-blue-100">Clean, scalable code with security and performance in mind</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="inline-flex p-4 bg-white/20 rounded-full mb-4">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Team Leadership</h4>
              <p className="text-blue-100">Mentoring engineers and fostering collaborative growth</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="inline-flex p-4 bg-white/20 rounded-full mb-4">
                <Lightbulb size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Problem Solving</h4>
              <p className="text-blue-100">Creative solutions to complex business challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};