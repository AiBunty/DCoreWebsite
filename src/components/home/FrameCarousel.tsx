import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FRAME_PATHS = ["/1.webp", "/2.webp", "/3.webp", "/5.webp", "/6.webp", "/7.webp", "/8.webp", "/9.webp", "/10.webp", "/11.webp", "/12.webp", "/13.webp"];
const TRANSITION_DURATION = 520;
const NAVBAR_HEIGHT = 64;
const SWIPE_MIN_DISTANCE = 50;
const INITIAL_DESKTOP_WIDTH = 1200;
const INITIAL_DESKTOP_HEIGHT = 860;

function getInitialDimensions() {
  if (typeof window === "undefined") {
    return {
      containerHeight: Math.max(560, Math.round(INITIAL_DESKTOP_HEIGHT * 0.82)),
      frameWidth: Math.min(INITIAL_DESKTOP_WIDTH * 0.9, 1700),
    };
  }

  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  const isDesktop = viewportWidth >= 1024;
  const containerHeight = isDesktop
    ? Math.max(560, Math.round(viewportHeight * 0.82))
    : Math.max(320, viewportHeight - NAVBAR_HEIGHT);
  const usableFrameHeight = Math.max(260, containerHeight - (isDesktop ? 72 : 120));
  const frameWidth = Math.min(
    viewportWidth * (isDesktop ? 0.9 : 0.96),
    usableFrameHeight * 1.6,
    1700
  );

  return { containerHeight, frameWidth };
}

