import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FRAME_NUMBERS = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const NAVBAR_HEIGHT_PX = 64;
const MOBILE_BREAKPOINT = 768;
const TRANSITION_MS = 420;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function isMobileDevice() {
  return window.innerWidth < MOBILE_BREAKPOINT;
}

type TransitionState = {
  from: number;
  to: number;
  direction: "forward" | "backward";
  visualDirection: "left" | "right";
  active: boolean;
};

export function ScrollImageSequenceSection() {
  const [visibleFrameStep, setVisibleFrameStep] = useState(0);
  const [transitionState, setTransitionState] = useState<TransitionState | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);

  const frames = useMemo(
    () => FRAME_NUMBERS.map((frame) => `/${frame}.webp`),
    [],
  );

  // Preload frames
  useEffect(() => {
    let isCancelled = false;

    const preloadFrames = async () => {
      const tasks = frames.map(
        (src) =>
          new Promise<void>((resolve) => {
            const image = new Image();
            image.src = src;
            image.onload = () => resolve();
            image.onerror = () => resolve();
          }),
      );

      await Promise.all(tasks);
      if (!isCancelled) {
        setIsPreloaded(true);
      }
    };

    preloadFrames();

    return () => {
      isCancelled = true;
    };
  }, [frames]);

  // Set mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNextFrame();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevFrame();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visibleFrameStep, isAnimating]);

  // Handle swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartXRef.current - touchEndX;
    const diffY = touchStartYRef.current - touchEndY;

    // Only consider horizontal swipe if it's more horizontal than vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        goToNextFrame(); // Swiped left -> next
      } else {
        goToPrevFrame(); // Swiped right -> prev
      }
    }
  };

  const goToNextFrame = () => {
    if (isAnimating || visibleFrameStep >= frames.length - 1) {
      return;
    }

    const nextStep = visibleFrameStep + 1;
    const baseDirection = visibleFrameStep % 2 === 0 ? "left" : "right";

    setIsAnimating(true);
    setTransitionState({
      from: visibleFrameStep,
      to: nextStep,
      direction: "forward",
      visualDirection: baseDirection,
      active: false,
    });

    const rafId = window.requestAnimationFrame(() => {
      setTransitionState((prev) => (prev ? { ...prev, active: true } : prev));
    });

    const finishTimer = window.setTimeout(() => {
      setVisibleFrameStep(nextStep);
      setTransitionState(null);
      setIsAnimating(false);
    }, TRANSITION_MS);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(finishTimer);
    };
  };

  const goToPrevFrame = () => {
    if (isAnimating || visibleFrameStep <= 0) {
      return;
    }

    const prevStep = visibleFrameStep - 1;
    const baseDirection = prevStep % 2 === 0 ? "left" : "right";
    const visualDirection = baseDirection === "left" ? "right" : "left";

    setIsAnimating(true);
    setTransitionState({
      from: visibleFrameStep,
      to: prevStep,
      direction: "backward",
      visualDirection,
      active: false,
    });

    const rafId = window.requestAnimationFrame(() => {
      setTransitionState((prev) => (prev ? { ...prev, active: true } : prev));
    });

    const finishTimer = window.setTimeout(() => {
      setVisibleFrameStep(prevStep);
      setTransitionState(null);
      setIsAnimating(false);
    }, TRANSITION_MS);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(finishTimer);
    };
  };

  const visibleFrameIndex = clamp(visibleFrameStep, 0, frames.length - 1);
  const incomingFrameIndex = transitionState ? clamp(transitionState.to, 0, frames.length - 1) : null;
  const directionMultiplier = transitionState?.visualDirection === "left" ? -1 : 1;

  const progressPercentage = ((visibleFrameIndex + 1) / frames.length) * 100;

  return (
    <section className="relative z-20 bg-black py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-3 sm:px-6 md:px-10 w-full max-w-[1400px]">
        {/* Main Carousel Container */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative group"
          style={{ perspective: "1800px" }}
        >
          {/* Carousel Wrapper */}
          <div className="rounded-[18px] sm:rounded-[24px] border border-zinc-700/90 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 p-[5px] sm:p-[7px] shadow-[0_35px_90px_-35px_rgba(0,0,0,0.85)]">
            <div className="relative rounded-[14px] sm:rounded-[18px] bg-black border border-zinc-800 overflow-hidden shadow-inner" style={{ transformStyle: "preserve-3d" }}>
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 sm:h-5 w-24 sm:w-36 rounded-b-xl bg-black border-x border-b border-zinc-800 z-20" />

              {/* Frame Container */}
              <div className="relative w-full aspect-[16/10] bg-black overflow-hidden" style={{ transformStyle: "preserve-3d" }}>
                {/* Current Frame */}
                <img
                  src={frames[visibleFrameIndex]}
                  alt={`Dcore showcase frame ${visibleFrameIndex + 1}`}
                  className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none will-change-transform"
                  style={
                    incomingFrameIndex !== null && transitionState
                      ? {
                          transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity ${TRANSITION_MS}ms ease, filter ${TRANSITION_MS}ms ease`,
                          transform: transitionState.active
                            ? `translateX(${55 * directionMultiplier}%) rotateY(${-24 * directionMultiplier}deg) translateZ(-180px) scale(0.82)`
                            : "translateX(0%) rotateY(0deg) translateZ(0px) scale(1)",
                          opacity: transitionState.active ? 0.08 : 1,
                          filter: transitionState.active ? "blur(2.2px) brightness(0.72)" : "blur(0px) brightness(1)",
                        }
                      : {}
                  }
                  draggable={false}
                  loading="eager"
                />

                {/* Incoming Frame */}
                {incomingFrameIndex !== null && (
                  <img
                    src={frames[incomingFrameIndex]}
                    alt={`Dcore showcase frame ${incomingFrameIndex + 1}`}
                    className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none will-change-transform"
                    style={{
                      transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity ${TRANSITION_MS}ms ease, filter ${TRANSITION_MS}ms ease`,
                      transform: transitionState?.active
                        ? "translateX(0%) rotateY(0deg) translateZ(0px) scale(1)"
                        : `translateX(${-62 * directionMultiplier}%) rotateY(${26 * directionMultiplier}deg) translateZ(-190px) scale(0.8)`,
                      opacity: transitionState?.active ? 1 : 0.24,
                      filter: transitionState?.active ? "blur(0px) brightness(1)" : "blur(2.4px) brightness(0.68)",
                    }}
                    draggable={false}
                    loading="eager"
                  />
                )}

                {!isPreloaded && (
                  <div className="absolute inset-0 grid place-items-center bg-black/65 text-white/85 text-sm font-medium">
                    Loading frames...
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={goToPrevFrame}
            disabled={isAnimating || visibleFrameStep === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 md:-translate-x-8 z-30 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all duration-300 hover:bg-white/40 hover:border-white/50 disabled:opacity-50 disabled:cursor-not-allowed hover:disabled:bg-white/20"
            aria-label="Previous frame"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={goToNextFrame}
            disabled={isAnimating || visibleFrameStep === frames.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 md:translate-x-8 z-30 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all duration-300 hover:bg-white/40 hover:border-white/50 disabled:opacity-50 disabled:cursor-not-allowed hover:disabled:bg-white/20"
            aria-label="Next frame"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Frame Counter Badge */}
          <div
            key={visibleFrameIndex}
            className="absolute top-5 left-1/2 -translate-x-1/2 rounded-full border border-white/25 bg-black/45 px-4 py-2 text-[11px] sm:text-xs font-semibold text-white tracking-wide backdrop-blur-md transition-transform duration-200 scale-in z-10"
          >
            {visibleFrameIndex + 1} / {frames.length}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {frames.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setVisibleFrameStep(index);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                index === visibleFrameIndex
                  ? "bg-blue-500 w-3 h-3"
                  : "bg-white/30 w-2 h-2 hover:bg-white/50"
              }`}
              aria-label={`Go to frame ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Instructions */}
        <div className="mt-6 text-center">
          <p className="text-xs sm:text-sm text-white/60">
            Use arrow buttons, keyboard arrows, or swipe to navigate
          </p>
        </div>
      </div>
    </section>
  );
}
