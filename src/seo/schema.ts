import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_LEGAL,
  COMPANY_PHONE,
  COMPANY_WHATSAPP,
  SAME_AS_LINKS,
  SITE_LOGO,
  SITE_NAME,
  SITE_URL,
} from "./constants";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: SITE_LOGO,
  legalName: "DCORE SYSTEMS LLP",
  email: COMPANY_EMAIL,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: COMPANY_PHONE,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: COMPANY_WHATSAPP,
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_ADDRESS,
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411007",
    addressCountry: "IN",
  },
  additionalType: COMPANY_LEGAL,
  ...(SAME_AS_LINKS.length > 0 ? { sameAs: SAME_AS_LINKS } : {}),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DCore Systems Business Automation Platform",
  description:
    "Business automation platform with WABA integration, CRM automation, lead nurturing automation, and sales funnel automation for growth teams.",
  operatingSystem: "Cloud",
  applicationCategory: "BusinessApplication",
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/pricing`,
  },
};
