import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { TiltWrapper } from "@/components/ui/TiltWrapper";
import { EmbeddedFormLoader } from "@/components/EmbeddedFormLoader";
import { BOOK_DEMO_FORM_URL } from "@/lib/formCache";
import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Globe,
  Mail,
  MessageSquare,
  Phone,
  Sparkles,
} from "lucide-react";

export default function BookDemo() {
  const [searchParams] = useSearchParams();
  const [isFormLoading, setIsFormLoading] = useState(true);
  const selectedPlan = searchParams.get("plan");

  const whatsappLink = useMemo(() => {
    const baseMessage = selectedPlan
      ? `Hi Dcore Systems, I want to enquire about the ${selectedPlan} plan and book a demo.`
      : "Hi Dcore Systems, I want to book a demo and discuss the right plan for my business.";

    return `https://wa.me/918856091300?text=${encodeURIComponent(baseMessage)}`;
  }, [selectedPlan]);

  return (
    <Layout>
      <AntigravityBg />

      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="animate-slide-up"
              style={{ animationDelay: "100ms", animationFillMode: "both" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200/50 mb-8 backdrop-blur-xl shadow-sm">
                <Sparkles className="w-4 h-4 text-gray-900" />
                <span className="text-sm font-semibold tracking-tight text-gray-800">Demo</span>
              </div>
            </div>

            <h1
              className="animate-slide-up text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6"
              style={{ animationDelay: "200ms", animationFillMode: "both" }}
            >
              See Dcore Systems in Action
            </h1>

            <p
              className="animate-slide-up text-xl font-medium text-gray-500 max-w-2xl mx-auto leading-snug tracking-tight"
              style={{ animationDelay: "300ms", animationFillMode: "both" }}
            >
              Schedule a personalized demo with our team to see how we can automate your business.
            </p>

            {selectedPlan ? (
              <div
                className="animate-slide-up mt-8 inline-flex items-center rounded-full border border-gray-200/70 bg-white/85 px-5 py-3 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur-xl"
                style={{ animationDelay: "380ms", animationFillMode: "both" }}
              >
                Selected plan: {selectedPlan}
              </div>
            ) : null}
          </div>
        </Container>
      </Section>

      <Section className="py-20 relative z-10 border-t border-gray-200/50 bg-white/40 backdrop-blur-md">
        <Container>
          <div className="max-w-6xl mx-auto mb-10">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[28px] border border-gray-200/70 bg-white/85 p-7 shadow-sm backdrop-blur-xl md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/70 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-800">
                  <CalendarDays className="h-4 w-4 text-gray-900" />
                  How To Book
                </div>

                <h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                  Follow these steps to book your demo
                </h2>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-[22px] border border-gray-200/70 bg-gray-50/80 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
                      <CalendarDays className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Step 1
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-gray-900">Select a date</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Start by clicking your preferred available date on the calendar.
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-gray-200/70 bg-gray-50/80 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
                      <Clock3 className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Step 2
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-gray-900">Choose a time slot</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      After selecting the date, choose the timing that works best for you.
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-gray-200/70 bg-gray-50/80 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Step 3
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-gray-900">Confirm booking</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Enter your details, submit the form, and your demo slot will be reserved.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-gray-200/70 bg-white/90 p-7 shadow-sm backdrop-blur-xl md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
                  Visual Guide
                </p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-[22px] border border-gray-200/70 bg-gradient-to-br from-white to-gray-50 p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                        <CalendarDays className="h-5 w-5" />
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="mt-4 grid grid-cols-7 gap-2">
                      {[...Array(7)].map((_, index) => (
                        <div
                          key={`date-${index}`}
                          className={`h-8 rounded-lg border ${
                            index === 2
                              ? "border-gray-900 bg-gray-900"
                              : "border-gray-200 bg-white"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mt-4 text-sm font-medium text-gray-700">1. Pick an available date</p>
                  </div>

                  <div className="rounded-[22px] border border-gray-200/70 bg-gradient-to-br from-white to-gray-50 p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                        <Clock3 className="h-5 w-5" />
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="mt-4 space-y-2">
                      {["10:00 AM", "12:30 PM", "4:00 PM"].map((time, index) => (
                        <div
                          key={time}
                          className={`rounded-xl border px-4 py-2 text-sm font-medium ${
                            index === 1
                              ? "border-gray-900 bg-gray-900 text-white"
                              : "border-gray-200 bg-white text-gray-700"
                          }`}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm font-medium text-gray-700">2. Choose your timing</p>
                  </div>

                  <div className="rounded-[22px] border border-green-200 bg-green-50 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-base font-semibold text-gray-900">3. Submit and confirm</p>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Once your details are entered, submit the form and wait for the confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-6">
              <TiltWrapper>
                <div className="rounded-[28px] border border-gray-200/70 bg-white/85 p-8 shadow-sm backdrop-blur-xl">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                    Contact details
                  </h2>
                  <p className="text-gray-600 leading-7 mb-8">
                    If you want a faster response, contact the team directly while the booking form
                    is open.
                  </p>

                  <div className="space-y-6">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 rounded-[22px] border border-green-200 bg-green-50 px-5 py-4 transition-colors hover:bg-green-100"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
                          WhatsApp enquiry
                        </p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">+91 88560 91300</p>
                        <p className="mt-1 text-sm text-gray-600">
                          Start a direct WhatsApp chat with a prefilled enquiry message.
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:support@dcoresystems.com"
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 border border-gray-200/70">
                        <Mail className="h-5 w-5 text-gray-900" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                          Email
                        </p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">
                          support@dcoresystems.com
                        </p>
                      </div>
                    </a>

                    <a href="tel:+919766521300" className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 border border-gray-200/70">
                        <Phone className="h-5 w-5 text-gray-900" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                          Calling
                        </p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">+91 97665 21300</p>
                      </div>
                    </a>

                    <a
                      href="https://www.dcoresystems.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 border border-gray-200/70">
                        <Globe className="h-5 w-5 text-gray-900" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                          Website
                        </p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">
                          www.dcoresystems.com
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </TiltWrapper>
            </div>

            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-[32px] border border-gray-200/60 bg-white/75 shadow-sm backdrop-blur-xl">
                <div className="flex h-14 items-center gap-3 border-b border-gray-200/70 bg-white/85 px-6 md:px-8">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-3 text-sm font-medium text-gray-500">Book demo appointment</div>
                </div>

                <div className="bg-gradient-to-b from-white/40 to-gray-50/50 p-4 md:p-8">
                  <p className="mb-4 text-sm text-gray-600">
                    Pick a time slot and our team will walk you through the platform, setup flow,
                    and the plan that fits your business.
                  </p>

                  <div className="relative overflow-hidden rounded-[24px] border border-gray-200/80 bg-white">
                    {isFormLoading ? <EmbeddedFormLoader label="Loading booking form..." /> : null}

                    <iframe
                      src={BOOK_DEMO_FORM_URL}
                      title="Book Demo Appointment"
                      className="h-[680px] w-full border-0"
                      onLoad={() => setIsFormLoading(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
