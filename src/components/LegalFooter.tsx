/**
 * LegalFooter Component
 * Displays company legal information for Meta Business Verification compliance
 * Must be plain text (not hidden behind modals, accordions, or images)
 * Server-rendered for crawler visibility
 */

export function LegalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Legal Statement */}
          <div className="space-y-2">
            <p className="text-sm text-foreground font-semibold">
              This website is owned and operated by <strong>DCORE SYSTEMS LLP</strong>.
            </p>
            <p className="text-sm text-muted-foreground">
              DCORE SYSTEMS LLP is a legally registered Limited Liability Partnership incorporated under the Limited Liability Partnership Act, 2008 (India).
            </p>
          </div>

          {/* Business Identifiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">
                <span className="font-semibold">LLPIN:</span> ACT-9625
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">GSTIN:</span> 27AAZFD2232J1Z3
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">Date of Incorporation:</span> 05 January 2026
              </p>
            </div>
            <div>
              <p className="text-muted-foreground font-semibold mb-2">Registered Office:</p>
              <p className="text-muted-foreground">
                BLDG C FLAT NO 7 S NO 244 BANER PUSHPANAGAR D P, Aundh Haveli, Pune – 411007, Maharashtra, India
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-border pt-4 space-y-2">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:support@dcoresystems.com" className="hover:text-primary transition-colors">
                support@dcoresystems.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+918856091300" className="hover:text-primary transition-colors">
                +91 88560 91300
              </a>
            </p>
          </div>

          {/* Services Description */}
          <div className="border-t border-border pt-4">
            <p className="text-sm text-muted-foreground">
              DCORE SYSTEMS LLP provides SaaS solutions including CRM, WhatsApp Business API automation, 
              customer engagement tools, and AI-driven business workflows for B2B and B2C customers.
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-4 text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} DCORE SYSTEMS LLP. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
