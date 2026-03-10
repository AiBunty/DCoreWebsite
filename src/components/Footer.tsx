import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "WhatsApp Business API", href: "/whatsapp-business-api-included" },
      { name: "CRM and ERP Development", href: "/crm-with-whatsapp-automation" },
      { name: "Workflow Automation", href: "/workflow-automation" },
      { name: "Cloud Software Solutions", href: "/all-in-one-marketing-automation-platform" },
    ],
  },
  {
    title: "Onboarding",
    links: [
      { name: "Onboarding Form", href: "/onboarding-form" },
      { name: "Onboarding Success", href: "/onboarding-success" },
      { name: "Agreement Generator", href: "/agreement-generator" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Docs", href: "/docs" },
      { name: "API", href: "/api" },
      { name: "Guides", href: "/guides" },
      { name: "Support", href: "/support" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Use", href: "/terms-of-use" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Refund Policy", href: "/refund-policy" },
      { name: "Affiliate Policy", href: "/affiliate-policy" },
      { name: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="py-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_2fr]">
            <div className="space-y-3">
              <img
                src="/assets/logo.png"
                alt="Dcore Systems logo"
                className="h-9 w-auto"
              />
              <p className="text-sm text-muted-foreground max-w-sm">
                Dcore Systems LLP builds business automation, communication systems, and digital
                transformation platforms for startups, SMEs, and enterprises.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {footerLinks.map((column) => (
                <div key={column.title}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-3">
                    {column.title}
                  </p>
                  <div className="space-y-2">
                    {column.links.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-border bg-muted/30">
        <Container>
          <div className="py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>(c) {currentYear} Dcore Systems LLP. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link to="/terms-of-use" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link to="/affiliate-policy" className="hover:text-foreground transition-colors">
                Affiliate
              </Link>
              <Link to="/disclaimer" className="hover:text-foreground transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

