import { Layout } from "@/components/Layout";
import { IPhoneFrame } from "@/components/IPhoneFrame";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GlassSection } from "@/components/GlassCard";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    business: "Business Coach",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_1"
  },
  {
    name: "Priya Sharma",
    business: "Real Estate Agent",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_2"
  },
  {
    name: "Amit Patel",
    business: "Fitness Studio Owner",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_3"
  },
  {
    name: "Sneha Gupta",
    business: "Financial Advisor",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_4"
  },
  {
    name: "Vikram Singh",
    business: "Event Planner",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_5"
  },
  {
    name: "Ananya Reddy",
    business: "Digital Agency Owner",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_6"
  }
];

export default function Testimonials() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-primary" />
              Customer Success Stories
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              What Our Customers Are{" "}
              <span className="text-primary">Saying</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Real stories from real business owners who transformed their operations with Ai Bunty.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Videos Grid */}
      <GlassSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 justify-items-center">
            {testimonials.map((testimonial, index) => (
              <IPhoneFrame
                key={index}
                youtubeUrl={testimonial.youtubeUrl}
                customerName={testimonial.name}
                businessType={testimonial.business}
              />
            ))}
          </div>
        </div>
      </GlassSection>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join thousands of business owners who are growing with Ai Bunty.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              asChild
            >
              <Link to="/book-demo">Book Your Free Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
