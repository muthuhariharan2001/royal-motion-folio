
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold gradient-text mb-6">Royal Portfolio</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating premium digital experiences with passion and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-royal-600 rounded-full flex items-center justify-center hover:bg-royal-700 transition-colors">
                <User size={20} className="text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-royal-600 rounded-full flex items-center justify-center hover:bg-royal-700 transition-colors">
                <Mail size={20} className="text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-royal-600 rounded-full flex items-center justify-center hover:bg-royal-700 transition-colors">
                <MapPin size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-gold-400 transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-gold-400 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/web-development" className="text-gray-400 hover:text-gold-400 transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-apps" className="text-gray-400 hover:text-gold-400 transition-colors">Mobile Apps</Link></li>
              <li><Link to="/uiux-design" className="text-gray-400 hover:text-gold-400 transition-colors">UI/UX Design</Link></li>
              <li><Link to="/consulting" className="text-gray-400 hover:text-gold-400 transition-colors">Consulting</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Royal Portfolio. All rights reserved. Built with passion and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
