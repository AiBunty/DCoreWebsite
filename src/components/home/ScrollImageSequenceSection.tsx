import { useEffect, useMemo, useRef, useState } from "react";

const FRAME_NUMBERS = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const NAVBAR_HEIGHT_PX = 64;
const SCROLL_STEP_RATIO = 0.65;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ScrollImageSequenceSection() {
  const sequenceRef = useRef<HTMLDivElement | null>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  const frames = useMemo(
    () => FRAME_NUMBERS.map((frame) => `/${frame}.png`),
    [],
  );

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

  useEffect(() => {
    const section = sequenceRef.current;
    if (!section || viewportHeight <= 0) {
      return;
    }

    let ticking = false;

    const updateFrame = () => {
      const rect = section.getBoundingClientRect();
      const sectionScroll = NAVBAR_HEIGHT_PX - rect.top;

      if (sectionScroll <= 0) {
        setFrameIndex(0);
        return;
      }

      const scrollableHeight = section.offsetHeight - viewportHeight;
      if (scrollableHeight <= 0) {
        setFrameIndex(0);
        return;
      }

      const progress = clamp(sectionScroll / scrollableHeight, 0, 1);
      const nextFrame = Math.min(frames.length - 1, Math.floor(progress * frames.length));

      setFrameIndex((prev) => (prev === nextFrame ? prev : nextFrame));
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        updateFrame();
        ticking = false;
      });
    };

    updateFrame();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [frames.length, viewportHeight]);

  const scrollHeight = Math.round(
    viewportHeight + (frames.length - 1) * viewportHeight * SCROLL_STEP_RATIO,
  );

  return (
    <section className="relative z-20 border-t border-gray-200/40 bg-black">
      <div ref={sequenceRef} className="relative" style={{ height: `${scrollHeight}px` }}>
        <div
          className="sticky w-full overflow-hidden bg-black"
          style={{ top: `${NAVBAR_HEIGHT_PX}px`, height: `${viewportHeight}px` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />

          <div className="relative z-10 h-full w-full flex items-center justify-center px-3 sm:px-6 md:px-10">
            <div className="w-full max-w-[1300px]">
              <div className="rounded-[18px] sm:rounded-[24px] border border-zinc-700/90 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 p-[5px] sm:p-[7px] shadow-[0_35px_90px_-35px_rgba(0,0,0,0.85)]">
                <div className="relative rounded-[14px] sm:rounded-[18px] bg-black border border-zinc-800 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 sm:h-5 w-24 sm:w-36 rounded-b-xl bg-black border-x border-b border-zinc-800 z-20" />
                  <div className="relative w-full aspect-[16/10] bg-black">
                    <img
                      src={frames[frameIndex]}
                      alt={`Dcore showcase frame ${frameIndex + 1}`}
                      className="absolute inset-0 h-full w-full object-contain pointer-events-none select-none"
                      draggable={false}
                      loading="eager"
                    />

                    {!isPreloaded && (
                      <div className="absolute inset-0 grid place-items-center bg-black/65 text-white/85 text-sm font-medium">
                        Loading sequence...
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mx-auto h-3 sm:h-4 w-[88%] rounded-b-[40px] bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 shadow-[inset_0_2px_3px_rgba(255,255,255,0.5),0_20px_32px_-18px_rgba(0,0,0,0.75)]" />
            </div>
          </div>

          <div className="absolute top-5 left-1/2 -translate-x-1/2 rounded-full border border-white/25 bg-black/45 px-4 py-2 text-[11px] sm:text-xs font-medium text-white/90 tracking-wide backdrop-blur-md">
            Scroll to reveal frames
          </div>

          <div className="absolute bottom-5 right-5 rounded-full border border-white/25 bg-black/45 px-4 py-2 text-xs sm:text-sm font-semibold text-white tracking-wide backdrop-blur-md">
            {frameIndex + 1} / {frames.length}
          </div>
        </div>
      </div>
    </section>
  );
}
