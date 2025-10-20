import React from 'react';
import { TrendingUp, Users, Shield, Zap, Award, Target } from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    stat: '70%',
    label: 'Reduction in Code Review Time',
    description: 'Automated review process with AI-powered analysis',
    color: 'blue'
  },
  {
    icon: Users,
    stat: '10+',
    label: 'Engineers Mentored',
    description: 'Led technical training and knowledge sharing',
    color: 'purple'
  },
  {
    icon: Shield,
    stat: '99.9%',
    label: 'System Uptime',
    description: 'Enterprise-grade reliability and availability',
    color: 'green'
  },
  {
    icon: Zap,
    stat: '5+',
    label: 'Systems Migrated',
    description: 'Successfully migrated to GCP cloud-native architecture',
    color: 'orange'
  },
  {
    icon: Target,
    stat: '10+',
    label: 'Projects Delivered',
    description: 'Java enterprise applications and ETL pipelines',
    color: 'pink'
  },
  {
    icon: Award,
    stat: '5+',
    label: 'Years Experience',
    description: 'Enterprise software development expertise',
    color: 'indigo'
  }
];

const colorMap = {
  blue: {
    gradient: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600'
  },
  purple: {
    gradient: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-600'
  },
  green: {
    gradient: 'from-green-500 to-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-600'
  },
  orange: {
    gradient: 'from-orange-500 to-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-600'
  },
  pink: {
    gradient: 'from-pink-500 to-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    text: 'text-pink-600'
  },
  indigo: {
    gradient: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-600'
  }
};

export const Highlights = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Impact at a Glance
          </h2>
          <p className="text-gray-600 text-lg">Proven results in enterprise software development</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            const colors = colorMap[item.color];
            
            return (
              <div
                key={idx}
                className={`group relative ${colors.bg} border-2 ${colors.border} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${colors.gradient} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} />
                </div>

                {/* Stat */}
                <div className={`text-5xl font-bold ${colors.text} mb-2`}>
                  {item.stat}
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.gradient} opacity-5 rounded-bl-full`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to make an impact together?</h3>
          <p className="text-xl mb-8 text-blue-100">Let's discuss how I can contribute to your team's success</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/Vinay_Resume.pdf`}
              download="Vinay_Korrapati_Resume.pdf"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};