import React from 'react';
import { Code, Github, ExternalLink, Zap, Globe } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg">Innovation meets execution</p>
        </div>

        <div className="space-y-8">
          {projectsData.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl hover:shadow-2xl hover:border-blue-300 transition-all duration-300">
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="text-purple-600" size={32} />
                      <h3 className="text-3xl font-bold text-gray-900">{project.name}</h3>
                    </div>
                    <p className="text-xl text-purple-600 font-medium mb-3">{project.tagline}</p>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-all duration-300 hover:scale-110">
                    <Github size={24} className="text-gray-700" />
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {project.impact.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-gray-700">
                      <Zap className="text-yellow-500 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-300 hover-lift">
                    <Github size={18} />
                    View Source Code
                    <ExternalLink size={16} />
                  </a>
                  
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover-lift">
                      <Globe size={18} />
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};