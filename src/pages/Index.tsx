import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BentoSection from "@/components/BentoSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageCarouselSection from "@/components/ImageCarouselSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <LogosSection />
      <AboutSection />
      <ProjectsSection />
      <BentoSection />
      <ServicesSection />
      <CTASection />
      <ProcessSection />
      <ImageCarouselSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
