import React from "react";
import { SITE_NAME, SITE_URL } from "@/seo/constants";

const WebSiteJsonLd = () => (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": SITE_NAME,
      "url": SITE_URL
    })}
  </script>
);

export default WebSiteJsonLd;
