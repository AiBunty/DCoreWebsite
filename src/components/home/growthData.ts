import { MiniChartType } from "@/components/charts/MiniChart";

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
    role: "Operations Head",
    industry: "Manufacturing SME",
    metric: "+34% Faster lead response",
    timeframe: "in 45 days",
    used: "WhatsApp API + CRM workflows",
    chartType: "steady",
    values: [8, 10, 13, 16, 19],
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    ownerName: "Neha R.",
    role: "Founder",
    industry: "Service Startup",
    metric: "+39% Qualified leads",
    timeframe: "in 60 days",
    used: "Automation funnels + lead scoring",
    chartType: "surge",
    values: [6, 9, 12, 18, 25],
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    ownerName: "Rohan M.",
    role: "CRM Manager",
    industry: "Healthcare Group",
    metric: "-27% Missed follow-ups",
    timeframe: "in 30 days",
    used: "CRM + broadcast reminders",
    chartType: "dip",
    values: [17, 16, 14, 13, 12],
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    ownerName: "Priya K.",
    role: "Growth Lead",
    industry: "Digital Agency",
    metric: "+52% Conversion-to-call rate",
    timeframe: "in 90 days",
    used: "WhatsApp journeys + analytics dashboard",
    chartType: "cumulative",
    values: [5, 8, 12, 18, 26],
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    ownerName: "Vikram D.",
    role: "Business Owner",
    industry: "Retail Chain",
    metric: "+22% Repeat engagement",
    timeframe: "in 45 days",
    used: "Bulk campaigns + segmented automation",
    chartType: "area",
    values: [9, 11, 14, 16, 19],
    avatar: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    ownerName: "Anita P.",
    role: "Client Success Lead",
    industry: "Consulting Firm",
    metric: "+31% Deal progression",
    timeframe: "in 60 days",
    used: "ERP tracking + CRM handoffs",
    chartType: "bars",
    values: [7, 10, 12, 16, 20],
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];
