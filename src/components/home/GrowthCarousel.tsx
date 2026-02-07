import { useEffect, useMemo, useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { GrowthCard } from "@/components/home/GrowthCard";
import { growthStories } from "@/components/home/growthData";

export function GrowthCarousel() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const isAutoTickRef = useRef(false);
  const lastTimestampRef = useRef<number | null>(null);
  const baseSpeedRef = useRef(0);

  const loopedStories = useMemo(() => {
    if (growthStories.length === 0) {
      return [];
    }
    return [...growthStories, ...growthStories];
  }, []);

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
        baseSpeedRef.current = halfWidth / 26000;
      }

      isAutoTickRef.current = true;
      rail.scrollLeft += baseSpeedRef.current * delta;

      const halfWidth = rail.scrollWidth / 2;
      if (rail.scrollLeft >= halfWidth) {
        rail.style.scrollBehavior = "auto";
        rail.scrollLeft -= halfWidth;
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
  }, []);

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
  }, [loopedStories.length]);

  return (
    <Section className="py-10 md:py-12">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Performance snapshots
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            A quick look at the lift businesses can achieve with Dcore automation.
          </p>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Illustrative examples. Results may vary.
        </p>

        <div className="relative mt-6">
          <div
            ref={railRef}
            className="flex flex-nowrap gap-4 overflow-x-auto snap-x snap-mandatory overscroll-x-contain touch-pan-x pb-2 pr-2 scroll-px-4"
            style={{ WebkitOverflowScrolling: "touch" }}
            tabIndex={0}
            role="region"
            aria-label="Customer growth proof (demo)"
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
            {loopedStories.map((story, index) => (
              <div
                key={`${story.industry}-${index}`}
                className="w-[320px] lg:w-[360px] shrink-0 snap-start"
              >
                <GrowthCard
                  ownerName={story.ownerName}
                  role={story.role}
                  industry={story.industry}
                  metric={story.metric}
                  timeframe={story.timeframe}
                  used={story.used}
                  chartType={story.chartType}
                  values={story.values}
                  avatar={story.avatar}
                />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background to-transparent" />
        </div>
      </Container>
    </Section>
  );
}
