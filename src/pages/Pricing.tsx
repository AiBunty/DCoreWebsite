import { Layout } from "@/components/Layout";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { TiltWrapper } from "@/components/ui/TiltWrapper";
import { ArrowRight, CheckCircle2, Circle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

type PlanFeature = {
  label: string;
  included: boolean;
};

type PricingPlan = {
  name: string;
  price: string;
  suffix?: string;
  description: string;
  ctaLabel: string;
  featured?: boolean;
  features: PlanFeature[];
};

const plans: PricingPlan[] = [
  {
    name: "Pro Plan",
    price: "₹5999",
    suffix: "/monthly",
    description:
      "This plan is tailor-made for service providers to streamline their business processes using automation.",
    ctaLabel: "Get Pro Plan",
    features: [
      { label: "Funnel & Website Builder", included: true },
      { label: "CRM", included: true },
      { label: "WhatsApp Marketing", included: true },
      { label: "Finance Management", included: true },
      { label: "Automation", included: true },
      { label: "Email Marketing (2000/m)", included: true },
      { label: "Ad Launcher", included: true },
      { label: "Add Staff (5 Members)", included: true },
      { label: "LMS", included: false },
      { label: "Student Portal", included: false },
      { label: "Own Branding + Own App", included: false },
    ],
  },
  {
    name: "Impact Plan",
    price: "₹9999",
    suffix: "/monthly",
    description:
      "If you're a coach or consultant, this plan gives you a clear path to attract, nurture, and convert your ideal clients consistently.",
    ctaLabel: "Get Impact Plan",
    featured: true,
    features: [
      { label: "Funnel & Website Builder", included: true },
      { label: "CRM", included: true },
      { label: "WhatsApp Marketing", included: true },
      { label: "Finance Management", included: true },
      { label: "Automation", included: true },
      { label: "Email Marketing (10000/m)", included: true },
      { label: "Ad Launcher", included: true },
      { label: "Add Staff (Unlimited Members)", included: true },
      { label: "LMS", included: true },
      { label: "Student Portal", included: true },
      { label: "Own Branding + Own App", included: false },
    ],
  },
  {
    name: "White Label Solution",
    price: "NA",
    description:
      "The White Label Plan gives your team access to a fully branded all-in-one platform under your own domain and logo.",
    ctaLabel: "No Monthly Option",
    features: [
      { label: "Funnel & Website Builder", included: true },
      { label: "CRM", included: true },
      { label: "WhatsApp Marketing", included: true },
      { label: "Finance Management", included: true },
      { label: "Automation", included: true },
      { label: "Email Marketing (10000/m)", included: true },
      { label: "Ad Launcher", included: true },
      { label: "Add Staff (Unlimited Members)", included: true },
      { label: "LMS", included: true },
      { label: "Student Portal", included: true },
      { label: "Own Branding + Own App", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <Layout>
      <AntigravityBg />

      <Section className="relative z-10 pt-28 pb-16">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200/70 bg-white/75 px-4 py-2 shadow-sm backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-gray-900" />
              <span className="text-sm font-semibold tracking-tight text-gray-900">Pricing</span>
            </div>

            <h1 className="mb-5 text-5xl font-semibold leading-[1.04] tracking-tight text-gray-900 md:text-6xl">
              Choose the plan that fits
              <br />
              your growth stage
            </h1>

            <p className="mx-auto max-w-3xl text-base font-medium leading-7 text-gray-600 md:text-lg">
              Monthly plans for operators, coaches, and branded platform rollouts. Pick a plan
              and continue to the demo-booking page to talk with the team directly.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="relative z-10 border-t border-gray-200/50 bg-white/40 py-20 backdrop-blur-md">
        <Container>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Simple plan selection, direct demo booking
            </h2>
            <p className="text-lg text-gray-600">
              Choose a plan, then move to the booking page to schedule a demo and discuss fit,
              setup details, and any custom requirements.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {plans.map((plan) => (
              <TiltWrapper key={plan.name}>
                <article
                  className={`flex h-full flex-col rounded-[28px] border p-7 shadow-sm backdrop-blur-xl md:p-8 ${
                    plan.featured
                      ? "border-gray-900/80 bg-white"
                      : "border-gray-200/70 bg-white/85"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[1.7rem] font-bold tracking-tight text-gray-900">{plan.name}</p>
                    {plan.featured ? (
                      <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                        Popular
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-8 flex items-end gap-2 text-gray-900">
                    <span className="text-5xl font-bold leading-none tracking-tight">{plan.price}</span>
                    {plan.suffix ? (
                      <span className="pb-1 text-2xl font-medium text-gray-500">{plan.suffix}</span>
                    ) : null}
                  </div>

                  <p className="mt-8 max-w-sm text-lg leading-9 text-gray-600">{plan.description}</p>

                  <div className="mt-8 h-px w-full bg-gray-200" />

                  <div className="mt-8 flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature.label} className="flex items-start gap-3 text-lg leading-7">
                        {feature.included ? (
                          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-gray-900" />
                        ) : (
                          <Circle className="mt-1 h-5 w-5 flex-shrink-0 text-gray-300" />
                        )}
                        <span className={feature.included ? "text-gray-600" : "text-gray-400"}>
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/book-demo?plan=${encodeURIComponent(plan.name)}`}
                    className={`mt-10 inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-7 text-base font-semibold transition-colors ${
                      plan.featured
                        ? "bg-gray-900 text-white hover:bg-gray-800"
                        : "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {plan.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </TiltWrapper>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-5xl rounded-[24px] border border-gray-200/70 bg-white/85 px-6 py-5 text-center shadow-sm backdrop-blur-xl">
            <p className="text-base font-semibold text-gray-900 md:text-lg">
              Above pricing is inclusive of GST. Book a demo for more plans and payment options.
            </p>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
