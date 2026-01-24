import { Layout } from "@/components/Layout";
import { BookOpen, ArrowRight } from "lucide-react";

const guides = [
  {
    title: "WhatsApp Automation Guide",
    description: "Learn how to set up and manage WhatsApp automation for customer communication.",
    duration: "15 min read"
  },
  {
    title: "CRM Setup and Configuration",
    description: "Complete guide to setting up your CRM system and managing customer relationships.",
    duration: "20 min read"
  },
  {
    title: "Payment Integration",
    description: "Integrate Razorpay and other payment gateways with D'CORE.",
    duration: "10 min read"
  },
  {
    title: "Analytics and Reporting",
    description: "Master analytics features to track business performance.",
    duration: "12 min read"
  },
  {
    title: "Team Collaboration",
    description: "Set up teams, roles, and permissions for your organization.",
    duration: "8 min read"
  },
  {
    title: "Advanced Automations",
    description: "Create complex workflows and automations to streamline operations.",
    duration: "25 min read"
  }
];

export default function Guides() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Guides & Tutorials
            </h1>
            <p className="text-xl text-muted-foreground">
              Step-by-step guides to help you get the most out of D'CORE Systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide, idx) => (
              <div key={idx} className="p-6 bg-card rounded-lg border border-border hover:border-primary transition cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <BookOpen className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground font-medium">{guide.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{guide.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{guide.description}</p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Read Guide <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}