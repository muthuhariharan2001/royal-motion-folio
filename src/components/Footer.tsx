
import React from 'react';
import { User, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Royal Portfolio</h3>
            <p className="text-gray-400 mb-4">
              Creating premium digital experiences with passion and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-royal-600 rounded-full flex items-center justify-center hover:bg-royal-700 transition-colors">
                <User size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-royal-600 rounded-full flex items-center justify-center hover:bg-royal-700 transition-colors">
                <Mail size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-royal-600 rounded-full flex items-center justify-center hover:bg-royal-700 transition-colors">
                <MapPin size={18} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Consulting</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Royal Portfolio. All rights reserved. Built with passion and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
