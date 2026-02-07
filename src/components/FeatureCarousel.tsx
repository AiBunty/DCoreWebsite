import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureItem, FeatureCategory } from "@/components/FeatureShowcase";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const categoryLabels: Record<FeatureCategory, string> = {
  all: "All",
  marketing: "Marketing",
  sales: "Sales",
  automation: "Automation",
  education: "Education",
  team: "Team & Branding",
};

interface FeatureCarouselProps {
  features: FeatureItem[];
}

export function FeatureCarousel({ features }: FeatureCarouselProps) {
  const [activeCategory, setActiveCategory] = useState<FeatureCategory>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const filteredFeatures = activeCategory === "all" 
    ? features 
    : features.filter(f => f.category === activeCategory);

  const currentFeature = filteredFeatures[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredFeatures.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredFeatures.length) % filteredFeatures.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  // Auto-rotate effect
  useEffect(() => {
    if (!isAutoPlay || filteredFeatures.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredFeatures.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, filteredFeatures.length]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsAutoPlay(true);
  }, [activeCategory]);

  if (filteredFeatures.length === 0) {
    return (
      <Section>
        <Container>
          <div className="text-center py-12 text-muted-foreground">
            No features found in this category.
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Powerful Features to Scale Your Business
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Discover all the tools Ai Bunty offers to help you grow, automate, and succeed.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <Tabs value={activeCategory} onValueChange={(v) => setActiveCategory(v as FeatureCategory)}>
            <TabsList className="flex flex-wrap gap-2 h-auto bg-transparent">
              {(Object.keys(categoryLabels) as FeatureCategory[]).map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border border-border data-[state=inactive]:bg-card"
                >
                  {categoryLabels[category]}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 md:px-0 pointer-events-none z-10">
            <button
              onClick={handlePrev}
              className="pointer-events-auto md:-translate-x-16 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 backdrop-blur-md border border-black/10 flex items-center justify-center cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-white hover:scale-110 active:scale-95"
              aria-label="Previous feature"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-foreground" strokeWidth={2.5} />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto md:translate-x-16 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 backdrop-blur-md border border-black/10 flex items-center justify-center cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-white hover:scale-110 active:scale-95"
              aria-label="Next feature"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-foreground" strokeWidth={2.5} />
            </button>
          </div>

          {/* Carousel Card */}
          <div className="bg-card rounded-xl p-4 md:p-5 shadow-sm border border-border min-h-[480px] md:min-h-[420px] flex flex-col">
            {currentFeature && (
              <>
                {/* Image Container */}
                <div className="flex-shrink-0 mb-4 rounded-lg overflow-hidden bg-white h-56 md:h-72 flex items-center justify-center">
                  <img
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    className="w-full h-full object-contain transition-transform duration-300"
                  />
                </div>

                {/* Content Container */}
                <div className="flex-grow flex flex-col">
                  {/* Title with Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      {currentFeature.icon && (
                        <currentFeature.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      )}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      {currentFeature.title}
                    </h3>
                  </div>

                  {/* Points */}
                  <div className="space-y-3 flex-grow">
                    {currentFeature.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="bg-muted rounded-lg p-3 border border-border">
                        <h4 className="font-semibold text-primary text-sm mb-1">
                          {point.heading}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-snug">
                          {point.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 flex items-center justify-center gap-2">
                  {filteredFeatures.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index);
                        setIsAutoPlay(false);
                        setTimeout(() => setIsAutoPlay(true), 5000);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-primary w-6" : "bg-border"
                      }`}
                      aria-label={`Go to feature ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Feature Counter */}
                <div className="text-center mt-4 text-xs text-muted-foreground">
                  {currentIndex + 1} / {filteredFeatures.length}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation Hint */}
        <div className="text-center mt-6 text-xs text-muted-foreground md:hidden">
          Swipe or use arrows to navigate
        </div>
      </Container>
    </Section>
  );
}
