import React from 'react';
import { Code, Database, Cloud, Globe, Smartphone, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      icon: <Database className="text-green-400" size={24} />,
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'Python', 'Java', 'MongoDB', 'MySQL', 'SQL']
    },
    {
      icon: <Cloud className="text-purple-400" size={24} />,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'EC2', 'S3', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions']
    },
    {
      icon: <Globe className="text-orange-400" size={24} />,
      title: 'Web Technologies',
      skills: ['REST APIs', 'GraphQL', 'WebSockets', 'JSON', 'Responsive Design']
    },
    {
      icon: <Smartphone className="text-pink-400" size={24} />,
      title: 'Mobile Development',
      skills: ['React Native']
    },
    {
      icon: <GitBranch className="text-yellow-400" size={24} />,
      title: 'Tools & Frameworks',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Swagger', 'Jest', 'Figma']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-200">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-blue-600/20 hover:text-blue-400 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
