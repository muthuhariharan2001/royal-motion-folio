
import React from 'react';
import DraggableCard from './DraggableCard';
import CustomVideoPlayer from './CustomVideoPlayer';

const AboutSection = () => {
  // Sample videos - you can modify this later
  const videos = [
    {
      id: 1,
      title: 'Introduction Video',
      url: '/api/placeholder/video/intro.mp4', // Replace with your video URLs
      description: 'Get to know me and my journey in technology'
    },
    {
      id: 2,
      title: 'Project Showcase',
      url: '/api/placeholder/video/projects.mp4', // Replace with your video URLs
      description: 'Explore my latest projects and innovations'
    },
    {
      id: 3,
      title: 'Skills Demonstration',
      url: '/api/placeholder/video/skills.mp4', // Replace with your video URLs
      description: 'Watch me code and solve complex problems'
    },
    {
      id: 4,
      title: 'Development Process',
      url: '/api/placeholder/video/process.mp4', // Replace with your video URLs
      description: 'Behind the scenes of my development workflow'
    }
  ];

  const aboutText = `
    I'm a passionate full-stack developer with a keen eye for creating elegant, 
    user-centric digital experiences. With expertise spanning modern web technologies, 
    I bring ideas to life through clean code and innovative solutions.

    My journey in technology has been driven by curiosity and a constant desire to learn. 
    I specialize in building scalable applications that not only look great but also 
    perform exceptionally well. From conceptualization to deployment, I handle every 
    aspect of the development process with precision and creativity.

    When I'm not coding, you'll find me exploring new technologies, contributing to 
    open-source projects, or sharing knowledge with the developer community. I believe 
    in the power of collaboration and continuous learning.
  `;

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-royal-900/20 to-gold-900/20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <DraggableCard id="about-header" className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get to know the person behind the code
          </p>
        </DraggableCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <DraggableCard id="about-video" className="premium-card">
            <CustomVideoPlayer videos={videos} />
          </DraggableCard>

          {/* Text Section */}
          <DraggableCard id="about-text" className="premium-card">
            <h3 className="text-3xl font-bold text-white mb-8">
              Who I Am & What I'm Capable Of
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              {aboutText.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <span className="px-6 py-3 bg-royal-600/30 text-royal-300 rounded-full text-sm font-medium border border-royal-500/30 hover:bg-royal-600/50 transition-all duration-300">
                Full-Stack Developer
              </span>
              <span className="px-6 py-3 bg-gold-600/30 text-gold-300 rounded-full text-sm font-medium border border-gold-500/30 hover:bg-gold-600/50 transition-all duration-300">
                UI/UX Enthusiast
              </span>
              <span className="px-6 py-3 bg-royal-600/30 text-royal-300 rounded-full text-sm font-medium border border-royal-500/30 hover:bg-royal-600/50 transition-all duration-300">
                Problem Solver
              </span>
              <span className="px-6 py-3 bg-gold-600/30 text-gold-300 rounded-full text-sm font-medium border border-gold-500/30 hover:bg-gold-600/50 transition-all duration-300">
                Open Source Contributor
              </span>
            </div>
          </DraggableCard>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
