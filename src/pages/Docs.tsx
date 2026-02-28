import { Layout } from "@/components/Layout";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Sparkles, Book } from "lucide-react";

export default function Docs() {
  return (
    <Layout>
      <AntigravityBg />
      
      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200/50 mb-8 backdrop-blur-xl shadow-sm">
                <Sparkles className="w-4 h-4 text-gray-900" />
                <span className="text-sm font-semibold tracking-tight text-gray-800">Documentation</span>
              </div>
            </div>
            
            <h1 className="animate-slide-up text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              Developer & User Guides
            </h1>
            
            <p className="animate-slide-up text-xl font-medium text-gray-500 max-w-2xl mx-auto leading-snug tracking-tight" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
              Comprehensive documentation to get you up and running.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24 relative z-10 border-t border-gray-200/50 bg-gray-50/60">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {["Getting Started", "API Reference", "Integrations", "Troubleshooting"].map((topic, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm p-8 rounded-[24px] border border-gray-200/60 shadow-sm">
                <Book className="w-6 h-6 text-gray-900 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{topic}</h3>
                <p className="text-gray-500 text-sm">Detailed guides and documentation coming soon.</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

