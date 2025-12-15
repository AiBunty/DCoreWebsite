import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import mascotImage from "@/assets/ai-bunty-mascot.png";
import { 
  MessageSquare, 
  Calendar, 
  CreditCard, 
  Users, 
  BarChart3, 
  Zap,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "Auto-replies, follow-ups, and broadcasts that work 24/7",
  },
  {
    icon: Calendar,
    title: "Smart Booking",
    description: "Calendar scheduling with automated reminders",
  },
  {
    icon: CreditCard,
    title: "Payment Collection",
    description: "Razorpay integration with automatic invoicing",
  },
  {
    icon: Users,
    title: "CRM & Pipelines",
    description: "Track every lead from first touch to close",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into your business growth",
  },
  {
    icon: Zap,
    title: "Marketing Funnels",
    description: "High-converting landing pages in minutes",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Meet <span className="text-primary">Ai Bunty</span> — Your AI-Powered Business Growth Partner
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Funnels, CRM, WhatsApp automation, payments, team management & growth tools — all in one powerful platform.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/book-demo">Book Free Demo</Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/compare">Compare Ai Bunty</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src={mascotImage} 
                  alt="Ai Bunty - Your AI Business Assistant" 
                  className="w-72 md:w-96 h-auto animate-float drop-shadow-2xl"
                />
                {/* Speech bubble */}
                <div className="absolute -left-4 md:-left-12 bottom-20 bg-card rounded-2xl shadow-medium p-4 max-w-xs animate-fade-in border border-border">
                  <p className="text-sm text-foreground">
                    "I help you capture leads, follow up automatically, and close more sales — without juggling 10 tools."
                  </p>
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-card border-r border-b border-border transform rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Grow
            </h2>
            <p className="text-lg text-muted-foreground">
              Stop juggling multiple tools. Ai Bunty brings it all together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 border border-border hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Service Businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by coaches, consultants, real estate agents, and more across India.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Coaches", href: "/solutions/coaches" },
              { name: "Real Estate", href: "/solutions/real-estate" },
              { name: "Fitness Clubs", href: "/solutions/fitness" },
              { name: "Consultants", href: "/solutions/consultants" },
              { name: "Event Planners", href: "/solutions/events" },
              { name: "Agencies", href: "/solutions/agencies" },
            ].map((solution) => (
              <Link 
                key={solution.name}
                to={solution.href}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 flex items-center justify-between group border border-border"
              >
                <span className="font-semibold text-foreground">{solution.name}</span>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Use Multiple Tools When One Does It All?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how Ai Bunty compares to other platforms
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/compare">View All Comparisons <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Index;
