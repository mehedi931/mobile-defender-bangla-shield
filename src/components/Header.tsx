
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-defender-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">VO</span>
          </div>
          <span className="text-2xl font-black text-defender-blue-800">VigilantOne</span>
        </Link>
        
        <nav className="flex flex-wrap items-center space-x-4">

          <Link to="/#features" className="text-gray-600 hover:text-defender-blue-600 transition-colors font-semibold">Features</Link>
          <Link to="/defender-family" className="text-gray-600 hover:text-defender-blue-600 transition-colors font-semibold">Family Protection</Link>
          <a href="#testimonials" className="text-gray-600 hover:text-defender-blue-600 transition-colors font-semibold">Reviews</a>
          <a href="#contact" className="text-gray-600 hover:text-defender-blue-600 transition-colors font-semibold">Contact</a>
        </nav>

        <Button className="bg-defender-green-600 hover:bg-defender-green-700 text-white px-8 py-3 rounded-xl transition-colors font-bold text-lg shadow-lg hover:shadow-xl">
          Download Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
