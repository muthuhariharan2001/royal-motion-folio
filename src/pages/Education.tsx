
import React from 'react';
import Navigation from '../components/Navigation';
import DraggableCard from '../components/DraggableCard';
import Footer from '../components/Footer';
import { GraduationCap, Calendar, Award, BookOpen, Star, Trophy, Zap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Computer Science',
      school: 'Stanford University',
      period: '2020 - 2022',
      gpa: '3.9/4.0',
      description: 'Specialized in AI and Machine Learning with focus on deep learning and neural networks.',
      achievements: ['Dean\'s List', 'Research Assistant', 'Published 3 papers'],
      icon: Trophy,
      color: 'bg-royal-600'
    },
    {
      degree: 'Bachelor of Computer Engineering',
      school: 'MIT',
      period: '2016 - 2020',
      gpa: '3.8/4.0',
      description: 'Strong foundation in computer science fundamentals and software engineering.',
      achievements: ['Summa Cum Laude', 'IEEE Student Member', 'Hackathon Winner'],
      icon: GraduationCap,
      color: 'bg-gold-600'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <DraggableCard id="education-title" className="text-center mb-16 floating">
              <div className="flex items-center justify-center mb-4">
                <GraduationCap className="text-royal-400 mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold gradient-text">Education</h1>
              </div>
              <p className="text-xl text-gray-400">My academic journey and achievements</p>
            </DraggableCard>

            <div className="space-y-8">
              {educationData.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <DraggableCard key={index} id={`education-${index}`} className="premium-card animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 ${edu.color} rounded-full flex items-center justify-center animate-pulse-glow`}>
                          <IconComponent className="text-white" size={24} />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-2xl font-bold text-white flex items-center">
                            {edu.degree}
                            <Star className="ml-2 text-gold-400" size={20} />
                          </h3>
                          <div className="flex items-center text-gold-400 mt-2 md:mt-0">
                            <Calendar size={16} className="mr-2" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        
                        <h4 className="text-xl text-royal-300 mb-2">{edu.school}</h4>
                        <div className="flex items-center mb-4">
                          <Award size={16} className="text-gold-400 mr-2" />
                          <span className="text-gold-400 font-semibold">GPA: {edu.gpa}</span>
                        </div>
                        
                        <p className="text-gray-400 mb-4">{edu.description}</p>
                        
                        <div>
                          <h5 className="text-white font-semibold mb-2 flex items-center">
                            <Zap size={16} className="mr-2 text-gold-400" />
                            Key Achievements
                          </h5>
                          <ul className="list-none text-gray-400 space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-center">
                                <BookOpen size={14} className="mr-2 text-royal-400" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </DraggableCard>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Education;
