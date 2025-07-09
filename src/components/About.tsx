import React from 'react';
import { Code, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Software Engineer with a strong foundation in computer science and a love for creating innovative solutions. Currently working at Classplus as a SDE-2, I specialize in full-stack development and modern web technologies.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in software development has led me to work with various technologies, from frontend frameworks to backend systems, always striving to deliver high-quality, scalable solutions that make a real impact.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <MapPin size={20} />
                  <span>Delhi, India</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <Briefcase size={20} />
                  <span>Available for Projects</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-blue-400" size={24} />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">Bachelor of Technology</h4>
                  <p className="text-blue-400">Electronics and Electrical Engineering</p>
                  <p className="text-gray-400">Maharaja Agrasen Institute of Technology</p>
                </div>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-purple-400" size={24} />
                  <h3 className="text-xl font-semibold">Current Role</h3>
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">Software Engineer (SDE-2)</h4>
                  <p className="text-purple-400">Classplus</p>
                  <p className="text-gray-400">October 2024 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;