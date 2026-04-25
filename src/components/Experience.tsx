import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Welocalize',
      position: 'Senior Software Engineer (SDE-3)',
      location: 'Noida, India',
      period: 'July 2025 – Present',
      description: [
        'Architecting scalable backend services using Golang and high-performance frontends with Next.js/Vue.js',
        'Leading the integration of Applied AI solutions, including ultra-low latency voice agents and RAG-based systems',
        'Designing and deploying cloud-native infrastructure on AWS with automated CI/CD pipelines',
        'Collaborating with global teams to deliver production-ready features for enterprise clients'
      ]
    },
    {
      company: 'Classplus',
      position: 'Software Development Engineer 2 – Web (SDE-2)',
      location: 'Noida, India',
      period: 'Oct 2024 – March 2025',
      description: [
        'Lead frontend engineer for testbook.com/en-us; built the portal from scratch in React, Next.js, and Tailwind with full SSR & SEO support',
        'Containerized and deployed the micro-frontend on GCP using Docker and Jenkins CI/CD pipelines',
        'Optimised bundle size and Core Web Vitals, improving LCP by 35%',
        'Awarded “Rockstar Rookie” (Jan 2025) for delivering ahead of schedule'
      ]
    },
    {
      company: 'Tata Consultancy Services (TCS)',
      position: 'Software Engineer',
      location: 'Delhi, India',
      period: 'Jun 2023 – Sep 2024',
      description: [
        'Modernised Government e-Marketplace (GeM), India’s largest e-commerce platform',
        'Implemented Angular & React performance optimisations, reducing initial load time by 40%',
        'Integrated RESTful Node.js APIs to streamline buyer-seller workflows',
        'Recognised as “Star Performer” (Feb 2024) for outstanding contribution'
      ]
    },
    {
      company: 'Accenture',
      position: 'Associate Software Engineer',
      location: 'Gurgaon, India',
      period: 'Aug 2021 – May 2023',
      description: [
        'Developed responsive React and Angular modules adhering to WCAG accessibility guidelines',
        'Built and maintained Node.js/Express services, boosting feature turnaround times',
        'Collaborated with UX teams via Figma to translate wireframes into pixel-perfect UIs',
        'Ensured cross-browser compatibility and achieved 95% unit-test coverage'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-1">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <Building size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-300 text-sm flex items-start gap-2"
                    >
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
