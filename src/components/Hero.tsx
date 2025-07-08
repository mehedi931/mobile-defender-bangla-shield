
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-defender-blue-50 to-defender-blue-100 py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-defender-blue-900 mb-6 leading-tight">
            Your Phone's First Line of Defense
          </h1>
          <p className="text-xl md:text-2xl text-defender-blue-700 mb-8 leading-relaxed">
            Protect your mobile device from threats, harmful apps, and privacy risks with Bangladesh's most trusted cybersecurity app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-defender-blue-600 hover:bg-defender-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Download for Android
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-defender-blue-600 text-defender-blue-600 hover:bg-defender-blue-50 px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              Download for iOS
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-3xl font-bold text-defender-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Users in Bangladesh</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-defender-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Threat Detection Rate</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-defender-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Real-time Protection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
