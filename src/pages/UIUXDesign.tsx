
import React from 'react';
import Navigation from '../components/Navigation';
import DraggableCard from '../components/DraggableCard';
import Footer from '../components/Footer';
import { Palette, Eye, Users, Zap, Layers, Heart } from 'lucide-react';

const UIUXDesign = () => {
  const designServices = [
    {
      icon: Eye,
      title: 'User Research',
      description: 'Understand your users through comprehensive research and analysis.',
      details: ['User Interviews', 'Surveys & Analytics', 'Persona Development', 'Journey Mapping']
    },
    {
      icon: Layers,
      title: 'Wireframing & Prototyping',
      description: 'Create detailed wireframes and interactive prototypes.',
      details: ['Low-Fi Wireframes', 'High-Fi Mockups', 'Interactive Prototypes', 'Design Systems']
    },
    {
      icon: Palette,
      title: 'Visual Design',
      description: 'Craft beautiful and functional user interfaces.',
      details: ['Brand Guidelines', 'Color Schemes', 'Typography', 'Icon Design']
    },
    {
      icon: Zap,
      title: 'Usability Testing',
      description: 'Test and refine designs based on real user feedback.',
      details: ['A/B Testing', 'User Testing', 'Accessibility Audit', 'Performance Analysis']
    }
  ];

  const principles = [
    { icon: Users, title: 'User-Centered', desc: 'Always prioritize user needs and behaviors' },
    { icon: Eye, title: 'Visual Hierarchy', desc: 'Guide users through clear information architecture' },
    { icon: Heart, title: 'Emotional Design', desc: 'Create delightful and memorable experiences' },
    { icon: Zap, title: 'Performance', desc: 'Optimize for speed and efficiency' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <DraggableCard id="uiux-header" className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
                UI/UX Design
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Crafting intuitive and beautiful digital experiences that users love
              </p>
            </DraggableCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {designServices.map((service, index) => (
                <DraggableCard key={service.title} id={`design-service-${index}`} className="premium-card">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-royal-600 rounded-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-gray-400">
                        <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </DraggableCard>
              ))}
            </div>

            <DraggableCard id="design-principles" className="premium-card mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Design Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {principles.map((principle, index) => (
                  <div key={principle.title} className="text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className="inline-flex p-3 bg-gold-600 rounded-full mb-4">
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{principle.title}</h4>
                    <p className="text-gray-400 text-sm">{principle.desc}</p>
                  </div>
                ))}
              </div>
            </DraggableCard>

            <DraggableCard id="design-tools" className="premium-card">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Design Tools & Software</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'InVision', 'Principle', 'Framer'].map((tool) => (
                  <div key={tool} className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className="text-2xl mb-2">🎨</div>
                    <span className="text-white font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </DraggableCard>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UIUXDesign;
