import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, User, Briefcase, Code, Contact, MapPin, School, FolderOpen } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: User },
    { name: 'Education', path: '/education', icon: School },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Skills', path: '/skills', icon: Code },
    { name: 'Projects', path: '/projects', icon: FolderOpen },
    { name: 'Contact', path: '/contact', icon: Contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">Royal Portfolio</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                      isActive
                        ? 'bg-royal-600 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-royal-500/20 hover:text-white'
                    }`
                  }
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-royal-500/20 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-effect">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-royal-600 text-white'
                      : 'text-gray-300 hover:bg-royal-500/20 hover:text-white'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
