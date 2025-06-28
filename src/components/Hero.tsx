
import React from 'react';
import { Button } from '@/components/ui/button';
import DraggableCard from './DraggableCard';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-royal-900/20 to-gold-900/20"></div>
      
      {/* Floating Elements */}
      <DraggableCard id="float-1" className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-royal-500/30 rounded-full blur-sm"></div>
      </DraggableCard>
      
      <DraggableCard id="float-2" className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-24 h-24 bg-gold-500/30 rounded-full blur-sm"></div>
      </DraggableCard>
      
      <DraggableCard id="float-3" className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-20 h-20 bg-royal-400/30 rounded-full blur-sm"></div>
      </DraggableCard>

      <div className="max-w-4xl mx-auto text-center px-4 z-10">
        <DraggableCard id="hero-content" className="premium-card">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Premium</span> Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Crafting elegant digital experiences with cutting-edge technology and creative innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-royal-600 hover:bg-royal-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
          </div>
        </DraggableCard>
      </div>
    </section>
  );
};

export default Hero;
