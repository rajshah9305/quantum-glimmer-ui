import { useState, useEffect } from "react";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoading, setIsLoading] = useState(true);

  // Intersection Observer for section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.3, 0.7],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Animation trigger for elements when they come into view
  useEffect(() => {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    // Observe elements with fade-in classes
    const elementsToAnimate = document.querySelectorAll(
      ".fade-in, .fade-in-up, .fade-in-delay-1, .fade-in-delay-2, .fade-in-delay-3"
    );
    
    elementsToAnimate.forEach((element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.opacity = "0";
      htmlElement.style.transform = "translateY(30px)";
      animationObserver.observe(element);
    });

    return () => {
      elementsToAnimate.forEach((element) => {
        animationObserver.unobserve(element);
      });
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />

      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <DashboardSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;