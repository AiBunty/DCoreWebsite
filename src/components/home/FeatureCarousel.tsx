import { useEffect, useMemo, useRef, useState } from "react";
import {
  BarChart3,
  Bot,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Cpu,
  Database,
  FileCode2,
  Globe,
  Headset,
  LucideIcon,
  MessageSquare,
  Send,
  Shield,
  ShoppingCart,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FeatureCardCompact } from "@/components/home/FeatureCardCompact";

const categories = [
  { value: "all", label: "All" },
  { value: "communication", label: "Communication" },
  { value: "automation", label: "Automation" },
  { value: "development", label: "Development" },
  { value: "ops", label: "Operations" },
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
    title: "WhatsApp Business API",
    description: "Official API setup, templates, bot flows, and agent handoff.",
    icon: MessageSquare,
    category: "communication",
  },
  {
    title: "Bulk Messaging Systems",
    description: "Run campaign broadcasts and alerts with delivery tracking.",
    icon: Send,
    category: "communication",
  },
  {
    title: "AI Support Assistant",
    description: "Auto-handle FAQs and route intent-based conversations.",
    icon: Bot,
    category: "communication",
  },
  {
    title: "CRM and ERP Development",
    description: "Custom pipelines, lead stages, and operations modules.",
    icon: Database,
    category: "automation",
  },
  {
    title: "Workflow Automation",
    description: "Automate lead assignment, reminders, and escalation flows.",
    icon: Workflow,
    category: "automation",
  },
  {
    title: "Smart Follow-up Engine",
    description: "Use triggers and schedules to improve response rates.",
    icon: Calendar,
    category: "automation",
  },
  {
    title: "Cloud Software Development",
    description: "Build secure and scalable cloud-native business platforms.",
    icon: Cloud,
    category: "development",
  },
  {
    title: "Web and E-Commerce Development",
    description: "Launch conversion-focused websites and online stores.",
    icon: ShoppingCart,
    category: "development",
  },
  {
    title: "API and Integration Layer",
    description: "Connect payment, CRM, ERP, and marketing tools in one flow.",
    icon: Cpu,
    category: "development",
  },
  {
    title: "Digital Presence Engineering",
    description: "SEO-ready websites with forms, automation hooks, and analytics.",
    icon: Globe,
    category: "development",
  },
  {
    title: "Business Analytics Dashboard",
    description: "Track leads, conversions, campaigns, and response quality.",
    icon: BarChart3,
    category: "ops",
  },
  {
    title: "Support Operations Console",
    description: "Resolve tickets faster with context-rich customer timelines.",
    icon: Headset,
    category: "ops",
  },
  {
    title: "Data Security and Governance",
    description: "Role-based controls and auditable communication workflows.",
    icon: Shield,
    category: "ops",
  },
  {
    title: "Lead Qualification Assistant",
    description: "Prioritize high-intent leads and improve conversion speed.",
    icon: FileCode2,
    category: "ops",
  },
];

const categoryLabels: Record<Exclude<FeatureCategory, "all">, string> = {
  communication: "Communication",
  automation: "Automation",
  development: "Development",
  ops: "Operations",
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
      const currentRail = railRef.current;
      if (!currentRail || isPausedRef.current) {
        rafRef.current = null;
        return;
      }

      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }

      const delta = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      if (!baseSpeedRef.current) {
        const halfWidth = currentRail.scrollWidth / 2 || 1;
        baseSpeedRef.current = halfWidth / 25000;
      }

      isAutoTickRef.current = true;
      currentRail.scrollLeft += baseSpeedRef.current * delta;

      const halfWidth = currentRail.scrollWidth / 2;
      if (currentRail.scrollLeft >= halfWidth) {
        currentRail.style.scrollBehavior = "auto";
        currentRail.scrollLeft -= halfWidth;
      }

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
            One operational stack for communication, automation, development, and support.
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
