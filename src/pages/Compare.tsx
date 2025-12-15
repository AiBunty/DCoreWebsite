import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { MascotTip } from "@/components/MascotTip";
import { ArrowRight } from "lucide-react";

const comparisons = [
  {
    name: "Flexifunnels",
    href: "/compare/flexifunnels",
    description: "Page builder vs complete business operating system",
  },
  {
    name: "TagMango",
    href: "/compare/tagmango",
    description: "Course platform vs full-stack business automation",
  },
  {
    name: "Graphy",
    href: "/compare/graphy",
    description: "Content hosting vs CRM-driven growth platform",
  },
  {
    name: "GoHighLevel",
    href: "/compare/gohighlevel",
    description: "Agency tool vs India-first business platform",
  },
  {
    name: "Kajabi",
    href: "/compare/kajabi",
    description: "Course platform vs WhatsApp-integrated CRM",
  },
  {
    name: "AiSensy",
    href: "/compare/aisensy",
    description: "WhatsApp-only vs complete business suite",
  },
  {
    name: "Skool",
    href: "/compare/skool",
    description: "Community platform vs end-to-end business OS",
  },
];

export default function ComparePage() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ai Bunty vs Other Tools
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Why use multiple tools when one platform does it all?
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.name}
                to={comparison.href}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 border border-border group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Ai Bunty vs {comparison.name}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {comparison.description}
                </p>
              </Link>
            ))}
          </div>

          <MascotTip 
            message="Comparisons are based on real use cases faced by service businesses in India."
            className="max-w-2xl mx-auto"
          />
        </div>
      </section>

      <CTASection 
        title="Ready to Switch to Ai Bunty?"
        subtitle="Join thousands of businesses who chose one platform over many."
      />
    </Layout>
  );
}
