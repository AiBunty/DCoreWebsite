import { GlassCard } from "./GlassCard";
import { DCoreButton } from "./DCoreButton";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface CTASectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CTASection({
  title = "Ready to transform your automation stack?",
  description =
    "Launch AI-first omnichannel workflows, funnels, and CRM automation in one platform.",
  ctaText = "Schedule Demo",
  ctaHref = "/book-demo",
}: CTASectionProps) {
  return (
    <Section>
      <Container>
        <GlassCard className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              {title}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-snug">
              {description}
            </p>
            <div className="pt-2">
              <DCoreButton variant="secondary" size="large" onClick={() => (window.location.href = ctaHref)}>
                {ctaText}
              </DCoreButton>
            </div>
          </div>
        </GlassCard>
      </Container>
    </Section>
  );
}
