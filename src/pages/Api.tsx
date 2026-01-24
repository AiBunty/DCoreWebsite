import { Layout } from "@/components/Layout";
import { Code2, Zap, Lock } from "lucide-react";

const apiEndpoints = [
  { method: "POST", path: "/api/messages", description: "Send WhatsApp messages" },
  { method: "GET", path: "/api/contacts", description: "Retrieve contacts" },
  { method: "POST", path: "/api/payments", description: "Process payments" },
  { method: "GET", path: "/api/analytics", description: "Get analytics data" }
];

export default function Api() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              API Reference
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete API documentation for D'CORE Systems integrations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-card rounded-lg border border-border text-center">
              <Code2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground">RESTful APIs</h3>
              <p className="text-sm text-muted-foreground mt-2">Easy-to-use HTTP endpoints</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground">Webhooks</h3>
              <p className="text-sm text-muted-foreground mt-2">Real-time event notifications</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border text-center">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground">OAuth 2.0</h3>
              <p className="text-sm text-muted-foreground mt-2">Secure authentication</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-8">Main Endpoints</h2>
          <div className="space-y-4 mb-12">
            {apiEndpoints.map((endpoint, idx) => (
              <div key={idx} className="p-4 bg-card rounded-lg border border-border font-mono text-sm">
                <div className="flex items-center gap-4 mb-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary font-bold rounded">
                    {endpoint.method}
                  </span>
                  <span className="text-foreground">{endpoint.path}</span>
                </div>
                <p className="text-muted-foreground text-xs">{endpoint.description}</p>
              </div>
            ))}
          </div>

          <div className="p-8 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Authentication</h3>
            <p className="text-muted-foreground mb-6">
              All API requests require authentication using your API key. Include it in the Authorization header:
            </p>
            <div className="p-4 bg-card rounded font-mono text-sm mb-6">
              Authorization: Bearer YOUR_API_KEY
            </div>
            <button className="px-6 py-2 bg-primary text-white rounded hover:bg-blue-700 transition">
              Generate API Key
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}