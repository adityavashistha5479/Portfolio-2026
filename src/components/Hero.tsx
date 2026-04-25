import React from 'react';
import { ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Aditya Vashistha
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-up">
            Senior Full Stack Developer & Applied AI Engineer
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Specializing in building ultra-low latency AI agents, high-performance RAG systems, 
            and scalable enterprise web applications. Currently pushing the boundaries of Applied AI at Welocalize.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-300">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
            
            <a
              href="https://www.linkedin.com/in/adityavashistha5479/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <ExternalLink size={20} />
              View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;