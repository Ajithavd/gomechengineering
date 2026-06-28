import React, { Suspense } from "react";
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
import ISOSection from "@/components/ISOSection";
import ContactSection from "@/components/ContactSection";

// Lazy-load the Map Section to optimize Lighthouse score and avoid layout shifts
const MapSection = React.lazy(() => import("@/components/MapSection"));

const MapPlaceholder = () => (
  <div className="w-full px-6 md:px-12 lg:px-24 py-12 md:py-16 max-w-[1600px] mx-auto bg-background">
    <div className="w-full h-[380px] sm:h-[500px] lg:h-[650px] rounded-[32px] bg-secondary/40 animate-pulse flex flex-col items-center justify-center gap-3 border border-secondary shadow-lg">
      <div className="w-10 h-10 rounded-full border-[3px] border-primary border-t-transparent animate-spin"></div>
      <span className="text-sm text-muted-foreground font-medium">Loading Map Experience...</span>
    </div>
  </div>
);

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
      <ISOSection />
      <ContactSection />
      <Suspense fallback={<MapPlaceholder />}>
        <MapSection />
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
