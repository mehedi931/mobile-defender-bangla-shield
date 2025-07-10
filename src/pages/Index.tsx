
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Features from "@/components/Features";
import AppModules from "@/components/AppModules";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import TypingAnimation from "@/components/TypingAnimation";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <Hero />
      
      {/* Premium Version Announcement */}
      <section className="py-8 px-4 bg-defender-blue-900">
        <div className="container mx-auto text-center">
          <TypingAnimation 
            text="Mobile Defender Premium Version Coming Soon..."
            speed={80}
            className="text-2xl md:text-3xl font-bold text-defender-green-400"
          />
        </div>
      </section>
      
      <VideoSection />
      <Features />
      <AppModules />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
