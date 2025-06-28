
import React from 'react';
import Navigation from '../components/Navigation';
import DraggableCard from '../components/DraggableCard';
import Footer from '../components/Footer';
import { Smartphone, Tablet, Wifi, Battery, Download, Star } from 'lucide-react';

const MobileApps = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Native Performance',
      description: 'Build apps that feel native to each platform with optimized performance and smooth animations.'
    },
    {
      icon: Tablet,
      title: 'Cross-Platform',
      description: 'Develop once and deploy everywhere with React Native and modern cross-platform frameworks.'
    },
    {
      icon: Wifi,
      title: 'Offline Capability',
      description: 'Create apps that work seamlessly even without internet connection with smart caching strategies.'
    },
    {
      icon: Battery,
      title: 'Battery Optimized',
      description: 'Implement efficient algorithms and optimize resource usage for better battery life.'
    },
    {
      icon: Download,
      title: 'App Store Ready',
      description: 'Handle the complete app store submission process for both iOS and Android platforms.'
    },
    {
      icon: Star,
      title: 'User Experience',
      description: 'Design intuitive interfaces that users love with modern UI/UX principles.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <DraggableCard id="mobile-header" className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
                Mobile App Development
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Creating engaging and performant mobile experiences for iOS and Android
              </p>
            </DraggableCard>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <DraggableCard key={feature.title} id={`feature-${index}`} className="premium-card">
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-royal-600 rounded-full mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </DraggableCard>
              ))}
            </div>

            <DraggableCard id="mobile-process" className="premium-card">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Development Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: '01', title: 'Planning', desc: 'Define requirements and user stories' },
                  { step: '02', title: 'Design', desc: 'Create wireframes and prototypes' },
                  { step: '03', title: 'Development', desc: 'Build and test the application' },
                  { step: '04', title: 'Deployment', desc: 'Launch on app stores' }
                ].map((phase) => (
                  <div key={phase.step} className="text-center">
                    <div className="text-4xl font-bold text-gold-500 mb-4">{phase.step}</div>
                    <h4 className="text-lg font-semibold text-white mb-2">{phase.title}</h4>
                    <p className="text-gray-400 text-sm">{phase.desc}</p>
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

export default MobileApps;
