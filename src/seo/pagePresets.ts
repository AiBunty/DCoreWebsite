import { canonicalUrl } from "@/seo/seoUtils";
import { SITE_NAME, SITE_OG_IMAGE } from "@/seo/constants";

export interface SeoPagePreset {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
  twitterCard: "summary_large_image";
}

const withDefaults = (config: {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  ogTitle?: string;
  ogDescription?: string;
}): SeoPagePreset => {
  const canonical = canonicalUrl(config.path);

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    canonical,
    ogTitle: config.ogTitle ?? config.title,
    ogDescription: config.ogDescription ?? config.description,
    ogUrl: canonical,
    ogImage: SITE_OG_IMAGE,
    twitterCard: "summary_large_image",
  };
};

export const SEO_PAGE_PRESETS = {
  home: withDefaults({
    title: `Business Automation Platform for Coaches & Real Estate | ${SITE_NAME}`,
    description:
      "DCore Systems is a business automation platform for coaches, freelancers, and real estate teams with WABA integration, CRM automation, and lead nurturing workflows.",
    keywords: [
      "business automation platform",
      "coaches automation",
      "real estate automation",
      "freelancer automation",
      "WABA integration",
      "WhatsApp automation",
      "CRM automation",
      "lead nurturing automation",
      "sales funnel automation",
      "DCore Systems",
    ],
    path: "/",
  }),
  coaches: withDefaults({
    title: `Coaches CRM Automation & Lead Nurturing Platform | ${SITE_NAME}`,
    description:
      "Automate coaching lead capture, follow-ups, and sales pipeline management with WhatsApp automation, CRM automation, and WABA integration workflows.",
    keywords: [
      "coaching automation platform",
      "coaches CRM automation",
      "lead nurturing automation for coaches",
      "WhatsApp automation for coaches",
      "WABA integration for coaching",
      "sales funnel automation for coaches",
    ],
    path: "/solutions/coaches",
  }),
  realEstate: withDefaults({
    title: `Real Estate Lead Nurturing & CRM Automation | ${SITE_NAME}`,
    description:
      "Convert more property inquiries using real estate CRM automation, WhatsApp automation, and WABA integration for site-visit reminders and sales follow-ups.",
    keywords: [
      "real estate automation",
      "property lead nurturing automation",
      "real estate CRM automation",
      "WhatsApp automation real estate",
      "WABA integration real estate",
      "sales funnel automation real estate",
    ],
    path: "/solutions/real-estate",
  }),
  freelancers: withDefaults({
    title: `Freelancers CRM, Follow-up & Sales Automation | ${SITE_NAME}`,
    description:
      "Help freelancers automate lead qualification, client follow-ups, proposals, and payments with CRM automation, WhatsApp automation, and WABA integration.",
    keywords: [
      "freelancer automation platform",
      "freelancer CRM automation",
      "lead nurturing automation freelancers",
      "WhatsApp automation freelancers",
      "WABA integration freelancers",
      "sales funnel automation freelancers",
    ],
    path: "/solutions/freelancers",
  }),
} as const;

export type SeoPresetKey = keyof typeof SEO_PAGE_PRESETS;
