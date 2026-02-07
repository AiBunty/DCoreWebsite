import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FeatureCardCompact } from "@/components/FeatureCardCompact";
import {
  MessageSquare,
  Instagram,
  Mail,
  Bot,
  Zap,
  CreditCard,
  Calendar,
  BookOpen,
  Brain,
  FileCode,
  Sparkles,
  BarChart3,
  Users,
  Share2,
  Smartphone,
  LucideIcon,
} from "lucide-react";

const featureGroups: {
  title: string;
  items: { title: string; description: string; icon: LucideIcon }[];
}[] = [
  {
    title: "Messaging & Engagement",
    items: [
      {
        title: "WhatsApp Automation",
        description: "Automate replies, follow-ups, and broadcasts at scale.",
        icon: MessageSquare,
      },
      {
        title: "Instagram Comment Automation",
        description: "Auto-respond to comments and drive DMs instantly.",
        icon: Instagram,
      },
      {
        title: "Email Automation",
        description: "Send lifecycle sequences with real-time triggers.",
        icon: Mail,
      },
      {
        title: "AI-powered Chatbots & Staff",
        description: "Resolve FAQs and route leads 24/7 with AI.",
        icon: Bot,
      },
    ],
  },
  {
    title: "Funnels & Revenue",
    items: [
      {
        title: "Marketing Funnels",
        description: "Launch VSL, webinar, and lead funnels fast.",
        icon: Zap,
      },
      {
        title: "Multiple Payment Gateway",
        description: "Accept payments and sync revenue automatically.",
        icon: CreditCard,
      },
      {
        title: "Smart Booking",
        description: "Automate scheduling and reminders in minutes.",
        icon: Calendar,
      },
      {
        title: "LMS + Vault",
        description: "Deliver courses with access control and content vaults.",
        icon: BookOpen,
      },
    ],
  },
  {
    title: "AI & Intelligence",
    items: [
      {
        title: "AI Brain",
        description: "Central intelligence that optimizes decisions.",
        icon: Brain,
      },
      {
        title: "AI Landing Page Generator",
        description: "Generate landing pages with AI in seconds.",
        icon: FileCode,
      },
      {
        title: "Automatic Social Ads Generator",
        description: "Produce and optimize ads with AI workflows.",
        icon: Sparkles,
      },
      {
        title: "Analytics Dashboard",
        description: "Monitor revenue, funnel, and messaging metrics.",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "Platform & Operations",
    items: [
      {
        title: "CRM & Pipelines",
        description: "Track every lead and pipeline stage centrally.",
        icon: Users,
      },
      {
        title: "Multi-Platform Posting",
        description: "Schedule content across social channels together.",
        icon: Share2,
      },
      {
        title: "Mobile Application (Android/iOS)",
        description: "Manage operations from native mobile apps.",
        icon: Smartphone,
      },
    ],
  },
];

export function FeatureRails() {
  return (
    <Section className="py-10 md:py-12">
      <Container>
        <div className="space-y-10 md:space-y-12">
          {featureGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-5">
                {group.title}
              </h3>
              <div className="relative">
                <div
                  className="flex flex-nowrap gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory overscroll-x-contain touch-pan-x pb-2 pr-2 scroll-px-4"
                  tabIndex={0}
                  role="region"
                  aria-label={`${group.title} features`}
                >
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <FeatureCardCompact
                        key={item.title}
                        icon={<Icon className="h-8 w-8" aria-hidden="true" />}
                        title={item.title}
                        description={item.description}
                        className="w-[280px] sm:w-[320px] lg:w-[320px] shrink-0 snap-start min-h-[96px]"
                      />
                    );
                  })}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
