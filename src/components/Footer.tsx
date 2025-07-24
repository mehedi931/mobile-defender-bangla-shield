import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-defender-blue-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-defender-blue-900 font-bold">VO</span>
              </div>
              <span className="text-2xl font-bold">VigilantOne</span>
            </div>
            <p className="text-defender-blue-200 mb-6 leading-relaxed">
              Bangladesh's most trusted mobile cybersecurity app. Protecting your digital life with advanced threat detection and user-friendly guidance in Bangla and English.
            </p>
            <p className="text-sm text-defender-blue-300 mb-4">
              বাংলাদেশের সবচেয়ে বিশ্বস্ত মোবাইল সাইবার নিরাপত্তা অ্যাপ।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-defender-blue-200 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-defender-blue-200 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-defender-blue-200 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="text-defender-blue-200 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-defender-blue-200 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info and Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-defender-blue-300">📧</span>
                <span className="text-defender-blue-200">websales@bengalmobileqa.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-defender-blue-300">📞</span>
                <span className="text-defender-blue-200">+8801911614074</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-defender-blue-300">📍</span>
                <span className="text-defender-blue-200">53, Purana Paltan (2nd Floor)<br />Dhaka-1000, Bangladesh</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/bengal-mobile-qa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-defender-blue-800 rounded-lg flex items-center justify-center hover:bg-defender-blue-700 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.facebook.com/bengalmobileqa02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-defender-blue-800 rounded-lg flex items-center justify-center hover:bg-defender-blue-700 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-defender-blue-800 mt-12 pt-8 text-center">
          <p className="text-defender-blue-200">
            © 2025 VigilantOne. All rights reserved. | Made with ❤️ for Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
