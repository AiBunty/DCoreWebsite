import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Phone, Clock } from "lucide-react";

export default function Support() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Support Center
            </h1>
            <p className="text-xl text-muted-foreground">
              We're here to help. Get support through multiple channels.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 bg-card rounded-lg border border-border text-center">
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-6">Chat with our support team in real-time</p>
                <Button className="bg-primary text-white hover:bg-blue-700" size="lg">
                  Start Chat
                </Button>
              </div>

              <div className="p-8 bg-card rounded-lg border border-border text-center">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Email Support</h3>
                <p className="text-muted-foreground mb-6">support@dcore.com</p>
                <p className="text-sm text-muted-foreground">Response time: 2-4 hours</p>
              </div>

              <div className="p-8 bg-card rounded-lg border border-border text-center">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Phone Support</h3>
                <p className="text-muted-foreground mb-6">+91-XXXXXXXXXX</p>
                <p className="text-sm text-muted-foreground">Mon-Fri: 9 AM - 6 PM IST</p>
              </div>

              <div className="p-8 bg-card rounded-lg border border-border text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Status Page</h3>
                <p className="text-muted-foreground mb-6">Check system status</p>
                <Button variant="outline" size="lg">
                  View Status
                </Button>
              </div>
            </div>

            <div className="p-8 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">FAQ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How do I get started with D'CORE?</h4>
                  <p className="text-muted-foreground text-sm">Start with our Getting Started guide or book a demo to speak with our team.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h4>
                  <p className="text-muted-foreground text-sm">We accept all major credit cards, UPI, and bank transfers for Indian customers.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Is my data secure?</h4>
                  <p className="text-muted-foreground text-sm">Yes, we use bank-level encryption and comply with international security standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}