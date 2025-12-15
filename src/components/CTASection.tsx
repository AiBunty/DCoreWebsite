import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import mascotImage from "@/assets/ai-bunty-mascot.png";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  showMascot?: boolean;
}

export function CTASection({
  title = "Ready to Grow Your Business?",
  subtitle = "Join thousands of businesses using Ai Bunty to automate their growth.",
  ctaText = "Book Free Demo",
  ctaLink = "/book-demo",
  showMascot = true,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {showMascot && (
            <img 
              src={mascotImage} 
              alt="Ai Bunty mascot" 
              className="w-24 h-24 mx-auto mb-6 animate-float drop-shadow-xl"
            />
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to={ctaLink}>{ctaText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
