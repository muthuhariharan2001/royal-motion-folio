
import React, { useState } from 'react';
import DraggableCard from './DraggableCard';

const AboutSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Array of videos - you can modify this later
  const videos = [
    {
      id: 1,
      title: 'Introduction Video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video
      thumbnail: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Project Showcase',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video
      thumbnail: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Skills Demo',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video
      thumbnail: '/placeholder.svg'
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
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-royal-900/20 to-gold-900/20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <DraggableCard id="about-header" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </DraggableCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <DraggableCard id="about-video" className="premium-card">
            <div className="aspect-video rounded-lg overflow-hidden mb-6">
              <iframe
                src={videos[currentVideoIndex].url}
                title={videos[currentVideoIndex].title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
            
            {/* Video Thumbnails */}
            <div className="flex gap-4 justify-center">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentVideoIndex 
                      ? 'ring-2 ring-royal-500 scale-105' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </DraggableCard>

          {/* Text Section */}
          <DraggableCard id="about-text" className="premium-card">
            <h3 className="text-2xl font-bold text-white mb-6">
              Who I Am & What I'm Capable Of
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {aboutText.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-royal-600/30 text-royal-300 rounded-full text-sm">
                Full-Stack Developer
              </span>
              <span className="px-4 py-2 bg-gold-600/30 text-gold-300 rounded-full text-sm">
                UI/UX Enthusiast
              </span>
              <span className="px-4 py-2 bg-royal-600/30 text-royal-300 rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-gold-600/30 text-gold-300 rounded-full text-sm">
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
