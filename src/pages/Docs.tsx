import { Layout } from "@/components/Layout";
import { BookOpen, Code, FileText } from "lucide-react";

const docSections = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn the basics of D'CORE Systems and get up and running in minutes",
    items: ["Installation", "First Setup", "Configuration", "Best Practices"]
  },
  {
    icon: Code,
    title: "Development",
    description: "Integrate D'CORE into your applications with our SDKs and APIs",
    items: ["SDK Documentation", "Code Samples", "API Reference", "Webhooks"]
  },
  {
    icon: FileText,
    title: "Guides",
    description: "In-depth guides on using D'CORE features effectively",
    items: ["WhatsApp Automation", "CRM Setup", "Payment Integration", "Analytics"]
  }
];

export default function Docs() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive guides and documentation for D'CORE Systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {docSections.map((section, idx) => {
                const Icon = section.icon;
                return (
                  <div key={idx} className="p-6 bg-card rounded-lg border border-border hover:border-primary transition">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">{section.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{section.description}</p>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-sm text-primary hover:underline cursor-pointer">
                          → {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="p-8 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Can't Find What You're Looking For?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help. Check out our FAQ or reach out to us directly.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-primary text-white rounded hover:bg-blue-700 transition">
                  Browse FAQ
                </button>
                <button className="px-6 py-2 border border-primary text-primary rounded hover:bg-primary/5 transition">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}