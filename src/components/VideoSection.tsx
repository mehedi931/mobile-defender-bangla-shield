import React, { useRef, useEffect } from 'react';

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch((e) => console.warn('Autoplay blocked:', e));
          } else {
            videoRef.current.pause();
          }
        }
      },
      {
        threshold: 0.5, // Play when 50% or more visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            See Mobile Defender in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch how Mobile Defender empowers you to detect, understand, and fix security threats on your mobile device.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black max-w-md">
            {/* 9:16 aspect ratio container for mobile video */}
            <div className="aspect-[9/16]">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                poster="/placeholder.svg"
                preload="metadata"
              >
                <source src="/1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Video overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Mobile Defender Demo</h3>
                <p className="text-sm opacity-80">Detect • Enhance Awareness • Fix</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
