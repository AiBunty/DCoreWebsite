import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Globe, Linkedin, Mail, Phone, Twitter } from "lucide-react";

const footerLinkColumns = [
  {
    title: "Services",
    links: [
      { name: "WhatsApp Business API", href: "/whatsapp-business-api-included" },
      { name: "CRM and ERP Development", href: "/crm-with-whatsapp-automation" },
      { name: "Workflow Automation", href: "/workflow-automation" },
      { name: "Cloud Software Solutions", href: "/all-in-one-marketing-automation-platform" }
    ],
  },
  {
    title: "Onboarding",
    links: [
      { name: "Onboarding Form", href: "/onboarding-form" },
      { name: "Onboarding Success", href: "/onboarding-success" },
      { name: "Agreement Generator", href: "/agreement-generator" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Docs", href: "/docs" },
      { name: "API", href: "/api" },
      { name: "Guides", href: "/guides" },
      { name: "Support", href: "/support" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Compare", href: "/compare" },
      { name: "Book Demo", href: "/book-demo" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Use", href: "/terms-of-use" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Refund Policy", href: "/refund-policy" },
      { name: "Affiliate Policy", href: "/affiliate-policy" },
      { name: "Disclaimer", href: "/disclaimer" },
    ]
  }
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/dcoresystems/", icon: Linkedin },
  { name: "X", href: "https://twitter.com/dcoresystems", icon: Twitter }
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerImage = "https://storagev2.files-vault.com/uploads/blacklabel-765/sub-account-76998/ChatGPT%20Image%20Mar%2011,%202026,%2001_07_38%20PM.webp";

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 text-slate-200">
      <div className="absolute inset-0">
        <img
          src={footerImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(58,106,255,0.18),transparent_42%),radial-gradient(circle_at_80%_75%,rgba(67,67,161,0.18),transparent_38%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020611]/30 via-[#030a17]/55 to-[#02050f]/96" />
      </div>

      <Container className="relative z-10 flex min-h-[clamp(720px,92vw,1180px)] flex-col justify-between py-10 sm:py-14 md:py-16 lg:min-h-[980px] lg:py-20">
        <div className="flex justify-center px-2 pt-2 sm:px-4 md:px-0">
          <div className="w-full max-w-3xl rounded-[28px] border border-white/25 bg-[#0a1228]/58 p-6 text-center shadow-[0_18px_60px_-25px_rgba(2,6,23,0.9)] backdrop-blur-md md:p-8">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Need automation tailored to your business model?
            </h2>
            <p className="mt-3 text-sm leading-snug text-slate-200/90 md:text-base">
              Share your current process with our team and we will map the right WhatsApp, CRM, ERP, and cloud solution architecture.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Talk to Dcore Systems
              </Link>
            </div>
          </div>
        </div>

        <div className="pb-2 sm:pb-4 md:pb-6">
          <div className="mb-8 flex items-end justify-center">
            <span className="text-center text-[22vw] leading-[0.86] font-black uppercase tracking-[0.22em] text-white/85 drop-shadow-[0_8px_28px_rgba(0,0,0,0.85)] sm:text-[16vw] md:text-[11vw]">
              DCORE
            </span>
          </div>

          <div className="rounded-[28px] border border-white/12 bg-[#040b19]/48 p-6 shadow-[0_18px_60px_-30px_rgba(2,6,23,0.95)] backdrop-blur-md md:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_2fr]">
            <div className="space-y-6">
              <img
                src="/assets/logo.png"
                alt="Dcore Systems logo"
                className="h-11 w-auto invert brightness-[3.3] contrast-125"
              />
              <p className="max-w-md text-sm leading-relaxed text-slate-300/95">
                Dcore Systems LLP designs connected automation platforms for marketing, operations, and customer support workflows.
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:support@dcoresystems.com"
                  className="inline-flex items-center gap-2 text-sm text-slate-200/90 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-slate-400" />
                  support@dcoresystems.com
                </a>
                <a
                  href="tel:+919766521300"
                  className="block text-sm text-slate-200/90 transition-colors hover:text-white"
                >
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4 text-slate-400" />
                    +91 97665 21300
                  </span>
                </a>
                <a
                  href="https://www.dcoresystems.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-200/90 transition-colors hover:text-white"
                >
                  <Globe className="h-4 w-4 text-slate-400" />
                  www.dcoresystems.com
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => {
                  const SocialIcon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-600/90 bg-slate-900/45 text-slate-300 transition-colors hover:border-slate-300/80 hover:text-white"
                    >
                      <SocialIcon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
              {footerLinkColumns.map((column) => (
                <div key={column.title}>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {column.title}
                  </p>
                  <div className="space-y-2.5">
                    {column.links.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block text-sm text-slate-300/90 transition-colors hover:text-white"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-700/80 pt-6 text-xs text-slate-400 md:flex-row md:items-center">
            <span>(c) {currentYear} Dcore Systems LLP. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="transition-colors hover:text-slate-100">
                Privacy
              </Link>
              <Link to="/terms-of-use" className="transition-colors hover:text-slate-100">
                Terms
              </Link>
              <Link to="/affiliate-policy" className="transition-colors hover:text-slate-100">
                Affiliate
              </Link>
              <Link to="/disclaimer" className="transition-colors hover:text-slate-100">
                Disclaimer
              </Link>
            </div>
          </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
