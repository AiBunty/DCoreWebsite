import { LucideIcon } from "lucide-react";

export interface FeatureItem {
  id: string;
  title: string;
  icon: LucideIcon;
  image: string;
  points: { heading: string; description: string }[];
}

interface FeatureShowcaseProps {
  features: FeatureItem[];
}

export function FeatureShowcase({ features }: FeatureShowcaseProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features to Scale Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover all the tools Ai Bunty offers to help you grow, automate, and succeed.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1;
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-medium hover:shadow-hover transition-shadow duration-300">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {feature.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="bg-card rounded-xl p-5 border border-border">
                        <h4 className="font-semibold text-primary mb-2">
                          {point.heading}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
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
      </div>
    </section>
  );
}
