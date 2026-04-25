import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Smart Scheduler AI Agent',
      description: 'A voice-enabled AI assistant using OpenAI Realtime API and FastAPI. Features ultra-low latency (<500ms) and direct Google Calendar integration.',
      tech: ['Python', 'FastAPI', 'OpenAI Realtime API', 'WebSockets', 'React', 'TypeScript'],
      liveUrl: 'https://github.com/adityavashistha5479/smart-scheduler-ai-agent',
      githubUrl: 'https://github.com/adityavashistha5479/smart-scheduler-ai-agent',
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      title: 'AI Knowledge Engine',
      description: 'Sophisticated RAG system for querying PDFs with semantic search, streaming responses, and source-grounded answers.',
      tech: ['LangChain', 'FAISS', 'OpenAI', 'Next.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/adityavashistha5479',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'CryptoBuddy',
      description: 'Cryptocurrency tracking and portfolio management application with real-time market data and analytics.',
      tech: ['React', 'TypeScript', 'Chart.js', 'CoinGecko API', 'Firebase'],
      liveUrl: 'https://cryptobuddy5479.web.app/',
      githubUrl: 'https://github.com/adityavashistha5479',
      gradient: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/70 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
              >
                <div className={`h-32 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                  <div className="text-white text-2xl font-bold opacity-80">
                    {project.title.substring(0, 2)}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;