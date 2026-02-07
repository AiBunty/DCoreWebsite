import { MiniChartType } from "@/components/charts/MiniChart";

const avatarSvg = (seed: string) => {
  const colors = ["#0f172a", "#1d4ed8", "#0f766e", "#9333ea", "#b45309"];
  const accent = colors[Math.abs(seed.charCodeAt(0)) % colors.length];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#e2e8f0" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="80" height="80" rx="40" fill="url(#grad)" />
      <circle cx="40" cy="32" r="14" fill="#f8fafc" />
      <rect x="18" y="50" width="44" height="20" rx="10" fill="#f8fafc" />
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export type GrowthStory = {
  ownerName: string;
  role: string;
  industry: string;
  metric: string;
  timeframe: string;
  used: string;
  chartType: MiniChartType;
  values: number[];
  avatar: string;
};

export const growthStories: GrowthStory[] = [
  {
    ownerName: "Amit S.",
    role: "Business Owner",
    industry: "Coaches",
    metric: "+26% Booking rate",
    timeframe: "in 30 days",
    used: "WhatsApp Automation + Funnels + CRM",
    chartType: "steady",
    values: [8, 11, 14, 17, 20],
    avatar: avatarSvg("coach"),
  },
  {
    ownerName: "Neha R.",
    role: "Founder",
    industry: "Real Estate",
    metric: "+41% Lead conversion",
    timeframe: "in 60 days",
    used: "Funnels + CRM + Workflows",
    chartType: "surge",
    values: [6, 9, 12, 20, 28],
    avatar: avatarSvg("estate"),
  },
  {
    ownerName: "Rohan M.",
    role: "Clinic Manager",
    industry: "Clinics",
    metric: "+32% Follow-ups",
    timeframe: "in 45 days",
    used: "WhatsApp Automation + CRM",
    chartType: "dip",
    values: [14, 12, 10, 15, 19],
    avatar: avatarSvg("clinic"),
  },
  {
    ownerName: "Priya K.",
    role: "Agency Lead",
    industry: "Agencies",
    metric: "+58% Revenue per lead",
    timeframe: "in 90 days",
    used: "CRM + Ads Launcher + Payments",
    chartType: "cumulative",
    values: [5, 8, 12, 18, 26],
    avatar: avatarSvg("agency"),
  },
  {
    ownerName: "Vikram D.",
    role: "Business Owner",
    industry: "Fitness",
    metric: "+22% Renewals",
    timeframe: "in 30 days",
    used: "Workflows + Payments + WhatsApp",
    chartType: "area",
    values: [9, 12, 16, 18, 21],
    avatar: avatarSvg("fitness"),
  },
  {
    ownerName: "Anita P.",
    role: "Consultant",
    industry: "Consultants",
    metric: "+35% Leads",
    timeframe: "in 45 days",
    used: "Funnels + CRM + WhatsApp",
    chartType: "bars",
    values: [6, 10, 12, 15, 19],
    avatar: avatarSvg("consult"),
  },
  {
    ownerName: "Sahil J.",
    role: "Freelancer",
    industry: "Freelancers",
    metric: "+18% Response time",
    timeframe: "in 30 days",
    used: "WhatsApp Automation + Workflows",
    chartType: "steady",
    values: [10, 12, 13, 15, 17],
    avatar: avatarSvg("free"),
  },
  {
    ownerName: "Meera T.",
    role: "Marketing Lead",
    industry: "Events",
    metric: "+29% Inquiries",
    timeframe: "in 60 days",
    used: "IG Automation + CRM + Funnels",
    chartType: "surge",
    values: [7, 9, 11, 16, 23],
    avatar: avatarSvg("event"),
  },
  {
    ownerName: "Arjun V.",
    role: "Operations Lead",
    industry: "Health Clinics",
    metric: "+27% Booking rate",
    timeframe: "in 45 days",
    used: "WhatsApp Automation + CRM + Reminders",
    chartType: "area",
    values: [9, 11, 14, 17, 20],
    avatar: avatarSvg("health"),
  },
];
