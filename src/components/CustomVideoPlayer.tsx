
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  url: string;
  description: string;
}

interface CustomVideoPlayerProps {
  videos: Video[];
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Shuffle videos on mount
  const [shuffledVideos, setShuffledVideos] = useState<Video[]>([]);

  useEffect(() => {
    const shuffled = [...videos].sort(() => Math.random() - 0.5);
    setShuffledVideos(shuffled);
  }, [videos]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [currentVideoIndex]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % shuffledVideos.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + shuffledVideos.length) % shuffledVideos.length);
    setIsPlaying(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (shuffledVideos.length === 0) {
    return <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
      <p className="text-gray-400">Loading videos...</p>
    </div>;
  }

  return (
    <div className="w-full">
      <div className="relative bg-black rounded-lg overflow-hidden mb-6">
        <video
          ref={videoRef}
          src={shuffledVideos[currentVideoIndex]?.url}
          className="w-full aspect-video object-cover"
          onEnded={nextVideo}
        />
        
        {/* Video Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <button
                onClick={prevVideo}
                className="video-control-btn p-2"
                title="Previous Video"
              >
                <SkipBack className="w-5 h-5 text-white" />
              </button>
              
              <button
                onClick={togglePlay}
                className="video-control-btn p-3"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </button>
              
              <button
                onClick={nextVideo}
                className="video-control-btn p-2"
                title="Next Video"
              >
                <SkipForward className="w-5 h-5 text-white" />
              </button>
              
              <button
                onClick={toggleMute}
                className="video-control-btn p-2"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
            
            <div className="text-sm text-white">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-1">
            <div
              className="bg-royal-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
            />
          </div>
        </div>
      </div>
      
      {/* Current Video Info */}
      <div className="mb-4">
        <h4 className="text-xl font-semibold text-white mb-2">
          {shuffledVideos[currentVideoIndex]?.title}
        </h4>
        <p className="text-gray-400">
          {shuffledVideos[currentVideoIndex]?.description}
        </p>
      </div>
      
      {/* Video Counter */}
      <div className="text-center text-sm text-gray-500">
        Video {currentVideoIndex + 1} of {shuffledVideos.length}
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
