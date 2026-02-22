import { Layout } from "@/components/Layout";

export default function CompanyDetails() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-sm font-semibold text-foreground">
              This website is owned and operated by <strong>DCORE SYSTEMS LLP</strong>, a legally registered Limited Liability Partnership
              incorporated under the Limited Liability Partnership Act, 2008 (India).
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Company Details</h1>
          <p className="text-lg text-muted-foreground">
            Official legal and verification information for DCORE SYSTEMS LLP.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-6">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-2">Legal Entity</h2>
              <p className="text-muted-foreground">DCORE SYSTEMS LLP</p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-2">LLPIN</h2>
              <p className="text-muted-foreground">ACT-9625</p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-2">GSTIN</h2>
              <p className="text-muted-foreground">27AAZFD2232J1Z3</p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-2">Date of Incorporation</h2>
              <p className="text-muted-foreground">05 January 2026</p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-2">Registered Office</h2>
              <p className="text-muted-foreground">
                BLDG C FLAT NO 7 S NO 244 BANER PUSHPANAGAR D P, Aundh Haveli, Pune - 411007,
                Maharashtra, India
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-2">Contact</h2>
              <p className="text-muted-foreground">
                <span className="font-semibold">Email:</span>{" "}
                <a className="text-primary hover:underline" href="mailto:support@dcoresystems.com">
                  support@dcoresystems.com
                </a>
              </p>
              <p className="text-muted-foreground mt-2">
                <span className="font-semibold">Phone:</span>{" "}
                <a className="text-primary hover:underline" href="tel:+918856091300">
                  +91 88560 91300
                </a>
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-2">Business Description</h2>
              <p className="text-muted-foreground">
                DCORE SYSTEMS LLP provides SaaS solutions including CRM, WhatsApp Business API automation,
                customer engagement tools, and AI-driven business workflows for B2B and B2C customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
