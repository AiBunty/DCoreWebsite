import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { FeatureShowcase, FeatureItem } from "@/components/FeatureShowcase";
import mascotImage from "@/assets/ai-bunty-mascot.png";

// Feature images
import agencyDashboard from "@/assets/features/agency-dashboard.png";
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
  Calendar, 
  CreditCard, 
  Users, 
  BarChart3, 
  Zap,
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
  UserPlus
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

const detailedFeatures: FeatureItem[] = [
  {
    id: "agency-dashboard",
    title: "Agency Dashboard",
    icon: LayoutDashboard,
    image: agencyDashboard,
    points: [
      { heading: "Streamlined Interface", description: "Designed for agencies to efficiently manage their operations with an intuitive layout, facilitating effective lead generation and task management." },
      { heading: "Lead & Task Management", description: "Facilitating effective lead generation and task management with a comprehensive overview of all agency activities in one place." }
    ]
  },
  {
    id: "shop-builder",
    title: "Shop Builder",
    icon: Store,
    image: shopBuilder,
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
    points: [
      { heading: "Streamlined Onboarding", description: "Simplifies the onboarding process by enabling quick and efficient addition of new team members to your organization's systems." },
      { heading: "Customizable Access Control", description: "Granular control over what each team member can see and do within the organization's systems with permissions feature." }
    ]
  }
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

      {/* Detailed Features Showcase */}
      <FeatureShowcase features={detailedFeatures} />

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
