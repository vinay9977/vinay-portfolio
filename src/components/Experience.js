import React from 'react';
import { Briefcase, MapPin, Award, TrendingUp } from 'lucide-react';
import { experienceData } from '../data/experienceData';

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-600 text-lg">Building enterprise solutions at scale</p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>

          <div className="space-y-16">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                  </div>

                  {/* Experience Card */}
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}>
                    <div className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-400 transition-all duration-300 hover:-translate-y-2">
                      {/* Arrow Pointer for Timeline (Desktop only) */}
                      <div className={`hidden lg:block absolute top-8 ${isEven ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}`}>
                        <div className={`w-8 h-8 bg-white border-2 border-gray-200 transform rotate-45 ${isEven ? '-translate-x-4' : 'translate-x-4'}`}></div>
                      </div>

                      {/* Company Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                              <Briefcase size={24} className="text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{exp.role}</h3>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-600">
                            <span className="text-xl font-bold text-blue-600">{exp.company}</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-1">
                              <MapPin size={16} className="text-gray-400" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Award size={20} className="text-purple-600" />
                          <h4 className="text-lg font-semibold text-gray-900">Key Achievements</h4>
                        </div>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achievementIdx) => (
                            <li key={achievementIdx} className="flex items-start gap-3 text-gray-700">
                              <TrendingUp size={16} className="text-green-500 mt-1 flex-shrink-0" />
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Companies Worked With Showcase */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border border-blue-200 hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-blue-600 mb-2">HSBC</div>
              <p className="text-gray-600 font-medium">Global Banking Leader</p>
              <p className="text-sm text-gray-500 mt-2">Enterprise Scale</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-purple-200 hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-purple-600 mb-2">Flipkart</div>
              <p className="text-gray-600 font-medium">E-commerce Giant</p>
              <p className="text-sm text-gray-500 mt-2">Millions of Users</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-green-200 hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-green-600 mb-2">GCP</div>
              <p className="text-gray-600 font-medium">Cloud Expertise</p>
              <p className="text-sm text-gray-500 mt-2">Airflow & Dataflow</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-orange-200 hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-orange-600 mb-2">Java</div>
              <p className="text-gray-600 font-medium">Enterprise Apps</p>
              <p className="text-sm text-gray-500 mt-2">Spring Boot Expert</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">
            Ready to bring this experience to your team?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};