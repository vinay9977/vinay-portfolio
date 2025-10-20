import React from 'react';
import { Code, Server, Cloud, Database, Layers, GitBranch, Shield, Smartphone } from 'lucide-react';

const skillsData = {
  'Backend & Enterprise': {
    icon: Server,
    color: 'blue',
    skills: [
      { name: 'Java/Spring Boot', level: 95, years: '5+ years' },
      { name: 'Python', level: 85, years: '3+ years' },
      { name: 'Node.js', level: 85, years: '3+ years' },
      { name: 'RESTful APIs', level: 90, years: '5+ years' },
      { name: 'Microservices', level: 90, years: '4+ years' }
    ]
  },
  'ETL & Data Engineering': {
    icon: Database,
    color: 'purple',
    skills: [
      { name: 'Apache Airflow', level: 90, years: '3+ years' },
      { name: 'GCP Dataflow', level: 85, years: '3+ years' },
      { name: 'BigQuery', level: 85, years: '3+ years' },
      { name: 'Data Pipelines', level: 90, years: '4+ years' },
      { name: 'ETL Design', level: 90, years: '4+ years' }
    ]
  },
  'Google Cloud Platform': {
    icon: Cloud,
    color: 'green',
    skills: [
      { name: 'GCP Core Services', level: 90, years: '3+ years' },
      { name: 'Cloud Composer', level: 85, years: '3+ years' },
      { name: 'Pub/Sub', level: 85, years: '3+ years' },
      { name: 'Cloud Storage', level: 90, years: '3+ years' },
      { name: 'GKE (Kubernetes)', level: 80, years: '2+ years' }
    ]
  },
  'Frontend & Databases': {
    icon: Code,
    color: 'orange',
    skills: [
      { name: 'React.js', level: 85, years: '3+ years' },
      { name: 'JavaScript/TypeScript', level: 90, years: '4+ years' },
      { name: 'PostgreSQL', level: 90, years: '4+ years' },
      { name: 'MongoDB', level: 85, years: '3+ years' }
    ]
  }
};

const colorMap = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
    icon: 'bg-blue-600',
    bar: 'bg-blue-600'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-600',
    icon: 'bg-purple-600',
    bar: 'bg-purple-600'
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-600',
    icon: 'bg-green-600',
    bar: 'bg-green-600'
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-600',
    icon: 'bg-orange-600',
    bar: 'bg-orange-600'
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-600 text-lg">Technologies I work with professionally</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, data]) => {
            const Icon = data.icon;
            const colors = colorMap[data.color];
            
            return (
              <div 
                key={category}
                className={`group p-8 ${colors.bg} border-2 ${colors.border} rounded-2xl hover:shadow-xl transition-all duration-300`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 ${colors.icon} rounded-xl text-white group-hover:scale-110 transition-transform`}>
                    <Icon size={28} />
                  </div>
                  <h3 className={`text-2xl font-bold ${colors.text}`}>
                    {category}
                  </h3>
                </div>

                {/* Skills List with Progress Bars */}
                <div className="space-y-4">
                  {data.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.years}</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative w-full h-2 bg-white rounded-full overflow-hidden border border-gray-200">
                        <div 
                          className={`h-full ${colors.bar} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Also Proficient In</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git/GitHub', 'REST APIs', 'GraphQL', 'Microservices', 'OAuth 2.0',
              'JWT', 'WebSockets', 'Redis Cache', 'Agile/Scrum', 'Jest/Testing',
              'Linux/Unix', 'Nginx', 'Security Best Practices', 'System Design'
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-lg font-medium hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <Shield className="text-blue-600" size={28} />
            Certifications
          </h3>
          <div className="bg-white rounded-xl p-6 border border-blue-200">
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              AWS Cloud Quest: Cloud Practitioner
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Validated expertise in AWS services, cloud architecture, security best practices, 
              and cost optimization through hands-on labs and real-world scenarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};