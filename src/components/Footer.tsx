import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              TECH<span className="text-blue-400">FOLIO</span>
            </a>
            <p className="mt-2 text-gray-400 text-sm">
              Building exceptional digital experiences
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Sarankumar© {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;