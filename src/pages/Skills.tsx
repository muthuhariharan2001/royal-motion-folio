
import React from 'react';
import Navigation from '../components/Navigation';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';

const Skills = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <SkillsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Skills;
