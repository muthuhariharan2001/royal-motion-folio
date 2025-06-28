
import React from 'react';
import Navigation from '../components/Navigation';
import DraggableCard from '../components/DraggableCard';
import Footer from '../components/Footer';
import { Lightbulb, Target, TrendingUp, Users, CheckCircle, MessageCircle } from 'lucide-react';

const Consulting = () => {
  const consultingServices = [
    {
      icon: Lightbulb,
      title: 'Technical Strategy',
      description: 'Get expert guidance on technology choices and architectural decisions.',
      benefits: ['Technology Assessment', 'Architecture Planning', 'Best Practices', 'Risk Mitigation']
    },
    {
      icon: Target,
      title: 'Project Planning',
      description: 'Plan and structure your development projects for maximum success.',
      benefits: ['Timeline Estimation', 'Resource Planning', 'Milestone Definition', 'Risk Assessment']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize your existing applications for better performance.',
      benefits: ['Code Review', 'Performance Audit', 'Optimization Strategies', 'Monitoring Setup']
    },
    {
      icon: Users,
      title: 'Team Mentoring',
      description: 'Help your development team grow and improve their skills.',
      benefits: ['Code Reviews', 'Best Practices Training', 'Career Guidance', 'Skill Development']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understand your challenges and goals',
      icon: MessageCircle
    },
    {
      step: '02',
      title: 'Analysis',
      description: 'Analyze current state and identify opportunities',
      icon: Target
    },
    {
      step: '03',
      title: 'Strategy',
      description: 'Develop comprehensive solution strategy',
      icon: Lightbulb
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Execute and monitor the solution',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <DraggableCard id="consulting-header" className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
                Technology Consulting
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Strategic guidance to help your business leverage technology effectively
              </p>
            </DraggableCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {consultingServices.map((service, index) => (
                <DraggableCard key={service.title} id={`consulting-${index}`} className="premium-card">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-royal-600 rounded-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </DraggableCard>
              ))}
            </div>

            <DraggableCard id="consulting-process" className="premium-card mb-16">
              <h3 className="text-3xl font-bold text-white mb-12 text-center">Consulting Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((phase, index) => (
                  <div key={phase.step} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-royal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-xs font-bold text-black">
                        {phase.step}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{phase.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{phase.description}</p>
                  </div>
                ))}
              </div>
            </DraggableCard>

            <DraggableCard id="consulting-expertise" className="premium-card">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Areas of Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Web Technologies', items: ['React', 'Node.js', 'Python', 'Cloud Platforms'] },
                  { title: 'Mobile Development', items: ['React Native', 'Flutter', 'iOS', 'Android'] },
                  { title: 'DevOps & Infrastructure', items: ['Docker', 'AWS', 'CI/CD', 'Monitoring'] }
                ].map((area, index) => (
                  <div key={area.title} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-white mb-4">{area.title}</h4>
                    <ul className="space-y-2">
                      {area.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-400 flex items-center gap-2">
                          <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default Consulting;
