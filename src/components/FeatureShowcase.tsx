import { useState } from "react";
import { LucideIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type FeatureCategory = "all" | "marketing" | "sales" | "automation" | "education" | "team";

export interface FeatureItem {
  id: string;
  title: string;
  icon: LucideIcon;
  image: string;
  category?: FeatureCategory;
  points: { heading: string; description: string }[];
}

interface FeatureShowcaseProps {
  features: FeatureItem[];
}

const categoryLabels: Record<FeatureCategory, string> = {
  all: "All",
  marketing: "Marketing",
  sales: "Sales",
  automation: "Automation",
  education: "Education",
  team: "Team & Branding",
};

export function FeatureShowcase({ features }: FeatureShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<FeatureCategory>("all");

  const filteredFeatures = activeCategory === "all" 
    ? features 
    : features.filter(f => f.category === activeCategory);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
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

        <div className="space-y-12">
          {filteredFeatures.map((feature, index) => {
            const isReversed = index % 2 === 1;
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className={`grid lg:grid-cols-[280px_1fr] gap-6 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image - Smaller */}
                <div className={`${isReversed ? "lg:order-2" : "lg:order-1"} flex items-center justify-center`}>
                  <div className="relative rounded-xl overflow-hidden shadow-medium hover:shadow-hover transition-shadow duration-300 w-full max-w-[280px]">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {feature.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="bg-card rounded-lg p-3 border border-border">
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
              </div>
            );
          })}
        </div>

        {filteredFeatures.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No features found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
