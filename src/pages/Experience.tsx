
import React from 'react';
import Navigation from '../components/Navigation';
import DraggableCard from '../components/DraggableCard';
import Footer from '../components/Footer';
import { Briefcase, Calendar, MapPin, TrendingUp, Code, Users, Rocket, Star } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS. Managing a team of 5 developers and driving technical architecture decisions.',
      achievements: [
        'Increased application performance by 40%',
        'Led migration to microservices architecture',
        'Mentored 10+ junior developers'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript'],
      icon: Rocket,
      color: 'bg-royal-600'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupX',
      location: 'Remote',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed responsive web applications and mobile apps. Collaborated with design team to implement pixel-perfect UI/UX designs.',
      achievements: [
        'Built 15+ production-ready applications',
        'Reduced load times by 60%',
        'Implemented automated testing pipeline'
      ],
      technologies: ['React', 'Vue.js', 'Flutter', 'Firebase', 'Jest'],
      icon: Code,
      color: 'bg-gold-600'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <DraggableCard id="experience-title" className="text-center mb-16 floating">
              <div className="flex items-center justify-center mb-4">
                <Briefcase className="text-gold-400 mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold gradient-text">Experience</h1>
              </div>
              <p className="text-xl text-gray-400">My professional journey and accomplishments</p>
            </DraggableCard>

            <div className="space-y-8">
              {experienceData.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <DraggableCard key={index} id={`experience-${index}`} className="premium-card animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 ${exp.color} rounded-full flex items-center justify-center animate-pulse-glow`}>
                          <IconComponent className="text-white" size={24} />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white flex items-center">
                              {exp.title}
                              <Star className="ml-2 text-gold-400" size={20} />
                            </h3>
                            <h4 className="text-xl text-royal-300">{exp.company}</h4>
                          </div>
                          <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                            <div className="flex items-center text-gold-400 mb-1">
                              <Calendar size={16} className="mr-2" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                              <MapPin size={16} className="mr-2" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <span className="inline-block px-3 py-1 bg-royal-600/30 text-royal-200 rounded-full text-sm mb-4">
                          {exp.type}
                        </span>
                        
                        <p className="text-gray-400 mb-6">{exp.description}</p>
                        
                        <div className="mb-6">
                          <h5 className="text-white font-semibold mb-3 flex items-center">
                            <TrendingUp size={16} className="mr-2 text-gold-400" />
                            Key Achievements
                          </h5>
                          <ul className="list-none text-gray-400 space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-center">
                                <Users size={14} className="mr-2 text-royal-400" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-white font-semibold mb-3 flex items-center">
                            <Code size={16} className="mr-2 text-royal-400" />
                            Technologies Used
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gold-600/30 text-gold-200 rounded-full text-sm interactive-hover"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
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

export default Experience;
