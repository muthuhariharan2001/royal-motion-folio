
import React from 'react';
import Navigation from '../components/Navigation';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <ProjectsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
