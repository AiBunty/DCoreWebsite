import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { FeatureItem, FeatureCategory } from "@/components/FeatureShowcase";
import { FeatureCarousel } from "@/components/FeatureCarousel";
import SEO from "@/components/SEO";
import {
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "@/seo/schema";
import { canonicalUrl } from "@/seo/seoUtils";
import { MascotFrame } from "@/components/MascotFrame";
import { GlassCard, GlassSection } from "@/components/GlassCard";
import { StackingCards } from "@/components/StackingCards";
import mascotImage from "@/assets/ai-bunty-mascot.png";

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
  Brain,
  Bot,
  Instagram,
  Sparkles,
  Share2,
  Calendar,
  CreditCard,
  BarChart3,
  Zap,
  LucideIcon
} from "lucide-react";

const features = [
  // Original 6 Features
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
    title: "Multiple Payment Gateway",
    description: "Razorpay, Stripe & more with automatic invoicing",
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
  // AI Features
  {
    icon: Brain,
    title: "AI Brain",
    description: "Central intelligence that learns your business and automates decisions",
  },
  {
    icon: Bot,
    title: "AI-powered Chatbots & Staff",
    description: "Smart virtual assistants that handle customer queries 24/7",
  },
  {
    icon: FileCode,
    title: "AI Landing Page Generator",
    description: "Create high-converting pages with AI in seconds",
  },
  {
    icon: Instagram,
    title: "Instagram Comment Automation",
    description: "Auto-engage with followers and boost visibility",
  },
  {
    icon: Sparkles,
    title: "Automatic Social Ads Generator",
    description: "AI creates and optimizes your ad campaigns",
  },
  {
    icon: Share2,
    title: "Multi-Platform Posting",
    description: "Schedule and post across all social platforms at once",
  },
  // New Features
  {
    icon: Mail,
    title: "Email Automation",
    description: "Drip campaigns, newsletters, and automated email sequences",
  },
  {
    icon: Smartphone,
    title: "Mobile Application (Android/iOS)",
    description: "Native apps for on-the-go business management",
  },
  {
    icon: BookOpen,
    title: "LMS + Vault",
    description: "Course hosting, content vault, and student management",
  },
];

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

const solutions: { name: string; href: string; icon: LucideIcon }[] = [
  { name: "Coaches", href: "/solutions/coaches", icon: GraduationCap },
  { name: "Real Estate", href: "/solutions/real-estate", icon: Building2 },
  { name: "Fitness Clubs", href: "/solutions/fitness", icon: Dumbbell },
  { name: "Consultants", href: "/solutions/consultants", icon: UserCheck },
  { name: "Event Planners", href: "/solutions/events", icon: PartyPopper },
  { name: "Agencies", href: "/solutions/agencies", icon: Building },
  { name: "Financial Advisors", href: "/solutions/financial-advisors", icon: Calculator },
  { name: "Health Clinics", href: "/solutions/health-clinics", icon: HeartPulse },
  { name: "Freelancers", href: "/solutions/freelancers", icon: Briefcase },
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
      <SEO
        title="Dcore Systems | AI Omnichannel Marketing Automation"
        description="All-in-one AI-powered platform with WhatsApp Business API enabled, funnels, CRM, workflows, ads, and payments."
        canonical={canonicalUrl("/")}
        jsonLd={[organizationSchema, websiteSchema, softwareApplicationSchema]}
      />
      <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Automating Tomorrow's Business
              </h1>
              <div className="space-y-4 mb-8 max-w-xl">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">Our Vision</h2>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    To automate tomorrow's business with automated system.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">Our Mission</h2>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    To help modern business work smarter faster and better through the cloud.
                  </p>
                </div>
              </div>
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
        </div>
      </section>

      {/* Solutions Preview - Built for Service Businesses (MOVED HERE) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Service Businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by coaches, consultants, real estate agents, and more across India.
            </p>
          </div>
          
          <div className="solutions-grid md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((solution, index) => (
              <GlassCard key={solution.name} interactive className="solution-card" style={{ ['--card-index' as string]: index }}>
                <Link 
                  to={solution.href}
                  className="glass-card-content p-3 md:p-4 flex items-center justify-between group h-full"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground text-sm md:text-base">{solution.name}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              </GlassCard>
            ))}
          </div>

          <style>{`
            @media (max-width: 768px) {
              .solutions-grid {
                display: block;
                padding-top: 60px;
                min-height: 120vh;
              }

              .solution-card {
                position: sticky;
                margin-bottom: 16px;
                transform-origin: center top;
                transition: transform 0.3s ease, opacity 0.3s ease;
              }

              .solution-card:nth-child(1) { top: 60px; z-index: 9; }
              .solution-card:nth-child(2) { top: 65px; z-index: 8; }
              .solution-card:nth-child(3) { top: 70px; z-index: 7; }
              .solution-card:nth-child(4) { top: 75px; z-index: 6; }
              .solution-card:nth-child(5) { top: 80px; z-index: 5; }
              .solution-card:nth-child(6) { top: 85px; z-index: 4; }
              .solution-card:nth-child(7) { top: 90px; z-index: 3; }
              .solution-card:nth-child(8) { top: 95px; z-index: 2; }
              .solution-card:nth-child(9) { top: 100px; z-index: 1; }
            }
          `}</style>
        </div>
      </section>

      {/* Features Section with Stacking Animation */}
      <StackingCards features={features} />

      {/* Dashboard Preview + Steps Section */}
      <GlassSection className="py-20">
        <div className="container mx-auto px-4">
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
        </div>
      </GlassSection>

      {/* Detailed Features Carousel */}
      <FeatureCarousel features={detailedFeatures} />

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

      {/* Business Verification Block */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto p-8 bg-card rounded-lg border border-border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Operated by DCORE SYSTEMS LLP
            </h3>
            <p className="text-muted-foreground mb-4">
              A legally registered Limited Liability Partnership, Incorporated on 05 January 2026
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <p className="text-muted-foreground">
                <span className="font-semibold">LLPIN:</span> ACT-9625
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">Headquarters:</span> Pune, Maharashtra, India
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
    </>
  );
};

export default Index;
