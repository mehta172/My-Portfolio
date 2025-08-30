import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-4">
            <span className="text-blue-400">RTL</span>Engineer
          </div>
          
          <p className="text-gray-400 mb-4">
            Designing the future of semiconductor technology, one circuit at a time.
          </p>

          <div className="flex items-center justify-center space-x-1 text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>for the semiconductor industry</span>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-800 text-gray-500 text-sm">
            © 2025 RTL Design Engineer Portfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;