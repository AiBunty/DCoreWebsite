import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { Seo } from "@/components/seo/Seo";
import {
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "@/seo/schema";
import { canonicalUrl } from "@/seo/seoUtils";
import { MascotFrame } from "@/components/MascotFrame";
import { GlassSection } from "@/components/GlassCard";
import { FeatureCarousel as PlatformFeatureCarousel } from "@/components/home/FeatureCarousel";
import { GrowthCarousel } from "@/components/home/GrowthCarousel";
import mascotImage from "@/assets/ai-bunty-mascot.png";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { TrustStrip } from "@/components/common/TrustStrip";
import { IndustryTile } from "@/components/home/IndustryTile";

// Feature images
import dashboardPreview from "@/assets/dashboard-preview.png";

import {
  ArrowRight,
  GraduationCap,
  Building2,
  Dumbbell,
  UserCheck,
  PartyPopper,
  Building,
  Calculator,
  HeartPulse,
  Briefcase,
  LucideIcon,
} from "lucide-react";


const solutions: { name: string; description: string; href: string; icon: LucideIcon }[] = [
  {
    name: "Coaches",
    description: "Automate lead capture, bookings, and WhatsApp follow-ups.",
    href: "/solutions/coaches",
    icon: GraduationCap,
  },
  {
    name: "Real Estate",
    description: "Manage inquiries, site visits, and conversions automatically.",
    href: "/solutions/real-estate",
    icon: Building2,
  },
  {
    name: "Fitness Clubs",
    description: "Automate trials, renewals, reminders, and member engagement.",
    href: "/solutions/fitness-clubs",
    icon: Dumbbell,
  },
  {
    name: "Consultants",
    description: "Capture leads, qualify prospects, and schedule calls faster.",
    href: "/solutions/consultants",
    icon: UserCheck,
  },
  {
    name: "Event Planners",
    description: "Automate inquiries, quotations, follow-ups, and payments.",
    href: "/solutions/event-planners",
    icon: PartyPopper,
  },
  {
    name: "Agencies",
    description: "Manage clients, campaigns, and reporting in one workflow.",
    href: "/solutions/agencies",
    icon: Building,
  },
  {
    name: "Financial Advisors",
    description: "Automate lead intake, reminders, and compliance-friendly follow-ups.",
    href: "/solutions/financial-advisors",
    icon: Calculator,
  },
  {
    name: "Health Clinics",
    description: "Enable appointment booking, reminders, and patient follow-ups.",
    href: "/solutions/health-clinics",
    icon: HeartPulse,
  },
  {
    name: "Freelancers",
    description: "Streamline leads, proposals, payments, and follow-ups.",
    href: "/solutions/freelancers",
    icon: Briefcase,
  },
];

const onboardingSteps = [
  { number: "01", title: "Create account", description: "Sign up in under 2 minutes" },
  { number: "02", title: "Install tracking", description: "Connect your website & WhatsApp" },
  { number: "03", title: "Track analytics", description: "Monitor leads & conversions" },
  { number: "04", title: "Integrate", description: "Connect payments & automations" },
];

const Index = () => {
  return (
    <>
      <Seo
        title="Dcore Systems | AI Omnichannel Marketing Automation"
        description="All-in-one AI-powered platform with WhatsApp Business API enabled, funnels, CRM, workflows, ads, and payments."
        canonical={canonicalUrl("/")}
        jsonLd={[organizationSchema, websiteSchema, softwareApplicationSchema]}
      />
      <Layout>
      {/* Hero Section */}
      <Section hero className="bg-gradient-hero overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-up">
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
                AI Omnichannel Automation for WhatsApp, Funnels, CRM, and Growth
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Launch compliant automation across ads, funnels, CRM, payments, and messaging.
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl">
                Dcore Systems unifies WhatsApp Business API onboarding, AI funnels, CRM pipelines, workflows, and omnichannel messaging into one enterprise-ready platform.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="default" size="lg" asChild>
                  <Link to="/book-demo">Book Free Demo</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/compare">Compare Ai Bunty</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src={mascotImage} 
                  alt="Dcore AI Automation Mascot - WhatsApp, CRM, Workflows, AI Business Assistant" 
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
        </Container>
      </Section>

      {/* Solutions Preview - Built for Service Businesses (MOVED HERE) */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Service Businesses
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Industry-ready automation workflows for lead capture, follow-ups, bookings, and payments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {solutions.map((solution) => (
              <IndustryTile
                key={solution.name}
                title={solution.name}
                description={solution.description}
                icon={solution.icon}
                href={solution.href}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Platform Capabilities */}
      <PlatformFeatureCarousel />

      {/* Growth Proof (Demo) */}
      <GrowthCarousel />

      {/* Dashboard Preview + Steps Section */}
      <GlassSection className="py-12 md:py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Work smarter with easy access
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Get started in minutes, not days. Here's how simple it is.
              </p>
              
              <div className="space-y-8">
                {onboardingSteps.map((step) => (
                  <div key={step.number} className="flex gap-6 items-start">
                    <span className="text-5xl font-bold text-primary/30">{step.number}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Preview */}
            <div>
              <MascotFrame imageSrc={dashboardPreview} />
            </div>
          </div>
        </Container>
      </GlassSection>

      {/* Comparison Preview */}
      <Section>
        <Container>
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
        </Container>
      </Section>

      <CTASection />
      <TrustStrip />
    </Layout>
    </>
  );
};

export default Index;
