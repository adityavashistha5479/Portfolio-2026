import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Aditya Vashistha. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Built with</span>
            <Heart size={16} className="text-red-400" />
            <span>using React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  