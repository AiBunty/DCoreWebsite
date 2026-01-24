import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureItem, FeatureCategory } from "@/components/FeatureShowcase";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center py-12 text-muted-foreground">
            No features found in this category.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features to Scale Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover all the tools Ai Bunty offers to help you grow, automate, and succeed.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
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
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 z-10 p-2 rounded-full hover:bg-accent transition-colors duration-200"
            aria-label="Previous feature"
          >
            <ChevronLeft className="w-8 h-8 text-primary" />
          </button>

          {/* Carousel Card */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-medium border border-border min-h-[500px] md:min-h-[450px] flex flex-col">
            {currentFeature && (
              <>
                {/* Image Container */}
                <div className="flex-shrink-0 mb-6 rounded-lg overflow-hidden bg-muted h-64 md:h-72 flex items-center justify-center">
                  <img
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content Container */}
                <div className="flex-grow flex flex-col">
                  {/* Title with Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      {currentFeature.icon && (
                        <currentFeature.icon className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
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
                        <p className="text-muted-foreground text-sm leading-relaxed">
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
                <div className="text-center mt-4 text-sm text-muted-foreground">
                  {currentIndex + 1} / {filteredFeatures.length}
                </div>
              </>
            )}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 z-10 p-2 rounded-full hover:bg-accent transition-colors duration-200"
            aria-label="Next feature"
          >
            <ChevronRight className="w-8 h-8 text-primary" />
          </button>
        </div>

        {/* Mobile Navigation Hint */}
        <div className="text-center mt-8 text-xs text-muted-foreground md:hidden">
          Swipe or use arrows to navigate
        </div>
      </div>
    </section>
  );
}
