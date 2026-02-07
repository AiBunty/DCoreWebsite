import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { FeatureItem } from "@/components/FeatureShowcase";
import { FeatureCarousel } from "@/components/FeatureCarousel";
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
import mascotImage from "@/assets/ai-bunty-mascot.png";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { TrustStrip } from "@/components/common/TrustStrip";
import { IndustryTile } from "@/components/home/IndustryTile";

// Feature images
import agencyDashboard from "@/assets/features/agency-dashboard.png";
import dashboardPreview from "@/assets/dashboard-preview.png";
import shopBuilder from "@/assets/features/shop-builder.png";
import crm from "@/assets/features/crm.png";
import landingPageBuilder from "@/assets/features/landing-page-builder.png";
import automationWorkflow from "@/assets/features/automation-workflow.png";
import whatsappSender from "@/assets/features/whatsapp-sender.png";
import whatsappCloudApi from "@/assets/features/whatsapp-cloud-api.png";
import emailAutomation from "@/assets/features/email-automation.png";
import mobileApp from "@/assets/features/mobile-app.png";
import adLauncher from "@/assets/features/ad-launcher.png";
import salesFinance from "@/assets/features/sales-finance.png";
import lms from "@/assets/features/lms.png";
import studentPortal from "@/assets/features/student-portal.png";
import whiteLabel from "@/assets/features/white-label.png";
import addStaff from "@/assets/features/add-staff.png";

import {
  MessageSquare,
  ArrowRight,
  LayoutDashboard,
  Store,
  FileCode,
  Workflow,
  Cloud,
  Mail,
  Smartphone,
  Megaphone,
  TrendingUp,
  GraduationCap,
  BookOpen,
  Globe,
  UserPlus,
  Building2,
  Dumbbell,
  UserCheck,
  PartyPopper,
  Building,
  Calculator,
  HeartPulse,
  Briefcase,
  Users,
  LucideIcon,
} from "lucide-react";

