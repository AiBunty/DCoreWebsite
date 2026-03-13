import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

type ReviewItem = {
  client: string;
  role: string;
  company: string;
  quote: string;
};

const reviewItems: ReviewItem[] = [
  {
    client: "James Chen",
    role: "Operations Director",
    company: "Nexa Commerce",
    quote:
      "The team's methodical project management and clear communication made complex digital transformation seamless. Highly recommended.",
  },
  {
    client: "Sarah Mitchell",
    role: "Chief Technology Officer",
    company: "Elevate Health",
    quote:
      "Their strategic approach to workflow automation and integration reduced our response time by 40% while improving service quality.",
  },
  {
    client: "Michael Foster",
    role: "Executive Director",
    company: "Prime Advisory Group",
    quote:
      "A trusted partner who understands both technology and business strategy. Their execution was instrumental to our growth roadmap.",
  },
  {
    client: "Carlos Rodriguez",
    role: "Marketing Lead",
    company: "Vertex Dynamics",
    quote:
      "Their solutions paired with data-first thinking delivered measurable outcomes in weeks. We exceeded our pipeline targets ahead of schedule.",
  },
  {
    client: "David Thompson",
    role: "Founder and President",
    company: "Bluecrest Studio",
    quote:
      "From discovery to launch, every milestone was precise and well-executed. We achieved 35% cost optimization within the first year.",
  },
];

const avatarGradients = [
  "from-indigo-500 to-sky-500",
  "from-fuchsia-500 to-rose-500",
  "from-emerald-500 to-cyan-500",
  "from-orange-500 to-pink-500",
  "from-violet-500 to-indigo-500",
];

const desktopPositions = {
  0: { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, zIndex: 50 },
  1: { x: 320, y: 52, rotate: 9, scale: 0.92, opacity: 0.62, zIndex: 40 },
  [-1]: { x: -320, y: 52, rotate: -9, scale: 0.92, opacity: 0.62, zIndex: 40 },
  2: { x: 570, y: 92, rotate: 13, scale: 0.86, opacity: 0.28, zIndex: 30 },
  [-2]: { x: -570, y: 92, rotate: -13, scale: 0.86, opacity: 0.28, zIndex: 30 },
} as const;

function initialsFromName(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function normalizeOffset(index: number, activeIndex: number, total: number) {
  let delta = index - activeIndex;

  if (delta > total / 2) {
    delta -= total;
  }

  if (delta < -total / 2) {
    delta += total;
  }

  return delta;
}

export function VideoReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = reviewItems.length;
  const activeReview = reviewItems[activeIndex];

  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [total]);

  return (
    <Section className="py-20 border-t border-gray-200/50 bg-gray-50/65">
      <Container>
        <div className="mx-auto max-w-4xl text-center mb-10 md:mb-14">
          <span className="inline-flex items-center rounded-full bg-gray-200 px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gray-800">
            Client Success
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500 max-w-2xl mx-auto">
            See how our strategic technology solutions have transformed business outcomes for our clients.
          </p>
        </div>

        <div className="md:hidden">
          <article className="rounded-[28px] border border-gray-200/70 bg-white/90 p-6 shadow-[0_26px_70px_-42px_rgba(15,23,42,0.4)]">
            <Quote className="h-6 w-6 text-gray-300" />
            <p className="mt-5 text-lg leading-relaxed text-gray-700">{activeReview.quote}</p>
            <div className="mt-8 flex items-center gap-3">
              <div
                className={`h-12 w-12 rounded-full bg-gradient-to-br ${avatarGradients[activeIndex % avatarGradients.length]} grid place-items-center text-sm font-bold text-white`}
              >
                {initialsFromName(activeReview.client)}
              </div>
              <div>
                <p className="text-base font-semibold text-gray-900">{activeReview.client}</p>
                <p className="text-sm text-gray-500">
                  {activeReview.role} | {activeReview.company}
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="relative hidden md:block h-[430px] lg:h-[470px] overflow-x-clip">
          {reviewItems.map((item, index) => {
            const offset = normalizeOffset(index, activeIndex, total);
            const position = desktopPositions[offset as -2 | -1 | 0 | 1 | 2];

            if (!position) {
              return null;
            }

            return (
              <article
                key={item.client}
                className="absolute top-0 left-1/2 w-[min(90vw,430px)] select-none rounded-[28px] border border-gray-200/70 bg-white/92 p-8 shadow-[0_26px_70px_-42px_rgba(15,23,42,0.4)] transition-all duration-500 ease-out"
                style={{
                  transform: `translate(calc(-50% + ${position.x}px), ${position.y}px) rotate(${position.rotate}deg) scale(${position.scale})`,
                  opacity: position.opacity,
                  zIndex: position.zIndex,
                }}
                onClick={() => setActiveIndex(index)}
                aria-hidden={offset !== 0}
              >
                <Quote className="h-6 w-6 text-gray-300" />
                <p className="mt-6 text-[20px] lg:text-[21px] leading-relaxed text-gray-700">
                  {item.quote}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div
                    className={`h-14 w-14 rounded-full bg-gradient-to-br ${avatarGradients[index % avatarGradients.length]} grid place-items-center text-base font-bold text-white`}
                  >
                    {initialsFromName(item.client)}
                  </div>
                  <div>
                    <p className="text-[22px] font-bold leading-none text-gray-900">{item.client}</p>
                    <p className="mt-1 text-[16px] text-gray-500">{item.role}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">Swipe or use arrows to browse client reviews.</p>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={goPrev}
              className="h-10 w-10 rounded-full bg-white/90 border-gray-200 text-gray-700 hover:bg-white"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={goNext}
              className="h-10 w-10 rounded-full bg-white/90 border-gray-200 text-gray-700 hover:bg-white"
              aria-label="Next review"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {reviewItems.map((item, index) => (
            <button
              key={item.client}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? "w-7 bg-gray-900" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
