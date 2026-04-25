import React from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-red-400" size={24} />,
      label: 'Email',
      value: 'adityavashistha5479@gmail.com',
      href: 'mailto:adityavashistha5479@gmail.com'
    },
    {
      icon: <Linkedin className="text-blue-400" size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/adityavashistha5479',
      href: 'https://www.linkedin.com/in/adityavashistha5479/'
    },
    {
      icon: <Github className="text-gray-400" size={24} />,
      label: 'GitHub',
      value: 'github.com/adityavashistha5479',
      href: 'https://github.com/adityavashistha5479'
    },
    {
      icon: <ExternalLink className="text-green-400" size={24} />,
      label: 'Portfolio',
      value: 'adityavashistha.netlify.app',
      href: 'https://adityavashistha.netlify.app/'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-lg text-gray-300 mb-4">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <p className="text-gray-400">
              Whether you have a project in mind or just want to chat, feel free to reach out!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-gray-800/70 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {contact.icon}
                <div>
                  <h3 className="font-semibold text-gray-200">{contact.label}</h3>
                  <p className="text-gray-400 text-sm">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="mailto:adityavashistha5479@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;