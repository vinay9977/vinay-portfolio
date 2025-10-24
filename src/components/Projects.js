import React, { useState } from 'react';
import { Github, ExternalLink, Zap, Globe, Filter } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  // Extract all unique technologies
  const allTechs = [...new Set(projectsData.flatMap(p => p.tech))];
  const categories = ['All', 'Frontend', 'Backend', 'Full-Stack', 'AI/ML'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => {
        if (filter === 'Frontend') return project.tech.some(t => ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'].includes(t));
        if (filter === 'Backend') return project.tech.some(t => ['FastAPI', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB'].includes(t));
        if (filter === 'Full-Stack') return project.tech.some(t => ['React', 'Node.js', 'Next.js'].includes(t));
        if (filter === 'AI/ML') return project.tech.some(t => ['OpenAI GPT-4', 'AI'].includes(t));
        return true;
      });

  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg mb-8">Innovation meets execution</p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 text-gray-600 font-medium">
              <Filter size={18} />
              <span>Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden bg-white border-2 border-gray-200 rounded-3xl hover:shadow-2xl hover:border-blue-300 transition-all duration-300"
            >
              <div className="p-8 md:p-10 relative">
                {/* Floating Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Featured
                  </div>
                )}
                
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-3xl font-bold text-gray-900">{project.name}</h3>
                    </div>
                    <p className="text-xl text-purple-600 font-medium mb-4">{project.tagline}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Key Impact</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.impact.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <Zap className="text-yellow-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <Github size={18} />
                    View Code
                    <ExternalLink size={16} />
                  </a>
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                    >
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

        {/* GitHub CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Want to see more?</h3>
          <p className="text-xl mb-8 text-gray-300">Check out my GitHub for more projects and contributions</p>
          <a 
            href="https://github.com/vinay9977" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            <Github size={24} />
            Visit My GitHub
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};