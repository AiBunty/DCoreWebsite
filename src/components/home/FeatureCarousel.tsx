import { useEffect, useMemo, useRef, useState } from "react";
import {
  BarChart3,
  Bot,
  Brain,
  BookOpen,
  Calendar,
  CreditCard,
  FileCode,
  Instagram,
  Mail,
  MessageSquare,
  Share2,
  Smartphone,
  Sparkles,
  Users,
  Zap,
  ChevronLeft,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FeatureCardCompact } from "@/components/home/FeatureCardCompact";

const categories = [
  { value: "all", label: "All" },
  { value: "messaging", label: "Messaging" },
  { value: "funnels", label: "Funnels" },
  { value: "ai", label: "AI" },
  { value: "ops", label: "Ops" },
] as const;

type FeatureCategory = (typeof categories)[number]["value"];

type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  category: Exclude<FeatureCategory, "all">;
};

const features: FeatureItem[] = [
  {
    title: "WhatsApp Automation",
    description: "Automate replies, follow-ups, and broadcasts at scale.",
    icon: MessageSquare,
    category: "messaging",
  },
  {
    title: "Instagram Comment Automation",
    description: "Auto-respond to comments and drive DMs instantly.",
    icon: Instagram,
    category: "messaging",
  },
  {
    title: "Email Automation",
    description: "Send lifecycle sequences with real-time triggers.",
    icon: Mail,
    category: "messaging",
  },
  {
    title: "AI-powered Chatbots & Staff",
    description: "Resolve FAQs and route leads 24/7 with AI.",
    icon: Bot,
    category: "messaging",
  },
  {
    title: "Marketing Funnels",
    description: "Launch VSL, webinar, and lead funnels fast.",
    icon: Zap,
    category: "funnels",
  },
  {
    title: "Multiple Payment Gateway",
    description: "Accept payments and sync revenue automatically.",
    icon: CreditCard,
    category: "funnels",
  },
  {
    title: "Smart Booking",
    description: "Automate scheduling and reminders in minutes.",
    icon: Calendar,
    category: "funnels",
  },
  {
    title: "LMS + Vault",
    description: "Deliver courses with access control and content vaults.",
    icon: BookOpen,
    category: "funnels",
  },
  {
    title: "AI Brain",
    description: "Central intelligence that optimizes decisions.",
    icon: Brain,
    category: "ai",
  },
  {
    title: "AI Landing Page Generator",
    description: "Generate landing pages with AI in seconds.",
    icon: FileCode,
    category: "ai",
  },
  {
    title: "Automatic Social Ads Generator",
    description: "Produce and optimize ads with AI workflows.",
    icon: Sparkles,
    category: "ai",
  },
  {
    title: "Analytics Dashboard",
    description: "Monitor revenue, funnel, and messaging metrics.",
    icon: BarChart3,
    category: "ai",
  },
  {
    title: "CRM & Pipelines",
    description: "Track every lead and pipeline stage centrally.",
    icon: Users,
    category: "ops",
  },
  {
    title: "Multi-Platform Posting",
    description: "Schedule content across social channels together.",
    icon: Share2,
    category: "ops",
  },
  {
    title: "Mobile Application (Android/iOS)",
    description: "Manage operations from native mobile apps.",
    icon: Smartphone,
    category: "ops",
  },
];

const categoryLabels: Record<Exclude<FeatureCategory, "all">, string> = {
  messaging: "Messaging",
  funnels: "Funnels",
  ai: "AI",
  ops: "Ops",
};

