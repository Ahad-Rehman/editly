"use client";

import { useState } from "react";

export default function OurVideos() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const videos = [
    {
      title: "Wedding Teaser",
      videoUrl: "https://github.com/Ahad-Rehman/editly/releases/download/v1.0.0/video1.mp4",
      duration: "2:30",
    },
    {
      title: "George&Gordon Wedding",
      videoUrl: "https://github.com/Ahad-Rehman/editly/releases/download/v1.0.0/video2.mp4",
      duration: "1:45",
    },
    {
      title: "Katelyn & Andrew's Wedding",
      videoUrl: "https://github.com/Ahad-Rehman/editly/releases/download/v1.0.0/video3.mp4",
      duration: "3:15",
    },
  ];

  return (
    <section id="videos" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Videos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our latest video projects showcasing creativity and technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => setSelectedVideo(index)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <div className="aspect-video relative overflow-hidden bg-gray-800">
                {/* Video element */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={video.videoUrl}
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center">
                    <svg className="w-10 h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded-full text-sm">
                  {video.duration}
                </div>
              </div>

              <div className="p-6 bg-gray-900/50 border border-gray-800 group-hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{video.title}</h3>
                  <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {video.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-black font-semibold px-8 py-3 rounded-full transition-all hover:scale-105">
            View All Videos
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-[5px] animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar with Back and Close buttons */}
            <div className="flex items-center justify-between px-4 py-3 bg-black/80 rounded-t-xl shrink-0">
              {/* Back button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="flex items-center gap-2 text-white hover:text-black transition-colors bg-gray-800 hover:bg-primary px-6 py-2 rounded-full"
              >
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                <span className="font-bold text-base">Back</span>
              </button>

              {/* Video title */}
              <h3 className="text-lg md:text-2xl font-bold text-white absolute left-1/2 -translate-x-1/2">{videos[selectedVideo].title}</h3>

              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-white hover:text-black transition-colors bg-gray-800 hover:bg-primary p-2 rounded-full ml-auto"
              >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Video player */}
            <div className="flex-1 flex items-center justify-center bg-black rounded-b-xl overflow-hidden min-h-0">
              <video
                className="w-full h-full"
                src={videos[selectedVideo].videoUrl}
                controls
                autoPlay
                playsInline
                controlsList="nodownload"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