const detailedFeatures: FeatureItem[] = [
  {
    id: "agency-dashboard",
    title: "Agency Dashboard",
    icon: LayoutDashboard,
    image: agencyDashboard,
    category: "sales",
    points: [
      { heading: "Streamlined Interface", description: "Designed for agencies to efficiently manage their operations with an intuitive layout, facilitating effective lead generation and task management." },
      { heading: "Lead & Task Management", description: "Facilitating effective lead generation and task management with a comprehensive overview of all agency activities in one place." }
    ]
  },
  {
    id: "shop-builder",
    title: "Digital Shop Builder",
    icon: Store,
    image: shopBuilder,
    category: "sales",
    points: [
      { heading: "Effortless Store Creation", description: "Shop Builder offers an intuitive platform with customizable templates to quickly set up your online store." },
      { heading: "Boost Sales Effectively", description: "Showcase your products with professional designs and tools that drive customer engagement and increase sales." }
    ]
  },
  {
    id: "crm",
    title: "CRM",
    icon: Users,
    image: crm,
    category: "sales",
    points: [
      { heading: "Customer Interaction Management", description: "Centralizes interactions, ensuring all communication with customers is tracked and managed efficiently." },
      { heading: "Sales Tracking & Optimization", description: "CRM tools facilitate detailed analysis of sales processes, helping to streamline operations and increase customer satisfaction." }
    ]
  },
  {
    id: "landing-page-builder",
    title: "Landing Page Builder",
    icon: FileCode,
    image: landingPageBuilder,
    category: "marketing",
    points: [
      { heading: "Customization & Ease of Use", description: "Customizable templates and intuitive drag-and-drop functionality make it simple to create effective and aesthetically pleasing landing pages quickly." },
      { heading: "Lead Capture & Engagement", description: "Designed to effectively capture leads and increase user engagement, helping to convert visitors into loyal customers." }
    ]
  },
  {
    id: "automation-workflow",
    title: "Automation Workflow",
    icon: Workflow,
    image: automationWorkflow,
    category: "automation",
    points: [
      { heading: "Enhanced Business Efficiency", description: "Streamlines your operations by automating repetitive tasks, allowing your team to focus on more strategic initiatives." },
      { heading: "Reduced Manual Effort", description: "Consolidate Email, WhatsApp, and SMS interactions through a unified platform, eliminating the hassle of juggling multiple tools." }
    ]
  },
  {
    id: "whatsapp-sender",
    title: "WhatsApp Sender",
    icon: MessageSquare,
    image: whatsappSender,
    category: "marketing",
    points: [
      { heading: "Efficiency in Messaging", description: "WhatsApp Sender automates the delivery of messages to your contacts, eliminating the need for manual texting." },
      { heading: "Streamlined Operations", description: "Helps streamline business operations, allowing you to focus on strategic tasks instead of routine communications." }
    ]
  },
  {
    id: "whatsapp-cloud-api",
    title: "WhatsApp Cloud API",
    icon: Cloud,
    image: whatsappCloudApi,
    category: "automation",
    points: [
      { heading: "Scalable Messaging", description: "Scale your communication efforts seamlessly, catering to a large number of users without compromising speed or reliability." },
      { heading: "Enhanced Customer Interactions", description: "Provide a direct and efficient channel for automated interactions and real-time updates, enhancing user engagement." }
    ]
  },
  {
    id: "email-automation",
    title: "Email Automation",
    icon: Mail,
    image: emailAutomation,
    category: "marketing",
    points: [
      { heading: "Targeted Engagement", description: "Reach specific segments of your audience with customized messages, enhancing the relevance and effectiveness of communications." },
      { heading: "Conversion Optimization", description: "Promote products and services directly to a receptive audience, significantly increasing conversion rates and driving sales." }
    ]
  },
  {
    id: "mobile-app",
    title: "Mobile App (iOS & Android)",
    icon: Smartphone,
    image: mobileApp,
    category: "automation",
    points: [
      { heading: "Cross-Platform Accessibility", description: "Users can interact with your services seamlessly across iOS and Android devices, enhancing user experience and engagement." },
      { heading: "On-the-Go Engagement", description: "Provides constant connectivity, allowing users to engage with the brand anytime and anywhere, boosting satisfaction and loyalty." }
    ]
  },
  {
    id: "ad-launcher",
    title: "Ad Launcher",
    icon: Megaphone,
    image: adLauncher,
    category: "marketing",
    points: [
      { heading: "Simplified Campaign Management", description: "Ad Launcher enables businesses to easily create, launch, and manage advertising campaigns across multiple platforms in one place." },
      { heading: "Boost Traffic & Visibility", description: "Drive targeted traffic and enhance brand visibility with streamlined, effective ad campaigns." }
    ]
  },
  {
    id: "sales-finance",
    title: "Sales and Finance",
    icon: TrendingUp,
    image: salesFinance,
    category: "sales",
    points: [
      { heading: "Streamlined Revenue Management", description: "Integrate sales tracking with financial operations for a seamless overview of your business performance." },
      { heading: "Enhanced Decision-Making", description: "Access comprehensive financial reporting to drive informed decisions and foster business growth." }
    ]
  },
  {
    id: "lms",
    title: "LMS",
    icon: GraduationCap,
    image: lms,
    category: "education",
    points: [
      { heading: "Centralized Learning Hub", description: "A centralized platform where educational content and training programs are easily accessible to learners from any location." },
      { heading: "Tracking & Management", description: "Powerful tools for tracking learner progress and managing learning with comprehensive analytics." }
    ]
  },
  {
    id: "student-portal",
    title: "Student Portal",
    icon: BookOpen,
    image: studentPortal,
    category: "education",
    points: [
      { heading: "Enhanced Accessibility", description: "A centralized hub where students can access all necessary course materials, assignments, and resources in one place." },
      { heading: "Improved Engagement", description: "Track academic progress, complete assignments, and interact with course content to significantly enhance student engagement." }
    ]
  },
  {
    id: "white-label",
    title: "White Label Domain",
    icon: Globe,
    image: whiteLabel,
    category: "team",
    points: [
      { heading: "Branding Consistency", description: "Maintain branding consistency across digital platforms using your own domain names while utilizing another provider's technology." },
      { heading: "Cost-Effective Solution", description: "Leverage established platforms customized under your brand instead of developing technology from scratch." }
    ]
  },
  {
    id: "add-staff",
    title: "Add Staff",
    icon: UserPlus,
    image: addStaff,
    category: "team",
    points: [
      { heading: "Streamlined Onboarding", description: "Simplifies the onboarding process by enabling quick and efficient addition of new team members to your organization's systems." },
      { heading: "Customizable Access Control", description: "Granular control over what each team member can see and do within the organization's systems with permissions feature." }
    ]
  }
];

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

      {/* Detailed Features Carousel */}
      <FeatureCarousel features={detailedFeatures} />

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
