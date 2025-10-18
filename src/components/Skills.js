import React from 'react';
import { Server, Code, Cloud, Database, Shield, Award } from 'lucide-react';
import { skillsData } from '../data/skillsData';

const iconMap = {
  blue: Server,
  purple: Code,
  cyan: Cloud,
  green: Database,
  orange: Shield,
  pink: Award
};

const colorClasses = {
  blue: {
    bg: 'from-blue-500/10 to-blue-600/5',
    border: 'border-blue-500/20 hover:border-blue-500/50',
    text: 'text-blue-400',
    skill: 'bg-blue-500/10 text-blue-300 border-blue-500/20'
  },
  purple: {
    bg: 'from-purple-500/10 to-purple-600/5',
    border: 'border-purple-500/20 hover:border-purple-500/50',
    text: 'text-purple-400',
    skill: 'bg-purple-500/10 text-purple-300 border-purple-500/20'
  },
  cyan: {
    bg: 'from-cyan-500/10 to-cyan-600/5',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    text: 'text-cyan-400',
    skill: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
  },
  green: {
    bg: 'from-green-500/10 to-green-600/5',
    border: 'border-green-500/20 hover:border-green-500/50',
    text: 'text-green-400',
    skill: 'bg-green-500/10 text-green-300 border-green-500/20'
  },
  orange: {
    bg: 'from-orange-500/10 to-orange-600/5',
    border: 'border-orange-500/20 hover:border-orange-500/50',
    text: 'text-orange-400',
    skill: 'bg-orange-500/10 text-orange-300 border-orange-500/20'
  },
  pink: {
    bg: 'from-pink-500/10 to-pink-600/5',
    border: 'border-pink-500/20 hover:border-pink-500/50',
    text: 'text-pink-400',
    skill: 'bg-pink-500/10 text-pink-300 border-pink-500/20'
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-gradient-to-b from-black to-purple-950/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 text-lg">Technologies I master to build world-class solutions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([key, category]) => {
            const Icon = iconMap[category.color];
            const colors = colorClasses[category.color];
            
            return (
              <div 
                key={key} 
                className={`group p-8 bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-2xl transition-all duration-300`}
              >
                <Icon className={`${colors.text} mb-4 group-hover:scale-110 transition-transform`} size={36} />
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                
                {category.skills ? (
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className={`px-3 py-1 ${colors.skill} rounded-lg text-sm border`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2 text-gray-300 text-sm">
                    {category.practices.map((practice, i) => (
                      <p key={i}>• {practice}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};