import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type ReviewVideo = {
  title: string;
  role: string;
  company: string;
  quote: string;
  videoUrl: string;
  poster: string;
};

const reviewVideos: ReviewVideo[] = [
  {
    title: "Frontend developer",
    role: "Frontend developer",
    company: "Product Startup",
    quote:
      "We automated lead replies and follow-ups in under a week. Our team now focuses on high-value conversations.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Growth manager",
    role: "Growth manager",
    company: "Education Brand",
    quote:
      "Campaign delivery, CRM status updates, and WhatsApp broadcasts now run in one flow without manual juggling.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Operations lead",
    role: "Operations lead",
    company: "Consulting Firm",
    quote:
      "Daily follow-ups and reminder logic are fully automated. Conversion quality improved and team fatigue dropped.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80",
  },
];

export function VideoReviewsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    onSelect();
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api.off("reInit", onSelect);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Section className="py-20 border-t border-gray-200/50 bg-white/45 backdrop-blur-md">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-end mb-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.06]">
            Built for growing teams
            <br />
            who need real results
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl lg:ml-auto">
            See how teams are using Dcore Systems to automate replies, streamline workflows, and
            improve conversion outcomes with fewer manual operations.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviewVideos.map((item) => (
              <CarouselItem key={item.title} className="basis-full lg:basis-1/2">
                <article className="h-full rounded-[28px] overflow-hidden bg-white/85 border border-gray-200/70 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]">
                  <div className="relative">
                    <video
                      className="w-full h-[320px] md:h-[420px] object-cover bg-gray-900"
                      controls
                      preload="metadata"
                      playsInline
                      poster={item.poster}
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                    </video>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <div className="absolute left-5 bottom-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 border border-gray-200/70 text-sm font-semibold text-gray-900">
                      <Play className="w-4 h-4 text-gray-900" />
                      {item.role}
                    </div>
                  </div>

                  <div className="p-6 md:p-7">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{item.company}</p>
                    <p className="text-base text-gray-700 leading-relaxed">{item.quote}</p>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">Swipe or use arrows to browse video reviews.</p>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
              className="h-10 w-10 rounded-full bg-white/90 border-gray-200 text-gray-700 hover:bg-white"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              disabled={!canScrollNext}
              className="h-10 w-10 rounded-full bg-white/90 border-gray-200 text-gray-700 hover:bg-white"
              aria-label="Next review"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

