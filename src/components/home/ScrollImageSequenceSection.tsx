import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FRAME_NUMBERS = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const TRANSITION_DURATION = 520; // milliseconds
const NAVBAR_HEIGHT_PX = 64;
const SWIPE_THRESHOLD = 50;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

type AnimationFrame = {
  frameIndex: number;
  progress: number; // 0 to 1
  direction: "left" | "right";
};

export function ScrollImageSequenceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const animationStartTimeRef = useRef<number | null>(null);

  // State for current visible frame
  const [currentFrame, setCurrentFrame] = useState(0);
  
  // State for ongoing animation
  const [animation, setAnimation] = useState<AnimationFrame | null>(null);
  
  // State for loading
  const [isLoaded, setIsLoaded] = useState(false);

  const frames = useMemo(() => FRAME_NUMBERS.map((num) => `/${num}.png`), []);

  // Preload images
  useEffect(() => {
    let cancelled = false;

    const preload = async () => {
      const promises = frames.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = () => resolve();
          })
      );

      await Promise.all(promises);
      if (!cancelled) setIsLoaded(true);
    };

    preload();
    return () => {
      cancelled = true;
    };
  }, [frames]);

  // Set viewport height
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(Math.max(320, window.innerHeight - NAVBAR_HEIGHT_PX));
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Animation loop
  useEffect(() => {
    if (animation === null) return;

    const animate = (currentTime: number) => {
      if (animationStartTimeRef.current === null) {
        animationStartTimeRef.current = currentTime;
      }

      const elapsed = currentTime - animationStartTimeRef.current;
      const progress = Math.min(elapsed / TRANSITION_DURATION, 1);

      setAnimation((prev) => (prev ? { ...prev, progress } : null));

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete
        if (animation.direction === "left") {
          setCurrentFrame(animation.frameIndex + 1);
        } else {
          setCurrentFrame(animation.frameIndex - 1);
        }
        setAnimation(null);
        animationStartTimeRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animation]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (animation) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [animation, currentFrame]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const delta = touchStartRef.current - touchEnd;

    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta > 0) goNext();
      else goPrev();
    }
  };

  // Navigation functions
  const goNext = () => {
    if (animation || currentFrame >= frames.length - 1) return;

    const direction = currentFrame % 2 === 0 ? "left" : "right";
    setAnimation({
      frameIndex: currentFrame,
      progress: 0,
      direction,
    });
    animationStartTimeRef.current = null;
  };

  const goPrev = () => {
    if (animation || currentFrame <= 0) return;

    const direction = currentFrame % 2 === 0 ? "left" : "right";
    const oppositeDir = direction === "left" ? "right" : "left";
    setAnimation({
      frameIndex: currentFrame,
      progress: 0,
      direction: oppositeDir,
    });
    animationStartTimeRef.current = null;
  };

  const goToFrame = (index: number) => {
    if (animation || index === currentFrame || index < 0 || index >= frames.length) return;

    const direction = currentFrame % 2 === 0 ? "left" : "right";
    const isMovingForward = index > currentFrame;
    const finalDirection = isMovingForward ? direction : (direction === "left" ? "right" : "left");

    setAnimation({
      frameIndex: currentFrame,
      progress: 0,
      direction: finalDirection,
    });
    animationStartTimeRef.current = null;
  };

  // Determine which frames to render
  const renderFrameIndex = animation ? animation.frameIndex : currentFrame;
  const nextFrameIndex = animation ? (animation.direction === "left" ? animation.frameIndex + 1 : animation.frameIndex - 1) : undefined;
  const isAnimating = animation !== null;
  const progress = animation?.progress ?? 0;
  const direction = animation?.direction ?? "left";
  const dirMult = direction === "left" ? -1 : 1;

  // Calculate transforms
  const outgoingTransform = isAnimating
    ? `translateX(${55 * dirMult}%) rotateY(${-24 * dirMult}deg) translateZ(-180px) scale(0.82)`
    : "translateX(0) rotateY(0) translateZ(0) scale(1)";

  const incomingFrom = `translateX(${-62 * dirMult}%) rotateY(${26 * dirMult}deg) translateZ(-190px) scale(0.8)`;
  const incomingTo = "translateX(0) rotateY(0) translateZ(0) scale(1)";
  const incomingTransform = isAnimating ? incomingTo : incomingFrom;

  const outgoingOpacity = isAnimating ? 0.08 : 1;
  const incomingOpacity = isAnimating ? 1 : 0.24;
  const outgoingFilter = isAnimating ? "blur(2.2px) brightness(0.72)" : "blur(0) brightness(1)";
  const incomingFilter = isAnimating ? "blur(0) brightness(1)" : "blur(2.4px) brightness(0.68)";

  const progressPercentage = ((currentFrame + 1) / frames.length) * 100;

  return (
    <section className="relative z-20 border-t border-gray-200/40 bg-black">
      <div
        ref={containerRef}
        className="w-full bg-black"
        style={{ height: `${viewportHeight}px` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />

        {/* Main content */}
        <div
          className="relative z-10 h-full w-full flex items-center justify-center px-3 sm:px-6 md:px-10"
          style={{ perspective: "1800px" }}
        >
          <div className="w-full max-w-[1300px]">
            {/* Device frame */}
            <div className="rounded-[18px] sm:rounded-[24px] border border-zinc-700/90 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 p-[5px] sm:p-[7px] shadow-[0_35px_90px_-35px_rgba(0,0,0,0.85)]">
              <div
                className="relative rounded-[14px] sm:rounded-[18px] bg-black border border-zinc-800 overflow-hidden shadow-inner"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 sm:h-5 w-24 sm:w-36 rounded-b-xl bg-black border-x border-b border-zinc-800 z-40" />

                {/* Frame display */}
                <div
                  className="relative w-full aspect-[16/10] bg-black overflow-hidden"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Outgoing frame */}
                  {renderFrameIndex >= 0 && renderFrameIndex < frames.length && (
                    <img
                      src={frames[renderFrameIndex]}
                      alt={`Frame ${renderFrameIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                      style={{
                        zIndex: isAnimating ? 10 : 20,
                        willChange: "transform opacity filter",
                        transform: outgoingTransform,
                        opacity: outgoingOpacity,
                        filter: outgoingFilter,
                        transition: isAnimating ? `all ${TRANSITION_DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)` : "none",
                      }}
                      draggable={false}
                      loading="eager"
                    />
                  )}

                  {/* Incoming frame */}
                  {isAnimating && nextFrameIndex !== undefined && nextFrameIndex >= 0 && nextFrameIndex < frames.length && (
                    <img
                      src={frames[nextFrameIndex]}
                      alt={`Frame ${nextFrameIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                      style={{
                        zIndex: isAnimating ? 20 : 10,
                        willChange: "transform opacity filter",
                        transform: incomingTransform,
                        opacity: incomingOpacity,
                        filter: incomingFilter,
                        transition: `all ${TRANSITION_DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                      }}
                      draggable={false}
                      loading="eager"
                    />
                  )}

                  {/* Loading state */}
                  {!isLoaded && (
                    <div className="absolute inset-0 grid place-items-center bg-black/65 text-white/85 text-sm font-medium">
                      Loading sequence...
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bezel */}
            <div className="mx-auto h-3 sm:h-4 w-[88%] rounded-b-[40px] bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 shadow-[inset_0_2px_3px_rgba(255,255,255,0.5),0_20px_32px_-18px_rgba(0,0,0,0.75)]" />
          </div>

          {/* Left button */}
          <button
            onClick={goPrev}
            disabled={animation !== null || currentFrame === 0}
            className="absolute left-4 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2.5 sm:p-3 text-white/80 backdrop-blur-md transition-all duration-200 hover:bg-white/30 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed z-30"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right button */}
          <button
            onClick={goNext}
            disabled={animation !== null || currentFrame === frames.length - 1}
            className="absolute right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2.5 sm:p-3 text-white/80 backdrop-blur-md transition-all duration-200 hover:bg-white/30 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed z-30"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              style={{
                width: `${progressPercentage}%`,
                transition: isAnimating ? `width ${TRANSITION_DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)` : "none",
              }}
            />
          </div>
        </div>

        {/* Frame counter */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 rounded-full border border-white/25 bg-black/45 px-4 py-2 text-xs sm:text-sm font-semibold text-white/90 tracking-wide backdrop-blur-md z-20">
          {currentFrame + 1} / {frames.length}
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-7 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-2.5 z-30">
          {frames.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToFrame(idx)}
              disabled={animation !== null}
              className={`rounded-full border backdrop-blur-md transition-all duration-300 ${
                idx === currentFrame
                  ? "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500/80 border-blue-400/60"
                  : "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/15 border-white/20 hover:bg-white/25 disabled:cursor-not-allowed"
              }`}
              aria-label={`Go to frame ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
