import React from "react";
import { SITE_URL } from "@/seo/constants";

const SoftwareApplicationJsonLd = () => (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Dcore Systems Omnichannel Automation Platform",
      "operatingSystem": "Cloud",
      "applicationCategory": "BusinessApplication",
      "url": SITE_URL,
      "offers": {
        "@type": "Offer",
        "url": `${SITE_URL}/pricing`
      }
    })}
  </script>
);

export default SoftwareApplicationJsonLd;
