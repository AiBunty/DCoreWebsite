export interface SeoRoute {
  path: string;
  priority?: number;
}

export const SEO_ROUTES: SeoRoute[] = [
  { path: "/", priority: 1.0 },
  { path: "/all-in-one-marketing-automation-platform", priority: 0.9 },
  { path: "/whatsapp-marketing-software", priority: 0.85 },
  { path: "/whatsapp-sender-software", priority: 0.85 },
  { path: "/whatsapp-business-api-included", priority: 0.85 },
  { path: "/instagram-automation", priority: 0.8 },
  { path: "/automation-funnels", priority: 0.8 },
  { path: "/ai-funnel-builder", priority: 0.8 },
  { path: "/ai-landing-page-builder", priority: 0.8 },
  { path: "/ai-chatbots-whatsapp", priority: 0.8 },
  { path: "/crm-with-whatsapp-automation", priority: 0.85 },
  { path: "/workflow-automation", priority: 0.85 },
  { path: "/form-builder", priority: 0.75 },
  { path: "/webhook-integrations", priority: 0.75 },
  { path: "/pabbly-integration", priority: 0.75 },
  { path: "/payment-gateway-integrations", priority: 0.8 },
  { path: "/pricing", priority: 0.7 },
  { path: "/dcore-vs-wati", priority: 0.7 },
  { path: "/dcore-vs-interakt", priority: 0.7 },
  { path: "/dcore-vs-zoko", priority: 0.7 },
  { path: "/dcore-vs-twilio-whatsapp", priority: 0.7 },
];

export const SEO_ROUTE_PATHS = SEO_ROUTES.map((route) => route.path);