export function FeatureCarousel() {
  const [activeCategory, setActiveCategory] = useState<FeatureCategory>("all");
  const railRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const isAutoTickRef = useRef(false);
  const lastTimestampRef = useRef<number | null>(null);
  const baseSpeedRef = useRef(0);

  const filteredFeatures = useMemo(() => {
    if (activeCategory === "all") {
      return features;
    }
    return features.filter((feature) => feature.category === activeCategory);
  }, [activeCategory]);

  const loopedFeatures = useMemo(() => {
    if (filteredFeatures.length === 0) {
      return [];
    }
    return [...filteredFeatures, ...filteredFeatures];
  }, [filteredFeatures]);

  const stopAutoScroll = () => {
    isPausedRef.current = true;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    const rail = railRef.current;
    if (rail) {
      rail.style.scrollSnapType = "x mandatory";
    }
  };

  const scheduleResume = () => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
      lastTimestampRef.current = null;
      startAutoScroll();
    }, 2500);
  };

  const handleUserInteraction = () => {
    stopAutoScroll();
    scheduleResume();
  };

  const startAutoScroll = () => {
    if (rafRef.current || isPausedRef.current) {
      return;
    }

    const rail = railRef.current;
    if (rail) {
      rail.style.scrollSnapType = "none";
    }

    const step = (timestamp: number) => {
      const rail = railRef.current;
      if (!rail || isPausedRef.current) {
        rafRef.current = null;
        return;
      }

      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }

      const delta = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      if (!baseSpeedRef.current) {
        const halfWidth = rail.scrollWidth / 2 || 1;
        baseSpeedRef.current = halfWidth / 25000;
      }

      isAutoTickRef.current = true;
      rail.scrollLeft += baseSpeedRef.current * delta;

      // Infinite loop: once we pass the midpoint, reset back to start seamlessly.
      const halfWidth = rail.scrollWidth / 2;
      if (rail.scrollLeft >= halfWidth) {
        rail.style.scrollBehavior = "auto";
        rail.scrollLeft -= halfWidth;
      }

      // Allow user scroll detection after this tick.
      requestAnimationFrame(() => {
        isAutoTickRef.current = false;
      });

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }
    rail.style.scrollBehavior = "auto";
    rail.scrollLeft = 0;
    baseSpeedRef.current = 0;
    lastTimestampRef.current = null;
    stopAutoScroll();
    scheduleResume();
  }, [activeCategory]);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      startAutoScroll();
    });
    return () => {
      cancelAnimationFrame(id);
      stopAutoScroll();
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = null;
      }
    };
  }, [loopedFeatures.length]);

  const scrollByAmount = (direction: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }
    handleUserInteraction();
    rail.style.scrollBehavior = "smooth";
    const offset = direction === "left" ? -340 : 340;
    rail.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <Section className="py-10 md:py-12">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Platform capabilities
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Automate acquisition, conversion, and retention across channels — in one system.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <ToggleGroup
            type="single"
            value={activeCategory}
            onValueChange={(value) => setActiveCategory((value as FeatureCategory) || "all")}
            className="flex flex-wrap justify-start gap-2"
          >
            {categories.map((category) => (
              <ToggleGroupItem
                key={category.value}
                value={category.value}
                size="sm"
                variant="outline"
                className="rounded-full px-3 text-xs"
                aria-label={`Filter ${category.label}`}
              >
                {category.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByAmount("left")}
              className="h-8 w-8 rounded-full border border-muted/40 text-muted-foreground hover:text-foreground"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4 mx-auto" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount("right")}
              className="h-8 w-8 rounded-full border border-muted/40 text-muted-foreground hover:text-foreground"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4 mx-auto" />
            </button>
          </div>
        </div>

        <div className="relative mt-6">
          <div
            ref={railRef}
            className="flex flex-nowrap gap-4 overflow-x-auto snap-x snap-mandatory overscroll-x-contain touch-pan-x pb-2 pr-2 scroll-px-4"
            style={{ WebkitOverflowScrolling: "touch" }}
            tabIndex={0}
            role="region"
            aria-label="Platform capabilities"
            onMouseEnter={stopAutoScroll}
            onMouseLeave={scheduleResume}
            onTouchStart={handleUserInteraction}
            onPointerDown={handleUserInteraction}
            onWheel={handleUserInteraction}
            onScroll={() => {
              if (!isAutoTickRef.current) {
                handleUserInteraction();
              }
            }}
          >
            {loopedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FeatureCardCompact
                  key={`${feature.title}-${index}`}
                  icon={<Icon className="h-8 w-8" aria-hidden="true" />}
                  title={feature.title}
                  description={feature.description}
                  category={categoryLabels[feature.category]}
                  className="w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 snap-start min-h-[96px]"
                />
              );
            })}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background to-transparent" />
        </div>
      </Container>
    </Section>
  );
}
