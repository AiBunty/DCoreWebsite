import { Layout } from "@/components/Layout";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Sparkles, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <Layout>
      <AntigravityBg />
      
      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200/50 mb-8 backdrop-blur-xl shadow-sm">
                <Sparkles className="w-4 h-4 text-gray-900" />
                <span className="text-sm font-semibold tracking-tight text-gray-800">Success Stories</span>
              </div>
            </div>
            
            <h1 className="animate-slide-up text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              Real Results from Real Clients
            </h1>
            
            <p className="animate-slide-up text-xl font-medium text-gray-500 max-w-2xl mx-auto leading-snug tracking-tight" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
              See how businesses are transforming with our AI-powered automation solutions.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24 relative z-10 border-t border-gray-200/50 bg-gray-50/60">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-white/80 backdrop-blur-sm p-8 rounded-[24px] border border-gray-200/60 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"This platform transformed how we handle customer communication. Results speak for themselves."</p>
                <p className="font-semibold text-gray-900">Client {num}</p>
                <p className="text-sm text-gray-500">Business Category</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

