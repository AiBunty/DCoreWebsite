import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FRAME_NUMBERS = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const TRANSITION_MS = 420;
const NAVBAR_HEIGHT_PX = 64;
const SWIPE_THRESHOLD_PX = 50;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

type TransitionState = {
  from: number;
  to: number;
  direction: "forward" | "backward";
  visualDirection: "left" | "right";
  active: boolean;
};

export function ScrollImageSequenceSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  
  const [visibleFrameStep, setVisibleFrameStep] = useState(0);
  const [transitionState, setTransitionState] = useState<TransitionState | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  const frames = useMemo(
    () => FRAME_NUMBERS.map((frame) => `/${frame}.png`),
    [],
  );

  // Preload all frames
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

  // Set viewport height
  useEffect(() => {
    const updateViewportHeight = () => {
      const nextHeight = Math.max(320, window.innerHeight - NAVBAR_HEIGHT_PX);
      setViewportHeight(nextHeight);
    };

    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);

    return () => {
      window.removeEventListener("resize", updateViewportHeight);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goToNextFrame();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goToPrevFrame();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visibleFrameStep, isAnimating]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchStartX.current - touchEndX;
    const deltaY = Math.abs(touchStartY.current - touchEndY);

    // Only trigger if horizontal swipe is dominant (not vertical scroll)
    if (Math.abs(deltaX) > SWIPE_THRESHOLD_PX && Math.abs(deltaX) > deltaY) {
      if (deltaX > 0) {
        goToNextFrame(); // Swipe left = next frame
      } else {
        goToPrevFrame(); // Swipe right = prev frame
      }
    }
  };

  // Navigate to next frame
  const goToNextFrame = () => {
    if (isAnimating || visibleFrameStep >= frames.length - 1) return;

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

    requestAnimationFrame(() => {
      setTransitionState((prev) => (prev ? { ...prev, active: true } : prev));
    });
  };

  // Navigate to previous frame
  const goToPrevFrame = () => {
    if (isAnimating || visibleFrameStep <= 0) return;

    const nextStep = visibleFrameStep - 1;
    const baseDirection = visibleFrameStep % 2 === 0 ? "left" : "right";
    const visualDirection = baseDirection === "left" ? "right" : "left";

    setIsAnimating(true);
    setTransitionState({
      from: visibleFrameStep,
      to: nextStep,
      direction: "backward",
      visualDirection,
      active: false,
    });

    requestAnimationFrame(() => {
      setTransitionState((prev) => (prev ? { ...prev, active: true } : prev));
    });
  };

  // Navigate to specific frame
  const goToFrame = (frameIndex: number) => {
    if (isAnimating || frameIndex < 0 || frameIndex >= frames.length || frameIndex === visibleFrameStep) return;

    // Determine direction based on current vs target
    const isForward = frameIndex > visibleFrameStep;
    const baseDirection = visibleFrameStep % 2 === 0 ? "left" : "right";
    const visualDirection = isForward ? baseDirection : (baseDirection === "left" ? "right" : "left");

    setIsAnimating(true);
    setTransitionState({
      from: visibleFrameStep,
      to: frameIndex,
      direction: isForward ? "forward" : "backward",
      visualDirection,
      active: false,
    });

    requestAnimationFrame(() => {
      setTransitionState((prev) => (prev ? { ...prev, active: true } : prev));
    });
  };

  // Handle animation completion
  useEffect(() => {
    if (!isAnimating || !transitionState) {
      return;
    }

    const finishTimer = window.setTimeout(() => {
      setVisibleFrameStep(transitionState.to);
      setTransitionState(null);
      setIsAnimating(false);
    }, TRANSITION_MS);

    return () => {
      window.clearTimeout(finishTimer);
    };
  }, [isAnimating, transitionState]);

  const visibleFrameIndex = clamp(visibleFrameStep, 0, frames.length - 1);
  const incomingFrameIndex = transitionState ? clamp(transitionState.to, 0, frames.length - 1) : null;
  const directionMultiplier = transitionState?.visualDirection === "left" ? -1 : 1;
  const progressPercentage = ((visibleFrameIndex + 1) / frames.length) * 100;

  return (
    <section className="relative z-20 border-t border-gray-200/40 bg-black">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-black"
        style={{
          height: `${viewportHeight}px`,
          touchAction: "none",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />

        <div className="relative z-10 h-full w-full flex items-center justify-center px-3 sm:px-6 md:px-10" style={{ perspective: "1800px" }}>
          <div className="w-full max-w-[1300px]">
            <div className="rounded-[18px] sm:rounded-[24px] border border-zinc-700/90 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 p-[5px] sm:p-[7px] shadow-[0_35px_90px_-35px_rgba(0,0,0,0.85)]">
              <div className="relative rounded-[14px] sm:rounded-[18px] bg-black border border-zinc-800 overflow-hidden shadow-inner" style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 sm:h-5 w-24 sm:w-36 rounded-b-xl bg-black border-x border-b border-zinc-800 z-20" />
                
                <div className="relative w-full aspect-[16/10] bg-black" style={{ transformStyle: "preserve-3d" }}>
                  {/* Current frame */}
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

                  {/* Incoming frame */}
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
                      Loading sequence...
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bezel reflection */}
            <div className="mx-auto h-3 sm:h-4 w-[88%] rounded-b-[40px] bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 shadow-[inset_0_2px_3px_rgba(255,255,255,0.5),0_20px_32px_-18px_rgba(0,0,0,0.75)]" />
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={goToPrevFrame}
            disabled={isAnimating || visibleFrameStep === 0}
            className="absolute left-4 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2.5 sm:p-3 text-white/80 backdrop-blur-md transition-all duration-200 hover:bg-white/30 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed hover:disabled:bg-white/20 z-30"
            aria-label="Previous frame"
          >
            <ChevronLeft size={24} className="sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={goToNextFrame}
            disabled={isAnimating || visibleFrameStep === frames.length - 1}
            className="absolute right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2.5 sm:p-3 text-white/80 backdrop-blur-md transition-all duration-200 hover:bg-white/30 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed hover:disabled:bg-white/20 z-30"
            aria-label="Next frame"
          >
            <ChevronRight size={24} className="sm:w-6 sm:h-6" />
          </button>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Frame counter badge */}
        <div
          key={visibleFrameIndex}
          className={`absolute top-5 left-1/2 -translate-x-1/2 rounded-full border border-white/25 bg-black/45 px-4 py-2 text-[11px] sm:text-xs font-medium text-white/90 tracking-wide backdrop-blur-md transition-transform duration-200 ${isAnimating ? "scale-105" : "scale-100"}`}
        >
          {visibleFrameIndex + 1} / {frames.length}
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-7 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-2.5 z-30">
          {frames.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToFrame(idx)}
              disabled={isAnimating}
              className={`rounded-full border backdrop-blur-md transition-all duration-300 ${
                idx === visibleFrameIndex
                  ? "bg-blue-500/80 border-blue-400/60 w-2.5 h-2.5 sm:w-3 sm:h-3"
                  : "bg-white/15 border-white/20 w-1.5 h-1.5 sm:w-2 sm:h-2 hover:bg-white/25 disabled:cursor-not-allowed"
              }`}
              aria-label={`Go to frame ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
