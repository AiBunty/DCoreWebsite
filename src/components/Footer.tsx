import { Link } from "react-router-dom";
import aiBuntyLogo from "@/assets/ai-bunty-logo-new.png";
import { Container } from "@/components/layout/Container";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "All-in-One Platform", href: "/all-in-one-marketing-automation-platform" },
      { name: "WhatsApp Automation", href: "/whatsapp-marketing-software" },
      { name: "AI Funnel Builder", href: "/ai-funnel-builder" },
      { name: "CRM Automation", href: "/crm-with-whatsapp-automation" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Agencies", href: "/solutions/agencies" },
      { name: "Consultants", href: "/solutions/consultants" },
      { name: "Real Estate", href: "/solutions/real-estate" },
      { name: "Coaches", href: "/solutions/coaches" },
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
                src={aiBuntyLogo}
                alt="Dcore Systems AI automation platform logo"
                className="h-9 w-auto"
              />
              <p className="text-sm text-muted-foreground max-w-sm">
                AI-first omnichannel automation for WhatsApp, funnels, CRM, and growth teams.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
            <span>© {currentYear} Dcore Systems LLP. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link to="/legal/company" className="hover:text-foreground transition-colors">
                Company details
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
