import { type CSSProperties, type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/seo/Seo";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { TiltWrapper } from "@/components/ui/TiltWrapper";
import { VideoReviewsSection } from "@/components/home/VideoReviewsSection";
import { FrameCarousel } from "@/components/home/FrameCarousel";
import {
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "@/seo/schema";
import { SEO_PAGE_PRESETS } from "@/seo/pagePresets";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { IndustryTile } from "@/components/home/IndustryTile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Building,
  Building2,
  ChevronDown,
  Cloud,
  Database,
  Dumbbell,
  Globe,
  HeartPulse,
  Mail,
  MessageSquare,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Workflow,
} from "lucide-react";

const heroHeadingText = "The All-in-One AI Engine for Lead Generation, Marketing & Sales Automation";
const heroDescriptionText =
  "Automate leads, follow-ups and sales using WhatsApp + CRM automation powered by WABA integration.";
const dcoreHeadingText = "DCORE";
let hasPlayedHeroTyping = false;
let hasPlayedDcoreTyping = false;

const solutions = [
  {
    name: "Startups and Agencies",
    description: "Launch fast with CRM, communication, and campaign workflows.",
    href: "/solutions/agencies",
    icon: Building,
  },
  {
    name: "Real Estate Teams",
    description: "Automate inquiry routing, site visit reminders, and follow-ups.",
    href: "/solutions/real-estate",
    icon: Building2,
  },
  {
    name: "Fitness Businesses",
    description: "Drive trials, membership renewals, and retention campaigns.",
    href: "/solutions/fitness-clubs",
    icon: Dumbbell,
  },
  {
    name: "Consulting Firms",
    description: "Qualify leads faster and schedule high-intent consultations.",
    href: "/solutions/consultants",
    icon: UserCheck,
  },
  {
    name: "Event Businesses",
    description: "Run inquiry-to-booking communication flows end-to-end.",
    href: "/solutions/events",
    icon: PartyPopper,
  },
  {
    name: "Healthcare Providers",
    description: "Reduce no-shows through automated reminders and support.",
    href: "/solutions/health-clinics",
    icon: HeartPulse,
  },
];

const serviceCards = [
  {
    title: "WhatsApp Business API Solutions",
    description: "Official API onboarding, template approvals, campaign flows, and chatbot support.",
    icon: MessageSquare,
  },
  {
    title: "CRM and ERP Development",
    description: "Build custom CRM and ERP systems tailored to your operations and reporting model.",
    icon: Database,
  },
  {
    title: "Cloud-Based Software Development",
    description: "Develop scalable cloud applications that support growth without rework.",
    icon: Cloud,
  },
  {
    title: "Bulk Messaging Systems",
    description: "Run structured engagement campaigns across customer lifecycle stages.",
    icon: Mail,
  },
  {
    title: "Website and E-Commerce Development",
    description: "Create conversion-focused websites and stores with strong technical foundations.",
    icon: Globe,
  },
  {
    title: "Digital Marketing and Automation Tools",
    description: "Automate lead capture, nurturing, and conversion across channels.",
    icon: TrendingUp,
  },
];

const faqItems = [
  {
    question: "How quickly can Dcore Systems start implementation?",
    answer:
      "Most projects can start in 3 to 7 business days after scope confirmation. Urgent WhatsApp API and campaign setups can be prioritized faster.",
  },
  {
    question: "Do you build custom CRM and ERP systems or only templates?",
    answer:
      "We build custom CRM and ERP systems based on your workflow, team structure, and reporting requirements. We can also extend existing systems where needed.",
  },
  {
    question: "Can you integrate WhatsApp API with our current tools?",
    answer:
      "Yes. We integrate WhatsApp API with CRM, ERP, websites, e-commerce, and support tools to automate follow-ups, updates, and customer communication.",
  },
  {
    question: "Do you support both startups and established businesses?",
    answer:
      "Yes. We work with startups, SMEs, and enterprises, and we tailor architecture, automation depth, and rollout plans based on business stage and scale.",
  },
  {
    question: "Will you help with lead conversion and follow-up automation?",
    answer:
      "Yes. We design complete lead journeys including capture, qualification, nurturing, reminders, and conversion-focused communication flows.",
  },
  {
    question: "How do we get support after project delivery?",
    answer:
      "You can reach our team via support@dcoresystems.com or WhatsApp. We provide ongoing technical support, optimization, and system maintenance options.",
  },
];

interface MobileGridDrawerProps {
  buttonLabel: string;
  children: ReactNode;
}

function MobileGridDrawer({ buttonLabel, children }: MobileGridDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="md:hidden mb-5 flex justify-center">
        <Button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="h-10 px-5 rounded-full bg-gray-900 hover:bg-black text-white font-semibold shadow-sm"
        >
          {isOpen ? "Hide Cards" : buttonLabel}
          <ChevronDown
            className={`ml-2 h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </Button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-out md:overflow-visible ${
          isOpen ? "max-h-[4200px] opacity-100" : "max-h-0 opacity-0"
        } md:max-h-none md:opacity-100`}
      >
        <div
          className={`transition-transform duration-500 ${isOpen ? "translate-y-0" : "-translate-y-2"} md:translate-y-0`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

const Index = () => {
  const seo = SEO_PAGE_PRESETS.home;
  const [typedHeading, setTypedHeading] = useState("");
  const [typedDescription, setTypedDescription] = useState("");
  const [typedDcore, setTypedDcore] = useState("");
  const [isDcoreInView, setIsDcoreInView] = useState(false);
  const dcoreTriggerRef = useRef<HTMLParagraphElement | null>(null);
  const dcoreLetterFx = useMemo(
    () =>
      dcoreHeadingText.split("").map(() => ({
        duration: 1.4 + Math.random() * 1.8,
        delay: Math.random() * 1.1,
        variant: Math.floor(Math.random() * 3),
      })),
    []
  );

  useEffect(() => {
    if (hasPlayedHeroTyping) {
      setTypedHeading(heroHeadingText);
      setTypedDescription(heroDescriptionText);
      return;
    }

    hasPlayedHeroTyping = true;
    let intervalTimer: number | null = null;
    let index = 0;
    setTypedHeading("");
    setTypedDescription("");

    const delayTimer = window.setTimeout(() => {
      intervalTimer = window.setInterval(() => {
        index += 1;
        setTypedHeading(heroHeadingText.slice(0, index));
        if (index >= heroHeadingText.length && intervalTimer) {
          window.clearInterval(intervalTimer);
        }
      }, 48);
    }, 420);

    return () => {
      window.clearTimeout(delayTimer);
      if (intervalTimer) {
        window.clearInterval(intervalTimer);
      }
    };
  }, []);

  const isHeadingDone = typedHeading.length === heroHeadingText.length;

  useEffect(() => {
    if (!isHeadingDone) {
      setTypedDescription("");
      return;
    }

    let intervalTimer: number | null = null;
    let index = 0;
    setTypedDescription("");

    const delayTimer = window.setTimeout(() => {
      intervalTimer = window.setInterval(() => {
        index += 1;
        setTypedDescription(heroDescriptionText.slice(0, index));
        if (index >= heroDescriptionText.length && intervalTimer) {
          window.clearInterval(intervalTimer);
        }
      }, 20);
    }, 320);

    return () => {
      window.clearTimeout(delayTimer);
      if (intervalTimer) {
        window.clearInterval(intervalTimer);
      }
    };
  }, [isHeadingDone]);

  
  const isDescriptionDone = typedDescription.length === heroDescriptionText.length;
  const isDcoreDone = typedDcore.length === dcoreHeadingText.length;

  useEffect(() => {
    const target = dcoreTriggerRef.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsDcoreInView(true);
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isDcoreInView) {
      return;
    }

    if (hasPlayedDcoreTyping) {
      setTypedDcore(dcoreHeadingText);
      return;
    }

    hasPlayedDcoreTyping = true;
    setTypedDcore("");
    let index = 0;
    let intervalTimer: number | null = null;
    const delayTimer = window.setTimeout(() => {
      intervalTimer = window.setInterval(() => {
        index += 1;
        setTypedDcore(dcoreHeadingText.slice(0, index));
        if (index >= dcoreHeadingText.length && intervalTimer) {
          window.clearInterval(intervalTimer);
        }
      }, 160);
    }, 160);

    return () => {
      window.clearTimeout(delayTimer);
      if (intervalTimer) {
        window.clearInterval(intervalTimer);
      }
    };
  }, [isDcoreInView]);

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
        ogUrl={seo.ogUrl}
        ogImage={seo.ogImage}
        twitterCard={seo.twitterCard}
        jsonLd={[organizationSchema, websiteSchema, softwareApplicationSchema]}
      />
      <Layout>
        <AntigravityBg />
        <div className="relative z-10">
          <Section className="relative isolate pt-20 md:pt-28 pb-20 md:pb-24 min-h-screen flex items-center">
            <Container>
              <div className="relative z-10 mx-auto max-w-5xl text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-200/70 mb-8 backdrop-blur-xl shadow-sm">
                <Sparkles className="w-4 h-4 text-gray-900" />
                <span className="text-sm font-semibold tracking-tight text-gray-800">
                  Dcore Systems Platform
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 leading-[1.03] tracking-tight mb-6 whitespace-pre-line">
                {typedHeading}
                {!isHeadingDone && (
                  <span className="ml-1 inline-block h-[0.95em] w-[0.06em] align-middle bg-gray-900 animate-pulse" />
                )}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                {typedDescription}
                {isHeadingDone && !isDescriptionDone && (
                  <span className="ml-1 inline-block h-[0.9em] w-[0.06em] align-middle bg-gray-500 animate-pulse" />
                )}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  className="h-12 px-7 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-semibold shadow-sm"
                  asChild
                >
                  <Link to="/book-demo">Book Free Demo</Link>
                </Button>
                <Button
                  className="h-12 px-7 rounded-full bg-white/90 hover:bg-white text-gray-900 border border-gray-200 font-semibold shadow-sm"
                  asChild
                >
                  <Link to="/features">
                    Explore Services <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              </div>
            </Container>
          </Section>

          <FrameCarousel />

          <VideoReviewsSection />

          <Section className="py-20 border-t border-gray-200/50 bg-white/40 backdrop-blur-md">
            <Container>
              <div className="text-center max-w-3xl mx-auto mb-14">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                  Core Services
                </h2>
                <p className="text-lg text-gray-600">
                  Structured solutions designed to remove manual work and improve customer
                  engagement.
                </p>
              </div>
              <MobileGridDrawer buttonLabel="Show Core Services">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {serviceCards.map((service) => (
                    <TiltWrapper key={service.title}>
                      <div className="h-full p-7 rounded-[24px] bg-white/85 border border-gray-200/60 shadow-sm">
                        <div className="w-11 h-11 rounded-xl bg-gray-100 border border-gray-200/70 flex items-center justify-center mb-4">
                          <service.icon className="w-5 h-5 text-gray-900" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </TiltWrapper>
                  ))}
                </div>
              </MobileGridDrawer>
            </Container>
          </Section>

          <Section className="py-20 border-t border-gray-200/50 bg-gray-50/60">
            <Container>
              <div className="text-center max-w-3xl mx-auto mb-14">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                  Key Focus Areas
                </h2>
                <p className="text-lg text-gray-600">
                  Every delivery is optimized for speed, reliability, and measurable business
                  outcomes.
                </p>
              </div>
              <MobileGridDrawer buttonLabel="Show Focus Areas">
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {[
                    {
                      title: "Automating customer communication",
                      description:
                        "Designing flows that keep leads and customers engaged across the entire lifecycle.",
                      icon: MessageSquare,
                    },
                    {
                      title: "Improving lead generation and conversion",
                      description:
                        "Building structured funnels, CRM pipelines, and follow-up systems that close faster.",
                      icon: Target,
                    },
                    {
                      title: "Building scalable cloud applications",
                      description:
                        "Shipping cloud-first systems ready for high throughput and long-term maintainability.",
                      icon: Cloud,
                    },
                    {
                      title: "Enhancing customer support operations",
                      description:
                        "Integrating support channels with workflows to reduce delays and improve resolution rates.",
                      icon: Workflow,
                    },
                  ].map((item) => (
                    <TiltWrapper key={item.title}>
                      <div className="p-7 rounded-[24px] bg-white/90 border border-gray-200/70 shadow-sm flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200/70 flex items-center justify-center mt-1">
                          <item.icon className="w-5 h-5 text-gray-900" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </TiltWrapper>
                  ))}
                </div>
              </MobileGridDrawer>
            </Container>
          </Section>

          <Section className="relative isolate overflow-hidden py-20 border-t border-gray-200/50">
            <div className="absolute inset-0 -z-10">
              <img
                src="https://storagev2.files-vault.com/uploads/blacklabel-765/sub-account-76998/ChatGPT%20Image%20Mar%2011,%202026,%2001_18_20%20PM.webp"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#08101f]/58 via-[#0b1426]/46 to-[#0b1220]/62" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(91,155,213,0.18),transparent_34%)]" />
            </div>
            <Container>
              <div className="text-center max-w-3xl mx-auto mb-14">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                  Industry-ready execution
                </h2>
                <p className="text-lg text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.48)]">
                  The same engineering foundation adapted for different business environments.
                </p>
              </div>
              <MobileGridDrawer buttonLabel="Show Industry Cards">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {solutions.map((solution) => (
                    <IndustryTile
                      key={solution.name}
                      title={solution.name}
                      description={solution.description}
                      icon={solution.icon}
                      href={solution.href}
                    />
                  ))}
                </div>
              </MobileGridDrawer>
            </Container>
          </Section>

          <Section className="py-12">
            <Container>
              <div className="rounded-[30px] border border-gray-200/70 bg-white/80 backdrop-blur-xl p-8 md:p-12 shadow-sm">
                <div className="grid md:grid-cols-[1fr_auto] items-center gap-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      Built for reliable execution
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Dcore Systems LLP delivers cost-effective and scalable technology solutions
                      that help businesses grow efficiently in competitive markets.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
                    <ShieldCheck className="w-4 h-4 text-gray-900" />
                    LLPIN: ACT-9625
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="py-20 border-t border-gray-200/50 bg-white/45 backdrop-blur-md">
            <Container>
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
                <div className="rounded-[24px] border border-lime-300/90 bg-gradient-to-br from-lime-300 via-lime-400 to-emerald-400 p-8 shadow-[0_0_0_1px_rgba(132,204,22,0.45),0_20px_60px_-20px_rgba(34,197,94,0.75)]">
                  <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 tracking-tight mb-4">
                    Still not convinced?
                  </h2>
                  <p className="text-lg text-zinc-900/90 leading-relaxed mb-6">
                    Talk to our specialist and find out why businesses love working with Dcore
                    Systems.
                  </p>
                  <Button
                    className="h-12 px-6 rounded-full bg-zinc-950 hover:bg-black text-white font-semibold shadow-md"
                    asChild
                  >
                    <Link to="/book-demo">
                      Book A Discovery Call <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="rounded-[24px] border border-gray-200/70 bg-white/90 px-6 md:px-8 shadow-sm">
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                      <AccordionItem key={item.question} value={`faq-${index}`}>
                        <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-gray-900 hover:no-underline">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-gray-600 leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </Container>
          </Section>

          {/* Hidden iframe to preload CRM form for faster navigation to /contact */}
          <iframe
            src="https://admin.aibunty.com/widget/form/699acdf5d46f8"
            style={{
              display: "none",
              visibility: "hidden",
              height: 0,
              width: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            title="Preload CRM Form"
            aria-hidden="true"
            tabIndex={-1}
          />
        </div>
      </Layout>
    </>
  );
};

export default Index;
