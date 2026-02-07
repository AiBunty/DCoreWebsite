import { SITE_NAME, SITE_URL } from "./constants";

export const canonicalUrl = (path: string) => {
  if (!path.startsWith("/")) {
    return `${SITE_URL}/${path}`;
  }
  return `${SITE_URL}${path === "/" ? "/" : path}`;
};

export const buildBreadcrumbJsonLd = (
  items: { name: string; path: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: canonicalUrl(item.path),
  })),
});

export const buildFaqJsonLd = (
  faqs: { question: string; answer: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const buildServiceJsonLd = (params: {
  name: string;
  serviceType: string;
  description?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: params.name,
  serviceType: params.serviceType,
  description: params.description,
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  areaServed: "Global",
  offers: {
    "@type": "Offer",
    url: params.url,
  },
});
