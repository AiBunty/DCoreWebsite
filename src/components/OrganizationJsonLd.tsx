import React from "react";
import {
  COMPANY_ADDRESS,
  COMPANY_PHONE,
  SITE_LOGO,
  SITE_NAME,
  SITE_URL,
} from "@/seo/constants";

const OrganizationJsonLd = () => (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL,
      "logo": SITE_LOGO,
      "sameAs": [
        "https://www.linkedin.com/company/dcoresystems/",
        "https://twitter.com/dcoresystems"
      ],
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": COMPANY_PHONE,
        "contactType": "customer support",
        "areaServed": "Global"
      }],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY_ADDRESS,
        "addressLocality": "[City Placeholder]",
        "addressRegion": "[State Placeholder]",
        "postalCode": "[Postal Code Placeholder]",
        "addressCountry": "[Country Placeholder]"
      }
    })}
  </script>
);

export default OrganizationJsonLd;
