import { Layout } from "@/components/Layout";
import { AntigravityBg } from "@/components/home/AntigravityBg";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Sparkles, Check, X } from "lucide-react";

export default function Compare() {
  const features = [
    { name: "WhatsApp Automation", dcore: true, others: false },
    { name: "AI Chatbots", dcore: true, others: true },
    { name: "CRM Integration", dcore: true, others: true },
    { name: "24/7 Support", dcore: true, others: false },
    { name: "Custom Workflows", dcore: true, others: false },
    { name: "Enterprise Security", dcore: true, others: true },
  ];

  return (
    <Layout>
      <AntigravityBg />
      
      <Section className="relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-gray-200/50 mb-8 backdrop-blur-xl shadow-sm">
                <Sparkles className="w-4 h-4 text-gray-900" />
                <span className="text-sm font-semibold tracking-tight text-gray-800">Comparison</span>
              </div>
            </div>
            
            <h1 className="animate-slide-up text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              Why Choose Dcore Systems
            </h1>
            
            <p className="animate-slide-up text-xl font-medium text-gray-500 max-w-2xl mx-auto leading-snug tracking-tight" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
              See how we compare to other automation platforms.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24 relative z-10 border-t border-gray-200/50">
        <Container>
          <div className="overflow-x-auto">
            <table className="w-full bg-white/80 backdrop-blur-xl rounded-[32px] border border-gray-200/60 shadow-sm overflow-hidden">
              <thead>
                <tr className="border-b border-gray-200/50">
                  <th className="px-8 py-4 text-left font-bold text-gray-900">Feature</th>
                  <th className="px-8 py-4 text-center font-bold text-gray-900">Dcore Systems</th>
                  <th className="px-8 py-4 text-center font-bold text-gray-500">Other Platforms</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={idx} className="border-b border-gray-200/50 last:border-b-0 hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-4 font-semibold text-gray-900">{feature.name}</td>
                    <td className="px-8 py-4 text-center">
                      {feature.dcore ? (
                        <Check className="w-6 h-6 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-8 py-4 text-center">
                      {feature.others ? (
                        <Check className="w-6 h-6 text-gray-400 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

