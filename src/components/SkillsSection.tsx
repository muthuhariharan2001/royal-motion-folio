
import React from 'react';
import DraggableCard from './DraggableCard';

const SkillsSection = () => {
  const skills = [
    { name: 'React.js', level: 95, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'Python', level: 88, color: 'bg-yellow-500' },
    { name: 'AWS', level: 80, color: 'bg-orange-500' },
    { name: 'Docker', level: 82, color: 'bg-cyan-500' },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <DraggableCard id="skills-title" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-400">Technologies I master and love working with</p>
        </DraggableCard>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <DraggableCard key={skill.name} id={`skill-${index}`} className="premium-card">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-gold-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out animate-pulse`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </DraggableCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
