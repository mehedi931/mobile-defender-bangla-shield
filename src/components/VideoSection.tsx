
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
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/placeholder.svg"
              preload="metadata"
            >
              <source src="/lovable-uploads/mobile-defender-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Video overlay with play button for custom styling */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none">
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold mb-2">Mobile Defender Demo</h3>
              <p className="text-sm opacity-80">See how easy it is to protect your device</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
