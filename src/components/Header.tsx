
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-defender-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">VO</span>
          </div>
          <span className="text-2xl font-black text-defender-blue-800">VigilantOne</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#features" className="text-gray-600 hover:text-defender-blue-600 transition-colors font-semibold">Features</Link>
          <Link to="/defender-family" className="text-gray-600 hover:text-defender-blue-600 transition-colors font-semibold">Family Protection</Link>
          <a href="#testimonials" className="text-gray-600 hover:text-defender-blue-600 transition-colors font-semibold">Reviews</a>
          <a href="#contact" className="text-gray-600 hover:text-defender-blue-600 transition-colors font-semibold">Contact</a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 focus:outline-none">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* CTA Button (Always visible) */}
        <div className="hidden md:block">
          <Button className="bg-defender-green-600 hover:bg-defender-green-700 text-white px-8 py-3 rounded-xl transition-colors font-bold text-lg shadow-lg hover:shadow-xl">
            Download Now
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link to="/#features" className="block text-gray-700 font-medium hover:text-defender-blue-600">Features</Link>
          <Link to="/defender-family" className="block text-gray-700 font-medium hover:text-defender-blue-600">Family Protection</Link>
          <a href="#testimonials" className="block text-gray-700 font-medium hover:text-defender-blue-600">Reviews</a>
          <a href="#contact" className="block text-gray-700 font-medium hover:text-defender-blue-600">Contact</a>
          <Button className="w-full mt-2 bg-defender-green-600 hover:bg-defender-green-700 text-white py-3 rounded-xl font-bold">
            Download Now
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
