import { Layout } from "@/components/Layout";
import { CheckCircle } from "lucide-react";

const complianceItems = [
  { title: "GDPR Compliant", description: "We comply with European data protection regulations" },
  { title: "India Data Protection Act", description: "Adherence to Indian privacy laws and regulations" },
  { title: "ISO 27001 Certified", description: "Information security management systems" },
  { title: "SOC 2 Type II", description: "Service organization control standards" },
  { title: "PCI DSS Compliant", description: "Payment card industry data security standards" },
  { title: "Regular Security Audits", description: "Third-party security assessments and penetration testing" }
];

export default function Compliance() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-sm font-semibold text-foreground">
              This website is owned and operated by <strong>DCORE SYSTEMS LLP</strong>, a legally registered Limited Liability Partnership 
              (LLPIN: ACT-9625) incorporated under the Limited Liability Partnership Act, 2008 (India).
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Compliance & Security</h1>
            <p className="text-xl text-muted-foreground">
              We take data protection and security seriously. Here's how we comply with regulations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">Our Compliance Standards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {complianceItems.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Data Security</h3>
              <p className="text-muted-foreground mb-4">
                We employ industry-standard encryption, regular security audits, and continuous monitoring to protect your data. 
                Our infrastructure is hosted on secure, certified cloud providers with redundant systems.
              </p>
              <p className="text-muted-foreground">
                For security concerns or to report a vulnerability, please contact our security team at security@dcore.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}