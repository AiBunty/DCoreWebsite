import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About D'CORE Systems
            </h1>
            <p className="text-xl text-muted-foreground">
              We're building the future of AI-powered business automation for India.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              To empower Indian businesses with cutting-edge AI technology that automates operations, 
              reduces costs, and accelerates growth. We believe that powerful business tools should be 
              affordable, accessible, and designed specifically for the Indian market.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-card rounded-lg border border-border">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Team</h3>
                <p className="text-muted-foreground">
                  Experienced entrepreneurs and technologists dedicated to solving real business problems.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Focus</h3>
                <p className="text-muted-foreground">
                  India-first approach with localized payment methods, language support, and pricing.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuous development of AI-powered features that drive real business results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Legal Business Information</h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                <strong>DCORE SYSTEMS LLP</strong> is a legally registered Limited Liability Partnership incorporated 
                under the Limited Liability Partnership Act, 2008 (India).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-card rounded-lg p-6 border border-border">
                <div>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-semibold">Date of Incorporation:</span> 05 January 2026 (05-01-2026)
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-semibold">LLPIN:</span> ACT-9625
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">GSTIN:</span> 27AAZFD2232J1Z3
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground font-semibold mb-2">Registered Office:</p>
                  <p className="text-muted-foreground">
                    BLDG C FLAT NO 7 S NO 244 BANER PUSHPANAGAR D P, Aundh Haveli, Pune – 411007, Maharashtra, India
                  </p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground">
                DCORE SYSTEMS LLP provides SaaS solutions including CRM, WhatsApp Business API automation, 
                customer engagement tools, and AI-driven business workflows for B2B and B2C customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Ready to Get Started?</h2>
          <Button className="bg-primary text-white hover:bg-blue-700" size="lg" asChild>
            <Link to="/book-demo">Book a Demo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}