
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-defender-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">MD</span>
          </div>
          <span className="text-xl font-bold text-defender-blue-800">Mobile Defender</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-defender-blue-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-defender-blue-600 transition-colors">How It Works</a>
          <a href="#testimonials" className="text-gray-600 hover:text-defender-blue-600 transition-colors">Reviews</a>
          <a href="#contact" className="text-gray-600 hover:text-defender-blue-600 transition-colors">Contact</a>
        </nav>

        <Button className="bg-defender-blue-600 hover:bg-defender-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
          Download Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
