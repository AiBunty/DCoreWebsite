import { Zap, Shield, Gauge, Palette, Code, BarChart3 } from "lucide-react";
import { FeatureCardCompact } from "./FeatureCardCompact";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Deploy solutions in minutes, not months'
  },
  {
    icon: Shield,
    title: 'Enterprise Secure',
    description: 'Bank-level security and compliance'
  },
  {
    icon: Gauge,
    title: 'Scalable',
    description: 'Grows with your business needs'
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Modern interface that users love'
  },
  {
    icon: Code,
    title: 'Easy Integration',
    description: 'Plug-and-play with your stack'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Deep insights into your data'
  }
];

export function FeaturesSection() {
  return (
    <Section>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Powerful Features
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Everything you need to succeed.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <FeatureCardCompact
                key={feature.title}
                icon={<Icon className="h-4 w-4" />}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
