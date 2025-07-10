
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-defender-blue-900 via-defender-blue-800 to-defender-blue-700 py-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="animate-fade-in">
          {/* Bold headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            Proactive Mobile
            <span className="block text-defender-green-400 text-6xl md:text-8xl">Protection</span>
          </h1>
          
          {/* Bengali tagline */}
          <p className="text-2xl md:text-3xl text-defender-blue-100 mb-4 font-semibold">
            আপনার ডিভাইস, আপনার নিয়ন্ত্রণে
          </p>
          <p className="text-xl md:text-2xl text-defender-blue-200 mb-12 leading-relaxed max-w-4xl mx-auto">
            Not just automatic antivirus — give yourself the power to see what's happening on your device and take meaningful action.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-defender-green-500 hover:bg-defender-green-600 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-bold"
            >
              Download Mobile Defender
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-defender-blue-900 px-10 py-6 text-xl rounded-2xl transition-all duration-300 font-semibold"
            >
              Watch How It Works
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-black text-defender-green-400 mb-2">100K+</div>
              <div className="text-defender-blue-200 font-medium">Protected Users in Bangladesh</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-black text-white mb-2">99.9%</div>
              <div className="text-defender-blue-200 font-medium">Threat Detection Accuracy</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-black text-defender-red-400 mb-2">24/7</div>
              <div className="text-defender-blue-200 font-medium">Real-time Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
