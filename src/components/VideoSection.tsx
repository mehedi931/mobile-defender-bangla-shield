
const VideoSection = () => {
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
        
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
          <div className="aspect-video">
            {/* Placeholder for video - replace with actual video once uploaded */}
            <div className="w-full h-full bg-gradient-to-br from-defender-blue-800 to-defender-blue-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Mobile Defender Demo</h3>
                <p className="text-lg opacity-80 mb-4">See how easy it is to protect your device</p>
                <p className="text-sm opacity-60">Video coming soon</p>
              </div>
            </div>
            
            {/* Uncomment this when you have the video file uploaded to your project */}
            {/* 
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/placeholder.svg"
              preload="metadata"
            >
              <source src="/your-video-file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            */}
          </div>
          
          {/* Video overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none">
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold mb-2">Mobile Defender Demo</h3>
              <p className="text-sm opacity-80">Detect • Enhance Awareness • Fix</p>
            </div>
          </div>
        </div>
        
        {/* Instructions for video upload */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            To add your video: Download the file from Google Drive, then upload it to your project files
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
