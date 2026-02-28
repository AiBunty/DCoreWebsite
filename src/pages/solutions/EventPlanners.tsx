import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CheckCircle2 } from "lucide-react";
import { MacbookBrowserCard } from "@/components/MacbookBrowserCard";

const workflows = [
  "Inquiry capture and qualification",
  "Quote and proposal follow-ups",
  "Site visit scheduling",
  "Deposit and payment reminders",
  "Event-day coordination updates",
];

export default function EventPlanners() {
  return (
    <Layout>
      <Section hero className="bg-gradient-hero">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Event Planners
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Automate inquiries, proposals, and follow-ups with a single
              workflow-driven system for event businesses.
            </p>
            <Button size="lg" asChild>
              <Link to="/book-demo">Schedule a demo</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-4xl">
            <MacbookBrowserCard
              title="Common Workflows"
              icon={CheckCircle2}
              iconClassName="text-primary"
              bodyClassName="bg-accent/40"
            >
              <ul className="space-y-3 text-sm text-muted-foreground">
                {workflows.map((workflow) => (
                  <li key={workflow} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{workflow}</span>
                  </li>
                ))}
              </ul>
            </MacbookBrowserCard>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