export function FrameCarousel() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Core state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [{ containerHeight, frameWidth }, setDimensions] = useState(getInitialDimensions);
  const [shouldLoadFrames, setShouldLoadFrames] = useState(false);

  // Refs
  const touchStartXRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const transitionStartRef = useRef<number | null>(null);

  const totalFrames = FRAME_PATHS.length;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoadFrames(true);
            observer.disconnect();
            return;
          }
        }
      },
      { rootMargin: "320px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Set container height on mount and resize
  useEffect(() => {
    const updateHeight = () => {
      setDimensions(getInitialDimensions());
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    if (!shouldLoadFrames) {
      return;
    }

    const preloadIndexes = new Set([
      currentIndex,
      Math.max(currentIndex - 1, 0),
      Math.min(currentIndex + 1, totalFrames - 1),
      incomingIndex ?? currentIndex,
    ]);
    let isActive = true;

    const loadImages = async () => {
      const promises = [...preloadIndexes].map(
        (index) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = FRAME_PATHS[index];
            const done = () => resolve();

            if ("decode" in img) {
              img
                .decode()
                .then(done)
                .catch(done);
            } else {
              img.onload = done;
              img.onerror = done;
            }
          })
      );

      await Promise.all(promises);
      if (isActive) {
        setIsLoaded(true);
      }
    };

    loadImages();
    return () => {
      isActive = false;
    };
  }, [currentIndex, incomingIndex, shouldLoadFrames, totalFrames]);

  // Handle next frame
  const handleNext = () => {
    if (isTransitioning || currentIndex >= totalFrames - 1) return;
    startTransition(currentIndex, currentIndex + 1);
  };

  // Handle previous frame
  const handlePrev = () => {
    if (isTransitioning || currentIndex <= 0) return;
    startTransition(currentIndex, currentIndex - 1);
  };

  // Handle dot click
  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentIndex || index < 0 || index >= totalFrames) return;
    startTransition(currentIndex, index);
  };

  // Start transition animation
  const startTransition = (from: number, to: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setIncomingIndex(to);
    transitionStartRef.current = null;

    // Animate to the target frame
    const animate = (timestamp: number) => {
      if (transitionStartRef.current === null) {
        transitionStartRef.current = timestamp;
      }

      const elapsed = timestamp - transitionStartRef.current;
      const progress = Math.min(elapsed / TRANSITION_DURATION, 1);

      // Optional: Update progress state for visual feedback if needed
      if (progress >= 1) {
        // Transition complete
        setCurrentIndex(to);
        setIncomingIndex(null);
        setIsTransitioning(false);
        transitionStartRef.current = null;
      } else {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
          e.preventDefault();
          handleNext();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          handlePrev();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTransitioning, currentIndex]);

  // Touch/swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartXRef.current - touchEndX;

    if (Math.abs(distance) > SWIPE_MIN_DISTANCE) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const isFirstFrame = currentIndex === 0;
  const isLastFrame = currentIndex === totalFrames - 1;
  const progressPercent = ((currentIndex + 1) / totalFrames) * 100;

  return (
    <section ref={sectionRef} className="relative z-20 border-t border-gray-200/40 bg-black">
      <div
        className="relative w-full bg-black"
        style={{ height: `${containerHeight}px` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />

        {/* Main carousel container */}
        <div
          className="relative z-10 h-full w-full flex items-center justify-center px-3 sm:px-6 md:px-10"
          style={{ perspective: "1800px" }}
        >
          <div className="w-full max-w-full mx-auto" style={{ width: `${frameWidth}px` }}>
            {/* Device frame wrapper */}
            <div className="rounded-[18px] sm:rounded-[24px] border border-zinc-700/90 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 p-[5px] sm:p-[7px] shadow-[0_35px_90px_-35px_rgba(0,0,0,0.85)]">
              <div
                className="relative rounded-[14px] sm:rounded-[18px] bg-black border border-zinc-800 overflow-hidden shadow-inner"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Device notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 sm:h-5 w-24 sm:w-36 rounded-b-xl bg-black border-x border-b border-zinc-800 z-50" />

                {/* Frame display area */}
                <div
                  className="relative w-full aspect-[16/10] bg-black overflow-hidden"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Current frame (always visible, transitions out) */}
                  {isLoaded && shouldLoadFrames && (
                    <img
                      key={`current-${currentIndex}`}
                      src={FRAME_PATHS[currentIndex]}
                      alt={`Frame ${currentIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                      style={{
                        zIndex: isTransitioning ? 5 : 10,
                        opacity: isTransitioning ? 0.1 : 1,
                        filter: isTransitioning ? "blur(2px) brightness(0.7)" : "blur(0) brightness(1)",
                        transform: isTransitioning
                          ? `translateX(${currentIndex < 0 ? -55 : 55}%) rotateY(${currentIndex < 0 ? 24 : -24}deg) translateZ(-180px) scale(0.82)`
                          : "translateX(0) rotateY(0) translateZ(0) scale(1)",
                        transition: isTransitioning ? `all ${TRANSITION_DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)` : "none",
                        willChange: isTransitioning ? "transform opacity filter" : "auto",
                      }}
                      draggable={false}
                      decoding="async"
                      loading="lazy"
                    />
                  )}

                  {/* Next/Previous frame (transitions in) */}
                  {isTransitioning && incomingIndex !== null && (
                    <img
                      key={`incoming-${incomingIndex}`}
                      src={FRAME_PATHS[incomingIndex]}
                      alt={`Incoming frame`}
                      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                      style={{
                        zIndex: 20,
                        opacity: 1,
                        filter: "blur(0) brightness(1)",
                        transform: `translateX(0) rotateY(0) translateZ(0) scale(1)`,
                        transition: `all ${TRANSITION_DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                        willChange: "transform opacity filter",
                      }}
                      draggable={false}
                      decoding="async"
                      loading="lazy"
                    />
                  )}

                  {/* Loading state */}
                  {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/65">
                      <div className="text-center">
                        <div className="text-white/80 text-sm font-medium">Loading frames...</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Device bezel reflection */}
            <div className="mx-auto h-3 sm:h-4 w-[88%] rounded-b-[40px] bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 shadow-[inset_0_2px_3px_rgba(255,255,255,0.5),0_20px_32px_-18px_rgba(0,0,0,0.75)]" />
          </div>

          {/* Left navigation button */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning || isFirstFrame}
            className="absolute left-4 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 rounded-full p-2.5 sm:p-3 text-white/80 backdrop-blur-md transition-all duration-200 bg-white/20 hover:bg-white/30 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous frame"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right navigation button */}
          <button
            onClick={handleNext}
            disabled={isTransitioning || isLastFrame}
            className="absolute right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 rounded-full p-2.5 sm:p-3 text-white/80 backdrop-blur-md transition-all duration-200 bg-white/20 hover:bg-white/30 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next frame"
          >
            <ChevronRight size={24} />
          </button>

          {/* Progress bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-10">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all"
              style={{
                width: `${progressPercent}%`,
                transitionDuration: isTransitioning ? `${TRANSITION_DURATION}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            />
          </div>
        </div>

        {/* Frame counter badge */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 rounded-full border border-white/25 bg-black/45 px-4 py-2 text-xs sm:text-sm font-semibold text-white/90 tracking-wide backdrop-blur-md">
          {currentIndex + 1} / {totalFrames}
        </div>

        {/* Dot navigation indicators */}
        <div className="absolute bottom-7 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-2.5">
          {FRAME_PATHS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              disabled={isTransitioning}
              className={`rounded-full border backdrop-blur-md transition-all duration-300 ${
                idx === currentIndex
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
