
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Features from "@/components/Features";
import AppModules from "@/components/AppModules";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <Hero />
      <VideoSection />
      <Features />
      <AppModules />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
