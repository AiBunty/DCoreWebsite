import {
  COMPANY_ADDRESS,
  COMPANY_LEGAL,
  COMPANY_PHONE,
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
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: COMPANY_PHONE,
      contactType: "customer support",
      areaServed: "Global",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_ADDRESS,
    addressLocality: "[City Placeholder]",
    addressRegion: "[State Placeholder]",
    postalCode: "[Postal Code Placeholder]",
    addressCountry: "[Country Placeholder]",
  },
  additionalType: COMPANY_LEGAL,
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
  name: "Dcore Systems Omnichannel Automation Platform",
  operatingSystem: "Cloud",
  applicationCategory: "BusinessApplication",
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/pricing`,
  },
};
