
import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import DraggableCard from './DraggableCard';

const AboutSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Array of videos - you can modify this later
  const videos = [
    {
      id: 1,
      title: 'Introduction Video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video
      thumbnail: '/placeholder.svg',
      description: 'Get to know me and my journey'
    },
    {
      id: 2,
      title: 'Project Showcase',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video
      thumbnail: '/placeholder.svg',
      description: 'Explore my latest projects'
    },
    {
      id: 3,
      title: 'Skills Demo',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video
      thumbnail: '/placeholder.svg',
      description: 'Watch me code and solve problems'
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

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

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
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden mb-6 bg-gray-900">
                <iframe
                  src={videos[currentVideoIndex].url}
                  title={videos[currentVideoIndex].title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
              
              {/* Video Controls */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevVideo}
                    className="video-control-btn"
                    title="Previous Video"
                  >
                    <SkipBack className="w-4 h-4 text-white" />
                  </button>
                  
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="video-control-btn"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-white" />
                    ) : (
                      <Play className="w-4 h-4 text-white" />
                    )}
                  </button>
                  
                  <button
                    onClick={nextVideo}
                    className="video-control-btn"
                    title="Next Video"
                  >
                    <SkipForward className="w-4 h-4 text-white" />
                  </button>
                </div>
                
                <div className="text-sm text-gray-400">
                  {currentVideoIndex + 1} / {videos.length}
                </div>
              </div>
              
              {/* Current Video Info */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-1">
                  {videos[currentVideoIndex].title}
                </h4>
                <p className="text-sm text-gray-400">
                  {videos[currentVideoIndex].description}
                </p>
              </div>
            </div>
            
            {/* Video Thumbnails */}
            <div className="flex gap-3 justify-center">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`relative w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentVideoIndex 
                      ? 'ring-2 ring-royal-500 scale-105' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                  title={video.title}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  {index === currentVideoIndex && (
                    <div className="absolute inset-0 bg-royal-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-royal-500 rounded-full"></div>
                    </div>
                  )}
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
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-royal-600/30 text-royal-300 rounded-full text-sm font-medium border border-royal-500/30">
                Full-Stack Developer
              </span>
              <span className="px-4 py-2 bg-gold-600/30 text-gold-300 rounded-full text-sm font-medium border border-gold-500/30">
                UI/UX Enthusiast
              </span>
              <span className="px-4 py-2 bg-royal-600/30 text-royal-300 rounded-full text-sm font-medium border border-royal-500/30">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-gold-600/30 text-gold-300 rounded-full text-sm font-medium border border-gold-500/30">
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
