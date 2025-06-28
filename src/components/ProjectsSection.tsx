
import React from 'react';
import { Button } from '@/components/ui/button';
import DraggableCard from './DraggableCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      title: 'AI Dashboard',
      description: 'Modern dashboard with AI-powered analytics and real-time data visualization',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop',
      tech: ['React', 'Python', 'TensorFlow'],
      github: '#',
      live: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      tech: ['React Native', 'Firebase', 'Node.js'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <DraggableCard id="projects-title" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400">Some of my recent work that I'm proud of</p>
        </DraggableCard>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <DraggableCard key={project.title} id={`project-${index}`} className="premium-card group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-royal-600/30 text-royal-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button
                  size="sm"
                  className="bg-royal-600 hover:bg-royal-700 flex-1"
                >
                  GitHub
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black flex-1"
                >
                  Live Demo
                </Button>
              </div>
            </DraggableCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
