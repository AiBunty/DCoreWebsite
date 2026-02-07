import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

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
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Common workflows
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            {workflows.map((workflow) => (
              <li key={workflow}>{workflow}</li>
            ))}
          </ul>
        </Container>
      </Section>
    </Layout>
  );
}
