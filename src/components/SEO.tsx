import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  jsonLd?: object | object[];
  children?: React.ReactNode;
}

/**
 * SEO component for setting meta tags, Open Graph, Twitter, canonical, robots, and JSON-LD.
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  robots = "index,follow",
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  jsonLd,
  children,
}) => {
  const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content={robots} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {/* JSON-LD Structured Data */}
      {jsonLdArray.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      {children}
    </Helmet>
  );
};

export default SEO;
